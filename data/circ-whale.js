/* 藍鯨 循環系統（血管）2D 詳圖視圖
 * 側面流線視角。血流引擎會自動沿 .flow-artery / .flow-vein 內的 <path> 產生血球。
 */
window.ANATOMY.addView("whale", {
  id: "circulatory",
  name: "循環系統（血管）",
  viewBox: "0 0 620 320",
  svg: `
  <defs>
    <linearGradient id="whale-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8fb2c4"/>
      <stop offset="55%" stop-color="#5f8598"/>
      <stop offset="100%" stop-color="#3d5c6b"/>
    </linearGradient>
    <linearGradient id="whale-artery" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e2564a"/>
      <stop offset="100%" stop-color="#b21f18"/>
    </linearGradient>
    <linearGradient id="whale-vein" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#5a86b8"/>
      <stop offset="100%" stop-color="#2f4f7e"/>
    </linearGradient>
    <radialGradient id="whale-heart" cx="42%" cy="38%" r="65%">
      <stop offset="0%" stop-color="#c1352c"/>
      <stop offset="70%" stop-color="#8f1a14"/>
      <stop offset="100%" stop-color="#6c110c"/>
    </radialGradient>
  </defs>

  <!-- 鯨側面剪影：流線身體、噴氣孔、胸鰭、水平尾鰭 -->
  <g fill="url(#whale-body)" opacity="0.4" stroke="#4a6270" stroke-width="1.2">
    <path d="M60 178
             C 90 138, 175 120, 275 122
             C 360 124, 445 132, 505 150
             C 520 154, 530 158, 538 162
             C 548 156, 560 150, 575 150
             C 566 160, 560 168, 558 176
             C 566 184, 574 194, 582 206
             C 566 204, 552 200, 540 194
             C 528 202, 512 210, 490 216
             C 420 234, 320 238, 235 232
             C 150 226, 92 210, 62 190
             C 56 186, 56 182, 60 178 Z"/>
    <!-- 噴氣孔 -->
    <ellipse cx="128" cy="132" rx="7" ry="3.4" fill="#2f4653" opacity="0.9" stroke="none"/>
    <!-- 眼 -->
    <circle cx="112" cy="168" r="3.4" fill="#22343d" opacity="0.9" stroke="none"/>
    <!-- 下頜溝紋 -->
    <path d="M64 186 C 110 200, 150 208, 185 210" fill="none" stroke="#4a6270" stroke-width="0.9" opacity="0.7"/>
    <path d="M70 194 C 112 206, 150 214, 182 216" fill="none" stroke="#4a6270" stroke-width="0.9" opacity="0.7"/>
    <!-- 胸鰭 -->
    <path d="M198 218 C 208 250, 230 272, 258 280 C 244 262, 232 240, 226 218 Z"/>
    <!-- 背鰭（小） -->
    <path d="M430 132 C 442 116, 456 112, 466 116 C 458 122, 450 128, 446 136 Z"/>
  </g>

  <!-- 主要靜脈（缺氧血回心）：flow-vein -->
  <g class="flow-vein" fill="none" stroke="url(#whale-vein)" stroke-width="6" stroke-linecap="round">
    <path data-part="大靜脈" d="M560 176 C 500 186, 430 190, 360 188 C 300 186, 250 182, 205 178"/>
    <path data-part="頸靜脈" d="M205 178 C 172 176, 140 172, 112 166"/>
    <path data-part="胸鰭靜脈" d="M222 214 C 234 236, 246 256, 256 274"/>
  </g>

  <!-- 主要動脈（含氧血送全身）：flow-artery -->
  <g class="flow-artery" fill="none" stroke="url(#whale-artery)" stroke-width="6" stroke-linecap="round">
    <path data-part="主動脈" d="M198 172 C 270 168, 350 168, 430 172 C 480 174, 520 178, 552 182"/>
    <path data-part="頸動脈" d="M188 168 C 158 162, 132 156, 116 150"/>
    <path data-part="胸鰭動脈" d="M214 200 C 226 224, 238 246, 248 266"/>
    <path data-part="尾動脈" d="M552 182 C 540 190, 546 196, 556 200"/>
  </g>

  <!-- 細微血管（微血管網）到頭部 / 胸鰭 / 尾鰭 -->
  <g fill="none" stroke-width="1" stroke-linecap="round">
    <path d="M116 150 C 104 146, 96 140, 92 132" stroke="#c0392b" opacity="0.7"/>
    <path d="M112 166 C 100 168, 92 172, 86 178" stroke="#3a5f8a" opacity="0.7"/>
    <path d="M248 266 C 256 272, 264 276, 272 278" stroke="#c0392b" opacity="0.6"/>
    <path d="M256 274 C 248 276, 240 276, 232 274" stroke="#3a5f8a" opacity="0.6"/>
    <path d="M556 200 C 566 202, 574 204, 580 206" stroke="#c0392b" opacity="0.6"/>
    <path d="M552 182 C 560 178, 568 172, 574 166" stroke="#c0392b" opacity="0.6"/>
    <path d="M430 172 C 436 160, 442 150, 448 142" stroke="#c0392b" opacity="0.55"/>
    <path d="M360 188 C 356 200, 352 210, 348 218" stroke="#3a5f8a" opacity="0.55"/>
  </g>

  <!-- 心臟（巨大）＋冠狀動脈 -->
  <g>
    <path data-part="心臟"
          d="M182 158
             C 170 142, 146 142, 140 160
             C 136 172, 142 186, 158 198
             C 168 206, 178 214, 186 224
             C 194 214, 206 204, 216 194
             C 232 180, 236 164, 226 152
             C 216 140, 196 142, 186 158 Z"
          fill="url(#whale-heart)" stroke="#5c1512" stroke-width="1.8"/>
    <!-- 冠狀動脈 -->
    <path d="M186 160 C 178 174, 172 188, 174 204" fill="none" stroke="#e2564a" stroke-width="1.4" opacity="0.85"/>
    <path d="M196 162 C 204 176, 210 190, 208 204" fill="none" stroke="#e2564a" stroke-width="1.4" opacity="0.85"/>
    <path d="M164 170 C 174 178, 186 182, 200 182" fill="none" stroke="#e2564a" stroke-width="1.1" opacity="0.75"/>
  </g>

  <!-- 標註 -->
  <g class="labels" font-size="13" fill="var(--ink)">
    <line x1="184" y1="182" x2="150" y2="250" stroke="#9aa7ad" stroke-width="0.8"/>
    <text x="112" y="264">心臟（地球最大）</text>

    <line x1="360" y1="170" x2="360" y2="96" stroke="#9aa7ad" stroke-width="0.8"/>
    <text x="330" y="90">主動脈</text>

    <line x1="360" y1="188" x2="410" y2="266" stroke="#9aa7ad" stroke-width="0.8"/>
    <text x="392" y="280">大靜脈</text>

    <line x1="150" y1="158" x2="118" y2="112" stroke="#9aa7ad" stroke-width="0.8"/>
    <text x="70" y="106">頸動脈</text>

    <line x1="160" y1="174" x2="130" y2="288" stroke="#9aa7ad" stroke-width="0.8"/>
    <text x="98" y="302">頸靜脈</text>

    <line x1="232" y1="234" x2="300" y2="256" stroke="#9aa7ad" stroke-width="0.8"/>
    <text x="304" y="260">胸鰭動脈</text>

    <line x1="252" y1="270" x2="322" y2="294" stroke="#9aa7ad" stroke-width="0.8"/>
    <text x="326" y="298">胸鰭靜脈</text>

    <line x1="552" y1="188" x2="558" y2="240" stroke="#9aa7ad" stroke-width="0.8"/>
    <text x="522" y="256">尾動脈</text>

    <line x1="128" y1="132" x2="150" y2="70" stroke="#9aa7ad" stroke-width="0.8"/>
    <text x="140" y="64">噴氣孔</text>
  </g>`,
  parts: [
    { name: "心臟", desc: "藍鯨的心臟是地球上最大的心臟，重量可達數百公斤、體積如小汽車，每次搏動推送大量血液，靜止時心跳每分鐘僅約 2 下。" },
    { name: "主動脈", desc: "藍鯨的主動脈極為粗大，管徑寬到足以讓成人通過，負責把含氧血從心臟輸送到全身。" },
    { name: "大靜脈", desc: "全身缺氧血經由巨大的腔靜脈匯集回流心臟，管壁薄、管腔寬，血流量驚人。" },
    { name: "頸動脈", desc: "由主動脈分出、向前送血到巨大的頭部與腦部的動脈。" },
    { name: "頸靜脈", desc: "把頭部缺氧血帶回心臟的靜脈；鯨潛水時具豐富的血管網以調節血流。" },
    { name: "胸鰭動脈", desc: "供血給胸鰭的動脈，胸鰭內有逆流熱交換血管網以保留體溫。" },
    { name: "胸鰭靜脈", desc: "把胸鰭的血液帶回體幹，與動脈緊貼形成逆流熱交換，減少散熱。" },
    { name: "尾動脈", desc: "沿身體延伸至強壯尾部（尾鰭）的動脈，供應推進肌群大量含氧血。" }
  ]
});
