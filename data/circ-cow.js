/* ============================================================
 * 牛 COW — 循環系統（血管）2D 醫學插畫級詳圖
 * 側面視角，大型四足。半透明身體輪廓 + 動脈(flow-artery)
 * + 靜脈(flow-vein) + 大心臟 + 細微血管 + 標註。
 * 血球與流動由 js/bloodflow.js 自動生成（沿 flow-* 路徑）；
 * 心臟跳動由 js/anim.js 依 data-part="心臟" 自動套用。
 * ============================================================ */
window.ANATOMY.addView("cow", {
  id: "circulatory",
  name: "循環系統（血管）",
  viewBox: "0 0 560 360",
  svg: `
  <defs>
    <linearGradient id="cow-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e8dcc6"/>
      <stop offset="100%" stop-color="#cbb289"/>
    </linearGradient>
    <linearGradient id="cow-artery" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e0463a"/>
      <stop offset="55%" stop-color="#c8291f"/>
      <stop offset="100%" stop-color="#9c130c"/>
    </linearGradient>
    <linearGradient id="cow-vein" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6f7fb0"/>
      <stop offset="55%" stop-color="#4b5c92"/>
      <stop offset="100%" stop-color="#374777"/>
    </linearGradient>
    <radialGradient id="cow-heart" cx="42%" cy="38%" r="70%">
      <stop offset="0%" stop-color="#d6564c"/>
      <stop offset="55%" stop-color="#a51f18"/>
      <stop offset="100%" stop-color="#761009"/>
    </radialGradient>
  </defs>

  <!-- 牛側面剪影：粗壯軀幹、頭有角、四肢、尾 -->
  <g fill="url(#cow-body)" opacity="0.4" stroke="#9c7b52" stroke-width="1.2">
    <path d="M96 150
             C88 128 96 112 116 104
             C126 84 150 80 168 92
             C176 82 184 84 186 96
             C198 92 210 96 214 108
             C230 104 250 108 262 120
             C300 116 360 116 410 124
             C452 130 486 140 500 162
             C512 180 508 204 490 212
             C486 232 476 246 466 250
             L462 250
             C458 236 450 230 442 232
             C438 246 430 256 420 258
             L414 258
             C412 244 404 238 396 240
             C300 244 236 244 186 240
             C182 254 174 262 164 262
             L158 262
             C156 248 148 242 140 244
             C136 258 128 266 118 266
             L112 266
             C108 250 102 240 96 238
             C86 220 84 196 92 182
             C82 172 84 156 96 150 Z"/>
    <!-- 頭與雙角 -->
    <path d="M116 104 C104 96 100 84 108 76 C112 90 122 96 130 94" />
    <path d="M168 92 C176 76 186 72 194 78 C186 84 180 92 178 100" />
    <!-- 尾 -->
    <path d="M496 168 C516 176 522 210 512 244 C508 256 504 258 500 254 C508 226 504 196 490 178" />
  </g>

  <!-- 靜脈系統（回心，暗藍紫）：主要靜脈放 flow-vein -->
  <g class="flow-vein" fill="none" stroke="url(#cow-vein)" stroke-width="5" stroke-linecap="round">
    <path data-part="前腔靜脈" d="M300 210 C258 214 216 214 176 208 C156 204 142 200 134 192"/>
    <path data-part="後腔靜脈" d="M300 210 C340 214 386 216 430 214 C452 212 470 206 480 196"/>
    <path data-part="頸靜脈" d="M176 208 C160 190 146 168 138 142 C132 122 130 108 132 96"/>
    <path data-part="肝門靜脈" d="M320 214 C332 236 352 250 380 252"/>
    <path data-part="前肢靜脈" d="M150 224 C146 244 142 262 138 282 C136 296 136 306 138 316"/>
    <path data-part="後肢靜脈" d="M446 226 C450 246 452 264 452 284 C452 298 450 308 448 318"/>
  </g>

  <!-- 動脈系統（離心，鮮紅）：主要動脈放 flow-artery -->
  <g class="flow-artery" fill="none" stroke="url(#cow-artery)" stroke-width="5" stroke-linecap="round">
    <path data-part="主動脈" d="M296 198 C334 176 384 168 434 170 C462 172 482 180 492 194 L492 194"/>
    <path data-part="頸動脈" d="M290 196 C252 180 214 162 190 138 C172 118 162 104 160 92"/>
    <path data-part="肺動脈" d="M282 200 C268 186 258 172 254 156 C252 146 254 138 260 132"/>
    <path data-part="腹腔動脈" d="M340 194 C348 214 362 228 384 234"/>
    <path data-part="前肢動脈" d="M170 210 C164 232 158 252 154 274 C152 290 152 302 154 314"/>
    <path data-part="後肢動脈" d="M456 200 C462 222 466 244 466 266 C466 282 464 296 462 310"/>
  </g>

  <!-- 細微血管（微血管網、分支）：不進 flow 群組 -->
  <g fill="none" stroke-width="0.9" stroke-linecap="round">
    <g stroke="#b23a30" opacity="0.55">
      <path d="M160 92 C154 84 150 78 152 72"/>
      <path d="M160 92 C168 86 174 82 178 78"/>
      <path d="M492 194 C500 196 506 200 508 206"/>
      <path d="M384 234 C392 240 400 244 410 246"/>
      <path d="M154 274 C148 278 144 284 144 292"/>
      <path d="M466 266 C472 270 476 276 476 284"/>
      <path d="M254 156 C248 150 244 146 244 140"/>
    </g>
    <g stroke="#4b5c92" opacity="0.5">
      <path d="M138 142 C130 138 124 134 122 128"/>
      <path d="M480 196 C488 200 494 206 496 214"/>
      <path d="M380 252 C388 256 396 258 406 258"/>
      <path d="M138 282 C132 286 128 292 128 300"/>
      <path d="M452 284 C458 288 462 294 462 302"/>
    </g>
    <!-- 微血管交織網（軀幹） -->
    <g stroke="#9c5a52" opacity="0.35">
      <path d="M250 200 C270 196 292 196 312 200"/>
      <path d="M330 202 C352 198 376 198 398 204"/>
      <path d="M210 202 C226 210 244 214 262 214"/>
      <path d="M360 208 C378 214 398 216 416 214"/>
    </g>
  </g>

  <!-- 心臟（很大，約 2–3 公斤）＋ 冠狀動脈 -->
  <g>
    <path data-part="心臟"
          d="M300 176
             C282 158 258 160 250 182
             C244 198 254 214 278 232
             C288 240 296 248 300 256
             C304 248 312 240 322 232
             C346 214 356 198 350 182
             C342 160 318 158 300 176 Z"
          fill="url(#cow-heart)" stroke="#5c1512" stroke-width="1.6"/>
    <!-- 冠狀動脈 -->
    <g fill="none" stroke="#7a140d" stroke-width="1.4" stroke-linecap="round" opacity="0.9">
      <path d="M300 182 C292 196 288 212 292 228"/>
      <path d="M300 182 C308 196 312 212 308 228"/>
      <path d="M280 194 C296 200 306 200 320 194"/>
    </g>
  </g>

  <!-- 標註（引線細灰、字 fill var(--ink)） -->
  <g class="labels" font-size="13" fill="var(--ink)">
    <g stroke="#9a9a9a" stroke-width="0.7">
      <line x1="300" y1="200" x2="300" y2="300"/>
      <line x1="470" y1="188" x2="520" y2="176"/>
      <line x1="170" y1="120" x2="126" y2="70"/>
      <line x1="150" y1="205" x2="70" y2="196"/>
      <line x1="456" y1="205" x2="524" y2="208"/>
      <line x1="258" y1="140" x2="214" y2="112"/>
      <line x1="360" y1="230" x2="392" y2="292"/>
      <line x1="154" y1="290" x2="110" y2="330"/>
      <line x1="464" y1="290" x2="510" y2="330"/>
    </g>
    <text x="284" y="316" text-anchor="middle">心臟</text>
    <text x="522" y="172" text-anchor="start">主動脈</text>
    <text x="122" y="64" text-anchor="end">頸動脈</text>
    <text x="66" y="200" text-anchor="end">前腔靜脈</text>
    <text x="528" y="212" text-anchor="start">後腔靜脈</text>
    <text x="210" y="108" text-anchor="end">頸靜脈</text>
    <text x="396" y="306" text-anchor="middle">腹腔動脈</text>
    <text x="106" y="344" text-anchor="middle">前肢血管</text>
    <text x="514" y="344" text-anchor="middle">後肢血管</text>
  </g>`,
  parts: [
    { name: "心臟", desc: "牛的心臟很大（約 2–3 公斤），是強力的幫浦，每分鐘推動大量血液以供應龐大的身體。" },
    { name: "主動脈", desc: "全身最粗的動脈，從左心室發出後沿脊椎下方（背側）向後延伸，把充氧血送往軀幹與後肢。" },
    { name: "頸動脈", desc: "沿頸部上行的動脈，把充氧血送到頭部與大腦；牛頸長，頸動脈也隨之延長。" },
    { name: "肺動脈", desc: "從右心室發出，把缺氧血送往肺臟進行氣體交換，是唯一輸送缺氧血的動脈。" },
    { name: "腹腔動脈", desc: "主動脈的重要分支，供應瘤胃等龐大消化器官與肝、脾，牛消化系統發達，需血量大。" },
    { name: "前肢動脈", desc: "由主動脈分出，向下供應前肢肌肉與蹄部組織。" },
    { name: "後肢動脈", desc: "主動脈末端延伸至後肢，供應強壯的後腿肌肉。" },
    { name: "前腔靜脈", desc: "收集頭、頸與前肢的缺氧血，匯流回右心房。" },
    { name: "後腔靜脈", desc: "收集軀幹後段與後肢的缺氧血，是體內最粗的靜脈，匯流回右心房。" },
    { name: "頸靜脈", desc: "頸部粗大的靜脈，把頭部的缺氧血帶回心臟；牛頸靜脈明顯，常作抽血部位。" },
    { name: "肝門靜脈", desc: "把消化道吸收的營養血送入肝臟處理後，再匯入後腔靜脈回心。" },
    { name: "前肢靜脈", desc: "收集前肢的缺氧血，向上匯入前腔靜脈。" },
    { name: "後肢靜脈", desc: "收集後肢的缺氧血，向前匯入後腔靜脈。" }
  ]
});
