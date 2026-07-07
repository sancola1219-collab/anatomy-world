/* ===== 血流引擎 =====
 * 任何視圖只要有 .flow-artery/.flow-vein 內的 <path>，就沿這些路徑自動生成
 * 擬真血球（雙凹圓盤紅血球＋白血球＋血小板），沿血管流動。
 * 每種動物的循環視圖只需畫好血管與 flow 路徑，血球自動產生。
 * app.js 在每次 renderView 後呼叫 BloodFlow.apply(svgHost)。
 */
window.BloodFlow = (function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  function E(tag, attrs) {
    const e = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  // 共用漸層（雙凹圓盤：中央淺、環深、緣中）
  function ensureDefs(svg) {
    if (svg.querySelector("#bf-rbc")) return;
    let defs = svg.querySelector("defs");
    if (!defs) { defs = E("defs"); svg.insertBefore(defs, svg.firstChild); }
    const mk = (id, stops) => {
      const g = E("radialGradient", { id: id, cx: "48%", cy: "42%", r: "58%" });
      stops.forEach(s => g.appendChild(E("stop", { offset: s[0], "stop-color": s[1] })));
      defs.appendChild(g);
    };
    mk("bf-rbc", [["0%", "#f19486"], ["45%", "#d43c31"], ["80%", "#a5190f"], ["100%", "#c62a20"]]);
    mk("bf-rbc-v", [["0%", "#a98198"], ["50%", "#8a3f66"], ["100%", "#93536f"]]); // 靜脈（缺氧）暗紫紅
  }

  // 血球外形
  function rbc(vein) {
    const g = E("g");
    g.appendChild(E("ellipse", { rx: 5, ry: 4.6, fill: vein ? "url(#bf-rbc-v)" : "url(#bf-rbc)", stroke: vein ? "#5f2a45" : "#8a1710", "stroke-width": 0.4 }));
    g.appendChild(E("ellipse", { rx: 2.1, ry: 1.9, fill: vein ? "#6f3453" : "#a01810", opacity: 0.5 })); // 中央凹陷
    return g;
  }
  function wbc() {
    const g = E("g");
    g.appendChild(E("circle", { r: 7, fill: "#eef4ef", stroke: "#bcccc4", "stroke-width": 0.6, opacity: 0.96 }));
    g.appendChild(E("circle", { cx: -2, cy: -1.5, r: 3, fill: "#7d5aa0", opacity: 0.82 }));
    g.appendChild(E("circle", { cx: 2.2, cy: 2, r: 2.6, fill: "#6a4a92", opacity: 0.82 }));
    return g;
  }
  function platelet() {
    const g = E("g");
    g.appendChild(E("ellipse", { rx: 2.6, ry: 1.7, fill: "#e7c85a", stroke: "#b8983a", "stroke-width": 0.3 }));
    return g;
  }

  function apply(svgHost) {
    const svg = svgHost && svgHost.querySelector("svg");
    if (!svg) return;
    // 只清除引擎自己產生的血球層，不動手繪的 .bf-cells（如血液顯微視圖）
    const old = svg.querySelector(".bf-cells[data-auto]");
    if (old) old.remove();
    const flows = Array.prototype.slice.call(svg.querySelectorAll(".flow-artery path, .flow-vein path"));
    if (!flows.length) return;
    ensureDefs(svg);

    const layer = E("g", { class: "bf-cells", "data-auto": "1" });
    let seq = 0;
    flows.forEach((p, pi) => {
      const d = p.getAttribute("d");
      if (!d) return;
      let len = 200;
      try { len = p.getTotalLength() || 200; } catch (e) {}
      const vein = !!(p.parentNode && p.parentNode.classList.contains("flow-vein"));
      const n = Math.max(2, Math.min(9, Math.round(len / 55)));
      const dur = Math.max(2.2, Math.min(6.5, len / 42));
      for (let i = 0; i < n; i++) {
        seq++;
        let cell;
        if (seq % 13 === 0) cell = wbc();            // 白血球（稀少）
        else if (seq % 6 === 0) cell = platelet();   // 血小板
        else cell = rbc(vein);                       // 紅血球
        cell.setAttribute("class", "cell");
        cell.style.offsetPath = "path('" + d + "')";
        cell.style.animationDuration = dur.toFixed(2) + "s";
        cell.style.animationDelay = (-(i / n) * dur - pi * 0.11).toFixed(2) + "s";
        layer.appendChild(cell);
      }
    });
    const labels = svg.querySelector(".labels");
    if (labels) svg.insertBefore(layer, labels); else svg.appendChild(layer);
  }

  return { apply: apply };
})();
