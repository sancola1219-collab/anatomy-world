/* ===== 動態引擎 — 生理過程動畫 =====
 * 通用：依 data-part 名稱自動套動畫；過程視圖逐階段循環播放。
 * 不需修改各 data 檔即可讓全部物種「動起來」。
 * app.js 在每次 renderView 後呼叫 Anim.apply(svg, view, on)。
 */
(function () {
  "use strict";

  // 過程／生命週期視圖：改為逐階段循環播放（而非器官律動）
  const PROCESS = /生命|週期|變態|世代|交替|授粉|受精|萌發|孢子與|出芽|花期|受精|循環圖/;

  // 器官名稱 → 動畫類別（關鍵字比對）
  function classify(name) {
    if (!name) return null;
    // 心臟：跳動（排除植物心皮、核心、中心）
    if (/心/.test(name) && !/心皮|核|中心/.test(name)) return "anim-beat";
    // 肺／鰓：呼吸起伏
    if (/肺|鰓/.test(name)) return "anim-breathe";
    // 血液／血管：脈動流動感
    if (/血|動脈|靜脈/.test(name)) return "anim-blood";
    // 眼睛：眨動（讓外觀視圖一眼看出「活著」）
    if (/眼/.test(name)) return "anim-blink";
    // 運動附肢：擺動
    if (/翅|翼|鰭|尾|觸手|觸角|腕|鞭毛|纖毛|步足|游泳足|口腕|鰭肢/.test(name)) return "anim-sway";
    return null;
  }

  const Anim = {
    _timer: null,
    _badge: null,

    ensureBadge() {
      if (this._badge) return this._badge;
      const canvas = document.getElementById("canvas");
      const b = document.createElement("div");
      b.id = "animBadge";
      b.innerHTML = `<span class="dot"></span><span id="animBadgeText">播放中</span>`;
      canvas.appendChild(b);
      this._badge = b;
      return b;
    },

    stop() {
      if (this._timer) { clearInterval(this._timer); this._timer = null; }
      const b = this._badge; if (b) b.classList.remove("show");
    },

    // 主入口
    apply(svg, view, on) {
      this.stop();
      if (!svg || !view) return;
      const isProcess = PROCESS.test(view.name || "") || PROCESS.test(view.id || "");
      this.ensureBadge();

      // 標記器官動畫類別（過程視圖不套器官律動，改用階段走播）
      const parts = Array.from(svg.querySelectorAll("[data-part]"));
      svg.classList.remove("anim-idle");
      if (!isProcess) {
        let tagged = 0;
        parts.forEach(el => {
          const cls = classify(el.dataset.part);
          if (cls) { el.classList.add(cls); tagged++; }
        });
        // 後備：沒有可動器官的視圖，整體輕微「呼吸」，讓每個畫面都看得出在動
        if (tagged === 0) svg.classList.add("anim-idle");
      }

      // 播放開關 class 掛在 #svgHost 容器上（CSS 選擇器 #svgHost.anim-on ...）
      const host = svg.parentElement || document.getElementById("svgHost");
      host.classList.toggle("anim-on", !!on);
      if (!on) return;

      if (isProcess) this.playStages(svg, parts);
    },

    // 過程視圖：逐階段高亮循環
    playStages(svg, parts) {
      // 以 data-part 元素為階段；去重同名，保留出現順序
      const seen = new Set();
      const stages = parts.filter(el => {
        const n = el.dataset.part;
        if (seen.has(n)) return false; seen.add(n); return true;
      });
      if (stages.length < 2) return;
      const badge = this.ensureBadge();
      const txt = document.getElementById("animBadgeText");
      badge.classList.add("show");
      let i = 0;
      const step = () => {
        stages.forEach(s => s.classList.remove("stage-lit"));
        const el = stages[i % stages.length];
        el.classList.add("stage-lit");
        if (txt) txt.textContent = "▶ " + el.dataset.part;
        i++;
      };
      step();
      this._timer = setInterval(step, 1300);
    }
  };

  window.Anim = Anim;
})();
