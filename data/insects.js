/* ===== 昆蟲 昆蟲綱 解剖教材 =====
 * 界 animalia / 類群 insects
 * 每物種一次 window.ANATOMY.register({...})
 */

/* ---------- 1. 蝴蝶 ---------- */
window.ANATOMY.register({
  id: "butterfly",
  name: "蝴蝶",
  latin: "Lepidoptera",
  emoji: "🦋",
  kingdom: "animalia",
  group: "insects",
  rank: "鱗翅目",
  summary: "蝴蝶身體分頭、胸、腹三段，具兩對覆有鱗片的翅膀與六足；口器為可捲曲的虹吸式吸管，專吸花蜜。一生經歷卵、幼蟲、蛹、成蟲四階段，屬完全變態。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 460 420",
      svg: `
      <defs>
        <radialGradient id="butterfly-ext-wingU" cx="72%" cy="60%" r="80%">
          <stop offset="0%" stop-color="#ffd27a"/>
          <stop offset="30%" stop-color="#ff9d2e"/>
          <stop offset="62%" stop-color="#f4711b"/>
          <stop offset="100%" stop-color="#a83607"/>
        </radialGradient>
        <radialGradient id="butterfly-ext-wingL" cx="78%" cy="35%" r="85%">
          <stop offset="0%" stop-color="#ffc95f"/>
          <stop offset="55%" stop-color="#ee8018"/>
          <stop offset="100%" stop-color="#b0480c"/>
        </radialGradient>
        <linearGradient id="butterfly-ext-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1c130a"/>
          <stop offset="42%" stop-color="#5a4632"/>
          <stop offset="60%" stop-color="#6b5540"/>
          <stop offset="100%" stop-color="#221810"/>
        </linearGradient>
        <radialGradient id="butterfly-ext-eye" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stop-color="#5b5b64"/>
          <stop offset="60%" stop-color="#26262c"/>
          <stop offset="100%" stop-color="#0e0e10"/>
        </radialGradient>
        <radialGradient id="butterfly-ext-spot" cx="42%" cy="38%" r="70%">
          <stop offset="0%" stop-color="#3a4fb0"/>
          <stop offset="100%" stop-color="#101a44"/>
        </radialGradient>
        <pattern id="butterfly-ext-scale" width="7" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
          <path d="M0 5 Q3.5 1 7 5" fill="none" stroke="#8a3a06" stroke-width="0.5" opacity="0.35"/>
        </pattern>
      </defs>

      <!-- 左翅 -->
      <g>
        <!-- 前翅（上） -->
        <path data-part="翅（前翅）" d="M228 150 C186 96 120 52 62 60 C24 66 20 116 40 150 C64 190 150 206 200 196 C221 191 228 172 228 150 Z" fill="url(#butterfly-ext-wingU)" stroke="#5a2400" stroke-width="1.8"/>
        <path d="M228 150 C186 96 120 52 62 60 C24 66 20 116 40 150 C64 190 150 206 200 196 C221 191 228 172 228 150 Z" fill="url(#butterfly-ext-scale)"/>
        <!-- 後翅（下） -->
        <path data-part="翅（後翅）" d="M228 178 C190 206 118 214 78 258 C50 290 64 332 108 328 C158 323 204 274 224 224 C230 208 230 192 228 178 Z" fill="url(#butterfly-ext-wingL)" stroke="#5a2400" stroke-width="1.8"/>
        <path d="M228 178 C190 206 118 214 78 258 C50 290 64 332 108 328 C158 323 204 274 224 224 C230 208 230 192 228 178 Z" fill="url(#butterfly-ext-scale)"/>
        <!-- 翅緣深色帶 -->
        <path d="M62 60 C24 66 20 116 40 150 C64 190 150 206 200 196" fill="none" stroke="#3a1804" stroke-width="6" opacity="0.5"/>
        <path d="M78 258 C50 290 64 332 108 328 C158 323 204 274 224 224" fill="none" stroke="#3a1804" stroke-width="6" opacity="0.5"/>
        <!-- 翅脈（放射狀） -->
        <path d="M222 152 L70 96 M222 158 L52 132 M222 166 L64 168 M220 176 L96 214 M218 190 L110 268 M216 200 L128 312" stroke="#7a3405" stroke-width="1.1" fill="none" opacity="0.6"/>
        <!-- 前翅眼斑 + 後翅白斑列 -->
        <circle cx="118" cy="112" r="12" fill="url(#butterfly-ext-spot)"/>
        <circle cx="118" cy="112" r="4" fill="#fff3d6" opacity="0.9"/>
        <circle cx="94" cy="268" r="6" fill="#fff3d6" opacity="0.85"/>
        <circle cx="128" cy="290" r="6" fill="#fff3d6" opacity="0.85"/>
        <circle cx="164" cy="296" r="5" fill="#fff3d6" opacity="0.85"/>
      </g>

      <!-- 右翅（鏡像） -->
      <g transform="translate(456,0) scale(-1,1)">
        <path d="M228 150 C186 96 120 52 62 60 C24 66 20 116 40 150 C64 190 150 206 200 196 C221 191 228 172 228 150 Z" fill="url(#butterfly-ext-wingU)" stroke="#5a2400" stroke-width="1.8"/>
        <path d="M228 150 C186 96 120 52 62 60 C24 66 20 116 40 150 C64 190 150 206 200 196 C221 191 228 172 228 150 Z" fill="url(#butterfly-ext-scale)"/>
        <path d="M228 178 C190 206 118 214 78 258 C50 290 64 332 108 328 C158 323 204 274 224 224 C230 208 230 192 228 178 Z" fill="url(#butterfly-ext-wingL)" stroke="#5a2400" stroke-width="1.8"/>
        <path d="M228 178 C190 206 118 214 78 258 C50 290 64 332 108 328 C158 323 204 274 224 224 C230 208 230 192 228 178 Z" fill="url(#butterfly-ext-scale)"/>
        <path d="M62 60 C24 66 20 116 40 150 C64 190 150 206 200 196" fill="none" stroke="#3a1804" stroke-width="6" opacity="0.5"/>
        <path d="M78 258 C50 290 64 332 108 328 C158 323 204 274 224 224" fill="none" stroke="#3a1804" stroke-width="6" opacity="0.5"/>
        <path d="M222 152 L70 96 M222 158 L52 132 M222 166 L64 168 M220 176 L96 214 M218 190 L110 268 M216 200 L128 312" stroke="#7a3405" stroke-width="1.1" fill="none" opacity="0.6"/>
        <circle cx="118" cy="112" r="12" fill="url(#butterfly-ext-spot)"/>
        <circle cx="118" cy="112" r="4" fill="#fff3d6" opacity="0.9"/>
        <circle cx="94" cy="268" r="6" fill="#fff3d6" opacity="0.85"/>
        <circle cx="128" cy="290" r="6" fill="#fff3d6" opacity="0.85"/>
        <circle cx="164" cy="296" r="5" fill="#fff3d6" opacity="0.85"/>
      </g>

      <!-- 身體 三段 -->
      <ellipse data-part="頭部" cx="228" cy="118" rx="15" ry="14" fill="url(#butterfly-ext-body)" stroke="#160f08" stroke-width="1.4"/>
      <path data-part="胸部" d="M214 138 C214 128 242 128 242 138 C246 158 244 186 228 190 C212 186 210 158 214 138 Z" fill="url(#butterfly-ext-body)" stroke="#160f08" stroke-width="1.4"/>
      <!-- 胸部絨毛 -->
      <path d="M220 136 L216 128 M228 134 L228 126 M236 136 L240 128 M222 148 L217 143 M234 148 L239 143" stroke="#7a6448" stroke-width="1" opacity="0.7" stroke-linecap="round"/>
      <path data-part="腹部" d="M218 190 C216 250 240 250 238 190 Z" fill="url(#butterfly-ext-body)" stroke="#160f08" stroke-width="1.4"/>
      <!-- 腹部環節 -->
      <path d="M219 204 H237 M220 218 H236 M222 232 H234 M223 244 H233" stroke="#0e0a06" stroke-width="1" opacity="0.55"/>

      <!-- 複眼 -->
      <circle data-part="複眼" cx="221" cy="114" r="6" fill="url(#butterfly-ext-eye)"/>
      <circle cx="235" cy="114" r="6" fill="url(#butterfly-ext-eye)"/>
      <circle cx="219" cy="112" r="1.6" fill="#fff" opacity="0.7"/>
      <circle cx="233" cy="112" r="1.6" fill="#fff" opacity="0.7"/>

      <!-- 觸角（棒狀） -->
      <path data-part="觸角" d="M224 106 C210 78 200 54 190 40" stroke="#2a1c10" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M232 106 C246 78 256 54 266 40" stroke="#2a1c10" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <ellipse cx="190" cy="40" rx="3.5" ry="5" fill="#2a1c10"/>
      <ellipse cx="266" cy="40" rx="3.5" ry="5" fill="#2a1c10"/>

      <!-- 口器 虹吸式（捲曲吸管） -->
      <path data-part="口器（虹吸式）" d="M228 130 C230 148 244 156 242 142 C240 130 232 138 234 130" fill="none" stroke="#c98a2e" stroke-width="2" stroke-linecap="round"/>

      <!-- 六足 -->
      <g data-part="足（六足）" stroke="#241a10" stroke-width="2" fill="none" stroke-linecap="round">
        <path d="M216 148 C200 156 195 170 190 182"/>
        <path d="M216 160 C198 170 192 186 188 200"/>
        <path d="M216 172 C200 184 196 200 194 214"/>
        <path d="M240 148 C256 156 261 170 266 182"/>
        <path d="M240 160 C258 170 264 186 268 200"/>
        <path d="M240 172 C256 184 260 200 262 214"/>
      </g>

      <g class="labels">
        <line x1="222" y1="115" x2="330" y2="80"/>
        <text x="334" y="84" font-size="13" fill="var(--ink)">複眼</text>
        <line x1="190" y1="42" x2="130" y2="30"/>
        <text x="60" y="34" font-size="13" fill="var(--ink)">觸角（棒狀）</text>
        <line x1="240" y1="150" x2="345" y2="150"/>
        <text x="349" y="154" font-size="13" fill="var(--ink)">口器（虹吸式）</text>
        <line x1="230" y1="120" x2="335" y2="112"/>
        <text x="339" y="116" font-size="13" fill="var(--ink)">頭部</text>
        <line x1="230" y1="165" x2="345" y2="185"/>
        <text x="349" y="189" font-size="13" fill="var(--ink)">胸部</text>
        <line x1="235" y1="230" x2="335" y2="250"/>
        <text x="339" y="254" font-size="13" fill="var(--ink)">腹部</text>
        <line x1="150" y1="150" x2="70" y2="110"/>
        <text x="12" y="112" font-size="13" fill="var(--ink)">翅（前翅）</text>
        <line x1="120" y1="280" x2="60" y2="330"/>
        <text x="14" y="334" font-size="13" fill="var(--ink)">翅（後翅）</text>
        <line x1="220" y1="230" x2="150" y2="360"/>
        <text x="130" y="374" font-size="13" fill="var(--ink)">足（六足）</text>
      </g>`,
      parts: [
        { name: "頭部", desc: "第一體段，具複眼、觸角與虹吸式口器。" },
        { name: "胸部", desc: "第二體段，連接兩對翅與三對足，是運動中心。" },
        { name: "腹部", desc: "第三體段，含消化與生殖器官，分明顯環節。" },
        { name: "複眼", desc: "由數千個小眼組成，可感知移動與紫外光。" },
        { name: "觸角", desc: "末端膨大呈棒狀，主司嗅覺與平衡。" },
        { name: "口器（虹吸式）", desc: "細長吸管平時捲曲，用時伸直吸取花蜜。" },
        { name: "翅（前翅）", desc: "前對翅較大，表面覆蓋彩色鱗片。" },
        { name: "翅（後翅）", desc: "後對翅與前翅連動，提供升力與轉向。" },
        { name: "足（六足）", desc: "三對分節足，昆蟲共同特徵之一。" }
      ]
    },
    {
      id: "lifecycle",
      name: "生命週期（完全變態）",
      viewBox: "0 0 460 320",
      svg: `
      <defs>
        <radialGradient id="butterfly-egg" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#fdf3c0"/>
          <stop offset="100%" stop-color="#d9c25e"/>
        </radialGradient>
        <linearGradient id="butterfly-larva" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#8bc34a"/>
          <stop offset="100%" stop-color="#4e7d1e"/>
        </linearGradient>
        <linearGradient id="butterfly-pupa" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c2e07a"/>
          <stop offset="100%" stop-color="#7d9636"/>
        </linearGradient>
        <linearGradient id="butterfly-adultW" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ff9d2e"/>
          <stop offset="100%" stop-color="#b23c0a"/>
        </linearGradient>
      </defs>

      <!-- 循環箭頭 -->
      <path d="M110 90 A150 110 0 0 1 350 90" stroke="#c9a15a" stroke-width="2" fill="none" stroke-dasharray="6 5"/>
      <path d="M350 230 A150 110 0 0 1 110 230" stroke="#c9a15a" stroke-width="2" fill="none" stroke-dasharray="6 5"/>
      <path d="M348 92 l8 -2 l-6 8 Z" fill="#c9a15a"/>
      <path d="M112 228 l-8 2 l6 -8 Z" fill="#c9a15a"/>

      <!-- ① 卵 -->
      <g data-part="卵">
        <ellipse cx="70" cy="150" rx="20" ry="26" fill="url(#butterfly-egg)" stroke="#a68a2c"/>
        <path d="M56 140 Q70 132 84 140 M56 152 Q70 146 84 152 M58 164 Q70 158 82 164" stroke="#a68a2c" stroke-width="0.8" fill="none"/>
        <ellipse cx="66" cy="180" rx="9" ry="11" fill="url(#butterfly-egg)" stroke="#a68a2c"/>
      </g>

      <!-- ② 幼蟲 毛蟲 -->
      <g data-part="幼蟲（毛蟲）">
        <path d="M150 90 C180 70 220 70 250 88 C255 96 250 106 240 104 C210 92 190 92 160 104 C150 106 145 98 150 90 Z" fill="url(#butterfly-larva)" stroke="#3c5f16"/>
        <path d="M168 96 h64 M176 100 h50" stroke="#2e4a10" stroke-width="1"/>
        <circle cx="248" cy="90" r="3" fill="#1e300a"/>
      </g>

      <!-- ③ 蛹 -->
      <g data-part="蛹（蛹殼）">
        <path d="M370 80 C360 78 356 100 360 130 C363 150 385 150 388 130 C392 100 388 78 378 78 Z" fill="url(#butterfly-pupa)" stroke="#5b7027"/>
        <path d="M362 96 l24 6 M361 112 l26 6 M363 128 l22 6" stroke="#4a5c1e" stroke-width="0.9"/>
        <path d="M374 76 l0 -12" stroke="#5b7027" stroke-width="1.5"/>
      </g>

      <!-- ④ 成蟲 -->
      <g data-part="成蟲">
        <ellipse cx="230" cy="240" rx="5" ry="20" fill="#2a1c10"/>
        <path d="M228 230 C190 200 150 210 150 240 C150 262 195 262 228 248 Z" fill="url(#butterfly-adultW)" stroke="#5a2400"/>
        <path d="M232 230 C270 200 310 210 310 240 C310 262 265 262 232 248 Z" fill="url(#butterfly-adultW)" stroke="#5a2400"/>
        <path d="M226 224 C214 208 208 200 202 194 M234 224 C246 208 252 200 258 194" stroke="#2a1c10" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      </g>

      <g class="labels">
        <line x1="70" y1="150" x2="70" y2="230"/>
        <text x="34" y="248" font-size="13" fill="var(--ink)">① 卵</text>
        <line x1="200" y1="80" x2="200" y2="46"/>
        <text x="150" y="40" font-size="13" fill="var(--ink)">② 幼蟲（毛蟲）</text>
        <line x1="374" y1="105" x2="410" y2="105"/>
        <text x="392" y="70" font-size="13" fill="var(--ink)">③ 蛹（蛹殼）</text>
        <line x1="230" y1="255" x2="230" y2="300"/>
        <text x="196" y="314" font-size="13" fill="var(--ink)">④ 成蟲</text>
      </g>`,
      parts: [
        { name: "卵", desc: "雌蝶產於寄主植物葉上，是生命的起點。" },
        { name: "幼蟲（毛蟲）", desc: "大量進食、多次蛻皮的成長期，具咀嚼式口器。" },
        { name: "蛹（蛹殼）", desc: "不進食的靜止期，體內組織重組為成蟲構造。" },
        { name: "成蟲", desc: "羽化展翅，負責交配與繁殖，完成完全變態循環。" }
      ]
    }
  ]
});

/* ---------- 2. 甲蟲 ---------- */
window.ANATOMY.register({
  id: "beetle",
  name: "甲蟲",
  latin: "Coleoptera",
  emoji: "🪲",
  kingdom: "animalia",
  group: "insects",
  rank: "鞘翅目",
  summary: "甲蟲屬鞘翅目，前翅特化為堅硬的鞘翅，覆蓋並保護膜質的後翅；全身包覆幾丁質外骨骼，質地厚實、常帶金屬光澤。飛行時掀開鞘翅、展開後翅。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 400 480",
      svg: `
      <defs>
        <radialGradient id="beetle-ext-shell" cx="38%" cy="22%" r="90%">
          <stop offset="0%" stop-color="#8ff0c0"/>
          <stop offset="28%" stop-color="#2fb374"/>
          <stop offset="60%" stop-color="#128f56"/>
          <stop offset="85%" stop-color="#0a5a37"/>
          <stop offset="100%" stop-color="#043320"/>
        </radialGradient>
        <linearGradient id="beetle-ext-pronotum" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#6fd8a0"/>
          <stop offset="55%" stop-color="#1a9a60"/>
          <stop offset="100%" stop-color="#06422a"/>
        </linearGradient>
        <linearGradient id="beetle-ext-hind" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#e4eefa"/>
          <stop offset="100%" stop-color="#9fb6cf"/>
        </linearGradient>
        <radialGradient id="beetle-ext-head" cx="40%" cy="28%" r="80%">
          <stop offset="0%" stop-color="#3a9a64"/>
          <stop offset="100%" stop-color="#06301c"/>
        </radialGradient>
        <radialGradient id="beetle-ext-sheen" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- 後翅（掀開的膜質翅，示意在左側外露） -->
      <path data-part="後翅（膜質翅）" d="M150 210 C90 196 52 258 66 332 C78 384 128 362 160 300 C173 274 170 240 150 210 Z" fill="url(#beetle-ext-hind)" stroke="#7f97b3" opacity="0.85"/>
      <path d="M118 232 C130 280 142 312 152 336 M100 262 C118 296 138 322 156 340 M96 302 C118 322 138 334 152 342" stroke="#7f97b3" stroke-width="0.7" fill="none" opacity="0.75"/>

      <!-- 頭部 -->
      <ellipse data-part="頭部" cx="200" cy="88" rx="33" ry="27" fill="url(#beetle-ext-head)" stroke="#052316" stroke-width="1.6"/>
      <!-- 大顎 -->
      <path data-part="大顎" d="M186 64 C176 48 168 48 174 64 C177 70 183 68 186 64 Z M214 64 C224 48 232 48 226 64 C223 70 217 68 214 64 Z" fill="url(#beetle-ext-head)" stroke="#052316" stroke-width="1.6"/>
      <!-- 複眼 -->
      <circle cx="180" cy="84" r="7" fill="#0a1410"/>
      <circle cx="220" cy="84" r="7" fill="#0a1410"/>
      <circle cx="178" cy="82" r="2" fill="#5fb98a" opacity="0.7"/>
      <circle cx="218" cy="82" r="2" fill="#5fb98a" opacity="0.7"/>
      <!-- 觸角 -->
      <path data-part="觸角" d="M184 70 C160 54 150 44 138 40 M216 70 C240 54 250 44 262 40" stroke="#0a2a1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <circle cx="138" cy="40" r="3" fill="#0a2a1a"/>
      <circle cx="262" cy="40" r="3" fill="#0a2a1a"/>

      <!-- 前胸背板 -->
      <path data-part="前胸背板" d="M154 118 C158 104 242 104 246 118 C253 141 244 161 200 163 C156 161 147 141 154 118 Z" fill="url(#beetle-ext-pronotum)" stroke="#052316" stroke-width="1.6"/>
      <ellipse cx="185" cy="122" rx="22" ry="9" fill="url(#beetle-ext-sheen)" opacity="0.5"/>

      <!-- 鞘翅（前翅，硬化） -->
      <path data-part="鞘翅（前翅）" d="M158 166 C158 156 242 156 242 166 C260 262 250 402 200 432 C150 402 140 262 158 166 Z" fill="url(#beetle-ext-shell)" stroke="#052316" stroke-width="2"/>
      <!-- 中縫 + 縱溝（凹刻列） -->
      <line x1="200" y1="166" x2="200" y2="430" stroke="#04331e" stroke-width="2"/>
      <path d="M178 176 C172 262 175 362 190 417 M222 176 C228 262 225 362 210 417 M165 186 C162 262 168 342 185 402 M235 186 C238 262 232 342 215 402 M156 210 C155 280 162 350 182 400 M244 210 C245 280 238 350 218 400" stroke="#063d24" stroke-width="1" fill="none" opacity="0.6"/>
      <!-- 刻點列 -->
      <g fill="#04331e" opacity="0.45">
        <circle cx="178" cy="210" r="1"/><circle cx="178" cy="240" r="1"/><circle cx="180" cy="270" r="1"/><circle cx="182" cy="300" r="1"/>
        <circle cx="222" cy="210" r="1"/><circle cx="222" cy="240" r="1"/><circle cx="220" cy="270" r="1"/><circle cx="218" cy="300" r="1"/>
      </g>
      <!-- 金屬高光 -->
      <path d="M172 180 C168 240 172 320 184 382" stroke="#aaf5cc" stroke-width="2.4" fill="none" opacity="0.6"/>
      <ellipse cx="176" cy="200" rx="10" ry="26" fill="url(#beetle-ext-sheen)" opacity="0.5"/>

      <!-- 六足（外骨骼分節） -->
      <g data-part="足（六足）" stroke="#08301c" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M158 176 C120 174 100 194 82 208"/>
        <path d="M155 250 C112 250 90 274 70 291"/>
        <path d="M162 330 C122 340 98 372 80 392"/>
        <path d="M242 176 C280 174 300 194 318 208"/>
        <path d="M245 250 C288 250 310 274 330 291"/>
        <path d="M238 330 C278 340 302 372 320 392"/>
      </g>
      <!-- 足脛節分節點 -->
      <g fill="#043320">
        <circle cx="100" cy="196" r="2.4"/><circle cx="90" cy="274" r="2.4"/><circle cx="98" cy="372" r="2.4"/>
        <circle cx="300" cy="196" r="2.4"/><circle cx="310" cy="274" r="2.4"/><circle cx="302" cy="372" r="2.4"/>
      </g>

      <g class="labels">
        <line x1="200" y1="90" x2="300" y2="70"/>
        <text x="304" y="74" font-size="13" fill="var(--ink)">頭部</text>
        <line x1="186" y1="60" x2="120" y2="40"/>
        <text x="60" y="34" font-size="13" fill="var(--ink)">大顎（咀嚼式）</text>
        <line x1="138" y1="40" x2="80" y2="60"/>
        <text x="18" y="64" font-size="13" fill="var(--ink)">觸角</text>
        <line x1="200" y1="135" x2="310" y2="130"/>
        <text x="314" y="134" font-size="13" fill="var(--ink)">前胸背板</text>
        <line x1="200" y1="300" x2="320" y2="300"/>
        <text x="324" y="304" font-size="13" fill="var(--ink)">鞘翅（前翅）</text>
        <line x1="110" y1="290" x2="40" y2="300"/>
        <text x="8" y="290" font-size="13" fill="var(--ink)">後翅</text>
        <text x="8" y="306" font-size="13" fill="var(--ink)">（膜質翅）</text>
        <line x1="200" y1="410" x2="200" y2="452"/>
        <text x="150" y="466" font-size="13" fill="var(--ink)">外骨骼保護內部</text>
        <line x1="322" y1="392" x2="360" y2="392"/>
        <text x="336" y="420" font-size="13" fill="var(--ink)">足（六足）</text>
      </g>`,
      parts: [
        { name: "頭部", desc: "具複眼、觸角與強壯的咀嚼式大顎。" },
        { name: "大顎", desc: "咀嚼式口器，可咬碎植物、獵物或木材。" },
        { name: "觸角", desc: "感知氣味與環境，形態隨種類變化多樣。" },
        { name: "前胸背板", desc: "覆蓋前胸背側的硬盾，是甲蟲醒目的識別部位。" },
        { name: "鞘翅（前翅）", desc: "前翅硬化成鞘，平時覆蓋並保護後翅與腹部。" },
        { name: "後翅（膜質翅）", desc: "折疊於鞘翅下的膜質翅，飛行時才展開。" },
        { name: "足（六足）", desc: "三對分節足，外覆幾丁質外骨骼。" }
      ]
    }
  ]
});

/* ---------- 3. 蜜蜂 ---------- */
window.ANATOMY.register({
  id: "bee",
  name: "蜜蜂",
  latin: "Apis",
  emoji: "🐝",
  kingdom: "animalia",
  group: "insects",
  rank: "膜翅目・蜜蜂科",
  summary: "蜜蜂身體分頭、胸、腹三段，具大型複眼、舐吸式口器與兩對膜質翅。後足有花粉籃可搬運花粉，腹內蜜胃暫存花蜜；腹端的螫針是防禦武器。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 460 300",
      svg: `
      <defs>
        <radialGradient id="bee-ext-thorax" cx="42%" cy="30%" r="80%">
          <stop offset="0%" stop-color="#b78740"/>
          <stop offset="55%" stop-color="#8a5a1e"/>
          <stop offset="100%" stop-color="#43290a"/>
        </radialGradient>
        <linearGradient id="bee-ext-abdomen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffe081"/>
          <stop offset="45%" stop-color="#f6c534"/>
          <stop offset="100%" stop-color="#c98e14"/>
        </linearGradient>
        <linearGradient id="bee-ext-wing" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f4f8fd" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="#c3d2e4" stop-opacity="0.55"/>
        </linearGradient>
        <radialGradient id="bee-ext-eye" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stop-color="#6a5638"/>
          <stop offset="100%" stop-color="#171009"/>
        </radialGradient>
        <radialGradient id="bee-ext-head" cx="42%" cy="30%" r="80%">
          <stop offset="0%" stop-color="#5a4020"/>
          <stop offset="100%" stop-color="#241505"/>
        </radialGradient>
      </defs>

      <!-- 翅（兩對，半透明） -->
      <path data-part="翅（兩對膜質翅）" d="M198 96 C132 38 66 38 56 80 C50 110 112 122 178 110 C192 107 198 100 198 96 Z" fill="url(#bee-ext-wing)" stroke="#9fb2c8" stroke-width="1.2"/>
      <path d="M204 102 C152 58 100 60 88 92 C86 114 142 122 188 112 Z" fill="url(#bee-ext-wing)" stroke="#9fb2c8" opacity="0.8"/>
      <!-- 翅脈網 -->
      <path d="M88 68 L172 100 M76 86 L178 106 M110 52 L150 108 M140 50 L166 104" stroke="#9fb2c8" stroke-width="0.6" fill="none" opacity="0.85"/>
      <path d="M120 74 L150 92 M110 90 L140 100" stroke="#9fb2c8" stroke-width="0.5" fill="none" opacity="0.7"/>

      <!-- 頭部 -->
      <circle data-part="頭部" cx="330" cy="140" r="33" fill="url(#bee-ext-head)" stroke="#2e1c07" stroke-width="1.6"/>
      <!-- 頭部絨毛 -->
      <path d="M300 128 l-6 -3 M302 118 l-5 -5 M310 150 l-6 3 M318 160 l-4 5" stroke="#7a5a30" stroke-width="1" opacity="0.6" stroke-linecap="round"/>
      <!-- 複眼 -->
      <path data-part="複眼" d="M338 118 C360 116 367 138 357 157 C347 169 332 159 332 138 C332 126 333 118 338 118 Z" fill="url(#bee-ext-eye)"/>
      <path d="M338 124 l16 5 M335 134 l20 6 M336 146 l18 6 M340 156 l12 5" stroke="#3a2c18" stroke-width="0.6" opacity="0.7"/>
      <!-- 單眼 -->
      <circle cx="332" cy="114" r="2" fill="#2a1c08"/>
      <!-- 觸角（膝狀） -->
      <path data-part="觸角" d="M336 118 C346 100 350 92 366 90 C376 89 382 84 386 78 M328 116 C334 98 336 90 350 84" stroke="#2e1c07" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <!-- 舐吸式口器 -->
      <path data-part="口器（舐吸式）" d="M332 172 C330 190 336 206 340 218" stroke="#8a5a1e" stroke-width="3" fill="none" stroke-linecap="round"/>

      <!-- 胸部 -->
      <ellipse data-part="胸部" cx="255" cy="140" rx="45" ry="40" fill="url(#bee-ext-thorax)" stroke="#2e1c07" stroke-width="1.6"/>
      <!-- 絨毛質感（放射短線） -->
      <g stroke="#c79a54" stroke-width="1" opacity="0.5" stroke-linecap="round">
        <path d="M255 102 v-8 M232 108 l-6 -6 M278 108 l6 -6 M222 130 l-8 -3 M288 130 l8 -3 M232 172 l-6 6 M278 172 l6 6 M255 180 v8"/>
      </g>
      <path d="M225 118 C255 110 285 118 285 118" stroke="#3a2409" stroke-width="6" opacity="0.4"/>

      <!-- 腹部 三段之一，具黃黑條紋 -->
      <path data-part="腹部" d="M215 118 C160 108 88 118 88 150 C88 182 160 192 215 178 C245 170 245 126 215 118 Z" fill="url(#bee-ext-abdomen)" stroke="#7a5510" stroke-width="1.6"/>
      <path d="M182 115 C176 145 180 175 182 179 M152 114 C145 145 149 177 153 183 M122 120 C114 147 119 173 124 179 M98 132 C92 150 96 166 100 172" stroke="#2a1c08" stroke-width="8" opacity="0.9" fill="none" stroke-linecap="round"/>

      <!-- 螫針 -->
      <path data-part="螫針" d="M88 152 L56 152 L72 146 M56 152 L72 158" stroke="#1a120a" stroke-width="2.4" fill="none" stroke-linecap="round"/>

      <!-- 後足 + 花粉籃 -->
      <path data-part="花粉籃（後足）" d="M235 176 C230 210 220 234 214 254" stroke="#2e1c07" stroke-width="4" fill="none" stroke-linecap="round"/>
      <ellipse cx="212" cy="258" rx="11" ry="15" fill="#f0a91c" stroke="#8a5a1e" stroke-width="1.4"/>
      <path d="M208 250 l8 4 M206 258 l12 3 M208 266 l8 3" stroke="#c98812" stroke-width="0.8" opacity="0.7"/>
      <!-- 其他足 -->
      <g stroke="#2e1c07" stroke-width="3.4" fill="none" stroke-linecap="round">
        <path d="M255 178 C252 206 246 226 242 244"/>
        <path d="M275 172 C280 198 282 218 284 236"/>
        <path d="M300 168 C312 190 320 206 328 222"/>
        <path d="M320 168 C334 188 342 202 350 216"/>
      </g>

      <g class="labels">
        <line x1="356" y1="140" x2="420" y2="150"/>
        <text x="380" y="176" font-size="13" fill="var(--ink)">頭部</text>
        <line x1="348" y1="138" x2="410" y2="118"/>
        <text x="414" y="122" font-size="13" fill="var(--ink)">複眼</text>
        <line x1="378" y1="80" x2="420" y2="66"/>
        <text x="424" y="70" font-size="13" fill="var(--ink)">觸角</text>
        <line x1="338" y1="210" x2="400" y2="240"/>
        <text x="360" y="256" font-size="13" fill="var(--ink)">口器（舐吸式）</text>
        <line x1="255" y1="140" x2="255" y2="86"/>
        <text x="220" y="80" font-size="13" fill="var(--ink)">胸部</text>
        <line x1="150" y1="150" x2="150" y2="200"/>
        <text x="120" y="216" font-size="13" fill="var(--ink)">腹部</text>
        <line x1="70" y1="152" x2="30" y2="120"/>
        <text x="6" y="112" font-size="13" fill="var(--ink)">螫針</text>
        <line x1="212" y1="258" x2="180" y2="286"/>
        <text x="86" y="290" font-size="13" fill="var(--ink)">花粉籃（後足）</text>
        <line x1="130" y1="150" x2="200" y2="112"/>
        <text x="60" y="102" font-size="13" fill="var(--ink)">蜜胃（腹內）</text>
      </g>`,
      parts: [
        { name: "頭部", desc: "集中複眼、觸角與口器的感覺與取食中心。" },
        { name: "胸部", desc: "連接兩對翅與六足，是飛行與行走的動力段。" },
        { name: "腹部", desc: "具黃黑警戒條紋，內含消化、蜜胃與螫針。" },
        { name: "複眼", desc: "大型複眼加上頭頂三隻單眼，導航覓花。" },
        { name: "觸角", desc: "膝狀觸角偵測花香、費洛蒙與空氣流動。" },
        { name: "口器（舐吸式）", desc: "兼具咀嚼與伸長吸管，可咬蠟也可舐吸花蜜。" },
        { name: "翅（兩對膜質翅）", desc: "前後翅以小鉤相連，同步拍動產生升力。" },
        { name: "螫針", desc: "腹端特化的產卵管，工蜂用以注入毒液自衛。" },
        { name: "花粉籃（後足）", desc: "後足脛節凹陷加長毛，搬運沾濕的花粉團。" },
        { name: "蜜胃（腹內）", desc: "腹部前段的膨大囊袋，暫存花蜜運回蜂巢。" }
      ]
    }
  ]
});

/* ---------- 4. 螞蟻 ---------- */
window.ANATOMY.register({
  id: "ant",
  name: "螞蟻",
  latin: "Formicidae",
  emoji: "🐜",
  kingdom: "animalia",
  group: "insects",
  rank: "膜翅目・蟻科",
  summary: "螞蟻頭、胸、腹三段之間有明顯縊縮的腰節（腹柄），使腹部靈活。頭部具膝狀觸角與強壯大顎，是社會性昆蟲，多數工蟻無翅。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 460 260",
      svg: `
      <defs>
        <radialGradient id="ant-ext-head" cx="38%" cy="30%" r="80%">
          <stop offset="0%" stop-color="#a8542c"/>
          <stop offset="55%" stop-color="#7a3418"/>
          <stop offset="100%" stop-color="#33130a"/>
        </radialGradient>
        <radialGradient id="ant-ext-thorax" cx="40%" cy="28%" r="85%">
          <stop offset="0%" stop-color="#9a4826"/>
          <stop offset="55%" stop-color="#6e2f16"/>
          <stop offset="100%" stop-color="#33130a"/>
        </radialGradient>
        <radialGradient id="ant-ext-gaster" cx="34%" cy="26%" r="85%">
          <stop offset="0%" stop-color="#7a3418"/>
          <stop offset="45%" stop-color="#4a1c0c"/>
          <stop offset="100%" stop-color="#1a0803"/>
        </radialGradient>
      </defs>

      <!-- 頭部 -->
      <ellipse data-part="頭部" cx="90" cy="130" rx="46" ry="40" fill="url(#ant-ext-head)" stroke="#200a03" stroke-width="1.6"/>
      <ellipse cx="74" cy="112" rx="16" ry="12" fill="#c06a3a" opacity="0.3"/>
      <!-- 複眼 -->
      <circle cx="72" cy="112" r="7" fill="#120802"/>
      <circle cx="70" cy="110" r="2" fill="#8a5030" opacity="0.6"/>
      <!-- 大顎 -->
      <path data-part="大顎" d="M56 150 C36 156 26 148 34 138 C40 132 50 140 56 150 Z M60 158 C42 168 30 164 36 152 C42 146 54 150 60 158 Z" fill="url(#ant-ext-head)" stroke="#200a03" stroke-width="1.4"/>
      <!-- 膝狀觸角（明顯彎折） -->
      <path data-part="觸角（膝狀）" d="M78 104 C70 84 78 74 96 70 L146 36" stroke="#200a03" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M96 100 C90 82 98 74 114 72 L168 48" stroke="#200a03" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
      <circle cx="146" cy="36" r="3" fill="#200a03"/>
      <circle cx="168" cy="48" r="3" fill="#200a03" opacity="0.9"/>

      <!-- 胸部（併胸腹節） -->
      <ellipse data-part="胸部" cx="200" cy="132" rx="42" ry="30" fill="url(#ant-ext-thorax)" stroke="#200a03" stroke-width="1.6"/>
      <ellipse cx="188" cy="122" rx="18" ry="8" fill="#b0562e" opacity="0.3"/>

      <!-- 腰節（腹柄結節） -->
      <circle data-part="腰節（腹柄）" cx="258" cy="138" r="12" fill="url(#ant-ext-thorax)" stroke="#200a03" stroke-width="1.4"/>
      <circle cx="282" cy="140" r="9" fill="url(#ant-ext-thorax)" stroke="#200a03" stroke-width="1.4"/>

      <!-- 腹部（後腹／腹垂節） -->
      <ellipse data-part="腹部（後腹）" cx="350" cy="140" rx="60" ry="46" fill="url(#ant-ext-gaster)" stroke="#180803" stroke-width="1.6"/>
      <path d="M318 106 C328 140 326 170 318 182 M348 100 C354 140 352 178 346 186 M378 108 C384 140 382 172 376 180" stroke="#120602" stroke-width="1" fill="none" opacity="0.45"/>
      <ellipse cx="334" cy="120" rx="18" ry="11" fill="#8a3c1e" opacity="0.4"/>

      <!-- 六足 -->
      <g data-part="足（六足）" stroke="#200a03" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M185 158 C176 184 158 200 132 228"/>
        <path d="M205 160 C204 190 198 214 190 240"/>
        <path d="M222 158 C232 186 250 208 270 232"/>
        <path d="M188 110 C176 92 154 80 128 68"/>
        <path d="M210 108 C210 88 208 68 206 52"/>
        <path d="M225 112 C238 92 260 78 280 64"/>
      </g>
      <!-- 足關節點 -->
      <g fill="#200a03">
        <circle cx="158" cy="200" r="2"/><circle cx="198" cy="214" r="2"/><circle cx="250" cy="208" r="2"/>
        <circle cx="154" cy="80" r="2"/><circle cx="208" cy="68" r="2"/><circle cx="260" cy="78" r="2"/>
      </g>

      <g class="labels">
        <line x1="90" y1="130" x2="60" y2="200"/>
        <text x="30" y="216" font-size="13" fill="var(--ink)">頭部</text>
        <line x1="40" y1="150" x2="14" y2="150"/>
        <text x="6" y="140" font-size="13" fill="var(--ink)">大顎</text>
        <line x1="146" y1="36" x2="150" y2="18"/>
        <text x="130" y="14" font-size="13" fill="var(--ink)">觸角（膝狀）</text>
        <line x1="200" y1="132" x2="200" y2="90"/>
        <text x="176" y="84" font-size="13" fill="var(--ink)">胸部</text>
        <line x1="270" y1="138" x2="290" y2="92"/>
        <text x="256" y="86" font-size="13" fill="var(--ink)">腰節（腹柄）</text>
        <line x1="350" y1="140" x2="400" y2="200"/>
        <text x="360" y="216" font-size="13" fill="var(--ink)">腹部（後腹）</text>
        <line x1="270" y1="232" x2="300" y2="248"/>
        <text x="280" y="256" font-size="13" fill="var(--ink)">足（六足）</text>
      </g>`,
      parts: [
        { name: "頭部", desc: "具膝狀觸角、複眼與強壯大顎，是感覺與取食中心。" },
        { name: "大顎", desc: "咀嚼式大顎可搬運食物、築巢、防禦與攻擊。" },
        { name: "觸角（膝狀）", desc: "呈明顯膝狀彎折，主司嗅覺與觸覺，追蹤費洛蒙路徑。" },
        { name: "胸部", desc: "連接六足的運動段，工蟻的胸部通常無翅。" },
        { name: "腰節（腹柄）", desc: "胸腹之間縊縮的一至二個結節，賦予腹部高度靈活。" },
        { name: "腹部（後腹）", desc: "膨大的後腹容納消化與生殖器官，部分種類末端具螫針或蟻酸。" },
        { name: "足（六足）", desc: "三對細長分節足，善於快速行走與攀爬。" }
      ]
    }
  ]
});

/* ---------- 5. 蜻蜓 ---------- */
window.ANATOMY.register({
  id: "dragonfly",
  name: "蜻蜓",
  latin: "Odonata",
  emoji: "🪰",
  kingdom: "animalia",
  group: "insects",
  rank: "蜻蛉目",
  summary: "蜻蜓具佔據整個頭部的巨大複眼、兩對可獨立振動的長翅，以及細長的腹部。飛行能力極強，是空中捕食其他昆蟲的掠食者。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 480 300",
      svg: `
      <defs>
        <radialGradient id="dragonfly-ext-eye" cx="34%" cy="28%" r="80%">
          <stop offset="0%" stop-color="#8ff0e2"/>
          <stop offset="40%" stop-color="#2fc0aa"/>
          <stop offset="72%" stop-color="#1f9e8c"/>
          <stop offset="100%" stop-color="#0a4c44"/>
        </radialGradient>
        <radialGradient id="dragonfly-ext-thorax" cx="40%" cy="28%" r="85%">
          <stop offset="0%" stop-color="#5fbd78"/>
          <stop offset="55%" stop-color="#2f8848"/>
          <stop offset="100%" stop-color="#164a28"/>
        </radialGradient>
        <linearGradient id="dragonfly-ext-abdomen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#6fb0e0"/>
          <stop offset="45%" stop-color="#2f6fb0"/>
          <stop offset="100%" stop-color="#173c68"/>
        </linearGradient>
        <linearGradient id="dragonfly-ext-wing" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f4faff" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#cfe4f4" stop-opacity="0.4"/>
        </linearGradient>
      </defs>

      <!-- 上方兩翅 -->
      <path data-part="翅（前翅）" d="M150 118 C210 68 322 60 402 82 C422 88 420 104 398 106 C310 104 210 112 152 128 C142 130 142 122 150 118 Z" fill="url(#dragonfly-ext-wing)" stroke="#9fc0dc" stroke-width="1"/>
      <path data-part="翅（後翅）" d="M150 132 C210 150 312 160 398 158 C420 158 422 174 402 180 C322 202 210 192 150 146 C142 142 142 134 150 132 Z" fill="url(#dragonfly-ext-wing)" stroke="#9fc0dc" stroke-width="1"/>
      <!-- 對側翅（示意，稍淡） -->
      <path d="M148 116 C90 70 40 66 20 82 C10 90 14 102 34 104 C80 102 120 110 150 124 Z" fill="url(#dragonfly-ext-wing)" stroke="#9fc0dc" opacity="0.55"/>
      <path d="M148 134 C90 156 44 168 22 172 C10 174 12 186 30 188 C80 190 120 176 150 150 Z" fill="url(#dragonfly-ext-wing)" stroke="#9fc0dc" opacity="0.55"/>
      <!-- 翅脈網（縱脈＋橫脈） -->
      <path d="M168 106 L392 92 M172 118 L394 112 M174 128 L392 132 M174 138 L392 152 M174 148 L390 172" stroke="#9fc0dc" stroke-width="0.5" fill="none" opacity="0.8"/>
      <path d="M200 98 L200 128 M240 94 L240 130 M280 92 L280 132 M320 90 L320 134 M360 90 L360 152" stroke="#9fc0dc" stroke-width="0.45" fill="none" opacity="0.7"/>
      <path d="M200 148 L200 178 M250 152 L250 186 M300 156 L300 192 M350 160 L350 194" stroke="#9fc0dc" stroke-width="0.45" fill="none" opacity="0.6"/>
      <!-- 翅痣（前緣近端深色小塊） -->
      <rect x="378" y="86" width="16" height="7" rx="2" fill="#3a5f7a" opacity="0.85"/>
      <rect x="380" y="160" width="16" height="7" rx="2" fill="#3a5f7a" opacity="0.75"/>

      <!-- 頭部（幾乎全是複眼） -->
      <circle data-part="頭部" cx="110" cy="126" r="26" fill="url(#dragonfly-ext-thorax)" stroke="#0e3a1c" stroke-width="1.4"/>
      <path data-part="複眼（大複眼）" d="M94 102 C122 94 140 106 140 128 C140 150 118 158 96 150 C78 142 78 110 94 102 Z" fill="url(#dragonfly-ext-eye)"/>
      <path d="M98 108 l34 8 M94 120 l44 6 M96 132 l40 8 M100 144 l32 6" stroke="#0a4c44" stroke-width="0.5" opacity="0.5"/>
      <circle cx="104" cy="112" r="4" fill="#eafff8" opacity="0.5"/>
      <!-- 短觸角 -->
      <path data-part="觸角（短剛毛狀）" d="M104 100 C100 88 100 82 98 76 M118 100 C122 88 124 82 128 76" stroke="#0e3a1c" stroke-width="1.6" fill="none" stroke-linecap="round"/>

      <!-- 胸部 -->
      <ellipse data-part="胸部" cx="160" cy="132" rx="30" ry="24" fill="url(#dragonfly-ext-thorax)" stroke="#0e3a1c" stroke-width="1.4"/>
      <path d="M148 118 C158 128 162 140 160 154" stroke="#164a28" stroke-width="2" fill="none" opacity="0.5"/>
      <ellipse cx="152" cy="122" rx="12" ry="6" fill="#7fd090" opacity="0.4"/>

      <!-- 細長腹部 -->
      <path data-part="腹部（細長）" d="M186 128 C280 124 380 138 448 150 C464 152 464 162 448 162 C380 158 280 152 186 144 Z" fill="url(#dragonfly-ext-abdomen)" stroke="#153c68" stroke-width="1.4"/>
      <path d="M230 130 v18 M270 130 v20 M310 134 v20 M350 138 v20 M390 142 v18 M425 146 v14" stroke="#123258" stroke-width="1.4" opacity="0.65"/>
      <path d="M200 128 C300 128 400 142 448 152" stroke="#9fd0f0" stroke-width="1" fill="none" opacity="0.4"/>
      <!-- 尾端附肢 -->
      <path d="M456 154 l14 -4 M456 158 l14 4" stroke="#123258" stroke-width="2" stroke-linecap="round"/>

      <!-- 六足（集中於胸下） -->
      <g data-part="足（六足）" stroke="#0e3a1c" stroke-width="2.6" fill="none" stroke-linecap="round">
        <path d="M144 152 C136 176 128 192 120 208"/>
        <path d="M160 154 C158 180 156 198 154 214"/>
        <path d="M176 152 C184 178 192 196 200 212"/>
      </g>

      <g class="labels">
        <line x1="110" y1="126" x2="90" y2="200"/>
        <text x="60" y="216" font-size="13" fill="var(--ink)">頭部</text>
        <line x1="110" y1="126" x2="40" y2="230"/>
        <text x="8" y="246" font-size="13" fill="var(--ink)">複眼（大複眼）</text>
        <line x1="112" y1="82" x2="120" y2="40"/>
        <text x="100" y="34" font-size="13" fill="var(--ink)">觸角（短剛毛狀）</text>
        <line x1="160" y1="132" x2="180" y2="92"/>
        <text x="156" y="86" font-size="13" fill="var(--ink)">胸部</text>
        <line x1="360" y1="150" x2="360" y2="196"/>
        <text x="330" y="212" font-size="13" fill="var(--ink)">腹部（細長）</text>
        <line x1="280" y1="100" x2="280" y2="40"/>
        <text x="250" y="34" font-size="13" fill="var(--ink)">翅（兩對，前後翅）</text>
        <line x1="160" y1="210" x2="200" y2="240"/>
        <text x="180" y="256" font-size="13" fill="var(--ink)">足（六足）</text>
      </g>`,
      parts: [
        { name: "頭部", desc: "能靈活轉動，幾乎被巨大複眼占滿。" },
        { name: "複眼（大複眼）", desc: "每眼由近三萬個小眼構成，提供近乎全景的視野。" },
        { name: "觸角（短剛毛狀）", desc: "退化為極短的剛毛，蜻蜓主要依賴視覺獵食。" },
        { name: "胸部", desc: "肌肉發達，連接兩對翅與集中前伸的六足。" },
        { name: "腹部（細長）", desc: "細長分節的腹部，飛行時協助平衡與轉向。" },
        { name: "翅（前翅）", desc: "前翅可與後翅獨立振動，實現懸停與急轉。" },
        { name: "翅（後翅）", desc: "後翅基部較寬，提供主要升力。" },
        { name: "足（六足）", desc: "六足前伸圍成籃狀，於空中捕捉獵物。" }
      ]
    }
  ]
});

/* ---------- 6. 昆蟲身體通論 ---------- */
window.ANATOMY.register({
  id: "insect-body",
  name: "昆蟲身體通論",
  latin: "Insecta",
  emoji: "🦗",
  kingdom: "animalia",
  group: "insects",
  rank: "構造專題",
  summary: "昆蟲的共同特徵：身體分頭、胸、腹三段，胸部生有三對（六隻）足與多數兩對翅，體表覆幾丁質外骨骼，並以氣管系統與體側的氣門直接把空氣送到組織進行呼吸。",
  views: [
    {
      id: "bodyplan",
      name: "三段與六足",
      viewBox: "0 0 460 300",
      svg: `
      <defs>
        <radialGradient id="ib-head" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#7a6a3a"/>
          <stop offset="100%" stop-color="#332a12"/>
        </radialGradient>
        <linearGradient id="ib-thorax" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#b08a3a"/>
          <stop offset="100%" stop-color="#6a4e16"/>
        </linearGradient>
        <linearGradient id="ib-abdomen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#caa24e"/>
          <stop offset="100%" stop-color="#8a6a22"/>
        </linearGradient>
      </defs>

      <!-- 分段底色帶（示意三段） -->
      <rect x="60" y="40" width="90" height="220" fill="#f0b0400f"/>
      <rect x="150" y="40" width="110" height="220" fill="#3f9d5a10"/>
      <rect x="260" y="40" width="150" height="220" fill="#3f6fb010"/>

      <!-- 頭部 -->
      <circle data-part="頭部（head）" cx="108" cy="150" r="42" fill="url(#ib-head)" stroke="#241d0c"/>
      <circle cx="92" cy="132" r="9" fill="#141008"/>
      <path d="M96 118 C86 92 96 78 112 70 M116 116 C128 92 140 80 156 74" stroke="#241d0c" stroke-width="2.4" fill="none" stroke-linecap="round"/>

      <!-- 胸部 -->
      <ellipse data-part="胸部（thorax）" cx="205" cy="150" rx="52" ry="40" fill="url(#ib-thorax)" stroke="#3a2a0c"/>

      <!-- 腹部 -->
      <path data-part="腹部（abdomen）" d="M255 118 C330 110 400 128 400 150 C400 172 330 190 255 182 C232 178 232 122 255 118 Z" fill="url(#ib-abdomen)" stroke="#5a4210"/>
      <path d="M290 116 C286 150 288 178 292 184 M330 118 C326 150 328 176 332 182 M368 124 C364 150 366 172 370 178" stroke="#4a3610" stroke-width="1" opacity="0.5" fill="none"/>

      <!-- 六足（全部生於胸部！強調） -->
      <g data-part="足（三對／六足）" stroke="#3a2a0c" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M180 186 C168 216 152 236 138 254"/>
        <path d="M205 190 C204 222 200 244 196 262"/>
        <path d="M230 186 C244 216 260 236 274 254"/>
        <path d="M182 114 C168 88 150 74 132 64"/>
        <path d="M205 110 C205 82 203 66 201 52"/>
        <path d="M228 114 C244 88 262 74 280 64"/>
      </g>
      <!-- 兩對翅（示意，多數昆蟲） -->
      <path data-part="翅（多為兩對）" d="M210 116 C250 70 320 62 360 78 C374 84 372 96 352 96 C300 92 250 100 214 112 Z" fill="#dfe8f2" stroke="#9fb2c8" opacity="0.55"/>

      <g class="labels">
        <line x1="108" y1="150" x2="105" y2="20"/>
        <text x="66" y="16" font-size="13" fill="var(--ink)">頭部（head）</text>
        <line x1="205" y1="150" x2="205" y2="292"/>
        <text x="176" y="292" font-size="12" fill="var(--ink)"> </text>
        <text x="164" y="290" font-size="13" fill="var(--ink)">胸部（thorax）</text>
        <line x1="360" y1="160" x2="410" y2="200"/>
        <text x="360" y="216" font-size="13" fill="var(--ink)">腹部（abdomen）</text>
        <line x1="270" y1="250" x2="300" y2="272"/>
        <text x="278" y="286" font-size="13" fill="var(--ink)">足（三對／六足）</text>
        <line x1="300" y1="86" x2="360" y2="40"/>
        <text x="330" y="34" font-size="13" fill="var(--ink)">翅（多為兩對）</text>
      </g>`,
      parts: [
        { name: "頭部（head）", desc: "第一體段，集中觸角、複眼、單眼與口器等感覺與取食器官。" },
        { name: "胸部（thorax）", desc: "第二體段，分前、中、後胸，全部三對足與翅都著生於此。" },
        { name: "腹部（abdomen）", desc: "第三體段，含消化、循環、生殖與呼吸相關器官，分明顯環節。" },
        { name: "足（三對／六足）", desc: "六足全部生於胸部，是「六足亞門」昆蟲的關鍵特徵。" },
        { name: "翅（多為兩對）", desc: "多數成蟲於中、後胸各生一對翅，是唯一會飛的無脊椎動物。" }
      ]
    },
    {
      id: "exoskeleton-respiration",
      name: "外骨骼與氣管呼吸",
      viewBox: "0 0 460 300",
      svg: `
      <defs>
        <linearGradient id="ib-cuticle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#c9a24e"/>
          <stop offset="100%" stop-color="#7a5a1e"/>
        </linearGradient>
        <linearGradient id="ib-innerlayer" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f0e0b0"/>
          <stop offset="100%" stop-color="#cbb47a"/>
        </linearGradient>
      </defs>

      <!-- 身體剖面輪廓（外骨骼） -->
      <path d="M60 150 C60 80 400 80 400 150 C400 220 60 220 60 150 Z" fill="url(#ib-innerlayer)" stroke="#6a4e16"/>
      <!-- 外骨骼硬殼（外緣厚層） -->
      <path data-part="外骨骼（幾丁質）" d="M60 150 C60 80 400 80 400 150 C400 220 60 220 60 150 Z" fill="none" stroke="url(#ib-cuticle)" stroke-width="10"/>

      <!-- 氣管主幹 + 分支 -->
      <g data-part="氣管系統" fill="none" stroke="#3a5f7a" stroke-width="3" stroke-linecap="round">
        <path d="M96 150 H364"/>
        <path d="M130 150 C130 118 122 104 116 92 M130 150 C130 182 122 196 116 208"/>
        <path d="M200 150 C200 116 194 102 190 88 M200 150 C200 184 194 198 190 212"/>
        <path d="M280 150 C280 118 274 104 270 92 M280 150 C280 182 274 196 270 208"/>
        <path d="M340 150 C340 120 336 108 332 98 M340 150 C340 180 336 192 332 202"/>
      </g>
      <!-- 微氣管末梢 -->
      <g fill="none" stroke="#5a7f9a" stroke-width="1" opacity="0.8">
        <path d="M116 92 l-8 -8 M116 92 l8 -6 M190 88 l-8 -8 M190 88 l8 -6 M270 92 l-8 -8 M270 92 l8 -6"/>
        <path d="M116 208 l-8 8 M116 208 l8 6 M190 212 l-8 8 M190 212 l8 6 M270 208 l-8 8 M270 208 l8 6"/>
      </g>

      <!-- 氣門（體側開口） -->
      <g data-part="氣門（spiracle）" fill="#241a0a" stroke="#0e0a04">
        <circle cx="130" cy="92" r="5"/>
        <circle cx="200" cy="88" r="5"/>
        <circle cx="280" cy="92" r="5"/>
        <circle cx="130" cy="208" r="5"/>
        <circle cx="200" cy="212" r="5"/>
        <circle cx="280" cy="208" r="5"/>
      </g>

      <g class="labels">
        <line x1="230" y1="86" x2="230" y2="40"/>
        <text x="170" y="34" font-size="13" fill="var(--ink)">外骨骼（幾丁質）</text>
        <line x1="230" y1="150" x2="230" y2="270"/>
        <text x="196" y="286" font-size="13" fill="var(--ink)">氣管系統</text>
        <line x1="280" y1="92" x2="360" y2="70"/>
        <text x="330" y="64" font-size="13" fill="var(--ink)">氣門（spiracle）</text>
        <line x1="340" y1="150" x2="420" y2="150"/>
        <text x="344" y="140" font-size="12" fill="var(--ink)">空氣直達組織</text>
      </g>`,
      parts: [
        { name: "外骨骼（幾丁質）", desc: "體表由幾丁質構成的硬殼，兼具支撐、保護與防止水分散失。" },
        { name: "氣管系統", desc: "遍布全身的分支管道，把空氣直接送到各組織，不依賴肺與血液攜氧。" },
        { name: "氣門（spiracle）", desc: "體側成對的開口，是空氣進出氣管的閘門，可開闔以控制氣體與水分。" }
      ]
    }
  ]
});
