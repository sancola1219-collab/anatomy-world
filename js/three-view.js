/* ===== 3D 檢視引擎 =====
 * ThreeView.open(hostEl, modelId) 建立可旋轉/縮放/分層的 3D 場景。
 * 依賴 vendor/three.min.js、vendor/OrbitControls.js、js/model3d.js。
 */
window.ThreeView = (function () {
  "use strict";
  const T = window.THREE;

  let state = null;

  function makeLabelSprite(text) {
    const cv = document.createElement("canvas");
    cv.width = 256; cv.height = 72;
    const ctx = cv.getContext("2d");
    ctx.fillStyle = "rgba(20,40,55,0.82)";
    roundRect(ctx, 6, 14, 244, 44, 12); ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "bold 34px 'Noto Sans TC',sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(text, 128, 38);
    const tex = new T.CanvasTexture(cv);
    tex.anisotropy = 4;
    const spr = new T.Sprite(new T.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
    spr.scale.set(0.42, 0.12, 1);
    return spr;
  }
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  const ThreeView = {
    supported(modelId) { return !!(T && window.MODELS3D && window.MODELS3D[modelId]); },

    open(host, modelId, opts) {
      this.close();
      if (!this.supported(modelId)) return false;
      opts = opts || {};
      const w = host.clientWidth || 800, h = host.clientHeight || 600;

      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(42, w / h, 0.1, 100);
      camera.position.set(0, 0.2, 3.0);
      const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);
      host.appendChild(renderer.domElement);

      // 燈光
      scene.add(new T.HemisphereLight(0xffffff, 0x54606c, 0.95));
      const key = new T.DirectionalLight(0xffffff, 0.85); key.position.set(2, 3, 2.5); scene.add(key);
      const fill = new T.DirectionalLight(0xbcd2e0, 0.35); fill.position.set(-2, 1, -1.5); scene.add(fill);

      const controls = new T.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true; controls.dampingFactor = 0.08;
      controls.minDistance = 1.2; controls.maxDistance = 6; controls.enablePan = false;
      controls.autoRotate = true; controls.autoRotateSpeed = 0.9;

      const def = window.MODELS3D[modelId].build(T);
      const root = new T.Group();
      def.layers.forEach(l => { l.group.visible = (l.id === "body"); root.add(l.group); });
      scene.add(root);
      if (def.target) controls.target.set(def.target[0], def.target[1], def.target[2]);

      // 標註 sprites
      const labelGroup = new T.Group(); scene.add(labelGroup);
      const labels = (def.labels || []).map(l => {
        const s = makeLabelSprite(l.text);
        s.position.set(l.pos[0], l.pos[1], l.pos[2]);
        s.userData.layer = l.layer;
        labelGroup.add(s);
        return s;
      });

      state = { host, scene, camera, renderer, controls, root, def, labels, raf: 0, active: new Set(["body"]) };

      // 疊層 UI
      buildLayerBar(host, def, opts.onReady);
      this._applyLayers();

      const loop = () => {
        state.raf = requestAnimationFrame(loop);
        controls.update();
        renderer.render(scene, camera);
      };
      loop();
      this._resize = () => {
        const W = host.clientWidth, H = host.clientHeight;
        camera.aspect = W / H; camera.updateProjectionMatrix(); renderer.setSize(W, H);
      };
      window.addEventListener("resize", this._resize);
      return true;
    },

    toggleLayer(id) {
      if (!state) return;
      if (id === "body") { // 外觀常駐可切換透明
        if (state.active.has("body")) state.active.delete("body"); else state.active.add("body");
      } else {
        if (state.active.has(id)) state.active.delete(id); else state.active.add(id);
      }
      this._applyLayers();
    },
    setAutoRotate(on) { if (state) state.controls.autoRotate = on; },

    _applyLayers() {
      if (!state) return;
      const showInner = state.active.has("skeleton") || state.active.has("organs");
      state.def.layers.forEach(l => {
        const on = state.active.has(l.id);
        l.group.visible = on;
        if (l.translucentBody) {
          l.group.traverse(o => {
            if (o.isMesh) {
              o.material.transparent = showInner;
              o.material.opacity = showInner ? 0.22 : 1;
              o.material.depthWrite = !showInner;
            }
          });
        }
      });
      state.labels.forEach(s => { s.visible = state.active.has(s.userData.layer); });
      // 更新按鈕狀態
      state.host.querySelectorAll(".t3d-layer").forEach(b =>
        b.classList.toggle("on", state.active.has(b.dataset.layer)));
    },

    close() {
      if (this._resize) { window.removeEventListener("resize", this._resize); this._resize = null; }
      if (!state) return;
      cancelAnimationFrame(state.raf);
      state.renderer.dispose();
      state.scene.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) { const m = o.material; (Array.isArray(m) ? m : [m]).forEach(x => { if (x.map) x.map.dispose(); x.dispose && x.dispose(); }); }
      });
      const bar = state.host.querySelector(".t3d-bar"); if (bar) bar.remove();
      if (state.renderer.domElement && state.renderer.domElement.parentNode)
        state.renderer.domElement.parentNode.removeChild(state.renderer.domElement);
      state = null;
    }
  };

  function buildLayerBar(host, def, onReady) {
    const bar = document.createElement("div");
    bar.className = "t3d-bar";
    def.layers.forEach(l => {
      const b = document.createElement("button");
      b.className = "t3d-layer" + (l.id === "body" ? " on" : "");
      b.dataset.layer = l.id; b.textContent = l.name;
      b.onclick = () => ThreeView.toggleLayer(l.id);
      bar.appendChild(b);
    });
    const hint = document.createElement("span");
    hint.className = "t3d-hint"; hint.textContent = "拖曳旋轉 · 滾輪縮放";
    bar.appendChild(hint);
    host.appendChild(bar);
    if (onReady) onReady();
  }

  return ThreeView;
})();
