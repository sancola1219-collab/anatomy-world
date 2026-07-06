/* 其他無脊椎動物（非昆蟲）寫實解剖教材
   蜘蛛、蝦、螃蟹、章魚、蝸牛、蚯蚓、海星、水母 */

/* ============ 蜘蛛 spider ============ */
window.ANATOMY.register({
  id: "spider",
  name: "蜘蛛",
  latin: "Araneae",
  emoji: "🕷️",
  kingdom: "animalia",
  group: "arachnids",
  rank: "蛛形綱・蜘蛛目",
  summary: "蜘蛛身體分為頭胸部與腹部兩段，具八隻步足，以螯肢注入毒液，並用腹端的絲疣紡絲結網。與昆蟲不同，牠沒有觸角，也沒有翅膀。",
  views: [
    {
      id: "external",
      name: "背面外形",
      viewBox: "0 0 420 420",
      svg: `
<defs>
  <radialGradient id="spider-ceph" cx="42%" cy="38%" r="70%">
    <stop offset="0%" stop-color="#6b4a30"/><stop offset="100%" stop-color="#3a2416"/>
  </radialGradient>
  <radialGradient id="spider-abdo" cx="45%" cy="35%" r="75%">
    <stop offset="0%" stop-color="#7a5533"/><stop offset="60%" stop-color="#4d3319"/><stop offset="100%" stop-color="#2c1c0d"/>
  </radialGradient>
  <linearGradient id="spider-leg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#5a3d26"/><stop offset="100%" stop-color="#2e1d0f"/>
  </linearGradient>
</defs>
<!-- 步足（八足，四對） -->
<g stroke="url(#spider-leg)" stroke-width="6" fill="none" stroke-linecap="round" data-part="步足">
  <path d="M175 215 L95 150 L40 130"/>
  <path d="M175 235 L85 210 L28 205"/>
  <path d="M175 255 L88 275 L32 300"/>
  <path d="M180 275 L100 320 L55 360"/>
  <path d="M245 215 L325 150 L380 130"/>
  <path d="M245 235 L335 210 L392 205"/>
  <path d="M245 255 L332 275 L388 300"/>
  <path d="M240 275 L320 320 L365 360"/>
</g>
<!-- 腹部 -->
<ellipse data-part="腹部" cx="210" cy="300" rx="70" ry="88" fill="url(#spider-abdo)" stroke="#241608" stroke-width="2"/>
<path d="M210 225 Q235 300 210 385 Q185 300 210 225 Z" fill="#3d2812" opacity="0.5"/>
<!-- 頭胸部 -->
<ellipse data-part="頭胸部" cx="210" cy="230" rx="52" ry="46" fill="url(#spider-ceph)" stroke="#1f1308" stroke-width="2"/>
<!-- 單眼群 -->
<g fill="#141414">
  <circle data-part="單眼" cx="196" cy="198" r="4"/><circle cx="224" cy="198" r="4"/>
  <circle cx="188" cy="210" r="3"/><circle cx="232" cy="210" r="3"/>
  <circle cx="203" cy="192" r="2.6"/><circle cx="217" cy="192" r="2.6"/>
</g>
<!-- 螯肢與觸肢 -->
<path data-part="螯肢" d="M196 262 Q188 285 194 300 M224 262 Q232 285 226 300" stroke="#2a1a0c" stroke-width="7" fill="none" stroke-linecap="round"/>
<circle cx="194" cy="302" r="4" fill="#7a1f1f"/><circle cx="226" cy="302" r="4" fill="#7a1f1f"/>
<path d="M180 240 Q150 250 138 268 M240 240 Q270 250 282 268" stroke="url(#spider-leg)" stroke-width="5" fill="none" stroke-linecap="round"/>
<!-- 絲疣 -->
<g data-part="絲疣" fill="#3a2513">
  <ellipse cx="204" cy="384" rx="5" ry="8"/><ellipse cx="216" cy="384" rx="5" ry="8"/>
</g>
<path d="M210 392 L206 415 M210 392 L214 415" stroke="#cfcfcf" stroke-width="1" opacity="0.7"/>
<g class="labels">
  <line x1="248" y1="220" x2="360" y2="205" stroke="#666" stroke-width="1"/>
  <text x="364" y="209" font-size="13" fill="var(--ink)">頭胸部</text>
  <line x1="270" y1="300" x2="360" y2="315" stroke="#666" stroke-width="1"/>
  <text x="364" y="319" font-size="13" fill="var(--ink)">腹部</text>
  <line x1="194" y1="302" x2="120" y2="330" stroke="#666" stroke-width="1"/>
  <text x="30" y="334" font-size="13" fill="var(--ink)">螯肢</text>
  <line x1="196" y1="198" x2="150" y2="150" stroke="#666" stroke-width="1"/>
  <text x="90" y="146" font-size="13" fill="var(--ink)">單眼群</text>
  <line x1="95" y1="150" x2="60" y2="115" stroke="#666" stroke-width="1"/>
  <text x="20" y="108" font-size="13" fill="var(--ink)">步足（八足）</text>
  <line x1="210" y1="384" x2="300" y2="395" stroke="#666" stroke-width="1"/>
  <text x="304" y="399" font-size="13" fill="var(--ink)">絲疣</text>
</g>`,
      parts: [
        { name: "頭胸部", desc: "由頭與胸癒合而成，著生眼、螯肢、觸肢與八隻步足。" },
        { name: "腹部", desc: "含消化、生殖與絲腺，末端為絲疣。與頭胸部之間以細腰相連。" },
        { name: "步足", desc: "八隻分節的行走足（四對），是蛛形綱與昆蟲六足的關鍵區別。" },
        { name: "螯肢", desc: "口前的一對附肢，末端為毒牙，用以捕食注毒。" },
        { name: "單眼", desc: "多為八個單眼組成的眼群，感光辨影。" },
        { name: "絲疣", desc: "腹端的紡絲器官，將絲腺分泌的液態蛋白抽成蛛絲。" }
      ]
    }
  ]
});

/* ============ 蝦 shrimp ============ */
window.ANATOMY.register({
  id: "shrimp",
  name: "蝦",
  latin: "Caridea",
  emoji: "🦐",
  kingdom: "animalia",
  group: "crustaceans",
  rank: "軟甲綱・十足目",
  summary: "蝦屬甲殼類，全身覆以幾丁質外骨骼。頭胸部被頭胸甲包覆，具長觸角與步足；腹部分節、下方有游泳足，末端尾扇可彈跳逃逸。",
  views: [
    {
      id: "external",
      name: "側面外形",
      viewBox: "0 0 460 300",
      svg: `
<defs>
  <linearGradient id="shrimp-body" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f2a48c"/><stop offset="50%" stop-color="#e07a5a"/><stop offset="100%" stop-color="#b34a34"/>
  </linearGradient>
  <linearGradient id="shrimp-carapace" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f6b8a0"/><stop offset="100%" stop-color="#c25a3e"/>
  </linearGradient>
  <linearGradient id="shrimp-tail" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#e88a68"/><stop offset="100%" stop-color="#a8402c"/>
  </linearGradient>
</defs>
<!-- 腹部體節（彎曲蝦身） -->
<path data-part="腹部" d="M300 120
  Q360 120 400 165
  Q420 190 405 215
  Q385 200 360 190
  Q330 178 300 172 Z" fill="url(#shrimp-body)" stroke="#8f2f1f" stroke-width="2"/>
<g stroke="#a83a26" stroke-width="1.5" fill="none" opacity="0.7">
  <path d="M315 122 Q322 150 318 170"/>
  <path d="M335 126 Q344 152 338 176"/>
  <path d="M356 134 Q366 158 358 182"/>
  <path d="M376 146 Q386 168 378 190"/>
</g>
<!-- 頭胸甲 -->
<path data-part="頭胸甲" d="M180 100
  Q250 95 300 118
  L300 172
  Q250 185 195 175
  Q160 168 150 140
  Q160 112 180 100 Z" fill="url(#shrimp-carapace)" stroke="#8f2f1f" stroke-width="2"/>
<!-- 額劍 -->
<path d="M180 100 L120 78 L128 88 L182 108 Z" fill="url(#shrimp-carapace)" stroke="#8f2f1f" stroke-width="1"/>
<!-- 眼 -->
<circle cx="168" cy="118" r="9" fill="#2a1a12"/><circle cx="165" cy="115" r="3" fill="#7a5040"/>
<!-- 觸角 -->
<g data-part="觸角" stroke="#b34a34" stroke-width="2.5" fill="none" stroke-linecap="round">
  <path d="M150 122 Q80 90 20 70"/>
  <path d="M155 132 Q95 118 35 118"/>
  <path d="M148 138 Q100 150 60 168"/>
</g>
<!-- 步足 -->
<g data-part="步足" stroke="#a8402c" stroke-width="3" fill="none" stroke-linecap="round">
  <path d="M200 175 L192 220 L182 245"/>
  <path d="M222 178 L218 222 L210 248"/>
  <path d="M244 180 L244 224 L240 250"/>
  <path d="M266 178 L272 222 L272 250"/>
</g>
<!-- 游泳足 -->
<g data-part="游泳足" fill="#c86048" stroke="#8f2f1f" stroke-width="1">
  <path d="M312 172 Q316 205 306 228 Q300 205 300 175 Z"/>
  <path d="M332 176 Q338 208 328 232 Q320 208 320 178 Z"/>
  <path d="M352 182 Q360 214 350 238 Q342 212 342 184 Z"/>
</g>
<!-- 尾扇 -->
<g data-part="尾扇" fill="url(#shrimp-tail)" stroke="#8f2f1f" stroke-width="1.5">
  <path d="M405 215 L448 190 L446 210 L410 222 Z"/>
  <path d="M405 215 L452 218 L448 236 L408 228 Z"/>
  <path d="M405 215 L438 250 L426 258 L404 226 Z"/>
</g>
<g class="labels">
  <line x1="230" y1="110" x2="250" y2="55" stroke="#666" stroke-width="1"/>
  <text x="220" y="48" font-size="13" fill="var(--ink)">頭胸甲</text>
  <line x1="340" y1="140" x2="380" y2="100" stroke="#666" stroke-width="1"/>
  <text x="360" y="94" font-size="13" fill="var(--ink)">腹部（體節）</text>
  <line x1="60" y1="80" x2="30" y2="45" stroke="#666" stroke-width="1"/>
  <text x="18" y="38" font-size="13" fill="var(--ink)">觸角</text>
  <line x1="215" y1="235" x2="215" y2="278" stroke="#666" stroke-width="1"/>
  <text x="175" y="292" font-size="13" fill="var(--ink)">步足</text>
  <line x1="325" y1="225" x2="325" y2="270" stroke="#666" stroke-width="1"/>
  <text x="300" y="284" font-size="13" fill="var(--ink)">游泳足</text>
  <line x1="440" y1="225" x2="452" y2="262" stroke="#666" stroke-width="1"/>
  <text x="420" y="278" font-size="13" fill="var(--ink)">尾扇</text>
  <line x1="168" y1="118" x2="140" y2="90" stroke="#666" stroke-width="1"/>
  <text x="96" y="84" font-size="13" fill="var(--ink)">複眼</text>
</g>`,
      parts: [
        { name: "頭胸甲", desc: "包覆頭胸部的甲殼，前端延伸為鋸齒狀額劍，是幾丁質外骨骼。" },
        { name: "腹部", desc: "由多個可活動體節組成，肌肉發達，可急速屈曲產生彈跳逃逸。" },
        { name: "觸角", desc: "兩對長觸角，司觸覺與化學感覺，探測周遭環境。" },
        { name: "步足", desc: "頭胸部下方的行走足，共五對（十足目名稱由來）。" },
        { name: "游泳足", desc: "腹部下方成對的槳狀附肢，划水前進並攜卵。" },
        { name: "尾扇", desc: "尾節與尾肢構成扇形，屈腹拍水可快速後彈。" },
        { name: "複眼", desc: "具柄的複眼，由眾多小眼組成，視野寬廣。" }
      ]
    }
  ]
});

/* ============ 螃蟹 crab ============ */
window.ANATOMY.register({
  id: "crab",
  name: "螃蟹",
  latin: "Brachyura",
  emoji: "🦀",
  kingdom: "animalia",
  group: "crustaceans",
  rank: "軟甲綱・十足目短尾下目",
  summary: "螃蟹是短尾的甲殼類，寬闊的頭胸甲下腹部退化並反折於腹面。第一對步足特化為強壯的螯，其餘四對步足供橫行。",
  views: [
    {
      id: "external",
      name: "背面外形",
      viewBox: "0 0 440 380",
      svg: `
<defs>
  <radialGradient id="crab-shell" cx="45%" cy="35%" r="75%">
    <stop offset="0%" stop-color="#e8683f"/><stop offset="55%" stop-color="#c94a26"/><stop offset="100%" stop-color="#8f2f18"/>
  </radialGradient>
  <linearGradient id="crab-claw" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#e06a40"/><stop offset="100%" stop-color="#992f18"/>
  </linearGradient>
  <linearGradient id="crab-leg" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#d55c34"/><stop offset="100%" stop-color="#8a2c16"/>
  </linearGradient>
</defs>
<!-- 步足（四對） -->
<g stroke="url(#crab-leg)" stroke-width="11" fill="none" stroke-linecap="round" data-part="步足">
  <path d="M150 200 L80 170 L30 185"/>
  <path d="M150 225 L70 215 L22 240"/>
  <path d="M150 250 L74 265 L30 300"/>
  <path d="M155 270 L90 315 L58 350"/>
  <path d="M290 200 L360 170 L410 185"/>
  <path d="M290 225 L370 215 L418 240"/>
  <path d="M290 250 L366 265 L410 300"/>
  <path d="M285 270 L350 315 L382 350"/>
</g>
<!-- 頭胸甲 -->
<path data-part="頭胸甲" d="M120 210
  Q120 130 220 122
  Q320 130 320 210
  Q320 275 220 290
  Q120 275 120 210 Z" fill="url(#crab-shell)" stroke="#6d2311" stroke-width="2.5"/>
<path d="M150 160 Q220 140 290 160" stroke="#7a2712" stroke-width="2" fill="none" opacity="0.6"/>
<g fill="#7a2712" opacity="0.5">
  <circle cx="175" cy="200" r="5"/><circle cx="265" cy="200" r="5"/><circle cx="220" cy="230" r="5"/>
</g>
<!-- 眼柄與複眼 -->
<g data-part="複眼">
  <path d="M195 128 L188 108 M245 128 L252 108" stroke="#8a2c16" stroke-width="5"/>
  <circle cx="187" cy="104" r="6" fill="#1e1210"/><circle cx="253" cy="104" r="6" fill="#1e1210"/>
</g>
<!-- 螯（第一對步足特化） -->
<g data-part="螯">
  <!-- 左螯 -->
  <path d="M135 200 Q95 175 70 185 Q50 195 60 215 Q75 230 100 222 L120 212 Z" fill="url(#crab-claw)" stroke="#6d2311" stroke-width="2"/>
  <path d="M60 200 Q40 195 32 205 Q42 218 62 214 Z" fill="#b64226" stroke="#6d2311" stroke-width="1.5"/>
  <!-- 右螯 -->
  <path d="M305 200 Q345 175 370 185 Q390 195 380 215 Q365 230 340 222 L320 212 Z" fill="url(#crab-claw)" stroke="#6d2311" stroke-width="2"/>
  <path d="M380 200 Q400 195 408 205 Q398 218 378 214 Z" fill="#b64226" stroke="#6d2311" stroke-width="1.5"/>
</g>
<g class="labels">
  <line x1="220" y1="180" x2="220" y2="60" stroke="#666" stroke-width="1"/>
  <text x="185" y="52" font-size="13" fill="var(--ink)">頭胸甲</text>
  <line x1="55" y1="205" x2="30" y2="150" stroke="#666" stroke-width="1"/>
  <text x="14" y="143" font-size="13" fill="var(--ink)">螯</text>
  <line x1="80" y1="170" x2="45" y2="130" stroke="#666" stroke-width="1"/>
  <text x="14" y="123" font-size="13" fill="var(--ink)">步足（四對）</text>
  <line x1="253" y1="104" x2="300" y2="70" stroke="#666" stroke-width="1"/>
  <text x="300" y="64" font-size="13" fill="var(--ink)">複眼（具柄）</text>
</g>`,
      parts: [
        { name: "頭胸甲", desc: "寬扁堅硬的背甲，保護內部器官；短尾類的腹部退化並反折於腹面。" },
        { name: "螯", desc: "第一對步足特化成的鉗子，用於防禦、捕食與求偶。" },
        { name: "步足", desc: "其餘四對行走足，關節側向活動，故螃蟹橫行。" },
        { name: "複眼", desc: "位於可轉動眼柄上的複眼，能收起藏入甲殼凹窩。" }
      ]
    }
  ]
});

/* ============ 章魚 octopus ============ */
window.ANATOMY.register({
  id: "octopus",
  name: "章魚",
  latin: "Octopoda",
  emoji: "🐙",
  kingdom: "animalia",
  group: "mollusks",
  rank: "頭足綱・八腕目",
  summary: "章魚是高智能的頭足類軟體動物，具八條佈滿吸盤的腕與發達的腦。外套膜內含鰓、墨囊與三個心臟；靠漏斗噴水推進，遇敵噴墨逃逸。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 400 440",
      svg: `
<defs>
  <radialGradient id="octo-mantle" cx="45%" cy="30%" r="75%">
    <stop offset="0%" stop-color="#d97a86"/><stop offset="55%" stop-color="#b8505e"/><stop offset="100%" stop-color="#7d2f3a"/>
  </radialGradient>
  <linearGradient id="octo-arm" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#c9636f"/><stop offset="100%" stop-color="#8a3742"/>
  </linearGradient>
</defs>
<!-- 八腕 -->
<g data-part="八腕" fill="url(#octo-arm)" stroke="#6e2530" stroke-width="1.5">
  <path d="M175 240 Q120 300 70 340 Q55 355 68 366 Q82 356 130 320 Q170 285 190 250 Z"/>
  <path d="M185 250 Q150 330 120 400 Q112 418 128 420 Q140 405 165 345 Q188 290 198 258 Z"/>
  <path d="M200 255 Q195 345 200 415 Q202 430 214 418 Q216 350 214 258 Z"/>
  <path d="M225 250 Q260 330 290 400 Q298 418 282 420 Q270 405 245 345 Q222 290 212 258 Z"/>
  <path d="M235 240 Q290 300 340 340 Q355 355 342 366 Q328 356 280 320 Q240 285 220 250 Z"/>
  <path d="M165 235 Q90 265 45 275 Q28 280 38 294 Q56 290 118 270 Q170 252 185 244 Z"/>
  <path d="M245 235 Q320 265 365 275 Q382 280 372 294 Q354 290 292 270 Q240 252 225 244 Z"/>
  <path d="M205 258 Q205 300 206 350 Q207 366 200 360 Q198 320 198 260 Z" opacity="0.4"/>
</g>
<!-- 吸盤 -->
<g data-part="吸盤" fill="#eec6ca" stroke="#8a3742" stroke-width="0.8">
  <circle cx="150" cy="300" r="5"/><circle cx="118" cy="330" r="5"/><circle cx="92" cy="352" r="4"/>
  <circle cx="160" cy="345" r="5"/><circle cx="145" cy="385" r="4.5"/>
  <circle cx="205" cy="330" r="5"/><circle cx="207" cy="375" r="5"/><circle cx="206" cy="405" r="4"/>
  <circle cx="250" cy="345" r="5"/><circle cx="266" cy="385" r="4.5"/>
  <circle cx="250" cy="300" r="5"/><circle cx="282" cy="330" r="5"/><circle cx="308" cy="352" r="4"/>
  <circle cx="120" cy="272" r="4.5"/><circle cx="86" cy="284" r="4"/>
  <circle cx="280" cy="272" r="4.5"/><circle cx="314" cy="284" r="4"/>
</g>
<!-- 頭部 -->
<ellipse data-part="頭部" cx="200" cy="215" rx="62" ry="52" fill="url(#octo-mantle)" stroke="#5f2029" stroke-width="2"/>
<circle cx="176" cy="205" r="13" fill="#f3e9d0"/><circle cx="176" cy="205" r="6" fill="#1c140f"/>
<circle cx="224" cy="205" r="13" fill="#f3e9d0"/><circle cx="224" cy="205" r="6" fill="#1c140f"/>
<!-- 外套膜 -->
<path data-part="外套膜" d="M200 175 Q262 168 268 105 Q270 45 200 32 Q130 45 132 105 Q138 168 200 175 Z" fill="url(#octo-mantle)" stroke="#5f2029" stroke-width="2"/>
<!-- 漏斗 -->
<path data-part="漏斗" d="M182 240 Q168 262 176 280 Q192 288 208 280 Q216 262 202 240 Z" fill="#c05461" stroke="#5f2029" stroke-width="1.5"/>
<ellipse cx="192" cy="278" rx="9" ry="5" fill="#3a1a1f"/>
<g class="labels">
  <line x1="200" y1="70" x2="300" y2="55" stroke="#666" stroke-width="1"/>
  <text x="304" y="59" font-size="13" fill="var(--ink)">外套膜</text>
  <line x1="255" y1="215" x2="330" y2="200" stroke="#666" stroke-width="1"/>
  <text x="334" y="204" font-size="13" fill="var(--ink)">頭部</text>
  <line x1="188" y1="278" x2="80" y2="255" stroke="#666" stroke-width="1"/>
  <text x="18" y="252" font-size="13" fill="var(--ink)">漏斗</text>
  <line x1="290" y1="400" x2="340" y2="410" stroke="#666" stroke-width="1"/>
  <text x="300" y="426" font-size="13" fill="var(--ink)">八腕</text>
  <line x1="266" y1="385" x2="345" y2="360" stroke="#666" stroke-width="1"/>
  <text x="330" y="356" font-size="13" fill="var(--ink)">吸盤</text>
</g>`,
      parts: [
        { name: "外套膜", desc: "囊狀的肌肉外套，內藏鰓、心臟、消化與生殖器官，收縮以噴水。" },
        { name: "頭部", desc: "含發達的腦與一對大眼，是無脊椎動物中智力最高者之一。" },
        { name: "八腕", desc: "八條肌肉質的腕，可捲曲抓握、行走與探索，各具獨立神經節。" },
        { name: "吸盤", desc: "腕上成排的吸盤，能吸附、抓取並具味覺化學感受。" },
        { name: "漏斗", desc: "外套腔開口的肌肉管，噴出水流產生反作用力推進、也排墨與廢物。" }
      ]
    },
    {
      id: "internal",
      name: "內部構造",
      viewBox: "0 0 400 440",
      svg: `
<defs>
  <linearGradient id="octo-body2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e6c9bf"/><stop offset="100%" stop-color="#c69a8c"/>
  </linearGradient>
  <radialGradient id="octo-heart" cx="45%" cy="35%" r="70%">
    <stop offset="0%" stop-color="#c74a45"/><stop offset="100%" stop-color="#7d1f1c"/>
  </radialGradient>
  <linearGradient id="octo-gill" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#d98fa0"/><stop offset="100%" stop-color="#a24f60"/>
  </linearGradient>
</defs>
<!-- 外套膜輪廓（半透明） -->
<path d="M200 400 Q300 380 300 200 Q300 40 200 30 Q100 40 100 200 Q100 380 200 400 Z"
  fill="url(#octo-body2)" stroke="#9a7060" stroke-width="2" opacity="0.85"/>
<!-- 消化腺／消化道 -->
<path data-part="消化道" d="M200 300 Q188 240 200 170 Q212 110 200 70" stroke="#8a6a3a" stroke-width="10" fill="none" stroke-linecap="round"/>
<ellipse cx="200" cy="150" rx="34" ry="40" fill="#a9803f" stroke="#6e4d1f" stroke-width="1.5"/>
<!-- 墨囊 -->
<ellipse data-part="墨囊" cx="200" cy="260" rx="24" ry="34" fill="#241b28" stroke="#0f0a12" stroke-width="1.5"/>
<path d="M200 294 Q198 320 200 340" stroke="#241b28" stroke-width="5" fill="none"/>
<!-- 三心臟：中央體心臟 + 兩側鰓心臟 -->
<ellipse data-part="心臟" cx="200" cy="215" rx="20" ry="16" fill="url(#octo-heart)" stroke="#5c1614" stroke-width="1.5"/>
<circle cx="148" cy="225" r="13" fill="url(#octo-heart)" stroke="#5c1614" stroke-width="1.5"/>
<circle cx="252" cy="225" r="13" fill="url(#octo-heart)" stroke="#5c1614" stroke-width="1.5"/>
<!-- 鰓（一對） -->
<g data-part="鰓" fill="url(#octo-gill)" stroke="#7d3a48" stroke-width="1">
  <path d="M148 240 Q120 260 122 300 Q140 296 150 270 Q156 252 148 240 Z"/>
  <path d="M252 240 Q280 260 278 300 Q260 296 250 270 Q244 252 252 240 Z"/>
</g>
<g class="labels">
  <line x1="200" y1="150" x2="310" y2="130" stroke="#666" stroke-width="1"/>
  <text x="314" y="134" font-size="13" fill="var(--ink)">消化腺</text>
  <line x1="200" y1="215" x2="70" y2="190" stroke="#666" stroke-width="1"/>
  <text x="18" y="187" font-size="13" fill="var(--ink)">體心臟</text>
  <line x1="148" y1="225" x2="60" y2="240" stroke="#666" stroke-width="1"/>
  <text x="14" y="256" font-size="13" fill="var(--ink)">鰓心臟（一對）</text>
  <line x1="200" y1="260" x2="300" y2="270" stroke="#666" stroke-width="1"/>
  <text x="304" y="274" font-size="13" fill="var(--ink)">墨囊</text>
  <line x1="278" y1="290" x2="330" y2="310" stroke="#666" stroke-width="1"/>
  <text x="304" y="326" font-size="13" fill="var(--ink)">鰓</text>
</g>`,
      parts: [
        { name: "心臟", desc: "中央的體心臟推送富氧血至全身；配合兩個鰓心臟，共三個心臟。" },
        { name: "鰓", desc: "一對羽狀鰓進行氣體交換，兩側鰓心臟先將血泵入鰓提高效率。" },
        { name: "墨囊", desc: "分泌黑色墨汁，遇敵時經漏斗噴出形成煙幕掩護逃逸。" },
        { name: "消化道", desc: "由喙、齒舌、食道通往消化腺（肝胰臟）與腸道，消化吸收養分。" }
      ]
    }
  ]
});

/* ============ 蝸牛 snail ============ */
window.ANATOMY.register({
  id: "snail",
  name: "蝸牛",
  latin: "Gastropoda",
  emoji: "🐌",
  kingdom: "animalia",
  group: "mollusks",
  rank: "腹足綱・柄眼目",
  summary: "蝸牛是背負螺旋殼的腹足類軟體動物。頭部有兩對觸角，長觸角頂端具眼；肌肉質的腹足分泌黏液滑行；口腔內以銼刀狀的齒舌刮食。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 440 320",
      svg: `
<defs>
  <radialGradient id="snail-shell" cx="55%" cy="42%" r="65%">
    <stop offset="0%" stop-color="#e8c98f"/><stop offset="45%" stop-color="#c79a54"/><stop offset="100%" stop-color="#8a6329"/>
  </radialGradient>
  <linearGradient id="snail-foot" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d8b89a"/><stop offset="100%" stop-color="#a8876a"/>
  </linearGradient>
  <linearGradient id="snail-body" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#c9a586"/><stop offset="100%" stop-color="#9c7a5c"/>
  </linearGradient>
</defs>
<!-- 腹足 -->
<path data-part="腹足" d="M60 235 Q120 215 240 220 Q330 224 380 235 Q385 258 340 262 Q220 270 110 265 Q62 262 60 235 Z"
  fill="url(#snail-foot)" stroke="#7d6048" stroke-width="2"/>
<path d="M80 250 Q200 242 360 250" stroke="#8a6a50" stroke-width="1" fill="none" opacity="0.5"/>
<!-- 身體／頭部 -->
<path data-part="頭部" d="M60 235 Q40 200 70 175 Q100 160 130 175 Q150 190 148 220 Q120 232 60 235 Z"
  fill="url(#snail-body)" stroke="#7d6048" stroke-width="2"/>
<!-- 觸角（兩對） -->
<g data-part="觸角" stroke="#9c7a5c" stroke-width="6" fill="none" stroke-linecap="round">
  <path d="M78 178 Q60 140 55 112"/>
  <path d="M100 172 Q95 132 100 100"/>
</g>
<circle cx="55" cy="108" r="7" fill="#3a2a1c"/><circle cx="53" cy="106" r="2.5" fill="#c9a586"/>
<circle cx="100" cy="96" r="7" fill="#3a2a1c"/><circle cx="98" cy="94" r="2.5" fill="#c9a586"/>
<g stroke="#9c7a5c" stroke-width="3.5" fill="none" stroke-linecap="round">
  <path d="M62 200 Q48 195 40 200"/>
  <path d="M70 210 Q58 212 50 220"/>
</g>
<!-- 螺殼 -->
<g data-part="螺殼">
  <ellipse cx="270" cy="150" rx="120" ry="105" fill="url(#snail-shell)" stroke="#6e4f22" stroke-width="2.5"/>
  <path d="M270 150 Q300 90 260 60 Q210 45 190 100 Q180 145 220 165 Q262 178 278 138 Q288 110 262 100 Q240 96 238 122"
    fill="none" stroke="#6e4f22" stroke-width="2.5"/>
  <path d="M150 150 Q270 60 390 150" fill="none" stroke="#a8813e" stroke-width="1.5" opacity="0.6"/>
  <path d="M160 190 Q270 120 380 190" fill="none" stroke="#a8813e" stroke-width="1.5" opacity="0.5"/>
</g>
<!-- 齒舌位置（口部）示意 -->
<circle data-part="齒舌" cx="62" cy="205" r="7" fill="#7d3a3a" stroke="#4d1f1f" stroke-width="1"/>
<path d="M56 205 h12 M56 209 h12 M56 201 h12" stroke="#c98a8a" stroke-width="0.7"/>
<g class="labels">
  <line x1="290" y1="120" x2="360" y2="55" stroke="#666" stroke-width="1"/>
  <text x="330" y="48" font-size="13" fill="var(--ink)">螺殼</text>
  <line x1="200" y1="245" x2="220" y2="300" stroke="#666" stroke-width="1"/>
  <text x="185" y="314" font-size="13" fill="var(--ink)">腹足</text>
  <line x1="55" y1="108" x2="30" y2="70" stroke="#666" stroke-width="1"/>
  <text x="14" y="63" font-size="13" fill="var(--ink)">觸角（大眼觸角）</text>
  <line x1="90" y1="200" x2="120" y2="255" stroke="#666" stroke-width="1"/>
  <text x="105" y="270" font-size="13" fill="var(--ink)">頭部</text>
  <line x1="62" y1="205" x2="20" y2="180" stroke="#666" stroke-width="1"/>
  <text x="12" y="176" font-size="13" fill="var(--ink)">齒舌（口）</text>
</g>`,
      parts: [
        { name: "螺殼", desc: "碳酸鈣質的螺旋外殼，隨生長增大，遇險時軟體可縮回其中。" },
        { name: "腹足", desc: "腹面肌肉質的足，波狀收縮並分泌黏液，貼地緩慢滑行。" },
        { name: "觸角", desc: "兩對觸角；較長的一對頂端具眼（柄眼），司視覺與嗅覺。" },
        { name: "頭部", desc: "位於足前端，含口、觸角與腦神經節。" },
        { name: "齒舌", desc: "口腔內密布幾丁質小齒的帶狀構造，如銼刀刮取食物。" }
      ]
    }
  ]
});

/* ============ 蚯蚓 earthworm ============ */
window.ANATOMY.register({
  id: "earthworm",
  name: "蚯蚓",
  latin: "Lumbricina",
  emoji: "🪱",
  kingdom: "animalia",
  group: "annelids",
  rank: "環帶綱・單向蚓目",
  summary: "蚯蚓是環節動物，身體由許多相似體節串成，每節有剛毛助鑽行。前段的環帶負責生殖產卵；背血管與數對「心臟」（環血管）驅動封閉式循環。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 460 200",
      svg: `
<defs>
  <linearGradient id="worm-body" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d98a80"/><stop offset="50%" stop-color="#b85f56"/><stop offset="100%" stop-color="#8a3f38"/>
  </linearGradient>
  <linearGradient id="worm-clitellum" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e8b088"/><stop offset="100%" stop-color="#c07e50"/>
  </linearGradient>
</defs>
<!-- 蟲體 -->
<path d="M30 100 Q40 78 70 78 L400 82 Q430 84 430 100 Q430 116 400 118 L70 122 Q40 122 30 100 Z"
  fill="url(#worm-body)" stroke="#6e2e28" stroke-width="2"/>
<!-- 體節環紋 -->
<g data-part="體節" stroke="#7d332c" stroke-width="1.4" opacity="0.75">
  <path d="M78 80 Q76 100 80 120"/><path d="M96 80 Q94 100 98 120"/>
  <path d="M114 80 Q112 100 116 120"/><path d="M132 80 Q130 100 134 120"/>
  <path d="M150 80 Q148 100 152 120"/>
  <path d="M260 82 Q258 100 262 120"/><path d="M280 82 Q278 100 282 120"/>
  <path d="M300 82 Q298 100 302 120"/><path d="M320 82 Q318 100 322 120"/>
  <path d="M340 82 Q338 100 342 120"/><path d="M360 82 Q358 100 362 120"/>
  <path d="M380 82 Q378 100 382 120"/>
</g>
<!-- 環帶 -->
<path data-part="環帶" d="M170 79 Q168 100 172 121 L232 120 Q236 100 232 80 Z"
  fill="url(#worm-clitellum)" stroke="#a86636" stroke-width="1.5"/>
<!-- 前端（口）與背血管示意 -->
<ellipse cx="34" cy="100" rx="9" ry="13" fill="#9c4840" stroke="#6e2e28" stroke-width="1.5"/>
<path data-part="背血管" d="M46 92 Q240 84 420 92" stroke="#8f2f2a" stroke-width="2.5" fill="none" opacity="0.85"/>
<!-- 剛毛 -->
<g data-part="剛毛" stroke="#5a2620" stroke-width="1.2">
  <path d="M100 122 l-3 8 M120 123 l-3 8 M290 121 l-3 8 M310 121 l-3 8 M350 121 l-3 8"/>
  <path d="M100 78 l-3 -8 M290 80 l-3 -8 M350 80 l-3 -8"/>
</g>
<g class="labels">
  <line x1="120" y1="80" x2="120" y2="30" stroke="#666" stroke-width="1"/>
  <text x="95" y="24" font-size="13" fill="var(--ink)">體節</text>
  <line x1="200" y1="79" x2="200" y2="28" stroke="#666" stroke-width="1"/>
  <text x="176" y="22" font-size="13" fill="var(--ink)">環帶</text>
  <line x1="240" y1="86" x2="300" y2="45" stroke="#666" stroke-width="1"/>
  <text x="290" y="39" font-size="13" fill="var(--ink)">背血管</text>
  <line x1="97" y1="130" x2="90" y2="170" stroke="#666" stroke-width="1"/>
  <text x="70" y="184" font-size="13" fill="var(--ink)">剛毛</text>
  <line x1="34" y1="113" x2="30" y2="160" stroke="#666" stroke-width="1"/>
  <text x="12" y="174" font-size="13" fill="var(--ink)">口（前端）</text>
</g>`,
      parts: [
        { name: "體節", desc: "身體由眾多相似的環狀體節（分節）串成，是環節動物的核心特徵。" },
        { name: "環帶", desc: "體前段膨大的腺質環帶，交配後分泌黏液形成卵繭產卵。" },
        { name: "剛毛", desc: "各體節腹側的幾丁質剛毛，抵住土壁提供鑽行摩擦力。" },
        { name: "背血管", desc: "背側縱走的主血管，具收縮性，推動封閉式血液循環。" }
      ]
    },
    {
      id: "internal",
      name: "內部構造",
      viewBox: "0 0 460 220",
      svg: `
<defs>
  <linearGradient id="worm-body2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e6c1b4"/><stop offset="100%" stop-color="#c2907f"/>
  </linearGradient>
</defs>
<!-- 體壁輪廓 -->
<path d="M30 110 Q40 80 75 80 L410 84 Q438 86 438 110 Q438 134 410 136 L75 140 Q40 140 30 110 Z"
  fill="url(#worm-body2)" stroke="#9a6656" stroke-width="2" opacity="0.9"/>
<!-- 消化道 -->
<path data-part="消化道" d="M42 110 L120 110 Q135 110 138 100 Q140 92 155 92 L430 96"
  stroke="#8a6a3a" stroke-width="9" fill="none" stroke-linecap="round"/>
<ellipse cx="105" cy="110" rx="20" ry="15" fill="#b57a44" stroke="#6e4d1f" stroke-width="1.5"/>
<ellipse cx="150" cy="110" rx="16" ry="18" fill="#8a5a3a" stroke="#5c3a1f" stroke-width="1.5"/>
<!-- 背血管 -->
<path data-part="背血管" d="M44 92 Q240 82 432 90" stroke="#8f2f2a" stroke-width="4" fill="none"/>
<!-- 環血管（五對心臟） -->
<g data-part="心臟（環血管）" stroke="#a83a34" stroke-width="4.5" fill="none" stroke-linecap="round">
  <path d="M170 90 Q178 118 170 134"/>
  <path d="M186 90 Q194 118 186 134"/>
  <path d="M202 90 Q210 118 202 134"/>
  <path d="M218 90 Q226 118 218 134"/>
  <path d="M234 90 Q242 118 234 134"/>
</g>
<!-- 腹血管 -->
<path d="M46 128 Q240 138 430 130" stroke="#c98a4a" stroke-width="2.5" fill="none" opacity="0.7"/>
<g class="labels">
  <line x1="105" y1="110" x2="105" y2="60" stroke="#666" stroke-width="1"/>
  <text x="70" y="54" font-size="13" fill="var(--ink)">咽／消化道</text>
  <line x1="240" y1="84" x2="300" y2="45" stroke="#666" stroke-width="1"/>
  <text x="285" y="39" font-size="13" fill="var(--ink)">背血管</text>
  <line x1="202" y1="90" x2="150" y2="185" stroke="#666" stroke-width="1"/>
  <text x="95" y="200" font-size="13" fill="var(--ink)">五對心臟（環血管）</text>
  <line x1="240" y1="134" x2="330" y2="170" stroke="#666" stroke-width="1"/>
  <text x="310" y="186" font-size="13" fill="var(--ink)">腹血管</text>
</g>`,
      parts: [
        { name: "消化道", desc: "由口、咽、食道、砂囊到腸的直管，貫穿全身消化土中有機質。" },
        { name: "背血管", desc: "背側主血管，血液由後往前流動並具搏動性。" },
        { name: "心臟（環血管）", desc: "環繞食道的數對（約五對）搏動性環血管，連接背腹血管推送血液。" },
        { name: "背血管", desc: "封閉式循環的主動脈，配合腹血管形成完整血流回路。" }
      ]
    }
  ]
});

/* ============ 海星 starfish ============ */
window.ANATOMY.register({
  id: "starfish",
  name: "海星",
  latin: "Asteroidea",
  emoji: "⭐",
  kingdom: "animalia",
  group: "echinoderms",
  rank: "海星綱",
  summary: "海星是五輻對稱的棘皮動物，通常具五條腕。腕腹面成排的管足由獨特的水管系統以水壓驅動，用於移動、抓握與翻開貝殼取食。",
  views: [
    {
      id: "external",
      name: "口面外形",
      viewBox: "0 0 420 420",
      svg: `
<defs>
  <radialGradient id="star-body" cx="50%" cy="45%" r="60%">
    <stop offset="0%" stop-color="#f0a24a"/><stop offset="55%" stop-color="#d9782a"/><stop offset="100%" stop-color="#a84e14"/>
  </radialGradient>
</defs>
<!-- 五腕星體 -->
<path data-part="腕" d="M210 30
  L252 158 L390 158 L280 240 L322 375 L210 292
  L98 375 L140 240 L30 158 L168 158 Z"
  fill="url(#star-body)" stroke="#7d3a0e" stroke-width="2.5" stroke-linejoin="round"/>
<!-- 疣突質感 -->
<g fill="#b85e1c" opacity="0.55">
  <circle cx="210" cy="90" r="4"/><circle cx="210" cy="130" r="4"/>
  <circle cx="300" cy="180" r="4"/><circle cx="270" cy="215" r="4"/>
  <circle cx="120" cy="180" r="4"/><circle cx="150" cy="215" r="4"/>
  <circle cx="260" cy="300" r="4"/><circle cx="160" cy="300" r="4"/>
</g>
<!-- 中央盤 -->
<circle data-part="中央盤" cx="210" cy="205" r="42" fill="url(#star-body)" stroke="#7d3a0e" stroke-width="2"/>
<!-- 篩板 -->
<circle data-part="篩板" cx="240" cy="180" r="8" fill="#e8d29a" stroke="#8a6a2a" stroke-width="1.2"/>
<path d="M235 176 l10 8 M245 176 l-10 8 M240 172 v16" stroke="#8a6a2a" stroke-width="0.6"/>
<!-- 口（中央） -->
<circle cx="210" cy="205" r="12" fill="#5c2a0c"/>
<!-- 管足（沿各腕步帶溝成排） -->
<g data-part="管足" fill="#f3c98a" stroke="#a86a2a" stroke-width="0.8">
  <circle cx="210" cy="120" r="4"/><circle cx="210" cy="140" r="4"/><circle cx="210" cy="160" r="4"/>
  <circle cx="272" cy="178" r="4"/><circle cx="288" cy="192" r="4"/><circle cx="256" cy="200" r="4"/>
  <circle cx="148" cy="178" r="4"/><circle cx="132" cy="192" r="4"/><circle cx="164" cy="200" r="4"/>
  <circle cx="250" cy="272" r="4"/><circle cx="236" cy="252" r="4"/>
  <circle cx="170" cy="272" r="4"/><circle cx="184" cy="252" r="4"/>
</g>
<g class="labels">
  <line x1="210" y1="60" x2="210" y2="18" stroke="#666" stroke-width="1"/>
  <text x="185" y="14" font-size="13" fill="var(--ink)">腕（五輻）</text>
  <line x1="210" y1="205" x2="70" y2="230" stroke="#666" stroke-width="1"/>
  <text x="14" y="234" font-size="13" fill="var(--ink)">中央盤・口</text>
  <line x1="248" y1="180" x2="340" y2="150" stroke="#666" stroke-width="1"/>
  <text x="320" y="144" font-size="13" fill="var(--ink)">篩板</text>
  <line x1="210" y1="140" x2="330" y2="120" stroke="#666" stroke-width="1"/>
  <text x="334" y="124" font-size="13" fill="var(--ink)">管足</text>
</g>`,
      parts: [
        { name: "腕", desc: "通常五條的腕呈五輻對稱輻射自中央盤，具再生能力。" },
        { name: "中央盤", desc: "身體中央的圓盤，口面朝下，各系統在此匯集。" },
        { name: "管足", desc: "腕腹面步帶溝內成排的管足，以水壓伸縮、末端吸盤吸附而移動與取食。" },
        { name: "篩板", desc: "反口面的篩狀板，是水管系統與外界海水交換的入口。" }
      ]
    },
    {
      id: "internal",
      name: "水管系統",
      viewBox: "0 0 420 420",
      svg: `
<defs>
  <radialGradient id="star-body2" cx="50%" cy="45%" r="60%">
    <stop offset="0%" stop-color="#f5d3a0"/><stop offset="100%" stop-color="#d9a86a"/>
  </radialGradient>
</defs>
<!-- 半透明星體 -->
<path d="M210 30 L252 158 L390 158 L280 240 L322 375 L210 292 L98 375 L140 240 L30 158 L168 158 Z"
  fill="url(#star-body2)" stroke="#a8814e" stroke-width="2" opacity="0.55"/>
<!-- 環水管 -->
<circle data-part="環水管" cx="210" cy="205" r="34" fill="none" stroke="#2f7fb0" stroke-width="6"/>
<!-- 輻水管（伸入五腕） -->
<g data-part="輻水管" stroke="#3f97c8" stroke-width="4.5" fill="none" stroke-linecap="round">
  <path d="M210 172 L210 70"/>
  <path d="M238 190 L300 178"/>
  <path d="M182 190 L120 178"/>
  <path d="M232 232 L270 320"/>
  <path d="M188 232 L150 320"/>
</g>
<!-- 側管與管足（水壓驅動） -->
<g data-part="管足" fill="#a8d4ea" stroke="#2f7fb0" stroke-width="0.8">
  <circle cx="210" cy="110" r="4"/><circle cx="210" cy="135" r="4"/>
  <circle cx="280" cy="176" r="4"/><circle cx="258" cy="182" r="4"/>
  <circle cx="140" cy="176" r="4"/><circle cx="162" cy="182" r="4"/>
  <circle cx="258" cy="290" r="4"/><circle cx="162" cy="290" r="4"/>
</g>
<!-- 石管連篩板 -->
<path data-part="石管" d="M232 195 Q244 186 244 178" stroke="#5a8a3a" stroke-width="4" fill="none"/>
<circle data-part="篩板" cx="244" cy="176" r="8" fill="#e8d29a" stroke="#8a6a2a" stroke-width="1.2"/>
<circle cx="210" cy="205" r="10" fill="#5c2a0c"/>
<g class="labels">
  <line x1="176" y1="205" x2="60" y2="230" stroke="#666" stroke-width="1"/>
  <text x="14" y="234" font-size="13" fill="var(--ink)">環水管</text>
  <line x1="210" y1="90" x2="320" y2="70" stroke="#666" stroke-width="1"/>
  <text x="304" y="64" font-size="13" fill="var(--ink)">輻水管</text>
  <line x1="244" y1="176" x2="340" y2="150" stroke="#666" stroke-width="1"/>
  <text x="320" y="144" font-size="13" fill="var(--ink)">篩板・石管</text>
  <line x1="210" y1="135" x2="90" y2="120" stroke="#666" stroke-width="1"/>
  <text x="22" y="116" font-size="13" fill="var(--ink)">管足（水壓驅動）</text>
</g>`,
      parts: [
        { name: "環水管", desc: "圍繞口部的環狀水管，是水管系統的中樞。" },
        { name: "輻水管", desc: "自環水管伸入每條腕的水管，沿途分出側管接管足。" },
        { name: "石管", desc: "連接環水管與篩板的鈣質管道，調節系統內海水。" },
        { name: "篩板", desc: "反口面的篩狀入水口，海水由此進入水管系統。" },
        { name: "管足", desc: "由水管系統以水壓充盈與收縮驅動，實現移動與抓握。" }
      ]
    }
  ]
});

/* ============ 水母 jellyfish ============ */
window.ANATOMY.register({
  id: "jellyfish",
  name: "水母",
  latin: "Medusozoa",
  emoji: "🪼",
  kingdom: "animalia",
  group: "cnidarians",
  rank: "刺胞動物門・水母亞門",
  summary: "水母是輻射對稱的刺胞動物，膠質傘體靠收縮噴水游動。傘緣的觸手佈滿刺絲胞（螫細胞），觸碰即射出毒絲麻痺獵物；口腕將食物送入中央的口。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 400 440",
      svg: `
<defs>
  <radialGradient id="jelly-bell" cx="50%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#cfe4f5" stop-opacity="0.95"/>
    <stop offset="55%" stop-color="#9db8dc" stop-opacity="0.85"/>
    <stop offset="100%" stop-color="#6f8cc0" stop-opacity="0.8"/>
  </radialGradient>
  <linearGradient id="jelly-oral" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e5b8d8"/><stop offset="100%" stop-color="#b06a9a"/>
  </linearGradient>
  <linearGradient id="jelly-tent" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#cdd9ec"/><stop offset="100%" stop-color="#8aa0c8" stop-opacity="0.6"/>
  </linearGradient>
</defs>
<!-- 傘體 -->
<path data-part="傘體" d="M70 175
  Q70 55 200 50
  Q330 55 330 175
  Q300 205 260 195
  Q230 210 200 198
  Q170 210 140 195
  Q100 205 70 175 Z"
  fill="url(#jelly-bell)" stroke="#5f7bad" stroke-width="2"/>
<!-- 傘內生殖腺（輻射對稱四環） -->
<g fill="#c98ab0" opacity="0.6" stroke="#a86a92" stroke-width="1">
  <ellipse cx="160" cy="120" rx="20" ry="30"/>
  <ellipse cx="240" cy="120" rx="20" ry="30"/>
  <ellipse cx="200" cy="100" rx="18" ry="26"/>
  <ellipse cx="200" cy="150" rx="18" ry="24"/>
</g>
<path d="M90 120 Q200 80 310 120" stroke="#7f97c4" stroke-width="1" fill="none" opacity="0.5"/>
<!-- 口腕 -->
<g data-part="口腕" fill="url(#jelly-oral)" stroke="#93507e" stroke-width="1.2">
  <path d="M185 195 Q170 280 150 340 Q160 350 175 340 Q188 270 200 200 Z"/>
  <path d="M215 195 Q230 280 250 340 Q240 350 225 340 Q212 270 200 200 Z"/>
  <path d="M200 200 Q198 290 195 355 Q205 360 208 350 Q210 280 210 200 Z"/>
</g>
<!-- 觸手 -->
<g data-part="觸手" stroke="url(#jelly-tent)" stroke-width="2.5" fill="none" stroke-linecap="round">
  <path d="M78 190 Q60 300 70 400"/>
  <path d="M110 198 Q95 310 108 410"/>
  <path d="M145 200 Q135 320 150 420"/>
  <path d="M255 200 Q265 320 250 420"/>
  <path d="M290 198 Q305 310 292 410"/>
  <path d="M322 190 Q340 300 330 400"/>
</g>
<!-- 刺絲胞（觸手上分佈） -->
<g data-part="刺絲胞" fill="#5f7bad">
  <circle cx="66" cy="280" r="3"/><circle cx="72" cy="340" r="3"/>
  <circle cx="100" cy="300" r="3"/><circle cx="112" cy="370" r="3"/>
  <circle cx="140" cy="310" r="3"/><circle cx="152" cy="380" r="3"/>
  <circle cx="252" cy="310" r="3"/><circle cx="248" cy="380" r="3"/>
  <circle cx="300" cy="300" r="3"/><circle cx="292" cy="370" r="3"/>
  <circle cx="332" cy="280" r="3"/><circle cx="328" cy="340" r="3"/>
</g>
<g class="labels">
  <line x1="270" y1="100" x2="350" y2="70" stroke="#666" stroke-width="1"/>
  <text x="330" y="64" font-size="13" fill="var(--ink)">傘體</text>
  <line x1="200" y1="130" x2="60" y2="120" stroke="#666" stroke-width="1"/>
  <text x="14" y="116" font-size="13" fill="var(--ink)">生殖腺（四輻）</text>
  <line x1="200" y1="300" x2="300" y2="320" stroke="#666" stroke-width="1"/>
  <text x="304" y="324" font-size="13" fill="var(--ink)">口腕</text>
  <line x1="108" y1="360" x2="40" y2="380" stroke="#666" stroke-width="1"/>
  <text x="12" y="384" font-size="13" fill="var(--ink)">觸手</text>
  <line x1="332" y1="340" x2="360" y2="370" stroke="#666" stroke-width="1"/>
  <text x="300" y="404" font-size="13" fill="var(--ink)">刺絲胞</text>
</g>`,
      parts: [
        { name: "傘體", desc: "膠質的鐘形傘，肌肉環收縮噴水產生反作用力推進游動。" },
        { name: "觸手", desc: "傘緣下垂的細長觸手，佈滿刺絲胞，用以捕食與防禦。" },
        { name: "刺絲胞", desc: "刺胞動物特有的螫細胞，受刺激即彈射毒絲麻痺獵物。" },
        { name: "口腕", desc: "中央口周圍的口腕（口葉），輸送被麻痺的獵物入口。" }
      ]
    }
  ]
});
