# 物種資料規格（data/*.js）

每個資料檔在載入時，對每個物種呼叫一次 `window.ANATOMY.register({...})`。

## 物件結構

```js
window.ANATOMY.register({
  id: "human",                 // 全域唯一，英文小寫+連字號
  name: "人類",                 // 顯示名（繁體中文）
  latin: "Homo sapiens",       // 學名（斜體顯示）
  emoji: "🧍",                  // 樹狀選單圖示
  kingdom: "animalia",         // animalia | plantae | fungi
  group: "mammals",            // 見 app.js TAXONOMY 內的 group key
  rank: "靈長目・人科",          // 補充分類階（選填，顯示為 chip）
  summary: "一段 2–3 句的教學摘要，說明此物種的構造重點。",
  views: [
    {
      id: "external",
      name: "外部形態",          // 分頁標籤名
      viewBox: "0 0 400 560",   // SVG 座標系
      svg: `...內層 SVG 標記...`, // 不含最外層 <svg> 標籤
      parts: [
        { name: "頭部", desc: "感覺器官集中處" },
        { name: "心臟", desc: "推動血液循環" }
      ]
    },
    // 可多個視圖：外部形態、骨骼、內臟/循環、其他系統…
  ]
});
```

## SVG 繪製規則（重要）

1. **只寫內層標記**，不要 `<svg>` 外層（引擎會自動包一層並套 viewBox）。
2. **顏色用寫實色調**：加 `<linearGradient>`/`<radialGradient>` 做立體感與明暗，避免死板純色。器官用接近真實的色（肌肉暗紅 #8f3b32、骨骼象牙白 #ece3cf、葉綠 #3f9d5a、靜脈藍 #3f6fb0…）。
3. **標註層**：所有引線與部位文字包在 `<g class="labels">…</g>` 內（引擎可切換顯示）。
   - 引線：`<line x1 y1 x2 y2 stroke="#555" stroke-width="1"/>`（細灰線）
   - 文字：`<text x y font-size="13" fill="var(--ink)">部位名</text>`（字級 12–14）
4. **可點器官**：讓主要構造的形狀元素加上 `data-part="部位名"`（名稱要與 `parts[].name` 完全一致），引擎會讓它可點擊、可從清單高亮。
5. **細節分層**：整體外觀畫在一個視圖；內部（骨骼、內臟、細胞…）另開視圖。近看時使用者放大即可看細節，所以線條與小構造要畫得夠精緻。
6. 座標系建議 viewBox 寬 360–460；高依比例。字用繁體中文。

## 範例片段

```html
<defs>
  <radialGradient id="muscle" cx="40%" cy="35%">
    <stop offset="0%" stop-color="#b0503f"/><stop offset="100%" stop-color="#7a2d26"/>
  </radialGradient>
</defs>
<ellipse data-part="心臟" cx="200" cy="240" rx="46" ry="58" fill="url(#muscle)" stroke="#5c211c"/>
<g class="labels">
  <line x1="246" y1="240" x2="330" y2="220"/>
  <text x="334" y="224" font-size="13">心臟</text>
</g>
```

> 每個 `id`（漸層等）在整個資料檔內要唯一，建議加物種前綴，如 `human-muscle`，避免多物種同頁衝突。
