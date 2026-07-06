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
        <linearGradient id="butterfly-wingU" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff9d2e"/>
          <stop offset="45%" stop-color="#f4711b"/>
          <stop offset="100%" stop-color="#b23c0a"/>
        </linearGradient>
        <linearGradient id="butterfly-wingL" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffb648"/>
          <stop offset="100%" stop-color="#c9560f"/>
        </linearGradient>
        <linearGradient id="butterfly-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#5a4632"/>
          <stop offset="100%" stop-color="#241a10"/>
        </linearGradient>
        <radialGradient id="butterfly-eye" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#4a4a52"/>
          <stop offset="100%" stop-color="#141416"/>
        </radialGradient>
      </defs>

      <!-- 左翅 -->
      <g>
        <!-- 前翅（上） -->
        <path data-part="翅（前翅）" d="M230 150 C150 60 60 60 40 130 C25 185 70 210 150 200 C200 193 225 175 230 150 Z" fill="url(#butterfly-wingU)" stroke="#5a2400" stroke-width="2"/>
        <!-- 後翅（下） -->
        <path data-part="翅（後翅）" d="M230 175 C185 210 90 215 70 270 C58 310 110 330 165 300 C205 278 228 220 230 175 Z" fill="url(#butterfly-wingL)" stroke="#5a2400" stroke-width="2"/>
        <!-- 翅脈 + 斑點 -->
        <path d="M60 130 L200 165 M70 165 L205 180 M90 250 L215 205 M120 290 L200 210" stroke="#7a3405" stroke-width="1.2" fill="none" opacity="0.7"/>
        <circle cx="95" cy="130" r="9" fill="#3a1a05" opacity="0.85"/>
        <circle cx="130" cy="270" r="8" fill="#fff3d6" opacity="0.9"/>
      </g>

      <!-- 右翅（鏡像） -->
      <g transform="translate(460,0) scale(-1,1)">
        <path d="M230 150 C150 60 60 60 40 130 C25 185 70 210 150 200 C200 193 225 175 230 150 Z" fill="url(#butterfly-wingU)" stroke="#5a2400" stroke-width="2"/>
        <path d="M230 175 C185 210 90 215 70 270 C58 310 110 330 165 300 C205 278 228 220 230 175 Z" fill="url(#butterfly-wingL)" stroke="#5a2400" stroke-width="2"/>
        <path d="M60 130 L200 165 M70 165 L205 180 M90 250 L215 205 M120 290 L200 210" stroke="#7a3405" stroke-width="1.2" fill="none" opacity="0.7"/>
        <circle cx="95" cy="130" r="9" fill="#3a1a05" opacity="0.85"/>
        <circle cx="130" cy="270" r="8" fill="#fff3d6" opacity="0.9"/>
      </g>

      <!-- 身體 三段 -->
      <ellipse data-part="頭部" cx="230" cy="120" rx="17" ry="16" fill="url(#butterfly-body)" stroke="#160f08"/>
      <ellipse data-part="胸部" cx="230" cy="165" rx="15" ry="30" fill="url(#butterfly-body)" stroke="#160f08"/>
      <path data-part="腹部" d="M215 190 C215 260 245 260 245 190 Z" fill="url(#butterfly-body)" stroke="#160f08"/>
      <!-- 腹部環節 -->
      <path d="M218 205 H242 M219 220 H241 M221 235 H239 M223 248 H237" stroke="#0e0a06" stroke-width="1" opacity="0.6"/>

      <!-- 複眼 -->
      <circle data-part="複眼" cx="222" cy="115" r="6" fill="url(#butterfly-eye)"/>
      <circle cx="238" cy="115" r="6" fill="url(#butterfly-eye)"/>

      <!-- 觸角（棒狀） -->
      <path data-part="觸角" d="M225 108 C210 80 200 55 190 42" stroke="#2a1c10" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M235 108 C250 80 260 55 270 42" stroke="#2a1c10" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <circle cx="190" cy="42" r="4" fill="#2a1c10"/>
      <circle cx="270" cy="42" r="4" fill="#2a1c10"/>

      <!-- 口器 虹吸式（捲曲吸管） -->
      <path data-part="口器（虹吸式）" d="M230 133 C232 150 244 158 240 145 C236 134 230 140 230 133 Z" fill="none" stroke="#c98a2e" stroke-width="2.2"/>

      <!-- 六足 -->
      <g data-part="足（六足）" stroke="#241a10" stroke-width="2.2" fill="none" stroke-linecap="round">
        <path d="M218 150 C200 158 195 172 190 184"/>
        <path d="M218 162 C198 172 192 188 188 202"/>
        <path d="M218 174 C200 186 196 202 194 216"/>
        <path d="M242 150 C260 158 265 172 270 184"/>
        <path d="M242 162 C262 172 268 188 272 202"/>
        <path d="M242 174 C260 186 264 202 266 216"/>
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
        <linearGradient id="beetle-shell" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#5fd39a"/>
          <stop offset="35%" stop-color="#1f8f5a"/>
          <stop offset="70%" stop-color="#0d5a37"/>
          <stop offset="100%" stop-color="#04331e"/>
        </linearGradient>
        <linearGradient id="beetle-hind" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#d9e6f2"/>
          <stop offset="100%" stop-color="#9fb6cf"/>
        </linearGradient>
        <radialGradient id="beetle-head" cx="40%" cy="30%">
          <stop offset="0%" stop-color="#2a7a4e"/>
          <stop offset="100%" stop-color="#08301c"/>
        </radialGradient>
      </defs>

      <!-- 後翅（掀開的膜質翅，示意在左側外露） -->
      <path data-part="後翅（膜質翅）" d="M150 210 C90 200 55 260 70 330 C82 380 130 360 160 300 C172 275 168 240 150 210 Z" fill="url(#beetle-hind)" stroke="#7f97b3" opacity="0.85"/>
      <path d="M110 240 L150 300 M95 275 L155 320 M100 310 L150 335" stroke="#7f97b3" stroke-width="0.8" fill="none" opacity="0.8"/>

      <!-- 頭部 -->
      <ellipse data-part="頭部" cx="200" cy="90" rx="34" ry="28" fill="url(#beetle-head)" stroke="#052316"/>
      <!-- 大顎 -->
      <path data-part="大顎" d="M186 66 C176 52 170 52 176 66 M214 66 C224 52 230 52 224 66" stroke="#052316" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- 複眼 -->
      <circle cx="180" cy="86" r="7" fill="#0a1410"/>
      <circle cx="220" cy="86" r="7" fill="#0a1410"/>
      <!-- 觸角 -->
      <path data-part="觸角" d="M184 72 C160 55 150 44 138 40 M216 72 C240 55 250 44 262 40" stroke="#0a2a1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>

      <!-- 前胸背板 -->
      <path data-part="前胸背板" d="M155 118 C160 105 240 105 245 118 C252 140 245 160 200 162 C155 160 148 140 155 118 Z" fill="url(#beetle-shell)" stroke="#052316"/>

      <!-- 鞘翅（前翅，硬化） -->
      <path data-part="鞘翅（前翅）" d="M158 165 C158 155 242 155 242 165 C258 260 250 400 200 430 C150 400 142 260 158 165 Z" fill="url(#beetle-shell)" stroke="#052316" stroke-width="2"/>
      <!-- 中縫 + 縱溝 -->
      <line x1="200" y1="165" x2="200" y2="428" stroke="#04331e" stroke-width="2"/>
      <path d="M178 175 C172 260 175 360 190 415 M222 175 C228 260 225 360 210 415 M165 185 C162 260 168 340 185 400 M235 185 C238 260 232 340 215 400" stroke="#063d24" stroke-width="1" fill="none" opacity="0.7"/>
      <!-- 高光 -->
      <path d="M170 175 C168 240 172 320 185 380" stroke="#7fe0b0" stroke-width="2" fill="none" opacity="0.55"/>

      <!-- 六足（外骨骼分節） -->
      <g data-part="足（六足）" stroke="#08301c" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M158 175 C120 175 100 195 82 210"/>
        <path d="M155 250 C112 250 90 275 70 292"/>
        <path d="M160 330 C120 340 96 372 78 392"/>
        <path d="M242 175 C280 175 300 195 318 210"/>
        <path d="M245 250 C288 250 310 275 330 292"/>
        <path d="M240 330 C280 340 304 372 322 392"/>
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
        <linearGradient id="bee-thorax" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#8a5a1e"/>
          <stop offset="100%" stop-color="#4a2f0c"/>
        </linearGradient>
        <linearGradient id="bee-abdomen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f6c534"/>
          <stop offset="100%" stop-color="#d99a17"/>
        </linearGradient>
        <linearGradient id="bee-wing" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#eef4fb" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#c3d2e4" stop-opacity="0.6"/>
        </linearGradient>
        <radialGradient id="bee-eye" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#5a4a34"/>
          <stop offset="100%" stop-color="#1a120a"/>
        </radialGradient>
      </defs>

      <!-- 翅（兩對，半透明） -->
      <path data-part="翅（兩對膜質翅）" d="M195 95 C130 40 70 40 60 80 C55 108 110 118 175 108 Z" fill="url(#bee-wing)" stroke="#9fb2c8"/>
      <path d="M200 100 C150 60 100 62 90 92 C88 112 140 118 185 110 Z" fill="url(#bee-wing)" stroke="#9fb2c8" opacity="0.8"/>
      <path d="M90 70 L170 100 M80 88 L175 106" stroke="#9fb2c8" stroke-width="0.7" fill="none"/>

      <!-- 頭部 -->
      <circle data-part="頭部" cx="330" cy="140" r="34" fill="url(#bee-thorax)" stroke="#2e1c07"/>
      <!-- 複眼 -->
      <path data-part="複眼" d="M340 118 C360 116 366 138 356 156 C346 168 332 158 332 138 C332 126 335 118 340 118 Z" fill="url(#bee-eye)"/>
      <path d="M338 124 l14 6 M336 136 l18 6 M338 150 l14 6" stroke="#3a2c18" stroke-width="0.6"/>
      <!-- 觸角 -->
      <path data-part="觸角" d="M340 118 C352 96 366 84 382 80 M330 116 C338 92 348 78 360 70" stroke="#2e1c07" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <!-- 舐吸式口器 -->
      <path data-part="口器（舐吸式）" d="M332 172 C330 190 336 206 340 218" stroke="#8a5a1e" stroke-width="3" fill="none" stroke-linecap="round"/>

      <!-- 胸部 -->
      <ellipse data-part="胸部" cx="255" cy="140" rx="45" ry="40" fill="url(#bee-thorax)" stroke="#2e1c07"/>
      <path d="M225 118 C255 110 285 118 285 118" stroke="#3a2409" stroke-width="6" opacity="0.5"/>

      <!-- 腹部 三段之一，具黃黑條紋 -->
      <path data-part="腹部" d="M215 118 C160 108 90 118 90 150 C90 182 160 192 215 178 C245 170 245 126 215 118 Z" fill="url(#bee-abdomen)" stroke="#7a5510"/>
      <path d="M180 116 C175 145 178 175 180 178 M150 116 C144 145 148 176 152 182 M120 122 C114 147 118 172 122 178" stroke="#2a1c08" stroke-width="7" opacity="0.85" fill="none"/>

      <!-- 螫針 -->
      <path data-part="螫針" d="M90 152 L58 152 L74 146 M58 152 L74 158" stroke="#1a120a" stroke-width="2.4" fill="none" stroke-linecap="round"/>

      <!-- 後足 + 花粉籃 -->
      <path data-part="花粉籃（後足）" d="M235 176 C230 210 220 234 214 254" stroke="#2e1c07" stroke-width="4" fill="none" stroke-linecap="round"/>
      <ellipse cx="212" cy="258" rx="11" ry="15" fill="#f0a91c" stroke="#8a5a1e"/>
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
        <radialGradient id="ant-head" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#8a3c1e"/>
          <stop offset="100%" stop-color="#3a1608"/>
        </radialGradient>
        <linearGradient id="ant-thorax" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7a3418"/>
          <stop offset="100%" stop-color="#3a1608"/>
        </linearGradient>
        <radialGradient id="ant-gaster" cx="35%" cy="30%">
          <stop offset="0%" stop-color="#5a2410"/>
          <stop offset="100%" stop-color="#1e0c04"/>
        </radialGradient>
      </defs>

      <!-- 頭部 -->
      <ellipse data-part="頭部" cx="90" cy="130" rx="46" ry="40" fill="url(#ant-head)" stroke="#200a03"/>
      <!-- 複眼 -->
      <circle cx="72" cy="112" r="7" fill="#120802"/>
      <!-- 大顎 -->
      <path data-part="大顎" d="M56 150 C36 156 26 148 34 138 C40 132 50 140 56 150 Z M60 158 C42 168 30 164 36 152 C42 146 54 150 60 158 Z" fill="url(#ant-head)" stroke="#200a03"/>
      <!-- 膝狀觸角 -->
      <path data-part="觸角（膝狀）" d="M78 104 C70 78 88 66 108 62 C126 58 138 48 146 36" stroke="#200a03" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <path d="M96 100 C92 78 108 70 126 68 C144 66 158 58 168 48" stroke="#200a03" stroke-width="2.6" fill="none" stroke-linecap="round" opacity="0.9"/>

      <!-- 胸部（併胸腹節） -->
      <ellipse data-part="胸部" cx="200" cy="132" rx="42" ry="30" fill="url(#ant-thorax)" stroke="#200a03"/>

      <!-- 腰節（腹柄結節） -->
      <circle data-part="腰節（腹柄）" cx="258" cy="138" r="12" fill="url(#ant-thorax)" stroke="#200a03"/>
      <circle cx="282" cy="140" r="9" fill="url(#ant-thorax)" stroke="#200a03"/>

      <!-- 腹部（後腹／腹垂節） -->
      <ellipse data-part="腹部（後腹）" cx="350" cy="140" rx="60" ry="46" fill="url(#ant-gaster)" stroke="#180803"/>
      <path d="M320 108 C330 140 328 170 320 180 M350 100 C356 140 354 176 348 184" stroke="#120602" stroke-width="1" fill="none" opacity="0.5"/>
      <ellipse cx="335" cy="122" rx="16" ry="10" fill="#7a3418" opacity="0.35"/>

      <!-- 六足 -->
      <g data-part="足（六足）" stroke="#200a03" stroke-width="3" fill="none" stroke-linecap="round">
        <path d="M185 158 C170 190 150 210 132 228"/>
        <path d="M205 160 C202 196 196 218 190 240"/>
        <path d="M222 158 C238 192 254 212 270 232"/>
        <path d="M188 110 C168 88 148 76 128 68"/>
        <path d="M210 108 C210 82 208 66 206 52"/>
        <path d="M225 112 C244 88 262 74 280 64"/>
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
        <radialGradient id="dragonfly-eye" cx="35%" cy="30%">
          <stop offset="0%" stop-color="#6fe0d0"/>
          <stop offset="55%" stop-color="#1f9e8c"/>
          <stop offset="100%" stop-color="#0a4c44"/>
        </radialGradient>
        <linearGradient id="dragonfly-thorax" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3f9d5a"/>
          <stop offset="100%" stop-color="#1c5a30"/>
        </linearGradient>
        <linearGradient id="dragonfly-abdomen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#3f8fc9"/>
          <stop offset="50%" stop-color="#2f6fb0"/>
          <stop offset="100%" stop-color="#1c4a80"/>
        </linearGradient>
        <linearGradient id="dragonfly-wing" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#eef7ff" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#c6dcf0" stop-opacity="0.5"/>
        </linearGradient>
      </defs>

      <!-- 上方兩翅 -->
      <path data-part="翅（前翅）" d="M150 118 C210 70 320 62 400 84 C420 90 418 104 396 106 C310 104 210 112 152 128 C142 130 142 122 150 118 Z" fill="url(#dragonfly-wing)" stroke="#9fc0dc"/>
      <path data-part="翅（後翅）" d="M150 132 C210 150 310 160 396 158 C418 158 420 172 400 178 C320 200 210 192 150 146 C142 142 142 134 150 132 Z" fill="url(#dragonfly-wing)" stroke="#9fc0dc"/>
      <!-- 對側翅（示意，稍淡） -->
      <path d="M148 116 C90 70 40 66 20 82 C10 90 14 102 34 104 C80 102 120 110 150 124 Z" fill="url(#dragonfly-wing)" stroke="#9fc0dc" opacity="0.6"/>
      <path d="M148 134 C90 156 44 168 22 172 C10 174 12 186 30 188 C80 190 120 176 150 150 Z" fill="url(#dragonfly-wing)" stroke="#9fc0dc" opacity="0.6"/>
      <!-- 翅脈 + 翅痣 -->
      <path d="M170 108 L390 96 M175 128 L390 128 M175 140 L390 158 M200 100 L200 128 M260 96 L260 130 M320 94 L320 130" stroke="#9fc0dc" stroke-width="0.6" fill="none" opacity="0.8"/>
      <rect x="378" y="88" width="14" height="6" rx="2" fill="#4a6f8c" opacity="0.8"/>

      <!-- 頭部（幾乎全是複眼） -->
      <circle data-part="頭部" cx="110" cy="126" r="26" fill="url(#dragonfly-thorax)" stroke="#0e3a1c"/>
      <path data-part="複眼（大複眼）" d="M96 104 C120 96 138 108 138 128 C138 148 118 156 98 148 C82 140 82 112 96 104 Z" fill="url(#dragonfly-eye)"/>
      <path d="M100 110 l30 8 M96 122 l38 6 M98 136 l34 8" stroke="#0a4c44" stroke-width="0.5" opacity="0.6"/>
      <!-- 短觸角 -->
      <path data-part="觸角（短剛毛狀）" d="M104 102 C100 90 100 84 98 78 M118 102 C122 90 124 84 128 78" stroke="#0e3a1c" stroke-width="1.6" fill="none" stroke-linecap="round"/>

      <!-- 胸部 -->
      <ellipse data-part="胸部" cx="160" cy="132" rx="30" ry="24" fill="url(#dragonfly-thorax)" stroke="#0e3a1c"/>

      <!-- 細長腹部 -->
      <path data-part="腹部（細長）" d="M186 128 C280 124 380 138 448 150 C464 152 464 162 448 162 C380 158 280 152 186 144 Z" fill="url(#dragonfly-abdomen)" stroke="#153c68"/>
      <path d="M230 130 v18 M270 130 v20 M310 134 v20 M350 138 v20 M390 142 v18 M425 146 v14" stroke="#123258" stroke-width="1.4" opacity="0.7"/>
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
