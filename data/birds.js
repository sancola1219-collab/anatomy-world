// 鳥類 birds — 寫實解剖 SVG 教材（繁體中文）
// 每個物種呼叫一次 window.ANATOMY.register({...})

/* ============================================================
 * 1. 雞 chicken（Gallus gallus）
 * ============================================================ */
window.ANATOMY.register({
  id: "chicken",
  name: "雞",
  latin: "Gallus gallus domesticus",
  emoji: "🐔",
  kingdom: "animalia",
  group: "birds",
  rank: "雞形目・雉科",
  summary: "家雞是最常見的家禽，具鮮紅肉冠與肉垂。牠不會咀嚼，靠嗉囊儲存軟化食物、再由砂囊以吞下的砂石磨碎，是研究鳥類消化系統的絕佳範例。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 420 460",
      svg: `
      <defs>
        <radialGradient id="chicken-ext-body" cx="42%" cy="34%" r="72%">
          <stop offset="0%" stop-color="#f0d8a8"/>
          <stop offset="48%" stop-color="#d9b775"/>
          <stop offset="100%" stop-color="#9e7640"/>
        </radialGradient>
        <linearGradient id="chicken-ext-breast" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stop-color="#f7e8c8"/>
          <stop offset="100%" stop-color="#c69f66"/>
        </linearGradient>
        <linearGradient id="chicken-ext-neck" x1="0.2" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8edd4"/>
          <stop offset="100%" stop-color="#c39c62"/>
        </linearGradient>
        <linearGradient id="chicken-ext-head" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stop-color="#f9efd8"/>
          <stop offset="100%" stop-color="#cea86e"/>
        </linearGradient>
        <linearGradient id="chicken-ext-tail" x1="0.1" y1="0" x2="0.9" y2="0.5">
          <stop offset="0%" stop-color="#4a3826"/>
          <stop offset="45%" stop-color="#7d5f38"/>
          <stop offset="100%" stop-color="#2c2013"/>
        </linearGradient>
        <linearGradient id="chicken-ext-tail2" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stop-color="#6a5030"/>
          <stop offset="100%" stop-color="#38291a"/>
        </linearGradient>
        <linearGradient id="chicken-ext-comb" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stop-color="#ef5a4c"/>
          <stop offset="55%" stop-color="#d0332c"/>
          <stop offset="100%" stop-color="#951b18"/>
        </linearGradient>
        <linearGradient id="chicken-ext-beak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f5cd5c"/>
          <stop offset="100%" stop-color="#bd831c"/>
        </linearGradient>
        <linearGradient id="chicken-ext-leg" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stop-color="#eec06a"/>
          <stop offset="100%" stop-color="#a5761f"/>
        </linearGradient>
        <radialGradient id="chicken-ext-eye" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stop-color="#b98a3c"/>
          <stop offset="45%" stop-color="#6a4715"/>
          <stop offset="100%" stop-color="#120b03"/>
        </radialGradient>
      </defs>

      <!-- 尾羽：層疊鐮刀狀主尾羽，深淺分層 -->
      <path data-part="尾羽" d="M298 236 C356 176 386 132 402 108 C388 158 402 196 384 214 C356 200 332 214 320 250 C314 226 306 226 298 236 Z" fill="url(#chicken-ext-tail)" stroke="#241a0f" stroke-width="1.5"/>
      <path d="M300 244 C352 190 380 156 396 138 C382 178 392 208 376 224 C352 210 334 220 322 252 Z" fill="url(#chicken-ext-tail2)" stroke="#241a0f" stroke-width="1" opacity="0.9"/>
      <path d="M304 258 C350 214 378 194 396 190 C368 208 372 246 380 274 C356 254 330 266 314 296 C312 274 308 262 304 258 Z" fill="url(#chicken-ext-tail2)" stroke="#241a0f" stroke-width="1.1" opacity="0.95"/>
      <!-- 尾羽羽軸細線 -->
      <path d="M304 244 C348 198 374 162 392 132" fill="none" stroke="#c9ab72" stroke-width="0.8" opacity="0.55"/>
      <path d="M308 262 C346 224 372 202 390 194" fill="none" stroke="#c9ab72" stroke-width="0.8" opacity="0.5"/>

      <!-- 身體（圓潤軀幹） -->
      <path data-part="翼" d="M132 262 C132 196 178 168 226 172 C296 178 336 222 336 274 C336 330 292 360 232 360 C168 360 132 322 132 262 Z" fill="url(#chicken-ext-body)" stroke="#8a6738" stroke-width="1.7"/>
      <!-- 胸腹淺色帶 -->
      <path d="M150 300 C160 250 200 232 232 236 C210 250 194 300 200 344 C176 344 156 328 150 300 Z" fill="url(#chicken-ext-breast)" opacity="0.55"/>

      <!-- 翼（收攏於體側，覆羽分層） -->
      <path d="M186 250 C244 236 296 250 322 288 C300 300 250 296 208 300 C186 288 182 266 186 250 Z" fill="url(#chicken-ext-tail2)" stroke="#5c451f" stroke-width="1.3" opacity="0.9"/>
      <!-- 覆羽層次細線 -->
      <path d="M196 262 C244 254 288 264 314 286" fill="none" stroke="#d8b878" stroke-width="1" opacity="0.5"/>
      <path d="M194 276 C244 270 286 280 312 298" fill="none" stroke="#d8b878" stroke-width="1" opacity="0.45"/>
      <path d="M200 288 C244 286 284 294 306 304" fill="none" stroke="#c8a260" stroke-width="0.9" opacity="0.4"/>
      <!-- 軀幹羽毛短線紋理 -->
      <path d="M160 235 Q225 245 300 250" fill="none" stroke="#b08d55" stroke-width="0.8" opacity="0.45"/>
      <path d="M150 320 Q220 336 290 330" fill="none" stroke="#8f6d3d" stroke-width="0.8" opacity="0.4"/>

      <!-- 頸（羽毛蓑衣） -->
      <path data-part="頸部" d="M156 214 C150 158 166 122 190 108 L214 122 C196 156 192 190 202 236 C184 244 166 238 156 214 Z" fill="url(#chicken-ext-neck)" stroke="#8a6738" stroke-width="1.4"/>
      <path d="M164 200 C160 162 172 134 190 120" fill="none" stroke="#a9834e" stroke-width="0.8" opacity="0.5"/>
      <path d="M180 208 C176 168 184 142 200 128" fill="none" stroke="#a9834e" stroke-width="0.8" opacity="0.45"/>

      <!-- 頭 -->
      <path d="M150 108 C150 84 166 68 190 68 C214 68 228 86 226 110 C224 132 206 144 184 143 C162 142 150 128 150 108 Z" fill="url(#chicken-ext-head)" stroke="#8a6738" stroke-width="1.4"/>

      <!-- 肉冠（鋸齒單片冠） -->
      <path data-part="肉冠" d="M162 78 C160 58 168 60 172 68 C174 48 182 52 186 64 C190 46 198 50 202 62 C206 46 214 52 216 66 C220 52 226 60 224 74 C220 86 196 88 178 86 C168 85 163 82 162 78 Z" fill="url(#chicken-ext-comb)" stroke="#7a1512" stroke-width="1.3"/>
      <path d="M170 74 C182 70 200 70 216 74" fill="none" stroke="#f28a80" stroke-width="0.8" opacity="0.5"/>

      <!-- 肉垂（成對垂片） -->
      <path data-part="肉垂" d="M166 130 C158 156 166 168 176 166 C186 164 184 142 178 130 Z" fill="url(#chicken-ext-comb)" stroke="#7a1512" stroke-width="1.2"/>
      <path d="M182 132 C178 154 186 164 194 160 C200 156 196 138 190 130 Z" fill="url(#chicken-ext-comb)" stroke="#7a1512" stroke-width="1.1" opacity="0.9"/>

      <!-- 喙（上下喙，角質質感） -->
      <path data-part="喙" d="M150 106 C132 100 116 100 106 104 C118 108 128 110 146 114 Z" fill="url(#chicken-ext-beak)" stroke="#9a6a12" stroke-width="1.1"/>
      <path d="M150 116 C136 116 122 116 110 116 C124 120 136 122 148 120 Z" fill="#c89428" stroke="#9a6a12" stroke-width="0.9"/>
      <line x1="112" y1="112" x2="146" y2="112" stroke="#8a5f10" stroke-width="0.7" opacity="0.7"/>

      <!-- 眼（立體虹膜＋瞳孔＋高光） -->
      <ellipse cx="176" cy="102" rx="10" ry="9.4" fill="#d9a94e" stroke="#8a6420" stroke-width="0.8" opacity="0.6"/>
      <circle data-part="眼" cx="176" cy="102" r="7.4" fill="url(#chicken-ext-eye)" stroke="#3a2810" stroke-width="1"/>
      <circle cx="176" cy="102" r="3.4" fill="#120a02"/>
      <circle cx="173.4" cy="99.4" r="1.9" fill="#fff" opacity="0.9"/>

      <!-- 遠側腿（後景，較暗） -->
      <path data-part="腿" d="M250 330 C246 356 254 376 262 388 L278 384 C270 362 268 344 270 330 Z" fill="url(#chicken-ext-body)" stroke="#7a5a2f" stroke-width="1.1" opacity="0.8"/>
      <rect x="262" y="384" width="9" height="40" rx="4" fill="url(#chicken-ext-leg)" stroke="#8a5f20" stroke-width="1" opacity="0.85"/>
      <g data-part="爪" opacity="0.82">
        <path d="M266 424 L242 436" stroke="url(#chicken-ext-leg)" stroke-width="5.5" stroke-linecap="round"/>
        <path d="M266 424 L268 442" stroke="url(#chicken-ext-leg)" stroke-width="5.5" stroke-linecap="round"/>
        <path d="M266 424 L292 436" stroke="url(#chicken-ext-leg)" stroke-width="5.5" stroke-linecap="round"/>
      </g>

      <!-- 近側大腿與跗蹠 -->
      <path data-part="腿" d="M186 330 C180 358 190 378 200 388 L216 384 C208 362 206 344 208 330 Z" fill="url(#chicken-ext-body)" stroke="#8a6738" stroke-width="1.4"/>
      <rect x="199" y="384" width="10" height="42" rx="4" fill="url(#chicken-ext-leg)" stroke="#8a5f20" stroke-width="1.2"/>
      <!-- 跗蹠鱗片橫線 -->
      <line x1="200" y1="394" x2="209" y2="394" stroke="#8a5f10" stroke-width="0.7" opacity="0.6"/>
      <line x1="200" y1="404" x2="209" y2="404" stroke="#8a5f10" stroke-width="0.7" opacity="0.6"/>
      <line x1="200" y1="414" x2="209" y2="414" stroke="#8a5f10" stroke-width="0.7" opacity="0.6"/>
      <!-- 近側爪（三前一後） -->
      <g data-part="爪">
        <path d="M204 426 L176 440" stroke="url(#chicken-ext-leg)" stroke-width="6" stroke-linecap="round"/>
        <path d="M204 426 L206 446" stroke="url(#chicken-ext-leg)" stroke-width="6" stroke-linecap="round"/>
        <path d="M204 426 L234 440" stroke="url(#chicken-ext-leg)" stroke-width="6" stroke-linecap="round"/>
        <path d="M204 426 L196 408" stroke="url(#chicken-ext-leg)" stroke-width="5" stroke-linecap="round"/>
      </g>

      <g class="labels">
        <line x1="192" y1="58" x2="252" y2="40" stroke="#666" stroke-width="1"/>
        <text x="256" y="44" font-size="13" fill="var(--ink)">肉冠</text>
        <line x1="116" y1="104" x2="66" y2="92" stroke="#666" stroke-width="1"/>
        <text x="24" y="96" font-size="13" fill="var(--ink)">喙</text>
        <line x1="176" y1="102" x2="120" y2="64" stroke="#666" stroke-width="1"/>
        <text x="78" y="62" font-size="13" fill="var(--ink)">眼</text>
        <line x1="176" y1="158" x2="140" y2="184" stroke="#666" stroke-width="1"/>
        <text x="96" y="188" font-size="13" fill="var(--ink)">肉垂</text>
        <line x1="172" y1="180" x2="112" y2="204" stroke="#666" stroke-width="1"/>
        <text x="58" y="208" font-size="13" fill="var(--ink)">頸部</text>
        <line x1="240" y1="292" x2="312" y2="336" stroke="#666" stroke-width="1"/>
        <text x="316" y="340" font-size="13" fill="var(--ink)">翼</text>
        <line x1="360" y1="188" x2="392" y2="146" stroke="#666" stroke-width="1"/>
        <text x="360" y="138" font-size="13" fill="var(--ink)">尾羽</text>
        <line x1="255" y1="360" x2="332" y2="392" stroke="#666" stroke-width="1"/>
        <text x="336" y="396" font-size="13" fill="var(--ink)">腿</text>
        <line x1="220" y1="438" x2="272" y2="454" stroke="#666" stroke-width="1"/>
        <text x="276" y="458" font-size="13" fill="var(--ink)">爪</text>
      </g>`,
      parts: [
        { name: "肉冠", desc: "頭頂鮮紅肉質突起，用於散熱與求偶展示。" },
        { name: "肉垂", desc: "喙下方成對紅色肉垂，同具散熱與展示功能。" },
        { name: "喙", desc: "角質構成，用來啄食穀粒，取代牙齒。" },
        { name: "眼", desc: "側置的眼睛提供廣闊視野以警戒天敵。" },
        { name: "頸部", desc: "頸椎多且靈活，可大幅轉動頭部。" },
        { name: "翼", desc: "覆羽包覆的前肢，家雞飛行能力退化。" },
        { name: "尾羽", desc: "由尾脂腺支撐的長羽，控制平衡與展示。" },
        { name: "腿", desc: "強壯的跗蹠與大腿，適合行走與扒地覓食。" },
        { name: "爪", desc: "三趾向前、一趾向後，利於抓地與扒土。" }
      ]
    },
    {
      id: "internal",
      name: "內部消化與氣囊",
      viewBox: "0 0 420 460",
      svg: `
      <defs>
        <linearGradient id="chicken-outline" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f4ecd9"/>
          <stop offset="100%" stop-color="#e2d3b4"/>
        </linearGradient>
        <radialGradient id="chicken-crop" cx="42%" cy="35%">
          <stop offset="0%" stop-color="#e8b9a4"/>
          <stop offset="100%" stop-color="#b56b52"/>
        </radialGradient>
        <radialGradient id="chicken-gizzard" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#c25547"/>
          <stop offset="100%" stop-color="#7a2c22"/>
        </radialGradient>
        <linearGradient id="chicken-airsac" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#dcefff"/>
          <stop offset="100%" stop-color="#a9cdea"/>
        </linearGradient>
        <linearGradient id="chicken-intestine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e5a98e"/>
          <stop offset="100%" stop-color="#b56f52"/>
        </linearGradient>
        <radialGradient id="chicken-proven" cx="45%" cy="40%">
          <stop offset="0%" stop-color="#d98c74"/>
          <stop offset="100%" stop-color="#9c4d3a"/>
        </radialGradient>
      </defs>

      <!-- 身體剖面輪廓 -->
      <path d="M150 210 Q150 150 175 120 L205 135 Q188 175 200 235 Q300 240 320 280 Q332 320 300 350 Q210 380 150 340 Q100 300 108 260 Q118 220 150 210 Z" fill="url(#chicken-outline)" stroke="#b09a6c" stroke-width="1.6"/>

      <!-- 氣囊（強調飛行呼吸系統） -->
      <ellipse data-part="氣囊" cx="255" cy="230" rx="34" ry="24" fill="url(#chicken-airsac)" stroke="#7fa9cc" stroke-width="1.2" opacity="0.85"/>
      <ellipse data-part="氣囊" cx="290" cy="300" rx="30" ry="26" fill="url(#chicken-airsac)" stroke="#7fa9cc" stroke-width="1.2" opacity="0.85"/>
      <ellipse data-part="氣囊" cx="180" cy="180" rx="22" ry="18" fill="url(#chicken-airsac)" stroke="#7fa9cc" stroke-width="1.2" opacity="0.85"/>

      <!-- 食道 -->
      <path data-part="食道" d="M180 128 Q176 170 188 205" fill="none" stroke="url(#chicken-intestine)" stroke-width="8" stroke-linecap="round"/>

      <!-- 嗉囊 -->
      <ellipse data-part="嗉囊" cx="188" cy="222" rx="30" ry="26" fill="url(#chicken-crop)" stroke="#8a4433" stroke-width="1.5"/>

      <!-- 腺胃（前胃） -->
      <ellipse data-part="腺胃" cx="212" cy="272" rx="18" ry="22" fill="url(#chicken-proven)" stroke="#7a3627" stroke-width="1.3"/>

      <!-- 砂囊 -->
      <ellipse data-part="砂囊" cx="210" cy="320" rx="32" ry="30" fill="url(#chicken-gizzard)" stroke="#5c2018" stroke-width="1.8"/>
      <!-- 砂囊內砂石 -->
      <circle cx="202" cy="316" r="2.4" fill="#cfc3aa"/>
      <circle cx="214" cy="322" r="2.8" fill="#bcae90"/>
      <circle cx="208" cy="328" r="2.2" fill="#d8cdb2"/>
      <circle cx="218" cy="312" r="2" fill="#c4b795"/>

      <!-- 小腸盤繞 -->
      <path data-part="腸道" d="M238 330 Q280 340 275 300 Q270 262 240 275 Q215 285 245 305 Q272 320 250 340" fill="none" stroke="url(#chicken-intestine)" stroke-width="9" stroke-linecap="round"/>

      <g class="labels">
        <line x1="176" y1="150" x2="120" y2="132" stroke="#666" stroke-width="1"/>
        <text x="52" y="136" font-size="13" fill="var(--ink)">食道</text>
        <line x1="160" y1="222" x2="96" y2="222" stroke="#666" stroke-width="1"/>
        <text x="34" y="226" font-size="13" fill="var(--ink)">嗉囊</text>
        <line x1="196" y1="272" x2="120" y2="288" stroke="#666" stroke-width="1"/>
        <text x="44" y="292" font-size="13" fill="var(--ink)">腺胃</text>
        <line x1="180" y1="326" x2="104" y2="352" stroke="#666" stroke-width="1"/>
        <text x="30" y="356" font-size="13" fill="var(--ink)">砂囊</text>
        <line x1="270" y1="316" x2="330" y2="352" stroke="#666" stroke-width="1"/>
        <text x="334" y="356" font-size="13" fill="var(--ink)">腸道</text>
        <line x1="285" y1="228" x2="345" y2="200" stroke="#666" stroke-width="1"/>
        <text x="330" y="192" font-size="13" fill="var(--ink)">氣囊</text>
      </g>`,
      parts: [
        { name: "食道", desc: "連接口腔與嗉囊的肌肉管道，運送吞下的食物。" },
        { name: "嗉囊", desc: "食道膨大形成的儲存袋，暫存並軟化食物。" },
        { name: "腺胃", desc: "又稱前胃，分泌胃液進行化學消化。" },
        { name: "砂囊", desc: "厚肌肉壁配合吞下的砂石磨碎食物，取代牙齒。" },
        { name: "腸道", desc: "盤繞的小腸吸收養分，效率高以配合飛行需求。" },
        { name: "氣囊", desc: "薄壁氣囊延伸全身，使氣體單向流動供氧充足。" }
      ]
    }
  ]
});

/* ============================================================
 * 2. 老鷹 eagle（Accipitridae）
 * ============================================================ */
window.ANATOMY.register({
  id: "eagle",
  name: "老鷹",
  latin: "Accipitridae",
  emoji: "🦅",
  kingdom: "animalia",
  group: "birds",
  rank: "鷹形目・鷹科",
  summary: "老鷹是頂級空中掠食者，具鉤狀利喙與強力爪。骨骼中空且具明顯龍骨突以附著飛行肌，翅膀羽毛層層排列成翼面，展現鳥類為飛行高度特化的構造。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 460 420",
      svg: `
      <defs>
        <radialGradient id="eagle-ext-body" cx="40%" cy="32%" r="75%">
          <stop offset="0%" stop-color="#8a6a46"/>
          <stop offset="55%" stop-color="#5c4127"/>
          <stop offset="100%" stop-color="#301f10"/>
        </radialGradient>
        <linearGradient id="eagle-ext-head" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stop-color="#fdf9f0"/>
          <stop offset="100%" stop-color="#d4c8ac"/>
        </linearGradient>
        <linearGradient id="eagle-ext-wing" x1="0" y1="0" x2="1" y2="0.55">
          <stop offset="0%" stop-color="#785838"/>
          <stop offset="55%" stop-color="#4e3720"/>
          <stop offset="100%" stop-color="#2a1c0e"/>
        </linearGradient>
        <linearGradient id="eagle-ext-wing2" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stop-color="#5c4229"/>
          <stop offset="100%" stop-color="#2c1d0e"/>
        </linearGradient>
        <linearGradient id="eagle-ext-beak" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stop-color="#5a5550"/>
          <stop offset="55%" stop-color="#33302c"/>
          <stop offset="100%" stop-color="#111010"/>
        </linearGradient>
        <linearGradient id="eagle-ext-talon" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stop-color="#f4d466"/>
          <stop offset="100%" stop-color="#b0821b"/>
        </linearGradient>
        <linearGradient id="eagle-ext-claw" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4a4640"/>
          <stop offset="100%" stop-color="#141210"/>
        </linearGradient>
        <radialGradient id="eagle-ext-eye" cx="40%" cy="33%" r="72%">
          <stop offset="0%" stop-color="#fbe08c"/>
          <stop offset="55%" stop-color="#e0a52a"/>
          <stop offset="100%" stop-color="#7a5010"/>
        </radialGradient>
      </defs>

      <!-- 右翼半展（覆羽層＋初級飛羽指狀展開） -->
      <path data-part="翅膀" d="M244 196 C312 158 378 168 434 202 C412 214 424 236 442 254 C398 250 340 240 262 236 C246 224 240 208 244 196 Z" fill="url(#eagle-ext-wing)" stroke="#241708" stroke-width="1.7"/>
      <!-- 翼上覆羽分層瓦片 -->
      <path d="M262 208 C312 190 366 194 414 214 C372 210 322 214 274 224 Z" fill="url(#eagle-ext-wing2)" stroke="#3a2712" stroke-width="0.9" opacity="0.85"/>
      <path d="M270 220 C316 208 360 212 402 228 C362 224 320 228 280 236 Z" fill="url(#eagle-ext-wing2)" stroke="#3a2712" stroke-width="0.8" opacity="0.75"/>
      <path d="M276 200 C336 186 392 194 420 212" fill="none" stroke="#a5895e" stroke-width="1" opacity="0.5"/>
      <path d="M278 216 C336 204 384 210 408 226" fill="none" stroke="#a5895e" stroke-width="0.9" opacity="0.45"/>
      <!-- 初級飛羽（分開的翼指） -->
      <g data-part="飛羽">
        <path d="M420 204 C432 194 446 186 452 182 C446 194 442 206 440 216 C432 212 426 208 420 204 Z" fill="#463320" stroke="#1e1408" stroke-width="1"/>
        <path d="M408 214 C422 206 438 200 446 198 C438 210 434 220 432 230 C424 224 416 218 408 214 Z" fill="#463320" stroke="#1e1408" stroke-width="1"/>
        <path d="M394 222 C410 216 426 214 436 214 C426 224 422 234 420 244 C410 236 402 228 394 222 Z" fill="#463320" stroke="#1e1408" stroke-width="1"/>
        <path d="M380 226 C396 222 410 222 420 224 C410 232 406 242 404 252 C396 242 388 232 380 226 Z" fill="#3e2d1c" stroke="#1e1408" stroke-width="1"/>
      </g>

      <!-- 左翼收攏於體側 -->
      <path data-part="翅膀" d="M154 202 C104 200 74 224 56 256 C92 250 118 244 138 234 C148 224 152 212 154 202 Z" fill="url(#eagle-ext-wing2)" stroke="#241708" stroke-width="1.5"/>
      <path d="M74 244 C100 238 122 232 140 224" fill="none" stroke="#a5895e" stroke-width="0.9" opacity="0.45"/>

      <!-- 身體（渾厚軀幹） -->
      <path d="M198 178 C240 178 272 206 272 244 C272 288 238 312 200 312 C160 312 132 286 132 246 C132 206 158 178 198 178 Z" fill="url(#eagle-ext-body)" stroke="#241708" stroke-width="1.7"/>
      <!-- 胸羽鱗狀質感短線 -->
      <path d="M158 224 C180 218 210 218 240 226" fill="none" stroke="#8a6a45" stroke-width="0.8" opacity="0.4"/>
      <path d="M152 250 C182 244 216 244 248 252" fill="none" stroke="#8a6a45" stroke-width="0.8" opacity="0.4"/>
      <path d="M156 276 C184 272 214 272 244 278" fill="none" stroke="#8a6a45" stroke-width="0.8" opacity="0.35"/>

      <!-- 尾羽（短扇形，白基深端） -->
      <path data-part="尾羽" d="M196 300 C190 340 176 366 168 384 C186 372 198 372 210 386 C224 362 238 336 244 302 C226 316 214 316 196 300 Z" fill="url(#eagle-ext-body)" stroke="#241708" stroke-width="1.4"/>
      <path d="M198 306 C194 336 186 360 180 380" fill="none" stroke="#8a6a45" stroke-width="0.8" opacity="0.5"/>
      <path d="M212 306 C214 336 220 358 228 376" fill="none" stroke="#8a6a45" stroke-width="0.8" opacity="0.45"/>

      <!-- 頸與白頭 -->
      <path d="M162 188 C156 154 172 130 194 122 L214 134 C200 160 200 186 214 206 C194 210 172 206 162 188 Z" fill="url(#eagle-ext-head)" stroke="#b6a988" stroke-width="1.2"/>
      <path d="M180 128 C176 156 178 180 190 200" fill="none" stroke="#cfc3a6" stroke-width="0.8" opacity="0.6"/>
      <ellipse cx="182" cy="126" rx="36" ry="31" fill="url(#eagle-ext-head)" stroke="#b6a988" stroke-width="1.2"/>
      <!-- 頭羽細紋 -->
      <path d="M158 120 C170 112 196 110 214 120" fill="none" stroke="#d8cdb2" stroke-width="0.7" opacity="0.6"/>

      <!-- 鉤狀喙（猛禽下鉤，蠟膜） -->
      <path d="M150 116 C154 112 162 112 164 118 C170 118 172 122 170 126 L150 130 Z" fill="#e8c24a" stroke="#a98a24" stroke-width="0.8"/>
      <path data-part="鉤狀喙" d="M150 120 C122 116 106 122 100 132 C114 130 124 130 130 138 C124 146 128 154 140 152 C152 150 156 138 156 126 C154 122 152 120 150 120 Z" fill="url(#eagle-ext-beak)" stroke="#000" stroke-width="1.2"/>
      <path d="M124 132 C116 132 108 134 104 138" fill="none" stroke="#6a6560" stroke-width="0.7" opacity="0.7"/>
      <!-- 鼻孔 -->
      <ellipse cx="140" cy="124" rx="2.4" ry="1.6" fill="#111"/>

      <!-- 眼（銳利黃眼＋威嚴眉脊） -->
      <path d="M158 108 C172 100 190 102 202 114 C188 106 172 108 162 118 Z" fill="#4a3a22" stroke="#2c2010" stroke-width="1"/>
      <ellipse cx="174" cy="122" rx="11" ry="10.4" fill="#c8991f" stroke="#4a3208" stroke-width="0.8" opacity="0.6"/>
      <circle data-part="眼" cx="174" cy="122" r="8.8" fill="url(#eagle-ext-eye)" stroke="#4a3208" stroke-width="1.2"/>
      <circle cx="176" cy="123" r="3.6" fill="#120c02"/>
      <circle cx="171.4" cy="118.6" r="1.9" fill="#fff" opacity="0.9"/>

      <!-- 遠側腿（後景） -->
      <path data-part="腿" d="M222 306 C224 320 224 332 226 340 L238 338 C236 326 234 316 232 306 Z" fill="#c9a24a" stroke="#8a6a20" stroke-width="1.1" opacity="0.85"/>
      <g data-part="爪" opacity="0.85">
        <path d="M230 340 L212 366" fill="none" stroke="url(#eagle-ext-talon)" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M230 340 L232 372" fill="none" stroke="url(#eagle-ext-talon)" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M230 340 L250 366" fill="none" stroke="url(#eagle-ext-talon)" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M212 366 C206 372 208 380 216 378" fill="none" stroke="url(#eagle-ext-claw)" stroke-width="3" stroke-linecap="round"/>
        <path d="M250 366 C256 372 254 380 246 378" fill="none" stroke="url(#eagle-ext-claw)" stroke-width="3" stroke-linecap="round"/>
      </g>

      <!-- 近側腿（羽褲＋粗跗蹠＋利爪） -->
      <path d="M180 300 C176 314 176 324 180 334 L200 332 C198 320 198 310 200 300 Z" fill="url(#eagle-ext-body)" stroke="#241708" stroke-width="1.2" opacity="0.9"/>
      <path data-part="腿" d="M184 332 C182 344 182 354 184 362 L198 360 C196 350 196 342 196 332 Z" fill="#d0a94e" stroke="#8a6a20" stroke-width="1.3"/>
      <line x1="185" y1="342" x2="197" y2="341" stroke="#8a6a20" stroke-width="0.7" opacity="0.6"/>
      <line x1="185" y1="350" x2="197" y2="349" stroke="#8a6a20" stroke-width="0.7" opacity="0.6"/>
      <g data-part="爪">
        <path d="M190 362 L168 388 C174 396 182 390 186 384" fill="none" stroke="url(#eagle-ext-talon)" stroke-width="7" stroke-linecap="round"/>
        <path d="M190 362 L192 394 C200 396 202 388 200 382" fill="none" stroke="url(#eagle-ext-talon)" stroke-width="7" stroke-linecap="round"/>
        <path d="M190 362 L212 388 C206 396 198 392 194 384" fill="none" stroke="url(#eagle-ext-talon)" stroke-width="7" stroke-linecap="round"/>
        <!-- 黑色鉤爪尖 -->
        <path d="M168 388 C162 394 164 402 172 400" fill="none" stroke="url(#eagle-ext-claw)" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M192 394 C192 402 200 404 202 396" fill="none" stroke="url(#eagle-ext-claw)" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M212 388 C218 394 216 402 208 400" fill="none" stroke="url(#eagle-ext-claw)" stroke-width="3.4" stroke-linecap="round"/>
      </g>

      <g class="labels">
        <line x1="112" y1="132" x2="58" y2="120" stroke="#666" stroke-width="1"/>
        <text x="14" y="124" font-size="13" fill="var(--ink)">鉤狀喙</text>
        <line x1="174" y1="122" x2="150" y2="76" stroke="#666" stroke-width="1"/>
        <text x="120" y="72" font-size="13" fill="var(--ink)">眼</text>
        <line x1="380" y1="204" x2="402" y2="152" stroke="#666" stroke-width="1"/>
        <text x="386" y="144" font-size="13" fill="var(--ink)">翅膀</text>
        <line x1="440" y1="212" x2="452" y2="178" stroke="#666" stroke-width="1"/>
        <text x="410" y="172" font-size="13" fill="var(--ink)">飛羽</text>
        <line x1="200" y1="356" x2="138" y2="372" stroke="#666" stroke-width="1"/>
        <text x="80" y="376" font-size="13" fill="var(--ink)">尾羽</text>
        <line x1="192" y1="344" x2="290" y2="322" stroke="#666" stroke-width="1"/>
        <text x="294" y="326" font-size="13" fill="var(--ink)">腿</text>
        <line x1="188" y1="388" x2="126" y2="380" stroke="#666" stroke-width="1"/>
        <text x="78" y="384" font-size="13" fill="var(--ink)">爪</text>
      </g>`,
      parts: [
        { name: "鉤狀喙", desc: "尖銳下鉤的角質喙，用於撕裂獵物血肉。" },
        { name: "眼", desc: "視力極佳的黃色眼，可在高空發現地面獵物。" },
        { name: "翅膀", desc: "寬長的翼面產生升力，適合長時間盤旋滑翔。" },
        { name: "飛羽", desc: "翼端可分開的初級飛羽減少亂流、控制方向。" },
        { name: "尾羽", desc: "扇形尾羽作為方向舵，飛行中急轉與煞停。" },
        { name: "腿", desc: "粗壯有力的腿部傳遞抓握獵物的巨大力量。" },
        { name: "爪", desc: "彎鉤利爪能刺穿並牢牢抓住獵物。" }
      ]
    },
    {
      id: "skeleton",
      name: "骨骼（龍骨突・中空骨）",
      viewBox: "0 0 420 440",
      svg: `
      <defs>
        <linearGradient id="eagle-bone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f3ecd8"/>
          <stop offset="100%" stop-color="#d6c9a8"/>
        </linearGradient>
        <linearGradient id="eagle-keel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#efe6cf"/>
          <stop offset="100%" stop-color="#c9b98f"/>
        </linearGradient>
        <linearGradient id="eagle-hollow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#efe6cf"/>
          <stop offset="100%" stop-color="#cdbf9c"/>
        </linearGradient>
      </defs>

      <!-- 頭骨 -->
      <path data-part="頭骨" d="M120 90 Q90 88 84 110 Q88 122 104 120 Q100 132 116 130 Q140 126 148 106 Q146 88 120 90 Z" fill="url(#eagle-bone)" stroke="#a89666" stroke-width="1.4"/>
      <circle cx="118" cy="106" r="7" fill="#efe6cf" stroke="#a89666" stroke-width="1"/>
      <circle cx="118" cy="106" r="3" fill="#8a7c56"/>

      <!-- 頸椎 -->
      <path data-part="脊椎" d="M140 118 Q160 135 175 160" fill="none" stroke="url(#eagle-bone)" stroke-width="9" stroke-linecap="round"/>
      <circle cx="150" cy="128" r="4" fill="#e7ddc4" stroke="#a89666" stroke-width="0.8"/>
      <circle cx="162" cy="142" r="4" fill="#e7ddc4" stroke="#a89666" stroke-width="0.8"/>

      <!-- 胸椎/軀幹脊椎 -->
      <path data-part="脊椎" d="M178 162 Q220 168 258 180" fill="none" stroke="url(#eagle-bone)" stroke-width="10" stroke-linecap="round"/>

      <!-- 肋骨 -->
      <g stroke="#b6a476" stroke-width="3" fill="none">
        <path d="M190 168 Q188 210 175 240"/>
        <path d="M210 172 Q210 214 198 246"/>
        <path d="M230 176 Q232 216 222 248"/>
      </g>

      <!-- 胸骨與龍骨突（強調飛行肌附著） -->
      <path data-part="胸骨" d="M170 240 Q215 250 255 240 L250 262 Q212 272 176 262 Z" fill="url(#eagle-bone)" stroke="#a89666" stroke-width="1.4"/>
      <path data-part="龍骨突" d="M180 262 Q212 268 246 262 L228 330 Q212 340 196 330 Z" fill="url(#eagle-keel)" stroke="#9c8a5a" stroke-width="1.6"/>
      <line x1="213" y1="266" x2="213" y2="328" stroke="#9c8a5a" stroke-width="1" opacity="0.7"/>

      <!-- 翼骨（肱骨・尺橈骨・掌指骨） -->
      <path data-part="肱骨" d="M260 178 Q300 172 340 190" fill="none" stroke="url(#eagle-bone)" stroke-width="11" stroke-linecap="round"/>
      <path d="M340 190 Q368 200 392 188" fill="none" stroke="url(#eagle-bone)" stroke-width="8" stroke-linecap="round"/>
      <path d="M340 196 Q366 208 390 200" fill="none" stroke="url(#eagle-bone)" stroke-width="6" stroke-linecap="round"/>
      <path d="M390 192 Q405 188 412 178" fill="none" stroke="url(#eagle-bone)" stroke-width="5" stroke-linecap="round"/>

      <!-- 中空骨剖面示意（放大圓） -->
      <g data-part="中空骨">
        <circle cx="315" cy="300" r="42" fill="url(#eagle-hollow)" stroke="#a89666" stroke-width="1.6"/>
        <circle cx="315" cy="300" r="26" fill="#fbf7ec" stroke="#b6a476" stroke-width="1.2"/>
        <!-- 內部支撐骨小樑（桁架結構） -->
        <line x1="289" y1="300" x2="341" y2="300" stroke="#c9b98f" stroke-width="1.4"/>
        <line x1="298" y1="282" x2="332" y2="318" stroke="#c9b98f" stroke-width="1.2"/>
        <line x1="332" y1="282" x2="298" y2="318" stroke="#c9b98f" stroke-width="1.2"/>
        <line x1="315" y1="274" x2="315" y2="326" stroke="#c9b98f" stroke-width="1.2"/>
      </g>

      <!-- 骨盆與腿骨 -->
      <ellipse data-part="骨盆" cx="270" cy="230" rx="26" ry="16" fill="url(#eagle-bone)" stroke="#a89666" stroke-width="1.3"/>
      <path d="M270 244 Q272 290 258 330" fill="none" stroke="url(#eagle-bone)" stroke-width="8" stroke-linecap="round"/>
      <path d="M258 330 Q252 366 262 396" fill="none" stroke="url(#eagle-bone)" stroke-width="6" stroke-linecap="round"/>

      <g class="labels">
        <line x1="110" y1="106" x2="60" y2="90" stroke="#666" stroke-width="1"/>
        <text x="18" y="94" font-size="13" fill="var(--ink)">頭骨</text>
        <line x1="220" y1="170" x2="240" y2="140" stroke="#666" stroke-width="1"/>
        <text x="244" y="136" font-size="13" fill="var(--ink)">脊椎</text>
        <line x1="212" y1="250" x2="130" y2="238" stroke="#666" stroke-width="1"/>
        <text x="60" y="242" font-size="13" fill="var(--ink)">胸骨</text>
        <line x1="213" y1="300" x2="140" y2="320" stroke="#666" stroke-width="1"/>
        <text x="40" y="324" font-size="13" fill="var(--ink)">龍骨突</text>
        <line x1="330" y1="185" x2="345" y2="150" stroke="#666" stroke-width="1"/>
        <text x="300" y="144" font-size="13" fill="var(--ink)">肱骨（翼骨）</text>
        <line x1="356" y1="300" x2="376" y2="352" stroke="#666" stroke-width="1"/>
        <text x="330" y="372" font-size="13" fill="var(--ink)">中空骨剖面</text>
        <line x1="284" y1="228" x2="330" y2="212" stroke="#666" stroke-width="1"/>
        <text x="334" y="216" font-size="13" fill="var(--ink)">骨盆</text>
      </g>`,
      parts: [
        { name: "頭骨", desc: "輕薄的頭骨減輕重量，眼窩巨大以容納大眼。" },
        { name: "脊椎", desc: "頸椎靈活、軀幹椎癒合成剛性支架承受飛行應力。" },
        { name: "胸骨", desc: "寬大胸骨提供飛行肌附著的堅固基座。" },
        { name: "龍骨突", desc: "胸骨向下延伸的板狀突起，附著強大的胸肌以拍翼。" },
        { name: "肱骨", desc: "翼內的上臂骨，與尺橈骨、掌指骨組成翼骨架。" },
        { name: "中空骨", desc: "骨內中空並有小樑支撐，兼顧輕量與強度。" },
        { name: "骨盆", desc: "癒合的骨盆穩固後肢，承受落地衝擊。" }
      ]
    },
    {
      id: "wing-feather",
      name: "翅膀羽毛構造",
      viewBox: "0 0 440 400",
      svg: `
      <defs>
        <linearGradient id="eaglewf-arm" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f0e7d2"/>
          <stop offset="100%" stop-color="#cdbf9c"/>
        </linearGradient>
        <linearGradient id="eaglewf-primary" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stop-color="#6a4d30"/>
          <stop offset="100%" stop-color="#31220f"/>
        </linearGradient>
        <linearGradient id="eaglewf-secondary" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stop-color="#8a6a44"/>
          <stop offset="100%" stop-color="#4a341c"/>
        </linearGradient>
        <linearGradient id="eaglewf-covert" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a4835a"/>
          <stop offset="100%" stop-color="#6a4d30"/>
        </linearGradient>
      </defs>

      <!-- 翼骨基架（隱約） -->
      <path d="M60 210 Q160 190 250 200 Q330 208 400 250" fill="none" stroke="url(#eaglewf-arm)" stroke-width="10" stroke-linecap="round" opacity="0.9"/>

      <!-- 三級飛羽（近身體） -->
      <g data-part="三級飛羽">
        <path d="M80 205 Q70 250 60 290 Q85 275 92 235 Z" fill="url(#eaglewf-secondary)" stroke="#3a2916" stroke-width="1"/>
        <path d="M100 205 Q92 252 84 292 Q108 276 112 236 Z" fill="url(#eaglewf-secondary)" stroke="#3a2916" stroke-width="1"/>
      </g>

      <!-- 次級飛羽（中段翼面） -->
      <g data-part="次級飛羽">
        <path d="M130 202 Q126 256 120 300 Q146 282 148 234 Z" fill="url(#eaglewf-secondary)" stroke="#3a2916" stroke-width="1"/>
        <path d="M158 202 Q156 258 152 302 Q178 284 178 234 Z" fill="url(#eaglewf-secondary)" stroke="#3a2916" stroke-width="1"/>
        <path d="M186 203 Q186 258 184 304 Q210 286 208 236 Z" fill="url(#eaglewf-secondary)" stroke="#3a2916" stroke-width="1"/>
      </g>

      <!-- 初級飛羽（翼端最長、可分指） -->
      <g data-part="初級飛羽">
        <path d="M240 208 Q252 264 258 316 Q280 292 268 236 Z" fill="url(#eaglewf-primary)" stroke="#241809" stroke-width="1"/>
        <path d="M272 214 Q290 268 300 316 Q320 288 300 234 Z" fill="url(#eaglewf-primary)" stroke="#241809" stroke-width="1"/>
        <path d="M304 222 Q326 270 340 312 Q356 282 332 234 Z" fill="url(#eaglewf-primary)" stroke="#241809" stroke-width="1"/>
        <path d="M336 232 Q360 272 376 306 Q388 278 362 238 Z" fill="url(#eaglewf-primary)" stroke="#241809" stroke-width="1"/>
      </g>

      <!-- 覆羽（覆蓋羽根，形成平滑翼面前緣） -->
      <g data-part="覆羽">
        <path d="M100 196 Q180 182 300 200 Q220 210 130 210 Z" fill="url(#eaglewf-covert)" stroke="#4a341c" stroke-width="1"/>
        <path d="M110 186 Q190 174 290 190" fill="none" stroke="#7a5c3a" stroke-width="2" opacity="0.7"/>
      </g>

      <!-- 小翼羽（前緣小翼，低速防失速） -->
      <path data-part="小翼羽" d="M232 190 Q210 176 196 182 Q214 188 220 200 Z" fill="url(#eaglewf-primary)" stroke="#241809" stroke-width="1"/>

      <!-- 前緣氣流箭頭示意 -->
      <path d="M40 175 L120 172" stroke="#4a90c4" stroke-width="1.4" fill="none" opacity="0.6"/>
      <path d="M112 168 L122 172 L112 176" fill="none" stroke="#4a90c4" stroke-width="1.4" opacity="0.6"/>

      <g class="labels">
        <line x1="360" y1="270" x2="400" y2="240" stroke="#666" stroke-width="1"/>
        <text x="336" y="234" font-size="13" fill="var(--ink)">初級飛羽</text>
        <line x1="165" y1="270" x2="120" y2="330" stroke="#666" stroke-width="1"/>
        <text x="70" y="346" font-size="13" fill="var(--ink)">次級飛羽</text>
        <line x1="75" y1="255" x2="40" y2="290" stroke="#666" stroke-width="1"/>
        <text x="10" y="306" font-size="13" fill="var(--ink)">三級飛羽</text>
        <line x1="200" y1="196" x2="220" y2="150" stroke="#666" stroke-width="1"/>
        <text x="224" y="146" font-size="13" fill="var(--ink)">覆羽</text>
        <line x1="212" y1="188" x2="150" y2="130" stroke="#666" stroke-width="1"/>
        <text x="90" y="126" font-size="13" fill="var(--ink)">小翼羽</text>
      </g>`,
      parts: [
        { name: "初級飛羽", desc: "附著於掌指骨的翼端長羽，提供推進力並可分指減阻。" },
        { name: "次級飛羽", desc: "附著於尺骨的中段羽，主要提供升力構成翼面。" },
        { name: "三級飛羽", desc: "最靠近身體的飛羽，填補翼與身體間的空隙。" },
        { name: "覆羽", desc: "層疊覆蓋飛羽根部，形成平滑的翼上表面。" },
        { name: "小翼羽", desc: "前緣的小簇羽毛，低速時展開防止失速。" }
      ]
    }
  ]
});

/* ============================================================
 * 3. 企鵝 penguin（Spheniscidae）
 * ============================================================ */
window.ANATOMY.register({
  id: "penguin",
  name: "企鵝",
  latin: "Spheniscidae",
  emoji: "🐧",
  kingdom: "animalia",
  group: "birds",
  rank: "企鵝目・企鵝科",
  summary: "企鵝是不會飛卻極善游泳的海鳥。翅膀特化為硬挺鰭狀肢划水，體表覆密實防水羽並蓄厚皮下脂肪，於極地嚴寒中維持體溫，是保暖與水中運動特化的典範。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 380 460",
      svg: `
      <defs>
        <linearGradient id="penguin-ext-back" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stop-color="#3f4c58"/>
          <stop offset="55%" stop-color="#232c34"/>
          <stop offset="100%" stop-color="#0e1216"/>
        </linearGradient>
        <linearGradient id="penguin-ext-back2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#2c353d"/>
          <stop offset="100%" stop-color="#0c1013"/>
        </linearGradient>
        <radialGradient id="penguin-ext-belly" cx="45%" cy="34%" r="70%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="70%" stop-color="#eef2f5"/>
          <stop offset="100%" stop-color="#d3dade"/>
        </radialGradient>
        <linearGradient id="penguin-ext-head" x1="0.2" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stop-color="#39454f"/>
          <stop offset="100%" stop-color="#0e1318"/>
        </linearGradient>
        <linearGradient id="penguin-ext-beak" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stop-color="#3a3f45"/>
          <stop offset="100%" stop-color="#14171a"/>
        </linearGradient>
        <linearGradient id="penguin-ext-mandible" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e88f3e"/>
          <stop offset="100%" stop-color="#9a5418"/>
        </linearGradient>
        <linearGradient id="penguin-ext-foot" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stop-color="#e6a850"/>
          <stop offset="100%" stop-color="#9c611a"/>
        </linearGradient>
        <radialGradient id="penguin-ext-eye" cx="38%" cy="32%" r="72%">
          <stop offset="0%" stop-color="#5a4a32"/>
          <stop offset="60%" stop-color="#241a0e"/>
          <stop offset="100%" stop-color="#000"/>
        </radialGradient>
        <radialGradient id="penguin-ext-cheek" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stop-color="#f9d05a"/>
          <stop offset="60%" stop-color="#f0b636"/>
          <stop offset="100%" stop-color="#e0a22a00"/>
        </radialGradient>
      </defs>

      <!-- 遠側鰭狀翼（後景，收於體後） -->
      <path data-part="鰭狀翼" d="M264 176 C306 214 314 288 296 340 C288 316 272 268 256 236 C254 210 258 190 264 176 Z" fill="url(#penguin-ext-back2)" stroke="#0c1013" stroke-width="1.4" opacity="0.9"/>

      <!-- 身體（直立紡錘形，背側深色羽衣） -->
      <path data-part="羽衣" d="M190 66 C138 70 116 132 110 200 C104 280 108 348 132 402 C150 434 172 442 190 442 C208 442 230 434 248 402 C272 348 276 280 270 200 C264 132 242 70 190 66 Z" fill="url(#penguin-ext-back)" stroke="#0c1013" stroke-width="1.7"/>
      <!-- 背羽走向細線 -->
      <path d="M132 160 C126 240 130 330 152 400" fill="none" stroke="#4a5661" stroke-width="0.8" opacity="0.5"/>
      <path d="M248 160 C254 240 250 330 228 400" fill="none" stroke="#4a5661" stroke-width="0.8" opacity="0.5"/>

      <!-- 腹側白羽（反蔭偽裝，柔和邊界） -->
      <path data-part="羽衣" d="M190 118 C154 126 142 200 140 268 C139 340 158 400 178 418 C185 424 195 424 202 418 C222 400 241 340 240 268 C238 200 226 126 190 118 Z" fill="url(#penguin-ext-belly)" stroke="#cbd3d8" stroke-width="1"/>
      <!-- 腹羽柔和陰影 -->
      <path d="M158 220 C152 290 160 360 178 408" fill="none" stroke="#c8d1d6" stroke-width="1" opacity="0.6"/>
      <path d="M222 220 C228 290 220 360 202 408" fill="none" stroke="#c8d1d6" stroke-width="1" opacity="0.6"/>

      <!-- 頭（黑頭連背） -->
      <path data-part="羽衣" d="M190 44 C154 46 136 76 138 110 C140 142 164 158 190 158 C216 158 240 142 242 110 C244 76 226 46 190 44 Z" fill="url(#penguin-ext-head)" stroke="#0c1013" stroke-width="1.5"/>
      <!-- 頰部橙黃斑（帝王企鵝特徵，向頸部漸暈） -->
      <path d="M146 92 C132 100 130 128 140 150 C150 138 152 112 154 94 Z" fill="url(#penguin-ext-cheek)" opacity="0.95"/>
      <path d="M234 92 C248 100 250 128 240 150 C230 138 228 112 226 94 Z" fill="url(#penguin-ext-cheek)" opacity="0.95"/>
      <!-- 喉部橙暈 -->
      <path d="M168 150 C176 168 204 168 212 150 C204 176 176 176 168 150 Z" fill="url(#penguin-ext-cheek)" opacity="0.7"/>

      <!-- 喙（細長，下喙橙色喙板） -->
      <path data-part="喙" d="M162 104 C136 106 118 114 108 122 C122 124 136 122 150 118 C158 124 168 120 172 112 Z" fill="url(#penguin-ext-beak)" stroke="#111417" stroke-width="1.1"/>
      <path d="M138 121 C126 124 116 128 110 132 C124 132 138 130 150 126 Z" fill="url(#penguin-ext-mandible)" stroke="#7a4210" stroke-width="0.9"/>
      <line x1="118" y1="120" x2="164" y2="112" stroke="#0a0d10" stroke-width="0.7" opacity="0.7"/>

      <!-- 眼（立體） -->
      <ellipse cx="170" cy="86" rx="8.4" ry="8" fill="#2a2016" opacity="0.5"/>
      <circle data-part="眼" cx="170" cy="86" r="6.6" fill="url(#penguin-ext-eye)" stroke="#1a1206" stroke-width="0.8"/>
      <circle cx="170" cy="86" r="3" fill="#0a0703"/>
      <circle cx="167.6" cy="83.6" r="1.8" fill="#fff" opacity="0.9"/>

      <!-- 近側鰭狀翼（前景，硬挺槳狀） -->
      <path data-part="鰭狀翼" d="M116 174 C72 214 62 292 82 348 C92 322 106 270 122 236 C124 210 120 190 116 174 Z" fill="url(#penguin-ext-back)" stroke="#0c1013" stroke-width="1.5"/>
      <path d="M104 200 C88 244 84 300 92 338" fill="none" stroke="#4a5661" stroke-width="0.8" opacity="0.55"/>
      <!-- 鰭翼白色後緣 -->
      <path d="M84 344 C78 322 84 268 100 232" fill="none" stroke="#dfe6ea" stroke-width="1.4" opacity="0.55"/>

      <!-- 蹼足（身體後端，橙色蹼） -->
      <g data-part="蹼足">
        <path d="M160 434 C150 452 132 456 118 456 C136 448 150 446 160 440 Z" fill="url(#penguin-ext-foot)" stroke="#7a4a10" stroke-width="1.2"/>
        <path d="M156 438 L134 452 M156 438 L146 456 M156 438 L160 456" stroke="#a8681a" stroke-width="0.8" opacity="0.7"/>
        <path d="M220 434 C230 452 248 456 262 456 C244 448 230 446 220 440 Z" fill="url(#penguin-ext-foot)" stroke="#7a4a10" stroke-width="1.2"/>
        <path d="M224 438 L246 452 M224 438 L234 456 M224 438 L220 456" stroke="#a8681a" stroke-width="0.8" opacity="0.7"/>
      </g>

      <g class="labels">
        <line x1="130" y1="118" x2="66" y2="128" stroke="#666" stroke-width="1"/>
        <text x="24" y="132" font-size="13" fill="var(--ink)">喙</text>
        <line x1="170" y1="86" x2="120" y2="54" stroke="#666" stroke-width="1"/>
        <text x="78" y="52" font-size="13" fill="var(--ink)">眼</text>
        <line x1="92" y1="272" x2="42" y2="264" stroke="#666" stroke-width="1"/>
        <text x="6" y="252" font-size="13" fill="var(--ink)">鰭狀翼</text>
        <line x1="196" y1="180" x2="300" y2="150" stroke="#666" stroke-width="1"/>
        <text x="292" y="142" font-size="13" fill="var(--ink)">背側深色羽衣</text>
        <line x1="196" y1="300" x2="300" y2="330" stroke="#666" stroke-width="1"/>
        <text x="292" y="334" font-size="13" fill="var(--ink)">腹側白羽</text>
        <line x1="228" y1="446" x2="290" y2="440" stroke="#666" stroke-width="1"/>
        <text x="294" y="444" font-size="13" fill="var(--ink)">蹼足</text>
      </g>`,
      parts: [
        { name: "喙", desc: "尖長的喙用於捕捉魚類、磷蝦等滑溜獵物。" },
        { name: "眼", desc: "適應水下視覺，能在昏暗海中辨識獵物。" },
        { name: "鰭狀翼", desc: "翅膀特化為硬挺鰭狀肢，如槳般划水推進。" },
        { name: "羽衣", desc: "背深腹白的反蔭偽裝，海中不易被上下天敵發現。" },
        { name: "蹼足", desc: "位於身體後端的蹼足，游泳時掌舵、陸上直立行走。" }
      ]
    },
    {
      id: "insulation",
      name: "保暖構造（脂肪・羽毛）",
      viewBox: "0 0 400 420",
      svg: `
      <defs>
        <linearGradient id="penguin-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0d8c0"/>
          <stop offset="100%" stop-color="#d8b596"/>
        </linearGradient>
        <linearGradient id="penguin-fat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fdf3c8"/>
          <stop offset="100%" stop-color="#f0dc88"/>
        </linearGradient>
        <linearGradient id="penguin-muscle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b0503f"/>
          <stop offset="100%" stop-color="#7a2d26"/>
        </linearGradient>
        <linearGradient id="penguin-feather-layer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#3a4650"/>
          <stop offset="100%" stop-color="#1a2126"/>
        </linearGradient>
        <radialGradient id="penguin-down" cx="50%" cy="50%">
          <stop offset="0%" stop-color="#efe3d0"/>
          <stop offset="100%" stop-color="#cdbda2"/>
        </radialGradient>
      </defs>

      <!-- 體壁分層剖面（由外到內） -->
      <!-- 外層防水羽 -->
      <path data-part="防水外羽" d="M60 60 Q60 210 60 360 L110 360 Q110 210 110 60 Z" fill="url(#penguin-feather-layer)" stroke="#12171b" stroke-width="1.4"/>
      <!-- 羽片斜紋 -->
      <g stroke="#5a6670" stroke-width="1" opacity="0.6">
        <line x1="64" y1="80" x2="106" y2="70"/>
        <line x1="64" y1="120" x2="106" y2="110"/>
        <line x1="64" y1="160" x2="106" y2="150"/>
        <line x1="64" y1="200" x2="106" y2="190"/>
        <line x1="64" y1="240" x2="106" y2="230"/>
        <line x1="64" y1="280" x2="106" y2="270"/>
        <line x1="64" y1="320" x2="106" y2="310"/>
      </g>

      <!-- 絨羽層（捕捉空氣） -->
      <path data-part="絨羽" d="M110 60 L150 60 Q150 210 150 360 L110 360 Z" fill="url(#penguin-down)" stroke="#b6a687" stroke-width="1.2"/>
      <g fill="#fff" opacity="0.5">
        <circle cx="122" cy="100" r="5"/><circle cx="138" cy="130" r="5"/>
        <circle cx="126" cy="170" r="5"/><circle cx="140" cy="210" r="5"/>
        <circle cx="124" cy="250" r="5"/><circle cx="138" cy="290" r="5"/>
        <circle cx="128" cy="330" r="5"/>
      </g>

      <!-- 皮膚 -->
      <path data-part="皮膚" d="M150 60 L172 60 L172 360 L150 360 Z" fill="url(#penguin-skin)" stroke="#c49a76" stroke-width="1.2"/>

      <!-- 皮下脂肪層（強調保暖） -->
      <path data-part="皮下脂肪" d="M172 60 L228 60 L228 360 L172 360 Z" fill="url(#penguin-fat)" stroke="#d8bf5c" stroke-width="1.3"/>
      <!-- 脂肪細胞紋理 -->
      <g stroke="#e6cf6a" stroke-width="0.8" fill="none" opacity="0.8">
        <circle cx="188" cy="100" r="8"/><circle cx="210" cy="120" r="8"/>
        <circle cx="192" cy="150" r="8"/><circle cx="214" cy="180" r="8"/>
        <circle cx="188" cy="210" r="8"/><circle cx="212" cy="240" r="8"/>
        <circle cx="190" cy="280" r="8"/><circle cx="212" cy="310" r="8"/>
        <circle cx="192" cy="340" r="8"/>
      </g>

      <!-- 肌肉層 -->
      <path data-part="肌肉" d="M228 60 L270 60 L270 360 L228 360 Z" fill="url(#penguin-muscle)" stroke="#5c211c" stroke-width="1.3"/>

      <!-- 熱流箭頭：脂肪阻隔散熱 -->
      <g opacity="0.7">
        <path d="M300 150 L250 150" stroke="#c0392b" stroke-width="1.6"/>
        <path d="M258 145 L248 150 L258 155" fill="none" stroke="#c0392b" stroke-width="1.6"/>
        <text x="304" y="154" font-size="11" fill="#c0392b">體熱</text>
        <path d="M300 250 L232 250" stroke="#c0392b" stroke-width="1.6" stroke-dasharray="4 4"/>
        <text x="304" y="254" font-size="11" fill="#c0392b">受阻</text>
      </g>

      <g class="labels">
        <line x1="85" y1="60" x2="85" y2="30" stroke="#666" stroke-width="1"/>
        <text x="40" y="26" font-size="13" fill="var(--ink)">防水外羽</text>
        <line x1="130" y1="60" x2="150" y2="30" stroke="#666" stroke-width="1"/>
        <text x="150" y="26" font-size="13" fill="var(--ink)">絨羽</text>
        <line x1="161" y1="360" x2="120" y2="392" stroke="#666" stroke-width="1"/>
        <text x="76" y="396" font-size="13" fill="var(--ink)">皮膚</text>
        <line x1="200" y1="360" x2="200" y2="396" stroke="#666" stroke-width="1"/>
        <text x="150" y="410" font-size="13" fill="var(--ink)">皮下脂肪層</text>
        <line x1="249" y1="360" x2="300" y2="392" stroke="#666" stroke-width="1"/>
        <text x="304" y="396" font-size="13" fill="var(--ink)">肌肉</text>
      </g>`,
      parts: [
        { name: "防水外羽", desc: "緊密重疊的外層羽片塗覆油脂，阻擋海水滲入。" },
        { name: "絨羽", desc: "靠近皮膚的絨羽蓬鬆，鎖住空氣形成隔熱層。" },
        { name: "皮膚", desc: "羽毛與脂肪之間的體表屏障。" },
        { name: "皮下脂肪", desc: "厚實脂肪儲能並隔絕散熱，是極地保暖關鍵。" },
        { name: "肌肉", desc: "體壁肌肉可顫抖產熱，並驅動鰭狀翼划水。" }
      ]
    }
  ]
});

/* ============================================================
 * 4. 羽毛構造 feather（構造專題）
 * ============================================================ */
window.ANATOMY.register({
  id: "feather-anatomy",
  name: "羽毛構造",
  latin: "Pluma",
  emoji: "🪶",
  kingdom: "animalia",
  group: "birds",
  rank: "構造專題・角質衍生物",
  summary: "羽毛是鳥類特有的角質構造。羽軸兩側伸出羽枝，羽枝再分出帶鉤與帶槽的羽小枝，彼此以微小鉤互相扣連成平整而堅韌的羽片，兼具輕量、防水與飛行功能。",
  views: [
    {
      id: "whole",
      name: "整體構造",
      viewBox: "0 0 400 460",
      svg: `
      <defs>
        <linearGradient id="feather-rachis" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f4ecd6"/>
          <stop offset="100%" stop-color="#cdbf98"/>
        </linearGradient>
        <linearGradient id="feather-vane" x1="0" y1="0" x2="1" y2="0.2">
          <stop offset="0%" stop-color="#8a6a44"/>
          <stop offset="55%" stop-color="#6a4d30"/>
          <stop offset="100%" stop-color="#3a2915"/>
        </linearGradient>
        <linearGradient id="feather-calamus" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#efe6cf"/>
          <stop offset="100%" stop-color="#e0d3b0"/>
        </linearGradient>
      </defs>

      <!-- 羽片（外翈/內翈） -->
      <path data-part="羽片" d="M200 60 Q140 120 132 250 Q132 330 165 380 L198 350 Q196 200 200 70 Z" fill="url(#feather-vane)" stroke="#2e2214" stroke-width="1.2"/>
      <path data-part="羽片" d="M200 60 Q260 120 268 250 Q268 330 235 380 L202 350 Q204 200 200 70 Z" fill="url(#feather-vane)" stroke="#2e2214" stroke-width="1.2" opacity="0.92"/>

      <!-- 羽枝細紋 -->
      <g stroke="#4a341c" stroke-width="0.8" opacity="0.55">
        <path d="M198 110 Q165 118 148 150" fill="none"/>
        <path d="M198 150 Q160 158 142 195" fill="none"/>
        <path d="M198 200 Q158 210 140 250" fill="none"/>
        <path d="M198 250 Q160 260 146 300" fill="none"/>
        <path d="M198 300 Q166 312 158 345" fill="none"/>
        <path d="M202 110 Q235 118 252 150" fill="none"/>
        <path d="M202 150 Q240 158 258 195" fill="none"/>
        <path d="M202 200 Q242 210 260 250" fill="none"/>
        <path d="M202 250 Q240 260 254 300" fill="none"/>
        <path d="M202 300 Q234 312 242 345" fill="none"/>
      </g>

      <!-- 羽軸 -->
      <path data-part="羽軸" d="M197 66 Q196 210 199 378 L203 378 Q206 210 203 66 Z" fill="url(#feather-rachis)" stroke="#9c8a5a" stroke-width="1"/>

      <!-- 羽根（中空管） -->
      <path data-part="羽根" d="M198 380 L197 430 Q200 436 203 430 L202 380 Z" fill="url(#feather-calamus)" stroke="#9c8a5a" stroke-width="1.2"/>
      <ellipse cx="200" cy="430" rx="4" ry="2.5" fill="#bdae86" stroke="#9c8a5a" stroke-width="0.8"/>

      <!-- 放大框（指示羽小枝細節在下一視圖） -->
      <rect x="132" y="200" width="60" height="60" fill="none" stroke="#4a90c4" stroke-width="1.2" stroke-dasharray="4 3"/>

      <g class="labels">
        <line x1="200" y1="220" x2="300" y2="200" stroke="#666" stroke-width="1"/>
        <text x="304" y="204" font-size="13" fill="var(--ink)">羽軸</text>
        <line x1="150" y1="150" x2="70" y2="130" stroke="#666" stroke-width="1"/>
        <text x="24" y="134" font-size="13" fill="var(--ink)">羽枝</text>
        <line x1="150" y1="330" x2="70" y2="350" stroke="#666" stroke-width="1"/>
        <text x="24" y="354" font-size="13" fill="var(--ink)">羽片（翈）</text>
        <line x1="201" y1="405" x2="300" y2="400" stroke="#666" stroke-width="1"/>
        <text x="304" y="404" font-size="13" fill="var(--ink)">羽根</text>
        <line x1="192" y1="230" x2="120" y2="250" stroke="#666" stroke-width="1"/>
        <text x="30" y="254" font-size="13" fill="var(--ink)">放大處</text>
      </g>`,
      parts: [
        { name: "羽軸", desc: "羽毛中央的堅硬中軸，兩側伸出羽枝支撐整片羽。" },
        { name: "羽枝", desc: "自羽軸斜向排列的分枝，並列組成羽片。" },
        { name: "羽片", desc: "羽枝相互扣連而成的平整面，分內外翈以受風。" },
        { name: "羽根", desc: "羽軸基部中空的羽根插入皮膚毛囊中固定。" }
      ]
    },
    {
      id: "microstructure",
      name: "羽小枝與鉤（放大）",
      viewBox: "0 0 440 380",
      svg: `
      <defs>
        <linearGradient id="feathermic-barb" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#8a6a44"/>
          <stop offset="100%" stop-color="#4a341c"/>
        </linearGradient>
        <linearGradient id="feathermic-barbule" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#b89a6a"/>
          <stop offset="100%" stop-color="#6a4d30"/>
        </linearGradient>
      </defs>

      <!-- 兩根相鄰羽枝（粗幹） -->
      <path data-part="羽枝" d="M40 120 Q220 108 410 118 L410 132 Q220 122 40 134 Z" fill="url(#feathermic-barb)" stroke="#2e2214" stroke-width="1.2"/>
      <path data-part="羽枝" d="M40 250 Q220 238 410 248 L410 262 Q220 252 40 264 Z" fill="url(#feathermic-barb)" stroke="#2e2214" stroke-width="1.2"/>

      <!-- 上羽枝：帶鉤羽小枝（向下伸、末端有小鉤） -->
      <g data-part="帶鉤羽小枝">
        <path d="M90 134 Q100 170 96 200" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M96 200 q6 6 0 12" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M140 134 Q150 170 146 200" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M146 200 q6 6 0 12" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M190 134 Q200 170 196 200" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M196 200 q6 6 0 12" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M240 134 Q250 170 246 200" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M246 200 q6 6 0 12" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M300 134 Q310 170 306 200" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M306 200 q6 6 0 12" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
      </g>

      <!-- 下羽枝：帶槽羽小枝（向上伸，供鉤扣住） -->
      <g data-part="帶槽羽小枝">
        <path d="M110 250 Q118 218 112 196" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M160 250 Q168 218 162 196" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M210 250 Q218 218 212 196" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M260 250 Q268 218 262 196" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
        <path d="M320 250 Q328 218 322 196" fill="none" stroke="url(#feathermic-barbule)" stroke-width="3"/>
      </g>

      <!-- 鉤扣連處放大圈 -->
      <g data-part="鉤">
        <circle cx="112" cy="204" r="10" fill="none" stroke="#c0392b" stroke-width="1.4"/>
        <circle cx="212" cy="204" r="10" fill="none" stroke="#c0392b" stroke-width="1.4"/>
        <circle cx="306" cy="204" r="10" fill="none" stroke="#c0392b" stroke-width="1.4"/>
      </g>

      <!-- 超放大：一組鉤與槽扣合示意 -->
      <g transform="translate(300,300)">
        <path d="M-40 0 q0 -14 14 -14" fill="none" stroke="url(#feathermic-barbule)" stroke-width="4"/>
        <path d="M-26 -14 q10 0 10 10 q0 6 -6 6" fill="none" stroke="#c0392b" stroke-width="4"/>
        <path d="M40 4 q0 -14 -14 -14" fill="none" stroke="url(#feathermic-barbule)" stroke-width="4"/>
        <text x="-46" y="30" font-size="12" fill="var(--ink)">鉤扣入槽</text>
      </g>

      <g class="labels">
        <line x1="220" y1="126" x2="240" y2="70" stroke="#666" stroke-width="1"/>
        <text x="244" y="66" font-size="13" fill="var(--ink)">羽枝</text>
        <line x1="196" y1="170" x2="120" y2="150" stroke="#666" stroke-width="1"/>
        <text x="20" y="154" font-size="13" fill="var(--ink)">帶鉤羽小枝</text>
        <line x1="212" y1="228" x2="120" y2="300" stroke="#666" stroke-width="1"/>
        <text x="20" y="304" font-size="13" fill="var(--ink)">帶槽羽小枝</text>
        <line x1="212" y1="204" x2="230" y2="248" stroke="#666" stroke-width="1"/>
        <text x="234" y="252" font-size="13" fill="var(--ink)">鉤（互扣點）</text>
      </g>`,
      parts: [
        { name: "羽枝", desc: "羽片的主要分枝，其上再長出成排羽小枝。" },
        { name: "帶鉤羽小枝", desc: "朝羽尖側伸出、末端具微小鉤的羽小枝。" },
        { name: "帶槽羽小枝", desc: "朝羽根側伸出、具凹槽的羽小枝，供鉤扣住。" },
        { name: "鉤", desc: "微鉤扣入相鄰羽小枝的槽，使羽片緊密不散，梳理即可復原。" }
      ]
    }
  ]
});
