/* ============================================================
 * 非開花植物構造教材
 * 松樹（裸子）／蕨類／苔蘚／藻類
 * 每主題一次 window.ANATOMY.register({...})
 * ========================================================== */

/* ---------------- 1. 松樹 pine（裸子植物） ---------------- */
window.ANATOMY.register({
  id: "pine",
  name: "松樹與毬果",
  latin: "Pinus",
  emoji: "🌲",
  kingdom: "plantae",
  group: "gymnosperms",
  rank: "松柏門・松科",
  summary: "松樹是常綠裸子植物，以針葉減少水分蒸散、能耐旱耐寒。它的種子不包在果實裡，而是裸露地長在毬果鱗片上，這正是「裸子植物」的關鍵特徵。",
  views: [
    {
      id: "whole",
      name: "全株與針葉",
      viewBox: "0 0 400 560",
      svg: `
<defs>
  <linearGradient id="pine-ext-sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#dcecf4"/><stop offset="55%" stop-color="#eaf4f5"/><stop offset="100%" stop-color="#f4f8ee"/>
  </linearGradient>
  <linearGradient id="pine-ext-trunk" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#5c3a20"/><stop offset="30%" stop-color="#8a5a34"/><stop offset="55%" stop-color="#b3835a"/><stop offset="100%" stop-color="#5a3a22"/>
  </linearGradient>
  <linearGradient id="pine-ext-foliage" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#5fbf72"/><stop offset="55%" stop-color="#2f8a46"/><stop offset="100%" stop-color="#175a2d"/>
  </linearGradient>
  <linearGradient id="pine-ext-foliage-dk" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#2f8a46"/><stop offset="100%" stop-color="#124d26"/>
  </linearGradient>
  <linearGradient id="pine-ext-needle" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#4fb066"/><stop offset="100%" stop-color="#1c6236"/>
  </linearGradient>
  <radialGradient id="pine-ext-cone" cx="38%" cy="30%">
    <stop offset="0%" stop-color="#b3824c"/><stop offset="100%" stop-color="#5c3a1c"/>
  </radialGradient>
  <radialGradient id="pine-ext-ground" cx="50%" cy="0%" r="90%">
    <stop offset="0%" stop-color="#c9d7ac"/><stop offset="100%" stop-color="#a7bb84"/>
  </radialGradient>
</defs>
<rect x="0" y="0" width="400" height="560" fill="url(#pine-ext-sky)"/>
<ellipse cx="200" cy="486" rx="180" ry="30" fill="url(#pine-ext-ground)" opacity="0.9"/>

<!-- 樹幹（帶樹脂樹皮質感）-->
<path data-part="樹幹" d="M190 300 Q186 392 179 482 Q188 490 200 490 Q212 490 221 482 Q214 392 210 300 Q200 296 190 300 Z" fill="url(#pine-ext-trunk)" stroke="#4a2f18" stroke-width="1.4"/>
<g stroke="#4a2f18" stroke-width="1" fill="none" opacity="0.5">
  <path d="M195 322 Q193 400 191 474 M203 322 Q205 400 206 474 M199 330 L199 470"/>
</g>
<path d="M188 340 Q184 348 190 356 M212 372 Q218 380 212 388 M187 410 Q182 418 189 424" stroke="#3a2412" stroke-width="1.2" fill="none" opacity="0.55"/>

<!-- 樹冠（圓錐多層，明暗分面）-->
<path data-part="樹冠" d="M200 36 Q182 96 150 152 Q200 138 250 152 Q218 96 200 36 Z" fill="url(#pine-ext-foliage)" stroke="#144d27" stroke-width="1.2"/>
<path d="M200 36 Q218 96 250 152 Q222 142 200 138 Z" fill="url(#pine-ext-foliage-dk)" opacity="0.6"/>
<path d="M200 108 Q176 172 128 232 Q200 214 272 232 Q224 172 200 108 Z" fill="url(#pine-ext-foliage)" stroke="#144d27" stroke-width="1.2"/>
<path d="M200 108 Q224 172 272 232 Q238 220 200 214 Z" fill="url(#pine-ext-foliage-dk)" opacity="0.6"/>
<path d="M200 188 Q170 258 108 322 Q200 300 292 322 Q230 258 200 188 Z" fill="url(#pine-ext-foliage)" stroke="#144d27" stroke-width="1.2"/>
<path d="M200 188 Q230 258 292 322 Q248 306 200 300 Z" fill="url(#pine-ext-foliage-dk)" opacity="0.6"/>
<!-- 針葉束肌理短線 -->
<g stroke="#144d27" stroke-width="0.7" opacity="0.5" fill="none">
  <path d="M186 74 L176 96 M200 68 L200 92 M214 74 L224 96 M168 150 L152 176 M200 140 L200 168 M232 150 L248 176 M150 232 L128 262 M200 218 L200 254 M250 232 L272 262"/>
</g>

<!-- 根系（漸細鬚根）-->
<g data-part="根系" fill="none" stroke-linecap="round">
  <path d="M182 484 Q150 508 116 540" stroke="#5c3a20" stroke-width="7"/>
  <path d="M195 488 Q186 516 176 548" stroke="#6e4526" stroke-width="6"/>
  <path d="M205 488 Q214 516 224 548" stroke="#6e4526" stroke-width="6"/>
  <path d="M218 484 Q252 508 286 540" stroke="#5c3a20" stroke-width="7"/>
  <path d="M170 500 Q150 522 138 548 M232 500 Q252 522 264 548" stroke="#7a5030" stroke-width="3.5"/>
</g>

<!-- 針葉束特寫（束生針葉）-->
<g transform="translate(322 250)">
  <path data-part="針葉" d="M0 4 L-18 -74 M0 4 L-8 -80 M0 4 L2 -82 M0 4 L12 -78 M0 4 L20 -70" stroke="url(#pine-ext-needle)" stroke-width="3.2" fill="none" stroke-linecap="round"/>
  <path d="M-14 2 Q0 12 14 2 Q0 20 -14 2 Z" fill="#7a4f2c" stroke="#4a2f18" stroke-width="0.8"/>
</g>

<!-- 掛在枝上的毬果（木質鱗片）-->
<g data-part="毬果" transform="translate(150 240)">
  <ellipse cx="0" cy="0" rx="13" ry="21" fill="url(#pine-ext-cone)" stroke="#4a2f18" stroke-width="1.2"/>
  <g stroke="#3a2412" stroke-width="1" fill="none" opacity="0.75">
    <path d="M-11 -14 Q0 -8 11 -14 M-13 -4 Q0 3 13 -4 M-12 6 Q0 13 12 6 M-10 15 Q0 21 10 15"/>
  </g>
  <path d="M0 -20 Q-3 -6 0 8" stroke="#2f1c0e" stroke-width="0.8" fill="none" opacity="0.5"/>
</g>

<g class="labels">
  <line x1="230" y1="90" x2="330" y2="80" stroke="#666" stroke-width="1"/>
  <text x="334" y="84" font-size="13" fill="var(--ink)">樹冠（圓錐形）</text>
  <line x1="308" y1="215" x2="352" y2="180" stroke="#666" stroke-width="1"/>
  <text x="300" y="176" font-size="13" fill="var(--ink)">針葉（束生）</text>
  <line x1="150" y1="255" x2="70" y2="290" stroke="#666" stroke-width="1"/>
  <text x="16" y="294" font-size="13" fill="var(--ink)">毬果</text>
  <line x1="212" y1="400" x2="300" y2="410" stroke="#666" stroke-width="1"/>
  <text x="304" y="414" font-size="13" fill="var(--ink)">樹幹</text>
  <line x1="160" y1="520" x2="80" y2="520" stroke="#666" stroke-width="1"/>
  <text x="20" y="524" font-size="13" fill="var(--ink)">根系</text>
</g>`,
      parts: [
        { name: "樹冠", desc: "圓錐形樹形，層層向下展開，利於積雪滑落與採光。" },
        { name: "針葉", desc: "葉退化成針狀，表面積小、蠟質厚，減少水分散失，耐旱耐寒。" },
        { name: "樹幹", desc: "木質莖具年輪，樹皮富含樹脂可防蟲害與病菌。" },
        { name: "毬果", desc: "由木質鱗片組成的生殖構造，種子裸露長在鱗片上。" },
        { name: "根系", desc: "深廣的根系固定植株並吸收水分，常與真菌共生（菌根）。" }
      ]
    },
    {
      id: "cones",
      name: "毬果與胚珠",
      viewBox: "0 0 440 520",
      svg: `
<defs>
  <linearGradient id="pine-mcone" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e8c35a"/><stop offset="100%" stop-color="#b98a2c"/>
  </linearGradient>
  <linearGradient id="pine-fcone" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#9a6b3c"/><stop offset="100%" stop-color="#5f3c1e"/>
  </linearGradient>
  <linearGradient id="pine-scale" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#b98150"/><stop offset="100%" stop-color="#7a4f2c"/>
  </linearGradient>
  <radialGradient id="pine-ovule" cx="40%" cy="35%">
    <stop offset="0%" stop-color="#f2e6c2"/><stop offset="100%" stop-color="#c9a86a"/>
  </radialGradient>
  <linearGradient id="pine-wing" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#e9dcc0"/><stop offset="100%" stop-color="#cbb98f"/>
  </linearGradient>
  <linearGradient id="pine-branch" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#8a5a34"/><stop offset="100%" stop-color="#5c3a20"/>
  </linearGradient>
</defs>
<rect x="0" y="0" width="440" height="520" fill="#f6fbf7"/>

<!-- 雄毬果（左，小、成簇、產花粉）-->
<line x1="90" y1="40" x2="90" y2="150" stroke="url(#pine-branch)" stroke-width="7" stroke-linecap="round"/>
<g data-part="雄毬果">
  <ellipse cx="70" cy="70" rx="12" ry="26" fill="url(#pine-mcone)" stroke="#8a6620"/>
  <ellipse cx="92" cy="60" rx="12" ry="28" fill="url(#pine-mcone)" stroke="#8a6620"/>
  <ellipse cx="112" cy="76" rx="11" ry="24" fill="url(#pine-mcone)" stroke="#8a6620"/>
</g>
<!-- 飄散的花粉 -->
<g data-part="花粉" fill="#e8c35a" opacity="0.85">
  <circle cx="130" cy="55" r="2.5"/><circle cx="142" cy="70" r="2"/><circle cx="150" cy="45" r="2.2"/>
  <circle cx="160" cy="62" r="1.8"/><circle cx="136" cy="88" r="2"/>
</g>

<!-- 雌毬果（右，大、木質、含胚珠）-->
<line x1="300" y1="40" x2="300" y2="120" stroke="url(#pine-branch)" stroke-width="8" stroke-linecap="round"/>
<g data-part="雌毬果" transform="translate(300 200)">
  <ellipse cx="0" cy="0" rx="46" ry="78" fill="url(#pine-fcone)" stroke="#4a2f18"/>
  <!-- 木質鱗片層 -->
  <g stroke="#3d2712" stroke-width="1.2" fill="none" opacity="0.75">
    <path d="M-40 -55 Q0 -48 40 -55 M-44 -30 Q0 -22 44 -30 M-46 -3 Q0 6 46 -3 M-44 25 Q0 34 44 25 M-40 50 Q0 60 40 50"/>
  </g>
</g>

<!-- 單片鱗片放大（含裸露胚珠）-->
<g data-part="鱗片" transform="translate(210 400)">
  <path d="M-70 0 Q0 -34 90 -6 Q80 26 0 30 Q-60 26 -70 0 Z" fill="url(#pine-scale)" stroke="#5c3a20"/>
  <!-- 兩枚裸露胚珠坐落在鱗片上表面 -->
  <ellipse data-part="裸露胚珠" cx="-18" cy="-2" rx="15" ry="11" fill="url(#pine-ovule)" stroke="#9a7a3c"/>
  <ellipse data-part="裸露胚珠" cx="18" cy="-2" rx="15" ry="11" fill="url(#pine-ovule)" stroke="#9a7a3c"/>
</g>

<!-- 帶翅種子 -->
<g data-part="帶翅種子" transform="translate(360 420)">
  <path d="M0 0 Q40 -18 78 -4 Q44 12 0 8 Z" fill="url(#pine-wing)" stroke="#b0995f"/>
  <ellipse cx="-4" cy="4" rx="10" ry="8" fill="#6e4526" stroke="#4a2f18"/>
</g>

<g class="labels">
  <line x1="70" y1="96" x2="40" y2="150" stroke="#666" stroke-width="1"/>
  <text x="8" y="164" font-size="13" fill="var(--ink)">雄毬果（成簇）</text>
  <line x1="150" y1="52" x2="185" y2="40" stroke="#666" stroke-width="1"/>
  <text x="150" y="34" font-size="12" fill="var(--ink)">花粉隨風傳播</text>
  <line x1="340" y1="170" x2="400" y2="140" stroke="#666" stroke-width="1"/>
  <text x="352" y="130" font-size="13" fill="var(--ink)">雌毬果（木質）</text>
  <line x1="210" y1="374" x2="150" y2="330" stroke="#666" stroke-width="1"/>
  <text x="70" y="326" font-size="13" fill="var(--ink)">毬果鱗片</text>
  <line x1="192" y1="398" x2="120" y2="440" stroke="#666" stroke-width="1"/>
  <text x="14" y="444" font-size="13" fill="var(--ink)">裸露胚珠</text>
  <line x1="400" y1="424" x2="418" y2="470" stroke="#666" stroke-width="1"/>
  <text x="300" y="490" font-size="13" fill="var(--ink)">帶翅種子（隨風飛散）</text>
</g>`,
      parts: [
        { name: "雄毬果", desc: "體型小、常成簇，內含花粉囊，成熟時釋放大量花粉。" },
        { name: "花粉", desc: "松的花粉具氣囊，可隨風飄送到雌毬果完成授粉。" },
        { name: "雌毬果", desc: "大而木質，由多枚鱗片螺旋排列，是承載胚珠與種子的構造。" },
        { name: "鱗片", desc: "毬果的木質鱗片，胚珠與後來的種子就裸露地坐落在其上表面。" },
        { name: "裸露胚珠", desc: "胚珠不被子房包覆而裸露，授粉受精後直接發育成種子——裸子植物的核心特徵。" },
        { name: "帶翅種子", desc: "成熟種子具膜質翅，鱗片張開後隨風旋轉飄散，擴大分布範圍。" }
      ]
    }
  ]
});

/* ---------------- 2. 蕨類 fern ---------------- */
window.ANATOMY.register({
  id: "fern",
  name: "蕨類構造",
  latin: "Pteridophyta",
  emoji: "🌿",
  kingdom: "plantae",
  group: "ferns",
  rank: "蕨類植物門",
  summary: "蕨類有真正的根、莖、葉與維管束，卻不開花、不結種子，而靠孢子繁殖。它的孢子囊群常長在葉背，並具有明顯的孢子體與配子體世代交替。",
  views: [
    {
      id: "plant",
      name: "植株與葉",
      viewBox: "0 0 440 560",
      svg: `
<defs>
  <linearGradient id="fern-ext-frond" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#74cd82"/><stop offset="55%" stop-color="#3f9d54"/><stop offset="100%" stop-color="#22753b"/>
  </linearGradient>
  <linearGradient id="fern-ext-frond-dk" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#3f9d54"/><stop offset="100%" stop-color="#1c6231"/>
  </linearGradient>
  <linearGradient id="fern-ext-rachis" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#8fca62"/><stop offset="55%" stop-color="#5aa338"/><stop offset="100%" stop-color="#357224"/>
  </linearGradient>
  <linearGradient id="fern-ext-rhizome" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#9a7844"/><stop offset="50%" stop-color="#7a5c30"/><stop offset="100%" stop-color="#4f3a1c"/>
  </linearGradient>
  <radialGradient id="fern-ext-croz" cx="45%" cy="40%">
    <stop offset="0%" stop-color="#9dd97e"/><stop offset="100%" stop-color="#3f8a2f"/>
  </radialGradient>
  <linearGradient id="fern-ext-ground" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e5dcc0"/><stop offset="100%" stop-color="#cabf98"/>
  </linearGradient>
</defs>
<rect x="0" y="0" width="440" height="560" fill="#f2f9ee"/>
<!-- 土壤帶 -->
<rect x="0" y="404" width="440" height="156" fill="url(#fern-ext-ground)"/>
<path d="M0 404 Q220 396 440 404" stroke="#b8a878" stroke-width="1.6" fill="none" opacity="0.6"/>

<!-- 羽狀複葉（葉柄 + 葉軸 + 羽片）-->
<g transform="translate(220 400)">
  <!-- 葉柄 -->
  <path data-part="葉柄" d="M0 2 Q-4 -38 -6 -80" stroke="url(#fern-ext-rachis)" stroke-width="10" fill="none" stroke-linecap="round"/>
  <!-- 葉軸（主軸，向頂端漸細）-->
  <path data-part="葉軸" d="M-6 -80 Q-10 -200 -18 -330" stroke="url(#fern-ext-rachis)" stroke-width="6.5" fill="none" stroke-linecap="round"/>
  <!-- 左右羽片：填色片＋深色背面＋中肋 -->
  <g data-part="羽片">
    <g fill="url(#fern-ext-frond)" stroke="#1c6231" stroke-width="0.8">
      <path d="M-8 -100 Q-84 -116 -140 -84 Q-118 -100 -60 -100 Q-90 -92 -8 -108 Z"/>
      <path d="M-4 -100 Q72 -116 128 -84 Q106 -100 48 -100 Q78 -92 -4 -108 Z"/>
      <path d="M-10 -150 Q-80 -166 -128 -136 Q-108 -150 -54 -150 Q-84 -142 -10 -158 Z"/>
      <path d="M-6 -150 Q64 -166 112 -136 Q92 -150 42 -150 Q68 -142 -6 -158 Z"/>
      <path d="M-12 -200 Q-70 -214 -110 -188 Q-92 -200 -46 -200 Q-74 -192 -12 -208 Z"/>
      <path d="M-8 -200 Q54 -214 94 -188 Q76 -200 34 -200 Q58 -192 -8 -208 Z"/>
      <path d="M-14 -250 Q-56 -262 -86 -240 Q-70 -250 -34 -250 Q-58 -244 -14 -258 Z"/>
      <path d="M-10 -250 Q42 -262 72 -240 Q56 -250 24 -250 Q44 -244 -10 -258 Z"/>
      <path d="M-16 -298 Q-40 -306 -60 -290 Q-48 -298 -24 -298 Q-40 -294 -16 -304 Z"/>
      <path d="M-13 -298 Q28 -306 48 -290 Q36 -298 14 -298 Q28 -294 -13 -304 Z"/>
    </g>
    <!-- 羽片深色下緣層次 -->
    <g fill="url(#fern-ext-frond-dk)" opacity="0.5" stroke="none">
      <path d="M-8 -100 Q-84 -116 -140 -84 Q-96 -100 -8 -104 Z"/>
      <path d="M-4 -100 Q72 -116 128 -84 Q84 -100 -4 -104 Z"/>
      <path d="M-12 -200 Q-70 -214 -110 -188 Q-78 -200 -12 -204 Z"/>
      <path d="M-8 -200 Q54 -214 94 -188 Q62 -200 -8 -204 Z"/>
    </g>
    <!-- 羽片中肋細脈 -->
    <g stroke="#1c6231" stroke-width="0.6" opacity="0.55" fill="none">
      <path d="M-8 -104 Q-70 -104 -132 -86 M-4 -104 Q64 -104 120 -86 M-14 -254 Q-52 -252 -82 -242 M-10 -254 Q40 -252 68 -242"/>
    </g>
  </g>
  <!-- 頂端幼葉（拳卷 crozier）-->
  <path data-part="幼葉（拳卷）" d="M-18 -330 q-18 -8 -14 -26 q3 -16 18 -10 q11 4 6 15 q-4 9 -12 5" fill="none" stroke="url(#fern-ext-croz)" stroke-width="6.5" stroke-linecap="round"/>
</g>

<!-- 地下莖（根莖，帶明暗與鱗片）-->
<path data-part="地下莖（根莖）" d="M116 430 Q220 412 332 432" stroke="url(#fern-ext-rhizome)" stroke-width="17" fill="none" stroke-linecap="round"/>
<g stroke="#4f3a1c" stroke-width="0.8" fill="none" opacity="0.5">
  <path d="M150 424 Q152 432 150 440 M200 421 Q202 430 200 438 M258 423 Q260 432 258 440 M300 426 Q302 434 300 442"/>
</g>
<!-- 不定根（鬚狀漸細）-->
<g data-part="不定根" stroke="#6b5230" fill="none" stroke-linecap="round">
  <path d="M150 442 Q140 482 128 522" stroke-width="3"/>
  <path d="M200 446 Q198 488 196 526" stroke-width="3"/>
  <path d="M260 446 Q268 488 278 526" stroke-width="3"/>
  <path d="M310 440 Q324 480 338 518" stroke-width="3"/>
  <path d="M176 444 Q168 480 162 516 M230 446 Q234 482 240 518" stroke-width="1.8" opacity="0.8"/>
</g>
<!-- 另一片幼葉自根莖冒出 -->
<path d="M300 430 q11 -32 -4 -48 q-15 -15 -25 0 q-9 11 4 19" fill="none" stroke="url(#fern-ext-croz)" stroke-width="6" stroke-linecap="round"/>

<g class="labels">
  <line x1="120" y1="250" x2="40" y2="230" stroke="#666" stroke-width="1"/>
  <text x="10" y="234" font-size="13" fill="var(--ink)">羽片（小葉）</text>
  <line x1="200" y1="80" x2="290" y2="70" stroke="#666" stroke-width="1"/>
  <text x="296" y="74" font-size="13" fill="var(--ink)">幼葉（拳卷）</text>
  <line x1="206" y1="200" x2="330" y2="200" stroke="#666" stroke-width="1"/>
  <text x="336" y="204" font-size="13" fill="var(--ink)">葉軸</text>
  <line x1="216" y1="360" x2="330" y2="350" stroke="#666" stroke-width="1"/>
  <text x="336" y="354" font-size="13" fill="var(--ink)">葉柄</text>
  <line x1="240" y1="424" x2="360" y2="430" stroke="#666" stroke-width="1"/>
  <text x="366" y="434" font-size="13" fill="var(--ink)">地下莖（根莖）</text>
  <line x1="196" y1="500" x2="80" y2="510" stroke="#666" stroke-width="1"/>
  <text x="10" y="514" font-size="13" fill="var(--ink)">不定根</text>
</g>`,
      parts: [
        { name: "羽片", desc: "羽狀複葉上的小葉，可行光合作用，是蕨類典型的葉形。" },
        { name: "幼葉（拳卷）", desc: "新葉初生時捲曲成拳狀（fiddlehead），展開後成為完整葉片。" },
        { name: "葉軸", desc: "葉片的中央主軸，兩側對稱長出羽片，內有維管束輸送水分養分。" },
        { name: "葉柄", desc: "連接葉片與地下莖的支撐柄，含維管束。" },
        { name: "地下莖（根莖）", desc: "橫走地下的莖，儲藏養分並長出葉與根，是蕨類主要的營養繁殖器官。" },
        { name: "不定根", desc: "自根莖長出的鬚狀根，吸收水分與礦物質並固著植株。" }
      ]
    },
    {
      id: "sori",
      name: "孢子囊群（葉背）",
      viewBox: "0 0 420 460",
      svg: `
<defs>
  <linearGradient id="fern-leafback" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8bc47a"/><stop offset="100%" stop-color="#4f9e54"/>
  </linearGradient>
  <radialGradient id="fern-sorus" cx="45%" cy="40%">
    <stop offset="0%" stop-color="#a9702e"/><stop offset="100%" stop-color="#6e3f15"/>
  </radialGradient>
  <radialGradient id="fern-sporangium" cx="40%" cy="35%">
    <stop offset="0%" stop-color="#c98a3e"/><stop offset="100%" stop-color="#7a4a1c"/>
  </radialGradient>
  <radialGradient id="fern-spore" cx="45%" cy="40%">
    <stop offset="0%" stop-color="#f0d488"/><stop offset="100%" stop-color="#c19a44"/>
  </radialGradient>
</defs>
<rect x="0" y="0" width="420" height="460" fill="#f4faf2"/>

<!-- 一片羽片（葉背朝上）-->
<g data-part="羽片" transform="translate(120 60)">
  <path d="M0 0 Q10 130 4 300" stroke="#3f8a2f" stroke-width="4" fill="none"/>
  <g fill="url(#fern-leafback)" stroke="#3f8a2f" stroke-width="0.8">
    <path d="M2 20 Q-60 30 -96 60 Q-56 46 2 44 Z"/>
    <path d="M4 90 Q-54 100 -86 128 Q-50 116 4 114 Z"/>
    <path d="M6 160 Q-46 170 -74 196 Q-44 186 6 184 Z"/>
    <path d="M8 230 Q-38 240 -60 264 Q-36 254 8 252 Z"/>
  </g>
  <!-- 每枚小葉下方成排的孢子囊群 -->
  <g data-part="孢子囊群（sori）" fill="url(#fern-sorus)">
    <circle cx="-40" cy="42" r="5"/><circle cx="-58" cy="46" r="5"/><circle cx="-76" cy="52" r="5"/>
    <circle cx="-34" cy="112" r="5"/><circle cx="-50" cy="116" r="5"/><circle cx="-66" cy="122" r="5"/>
    <circle cx="-28" cy="182" r="5"/><circle cx="-42" cy="186" r="5"/><circle cx="-56" cy="192" r="5"/>
    <circle cx="-22" cy="250" r="4.5"/><circle cx="-34" cy="254" r="4.5"/>
  </g>
</g>

<!-- 放大：單一孢子囊群剖面 -->
<g transform="translate(300 230)">
  <path d="M-70 60 Q0 40 70 60" stroke="#4f9e54" stroke-width="6" fill="none"/>
  <text x="-64" y="86" font-size="11" fill="var(--ink)">葉背表皮</text>
  <!-- 孢膜覆蓋 -->
  <path data-part="孢膜" d="M-60 60 Q0 -6 60 60" fill="#bfe0a4" opacity="0.55" stroke="#4f9e54"/>
  <!-- 一群孢子囊 -->
  <g data-part="孢子囊" fill="url(#fern-sporangium)" stroke="#5c3a18">
    <ellipse cx="-34" cy="42" rx="12" ry="16"/>
    <ellipse cx="-8" cy="36" rx="12" ry="16"/>
    <ellipse cx="18" cy="38" rx="12" ry="16"/>
    <ellipse cx="42" cy="46" rx="11" ry="15"/>
  </g>
  <!-- 釋放的孢子 -->
  <g data-part="孢子" fill="url(#fern-spore)" stroke="#a9803a" stroke-width="0.6">
    <circle cx="0" cy="-10" r="4"/><circle cx="20" cy="-18" r="3.4"/><circle cx="-18" cy="-16" r="3.6"/>
    <circle cx="8" cy="-30" r="3"/><circle cx="-6" cy="-40" r="2.8"/>
  </g>
</g>

<g class="labels">
  <line x1="44" y1="102" x2="20" y2="150" stroke="#666" stroke-width="1"/>
  <text x="6" y="166" font-size="13" fill="var(--ink)">孢子囊群（sori）</text>
  <line x1="292" y1="240" x2="230" y2="300" stroke="#666" stroke-width="1"/>
  <text x="150" y="318" font-size="13" fill="var(--ink)">孢子囊</text>
  <line x1="330" y1="200" x2="370" y2="160" stroke="#666" stroke-width="1"/>
  <text x="300" y="150" font-size="13" fill="var(--ink)">孢膜（保護）</text>
  <line x1="304" y1="192" x2="370" y2="120" stroke="#666" stroke-width="1"/>
  <text x="300" y="112" font-size="13" fill="var(--ink)">孢子（隨風散播）</text>
</g>`,
      parts: [
        { name: "孢子囊群（sori）", desc: "葉背上成群排列的褐色小點，每點是一叢孢子囊，是蕨類辨識的重要特徵。" },
        { name: "孢膜", desc: "覆蓋孢子囊群的薄膜狀構造，保護未成熟的孢子囊。" },
        { name: "孢子囊", desc: "產生並儲存孢子的囊狀構造，成熟乾燥時會彈裂把孢子彈出。" },
        { name: "孢子", desc: "單細胞的生殖體，隨風散播、落地萌發成配子體，不需受精即可萌發。" },
        { name: "羽片", desc: "羽狀複葉上的小葉，葉背著生孢子囊群，兼具光合與繁殖功能。" }
      ]
    },
    {
      id: "lifecycle",
      name: "世代交替",
      viewBox: "0 0 440 440",
      svg: `
<defs>
  <radialGradient id="fern-cyc-spore" cx="45%" cy="40%">
    <stop offset="0%" stop-color="#f0d488"/><stop offset="100%" stop-color="#c19a44"/>
  </radialGradient>
  <linearGradient id="fern-cyc-gameto" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8ccf72"/><stop offset="100%" stop-color="#4f9e54"/>
  </linearGradient>
  <linearGradient id="fern-cyc-sporo" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5cb86e"/><stop offset="100%" stop-color="#2b8145"/>
  </linearGradient>
  <marker id="fern-arrow" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
    <path d="M0 0 L7 3 L0 6 Z" fill="#557"/>
  </marker>
</defs>
<rect x="0" y="0" width="440" height="440" fill="#f4faf2"/>
<circle cx="220" cy="220" r="150" fill="none" stroke="#cdd8cd" stroke-width="1" stroke-dasharray="4 4"/>
<text x="220" y="30" font-size="13" fill="var(--ink)" text-anchor="middle">世代交替（孢子體 ⇄ 配子體）</text>

<!-- 循環箭頭 -->
<g fill="none" stroke="#557" stroke-width="2" marker-end="url(#fern-arrow)">
  <path d="M300 110 A150 150 0 0 1 360 250"/>
  <path d="M330 320 A150 150 0 0 1 190 368"/>
  <path d="M110 330 A150 150 0 0 1 84 190"/>
  <path d="M118 108 A150 150 0 0 1 250 74"/>
</g>

<!-- 孢子體（成熟蕨，2n）-->
<g data-part="孢子體世代（2n）" transform="translate(220 96)">
  <path d="M0 22 L0 -26" stroke="#2b8145" stroke-width="4"/>
  <g fill="url(#fern-cyc-sporo)" stroke="#256f39" stroke-width="0.6">
    <path d="M0 -6 Q-30 -12 -46 0 Q-28 -4 0 -12 Z"/><path d="M0 -6 Q30 -12 46 0 Q28 -4 0 -12 Z"/>
    <path d="M0 -20 Q-22 -26 -34 -14 Q-20 -20 0 -26 Z"/><path d="M0 -20 Q22 -26 34 -14 Q20 -20 0 -26 Z"/>
  </g>
</g>

<!-- 孢子（減數分裂，n）-->
<g data-part="孢子（n）" transform="translate(356 220)">
  <circle cx="0" cy="-8" r="7" fill="url(#fern-cyc-spore)" stroke="#a9803a"/>
  <circle cx="10" cy="6" r="5" fill="url(#fern-cyc-spore)" stroke="#a9803a"/>
  <circle cx="-8" cy="6" r="5" fill="url(#fern-cyc-spore)" stroke="#a9803a"/>
</g>

<!-- 配子體（原葉體，心形，n）-->
<g data-part="配子體世代（n）" transform="translate(220 348)">
  <path d="M0 6 Q-34 -22 -22 -30 Q-6 -34 0 -18 Q6 -34 22 -30 Q34 -22 0 6 Z" fill="url(#fern-cyc-gameto)" stroke="#3f8a2f"/>
  <g stroke="#6b5230" stroke-width="1.4"><path d="M-6 4 L-8 20 M2 6 L4 22 M-14 2 L-18 16"/></g>
</g>

<!-- 受精卵 / 幼孢子體（2n）-->
<g data-part="受精卵（2n）" transform="translate(80 220)">
  <circle cx="0" cy="0" r="10" fill="#3f8a2f" stroke="#256f39"/>
  <path d="M0 -10 Q-6 -22 0 -30" stroke="#2b8145" stroke-width="3" fill="none"/>
</g>

<g class="labels">
  <line x1="220" y1="70" x2="220" y2="46" stroke="#666" stroke-width="1"/>
  <text x="220" y="42" font-size="13" fill="var(--ink)" text-anchor="middle">孢子體（成熟蕨，2n）</text>
  <line x1="372" y1="200" x2="400" y2="180" stroke="#666" stroke-width="1"/>
  <text x="380" y="172" font-size="12" fill="var(--ink)" text-anchor="end">孢子（n，減數分裂產生）</text>
  <line x1="220" y1="372" x2="220" y2="400" stroke="#666" stroke-width="1"/>
  <text x="220" y="416" font-size="13" fill="var(--ink)" text-anchor="middle">配子體（原葉體，n）</text>
  <line x1="66" y1="220" x2="30" y2="240" stroke="#666" stroke-width="1"/>
  <text x="24" y="256" font-size="12" fill="var(--ink)">受精卵→幼孢子體（2n）</text>
</g>`,
      parts: [
        { name: "孢子體世代（2n）", desc: "我們平常看到的蕨就是孢子體，為雙套（2n），在葉背產生孢子囊。" },
        { name: "孢子（n）", desc: "孢子體經減數分裂產生的單套（n）孢子，落地萌發進入配子體世代。" },
        { name: "配子體世代（n）", desc: "孢子萌發成心形的原葉體，為單套（n），上面產生精子與卵。" },
        { name: "受精卵（2n）", desc: "精卵結合成受精卵（2n），發育成新的孢子體，完成世代交替。" }
      ]
    }
  ]
});

/* ---------------- 3. 苔蘚 moss ---------------- */
window.ANATOMY.register({
  id: "moss",
  name: "苔蘚構造",
  latin: "Bryophyta",
  emoji: "🍃",
  kingdom: "plantae",
  group: "bryophytes",
  rank: "苔蘚植物門",
  summary: "苔蘚是最原始的陸生植物，沒有真正的根與維管束，靠假根附著、全身直接吸水。它以配子體為主要世代，孢子體則寄生在配子體上，是觀察世代交替的最佳範例。",
  views: [
    {
      id: "structure",
      name: "配子體與孢子體",
      viewBox: "0 0 420 520",
      svg: `
<defs>
  <linearGradient id="moss-ext-leaf" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#7ec877"/><stop offset="55%" stop-color="#409a4a"/><stop offset="100%" stop-color="#256f30"/>
  </linearGradient>
  <linearGradient id="moss-ext-stem" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#63b562"/><stop offset="50%" stop-color="#3f8a45"/><stop offset="100%" stop-color="#256f30"/>
  </linearGradient>
  <linearGradient id="moss-ext-seta" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#e0c46e"/><stop offset="50%" stop-color="#c09a44"/><stop offset="100%" stop-color="#8a6a2a"/>
  </linearGradient>
  <radialGradient id="moss-ext-capsule" cx="38%" cy="30%">
    <stop offset="0%" stop-color="#d69a4c"/><stop offset="100%" stop-color="#6e4018"/>
  </radialGradient>
  <linearGradient id="moss-ext-calyptra" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#d0a866"/><stop offset="100%" stop-color="#8a6028"/>
  </linearGradient>
  <linearGradient id="moss-ext-ground" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e2d6b6"/><stop offset="100%" stop-color="#b8a67c"/>
  </linearGradient>
</defs>
<rect x="0" y="0" width="420" height="520" fill="#f2f9ee"/>
<!-- 土壤 -->
<rect x="0" y="440" width="420" height="80" fill="url(#moss-ext-ground)"/>
<path d="M0 440 Q210 432 420 440" stroke="#a8966c" stroke-width="1.4" fill="none" opacity="0.6"/>

<!-- 一叢配子體植株 -->
<g transform="translate(150 440)">
  <!-- 莖狀體 -->
  <path data-part="莖狀體" d="M0 2 Q-4 -100 -6 -190" stroke="url(#moss-ext-stem)" stroke-width="6.5" fill="none" stroke-linecap="round"/>
  <!-- 葉狀體（細密小葉螺旋排列，帶中肋）-->
  <g data-part="葉狀體" fill="url(#moss-ext-leaf)" stroke="#1c5c28" stroke-width="0.6">
    <path d="M-4 -28 Q-30 -40 -42 -22 Q-26 -30 -4 -34 Z"/><path d="M-4 -28 Q22 -40 34 -22 Q18 -30 -4 -34 Z"/>
    <path d="M-4 -50 Q-32 -60 -44 -42 Q-26 -50 -4 -56 Z"/><path d="M-4 -50 Q24 -60 36 -42 Q18 -50 -4 -56 Z"/>
    <path d="M-4 -72 Q-32 -82 -44 -64 Q-26 -72 -4 -78 Z"/><path d="M-4 -72 Q24 -82 36 -64 Q18 -72 -4 -78 Z"/>
    <path d="M-5 -96 Q-30 -106 -42 -88 Q-24 -96 -5 -102 Z"/><path d="M-5 -96 Q22 -106 34 -88 Q16 -96 -5 -102 Z"/>
    <path d="M-5 -120 Q-28 -130 -40 -112 Q-22 -120 -5 -126 Z"/><path d="M-5 -120 Q20 -130 32 -112 Q14 -120 -5 -126 Z"/>
    <path d="M-6 -146 Q-24 -156 -34 -138 Q-18 -146 -6 -152 Z"/><path d="M-6 -146 Q16 -156 26 -138 Q10 -146 -6 -152 Z"/>
    <path d="M-6 -170 Q-18 -180 -26 -164 Q-12 -170 -6 -176 Z"/><path d="M-6 -170 Q10 -180 18 -164 Q4 -170 -6 -176 Z"/>
    <path d="M-6 -190 Q-12 -198 -18 -186 M-6 -190 Q6 -198 12 -186" fill="none" stroke="#2f8a3f"/>
  </g>
  <!-- 假根（絲狀） -->
  <g data-part="假根" stroke="#8a6a3a" stroke-width="1.8" fill="none" stroke-linecap="round">
    <path d="M0 2 Q-6 28 -16 54 M-2 4 Q0 30 4 58 M2 4 Q14 28 26 52 M0 6 Q-18 26 -30 48 M-1 4 Q-2 30 -6 58"/>
  </g>
</g>

<!-- 孢子體（生長在配子體頂端）-->
<g transform="translate(270 440)">
  <!-- 配子體莖（承載孢子體）-->
  <path d="M0 2 Q-4 -60 -6 -120" stroke="url(#moss-ext-stem)" stroke-width="6.5" fill="none" stroke-linecap="round"/>
  <g fill="url(#moss-ext-leaf)" stroke="#1c5c28" stroke-width="0.6">
    <path d="M-4 -38 Q-26 -48 -36 -32 Q-20 -40 -4 -44 Z"/><path d="M-4 -38 Q18 -48 28 -32 Q12 -40 -4 -44 Z"/>
    <path d="M-5 -66 Q-26 -76 -36 -60 Q-20 -68 -5 -72 Z"/><path d="M-5 -66 Q16 -76 26 -60 Q10 -68 -5 -72 Z"/>
    <path d="M-5 -94 Q-24 -104 -32 -88 Q-18 -96 -5 -100 Z"/><path d="M-5 -94 Q14 -104 22 -88 Q8 -96 -5 -100 Z"/>
  </g>
  <!-- 蒴柄 -->
  <path data-part="蒴柄" d="M-6 -120 Q-8 -190 -6 -260" stroke="url(#moss-ext-seta)" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <!-- 孢蒴 -->
  <g transform="translate(-6 -278)">
    <path data-part="蒴帽" d="M0 -18 Q-9 -36 -1 -50 Q9 -36 0 -18 Z" fill="url(#moss-ext-calyptra)" stroke="#6e4018" stroke-width="0.8"/>
    <ellipse data-part="孢蒴" cx="0" cy="0" rx="13" ry="21" fill="url(#moss-ext-capsule)" stroke="#5c3a18" stroke-width="1"/>
    <path d="M-13 -1 Q0 4 13 -1" stroke="#4a2f14" stroke-width="0.8" fill="none" opacity="0.6"/>
    <ellipse cx="0" cy="-21" rx="4" ry="2.5" fill="#8a6028" stroke="#5c3a18" stroke-width="0.6"/>
  </g>
</g>

<g class="labels">
  <line x1="182" y1="300" x2="60" y2="290" stroke="#666" stroke-width="1"/>
  <text x="10" y="294" font-size="13" fill="var(--ink)">葉狀體</text>
  <line x1="144" y1="360" x2="40" y2="360" stroke="#666" stroke-width="1"/>
  <text x="10" y="364" font-size="13" fill="var(--ink)">莖狀體</text>
  <line x1="136" y1="470" x2="40" y2="470" stroke="#666" stroke-width="1"/>
  <text x="10" y="474" font-size="13" fill="var(--ink)">假根</text>
  <line x1="264" y1="240" x2="352" y2="240" stroke="#666" stroke-width="1"/>
  <text x="300" y="244" font-size="13" fill="var(--ink)">蒴柄</text>
  <line x1="264" y1="164" x2="356" y2="150" stroke="#666" stroke-width="1"/>
  <text x="300" y="150" font-size="13" fill="var(--ink)">孢蒴（產孢子）</text>
  <line x1="266" y1="128" x2="356" y2="100" stroke="#666" stroke-width="1"/>
  <text x="300" y="96" font-size="12" fill="var(--ink)">蒴帽</text>
</g>`,
      parts: [
        { name: "葉狀體", desc: "螺旋排列的單層小葉，直接吸收水分與行光合作用，無真正葉的維管束。" },
        { name: "莖狀體", desc: "直立的莖狀構造，支撐葉狀體，但缺乏真正的維管束組織。" },
        { name: "假根", desc: "由單列細胞構成的絲狀構造，只負責固著、不像真正的根能大量吸水。" },
        { name: "蒴柄", desc: "孢子體的柄，把孢蒴撐高於配子體之上，利於孢子散播。" },
        { name: "孢蒴", desc: "孢子體頂端的囊，內部經減數分裂產生孢子，成熟後開口釋放。" },
        { name: "蒴帽", desc: "覆蓋在孢蒴頂端的帽狀構造，保護發育中的孢子，成熟後脫落。" }
      ]
    },
    {
      id: "lifecycle",
      name: "世代交替",
      viewBox: "0 0 440 440",
      svg: `
<defs>
  <linearGradient id="moss-cyc-gameto" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6fc06a"/><stop offset="100%" stop-color="#2f8a3f"/>
  </linearGradient>
  <radialGradient id="moss-cyc-capsule" cx="42%" cy="35%">
    <stop offset="0%" stop-color="#c98a3e"/><stop offset="100%" stop-color="#7a4a1c"/>
  </radialGradient>
  <radialGradient id="moss-cyc-spore" cx="45%" cy="40%">
    <stop offset="0%" stop-color="#f0d488"/><stop offset="100%" stop-color="#c19a44"/>
  </radialGradient>
  <marker id="moss-arrow" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
    <path d="M0 0 L7 3 L0 6 Z" fill="#557"/>
  </marker>
</defs>
<rect x="0" y="0" width="440" height="440" fill="#f3faf1"/>
<circle cx="220" cy="220" r="150" fill="none" stroke="#cdd8cd" stroke-width="1" stroke-dasharray="4 4"/>
<text x="220" y="28" font-size="13" fill="var(--ink)" text-anchor="middle">苔蘚世代交替（配子體為主）</text>

<g fill="none" stroke="#557" stroke-width="2" marker-end="url(#moss-arrow)">
  <path d="M300 110 A150 150 0 0 1 360 250"/>
  <path d="M330 320 A150 150 0 0 1 190 368"/>
  <path d="M110 330 A150 150 0 0 1 84 190"/>
  <path d="M118 108 A150 150 0 0 1 250 74"/>
</g>

<!-- 孢子（n）-->
<g data-part="孢子（n）" transform="translate(220 92)">
  <circle cx="0" cy="0" r="8" fill="url(#moss-cyc-spore)" stroke="#a9803a"/>
  <circle cx="14" cy="8" r="5" fill="url(#moss-cyc-spore)" stroke="#a9803a"/>
  <circle cx="-14" cy="8" r="5" fill="url(#moss-cyc-spore)" stroke="#a9803a"/>
</g>

<!-- 配子體（n，主要世代）-->
<g data-part="配子體（n）" transform="translate(356 220)">
  <path d="M0 20 L0 -22" stroke="#2f7a38" stroke-width="4"/>
  <g fill="url(#moss-cyc-gameto)" stroke="#256f30" stroke-width="0.6">
    <path d="M0 -4 Q-18 -8 -26 2 Q-14 -4 0 -8 Z"/><path d="M0 -4 Q18 -8 26 2 Q14 -4 0 -8 Z"/>
    <path d="M0 -16 Q-14 -20 -20 -12 Q-10 -16 0 -20 Z"/><path d="M0 -16 Q14 -20 20 -12 Q10 -16 0 -20 Z"/>
  </g>
</g>

<!-- 受精卵（2n）-->
<g data-part="受精卵（2n）" transform="translate(220 348)">
  <circle cx="0" cy="0" r="11" fill="#2f8a3f" stroke="#256f30"/>
  <circle cx="0" cy="0" r="4" fill="#f0d488"/>
</g>

<!-- 孢子體（2n，寄生於配子體上）-->
<g data-part="孢子體（2n）" transform="translate(80 220)">
  <path d="M0 30 Q-2 0 -2 -26" stroke="#c9a24a" stroke-width="4" fill="none"/>
  <ellipse cx="-2" cy="-34" rx="9" ry="14" fill="url(#moss-cyc-capsule)" stroke="#5c3a18"/>
</g>

<g class="labels">
  <line x1="220" y1="72" x2="220" y2="46" stroke="#666" stroke-width="1"/>
  <text x="220" y="42" font-size="13" fill="var(--ink)" text-anchor="middle">孢子（n）萌發</text>
  <line x1="374" y1="210" x2="404" y2="188" stroke="#666" stroke-width="1"/>
  <text x="380" y="180" font-size="12" fill="var(--ink)" text-anchor="end">配子體（n，主要世代）</text>
  <line x1="220" y1="372" x2="220" y2="400" stroke="#666" stroke-width="1"/>
  <text x="220" y="416" font-size="13" fill="var(--ink)" text-anchor="middle">精＋卵→受精卵（2n）</text>
  <line x1="66" y1="210" x2="30" y2="188" stroke="#666" stroke-width="1"/>
  <text x="24" y="180" font-size="12" fill="var(--ink)">孢子體（2n，長在配子體上）</text>
</g>`,
      parts: [
        { name: "孢子（n）", desc: "由孢蒴經減數分裂產生的單套孢子，落地萌發成配子體。" },
        { name: "配子體（n）", desc: "苔蘚肉眼可見的綠色植株就是配子體，為單套且是主要世代，上面產生精與卵。" },
        { name: "受精卵（2n）", desc: "精子須靠水游到卵處受精，形成雙套受精卵，發育成孢子體。" },
        { name: "孢子體（2n）", desc: "孢子體不能獨立生活，寄生在配子體上取得養分，頂端的孢蒴產生孢子。" }
      ]
    }
  ]
});

/* ---------------- 4. 藻類 algae ---------------- */
window.ANATOMY.register({
  id: "algae",
  name: "藻類構造",
  latin: "Algae",
  emoji: "🌊",
  kingdom: "plantae",
  group: "algae",
  rank: "多樣的水生自營生物",
  summary: "藻類是水中的自營生物，沒有真正的根、莖、葉之分，全身統稱葉狀體。從多細胞的海帶到單細胞的綠藻都靠葉綠體行光合作用，是植物演化的起點。",
  views: [
    {
      id: "kelp",
      name: "海帶（多細胞）",
      viewBox: "0 0 420 560",
      svg: `
<defs>
  <linearGradient id="algae-ext-water" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d6f0f5"/><stop offset="45%" stop-color="#a3d3e0"/><stop offset="100%" stop-color="#5f9fb8"/>
  </linearGradient>
  <linearGradient id="algae-ext-blade" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#7a8a38"/><stop offset="45%" stop-color="#4a6b22"/><stop offset="100%" stop-color="#37541a"/>
  </linearGradient>
  <linearGradient id="algae-ext-blade-hi" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#a3b358"/><stop offset="100%" stop-color="#5c7a2a"/>
  </linearGradient>
  <linearGradient id="algae-ext-stipe" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#9a7838"/><stop offset="50%" stop-color="#6a4e22"/><stop offset="100%" stop-color="#3e2e12"/>
  </linearGradient>
  <radialGradient id="algae-ext-bladder" cx="36%" cy="30%">
    <stop offset="0%" stop-color="#cdd888"/><stop offset="60%" stop-color="#8a9a44"/><stop offset="100%" stop-color="#5c6e26"/>
  </radialGradient>
  <radialGradient id="algae-ext-hold" cx="50%" cy="20%">
    <stop offset="0%" stop-color="#8a6830"/><stop offset="100%" stop-color="#33260e"/>
  </radialGradient>
</defs>
<rect x="0" y="0" width="420" height="560" fill="url(#algae-ext-water)"/>
<!-- 透光光柱 -->
<g fill="#ffffff" opacity="0.12"><path d="M60 0 L120 0 L90 520 L40 520 Z"/><path d="M300 0 L340 0 L322 520 L286 520 Z"/></g>
<!-- 海床 -->
<path d="M0 508 Q210 486 420 510 L420 560 L0 560 Z" fill="#a4936238" stroke="none"/>
<path d="M0 508 Q210 486 420 510 L420 560 L0 560 Z" fill="#9a8a5c"/>
<path d="M0 508 Q210 486 420 510" stroke="#7c6c44" stroke-width="1.4" fill="none" opacity="0.6"/>
<!-- 氣泡 -->
<g fill="#ffffff" opacity="0.4"><circle cx="60" cy="120" r="4"/><circle cx="70" cy="90" r="3"/><circle cx="66" cy="150" r="2.4"/><circle cx="350" cy="200" r="4"/><circle cx="360" cy="170" r="2.6"/><circle cx="344" cy="230" r="2.2"/></g>

<!-- 固著器（分叉根狀，抓附岩石）-->
<g data-part="固著器" transform="translate(200 506)">
  <path d="M0 -2 Q-32 18 -50 46 M0 -2 Q-14 24 -22 52 M0 -2 Q0 26 0 54 M0 -2 Q14 24 22 52 M0 -2 Q32 18 50 46 M0 -2 Q-24 22 -36 50 M0 -2 Q24 22 36 50" stroke="url(#algae-ext-hold)" stroke-width="6" fill="none" stroke-linecap="round"/>
</g>

<!-- 柄狀部（stipe，柔韌帶明暗）-->
<path data-part="柄狀部" d="M200 506 Q206 400 200 300" stroke="url(#algae-ext-stipe)" stroke-width="11" fill="none" stroke-linecap="round"/>
<path d="M197 490 Q203 400 197 306" stroke="#c9a86a" stroke-width="2" fill="none" opacity="0.4" stroke-linecap="round"/>

<!-- 氣囊（浮囊，帶高光）-->
<ellipse data-part="氣囊" cx="200" cy="288" rx="27" ry="35" fill="url(#algae-ext-bladder)" stroke="#4a6b22" stroke-width="1.2"/>
<ellipse cx="192" cy="276" rx="8" ry="12" fill="#ffffff" opacity="0.35"/>

<!-- 葉狀部（寬大帶狀葉片，光澤層次）-->
<g data-part="葉狀部" stroke="#37541a" stroke-width="0.8">
  <path d="M200 266 Q118 198 92 56 Q150 128 200 208 Z" fill="url(#algae-ext-blade)"/>
  <path d="M200 266 Q282 198 308 56 Q250 128 200 208 Z" fill="url(#algae-ext-blade)"/>
  <path d="M200 252 Q168 158 158 26 Q196 118 200 218 Z" fill="url(#algae-ext-blade-hi)"/>
</g>
<!-- 葉狀部中肋與光澤紋理 -->
<g stroke="#2c4514" stroke-width="0.7" opacity="0.55" fill="none">
  <path d="M148 218 Q126 138 110 64 M252 218 Q274 138 292 64 M180 220 Q170 128 166 46"/>
</g>
<g stroke="#c4d47a" stroke-width="1" opacity="0.4" fill="none">
  <path d="M160 210 Q142 140 128 74 M262 208 Q280 140 294 78"/>
</g>

<g class="labels">
  <line x1="150" y1="120" x2="60" y2="110" stroke="#666" stroke-width="1"/>
  <text x="10" y="114" font-size="13" fill="var(--ink)">葉狀部</text>
  <line x1="226" y1="290" x2="330" y2="290" stroke="#666" stroke-width="1"/>
  <text x="336" y="294" font-size="13" fill="var(--ink)">氣囊（浮力）</text>
  <line x1="204" y1="400" x2="310" y2="410" stroke="#666" stroke-width="1"/>
  <text x="316" y="414" font-size="13" fill="var(--ink)">柄狀部</text>
  <line x1="200" y1="530" x2="90" y2="540" stroke="#666" stroke-width="1"/>
  <text x="10" y="544" font-size="13" fill="var(--ink)">固著器</text>
</g>`,
      parts: [
        { name: "葉狀部", desc: "寬大的葉片狀構造，富含葉綠體行光合作用，但不是真正的葉（無維管束）。" },
        { name: "氣囊", desc: "充氣的浮囊，提供浮力讓葉狀部漂在水中接近陽光。" },
        { name: "柄狀部", desc: "類似莖的柔韌柄，連接固著器與葉狀部，可隨水流擺動而不折斷。" },
        { name: "固著器", desc: "根狀的分叉構造，只把藻體固定在岩石上，不吸收水分養分（與真正的根不同）。" }
      ]
    },
    {
      id: "cell",
      name: "單細胞藻與葉綠體",
      viewBox: "0 0 440 420",
      svg: `
<defs>
  <radialGradient id="algae-cell" cx="42%" cy="35%">
    <stop offset="0%" stop-color="#bfe19a"/><stop offset="100%" stop-color="#6fae5a"/>
  </radialGradient>
  <linearGradient id="algae-chloro" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#3f9d5a"/><stop offset="100%" stop-color="#1f6f39"/>
  </linearGradient>
  <radialGradient id="algae-nucleus" cx="45%" cy="40%">
    <stop offset="0%" stop-color="#d7b3e0"/><stop offset="100%" stop-color="#8a5aa0"/>
  </radialGradient>
</defs>
<rect x="0" y="0" width="440" height="420" fill="#eef7fb"/>
<text x="220" y="30" font-size="13" fill="var(--ink)" text-anchor="middle">單細胞綠藻（如衣藻）與多細胞絲狀藻對比</text>

<!-- 單細胞藻放大 -->
<g transform="translate(150 220)">
  <!-- 細胞壁 -->
  <ellipse data-part="細胞壁" cx="0" cy="0" rx="96" ry="110" fill="url(#algae-cell)" stroke="#3f8a2f" stroke-width="3"/>
  <!-- 杯狀葉綠體 -->
  <path data-part="葉綠體" d="M-72 20 Q-80 -70 0 -84 Q80 -70 72 20 Q0 78 -72 20 Z" fill="url(#algae-chloro)" stroke="#1c5c30"/>
  <!-- 澱粉核（pyrenoid）-->
  <circle data-part="澱粉核" cx="0" cy="26" r="16" fill="#2b7a45" stroke="#154a26"/>
  <!-- 細胞核 -->
  <circle data-part="細胞核" cx="0" cy="-30" r="20" fill="url(#algae-nucleus)" stroke="#6a3a80"/>
  <circle cx="-4" cy="-34" r="6" fill="#5a2a70" opacity="0.7"/>
  <!-- 眼點 -->
  <circle data-part="眼點" cx="60" cy="-30" r="7" fill="#d94a3a" stroke="#8a2a1c"/>
  <!-- 鞭毛 -->
  <g data-part="鞭毛" stroke="#3f8a2f" stroke-width="2.5" fill="none" stroke-linecap="round">
    <path d="M-30 -104 Q-50 -140 -38 -170"/>
    <path d="M30 -104 Q50 -140 38 -170"/>
  </g>
</g>

<!-- 多細胞絲狀藻對比 -->
<g transform="translate(360 220)" data-part="絲狀藻體">
  <g fill="url(#algae-cell)" stroke="#3f8a2f" stroke-width="1.5">
    <rect x="-22" y="-90" width="44" height="42" rx="8"/>
    <rect x="-22" y="-44" width="44" height="42" rx="8"/>
    <rect x="-22" y="2" width="44" height="42" rx="8"/>
    <rect x="-22" y="48" width="44" height="42" rx="8"/>
  </g>
  <!-- 每格內螺旋葉綠體 -->
  <g stroke="#1f6f39" stroke-width="4" fill="none" opacity="0.85">
    <path d="M-16 -84 Q16 -74 -16 -64 Q16 -54 -16 -50"/>
    <path d="M-16 -38 Q16 -28 -16 -18 Q16 -8 -16 -4"/>
    <path d="M-16 8 Q16 18 -16 28 Q16 38 -16 42"/>
    <path d="M-16 54 Q16 64 -16 74 Q16 84 -16 88"/>
  </g>
</g>

<g class="labels">
  <line x1="150" y1="-2" x2="150" y2="70" stroke="#666" stroke-width="1"/>
  <text x="10" y="128" font-size="12" fill="var(--ink)">鞭毛（游動）</text>
  <line x1="150" y1="112" x2="120" y2="126" stroke="#666" stroke-width="1"/>
  <line x1="54" y1="200" x2="14" y2="196" stroke="#666" stroke-width="1"/>
  <text x="10" y="184" font-size="13" fill="var(--ink)">細胞壁</text>
  <line x1="150" y1="246" x2="60" y2="300" stroke="#666" stroke-width="1"/>
  <text x="10" y="316" font-size="13" fill="var(--ink)">葉綠體（杯狀）</text>
  <line x1="150" y1="190" x2="230" y2="150" stroke="#666" stroke-width="1"/>
  <text x="180" y="144" font-size="12" fill="var(--ink)">細胞核</text>
  <line x1="210" y1="190" x2="256" y2="200" stroke="#666" stroke-width="1"/>
  <text x="200" y="360" font-size="12" fill="var(--ink)">澱粉核／眼點</text>
  <line x1="360" y1="112" x2="392" y2="80" stroke="#666" stroke-width="1"/>
  <text x="300" y="72" font-size="13" fill="var(--ink)">絲狀藻體（多細胞）</text>
</g>`,
      parts: [
        { name: "細胞壁", desc: "包在細胞外的纖維素壁，提供支撐與保護。" },
        { name: "葉綠體", desc: "含葉綠素的胞器，是行光合作用製造養分的場所，綠藻多呈杯狀或帶狀。" },
        { name: "細胞核", desc: "含遺傳物質，控制細胞的生長與繁殖（真核生物特徵）。" },
        { name: "澱粉核", desc: "葉綠體內的蛋白質結構（pyrenoid），周圍堆積光合產生的澱粉。" },
        { name: "眼點", desc: "紅色的感光構造，幫助鞭毛藻朝向光源游動趨光。" },
        { name: "鞭毛", desc: "細胞前端的鞭狀構造，擺動使單細胞藻能在水中游動。" },
        { name: "絲狀藻體", desc: "多細胞藻由一列細胞相連成絲，每個細胞內都有葉綠體，是最簡單的多細胞體制。" }
      ]
    }
  ]
});
