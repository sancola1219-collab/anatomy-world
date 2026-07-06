/* ===== 爬蟲類與兩生類 解剖教材 =====
 * 物種：蛇、蜥蜴、烏龜、鱷魚（爬蟲綱）／青蛙、蠑螈（兩生綱）
 * 每個物種呼叫一次 window.ANATOMY.register({...})
 */
(function () {
  "use strict";
  var R = window.ANATOMY && window.ANATOMY.register
    ? window.ANATOMY.register.bind(window.ANATOMY)
    : function () {};

  /* ---------------------------------------------------------------
   * 1. 蛇 SNAKE（Serpentes）
   * ------------------------------------------------------------- */
  R({
    id: "snake",
    name: "蛇",
    latin: "Serpentes",
    emoji: "🐍",
    kingdom: "animalia",
    group: "reptiles",
    rank: "有鱗目・蛇亞目",
    summary: "蛇是無足的爬蟲類，身體極度延長，內臟隨之呈細長排列且左右不對稱。部分毒蛇具中空毒牙與毒腺，可注入毒液制伏獵物。全身覆蓋角質鱗片，靠腹鱗與肌肉推進爬行。",
    views: [
      {
        id: "external",
        name: "外部形態",
        viewBox: "0 0 440 360",
        svg: `
<defs>
  <linearGradient id="snake-body" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#a7b56a"/>
    <stop offset="45%" stop-color="#7c9040"/>
    <stop offset="100%" stop-color="#4d5c24"/>
  </linearGradient>
  <radialGradient id="snake-head" cx="40%" cy="35%">
    <stop offset="0%" stop-color="#9fae63"/>
    <stop offset="100%" stop-color="#5c6c2c"/>
  </radialGradient>
  <linearGradient id="snake-belly" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e7e0bf"/>
    <stop offset="100%" stop-color="#c3bd8f"/>
  </linearGradient>
</defs>

<!-- 盤繞的蛇身 -->
<path d="M70 300 C30 250 60 190 130 195 C210 200 250 150 210 120
         C170 92 110 108 120 150" fill="none" stroke="url(#snake-belly)" stroke-width="40" stroke-linecap="round"/>
<path data-part="軀幹（延長體型）" d="M70 300 C30 250 60 190 130 195 C210 200 250 150 210 120
         C170 92 110 108 120 150" fill="none" stroke="url(#snake-body)" stroke-width="30" stroke-linecap="round"/>

<!-- 鱗片紋理示意 -->
<g stroke="#3d4a1c" stroke-width="1" opacity="0.5" fill="none">
  <path d="M95 285 q10 -8 20 0"/><path d="M120 250 q10 -8 20 0"/>
  <path d="M150 210 q10 -8 20 0"/><path d="M190 205 q10 -8 20 0"/>
  <path d="M225 175 q8 -8 16 0"/>
</g>
<circle data-part="鱗片" cx="115" cy="268" r="6" fill="#7c9040" stroke="#3d4a1c" opacity="0"/>

<!-- 頭部 -->
<g>
  <path data-part="頭部" d="M120 150 C104 132 100 120 118 112 C138 104 158 116 156 134
        C154 150 138 158 120 150 Z" fill="url(#snake-head)" stroke="#3d4a1c" stroke-width="1.5"/>
  <!-- 眼 -->
  <ellipse data-part="眼（無眼瞼）" cx="128" cy="126" rx="6" ry="5" fill="#e8c840" stroke="#3d4a1c"/>
  <ellipse cx="128" cy="126" rx="2" ry="4" fill="#20160a"/>
  <!-- 分叉舌 -->
  <path data-part="分叉舌" d="M118 148 q-14 6 -22 2 M96 150 l-8 -3 M96 150 l-7 4"
        fill="none" stroke="#b03b3b" stroke-width="2" stroke-linecap="round"/>
</g>

<!-- 尾端 -->
<circle data-part="尾" cx="72" cy="300" r="4" fill="#4d5c24"/>

<g class="labels">
  <line x1="128" y1="126" x2="60" y2="90" stroke="#666" stroke-width="1"/>
  <text x="10" y="88" font-size="13" fill="var(--ink)">眼（無眼瞼）</text>
  <line x1="100" y1="150" x2="70" y2="170" stroke="#666" stroke-width="1"/>
  <text x="8" y="174" font-size="13" fill="var(--ink)">分叉舌</text>
  <line x1="140" y1="120" x2="200" y2="86" stroke="#666" stroke-width="1"/>
  <text x="204" y="90" font-size="13" fill="var(--ink)">頭部</text>
  <line x1="150" y1="205" x2="300" y2="175" stroke="#666" stroke-width="1"/>
  <text x="304" y="179" font-size="13" fill="var(--ink)">鱗片</text>
  <line x1="130" y1="240" x2="330" y2="240" stroke="#666" stroke-width="1"/>
  <text x="334" y="244" font-size="13" fill="var(--ink)">軀幹（延長體型）</text>
  <line x1="72" y1="300" x2="150" y2="330" stroke="#666" stroke-width="1"/>
  <text x="154" y="334" font-size="13" fill="var(--ink)">尾</text>
</g>`,
        parts: [
          { name: "頭部", desc: "感覺器官集中，能靠舌與雅各布森氏器官偵測氣味" },
          { name: "眼（無眼瞼）", desc: "眼睛被透明鱗片（眼罩）覆蓋，無可動眼瞼" },
          { name: "分叉舌", desc: "伸出採集空氣中氣味分子送入口腔頂的偵味器官" },
          { name: "軀幹（延長體型）", desc: "脊椎骨與肋骨數目極多，身體極度延長" },
          { name: "鱗片", desc: "角質鱗覆蓋全身，腹面的寬腹鱗協助推進" },
          { name: "尾", desc: "泄殖孔之後的部分，肌肉發達" }
        ]
      },
      {
        id: "viscera",
        name: "內臟",
        viewBox: "0 0 400 440",
        svg: `
<defs>
  <linearGradient id="snake-outline" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#eef0e0"/>
    <stop offset="100%" stop-color="#d6dabd"/>
  </linearGradient>
  <radialGradient id="snake-heart" cx="40%" cy="35%">
    <stop offset="0%" stop-color="#c0503f"/><stop offset="100%" stop-color="#7a2d26"/>
  </radialGradient>
  <linearGradient id="snake-lung" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#e0a6b0"/><stop offset="100%" stop-color="#b56d7a"/>
  </linearGradient>
  <linearGradient id="snake-liver" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8a3d33"/><stop offset="100%" stop-color="#5c261f"/>
  </linearGradient>
  <linearGradient id="snake-stomach" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#d9b48a"/><stop offset="100%" stop-color="#b48a5c"/>
  </linearGradient>
  <radialGradient id="snake-gland" cx="40%" cy="35%">
    <stop offset="0%" stop-color="#d8c24a"/><stop offset="100%" stop-color="#a08a20"/>
  </radialGradient>
</defs>

<!-- 細長身體輪廓（縱向） -->
<rect x="150" y="20" width="100" height="400" rx="50" fill="url(#snake-outline)" stroke="#9aa27a" stroke-width="1.5"/>

<!-- 頭部與毒器 -->
<path d="M160 40 C160 18 240 18 240 40 L240 60 L160 60 Z" fill="#cdd3b0" stroke="#9aa27a"/>
<!-- 毒腺 -->
<ellipse data-part="毒腺" cx="180" cy="52" rx="14" ry="10" fill="url(#snake-gland)" stroke="#7a6c14"/>
<!-- 毒牙（中空、可折疊） -->
<path data-part="毒牙" d="M186 62 q4 20 0 30" fill="none" stroke="#f2ead0" stroke-width="4" stroke-linecap="round"/>
<path d="M186 62 q4 20 0 30" fill="none" stroke="#b8a878" stroke-width="1"/>

<!-- 心臟（細長排列，位置靠前） -->
<ellipse data-part="心臟" cx="200" cy="120" rx="20" ry="30" fill="url(#snake-heart)" stroke="#5c211c" stroke-width="1.5"/>

<!-- 肺（單一右肺極長） -->
<ellipse data-part="肺（延長右肺）" cx="205" cy="210" rx="22" ry="70" fill="url(#snake-lung)" stroke="#9a5866" stroke-width="1.5"/>
<g stroke="#9a5866" stroke-width="0.8" opacity="0.6">
  <line x1="188" y1="180" x2="222" y2="180"/><line x1="186" y1="210" x2="224" y2="210"/>
  <line x1="188" y1="240" x2="222" y2="240"/>
</g>

<!-- 肝（細長） -->
<path data-part="肝臟" d="M182 155 q-8 60 4 100 q8 -50 0 -100 Z" fill="url(#snake-liver)" stroke="#4a1f18" stroke-width="1.2"/>

<!-- 胃（延長） -->
<path data-part="胃" d="M200 250 q26 20 14 70 q-10 -36 -14 -70 Z" fill="url(#snake-stomach)" stroke="#8a6a3c" stroke-width="1.2"/>

<!-- 腎（前後錯位排列） -->
<ellipse data-part="腎臟" cx="190" cy="350" rx="10" ry="20" fill="#8a4d3a" stroke="#5c2f22"/>
<ellipse cx="212" cy="380" rx="10" ry="20" fill="#8a4d3a" stroke="#5c2f22"/>

<!-- 泄殖腔 -->
<ellipse data-part="泄殖腔" cx="200" cy="410" rx="14" ry="9" fill="#c98a70" stroke="#8a5340"/>

<g class="labels">
  <line x1="194" y1="52" x2="90" y2="52" stroke="#666" stroke-width="1"/>
  <text x="12" y="56" font-size="13" fill="var(--ink)">毒腺</text>
  <line x1="188" y1="88" x2="90" y2="96" stroke="#666" stroke-width="1"/>
  <text x="12" y="100" font-size="13" fill="var(--ink)">毒牙（中空）</text>
  <line x1="180" y1="120" x2="80" y2="130" stroke="#666" stroke-width="1"/>
  <text x="12" y="134" font-size="13" fill="var(--ink)">心臟</text>
  <line x1="182" y1="200" x2="80" y2="200" stroke="#666" stroke-width="1"/>
  <text x="12" y="204" font-size="13" fill="var(--ink)">肝臟</text>
  <line x1="227" y1="210" x2="320" y2="180" stroke="#666" stroke-width="1"/>
  <text x="300" y="176" font-size="13" fill="var(--ink)">肺（延長右肺）</text>
  <line x1="214" y1="290" x2="320" y2="290" stroke="#666" stroke-width="1"/>
  <text x="324" y="294" font-size="13" fill="var(--ink)">胃</text>
  <line x1="190" y1="350" x2="90" y2="350" stroke="#666" stroke-width="1"/>
  <text x="12" y="354" font-size="13" fill="var(--ink)">腎臟</text>
  <line x1="214" y1="410" x2="320" y2="410" stroke="#666" stroke-width="1"/>
  <text x="324" y="414" font-size="13" fill="var(--ink)">泄殖腔</text>
</g>`,
        parts: [
          { name: "毒腺", desc: "位於頭側，分泌並儲存毒液的變態唾液腺" },
          { name: "毒牙", desc: "中空或帶溝的長牙，將毒液注入獵物體內" },
          { name: "心臟", desc: "三腔心（兩心房一心室），位置靠身體前段" },
          { name: "肺（延長右肺）", desc: "右肺極度延長，左肺退化或消失以配合細長體型" },
          { name: "肝臟", desc: "呈細長條狀，代謝與解毒器官" },
          { name: "胃", desc: "可大幅擴張以吞下整隻獵物" },
          { name: "腎臟", desc: "左右腎前後錯位排列而非並列" },
          { name: "泄殖腔", desc: "消化、泌尿與生殖共同的排出口" }
        ]
      }
    ]
  });

  /* ---------------------------------------------------------------
   * 2. 蜥蜴 LIZARD（Lacertilia）
   * ------------------------------------------------------------- */
  R({
    id: "lizard",
    name: "蜥蜴",
    latin: "Lacertilia",
    emoji: "🦎",
    kingdom: "animalia",
    group: "reptiles",
    rank: "有鱗目・蜥蜴亞目",
    summary: "蜥蜴為典型四足爬蟲類，身體覆鱗、具可動眼瞼與外耳孔。多數種類尾部可自割再生。骨骼由頭骨、脊椎、肋骨及四肢帶構成，靈活的四肢支撐爬行與攀附。",
    views: [
      {
        id: "external",
        name: "外部形態",
        viewBox: "0 0 460 300",
        svg: `
<defs>
  <linearGradient id="lizard-body" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8fb35a"/>
    <stop offset="50%" stop-color="#5e8636"/>
    <stop offset="100%" stop-color="#3c5a22"/>
  </linearGradient>
  <radialGradient id="lizard-head" cx="40%" cy="35%">
    <stop offset="0%" stop-color="#9ec066"/><stop offset="100%" stop-color="#4d6c2c"/>
  </radialGradient>
  <linearGradient id="lizard-tail" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#5e8636"/><stop offset="100%" stop-color="#7fa84c"/>
  </linearGradient>
</defs>

<!-- 尾 -->
<path data-part="可再生尾" d="M120 175 C70 185 40 200 20 220 C55 205 90 200 130 190 Z"
      fill="url(#lizard-tail)" stroke="#3c5a22" stroke-width="1.2"/>

<!-- 軀幹 -->
<ellipse data-part="軀幹" cx="220" cy="165" rx="105" ry="42" fill="url(#lizard-body)" stroke="#2f4a1a" stroke-width="1.5"/>
<!-- 鱗片紋理 -->
<g stroke="#2f4a1a" stroke-width="0.7" opacity="0.4" fill="none">
  <path d="M170 140 q8 -6 16 0"/><path d="M200 135 q8 -6 16 0"/>
  <path d="M240 138 q8 -6 16 0"/><path d="M270 150 q8 -6 16 0"/>
  <path d="M190 175 q8 -6 16 0"/><path d="M240 180 q8 -6 16 0"/>
</g>
<circle data-part="鱗片" cx="230" cy="150" r="6" fill="#5e8636" opacity="0"/>

<!-- 頭 -->
<path data-part="頭部" d="M320 150 C355 145 380 155 382 168 C380 182 352 190 320 182
      C300 176 300 156 320 150 Z" fill="url(#lizard-head)" stroke="#2f4a1a" stroke-width="1.5"/>
<ellipse data-part="眼（有眼瞼）" cx="345" cy="160" rx="7" ry="6" fill="#d8b83c" stroke="#2f4a1a"/>
<circle cx="345" cy="160" r="3" fill="#20160a"/>
<circle data-part="外耳孔" cx="322" cy="172" r="4" fill="#2a1a10" stroke="#2f4a1a"/>

<!-- 四肢 -->
<path data-part="前肢" d="M280 200 l14 40 l-8 6 l6 4 l6 -4 l6 4" fill="none" stroke="#4d6c2c" stroke-width="7" stroke-linecap="round"/>
<path data-part="後肢" d="M170 200 l-16 44 l-8 6 l6 4 l6 -4 l6 4" fill="none" stroke="#4d6c2c" stroke-width="8" stroke-linecap="round"/>

<g class="labels">
  <line x1="345" y1="160" x2="400" y2="120" stroke="#666" stroke-width="1"/>
  <text x="360" y="116" font-size="13" fill="var(--ink)">眼（有眼瞼）</text>
  <line x1="322" y1="172" x2="360" y2="200" stroke="#666" stroke-width="1"/>
  <text x="364" y="204" font-size="13" fill="var(--ink)">外耳孔</text>
  <line x1="355" y1="168" x2="410" y2="180" stroke="#666" stroke-width="1"/>
  <text x="414" y="184" font-size="13" fill="var(--ink)">頭部</text>
  <line x1="230" y1="140" x2="230" y2="70" stroke="#666" stroke-width="1"/>
  <text x="190" y="66" font-size="13" fill="var(--ink)">鱗片</text>
  <line x1="220" y1="150" x2="150" y2="90" stroke="#666" stroke-width="1"/>
  <text x="80" y="86" font-size="13" fill="var(--ink)">軀幹</text>
  <line x1="290" y1="235" x2="330" y2="270" stroke="#666" stroke-width="1"/>
  <text x="334" y="274" font-size="13" fill="var(--ink)">前肢</text>
  <line x1="160" y1="235" x2="120" y2="275" stroke="#666" stroke-width="1"/>
  <text x="60" y="279" font-size="13" fill="var(--ink)">後肢</text>
  <line x1="60" y1="205" x2="40" y2="255" stroke="#666" stroke-width="1"/>
  <text x="12" y="259" font-size="13" fill="var(--ink)">可再生尾</text>
</g>`,
        parts: [
          { name: "頭部", desc: "具口、眼、外耳孔，口內有偵味的舌" },
          { name: "眼（有眼瞼）", desc: "與蛇不同，蜥蜴多具可動眼瞼可眨眼" },
          { name: "外耳孔", desc: "頭側可見的鼓膜開口，蛇則無外耳孔" },
          { name: "軀幹", desc: "覆蓋鱗片的身體主幹，內含主要臟器" },
          { name: "鱗片", desc: "角質表皮鱗，防止水分散失並保護身體" },
          { name: "前肢", desc: "支撐前身並協助爬行，末端具趾與爪" },
          { name: "後肢", desc: "推進主力，通常較前肢強壯" },
          { name: "可再生尾", desc: "遇危險時可自割逃生，之後能再生新尾" }
        ]
      },
      {
        id: "skeleton",
        name: "骨骼",
        viewBox: "0 0 460 300",
        svg: `
<defs>
  <linearGradient id="lizard-bone" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f4ecd6"/><stop offset="100%" stop-color="#d8cbaa"/>
  </linearGradient>
  <radialGradient id="lizard-skull" cx="40%" cy="35%">
    <stop offset="0%" stop-color="#f4ecd6"/><stop offset="100%" stop-color="#cdbf9a"/>
  </radialGradient>
</defs>

<!-- 脊椎 -->
<path data-part="脊椎骨" d="M40 210 Q200 130 330 165" fill="none" stroke="url(#lizard-bone)" stroke-width="10" stroke-linecap="round"/>
<g fill="url(#lizard-bone)" stroke="#b6a984" stroke-width="0.8">
  <circle cx="70" cy="196" r="5"/><circle cx="110" cy="180" r="5"/>
  <circle cx="150" cy="167" r="5"/><circle cx="190" cy="158" r="5"/>
  <circle cx="230" cy="155" r="5"/><circle cx="270" cy="158" r="5"/>
</g>

<!-- 頭骨 -->
<path data-part="頭骨" d="M330 150 C368 145 392 155 394 168 C392 184 360 192 332 182
      C314 176 314 158 330 150 Z" fill="url(#lizard-skull)" stroke="#b6a984" stroke-width="1.5"/>
<circle cx="352" cy="162" r="6" fill="#cbbd97" stroke="#b6a984"/>
<!-- 下顎 -->
<path data-part="下顎骨" d="M332 184 Q360 200 388 186" fill="none" stroke="url(#lizard-bone)" stroke-width="5" stroke-linecap="round"/>

<!-- 肋骨 -->
<g data-part="肋骨" fill="none" stroke="url(#lizard-bone)" stroke-width="3.5" stroke-linecap="round">
  <path d="M150 167 Q150 210 175 225"/>
  <path d="M175 162 Q178 208 205 222"/>
  <path d="M200 158 Q205 205 232 218"/>
  <path d="M225 155 Q232 202 258 215"/>
</g>

<!-- 肩帶 / 前肢骨 -->
<path data-part="前肢骨" d="M262 160 L285 205 L275 240 M285 205 L300 235"
      fill="none" stroke="url(#lizard-bone)" stroke-width="5" stroke-linecap="round"/>
<!-- 骨盆 / 後肢骨 -->
<path data-part="後肢骨" d="M120 178 L100 220 L118 250 M100 220 L80 248"
      fill="none" stroke="url(#lizard-bone)" stroke-width="5.5" stroke-linecap="round"/>

<!-- 尾椎 -->
<path data-part="尾椎骨" d="M40 210 Q80 195 118 178" fill="none" stroke="url(#lizard-bone)" stroke-width="6" stroke-linecap="round"/>

<g class="labels">
  <line x1="360" y1="162" x2="410" y2="130" stroke="#666" stroke-width="1"/>
  <text x="378" y="126" font-size="13" fill="var(--ink)">頭骨</text>
  <line x1="360" y1="196" x2="400" y2="220" stroke="#666" stroke-width="1"/>
  <text x="404" y="224" font-size="13" fill="var(--ink)">下顎骨</text>
  <line x1="190" y1="158" x2="190" y2="90" stroke="#666" stroke-width="1"/>
  <text x="150" y="86" font-size="13" fill="var(--ink)">脊椎骨</text>
  <line x1="205" y1="210" x2="260" y2="255" stroke="#666" stroke-width="1"/>
  <text x="264" y="259" font-size="13" fill="var(--ink)">肋骨</text>
  <line x1="288" y1="220" x2="330" y2="255" stroke="#666" stroke-width="1"/>
  <text x="334" y="259" font-size="13" fill="var(--ink)">前肢骨</text>
  <line x1="100" y1="235" x2="70" y2="270" stroke="#666" stroke-width="1"/>
  <text x="20" y="274" font-size="13" fill="var(--ink)">後肢骨</text>
  <line x1="70" y1="200" x2="40" y2="170" stroke="#666" stroke-width="1"/>
  <text x="8" y="166" font-size="13" fill="var(--ink)">尾椎骨</text>
</g>`,
        parts: [
          { name: "頭骨", desc: "保護腦部並容納眼與鼻腔，具活動性顎關節" },
          { name: "下顎骨", desc: "與頭骨連接，可張口捕食" },
          { name: "脊椎骨", desc: "頸、軀幹、薦、尾多節脊椎串成中軸" },
          { name: "肋骨", desc: "由胸椎伸出圍成胸腔，保護內臟並輔助呼吸" },
          { name: "前肢骨", desc: "肩帶連接肱骨、橈尺骨與掌指骨" },
          { name: "後肢骨", desc: "骨盆連接股骨、脛腓骨與蹠趾骨，推進有力" },
          { name: "尾椎骨", desc: "尾部多節椎骨，具自割面可斷尾再生" }
        ]
      }
    ]
  });

  /* ---------------------------------------------------------------
   * 3. 烏龜 TURTLE（Testudines）
   * ------------------------------------------------------------- */
  R({
    id: "turtle",
    name: "烏龜",
    latin: "Testudines",
    emoji: "🐢",
    kingdom: "animalia",
    group: "reptiles",
    rank: "龜鱉目",
    summary: "烏龜以特有的龜殼著稱：上方隆起的背甲與下方平坦的腹甲由骨板構成，並與脊椎、肋骨癒合成一體。殼外覆蓋角質盾板（scute）。頭、四肢與尾可縮入殼中防禦。",
    views: [
      {
        id: "external",
        name: "外部形態",
        viewBox: "0 0 440 320",
        svg: `
<defs>
  <radialGradient id="turtle-shell" cx="42%" cy="30%">
    <stop offset="0%" stop-color="#7d6a3e"/>
    <stop offset="60%" stop-color="#5c4d2a"/>
    <stop offset="100%" stop-color="#3d3319"/>
  </radialGradient>
  <linearGradient id="turtle-skin" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7fa06a"/><stop offset="100%" stop-color="#4d6640"/>
  </linearGradient>
</defs>

<!-- 背甲 -->
<ellipse data-part="背甲" cx="220" cy="160" rx="130" ry="90" fill="url(#turtle-shell)" stroke="#2e2613" stroke-width="2"/>
<!-- 盾板分格 -->
<g data-part="盾板（角質）" fill="none" stroke="#2e2613" stroke-width="1.4" opacity="0.85">
  <path d="M220 72 L220 248"/>
  <path d="M150 90 Q220 110 290 90"/>
  <path d="M130 160 Q220 175 310 160"/>
  <path d="M150 230 Q220 210 290 230"/>
  <path d="M175 78 L165 250 M265 78 L275 250"/>
</g>
<!-- 邊緣盾板 -->
<g fill="none" stroke="#2e2613" stroke-width="1" opacity="0.7">
  <path d="M92 160 Q100 140 108 158 M110 110 Q126 96 130 116 M330 110 Q314 96 310 116 M348 160 Q340 140 332 158"/>
</g>

<!-- 頭 -->
<ellipse data-part="頭部" cx="360" cy="150" rx="34" ry="24" fill="url(#turtle-skin)" stroke="#33452a" stroke-width="1.5"/>
<circle cx="378" cy="144" r="4" fill="#20160a"/>
<path d="M388 150 q6 2 0 6" fill="none" stroke="#33452a" stroke-width="1.5"/>

<!-- 四肢 -->
<path data-part="前肢（鰭狀）" d="M300 220 Q320 260 350 262 Q330 244 320 218 Z" fill="url(#turtle-skin)" stroke="#33452a" stroke-width="1.2"/>
<path data-part="後肢" d="M130 230 Q112 264 84 260 Q108 244 118 224 Z" fill="url(#turtle-skin)" stroke="#33452a" stroke-width="1.2"/>

<!-- 尾 -->
<path data-part="尾" d="M92 175 Q70 185 58 178 Q78 176 90 168 Z" fill="url(#turtle-skin)" stroke="#33452a"/>

<g class="labels">
  <line x1="220" y1="90" x2="220" y2="30" stroke="#666" stroke-width="1"/>
  <text x="188" y="26" font-size="13" fill="var(--ink)">背甲</text>
  <line x1="270" y1="120" x2="330" y2="70" stroke="#666" stroke-width="1"/>
  <text x="334" y="66" font-size="13" fill="var(--ink)">盾板（角質）</text>
  <line x1="378" y1="150" x2="410" y2="110" stroke="#666" stroke-width="1"/>
  <text x="380" y="106" font-size="13" fill="var(--ink)">頭部</text>
  <line x1="330" y1="250" x2="360" y2="295" stroke="#666" stroke-width="1"/>
  <text x="330" y="308" font-size="13" fill="var(--ink)">前肢（鰭狀）</text>
  <line x1="105" y1="250" x2="80" y2="295" stroke="#666" stroke-width="1"/>
  <text x="30" y="308" font-size="13" fill="var(--ink)">後肢</text>
  <line x1="70" y1="176" x2="30" y2="150" stroke="#666" stroke-width="1"/>
  <text x="8" y="146" font-size="13" fill="var(--ink)">尾</text>
</g>`,
        parts: [
          { name: "背甲", desc: "隆起的上殼，是龜最顯著的防禦結構" },
          { name: "盾板（角質）", desc: "覆蓋於骨板外的角質鱗甲，排列成固定圖案" },
          { name: "頭部", desc: "多數可縮入殼內，具喙狀角質顎（無牙齒）" },
          { name: "前肢（鰭狀）", desc: "水生種類前肢常特化為划水的鰭狀肢" },
          { name: "後肢", desc: "支撐與推進，陸龜為柱狀，海龜為槳狀" },
          { name: "尾", desc: "殼後短小的尾部，內含泄殖孔" }
        ]
      },
      {
        id: "shell",
        name: "龜殼構造",
        viewBox: "0 0 420 380",
        svg: `
<defs>
  <linearGradient id="turtle-carapace" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6e5c34"/><stop offset="100%" stop-color="#463a1e"/>
  </linearGradient>
  <linearGradient id="turtle-plastron" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e0d3a8"/><stop offset="100%" stop-color="#c4b384"/>
  </linearGradient>
  <linearGradient id="turtle-bone2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f2ead2"/><stop offset="100%" stop-color="#d4c8a4"/>
  </linearGradient>
</defs>

<!-- 剖面示意：上為背甲，下為腹甲，中間為脊椎與肋骨 -->

<!-- 背甲（弧形骨板） -->
<path data-part="背甲（骨板）" d="M60 130 Q210 40 360 130 Q210 150 60 130 Z"
      fill="url(#turtle-carapace)" stroke="#2e2613" stroke-width="2"/>
<!-- 背甲外的角質盾板層 -->
<path data-part="角質盾板 scute" d="M60 126 Q210 36 360 126" fill="none" stroke="#8a7444" stroke-width="4"/>
<g fill="none" stroke="#2e2613" stroke-width="1" opacity="0.8">
  <line x1="120" y1="98" x2="122" y2="132"/><line x1="180" y1="72" x2="180" y2="146"/>
  <line x1="240" y1="72" x2="240" y2="146"/><line x1="300" y1="98" x2="298" y2="132"/>
</g>

<!-- 脊椎（與背甲癒合） -->
<path data-part="脊椎（與殼癒合）" d="M75 138 Q210 156 345 138" fill="none" stroke="url(#turtle-bone2)" stroke-width="9" stroke-linecap="round"/>
<g fill="url(#turtle-bone2)" stroke="#b6a984" stroke-width="0.8">
  <circle cx="120" cy="148" r="5"/><circle cx="170" cy="153" r="5"/>
  <circle cx="210" cy="155" r="5"/><circle cx="250" cy="153" r="5"/><circle cx="300" cy="148" r="5"/>
</g>

<!-- 肋骨（外展並與背甲癒合） -->
<g data-part="肋骨（併入背甲）" fill="none" stroke="url(#turtle-bone2)" stroke-width="4" stroke-linecap="round">
  <path d="M170 153 Q160 110 150 92"/>
  <path d="M210 155 Q210 108 210 88"/>
  <path d="M250 153 Q260 110 270 92"/>
  <path d="M300 148 Q320 112 335 100"/>
  <path d="M120 148 Q100 112 85 100"/>
</g>

<!-- 腹甲（下方平坦骨板） -->
<path data-part="腹甲" d="M70 250 Q210 235 350 250 Q210 300 70 250 Z"
      fill="url(#turtle-plastron)" stroke="#9a8a5c" stroke-width="2"/>
<g fill="none" stroke="#9a8a5c" stroke-width="1" opacity="0.8">
  <line x1="210" y1="238" x2="210" y2="288"/>
  <line x1="120" y1="246" x2="140" y2="272"/><line x1="300" y1="246" x2="280" y2="272"/>
  <line x1="90" y1="252" x2="330" y2="252"/>
</g>

<!-- 甲橋（連接背甲與腹甲） -->
<path data-part="甲橋" d="M80 145 Q78 200 80 248 M340 145 Q342 200 348 248"
      fill="none" stroke="#7a6a3c" stroke-width="6" stroke-linecap="round"/>

<g class="labels">
  <line x1="210" y1="55" x2="210" y2="20" stroke="#666" stroke-width="1"/>
  <text x="160" y="16" font-size="13" fill="var(--ink)">背甲（骨板）</text>
  <line x1="300" y1="70" x2="360" y2="46" stroke="#666" stroke-width="1"/>
  <text x="330" y="42" font-size="13" fill="var(--ink)">角質盾板 scute</text>
  <line x1="150" y1="105" x2="40" y2="90" stroke="#666" stroke-width="1"/>
  <text x="8" y="86" font-size="13" fill="var(--ink)">肋骨（併入背甲）</text>
  <line x1="150" y1="151" x2="60" y2="165" stroke="#666" stroke-width="1"/>
  <text x="8" y="169" font-size="13" fill="var(--ink)">脊椎（與殼癒合）</text>
  <line x1="345" y1="200" x2="392" y2="200" stroke="#666" stroke-width="1"/>
  <text x="352" y="192" font-size="13" fill="var(--ink)">甲橋</text>
  <line x1="210" y1="275" x2="210" y2="330" stroke="#666" stroke-width="1"/>
  <text x="184" y="344" font-size="13" fill="var(--ink)">腹甲</text>
</g>`,
        parts: [
          { name: "背甲（骨板）", desc: "由真皮骨化的骨板組成的隆起上殼" },
          { name: "角質盾板 scute", desc: "覆於骨板外的角質層，與骨板接縫錯開以強化結構" },
          { name: "脊椎（與殼癒合）", desc: "胸腰段脊椎與背甲內側骨板癒合，故龜無法離殼" },
          { name: "肋骨（併入背甲）", desc: "肋骨向外擴展並與背甲骨板融合，不再包覆式圍胸" },
          { name: "腹甲", desc: "下方較平的骨質腹殼，保護腹面" },
          { name: "甲橋", desc: "體側連接背甲與腹甲的骨質橋，使殼成封閉盒狀" }
        ]
      }
    ]
  });

  /* ---------------------------------------------------------------
   * 4. 鱷魚 CROCODILE（Crocodylia）
   * ------------------------------------------------------------- */
  R({
    id: "crocodile",
    name: "鱷魚",
    latin: "Crocodylia",
    emoji: "🐊",
    kingdom: "animalia",
    group: "reptiles",
    rank: "鱷目",
    summary: "鱷魚是半水生的大型掠食性爬蟲類，具堅硬骨板（皮內成骨）與強壯尾部。頭部長而扁，顎肌強大、牙齒為同型圓錐狀且終生更換。眼、鼻位於頭頂便於潛伏於水面。",
    views: [
      {
        id: "external",
        name: "外部形態",
        viewBox: "0 0 460 280",
        svg: `
<defs>
  <linearGradient id="croc-back" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6a7a4a"/><stop offset="48%" stop-color="#454f2c"/><stop offset="100%" stop-color="#283017"/>
  </linearGradient>
  <linearGradient id="croc-belly" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#9aa06f"/><stop offset="100%" stop-color="#727850"/>
  </linearGradient>
  <radialGradient id="croc-eye" cx="40%" cy="34%" r="72%">
    <stop offset="0%" stop-color="#ecd063"/><stop offset="58%" stop-color="#bd9a30"/><stop offset="100%" stop-color="#6b5010"/>
  </radialGradient>
  <pattern id="croc-scale" width="15" height="11" patternUnits="userSpaceOnUse">
    <path d="M0 5.5 Q4 0 7.5 0 Q11 0 15 5.5 Q11 11 7.5 11 Q4 11 0 5.5 Z" fill="none" stroke="#232a14" stroke-width="0.6" opacity="0.45"/>
  </pattern>
</defs>

<!-- 遠側肢（暗、在身體後方） -->
<path d="M258 178 Q266 204 256 226 L250 238" fill="none" stroke="#2b3318" stroke-width="9" stroke-linecap="round"/>
<path d="M148 180 Q138 208 126 228 L120 240" fill="none" stroke="#2b3318" stroke-width="9" stroke-linecap="round"/>

<!-- 身體＋尾 主輪廓 -->
<path data-part="軀幹" d="M300 128 Q210 112 150 120 Q95 128 24 162 Q95 150 150 168 Q210 186 300 176 Q322 172 330 152 Q322 132 300 128 Z" fill="url(#croc-back)" stroke="#212812" stroke-width="1.6" stroke-linejoin="round"/>
<!-- 腹部淺色帶 -->
<path d="M150 168 Q210 186 300 176 Q300 183 280 187 Q210 197 150 179 Q120 173 150 168 Z" fill="url(#croc-belly)" opacity="0.92"/>
<!-- 鱗片質感 -->
<path d="M300 128 Q210 112 150 120 Q95 128 24 162 Q95 150 150 168 Q210 186 300 176 Q322 172 330 152 Q322 132 300 128 Z" fill="url(#croc-scale)"/>
<!-- 腹部橫鱗板 -->
<g stroke="#5a6238" stroke-width="0.8" opacity="0.55" fill="none">
  <path d="M172 178 l0 8 M198 183 l0 8 M224 185 l0 8 M250 184 l0 7 M276 181 l0 7"/>
</g>

<!-- 背部與尾部雙列骨板脊（鋸齒 osteoderm） -->
<g data-part="鱗甲（骨板）" fill="url(#croc-back)" stroke="#212812" stroke-width="1" stroke-linejoin="round">
  <path d="M293 130 l-8 -13 l-8 13 Z"/><path d="M258 134 l-8 -13 l-8 13 Z"/>
  <path d="M218 139 l-8 -13 l-8 13 Z"/><path d="M178 144 l-8 -12 l-8 12 Z"/>
  <path d="M138 149 l-7 -11 l-7 11 Z"/><path d="M103 153 l-7 -10 l-7 10 Z"/>
  <path d="M68 158 l-6 -9 l-6 9 Z"/><path d="M43 161 l-6 -8 l-6 8 Z"/>
</g>

<!-- 頭（長吻） -->
<path data-part="頭部（長吻）" d="M300 138 L430 150 Q446 154 446 160 Q446 167 430 169 L300 172 Q291 155 300 138 Z" fill="url(#croc-back)" stroke="#212812" stroke-width="1.6" stroke-linejoin="round"/>
<path d="M300 138 L430 150 Q446 154 446 160 Q446 167 430 169 L300 172 Q291 155 300 138 Z" fill="url(#croc-scale)"/>
<!-- 嘴縫 -->
<path d="M311 160 L444 160" stroke="#161c0c" stroke-width="1.4"/>
<!-- 牙齒（上下交錯） -->
<g data-part="牙齒" fill="#f4ecd4" stroke="#cabf98" stroke-width="0.4">
  <path d="M324 160 l-2.6 6.5 l-2.6 -6.5 Z"/><path d="M356 160 l-2.6 7 l-2.6 -7 Z"/>
  <path d="M388 160 l-2.6 6.5 l-2.6 -6.5 Z"/><path d="M418 160 l-2.4 6 l-2.4 -6 Z"/>
  <path d="M340 160 l2.6 -6.5 l2.6 6.5 Z"/><path d="M372 160 l2.6 -7 l2.6 7 Z"/>
  <path d="M404 160 l2.4 -6 l2.4 6 Z"/><path d="M432 160 l2.2 -5 l2.2 5 Z"/>
</g>
<!-- 眼（頭頂隆起）＋垂直裂瞳 -->
<ellipse cx="312" cy="139" rx="12" ry="9" fill="url(#croc-back)" stroke="#212812" stroke-width="1.2"/>
<ellipse data-part="眼（位於頭頂）" cx="314" cy="136" rx="7" ry="5.4" fill="url(#croc-eye)" stroke="#161c0c" stroke-width="0.9"/>
<line x1="314" y1="131" x2="314" y2="141" stroke="#150f06" stroke-width="1.8"/>
<!-- 鼻孔（吻端隆起） -->
<ellipse cx="436" cy="152" rx="6.5" ry="4.2" fill="url(#croc-back)" stroke="#212812" stroke-width="1"/>
<ellipse data-part="鼻孔（吻端）" cx="436" cy="152" rx="2.4" ry="2" fill="#140d05"/>

<!-- 近側肢（亮、前方，帶爪） -->
<path data-part="前肢" d="M272 176 Q279 203 269 224 L263 236" fill="none" stroke="#43502c" stroke-width="10" stroke-linecap="round"/>
<path d="M263 236 l-9 7 M266 238 l-1 9 M270 236 l7 7" fill="none" stroke="#2b3318" stroke-width="3" stroke-linecap="round"/>
<path data-part="後肢" d="M150 178 Q140 206 128 227 L121 240" fill="none" stroke="#43502c" stroke-width="11" stroke-linecap="round"/>
<path d="M121 240 l-9 7 M124 242 l-1 9 M128 240 l8 7" fill="none" stroke="#2b3318" stroke-width="3" stroke-linecap="round"/>

<g class="labels">
  <line x1="314" y1="132" x2="352" y2="80" stroke="#666" stroke-width="1"/>
  <text x="332" y="76" font-size="13" fill="var(--ink)">眼（位於頭頂）</text>
  <line x1="436" y1="150" x2="452" y2="112" stroke="#666" stroke-width="1"/>
  <text x="412" y="108" font-size="13" fill="var(--ink)">鼻孔（吻端）</text>
  <line x1="386" y1="167" x2="404" y2="214" stroke="#666" stroke-width="1"/>
  <text x="382" y="228" font-size="13" fill="var(--ink)">牙齒</text>
  <line x1="400" y1="150" x2="416" y2="140" stroke="#666" stroke-width="1"/>
  <text x="360" y="138" font-size="12" fill="var(--ink)">頭部（長吻）</text>
  <line x1="200" y1="118" x2="200" y2="58" stroke="#666" stroke-width="1"/>
  <text x="158" y="54" font-size="13" fill="var(--ink)">鱗甲（骨板）</text>
  <line x1="210" y1="150" x2="160" y2="104" stroke="#666" stroke-width="1"/>
  <text x="126" y="100" font-size="13" fill="var(--ink)">軀幹</text>
  <line x1="268" y1="226" x2="300" y2="256" stroke="#666" stroke-width="1"/>
  <text x="304" y="260" font-size="13" fill="var(--ink)">前肢</text>
  <line x1="126" y1="228" x2="96" y2="258" stroke="#666" stroke-width="1"/>
  <text x="48" y="262" font-size="13" fill="var(--ink)">後肢</text>
  <line x1="60" y1="156" x2="30" y2="122" stroke="#666" stroke-width="1"/>
  <text x="6" y="118" font-size="13" fill="var(--ink)">尾（側扁有力）</text>
</g>`,
        parts: [
          { name: "頭部（長吻）", desc: "長而扁的吻部，容納強大顎肌與眾多牙齒" },
          { name: "眼（位於頭頂）", desc: "眼、鼻高居頭頂，可潛伏水面僅露雙眼窺伺" },
          { name: "鼻孔（吻端）", desc: "位於吻端上方，具閥膜潛水時可關閉" },
          { name: "牙齒", desc: "同型圓錐狀牙，終生不斷替換" },
          { name: "鱗甲（骨板）", desc: "背部具皮內成骨（骨板 osteoderm）強化防護" },
          { name: "軀幹", desc: "壯碩身體，肌肉發達可爆發衝刺" },
          { name: "前肢", desc: "較短小，趾間有部分蹼" },
          { name: "後肢", desc: "較長且有力，具蹼助划水" },
          { name: "尾（側扁有力）", desc: "側扁的長尾是游泳的主要推進器" }
        ]
      },
      {
        id: "head",
        name: "頭部（牙齒與顎）",
        viewBox: "0 0 440 300",
        svg: `
<defs>
  <linearGradient id="croc-skull" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f2ead2"/><stop offset="100%" stop-color="#d2c6a2"/>
  </linearGradient>
  <radialGradient id="croc-muscle" cx="40%" cy="35%">
    <stop offset="0%" stop-color="#b0503f"/><stop offset="100%" stop-color="#7a2d26"/>
  </radialGradient>
  <linearGradient id="croc-tooth" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#d8cbaa"/>
  </linearGradient>
</defs>

<!-- 上顎 / 頭骨 -->
<path data-part="頭骨" d="M40 120 Q60 96 120 100 L400 118 Q418 124 400 134 L120 138 Q60 140 40 120 Z"
      fill="url(#croc-skull)" stroke="#b6a984" stroke-width="1.8"/>
<!-- 眼窩 -->
<circle data-part="眼窩" cx="110" cy="112" r="12" fill="#2a2418" stroke="#b6a984"/>
<!-- 鼻孔（吻端） -->
<ellipse data-part="外鼻孔" cx="392" cy="124" rx="8" ry="5" fill="#2a2418" stroke="#b6a984"/>

<!-- 下顎 -->
<path data-part="下顎骨" d="M55 170 Q80 200 160 205 L395 188 Q412 182 395 176 L150 182 Q90 180 70 158 Z"
      fill="url(#croc-skull)" stroke="#b6a984" stroke-width="1.8"/>

<!-- 顎肌 -->
<path data-part="顎肌（咬合肌）" d="M60 118 Q90 150 78 178 Q56 150 56 122 Z"
      fill="url(#croc-muscle)" stroke="#5c211c" stroke-width="1.2"/>

<!-- 上排牙 -->
<g data-part="上排牙齒" fill="url(#croc-tooth)" stroke="#b8a878" stroke-width="0.6">
  <path d="M150 138 l6 20 l6 -20 Z"/><path d="M190 138 l6 22 l6 -22 Z"/>
  <path d="M230 138 l7 26 l7 -26 Z"/><path d="M275 136 l6 22 l6 -22 Z"/>
  <path d="M320 134 l6 18 l6 -18 Z"/><path d="M360 130 l5 16 l5 -16 Z"/>
</g>
<!-- 下排牙 -->
<g data-part="下排牙齒" fill="url(#croc-tooth)" stroke="#b8a878" stroke-width="0.6">
  <path d="M170 182 l6 -18 l6 18 Z"/><path d="M212 184 l7 -22 l7 22 Z"/>
  <path d="M258 182 l6 -20 l6 20 Z"/><path d="M300 180 l6 -18 l6 18 Z"/>
  <path d="M342 176 l5 -15 l5 15 Z"/>
</g>

<!-- 顎關節 -->
<circle data-part="顎關節" cx="66" cy="150" r="7" fill="#cbbd97" stroke="#b6a984"/>

<g class="labels">
  <line x1="200" y1="118" x2="200" y2="50" stroke="#666" stroke-width="1"/>
  <text x="172" y="46" font-size="13" fill="var(--ink)">頭骨</text>
  <line x1="110" y1="112" x2="60" y2="70" stroke="#666" stroke-width="1"/>
  <text x="18" y="66" font-size="13" fill="var(--ink)">眼窩</text>
  <line x1="392" y1="124" x2="410" y2="90" stroke="#666" stroke-width="1"/>
  <text x="386" y="86" font-size="13" fill="var(--ink)">外鼻孔</text>
  <line x1="66" y1="150" x2="30" y2="150" stroke="#666" stroke-width="1"/>
  <text x="8" y="140" font-size="12" fill="var(--ink)">顎關節</text>
  <line x1="66" y1="148" x2="40" y2="200" stroke="#666" stroke-width="1"/>
  <text x="8" y="212" font-size="13" fill="var(--ink)">顎肌（咬合肌）</text>
  <line x1="240" y1="164" x2="240" y2="120" stroke="#666" stroke-width="1"/>
  <text x="246" y="118" font-size="13" fill="var(--ink)">上排牙齒</text>
  <line x1="264" y1="176" x2="300" y2="245" stroke="#666" stroke-width="1"/>
  <text x="270" y="259" font-size="13" fill="var(--ink)">下排牙齒</text>
  <line x1="300" y1="188" x2="360" y2="215" stroke="#666" stroke-width="1"/>
  <text x="364" y="219" font-size="13" fill="var(--ink)">下顎骨</text>
</g>`,
        parts: [
          { name: "頭骨", desc: "堅實而長的顱骨，構成上顎與吻部" },
          { name: "眼窩", desc: "容納眼球的骨腔，位置偏頭頂" },
          { name: "外鼻孔", desc: "吻端的鼻開口，向後接長氣道通至喉部" },
          { name: "下顎骨", desc: "強壯的下顎，閉合咬力極強" },
          { name: "顎關節", desc: "頭骨與下顎的鉸接點，位於頭骨後端" },
          { name: "顎肌（咬合肌）", desc: "體積大、閉口力驚人，但張口力相對弱" },
          { name: "上排牙齒", desc: "圓錐狀同型齒，鑲於上顎齒槽內" },
          { name: "下排牙齒", desc: "與上排交錯咬合，用於咬住而非咀嚼獵物" }
        ]
      }
    ]
  });

  /* ---------------------------------------------------------------
   * 5. 青蛙 FROG（Anura）— 兩生類
   * ------------------------------------------------------------- */
  R({
    id: "frog",
    name: "青蛙",
    latin: "Anura",
    emoji: "🐸",
    kingdom: "animalia",
    group: "amphibians",
    rank: "無尾目",
    summary: "青蛙是無尾兩生類，成體具強壯後肢善於跳躍與游泳。皮膚裸露濕潤可輔助呼吸。一生歷經明顯變態：由水中卵孵成有鰓、有尾的蝌蚪，再長出四肢、失去尾與鰓成為陸棲成蛙。",
    views: [
      {
        id: "external",
        name: "外部形態",
        viewBox: "0 0 400 360",
        svg: `
<defs>
  <radialGradient id="frog-body" cx="42%" cy="30%">
    <stop offset="0%" stop-color="#8fc24a"/>
    <stop offset="60%" stop-color="#5c9a2e"/>
    <stop offset="100%" stop-color="#356a1c"/>
  </radialGradient>
  <linearGradient id="frog-belly" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#eef2d6"/><stop offset="100%" stop-color="#cdd8a4"/>
  </linearGradient>
</defs>

<!-- 身體 -->
<ellipse data-part="軀幹" cx="200" cy="180" rx="72" ry="60" fill="url(#frog-body)" stroke="#2e5417" stroke-width="1.8"/>
<ellipse cx="200" cy="210" rx="46" ry="34" fill="url(#frog-belly)" opacity="0.85"/>

<!-- 頭 -->
<path data-part="頭部" d="M150 130 Q200 96 250 130 Q252 158 200 160 Q148 158 150 130 Z"
      fill="url(#frog-body)" stroke="#2e5417" stroke-width="1.5"/>
<!-- 突出的眼 -->
<circle data-part="眼（凸出）" cx="168" cy="122" r="16" fill="#8fc24a" stroke="#2e5417" stroke-width="1.5"/>
<circle cx="168" cy="122" r="9" fill="#d8b83c"/><circle cx="168" cy="122" r="4" fill="#20160a"/>
<circle cx="232" cy="122" r="16" fill="#8fc24a" stroke="#2e5417" stroke-width="1.5"/>
<circle cx="232" cy="122" r="9" fill="#d8b83c"/><circle cx="232" cy="122" r="4" fill="#20160a"/>
<!-- 鼓膜 -->
<circle data-part="鼓膜" cx="150" cy="150" r="8" fill="#4d7a28" stroke="#2e5417"/>
<circle cx="250" cy="150" r="8" fill="#4d7a28" stroke="#2e5417"/>

<!-- 前肢 -->
<path data-part="前肢" d="M150 200 Q120 230 118 258 Q112 264 106 260 Q110 268 118 266 Q126 268 128 260"
      fill="none" stroke="#4d7a28" stroke-width="8" stroke-linecap="round"/>
<path d="M250 200 Q280 230 282 258 Q288 264 294 260 Q290 268 282 266 Q274 268 272 260"
      fill="none" stroke="#4d7a28" stroke-width="8" stroke-linecap="round"/>

<!-- 後肢（強壯、折疊） -->
<path data-part="後肢（強壯善跳）" d="M160 230 Q110 250 96 300 Q80 330 60 340 Q78 342 96 332 Q116 322 120 302 Q132 268 168 250"
      fill="url(#frog-body)" stroke="#2e5417" stroke-width="1.5"/>
<path d="M240 230 Q290 250 304 300 Q320 330 340 340 Q322 342 304 332 Q284 322 280 302 Q268 268 232 250"
      fill="url(#frog-body)" stroke="#2e5417" stroke-width="1.5"/>
<!-- 蹼足 -->
<path data-part="蹼足" d="M60 340 l-18 4 l4 6 l-14 6 l4 6 l-12 6" fill="none" stroke="#4d7a28" stroke-width="4" stroke-linecap="round"/>

<g class="labels">
  <line x1="200" y1="100" x2="200" y2="50" stroke="#666" stroke-width="1"/>
  <text x="176" y="46" font-size="13" fill="var(--ink)">頭部</text>
  <line x1="168" y1="112" x2="110" y2="80" stroke="#666" stroke-width="1"/>
  <text x="40" y="76" font-size="13" fill="var(--ink)">眼（凸出）</text>
  <line x1="250" y1="150" x2="320" y2="150" stroke="#666" stroke-width="1"/>
  <text x="324" y="154" font-size="13" fill="var(--ink)">鼓膜</text>
  <line x1="240" y1="180" x2="320" y2="200" stroke="#666" stroke-width="1"/>
  <text x="324" y="204" font-size="13" fill="var(--ink)">軀幹</text>
  <line x1="120" y1="250" x2="120" y2="230" stroke="#666" stroke-width="1"/>
  <text x="110" y="226" font-size="12" fill="var(--ink)">前肢</text>
  <line x1="300" y1="300" x2="340" y2="290" stroke="#666" stroke-width="1"/>
  <text x="300" y="286" font-size="12" fill="var(--ink)">後肢（強壯善跳）</text>
  <line x1="45" y1="345" x2="30" y2="330" stroke="#666" stroke-width="1"/>
  <text x="8" y="326" font-size="13" fill="var(--ink)">蹼足</text>
</g>`,
        parts: [
          { name: "頭部", desc: "寬扁三角形頭，含大口與突出雙眼" },
          { name: "眼（凸出）", desc: "高凸於頭頂，視野廣，具瞬膜可護眼" },
          { name: "鼓膜", desc: "眼後圓形聽膜，接收空氣中聲波" },
          { name: "軀幹", desc: "短而寬的身體，無明顯頸部與尾巴" },
          { name: "前肢", desc: "較短，落地時緩衝，具四趾" },
          { name: "後肢（強壯善跳）", desc: "長而肌肉發達，是跳躍與游泳的主要動力" },
          { name: "蹼足", desc: "後足趾間具蹼，增加划水面積" }
        ]
      },
      {
        id: "viscera",
        name: "內臟",
        viewBox: "0 0 380 400",
        svg: `
<defs>
  <linearGradient id="frog-outline" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#eef2d6"/><stop offset="100%" stop-color="#d3dcb0"/>
  </linearGradient>
  <radialGradient id="frog-heart" cx="40%" cy="35%">
    <stop offset="0%" stop-color="#c0503f"/><stop offset="100%" stop-color="#7a2d26"/>
  </radialGradient>
  <linearGradient id="frog-lung" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#e0a6b0"/><stop offset="100%" stop-color="#b56d7a"/>
  </linearGradient>
  <linearGradient id="frog-liver" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8a3d33"/><stop offset="100%" stop-color="#5c261f"/>
  </linearGradient>
  <linearGradient id="frog-stomach" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#d9b48a"/><stop offset="100%" stop-color="#b48a5c"/>
  </linearGradient>
  <linearGradient id="frog-intestine" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#e0b6a0"/><stop offset="100%" stop-color="#c08a70"/>
  </linearGradient>
</defs>

<!-- 身體輪廓 -->
<path d="M190 30 Q290 60 300 200 Q300 340 190 380 Q80 340 80 200 Q90 60 190 30 Z"
      fill="url(#frog-outline)" stroke="#9aab6a" stroke-width="1.5"/>

<!-- 肺（一對） -->
<ellipse data-part="肺" cx="140" cy="130" rx="26" ry="42" fill="url(#frog-lung)" stroke="#9a5866" stroke-width="1.2"/>
<ellipse cx="240" cy="130" rx="26" ry="42" fill="url(#frog-lung)" stroke="#9a5866" stroke-width="1.2"/>

<!-- 心臟（三腔） -->
<path data-part="心臟（三腔）" d="M190 118 Q212 130 200 165 Q190 180 180 165 Q168 130 190 118 Z"
      fill="url(#frog-heart)" stroke="#5c211c" stroke-width="1.5"/>

<!-- 肝（大型三葉） -->
<path data-part="肝臟" d="M150 175 Q190 165 232 175 Q236 215 190 225 Q144 215 150 175 Z"
      fill="url(#frog-liver)" stroke="#4a1f18" stroke-width="1.3"/>
<line x1="190" y1="172" x2="190" y2="222" stroke="#4a1f18" stroke-width="0.8" opacity="0.6"/>

<!-- 胃 -->
<path data-part="胃" d="M150 225 Q130 250 150 285 Q170 270 168 235 Z" fill="url(#frog-stomach)" stroke="#8a6a3c" stroke-width="1.2"/>

<!-- 小腸（盤繞） -->
<path data-part="小腸" d="M180 235 Q230 240 235 275 Q235 310 195 315 Q160 315 165 288 Q168 268 200 270 Q222 272 220 292"
      fill="none" stroke="url(#frog-intestine)" stroke-width="12" stroke-linecap="round"/>

<!-- 泄殖腔 -->
<ellipse data-part="泄殖腔" cx="190" cy="345" rx="16" ry="10" fill="#c98a70" stroke="#8a5340"/>

<g class="labels">
  <line x1="240" y1="120" x2="320" y2="100" stroke="#666" stroke-width="1"/>
  <text x="324" y="104" font-size="13" fill="var(--ink)">肺</text>
  <line x1="200" y1="140" x2="300" y2="160" stroke="#666" stroke-width="1"/>
  <text x="300" y="164" font-size="13" fill="var(--ink)">心臟（三腔）</text>
  <line x1="150" y1="195" x2="40" y2="185" stroke="#666" stroke-width="1"/>
  <text x="8" y="189" font-size="13" fill="var(--ink)">肝臟</text>
  <line x1="145" y1="255" x2="40" y2="255" stroke="#666" stroke-width="1"/>
  <text x="8" y="259" font-size="13" fill="var(--ink)">胃</text>
  <line x1="230" y1="285" x2="320" y2="285" stroke="#666" stroke-width="1"/>
  <text x="324" y="289" font-size="13" fill="var(--ink)">小腸</text>
  <line x1="206" y1="345" x2="300" y2="345" stroke="#666" stroke-width="1"/>
  <text x="304" y="349" font-size="13" fill="var(--ink)">泄殖腔</text>
</g>`,
        parts: [
          { name: "肺", desc: "一對囊狀肺，成蛙以肺與濕潤皮膚共同呼吸" },
          { name: "心臟（三腔）", desc: "兩心房一心室，動脈與靜脈血在心室部分混合" },
          { name: "肝臟", desc: "體積大、分葉，負責代謝、解毒與儲存養分" },
          { name: "胃", desc: "暫存並初步消化吞下的昆蟲等獵物" },
          { name: "小腸", desc: "盤繞的細管，是養分吸收的主要場所" },
          { name: "泄殖腔", desc: "消化、泌尿、生殖三系共用的排出口" }
        ]
      },
      {
        id: "lifecycle",
        name: "生命週期（變態）",
        viewBox: "0 0 460 300",
        svg: `
<defs>
  <radialGradient id="frog-egg" cx="40%" cy="35%">
    <stop offset="0%" stop-color="#cfe6f2"/><stop offset="100%" stop-color="#8fb6cc"/>
  </radialGradient>
  <radialGradient id="frog-tad" cx="42%" cy="35%">
    <stop offset="0%" stop-color="#6b7a52"/><stop offset="100%" stop-color="#3d4a2c"/>
  </radialGradient>
  <radialGradient id="frog-young" cx="42%" cy="30%">
    <stop offset="0%" stop-color="#8fc24a"/><stop offset="100%" stop-color="#4d7a28"/>
  </radialGradient>
</defs>

<!-- 循環箭頭 -->
<path d="M110 70 Q230 30 350 70" fill="none" stroke="#7fa84c" stroke-width="2" stroke-dasharray="5 5"/>
<path d="M350 70 l-10 -6 l2 12 Z" fill="#7fa84c"/>
<path d="M360 130 Q380 200 300 250" fill="none" stroke="#7fa84c" stroke-width="2" stroke-dasharray="5 5"/>
<path d="M300 250 l10 -3 l-8 -9 Z" fill="#7fa84c"/>
<path d="M240 258 Q140 258 100 200" fill="none" stroke="#7fa84c" stroke-width="2" stroke-dasharray="5 5"/>
<path d="M100 200 l-1 11 l10 -6 Z" fill="#7fa84c"/>
<path d="M80 150 Q70 100 100 78" fill="none" stroke="#7fa84c" stroke-width="2" stroke-dasharray="5 5"/>
<path d="M100 78 l-9 5 l10 4 Z" fill="#7fa84c"/>

<!-- 階段1：卵 -->
<g data-part="① 卵">
  <ellipse cx="70" cy="70" rx="34" ry="26" fill="url(#frog-egg)" stroke="#5c8296" stroke-width="1.2" opacity="0.7"/>
  <g fill="#2e3a44"><circle cx="54" cy="62" r="5"/><circle cx="70" cy="58" r="5"/><circle cx="86" cy="64" r="5"/>
     <circle cx="60" cy="78" r="5"/><circle cx="78" cy="76" r="5"/><circle cx="70" cy="70" r="5"/></g>
</g>

<!-- 階段2：蝌蚪 -->
<g data-part="② 蝌蚪">
  <ellipse cx="380" cy="70" rx="26" ry="18" fill="url(#frog-tad)" stroke="#2a331a" stroke-width="1.2"/>
  <path d="M406 70 Q436 56 440 70 Q436 84 406 70 Z" fill="url(#frog-tad)" stroke="#2a331a"/>
  <circle cx="368" cy="66" r="3.5" fill="#fff"/><circle cx="368" cy="66" r="1.8" fill="#20160a"/>
  <!-- 外鰓 -->
  <path d="M360 80 q-8 6 -14 4 M360 84 q-8 8 -16 8" fill="none" stroke="#b56d7a" stroke-width="1.5"/>
</g>

<!-- 階段3：幼蛙（長出四肢、尾漸縮） -->
<g data-part="③ 幼蛙（長腿）">
  <ellipse cx="360" cy="215" rx="28" ry="22" fill="url(#frog-young)" stroke="#2e5417" stroke-width="1.2"/>
  <circle cx="346" cy="205" r="5" fill="#8fc24a" stroke="#2e5417"/><circle cx="346" cy="205" r="2" fill="#20160a"/>
  <!-- 殘留短尾 -->
  <path d="M386 218 Q404 214 410 222 Q400 226 386 224 Z" fill="url(#frog-young)" stroke="#2e5417"/>
  <!-- 後肢 -->
  <path d="M352 236 Q344 256 350 268 M370 236 Q378 256 372 268" fill="none" stroke="#4d7a28" stroke-width="4" stroke-linecap="round"/>
</g>

<!-- 階段4：成蛙 -->
<g data-part="④ 成蛙">
  <ellipse cx="90" cy="215" rx="30" ry="24" fill="url(#frog-young)" stroke="#2e5417" stroke-width="1.4"/>
  <circle cx="76" cy="200" r="6" fill="#8fc24a" stroke="#2e5417"/><circle cx="76" cy="200" r="2.5" fill="#20160a"/>
  <circle cx="104" cy="200" r="6" fill="#8fc24a" stroke="#2e5417"/><circle cx="104" cy="200" r="2.5" fill="#20160a"/>
  <!-- 強壯後肢，無尾 -->
  <path d="M74 238 Q56 258 40 262 M106 238 Q124 258 140 262" fill="none" stroke="#4d7a28" stroke-width="6" stroke-linecap="round"/>
  <path d="M80 236 Q78 254 84 266 M100 236 Q102 254 96 266" fill="none" stroke="#4d7a28" stroke-width="4" stroke-linecap="round"/>
</g>

<g class="labels">
  <line x1="70" y1="98" x2="70" y2="130" stroke="#666" stroke-width="1"/>
  <text x="30" y="146" font-size="14" fill="var(--ink)">① 卵</text>
  <line x1="380" y1="92" x2="380" y2="120" stroke="#666" stroke-width="1"/>
  <text x="352" y="138" font-size="14" fill="var(--ink)">② 蝌蚪</text>
  <line x1="360" y1="242" x2="400" y2="270" stroke="#666" stroke-width="1"/>
  <text x="360" y="286" font-size="14" fill="var(--ink)">③ 幼蛙（長腿）</text>
  <line x1="90" y1="242" x2="90" y2="272" stroke="#666" stroke-width="1"/>
  <text x="58" y="288" font-size="14" fill="var(--ink)">④ 成蛙</text>
  <text x="150" y="24" font-size="13" fill="var(--ink)" opacity="0.8">變態發育（Metamorphosis）</text>
</g>`,
        parts: [
          { name: "① 卵", desc: "產於水中的膠質卵團，內含發育中的胚胎" },
          { name: "② 蝌蚪", desc: "孵出後有尾、以外鰓水中呼吸的幼體，草食為主" },
          { name: "③ 幼蛙（長腿）", desc: "先長後肢再長前肢，鰓退化改用肺，尾漸被吸收" },
          { name: "④ 成蛙", desc: "尾完全消失、四肢健全，登陸營陸棲生活，肺呼吸" }
        ]
      }
    ]
  });

  /* ---------------------------------------------------------------
   * 6. 蠑螈 SALAMANDER（Caudata）— 兩生類
   * ------------------------------------------------------------- */
  R({
    id: "salamander",
    name: "蠑螈",
    latin: "Caudata",
    emoji: "🦎",
    kingdom: "animalia",
    group: "amphibians",
    rank: "有尾目",
    summary: "蠑螈是有尾兩生類，體型細長、具明顯的尾與四短肢，外形似蜥蜴但皮膚裸露濕潤而無鱗。多數水陸兩棲，部分終生保留外鰓。斷肢與尾具強大再生能力。",
    views: [
      {
        id: "external",
        name: "外部形態",
        viewBox: "0 0 460 260",
        svg: `
<defs>
  <linearGradient id="sala-body" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d98a3c"/>
    <stop offset="50%" stop-color="#b0632a"/>
    <stop offset="100%" stop-color="#7a3f18"/>
  </linearGradient>
  <radialGradient id="sala-head" cx="40%" cy="35%">
    <stop offset="0%" stop-color="#e09a4c"/><stop offset="100%" stop-color="#8a4a20"/>
  </radialGradient>
  <linearGradient id="sala-tail" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#7a3f18"/><stop offset="100%" stop-color="#c07634"/>
  </linearGradient>
</defs>

<!-- 尾（側扁） -->
<path data-part="尾（側扁）" d="M40 130 Q90 108 130 120 Q90 150 40 150 Z" fill="url(#sala-tail)" stroke="#5c2f12" stroke-width="1.5"/>

<!-- 軀幹 -->
<path data-part="軀幹" d="M120 118 Q220 104 320 120 Q328 132 320 148 Q220 164 120 150 Q112 134 120 118 Z"
      fill="url(#sala-body)" stroke="#5c2f12" stroke-width="1.5"/>
<!-- 濕潤皮膚斑點 -->
<g data-part="裸露濕潤皮膚" fill="#5c2f12" opacity="0.55">
  <circle cx="170" cy="128" r="4"/><circle cx="210" cy="140" r="4"/><circle cx="250" cy="126" r="4"/>
  <circle cx="290" cy="138" r="4"/><circle cx="190" cy="150" r="3"/><circle cx="270" cy="148" r="3"/>
</g>

<!-- 頭 -->
<path data-part="頭部" d="M320 122 Q356 118 378 130 Q356 148 320 146 Q310 134 320 122 Z"
      fill="url(#sala-head)" stroke="#5c2f12" stroke-width="1.5"/>
<circle data-part="眼" cx="342" cy="126" r="6" fill="#20160a" stroke="#5c2f12"/>
<circle cx="342" cy="125" r="2" fill="#c9a83a"/>

<!-- 外鰓（部分種類保留） -->
<path data-part="外鰓（部分保留）" d="M322 116 q-6 -14 -16 -18 M328 116 q-2 -16 -8 -22 M334 116 q4 -14 2 -22"
      fill="none" stroke="#c86a78" stroke-width="2" stroke-linecap="round"/>

<!-- 前肢 -->
<path data-part="前肢（短小）" d="M296 150 l6 30 l-8 4 l6 2 l-4 4 l6 2" fill="none" stroke="#8a4a20" stroke-width="6" stroke-linecap="round"/>
<!-- 後肢 -->
<path data-part="後肢（短小）" d="M160 150 l-4 32 l-8 4 l6 2 l-4 4 l6 2" fill="none" stroke="#8a4a20" stroke-width="6" stroke-linecap="round"/>

<g class="labels">
  <line x1="342" y1="126" x2="380" y2="80" stroke="#666" stroke-width="1"/>
  <text x="360" y="76" font-size="13" fill="var(--ink)">眼</text>
  <line x1="350" y1="132" x2="410" y2="140" stroke="#666" stroke-width="1"/>
  <text x="414" y="144" font-size="13" fill="var(--ink)">頭部</text>
  <line x1="318" y1="104" x2="300" y2="60" stroke="#666" stroke-width="1"/>
  <text x="256" y="56" font-size="13" fill="var(--ink)">外鰓（部分保留）</text>
  <line x1="230" y1="130" x2="230" y2="70" stroke="#666" stroke-width="1"/>
  <text x="188" y="66" font-size="13" fill="var(--ink)">裸露濕潤皮膚</text>
  <line x1="200" y1="150" x2="150" y2="100" stroke="#666" stroke-width="1"/>
  <text x="90" y="96" font-size="13" fill="var(--ink)">軀幹</text>
  <line x1="300" y1="185" x2="330" y2="225" stroke="#666" stroke-width="1"/>
  <text x="334" y="229" font-size="13" fill="var(--ink)">前肢（短小）</text>
  <line x1="156" y1="185" x2="120" y2="225" stroke="#666" stroke-width="1"/>
  <text x="60" y="229" font-size="13" fill="var(--ink)">後肢（短小）</text>
  <line x1="70" y1="140" x2="40" y2="180" stroke="#666" stroke-width="1"/>
  <text x="10" y="196" font-size="13" fill="var(--ink)">尾（側扁）</text>
</g>`,
        parts: [
          { name: "頭部", desc: "扁平頭部，具口與一對小眼，靠嗅覺與側線覓食" },
          { name: "眼", desc: "位於頭側的小眼，多數具眼瞼" },
          { name: "外鰓（部分保留）", desc: "幼體用外鰓呼吸，部分種類（如美西螈）終生保留" },
          { name: "軀幹", desc: "細長身體，兩側常見肋溝，內含各臟器" },
          { name: "裸露濕潤皮膚", desc: "無鱗、富黏液腺的皮膚，可輔助氣體交換" },
          { name: "前肢（短小）", desc: "短小四趾前肢，行走時左右交替擺動" },
          { name: "後肢（短小）", desc: "短小五趾後肢，與軀幹波動配合前進" },
          { name: "尾（側扁）", desc: "長而側扁的尾，游泳推進並可自割再生" }
        ]
      }
    ]
  });

})();
