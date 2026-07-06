/* ===== 貓・循環系統（血管）詳圖 =====
 * 側面視角（四足水平身體）。主要動脈放於 .flow-artery、主要靜脈放於 .flow-vein，
 * 血球與流動效果由 js/bloodflow.js 依這些路徑自動生成；心臟含 data-part="心臟" 會自動跳動。
 */
window.ANATOMY.addView("cat", {
  id: "circulatory",
  name: "循環系統（血管）",
  viewBox: "0 0 520 340",
  svg: `
  <defs>
    <linearGradient id="cat-artery" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e0453f"/><stop offset="100%" stop-color="#a11c1c"/>
    </linearGradient>
    <linearGradient id="cat-vein" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3f7fd0"/><stop offset="100%" stop-color="#24488f"/>
    </linearGradient>
    <radialGradient id="cat-heart" cx="42%" cy="35%" r="72%">
      <stop offset="0%" stop-color="#c33b32"/><stop offset="100%" stop-color="#7d1a17"/>
    </radialGradient>
    <linearGradient id="cat-body" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f3ddc7"/><stop offset="100%" stop-color="#e2bd9c"/>
    </linearGradient>
  </defs>

  <!-- 半透明貓側面剪影（頭 / 頸 / 軀幹 / 四肢 / 長尾） -->
  <g fill="url(#cat-body)" opacity="0.4" stroke="#b98d5f" stroke-width="1.2" stroke-linejoin="round">
    <!-- 身體主輪廓：由頭經背、臀、後腿、腹、前腿回到胸 -->
    <path d="M118 96
             C104 86 92 84 84 90 C78 82 70 80 66 86 C64 78 58 76 54 82
             C52 92 56 104 66 112 C58 118 54 128 58 140 C64 152 80 158 98 156
             C112 156 126 152 138 148
             C176 150 214 148 262 146 C300 145 336 146 366 150
             C388 152 406 158 420 168
             C432 176 442 178 452 176 C462 174 470 168 472 160
             C474 152 470 146 462 146 C454 146 448 150 444 156
             C438 150 428 148 420 150
             C398 138 372 132 344 130 C346 214 348 258 350 300 L364 300
             C366 252 366 210 362 176 C368 208 370 250 370 300 L384 300
             C386 250 384 206 378 172 C382 176 388 178 394 176
             C398 210 398 254 398 300 L412 300
             C412 250 410 204 404 168 C402 152 396 142 386 138
             C400 136 414 130 424 120 C446 118 468 122 488 132
             C494 134 498 132 498 126 C498 118 490 110 476 106
             C452 98 424 96 398 100 C356 106 312 110 268 112
             C232 114 198 114 168 110
             C170 168 172 234 174 300 L188 300
             C190 240 190 176 186 122 C192 172 194 240 194 300 L208 300
             C210 236 208 168 202 116
             C176 116 148 112 128 104 Z"/>
    <!-- 頭部 -->
    <ellipse cx="74" cy="104" rx="30" ry="24"/>
    <!-- 耳朵 -->
    <path d="M60 84 L52 66 L72 78 Z M84 82 L92 64 L98 84 Z"/>
    <!-- 長尾 -->
    <path d="M452 172 C476 168 496 156 508 138 C512 130 510 124 504 124
             C498 124 494 130 490 138 C482 154 468 164 452 168 Z"/>
  </g>

  <!-- 靜脈（藍，主要靜脈放 flow-vein，供血流引擎沿路徑生成血球） -->
  <g class="flow-vein" fill="none" stroke="url(#cat-vein)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path data-part="前腔靜脈" d="M210 176 C198 172 186 168 176 160 C162 150 140 142 118 138 C104 136 90 138 82 146"/>
    <path data-part="後腔靜脈" d="M214 178 C244 178 286 176 328 176 C356 176 380 178 398 184"/>
    <path data-part="頸靜脈" d="M176 160 C158 150 138 136 122 118 C110 104 100 96 88 92"/>
    <path data-part="前肢靜脈" d="M138 148 C142 190 146 244 150 290"/>
    <path data-part="後肢靜脈" d="M398 184 C400 224 402 262 404 296"/>
  </g>

  <!-- 動脈（紅，主要動脈放 flow-artery） -->
  <g class="flow-artery" fill="none" stroke="url(#cat-artery)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path data-part="主動脈" d="M206 190 C204 176 206 166 214 162 C244 160 286 160 330 160 C362 160 392 162 416 168"/>
    <path data-part="頸動脈" d="M204 182 C186 174 168 160 150 144 C134 130 118 118 100 110"/>
    <path data-part="前肢動脈" d="M150 168 C154 208 160 250 166 292"/>
    <path data-part="後肢動脈" d="M416 168 C418 208 420 250 422 294"/>
    <path data-part="尾動脈" d="M416 168 C438 166 462 160 484 148"/>
  </g>

  <!-- 末梢微血管網（靜態，紅＋藍細血管，增加細節密度） -->
  <g fill="none" stroke-width="0.8" stroke-linecap="round" opacity="0.85">
    <g stroke="#c33">
      <path d="M100 110 L92 104 M100 110 L94 116 M100 110 L104 102 M88 92 L82 86 M88 92 L94 88"/>
      <path d="M166 292 L162 302 M166 292 L170 302 M166 292 L174 298 M160 292 L156 302"/>
      <path d="M422 294 L418 304 M422 294 L426 304 M422 294 L430 300 M416 294 L412 304"/>
      <path d="M484 148 L492 142 M484 148 L490 154 M484 148 L494 150"/>
    </g>
    <g stroke="#4a7fc0">
      <path d="M82 146 L74 140 M82 146 L76 152 M88 92 L80 88"/>
      <path d="M150 290 L146 300 M150 290 L154 300 M150 290 L158 296"/>
      <path d="M404 296 L400 306 M404 296 L408 306 M404 296 L412 302"/>
    </g>
  </g>

  <!-- 心臟（位於胸腔，含 data-part="心臟" 會自動跳動；附冠狀動脈） -->
  <g>
    <!-- 大血管殘端 -->
    <path d="M204 182 C202 172 204 164 210 160 M212 180 C218 170 226 166 234 164 M200 186 C194 180 190 174 190 168"
          fill="none" stroke="#9a2b26" stroke-width="4.5" stroke-linecap="round" opacity="0.85"/>
    <path d="M210 184 C210 174 208 168 206 162" fill="none" stroke="#3f7fd0" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
    <!-- 心肌本體（心尖朝下前） -->
    <path data-part="心臟" d="M188 182 C176 178 166 186 166 200 C166 218 178 236 196 246 C206 252 214 254 222 249
             C230 244 235 232 238 220 C242 206 242 192 234 184 C227 177 216 178 210 186 C203 179 195 179 188 182 Z"
          fill="url(#cat-heart)" stroke="#5c1512" stroke-width="1.5"/>
    <!-- 冠狀動脈（前降支＋分支） -->
    <path d="M208 186 C205 204 200 222 194 240" fill="none" stroke="#d13a33" stroke-width="2" stroke-linecap="round"/>
    <path d="M206 204 C214 208 220 214 224 222 M202 222 C196 226 191 231 188 236 M204 194 C197 198 192 205 190 214"
          fill="none" stroke="#d13a33" stroke-width="1.3" stroke-linecap="round"/>
    <!-- 表面光澤 -->
    <ellipse cx="186" cy="198" rx="8" ry="6" fill="#e86a5f" opacity="0.4"/>
    <path d="M172 198 C176 214 186 228 198 238" fill="none" stroke="#e86a5f" stroke-width="1.8" opacity="0.35" stroke-linecap="round"/>
  </g>

  <!-- 標註（引線細灰線＋文字） -->
  <g class="labels" font-size="13" fill="var(--ink)">
    <line x1="100" y1="112" x2="40" y2="150" stroke="#888" stroke-width="1"/><text x="6" y="154">頸動脈</text>
    <line x1="88" y1="96" x2="30" y2="70" stroke="#888" stroke-width="1"/><text x="6" y="66">頸靜脈</text>
    <line x1="200" y1="212" x2="140" y2="290" stroke="#888" stroke-width="1"/><text x="108" y="304">心臟</text>
    <line x1="300" y1="160" x2="330" y2="120" stroke="#888" stroke-width="1"/><text x="308" y="112">主動脈</text>
    <line x1="300" y1="176" x2="270" y2="326" stroke="#888" stroke-width="1"/><text x="238" y="330">後腔靜脈</text>
    <line x1="176" y1="160" x2="150" y2="86" stroke="#888" stroke-width="1"/><text x="120" y="78">前腔靜脈</text>
    <line x1="160" y1="250" x2="120" y2="230" stroke="#888" stroke-width="1"/><text x="60" y="234">前肢動脈</text>
    <line x1="420" y1="250" x2="466" y2="234" stroke="#888" stroke-width="1"/><text x="470" y="238">後肢動脈</text>
    <line x1="480" y1="150" x2="500" y2="120" stroke="#888" stroke-width="1"/><text x="474" y="112">尾動脈</text>
  </g>`,
  parts: [
    { name: "心臟", desc: "貓的四腔幫浦，位於胸腔前段。右心送缺氧血入肺，左心把含氧血打向全身，靜止心率約每分鐘 140–220 下。" },
    { name: "主動脈", desc: "心臟輸出的最大動脈，沿脊椎向後延伸為降主動脈，沿途分出供應內臟與後肢的分支。" },
    { name: "頸動脈", desc: "自主動脈前端分出、沿頸部向前上行至頭部，供應腦與頭部含氧血。" },
    { name: "前腔靜脈", desc: "收集頭、頸與前肢的缺氧血，回流至右心房。" },
    { name: "後腔靜脈", desc: "收集軀幹後段、內臟與後肢的缺氧血，沿脊椎下方回流至右心房。" },
    { name: "頸靜脈", desc: "沿頸部兩側下行，將頭部缺氧血匯入前腔靜脈。" },
    { name: "前肢動脈", desc: "供應前肢肌肉與掌部的含氧血，對應人類的肱動脈。" },
    { name: "後肢動脈", desc: "供應後肢強健肌肉的含氧血，支持貓的跳躍與奔跑。" },
    { name: "尾動脈", desc: "沿長尾延伸的動脈，供應尾部肌肉與皮膚，維持平衡與體溫調節。" },
    { name: "前肢靜脈", desc: "將前肢的缺氧血匯回前腔靜脈。" },
    { name: "後肢靜脈", desc: "將後肢的缺氧血匯回後腔靜脈。" }
  ]
});
