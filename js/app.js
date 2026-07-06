/* ===== 生物構造教學室 — 核心引擎 =====
 * 資料檔透過 window.ANATOMY.register(organism) 註冊。
 * organism 結構見 data/SCHEMA.md。
 */
(function () {
  "use strict";

  // 分類學骨架：界 → 類群。物種由各 data 檔註冊時歸位。
  const TAXONOMY = {
    animalia: {
      name: "動物界", emoji: "🐾", color: "var(--animal)",
      groups: {
        mammals:      { name: "哺乳綱", emoji: "🦴" },
        birds:        { name: "鳥綱",   emoji: "🐦" },
        reptiles:     { name: "爬蟲綱", emoji: "🦎" },
        amphibians:   { name: "兩生綱", emoji: "🐸" },
        fish:         { name: "魚類",   emoji: "🐟" },
        insects:      { name: "昆蟲綱", emoji: "🦋" },
        arachnids:    { name: "蛛形綱", emoji: "🕷️" },
        crustaceans:  { name: "甲殼類", emoji: "🦐" },
        mollusks:     { name: "軟體動物門", emoji: "🐙" },
        annelids:     { name: "環節動物門", emoji: "🪱" },
        echinoderms:  { name: "棘皮動物門", emoji: "⭐" },
        cnidarians:   { name: "刺胞動物門", emoji: "🪼" }
      }
    },
    plantae: {
      name: "植物界", emoji: "🌿", color: "var(--plant)",
      groups: {
        angiosperms: { name: "被子植物（開花植物）", emoji: "🌸" },
        gymnosperms: { name: "裸子植物", emoji: "🌲" },
        ferns:       { name: "蕨類植物", emoji: "🌿" },
        bryophytes:  { name: "苔蘚植物", emoji: "🍃" },
        algae:       { name: "藻類", emoji: "🌊" }
      }
    },
    fungi: {
      name: "真菌界", emoji: "🍄", color: "var(--fungi)",
      groups: {
        basidiomycota: { name: "擔子菌（蕈菇）", emoji: "🍄" },
        molds:         { name: "黴菌與酵母", emoji: "🧫" }
      }
    }
  };

  const registry = [];          // 所有物種
  const byId = {};

  const ANATOMY = {
    register(org) {
      if (!org || !org.id) return;
      if (byId[org.id]) { console.warn("重複 id:", org.id); return; }
      byId[org.id] = org;
      registry.push(org);
    },
    // 為既有物種附加一個視圖（供各自獨立檔案擴充，如循環系統）
    addView(id, view) {
      const o = byId[id];
      if (!o || !view) return;
      o.views = o.views || [];
      if (o.views.some(v => v.id === view.id)) return;
      o.views.push(view);
    },
    boot() { App.init(); },
    _registry: registry,
    _tax: TAXONOMY
  };
  window.ANATOMY = ANATOMY;

  // ---------- 檢視器狀態 ----------
  const view = { scale: 1, x: 0, y: 0, min: 0.25, max: 8 };
  let current = null;       // 目前物種
  let currentView = 0;      // 目前視圖 index

  const App = {
    init() {
      this.el = {
        tree: document.getElementById("taxTree"),
        total: document.getElementById("totalCount"),
        svgHost: document.getElementById("svgHost"),
        pan: document.getElementById("pan"),
        canvas: document.getElementById("canvas"),
        zoomLevel: document.getElementById("zoomLevel"),
        viewTabs: document.getElementById("viewTabs"),
        toggleLabels: document.getElementById("toggleLabels"),
        toggleAnim: document.getElementById("toggleAnim"),
        btn3D: document.getElementById("btn3D"),
        threeHost: document.getElementById("three-host"),
        infoEmpty: document.getElementById("infoEmpty"),
        infoContent: document.getElementById("infoContent"),
        infoEmoji: document.getElementById("infoEmoji"),
        infoName: document.getElementById("infoName"),
        infoLatin: document.getElementById("infoLatin"),
        infoTax: document.getElementById("infoTax"),
        infoSummary: document.getElementById("infoSummary"),
        partList: document.getElementById("partList"),
        search: document.getElementById("searchBox"),
        searchCount: document.getElementById("searchCount"),
        hint: document.getElementById("hint")
      };
      this.el.total.textContent = registry.length;
      this.buildTree();
      this.bindViewer();
      this.bindChrome();
      // 預設載入第一個物種
      if (registry.length) this.load(registry[0].id);
      // 深連結：?sp=<物種id>&view=<視圖id> 開啟指定物種與視圖
      const sp = /[?&]sp=([^&]+)/.exec(location.search);
      if (sp && byId[decodeURIComponent(sp[1])]) {
        this.load(decodeURIComponent(sp[1]));
        const vm = /[?&]view=([^&]+)/.exec(location.search);
        if (vm) {
          const vi = (current.views || []).findIndex(v => v.id === decodeURIComponent(vm[1]));
          if (vi >= 0) { currentView = vi; this.renderView(); this.renderViewTabs(); }
        }
      }
      // 深連結：?3d 或 ?3d=<物種id> 直接開啟 3D 立體檢視
      const m3d = /[?&]3d(?:=([^&]+))?/.exec(location.search);
      if (m3d) {
        const id = m3d[1] && byId[decodeURIComponent(m3d[1])] ? decodeURIComponent(m3d[1]) : null;
        if (id) this.load(id);
        if (window.ThreeView && current && ThreeView.supported(current.id)) {
          this.enter3D();
          const lm = /[?&]layer=([^&]+)/.exec(location.search);
          if (lm) { const want = lm[1].split(","); ["body"].concat(want).forEach(()=>{});
            // 預設只有 body 開；把要顯示的層打開，body 若不在清單則關閉
            if (!want.includes("body")) ThreeView.toggleLayer("body");
            want.forEach(l => { if (l !== "body") ThreeView.toggleLayer(l); });
          }
        }
      }
    },

    // ---------- 分類樹 ----------
    buildTree(filter) {
      const tree = this.el.tree;
      tree.innerHTML = "";
      let shown = 0;
      Object.entries(TAXONOMY).forEach(([kKey, k]) => {
        const groupEls = [];
        Object.entries(k.groups).forEach(([gKey, g]) => {
          let sp = registry.filter(o => o.kingdom === kKey && o.group === gKey);
          if (filter) {
            sp = sp.filter(o => matchOrg(o, filter));
          }
          if (!sp.length) return;
          shown += sp.length;
          const spEls = sp.map(o => {
            const li = ce("div", "species");
            li.dataset.id = o.id;
            li.innerHTML = `<span class="sp-emoji">${o.emoji || "•"}</span><span>${o.name}</span><span class="sp-latin">${o.latin || ""}</span>`;
            li.onclick = () => this.load(o.id);
            return li;
          });
          const gEl = ce("div", "group");
          const gHead = ce("div", "group-head");
          gHead.innerHTML = `<span class="g-emoji">${g.emoji}</span><span>${g.name}</span><span class="chev">▾</span><span class="tax-chip" style="margin-left:6px">${sp.length}</span>`;
          gHead.onclick = () => gEl.classList.toggle("collapsed");
          const gWrap = ce("div", "species-wrap");
          spEls.forEach(e => gWrap.appendChild(e));
          gEl.append(gHead, gWrap);
          groupEls.push(gEl);
        });
        if (!groupEls.length) return;
        const kEl = ce("div", "kingdom");
        kEl.style.setProperty("--k-color", k.color);
        const kHead = ce("div", "kingdom-head");
        const kCount = registry.filter(o => o.kingdom === kKey).length;
        kHead.innerHTML = `<span class="k-emoji">${k.emoji}</span><span>${k.name}</span><span class="tax-chip">${kCount}</span><span class="chev">▾</span>`;
        kHead.onclick = () => kEl.classList.toggle("collapsed");
        const gWrapAll = ce("div", "group-wrap");
        groupEls.forEach(e => gWrapAll.appendChild(e));
        kEl.append(kHead, gWrapAll);
        tree.appendChild(kEl);
      });
      if (filter) {
        this.el.searchCount.textContent = shown ? `${shown} 筆` : "無結果";
      } else {
        this.el.searchCount.textContent = "";
      }
    },

    // ---------- 載入物種 ----------
    load(id) {
      const org = byId[id];
      if (!org) return;
      current = org;
      currentView = 0;
      // 高亮
      document.querySelectorAll(".species").forEach(e =>
        e.classList.toggle("active", e.dataset.id === id));
      // 若有真實照片，放在最前面當預設視圖（第一眼看到的是真實照片）
      if (window.PHOTOS && window.PHOTOS[org.id] &&
          !(org.views || []).some(v => v.id === "photo")) {
        (org.views = org.views || []).unshift({ id: "photo", name: "📷 實景照片", photo: true });
      }
      this.renderViewTabs();
      this.renderView();
      this.renderInfo();
      // 更新 3D 按鈕可用性；切換物種時若在 3D 則重載或退出
      this.refresh3DButton();
      if (this.is3D) {
        if (window.ThreeView && ThreeView.supported(org.id)) this.enter3D();
        else this.exit3D();
      }
    },

    refresh3DButton() {
      const ok = window.ThreeView && current && ThreeView.supported(current.id);
      this.el.btn3D.style.display = ok || this.is3D ? "" : "none";
      this.el.btn3D.classList.toggle("active", !!this.is3D);
    },

    enter3D() {
      if (!window.ThreeView || !ThreeView.supported(current.id)) return;
      this.is3D = true;
      this.el.pan.hidden = true;
      this.el.threeHost.hidden = false;
      this.el.hint.style.display = "none";
      ThreeView.open(this.el.threeHost, current.id);
      this.el.btn3D.classList.add("active");
    },
    exit3D() {
      this.is3D = false;
      if (window.ThreeView) ThreeView.close();
      this.el.threeHost.hidden = true;
      this.el.pan.hidden = false;
      this.el.hint.style.display = "";
      this.el.btn3D.classList.remove("active");
      this.refresh3DButton();
    },

    renderViewTabs() {
      const tabs = this.el.viewTabs;
      tabs.innerHTML = "";
      (current.views || []).forEach((v, i) => {
        const t = ce("div", "view-tab" + (i === currentView ? " active" : ""));
        t.textContent = v.name;
        t.onclick = () => { currentView = i; this.renderView(); this.renderViewTabs(); };
        tabs.appendChild(t);
      });
    },

    renderView() {
      const v = (current.views || [])[currentView];
      if (!v) { this.el.svgHost.innerHTML = "<p style='padding:40px;color:#888'>此視圖尚無圖示</p>"; return; }
      if (v.photo) { this.renderPhoto(); return; }
      const vb = v.viewBox || "0 0 400 400";
      this.el.svgHost.innerHTML =
        `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" width="${sizeFrom(vb)}">${v.svg}</svg>`;
      this.resetView();
      // 綁定熱點 → 高亮部位清單
      this.el.svgHost.querySelectorAll("[data-part]").forEach(node => {
        node.classList.add("hot");
        node.addEventListener("click", () => this.flashPart(node.dataset.part));
      });
      this.applyLabelToggle();
      this.applyAnim();
      if (window.BloodFlow) window.BloodFlow.apply(this.el.svgHost);
    },

    applyAnim() {
      const svg = this.el.svgHost.querySelector("svg");
      if (window.Anim) {
        window.Anim.apply(svg, (current.views || [])[currentView], this.el.toggleAnim.checked);
      }
    },

    renderPhoto() {
      const id = current.id;
      const meta = (window.PHOTOS && window.PHOTOS[id]) || {};
      this.el.svgHost.innerHTML =
        `<div class="photo-view">
           <img src="assets/photos/${id}.jpg" alt="${current.name}"
                onerror="this.parentNode.innerHTML='&lt;p style=\\'padding:40px;color:#888\\'&gt;此物種尚無實景照片&lt;/p&gt;'">
           <a class="photo-credit" href="${meta.page || '#'}" target="_blank" rel="noopener">
             📷 真實照片 · 來源：Wikimedia Commons（點擊看授權與作者）
           </a>
         </div>`;
      this.resetView();
      this.el.svgHost.classList.remove("hide-labels");
    },

    renderInfo() {
      this.el.infoEmpty.hidden = true;
      this.el.infoContent.hidden = false;
      this.el.infoEmoji.textContent = current.emoji || "🧬";
      this.el.infoName.textContent = current.name;
      this.el.infoLatin.textContent = current.latin || "";
      const k = TAXONOMY[current.kingdom];
      const g = k && k.groups[current.group];
      this.el.infoTax.innerHTML =
        [k && k.name, g && g.name, current.rank].filter(Boolean)
          .map(t => `<span class="tax-chip">${t}</span>`).join("");
      this.el.infoSummary.textContent = current.summary || "";
      // 部位清單：彙整所有視圖的 parts
      const parts = [];
      (current.views || []).forEach(v => (v.parts || []).forEach(p => parts.push(p)));
      const seen = new Set();
      this.el.partList.innerHTML = parts.filter(p => {
        if (seen.has(p.name)) return false; seen.add(p.name); return true;
      }).map(p =>
        `<li data-part="${p.name}"><b>${p.name}</b><span class="pl-desc">${p.desc || ""}</span></li>`
      ).join("");
      this.el.partList.querySelectorAll("li").forEach(li => {
        li.onclick = () => this.flashPart(li.dataset.part);
      });
    },

    flashPart(name) {
      // 在 SVG 中找到對應熱點並閃爍；若在其他視圖則切換
      let found = false;
      const tryFlash = () => {
        this.el.svgHost.querySelectorAll(`[data-part="${cssEsc(name)}"]`).forEach(n => {
          n.classList.remove("flash"); void n.getBBox; n.classList.add("flash");
          setTimeout(() => n.classList.remove("flash"), 1200);
          found = true;
        });
      };
      tryFlash();
      if (!found) {
        // 找含該 part 的視圖
        const idx = (current.views || []).findIndex(v => (v.parts || []).some(p => p.name === name));
        if (idx >= 0 && idx !== currentView) {
          currentView = idx; this.renderView(); this.renderViewTabs();
          setTimeout(tryFlash, 60);
        }
      }
      // 高亮清單項
      this.el.partList.querySelectorAll("li").forEach(li =>
        li.style.borderColor = li.dataset.part === name ? "var(--accent)" : "transparent");
    },

    // ---------- 縮放 / 平移 ----------
    bindViewer() {
      const c = this.el.canvas;
      c.addEventListener("wheel", e => {
        e.preventDefault();
        const rect = c.getBoundingClientRect();
        const mx = e.clientX - rect.left - rect.width / 2;
        const my = e.clientY - rect.top - rect.height / 2;
        const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
        this.zoomAt(mx, my, factor);
      }, { passive: false });

      let drag = null;
      c.addEventListener("pointerdown", e => {
        drag = { x: e.clientX, y: e.clientY, ox: view.x, oy: view.y };
        c.classList.add("grabbing"); c.setPointerCapture(e.pointerId);
      });
      c.addEventListener("pointermove", e => {
        if (!drag) return;
        view.x = drag.ox + (e.clientX - drag.x);
        view.y = drag.oy + (e.clientY - drag.y);
        this.apply();
      });
      const up = () => { drag = null; c.classList.remove("grabbing"); };
      c.addEventListener("pointerup", up);
      c.addEventListener("pointercancel", up);

      // 工具列
      document.getElementById("viewerToolbar").addEventListener("click", e => {
        const act = e.target.closest("[data-act]");
        if (!act) return;
        const a = act.dataset.act;
        if (a === "zoomin") this.zoomAt(0, 0, 1.25);
        else if (a === "zoomout") this.zoomAt(0, 0, 1 / 1.25);
        else if (a === "reset") this.resetView();
        else if (a === "full") this.toggleFull();
      });
      this.el.toggleLabels.addEventListener("change", () => this.applyLabelToggle());
      this.el.toggleAnim.addEventListener("change", () => this.applyAnim());
      this.el.btn3D.addEventListener("click", () => {
        if (this.is3D) this.exit3D(); else this.enter3D();
      });
    },

    zoomAt(mx, my, factor) {
      const ns = clamp(view.scale * factor, view.min, view.max);
      const real = ns / view.scale;
      view.x = mx - (mx - view.x) * real;
      view.y = my - (my - view.y) * real;
      view.scale = ns;
      this.apply();
    },
    apply() {
      this.el.pan.style.transform =
        `translate(-50%,-50%) translate(${view.x}px,${view.y}px) scale(${view.scale})`;
      this.el.zoomLevel.textContent = Math.round(view.scale * 100) + "%";
    },
    resetView() { view.scale = 1; view.x = 0; view.y = 0; this.apply(); },

    applyLabelToggle() {
      this.el.svgHost.classList.toggle("hide-labels", !this.el.toggleLabels.checked);
    },
    toggleFull() {
      const w = document.getElementById("viewerWrap");
      if (!document.fullscreenElement) w.requestFullscreen && w.requestFullscreen();
      else document.exitFullscreen();
    },

    // ---------- 頂欄 ----------
    bindChrome() {
      let t;
      this.el.search.addEventListener("input", e => {
        clearTimeout(t);
        const q = e.target.value.trim();
        t = setTimeout(() => this.buildTree(q || null), 120);
      });
      document.getElementById("btnTheme").onclick = () => {
        const cur = document.documentElement.getAttribute("data-theme");
        document.documentElement.setAttribute("data-theme", cur === "dark" ? "" : "dark");
      };
      const modal = document.getElementById("guideModal");
      document.getElementById("btnGuide").onclick = () => modal.hidden = false;
      modal.addEventListener("click", e => {
        if (e.target === modal || e.target.hasAttribute("data-close")) modal.hidden = true;
      });
    }
  };

  // ---------- 工具 ----------
  function ce(tag, cls) { const e = document.createElement(tag); if (cls) e.className = cls; return e; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function cssEsc(s) { return (window.CSS && CSS.escape) ? CSS.escape(s) : s.replace(/"/g, '\\"'); }
  function sizeFrom(vb) { const p = vb.split(/\s+/).map(Number); const w = p[2] || 400; return Math.min(w, 520); }
  function matchOrg(o, q) {
    q = q.toLowerCase();
    if (o.name.toLowerCase().includes(q)) return true;
    if ((o.latin || "").toLowerCase().includes(q)) return true;
    const parts = [];
    (o.views || []).forEach(v => (v.parts || []).forEach(p => parts.push(p.name)));
    return parts.some(n => n.toLowerCase().includes(q)) ||
           (o.summary || "").toLowerCase().includes(q);
  }
})();
