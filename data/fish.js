/* 魚類 fish — 寫實解剖 SVG 教材（繁體中文）
 * 硬骨魚 bony-fish、鯊魚 shark、鰓的構造 gill-anatomy
 * 每物種一次 window.ANATOMY.register({...})
 */

/* ===== 硬骨魚 bony-fish ===== */
window.ANATOMY.register({
  id: "bony-fish",
  name: "硬骨魚",
  latin: "Osteichthyes",
  emoji: "🐟",
  kingdom: "animalia",
  group: "fish",
  rank: "硬骨魚綱（以鱸魚為代表）",
  summary: "硬骨魚具骨質骨骼與硬骨鰓蓋，體表覆蓋硬鱗與側線感覺系統，鰭以硬棘與軟條支撐。體腔內有鰾可調節浮力，是與軟骨魚最顯著的差異之一。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 460 300",
      svg: `
<defs>
  <linearGradient id="bony-body" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8fb6d6"/>
    <stop offset="45%" stop-color="#5f8fb8"/>
    <stop offset="60%" stop-color="#b9d3e6"/>
    <stop offset="100%" stop-color="#e7f0f6"/>
  </linearGradient>
  <linearGradient id="bony-fin" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7fa6c6"/>
    <stop offset="100%" stop-color="#cfe0ec"/>
  </linearGradient>
  <radialGradient id="bony-eye" cx="40%" cy="35%" r="70%">
    <stop offset="0%" stop-color="#fff"/>
    <stop offset="45%" stop-color="#3a3a3a"/>
    <stop offset="100%" stop-color="#111"/>
  </radialGradient>
</defs>

<!-- 尾鰭 -->
<path data-part="尾鰭" d="M60 150 L18 108 Q30 150 18 192 Z" fill="url(#bony-fin)" stroke="#4a6f8f" stroke-width="1.2"/>
<path d="M32 120 L52 145 M28 150 L54 150 M32 180 L52 155" stroke="#5c86a6" stroke-width="0.8" fill="none"/>

<!-- 身體 -->
<path data-part="身體" d="M62 150 Q150 96 300 108 Q380 116 420 150 Q380 184 300 192 Q150 204 62 150 Z" fill="url(#bony-body)" stroke="#3f6785" stroke-width="1.5"/>

<!-- 鱗片紋理 -->
<g stroke="#7ea6c4" stroke-width="0.6" fill="none" opacity="0.8">
  <path d="M120 132 q10 8 0 16 M150 128 q10 8 0 16 M180 126 q10 8 0 16 M210 126 q10 8 0 16 M240 128 q10 8 0 16 M270 130 q10 8 0 16"/>
  <path d="M135 150 q10 8 0 16 M165 148 q10 8 0 16 M195 147 q10 8 0 16 M225 147 q10 8 0 16 M255 149 q10 8 0 16"/>
  <path d="M120 168 q10 8 0 16 M150 170 q10 8 0 16 M180 171 q10 8 0 16 M210 171 q10 8 0 16 M240 170 q10 8 0 16"/>
</g>
<rect data-part="鱗片" x="118" y="126" width="6" height="6" fill="none" opacity="0"/>

<!-- 側線 -->
<path data-part="側線" d="M118 143 Q220 137 380 146" stroke="#2f5573" stroke-width="1.4" fill="none" stroke-dasharray="1 3"/>

<!-- 鰓蓋 -->
<path data-part="鰓蓋" d="M360 118 Q378 150 360 184 Q346 150 360 118 Z" fill="#a9c8de" stroke="#3f6785" stroke-width="1.2"/>

<!-- 頭與眼 -->
<circle data-part="眼" cx="398" cy="140" r="8" fill="url(#bony-eye)" stroke="#2b455b"/>
<path d="M420 150 Q432 150 438 158 Q426 158 420 154 Z" fill="#cfe0ec" stroke="#3f6785" stroke-width="1"/>

<!-- 背鰭 -->
<path data-part="背鰭" d="M170 108 L182 70 L204 74 L222 78 L244 80 L262 92 L262 106 Z" fill="url(#bony-fin)" stroke="#4a6f8f" stroke-width="1.2"/>
<path d="M182 72 L184 106 M204 76 L206 106 M226 80 L228 106 M248 84 L250 106" stroke="#5c86a6" stroke-width="0.9"/>

<!-- 胸鰭 -->
<path data-part="胸鰭" d="M328 172 Q316 208 296 214 Q312 190 314 168 Z" fill="url(#bony-fin)" stroke="#4a6f8f" stroke-width="1.2"/>

<!-- 腹鰭 -->
<path data-part="腹鰭" d="M280 188 L272 214 L292 210 Z" fill="url(#bony-fin)" stroke="#4a6f8f" stroke-width="1.1"/>

<!-- 臀鰭 -->
<path data-part="臀鰭" d="M188 192 L196 222 L216 216 L224 196 Z" fill="url(#bony-fin)" stroke="#4a6f8f" stroke-width="1.2"/>
<path d="M198 198 L200 218 M212 198 L214 214" stroke="#5c86a6" stroke-width="0.9"/>

<g class="labels">
  <line x1="215" y1="72" x2="215" y2="40" stroke="#666" stroke-width="1"/>
  <text x="185" y="34" font-size="13" fill="var(--ink)">背鰭</text>

  <line x1="35" y1="150" x2="35" y2="238" stroke="#666" stroke-width="1"/>
  <text x="10" y="252" font-size="13" fill="var(--ink)">尾鰭</text>

  <line x1="310" y1="200" x2="330" y2="244" stroke="#666" stroke-width="1"/>
  <text x="308" y="258" font-size="13" fill="var(--ink)">胸鰭</text>

  <line x1="282" y1="210" x2="262" y2="250" stroke="#666" stroke-width="1"/>
  <text x="232" y="264" font-size="13" fill="var(--ink)">腹鰭</text>

  <line x1="205" y1="216" x2="185" y2="254" stroke="#666" stroke-width="1"/>
  <text x="150" y="268" font-size="13" fill="var(--ink)">臀鰭</text>

  <line x1="250" y1="140" x2="250" y2="40" stroke="#666" stroke-width="1"/>
  <text x="256" y="40" font-size="13" fill="var(--ink)">側線</text>

  <line x1="360" y1="150" x2="410" y2="70" stroke="#666" stroke-width="1"/>
  <text x="414" y="66" font-size="13" fill="var(--ink)">鰓蓋</text>

  <line x1="398" y1="140" x2="440" y2="112" stroke="#666" stroke-width="1"/>
  <text x="444" y="108" font-size="13" fill="var(--ink)">眼</text>

  <line x1="150" y1="160" x2="120" y2="200" stroke="#666" stroke-width="1"/>
  <text x="86" y="214" font-size="13" fill="var(--ink)">鱗片</text>
</g>`,
      parts: [
        { name: "背鰭", desc: "背側鰭，由硬棘與軟條支撐，維持游動時的直立平衡。" },
        { name: "胸鰭", desc: "位於鰓蓋後方成對，控制轉向、煞車與上下升降。" },
        { name: "腹鰭", desc: "腹側成對鰭，輔助平衡與姿勢微調。" },
        { name: "臀鰭", desc: "肛門後方的單一鰭，穩定身體防止翻滾。" },
        { name: "尾鰭", desc: "主要推進器官，擺動產生前進推力。" },
        { name: "側線", desc: "體側的感覺系統，偵測水流振動與壓力變化。" },
        { name: "鰓蓋", desc: "硬骨質蓋片，保護鰓並形成呼吸水流的泵。" },
        { name: "鱗片", desc: "覆瓦狀硬鱗，保護體表並減少水阻。" },
        { name: "眼", desc: "無眼瞼的視覺器官，適應水中光線。" },
        { name: "身體", desc: "流線型體型，覆蓋銀藍體色以利偽裝。" }
      ]
    },
    {
      id: "internal",
      name: "內臟構造",
      viewBox: "0 0 460 280",
      svg: `
<defs>
  <linearGradient id="bony-cavity" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d7e6f0"/>
    <stop offset="100%" stop-color="#f2f7fb"/>
  </linearGradient>
  <linearGradient id="bony-bladder" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#fdfdff"/>
    <stop offset="55%" stop-color="#dfe7ee"/>
    <stop offset="100%" stop-color="#c4d2dd"/>
  </linearGradient>
  <radialGradient id="bony-heart" cx="40%" cy="35%" r="75%">
    <stop offset="0%" stop-color="#c0473a"/>
    <stop offset="100%" stop-color="#7a2620"/>
  </radialGradient>
  <linearGradient id="bony-gut" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d59a5a"/>
    <stop offset="100%" stop-color="#a9723a"/>
  </linearGradient>
  <linearGradient id="bony-kidney" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8f5a72"/>
    <stop offset="100%" stop-color="#5f3a4d"/>
  </linearGradient>
</defs>

<!-- 體輪廓 -->
<path d="M40 140 Q140 88 300 100 Q390 108 430 140 Q390 172 300 180 Q140 192 40 140 Z" fill="url(#bony-cavity)" stroke="#9fb6c6" stroke-width="1.4"/>
<path d="M30 140 Q20 128 24 140 Q20 152 30 140 Z" fill="#cfe0ec" stroke="#9fb6c6"/>

<!-- 脊柱與腎（背側） -->
<path data-part="腎臟" d="M110 112 Q220 104 360 116 Q220 118 110 122 Z" fill="url(#bony-kidney)" stroke="#4d2f3d" stroke-width="1"/>
<path d="M100 126 Q240 118 380 128" stroke="#c9b48f" stroke-width="2" fill="none"/>

<!-- 鰾 -->
<ellipse data-part="鰾" cx="230" cy="140" rx="82" ry="24" fill="url(#bony-bladder)" stroke="#9aabb8" stroke-width="1.2"/>
<path d="M160 140 Q230 130 300 140" stroke="#c4d2dd" stroke-width="0.8" fill="none"/>

<!-- 消化道 -->
<path data-part="消化道" d="M330 150 Q300 172 250 166 Q200 160 170 172 Q140 182 130 168 Q160 176 200 168 Q250 178 300 168 Q330 162 340 150 Z" fill="url(#bony-gut)" stroke="#7d5228" stroke-width="1.2"/>
<ellipse cx="310" cy="156" rx="20" ry="12" fill="#c98f4f" stroke="#7d5228" stroke-width="1"/>

<!-- 心臟（前腹側） -->
<path data-part="心臟" d="M360 158 Q378 150 384 166 Q386 182 366 184 Q352 178 356 164 Z" fill="url(#bony-heart)" stroke="#5c211c" stroke-width="1.2"/>

<g class="labels">
  <line x1="230" y1="140" x2="200" y2="52" stroke="#666" stroke-width="1"/>
  <text x="170" y="46" font-size="13" fill="var(--ink)">鰾（浮力調節）</text>

  <line x1="240" y1="118" x2="270" y2="60" stroke="#666" stroke-width="1"/>
  <text x="272" y="56" font-size="13" fill="var(--ink)">腎臟</text>

  <line x1="250" y1="166" x2="220" y2="240" stroke="#666" stroke-width="1"/>
  <text x="188" y="254" font-size="13" fill="var(--ink)">消化道</text>

  <line x1="372" y1="172" x2="400" y2="222" stroke="#666" stroke-width="1"/>
  <text x="382" y="236" font-size="13" fill="var(--ink)">心臟</text>

  <line x1="140" y1="128" x2="90" y2="60" stroke="#666" stroke-width="1"/>
  <text x="34" y="54" font-size="13" fill="var(--ink)">脊柱（硬骨）</text>
</g>`,
      parts: [
        { name: "鰾", desc: "充氣的銀白囊袋，調節浮力使魚懸浮於不同水層，是硬骨魚特徵。" },
        { name: "心臟", desc: "兩腔式（一心房一心室），將缺氧血泵向鰓進行氣體交換。" },
        { name: "消化道", desc: "由食道、胃、腸組成，處理食物並吸收養分。" },
        { name: "腎臟", desc: "沿背側脊柱下方延伸，負責過濾廢物與滲透壓調節。" }
      ]
    },
    {
      id: "gill-detail",
      name: "鰓部特寫",
      viewBox: "0 0 420 300",
      svg: `
<defs>
  <linearGradient id="bony-gill-cover" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#a9c8de"/>
    <stop offset="100%" stop-color="#dcebf4"/>
  </linearGradient>
  <linearGradient id="bony-arch" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e9dfc6"/>
    <stop offset="100%" stop-color="#c9b48f"/>
  </linearGradient>
  <linearGradient id="bony-filament" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e04b3d"/>
    <stop offset="100%" stop-color="#a02218"/>
  </linearGradient>
</defs>

<!-- 掀開的鰓蓋 -->
<path data-part="鰓蓋" d="M60 60 Q40 150 60 240 Q92 150 60 60 Z" fill="url(#bony-gill-cover)" stroke="#3f6785" stroke-width="1.4"/>

<!-- 四對鰓弓與鰓絲 -->
<g>
  <path data-part="鰓弓" d="M120 66 Q108 150 120 234" fill="none" stroke="url(#bony-arch)" stroke-width="9" stroke-linecap="round"/>
  <path data-part="鰓耙" d="M120 90 L96 84 M120 120 L96 116 M120 150 L94 150 M120 180 L96 184 M120 210 L96 216" stroke="#b79a6a" stroke-width="3" stroke-linecap="round"/>
  <path data-part="鰓絲" d="M124 80 Q170 78 176 90 M124 105 Q176 103 182 116 M124 130 Q182 128 188 140 M124 155 Q186 153 192 164 M124 180 Q182 178 188 190 M124 205 Q176 203 182 214 M124 225 Q170 223 176 234" fill="none" stroke="url(#bony-filament)" stroke-width="6" stroke-linecap="round"/>
</g>

<!-- 第二鰓弓 -->
<g opacity="0.9">
  <path d="M210 70 Q198 150 210 230" fill="none" stroke="url(#bony-arch)" stroke-width="8" stroke-linecap="round"/>
  <path d="M214 84 Q262 82 268 94 M214 110 Q268 108 274 120 M214 136 Q272 134 278 146 M214 162 Q268 160 274 172 M214 188 Q262 186 268 198 M214 214 Q256 212 262 224" fill="none" stroke="url(#bony-filament)" stroke-width="6" stroke-linecap="round"/>
</g>

<!-- 第三鰓弓 -->
<g opacity="0.75">
  <path d="M300 78 Q290 150 300 222" fill="none" stroke="url(#bony-arch)" stroke-width="7" stroke-linecap="round"/>
  <path d="M304 92 Q346 90 352 102 M304 120 Q350 118 356 130 M304 148 Q352 146 358 158 M304 176 Q348 174 354 186 M304 204 Q342 202 348 214" fill="none" stroke="url(#bony-filament)" stroke-width="6" stroke-linecap="round"/>
</g>

<g class="labels">
  <line x1="70" y1="150" x2="40" y2="60" stroke="#666" stroke-width="1"/>
  <text x="14" y="54" font-size="13" fill="var(--ink)">鰓蓋</text>

  <line x1="120" y1="150" x2="130" y2="266" stroke="#666" stroke-width="1"/>
  <text x="100" y="282" font-size="13" fill="var(--ink)">鰓弓</text>

  <line x1="180" y1="140" x2="240" y2="56" stroke="#666" stroke-width="1"/>
  <text x="200" y="50" font-size="13" fill="var(--ink)">鰓絲（紅色富微血管）</text>

  <line x1="98" y1="150" x2="60" y2="284" stroke="#666" stroke-width="1"/>
  <text x="40" y="298" font-size="13" fill="var(--ink)">鰓耙</text>
</g>`,
      parts: [
        { name: "鰓蓋", desc: "覆蓋並保護鰓室，開合形成呼吸水流。" },
        { name: "鰓弓", desc: "支撐鰓絲的骨質弓架，硬骨魚通常有四對。" },
        { name: "鰓絲", desc: "鰓弓上排列的紅色細絲，富含微血管進行氣體交換。" },
        { name: "鰓耙", desc: "鰓弓內側的突起，過濾水中食物顆粒、防止異物入鰓。" }
      ]
    }
  ]
});

/* ===== 鯊魚 shark（軟骨魚） ===== */
window.ANATOMY.register({
  id: "shark",
  name: "鯊魚",
  latin: "Chondrichthyes",
  emoji: "🦈",
  kingdom: "animalia",
  group: "fish",
  rank: "軟骨魚綱",
  summary: "鯊魚屬軟骨魚，全身骨骼由軟骨構成而非硬骨。體側有五至七對外露的鰓裂，沒有鰓蓋，也沒有鰾，改以巨大富含油脂的肝臟與持續游動維持浮力。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 480 280",
      svg: `
<defs>
  <linearGradient id="shark-body" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6f7f8c"/>
    <stop offset="48%" stop-color="#8a9aa6"/>
    <stop offset="58%" stop-color="#c3cdd4"/>
    <stop offset="100%" stop-color="#eef2f4"/>
  </linearGradient>
  <linearGradient id="shark-fin" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5f6f7c"/>
    <stop offset="100%" stop-color="#9aa9b4"/>
  </linearGradient>
  <radialGradient id="shark-eye" cx="40%" cy="35%" r="70%">
    <stop offset="0%" stop-color="#e8e2c8"/>
    <stop offset="55%" stop-color="#3a3320"/>
    <stop offset="100%" stop-color="#0d0b06"/>
  </radialGradient>
</defs>

<!-- 尾鰭（歪型尾，上葉大） -->
<path data-part="尾鰭" d="M52 140 L14 70 Q30 120 22 150 L44 156 L18 200 Q42 168 52 150 Z" fill="url(#shark-fin)" stroke="#4a5560" stroke-width="1.3"/>

<!-- 身體（紡錘形） -->
<path data-part="身體" d="M52 145 Q160 92 320 104 Q410 112 452 146 Q420 162 400 160 Q360 176 300 182 Q160 194 52 152 Z" fill="url(#shark-body)" stroke="#54626d" stroke-width="1.5"/>

<!-- 吻部 -->
<path data-part="吻部" d="M452 146 Q470 148 466 158 Q450 158 440 154 Z" fill="#c3cdd4" stroke="#54626d" stroke-width="1"/>

<!-- 眼 -->
<circle data-part="眼" cx="418" cy="136" r="7" fill="url(#shark-eye)" stroke="#33302a"/>

<!-- 口（腹位） -->
<path data-part="口" d="M424 162 Q440 170 452 160" fill="none" stroke="#3a4650" stroke-width="1.6"/>
<path d="M428 164 l3 5 M436 167 l2 5 M444 166 l3 4" stroke="#fff" stroke-width="1"/>

<!-- 鰓裂（五對，無鰓蓋） -->
<g data-part="鰓裂" stroke="#3a4650" stroke-width="2.4" fill="none" stroke-linecap="round">
  <path d="M360 120 Q356 146 360 172"/>
  <path d="M372 120 Q368 146 372 172"/>
  <path d="M384 121 Q380 146 384 171"/>
  <path d="M396 122 Q392 146 396 170"/>
  <path d="M408 124 Q404 146 408 168"/>
</g>

<!-- 第一背鰭（大三角） -->
<path data-part="背鰭" d="M188 104 L206 40 L252 106 Z" fill="url(#shark-fin)" stroke="#4a5560" stroke-width="1.3"/>

<!-- 第二背鰭 -->
<path d="M120 116 L128 88 L150 118 Z" fill="url(#shark-fin)" stroke="#4a5560" stroke-width="1.2"/>

<!-- 胸鰭（大而鐮刀狀） -->
<path data-part="胸鰭" d="M330 168 Q300 226 258 236 Q296 200 306 164 Z" fill="url(#shark-fin)" stroke="#4a5560" stroke-width="1.3"/>

<!-- 腹鰭 -->
<path data-part="腹鰭" d="M232 184 L214 224 L246 210 Z" fill="url(#shark-fin)" stroke="#4a5560" stroke-width="1.2"/>

<g class="labels">
  <line x1="220" y1="48" x2="220" y2="18" stroke="#666" stroke-width="1"/>
  <text x="150" y="14" font-size="13" fill="var(--ink)">第一背鰭</text>

  <line x1="30" y1="120" x2="30" y2="232" stroke="#666" stroke-width="1"/>
  <text x="8" y="246" font-size="13" fill="var(--ink)">歪型尾鰭</text>

  <line x1="290" y1="210" x2="300" y2="258" stroke="#666" stroke-width="1"/>
  <text x="284" y="272" font-size="13" fill="var(--ink)">胸鰭</text>

  <line x1="232" y1="210" x2="200" y2="256" stroke="#666" stroke-width="1"/>
  <text x="164" y="270" font-size="13" fill="var(--ink)">腹鰭</text>

  <line x1="384" y1="146" x2="384" y2="40" stroke="#666" stroke-width="1"/>
  <text x="330" y="34" font-size="13" fill="var(--ink)">鰓裂（無鰓蓋）</text>

  <line x1="418" y1="136" x2="452" y2="60" stroke="#666" stroke-width="1"/>
  <text x="456" y="56" font-size="13" fill="var(--ink)">眼</text>

  <line x1="440" y1="164" x2="440" y2="240" stroke="#666" stroke-width="1"/>
  <text x="416" y="254" font-size="13" fill="var(--ink)">口（腹位）</text>
</g>`,
      parts: [
        { name: "鰓裂", desc: "體側五對外露的裂縫，直接與外界相通，取代硬骨魚的鰓蓋。" },
        { name: "背鰭", desc: "堅硬的三角形鰭，維持游動時的方向穩定。" },
        { name: "胸鰭", desc: "寬大似機翼，游動時產生升力以對抗下沉（因無鰾）。" },
        { name: "腹鰭", desc: "成對腹側鰭，雄鯊的腹鰭特化為交接器（鰭腳）。" },
        { name: "尾鰭", desc: "歪型尾，上葉大於下葉，擺動同時提供推力與升力。" },
        { name: "吻部", desc: "突出的鼻端，內含勞倫氏壺腹可感應電場。" },
        { name: "口", desc: "位於腹面下方，具多排可替換的牙齒。" },
        { name: "眼", desc: "側位的視覺器官，部分種類具瞬膜保護。" },
        { name: "身體", desc: "紡錘流線形，體表覆盾鱗（楯鱗），減少水流阻力。" }
      ]
    },
    {
      id: "internal",
      name: "內部構造",
      viewBox: "0 0 480 280",
      svg: `
<defs>
  <linearGradient id="shark-cavity" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#dbe2e7"/>
    <stop offset="100%" stop-color="#f0f4f6"/>
  </linearGradient>
  <linearGradient id="shark-liver" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#c9a24a"/>
    <stop offset="100%" stop-color="#8f6d24"/>
  </linearGradient>
  <linearGradient id="shark-cartilage" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#dfe7ec"/>
    <stop offset="100%" stop-color="#b7c4cc"/>
  </linearGradient>
  <radialGradient id="shark-heart" cx="40%" cy="35%" r="75%">
    <stop offset="0%" stop-color="#c0473a"/>
    <stop offset="100%" stop-color="#7a2620"/>
  </radialGradient>
  <linearGradient id="shark-gut" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#c98f6a"/>
    <stop offset="100%" stop-color="#96603a"/>
  </linearGradient>
</defs>

<!-- 體輪廓 -->
<path d="M40 140 Q160 92 320 104 Q420 112 458 142 Q420 168 320 178 Q160 190 40 140 Z" fill="url(#shark-cavity)" stroke="#9fb0ba" stroke-width="1.4"/>

<!-- 軟骨脊柱（分節） -->
<g data-part="軟骨骨骼">
  <path d="M70 132 Q240 122 400 130" stroke="url(#shark-cartilage)" stroke-width="10" fill="none" stroke-linecap="round"/>
  <g stroke="#8fa0aa" stroke-width="0.8">
    <line x1="110" y1="127" x2="110" y2="137"/><line x1="140" y1="126" x2="140" y2="136"/>
    <line x1="170" y1="126" x2="170" y2="136"/><line x1="200" y1="125" x2="200" y2="135"/>
    <line x1="230" y1="125" x2="230" y2="135"/><line x1="260" y1="125" x2="260" y2="135"/>
    <line x1="290" y1="126" x2="290" y2="136"/><line x1="320" y1="126" x2="320" y2="136"/>
    <line x1="350" y1="127" x2="350" y2="137"/>
  </g>
</g>

<!-- 巨大肝臟（佔體腔大部分，取代鰾的浮力功能） -->
<path data-part="肝臟" d="M110 150 Q200 138 300 148 Q330 152 320 166 Q220 178 130 174 Q104 170 110 150 Z" fill="url(#shark-liver)" stroke="#6e5218" stroke-width="1.2"/>
<path d="M130 158 Q220 152 300 158" stroke="#a9832e" stroke-width="0.8" fill="none"/>

<!-- 螺旋瓣腸 -->
<ellipse data-part="螺旋瓣腸" cx="150" cy="160" rx="26" ry="18" fill="url(#shark-gut)" stroke="#6e4a2a" stroke-width="1.2"/>
<path d="M128 160 Q150 146 172 160 Q150 174 128 160 M134 160 Q150 152 166 160" stroke="#8a5c38" stroke-width="1" fill="none"/>

<!-- 心臟（前方，鰓區下） -->
<path data-part="心臟" d="M356 156 Q374 148 380 164 Q382 180 362 182 Q348 176 352 162 Z" fill="url(#shark-heart)" stroke="#5c211c" stroke-width="1.2"/>

<!-- 鰓裂區（內側，無鰾標示） -->
<g data-part="鰓裂" stroke="#b23c30" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.9">
  <path d="M330 120 Q326 142 330 164"/>
  <path d="M342 120 Q338 142 342 164"/>
  <path d="M354 121 Q350 142 354 163"/>
</g>

<g class="labels">
  <line x1="240" y1="126" x2="240" y2="46" stroke="#666" stroke-width="1"/>
  <text x="176" y="40" font-size="13" fill="var(--ink)">軟骨骨骼（無硬骨）</text>

  <line x1="220" y1="160" x2="220" y2="238" stroke="#666" stroke-width="1"/>
  <text x="150" y="252" font-size="13" fill="var(--ink)">巨大肝臟（提供浮力）</text>

  <line x1="150" y1="160" x2="90" y2="230" stroke="#666" stroke-width="1"/>
  <text x="30" y="244" font-size="13" fill="var(--ink)">螺旋瓣腸</text>

  <line x1="366" y1="170" x2="410" y2="222" stroke="#666" stroke-width="1"/>
  <text x="392" y="236" font-size="13" fill="var(--ink)">心臟</text>

  <line x1="342" y1="140" x2="400" y2="60" stroke="#666" stroke-width="1"/>
  <text x="360" y="54" font-size="13" fill="var(--ink)">鰓裂（無鰾）</text>
</g>`,
      parts: [
        { name: "軟骨骨骼", desc: "全身骨架由柔韌的軟骨構成，比硬骨輕、有助減輕體重。" },
        { name: "肝臟", desc: "體積巨大且富含低密度油脂（角鯊烯），提供浮力，取代鰾的功能。" },
        { name: "螺旋瓣腸", desc: "腸內具螺旋狀瓣膜，增加吸收面積、延長食物停留時間。" },
        { name: "心臟", desc: "兩腔式心臟，將血液泵送至鰓部進行氣體交換。" },
        { name: "鰓裂", desc: "鯊魚沒有鰓蓋與鰾，藉外露鰓裂與持續游泳讓水流過鰓。" }
      ]
    }
  ]
});

/* ===== 鰓的構造 gill-anatomy（構造專題） ===== */
window.ANATOMY.register({
  id: "gill-anatomy",
  name: "鰓的構造",
  latin: "Branchia",
  emoji: "🩸",
  kingdom: "animalia",
  group: "fish",
  rank: "構造專題・氣體交換",
  summary: "鰓是魚類的呼吸器官，由鰓弓、鰓絲與鰓瓣（次級鰓瓣）層層構成。血液在鰓瓣中的流向與水流方向相反，形成逆流交換，使氣體交換效率最大化。",
  views: [
    {
      id: "structure",
      name: "鰓弓與鰓絲",
      viewBox: "0 0 420 320",
      svg: `
<defs>
  <linearGradient id="gill-arch" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ede2c8"/>
    <stop offset="100%" stop-color="#c6b088"/>
  </linearGradient>
  <linearGradient id="gill-filament" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e6503f"/>
    <stop offset="100%" stop-color="#9c2016"/>
  </linearGradient>
  <linearGradient id="gill-lamella" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#f2867a"/>
    <stop offset="100%" stop-color="#c53a2c"/>
  </linearGradient>
</defs>

<!-- 鰓弓 -->
<path data-part="鰓弓" d="M70 40 Q54 160 70 280" fill="none" stroke="url(#gill-arch)" stroke-width="16" stroke-linecap="round"/>

<!-- 鰓耙（內側） -->
<path data-part="鰓耙" d="M62 70 L34 64 M62 110 L32 106 M62 150 L30 150 M62 190 L32 194 M62 230 L34 236" stroke="#b79a6a" stroke-width="4" stroke-linecap="round"/>

<!-- 兩排鰓絲（外側） -->
<g data-part="鰓絲" fill="none" stroke="url(#gill-filament)" stroke-width="7" stroke-linecap="round">
  <path d="M78 58 Q150 54 170 66"/>
  <path d="M78 86 Q152 82 172 94"/>
  <path d="M78 114 Q154 110 174 122"/>
  <path d="M78 142 Q156 138 176 150"/>
  <path d="M78 170 Q154 166 174 178"/>
  <path d="M78 198 Q152 194 172 206"/>
  <path d="M78 226 Q150 222 170 234"/>
  <path d="M78 254 Q148 250 168 262"/>
</g>

<!-- 放大框：一根鰓絲上的鰓瓣 -->
<line x1="176" y1="150" x2="250" y2="150" stroke="#999" stroke-width="0.8" stroke-dasharray="3 3"/>
<line x1="176" y1="150" x2="250" y2="90" stroke="#999" stroke-width="0.8" stroke-dasharray="3 3"/>

<rect x="250" y="60" width="150" height="200" rx="8" fill="#fff" opacity="0.55" stroke="#c8bda0"/>
<!-- 鰓絲主軸 -->
<path d="M270 80 Q262 160 270 250" fill="none" stroke="url(#gill-filament)" stroke-width="10" stroke-linecap="round"/>
<!-- 次級鰓瓣（薄片） -->
<g data-part="鰓瓣" fill="none" stroke="url(#gill-lamella)" stroke-width="4" stroke-linecap="round">
  <path d="M276 92 L360 96"/><path d="M275 108 L362 112"/>
  <path d="M274 124 L364 128"/><path d="M273 140 L366 144"/>
  <path d="M273 156 L366 160"/><path d="M274 172 L364 176"/>
  <path d="M275 188 L362 192"/><path d="M276 204 L360 208"/>
  <path d="M277 220 L358 224"/><path d="M278 236 L356 240"/>
</g>

<g class="labels">
  <line x1="70" y1="160" x2="70" y2="304" stroke="#666" stroke-width="1"/>
  <text x="48" y="318" font-size="13" fill="var(--ink)">鰓弓</text>

  <line x1="40" y1="150" x2="14" y2="150" stroke="#666" stroke-width="1"/>
  <text x="6" y="140" font-size="12" fill="var(--ink)">鰓耙</text>

  <line x1="150" y1="60" x2="150" y2="26" stroke="#666" stroke-width="1"/>
  <text x="120" y="20" font-size="13" fill="var(--ink)">鰓絲</text>

  <line x1="330" y1="128" x2="330" y2="44" stroke="#666" stroke-width="1"/>
  <text x="284" y="38" font-size="13" fill="var(--ink)">鰓瓣（次級鰓瓣）</text>
</g>`,
      parts: [
        { name: "鰓弓", desc: "支撐整片鰓的骨質或軟骨弓架，一側連著鰓耙、另一側長出鰓絲。" },
        { name: "鰓耙", desc: "鰓弓內緣的突起，過濾食物、防止顆粒堵塞鰓絲。" },
        { name: "鰓絲", desc: "由鰓弓伸出的紅色細絲，排列成兩排，是氣體交換的主結構。" },
        { name: "鰓瓣", desc: "鰓絲上垂直排列的薄片（次級鰓瓣），布滿微血管，是實際交換氣體的場所。" }
      ]
    },
    {
      id: "countercurrent",
      name: "逆流交換",
      viewBox: "0 0 440 320",
      svg: `
<defs>
  <linearGradient id="gill-water" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#4a90c4"/>
    <stop offset="100%" stop-color="#a8d0e8"/>
  </linearGradient>
  <linearGradient id="gill-lamella2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f4a79c"/>
    <stop offset="100%" stop-color="#d86a5c"/>
  </linearGradient>
  <marker id="gill-arrow-water" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
    <path d="M0 0 L6 3 L0 6 Z" fill="#2f6f9c"/>
  </marker>
  <marker id="gill-arrow-oxy" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
    <path d="M0 0 L6 3 L0 6 Z" fill="#c0392b"/>
  </marker>
  <marker id="gill-arrow-deoxy" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
    <path d="M0 0 L6 3 L0 6 Z" fill="#2c5f9e"/>
  </marker>
</defs>

<!-- 鰓瓣本體（薄片） -->
<rect data-part="鰓瓣" x="90" y="110" width="260" height="90" rx="10" fill="url(#gill-lamella2)" stroke="#b85040" stroke-width="1.4"/>
<text x="220" y="162" font-size="13" fill="#5c211c" text-anchor="middle">鰓瓣（微血管床）</text>

<!-- 水流方向（由左向右，流過鰓瓣外表面） -->
<g data-part="水流方向">
  <line x1="60" y1="90" x2="380" y2="90" stroke="#2f6f9c" stroke-width="4" marker-end="url(#gill-arrow-water)"/>
  <line x1="140" y1="90" x2="200" y2="90" stroke="#2f6f9c" stroke-width="4" marker-end="url(#gill-arrow-water)"/>
  <line x1="240" y1="90" x2="300" y2="90" stroke="#2f6f9c" stroke-width="4" marker-end="url(#gill-arrow-water)"/>
</g>

<!-- 血流方向（由右向左，與水流相反 = 逆流） -->
<g data-part="血流方向">
  <line x1="380" y1="220" x2="60" y2="220" stroke="#2c5f9e" stroke-width="4" marker-end="url(#gill-arrow-deoxy)"/>
  <line x1="300" y1="220" x2="240" y2="220" stroke="#c0392b" stroke-width="4" marker-end="url(#gill-arrow-oxy)"/>
  <line x1="200" y1="220" x2="140" y2="220" stroke="#c0392b" stroke-width="4" marker-end="url(#gill-arrow-oxy)"/>
</g>

<!-- 氧氣擴散箭頭（水→血） -->
<g stroke="#2f8f4f" stroke-width="1.6" fill="none" opacity="0.9">
  <line x1="130" y1="98" x2="130" y2="200" stroke-dasharray="4 3"/>
  <line x1="200" y1="98" x2="200" y2="200" stroke-dasharray="4 3"/>
  <line x1="270" y1="98" x2="270" y2="200" stroke-dasharray="4 3"/>
  <line x1="320" y1="98" x2="320" y2="200" stroke-dasharray="4 3"/>
</g>

<g class="labels">
  <line x1="380" y1="90" x2="410" y2="66" stroke="#666" stroke-width="1"/>
  <text x="300" y="58" font-size="13" fill="var(--ink)">水流方向 →</text>

  <line x1="60" y1="220" x2="30" y2="250" stroke="#666" stroke-width="1"/>
  <text x="18" y="266" font-size="13" fill="var(--ink)">← 血流方向（逆流）</text>

  <line x1="240" y1="150" x2="240" y2="150" stroke="#666" stroke-width="1"/>
  <text x="60" y="300" font-size="12" fill="var(--ink)">綠色虛線：氧氣持續由高濃度水擴散入血，效率最大化</text>

  <line x1="330" y1="200" x2="360" y2="234" stroke="#666" stroke-width="1"/>
  <text x="336" y="248" font-size="12" fill="var(--ink)">入鰓：缺氧血（藍）</text>

  <line x1="150" y1="220" x2="150" y2="150" stroke="#666" stroke-width="1"/>
  <text x="96" y="140" font-size="12" fill="var(--ink)">出鰓：充氧血（紅）</text>
</g>`,
      parts: [
        { name: "鰓瓣", desc: "布滿微血管的薄片，血液與水僅隔一層細胞，利於氣體擴散。" },
        { name: "水流方向", desc: "含氧水由前向後流過鰓瓣表面，途中不斷把氧交給血液。" },
        { name: "血流方向", desc: "血液在鰓瓣內以相反方向流動，形成逆流交換。" }
      ]
    }
  ]
});
