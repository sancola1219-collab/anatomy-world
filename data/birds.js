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
        <linearGradient id="chicken-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f3e2c0"/>
          <stop offset="55%" stop-color="#e0c391"/>
          <stop offset="100%" stop-color="#b98f57"/>
        </linearGradient>
        <linearGradient id="chicken-neck" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f6ead0"/>
          <stop offset="100%" stop-color="#cba36a"/>
        </linearGradient>
        <linearGradient id="chicken-tail" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stop-color="#5a4630"/>
          <stop offset="60%" stop-color="#8a6a3e"/>
          <stop offset="100%" stop-color="#3a2c1c"/>
        </linearGradient>
        <linearGradient id="chicken-comb" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8483f"/>
          <stop offset="100%" stop-color="#a51f1c"/>
        </linearGradient>
        <linearGradient id="chicken-beak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f2c14c"/>
          <stop offset="100%" stop-color="#c98a1f"/>
        </linearGradient>
        <linearGradient id="chicken-leg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e6b95c"/>
          <stop offset="100%" stop-color="#b07f2c"/>
        </linearGradient>
        <radialGradient id="chicken-eye" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#7a5b2a"/>
          <stop offset="60%" stop-color="#2a1c0c"/>
          <stop offset="100%" stop-color="#000"/>
        </radialGradient>
      </defs>

      <!-- 尾羽 -->
      <path d="M300 250 Q380 160 400 130 Q372 180 396 210 Q350 200 340 260 Z" fill="url(#chicken-tail)" stroke="#2e2214" stroke-width="1.5"/>
      <path d="M298 260 Q360 210 392 220 Q345 235 350 290 Q320 270 300 300 Z" fill="url(#chicken-tail)" stroke="#2e2214" stroke-width="1.2" opacity="0.9"/>

      <!-- 身體 -->
      <ellipse data-part="翼" cx="215" cy="270" rx="120" ry="82" fill="url(#chicken-body)" stroke="#8a6a3a" stroke-width="1.6"/>
      <!-- 翼羽紋理 -->
      <path d="M160 235 Q225 250 285 250" fill="none" stroke="#a98553" stroke-width="1" opacity="0.7"/>
      <path d="M150 260 Q225 278 290 275" fill="none" stroke="#a98553" stroke-width="1" opacity="0.7"/>
      <path d="M150 285 Q225 303 285 300" fill="none" stroke="#a98553" stroke-width="1" opacity="0.7"/>

      <!-- 頸 -->
      <path data-part="頸部" d="M150 210 Q150 150 175 120 L205 135 Q188 175 200 235 Z" fill="url(#chicken-neck)" stroke="#8a6a3a" stroke-width="1.4"/>

      <!-- 頭 -->
      <ellipse cx="182" cy="108" rx="38" ry="34" fill="url(#chicken-neck)" stroke="#8a6a3a" stroke-width="1.4"/>

      <!-- 肉冠 -->
      <path data-part="肉冠" d="M158 78 Q162 56 172 62 Q176 46 188 56 Q194 40 204 54 Q212 44 216 62 Q220 78 200 84 Q180 88 158 78 Z" fill="url(#chicken-comb)" stroke="#7d1815" stroke-width="1.4"/>

      <!-- 肉垂 -->
      <path data-part="肉垂" d="M172 132 Q166 158 178 160 Q190 158 186 134 Z" fill="url(#chicken-comb)" stroke="#7d1815" stroke-width="1.3"/>

      <!-- 喙 -->
      <path data-part="喙" d="M144 104 L108 100 L146 118 Z" fill="url(#chicken-beak)" stroke="#9a6a12" stroke-width="1.2"/>
      <path d="M144 112 L112 112 L146 120 Z" fill="#b98724" stroke="#9a6a12" stroke-width="0.8"/>

      <!-- 眼 -->
      <circle data-part="眼" cx="168" cy="100" r="7.5" fill="url(#chicken-eye)" stroke="#3a2810" stroke-width="1"/>
      <circle cx="165.5" cy="97.5" r="2" fill="#fff" opacity="0.85"/>

      <!-- 大腿與腿 -->
      <path data-part="腿" d="M188 330 Q182 360 196 380 L214 378 Q206 350 210 330 Z" fill="url(#chicken-body)" stroke="#8a6a3a" stroke-width="1.4"/>
      <rect x="198" y="378" width="10" height="42" rx="4" fill="url(#chicken-leg)" stroke="#8a5f20" stroke-width="1.2"/>
      <path data-part="腿" d="M250 336 Q246 366 258 388 L276 384 Q266 356 270 334 Z" fill="url(#chicken-body)" stroke="#8a6a3a" stroke-width="1.2" opacity="0.85"/>
      <rect x="260" y="384" width="9" height="40" rx="4" fill="url(#chicken-leg)" stroke="#8a5f20" stroke-width="1"/>

      <!-- 爪（三前一後） -->
      <g data-part="爪">
        <path d="M203 420 L176 434" stroke="url(#chicken-leg)" stroke-width="6" stroke-linecap="round"/>
        <path d="M203 420 L206 440" stroke="url(#chicken-leg)" stroke-width="6" stroke-linecap="round"/>
        <path d="M203 420 L232 434" stroke="url(#chicken-leg)" stroke-width="6" stroke-linecap="round"/>
        <path d="M203 420 L196 402" stroke="url(#chicken-leg)" stroke-width="5" stroke-linecap="round"/>
      </g>
      <g data-part="爪" opacity="0.85">
        <path d="M264 424 L240 436" stroke="url(#chicken-leg)" stroke-width="5.5" stroke-linecap="round"/>
        <path d="M264 424 L266 442" stroke="url(#chicken-leg)" stroke-width="5.5" stroke-linecap="round"/>
        <path d="M264 424 L290 436" stroke="url(#chicken-leg)" stroke-width="5.5" stroke-linecap="round"/>
      </g>

      <g class="labels">
        <line x1="187" y1="60" x2="250" y2="40" stroke="#666" stroke-width="1"/>
        <text x="254" y="44" font-size="13" fill="var(--ink)">肉冠</text>
        <line x1="118" y1="104" x2="70" y2="92" stroke="#666" stroke-width="1"/>
        <text x="26" y="96" font-size="13" fill="var(--ink)">喙</text>
        <line x1="168" y1="100" x2="120" y2="66" stroke="#666" stroke-width="1"/>
        <text x="78" y="64" font-size="13" fill="var(--ink)">眼</text>
        <line x1="178" y1="156" x2="140" y2="182" stroke="#666" stroke-width="1"/>
        <text x="96" y="186" font-size="13" fill="var(--ink)">肉垂</text>
        <line x1="170" y1="170" x2="112" y2="200" stroke="#666" stroke-width="1"/>
        <text x="60" y="204" font-size="13" fill="var(--ink)">頸部</text>
        <line x1="215" y1="255" x2="300" y2="360" stroke="#666" stroke-width="1"/>
        <text x="304" y="364" font-size="13" fill="var(--ink)">翼</text>
        <line x1="360" y1="200" x2="392" y2="150" stroke="#666" stroke-width="1"/>
        <text x="360" y="140" font-size="13" fill="var(--ink)">尾羽</text>
        <line x1="255" y1="360" x2="330" y2="392" stroke="#666" stroke-width="1"/>
        <text x="334" y="396" font-size="13" fill="var(--ink)">腿</text>
        <line x1="220" y1="432" x2="270" y2="452" stroke="#666" stroke-width="1"/>
        <text x="274" y="456" font-size="13" fill="var(--ink)">爪</text>
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
        <linearGradient id="eagle-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7a5a3c"/>
          <stop offset="60%" stop-color="#5a3f26"/>
          <stop offset="100%" stop-color="#3a2917"/>
        </linearGradient>
        <linearGradient id="eagle-head" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fbf6ec"/>
          <stop offset="100%" stop-color="#d8cdb4"/>
        </linearGradient>
        <linearGradient id="eagle-wing" x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stop-color="#6e4f31"/>
          <stop offset="100%" stop-color="#33241380"/>
        </linearGradient>
        <linearGradient id="eagle-beak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4a4a4a"/>
          <stop offset="100%" stop-color="#151515"/>
        </linearGradient>
        <linearGradient id="eagle-talon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f2cf5a"/>
          <stop offset="100%" stop-color="#b8891f"/>
        </linearGradient>
        <radialGradient id="eagle-eye" cx="42%" cy="35%">
          <stop offset="0%" stop-color="#f4c94c"/>
          <stop offset="70%" stop-color="#c8931c"/>
          <stop offset="100%" stop-color="#5a3c08"/>
        </radialGradient>
      </defs>

      <!-- 右翼展開 -->
      <path data-part="翅膀" d="M240 190 Q330 150 430 200 Q400 220 430 250 Q360 240 250 230 Z" fill="url(#eagle-wing)" stroke="#2c1e10" stroke-width="1.6"/>
      <!-- 初級飛羽 -->
      <g data-part="飛羽">
        <path d="M420 205 L448 190 L432 214 Z" fill="#4a3620" stroke="#241809" stroke-width="1"/>
        <path d="M408 214 L442 208 L420 228 Z" fill="#4a3620" stroke="#241809" stroke-width="1"/>
        <path d="M392 222 L430 226 L404 240 Z" fill="#4a3620" stroke="#241809" stroke-width="1"/>
      </g>
      <!-- 翼上覆羽紋理 -->
      <path d="M270 200 Q340 185 415 208" fill="none" stroke="#8a6a45" stroke-width="1" opacity="0.6"/>
      <path d="M270 215 Q340 205 405 222" fill="none" stroke="#8a6a45" stroke-width="1" opacity="0.6"/>

      <!-- 左翼收攏 -->
      <path data-part="翅膀" d="M150 200 Q90 200 60 250 Q100 245 130 235 Z" fill="url(#eagle-wing)" stroke="#2c1e10" stroke-width="1.4"/>

      <!-- 身體 -->
      <ellipse cx="200" cy="230" rx="70" ry="55" fill="url(#eagle-body)" stroke="#2c1e10" stroke-width="1.6"/>

      <!-- 尾羽 -->
      <path data-part="尾羽" d="M200 275 Q195 340 175 380 Q200 360 215 385 Q235 350 245 285 Z" fill="url(#eagle-body)" stroke="#2c1e10" stroke-width="1.4"/>

      <!-- 頸與頭（白頭） -->
      <path d="M160 185 Q158 150 180 130 L210 140 Q198 175 215 200 Z" fill="url(#eagle-head)" stroke="#b6a988" stroke-width="1.2"/>
      <ellipse cx="180" cy="130" rx="34" ry="30" fill="url(#eagle-head)" stroke="#b6a988" stroke-width="1.2"/>

      <!-- 鉤狀喙 -->
      <path data-part="鉤狀喙" d="M150 122 Q118 120 108 130 Q120 128 128 138 Q124 148 138 146 Q150 142 154 128 Z" fill="url(#eagle-beak)" stroke="#000" stroke-width="1.2"/>
      <!-- 蠟膜 -->
      <path d="M150 118 Q156 116 158 124 L150 128 Z" fill="#e8c24a"/>

      <!-- 眼（銳利黃眼） -->
      <circle data-part="眼" cx="172" cy="122" r="9" fill="url(#eagle-eye)" stroke="#4a3208" stroke-width="1.2"/>
      <circle cx="172" cy="122" r="3.4" fill="#1a1206"/>
      <circle cx="169.5" cy="119.5" r="1.6" fill="#fff" opacity="0.85"/>
      <!-- 眉脊（威嚴表情） -->
      <path d="M162 112 Q176 108 188 116" fill="none" stroke="#6a5836" stroke-width="2"/>

      <!-- 腿與利爪 -->
      <path data-part="腿" d="M185 280 L180 320 L192 320 L196 282 Z" fill="#c9a24a" stroke="#8a6a20" stroke-width="1.2"/>
      <path data-part="腿" d="M220 282 L222 322 L234 320 L228 282 Z" fill="#c9a24a" stroke="#8a6a20" stroke-width="1.2"/>
      <g data-part="爪">
        <path d="M186 320 L166 344 Q172 352 180 346" fill="none" stroke="url(#eagle-talon)" stroke-width="7" stroke-linecap="round"/>
        <path d="M186 320 L188 350 Q194 352 196 344" fill="none" stroke="url(#eagle-talon)" stroke-width="7" stroke-linecap="round"/>
        <path d="M186 320 L206 344 Q200 352 194 346" fill="none" stroke="url(#eagle-talon)" stroke-width="7" stroke-linecap="round"/>
      </g>
      <g data-part="爪">
        <path d="M226 320 L208 346" fill="none" stroke="url(#eagle-talon)" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M226 320 L228 352" fill="none" stroke="url(#eagle-talon)" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M226 320 L246 346" fill="none" stroke="url(#eagle-talon)" stroke-width="6.5" stroke-linecap="round"/>
      </g>

      <g class="labels">
        <line x1="118" y1="128" x2="60" y2="118" stroke="#666" stroke-width="1"/>
        <text x="16" y="122" font-size="13" fill="var(--ink)">鉤狀喙</text>
        <line x1="172" y1="122" x2="150" y2="78" stroke="#666" stroke-width="1"/>
        <text x="120" y="74" font-size="13" fill="var(--ink)">眼</text>
        <line x1="380" y1="200" x2="400" y2="150" stroke="#666" stroke-width="1"/>
        <text x="384" y="142" font-size="13" fill="var(--ink)">翅膀</text>
        <line x1="440" y1="208" x2="450" y2="176" stroke="#666" stroke-width="1"/>
        <text x="408" y="170" font-size="13" fill="var(--ink)">飛羽</text>
        <line x1="200" y1="350" x2="140" y2="368" stroke="#666" stroke-width="1"/>
        <text x="82" y="372" font-size="13" fill="var(--ink)">尾羽</text>
        <line x1="222" y1="300" x2="290" y2="300" stroke="#666" stroke-width="1"/>
        <text x="294" y="304" font-size="13" fill="var(--ink)">腿</text>
        <line x1="188" y1="346" x2="130" y2="340" stroke="#666" stroke-width="1"/>
        <text x="82" y="344" font-size="13" fill="var(--ink)">爪</text>
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
        <linearGradient id="penguin-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3a4650"/>
          <stop offset="60%" stop-color="#232c33"/>
          <stop offset="100%" stop-color="#12171b"/>
        </linearGradient>
        <linearGradient id="penguin-belly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#dfe4e8"/>
        </linearGradient>
        <linearGradient id="penguin-beak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#d88a3a"/>
          <stop offset="100%" stop-color="#8a4f18"/>
        </linearGradient>
        <linearGradient id="penguin-foot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e0a24a"/>
          <stop offset="100%" stop-color="#a86a1c"/>
        </linearGradient>
        <radialGradient id="penguin-eye" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#4a3a24"/>
          <stop offset="100%" stop-color="#000"/>
        </radialGradient>
        <radialGradient id="penguin-cheek" cx="50%" cy="50%">
          <stop offset="0%" stop-color="#f6c94a"/>
          <stop offset="100%" stop-color="#e0a22a00"/>
        </radialGradient>
      </defs>

      <!-- 身體（背側深色） -->
      <path data-part="羽衣" d="M190 70 Q120 80 108 200 Q100 320 130 400 Q160 430 190 430 Q220 430 250 400 Q280 320 272 200 Q260 80 190 70 Z" fill="url(#penguin-back)" stroke="#0c1013" stroke-width="1.6"/>

      <!-- 腹部（白色反光偽裝） -->
      <path data-part="羽衣" d="M190 120 Q150 130 142 240 Q140 340 165 405 Q190 420 215 405 Q240 340 238 240 Q230 130 190 120 Z" fill="url(#penguin-belly)" stroke="#c4ccd2" stroke-width="1"/>

      <!-- 頭 -->
      <ellipse cx="190" cy="90" rx="52" ry="46" fill="url(#penguin-back)" stroke="#0c1013" stroke-width="1.4"/>
      <!-- 頰部黃斑（帝王企鵝特徵） -->
      <ellipse cx="152" cy="98" rx="18" ry="26" fill="url(#penguin-cheek)" opacity="0.9"/>
      <ellipse cx="228" cy="98" rx="18" ry="26" fill="url(#penguin-cheek)" opacity="0.9"/>

      <!-- 喙 -->
      <path data-part="喙" d="M164 96 Q138 100 128 108 Q140 112 150 110 Q158 116 168 108 Z" fill="url(#penguin-beak)" stroke="#6a3c10" stroke-width="1.2"/>

      <!-- 眼 -->
      <circle data-part="眼" cx="168" cy="80" r="6.5" fill="url(#penguin-eye)" stroke="#1a1206" stroke-width="0.8"/>
      <circle cx="166" cy="78" r="1.8" fill="#fff" opacity="0.85"/>

      <!-- 鰭狀翼（左） -->
      <path data-part="鰭狀翼" d="M112 180 Q70 230 74 320 Q92 300 116 250 Z" fill="url(#penguin-back)" stroke="#0c1013" stroke-width="1.4"/>
      <!-- 鰭狀翼（右） -->
      <path data-part="鰭狀翼" d="M268 180 Q310 230 306 320 Q288 300 264 250 Z" fill="url(#penguin-back)" stroke="#0c1013" stroke-width="1.4"/>

      <!-- 蹼足 -->
      <g data-part="蹼足">
        <path d="M158 428 Q150 448 132 452 Q152 452 168 442 Z" fill="url(#penguin-foot)" stroke="#7a4a10" stroke-width="1.2"/>
        <path d="M222 428 Q230 448 248 452 Q228 452 212 442 Z" fill="url(#penguin-foot)" stroke="#7a4a10" stroke-width="1.2"/>
      </g>

      <g class="labels">
        <line x1="140" y1="106" x2="70" y2="120" stroke="#666" stroke-width="1"/>
        <text x="26" y="124" font-size="13" fill="var(--ink)">喙</text>
        <line x1="168" y1="80" x2="120" y2="52" stroke="#666" stroke-width="1"/>
        <text x="78" y="50" font-size="13" fill="var(--ink)">眼</text>
        <line x1="88" y1="270" x2="40" y2="270" stroke="#666" stroke-width="1"/>
        <text x="6" y="252" font-size="13" fill="var(--ink)">鰭狀翼</text>
        <line x1="190" y1="180" x2="300" y2="150" stroke="#666" stroke-width="1"/>
        <text x="296" y="142" font-size="13" fill="var(--ink)">背側深色羽衣</text>
        <line x1="190" y1="300" x2="300" y2="330" stroke="#666" stroke-width="1"/>
        <text x="296" y="334" font-size="13" fill="var(--ink)">腹側白羽</text>
        <line x1="222" y1="444" x2="288" y2="440" stroke="#666" stroke-width="1"/>
        <text x="292" y="444" font-size="13" fill="var(--ink)">蹼足</text>
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
