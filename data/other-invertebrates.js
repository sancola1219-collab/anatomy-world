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
  <radialGradient id="spider-ext-ceph" cx="40%" cy="34%" r="72%">
    <stop offset="0%" stop-color="#7a5638"/><stop offset="55%" stop-color="#4d3320"/><stop offset="100%" stop-color="#2a1a0e"/>
  </radialGradient>
  <radialGradient id="spider-ext-abdo" cx="42%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#8a6440"/><stop offset="45%" stop-color="#5c3d22"/><stop offset="100%" stop-color="#241505"/>
  </radialGradient>
  <linearGradient id="spider-ext-leg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#6a4830"/><stop offset="100%" stop-color="#281808"/>
  </linearGradient>
  <radialGradient id="spider-ext-eye" cx="38%" cy="34%" r="70%">
    <stop offset="0%" stop-color="#5a5a66"/><stop offset="60%" stop-color="#1c1c22"/><stop offset="100%" stop-color="#080808"/>
  </radialGradient>
</defs>
<!-- 步足（八足，四對；分節＋末端漸細，近前對前伸、後對後展） -->
<g fill="none" stroke-linecap="round" data-part="步足">
  <!-- 左側四足 -->
  <path d="M176 222 Q120 190 78 158 Q52 140 34 128" stroke="url(#spider-ext-leg)" stroke-width="7"/>
  <path d="M176 240 Q112 226 66 214 Q42 208 24 204" stroke="url(#spider-ext-leg)" stroke-width="7"/>
  <path d="M176 258 Q116 274 74 292 Q48 302 30 312" stroke="url(#spider-ext-leg)" stroke-width="6.5"/>
  <path d="M182 276 Q126 312 90 340 Q68 356 52 368" stroke="url(#spider-ext-leg)" stroke-width="6"/>
  <!-- 右側四足 -->
  <path d="M244 222 Q300 190 342 158 Q368 140 386 128" stroke="url(#spider-ext-leg)" stroke-width="7"/>
  <path d="M244 240 Q308 226 354 214 Q378 208 396 204" stroke="url(#spider-ext-leg)" stroke-width="7"/>
  <path d="M244 258 Q304 274 346 292 Q372 302 390 312" stroke="url(#spider-ext-leg)" stroke-width="6.5"/>
  <path d="M238 276 Q294 312 330 340 Q352 356 368 368" stroke="url(#spider-ext-leg)" stroke-width="6"/>
</g>
<!-- 步足關節高光 -->
<g fill="none" stroke="#a07a54" stroke-width="1.6" opacity="0.5" stroke-linecap="round">
  <path d="M120 189 Q118 185 122 182"/><path d="M300 189 Q302 185 298 182"/>
  <path d="M110 224 Q108 220 113 218"/><path d="M310 224 Q312 220 307 218"/>
</g>
<!-- 腹部（卵形、後端稍尖，帶葉狀斑紋） -->
<path data-part="腹部" d="M210 224
  Q262 232 278 300
  Q272 358 236 390
  Q210 404 184 390
  Q148 358 142 300
  Q158 232 210 224 Z"
  fill="url(#spider-ext-abdo)" stroke="#1f1206" stroke-width="1.7"/>
<!-- 腹部背中線斑紋（人字葉紋） -->
<path d="M210 236 Q222 300 210 384 Q198 300 210 236 Z" fill="#2e1c0d" opacity="0.5"/>
<g fill="#3d2610" opacity="0.55">
  <path d="M210 268 Q232 280 240 300 Q220 292 210 284 Q200 292 180 300 Q188 280 210 268 Z"/>
  <path d="M210 316 Q228 326 234 342 Q218 336 210 330 Q202 336 186 342 Q192 326 210 316 Z"/>
</g>
<!-- 絨毛質感（腹部細短毛） -->
<g stroke="#5c3d22" stroke-width="0.8" opacity="0.45" stroke-linecap="round">
  <path d="M172 260 l-6 -5 M188 246 l-3 -7 M232 246 l3 -7 M248 260 l6 -5"/>
  <path d="M160 300 l-8 0 M260 300 l8 0 M176 350 l-6 5 M244 350 l6 5"/>
</g>
<!-- 細腰 -->
<path d="M198 222 Q210 214 222 222 Q216 230 210 230 Q204 230 198 222 Z" fill="#3a2413"/>
<!-- 頭胸部（背甲，前窄後圓，帶放射溝與絨毛） -->
<path data-part="頭胸部" d="M210 184
  Q252 186 262 224
  Q258 258 210 268
  Q162 258 158 224
  Q168 186 210 184 Z"
  fill="url(#spider-ext-ceph)" stroke="#1a0f06" stroke-width="1.7"/>
<path d="M210 200 Q210 236 210 262" stroke="#2a1a0d" stroke-width="1.4" opacity="0.6" fill="none"/>
<g stroke="#2a1a0d" stroke-width="1" opacity="0.5" fill="none">
  <path d="M210 226 Q186 236 172 250"/><path d="M210 226 Q234 236 248 250"/>
  <path d="M210 226 Q192 246 184 262"/><path d="M210 226 Q228 246 236 262"/>
</g>
<!-- 頭胸部絨毛高光 -->
<ellipse cx="200" cy="204" rx="24" ry="12" fill="#8a6440" opacity="0.3"/>
<!-- 單眼群（八眼，立體反光） -->
<g data-part="單眼">
  <circle cx="195" cy="196" r="5" fill="url(#spider-ext-eye)"/><circle cx="225" cy="196" r="5" fill="url(#spider-ext-eye)"/>
  <circle cx="186" cy="208" r="3.4" fill="url(#spider-ext-eye)"/><circle cx="234" cy="208" r="3.4" fill="url(#spider-ext-eye)"/>
  <circle cx="203" cy="189" r="3" fill="url(#spider-ext-eye)"/><circle cx="217" cy="189" r="3" fill="url(#spider-ext-eye)"/>
  <circle cx="192" cy="203" r="2.4" fill="url(#spider-ext-eye)"/><circle cx="228" cy="203" r="2.4" fill="url(#spider-ext-eye)"/>
  <circle cx="193.4" cy="194.4" r="1.4" fill="#e8e8f0" opacity="0.85"/><circle cx="223.4" cy="194.4" r="1.4" fill="#e8e8f0" opacity="0.85"/>
</g>
<!-- 螯肢（口前一對，末端毒牙） -->
<path data-part="螯肢" d="M196 264 Q188 288 195 304 M224 264 Q232 288 225 304" stroke="#33200f" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M195 304 Q192 312 196 318 M225 304 Q228 312 224 318" stroke="#7a1f1f" stroke-width="4" fill="none" stroke-linecap="round"/>
<!-- 觸肢（短，位於螯肢外側） -->
<path d="M178 246 Q148 256 134 276 M242 246 Q272 256 286 276" stroke="url(#spider-ext-leg)" stroke-width="5" fill="none" stroke-linecap="round"/>
<circle cx="134" cy="277" r="4" fill="#5c3d22"/><circle cx="286" cy="277" r="4" fill="#5c3d22"/>
<!-- 絲疣 -->
<g data-part="絲疣" fill="#3a2513">
  <ellipse cx="204" cy="388" rx="5" ry="9"/><ellipse cx="216" cy="388" rx="5" ry="9"/>
</g>
<path d="M210 396 L205 416 M210 396 L215 416" stroke="#d4d4d4" stroke-width="1" opacity="0.65"/>
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
  <linearGradient id="shrimp-ext-body" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f6b49c"/><stop offset="45%" stop-color="#e37c5c"/><stop offset="100%" stop-color="#a8402c"/>
  </linearGradient>
  <linearGradient id="shrimp-ext-carapace" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0%" stop-color="#facab4"/><stop offset="50%" stop-color="#e07a5a"/><stop offset="100%" stop-color="#b04a30"/>
  </linearGradient>
  <linearGradient id="shrimp-ext-tail" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#ec9070"/><stop offset="100%" stop-color="#9c3a26"/>
  </linearGradient>
  <radialGradient id="shrimp-ext-eye" cx="38%" cy="34%" r="70%">
    <stop offset="0%" stop-color="#6a4a3a"/><stop offset="55%" stop-color="#2a1810"/><stop offset="100%" stop-color="#0e0806"/>
  </radialGradient>
  <linearGradient id="shrimp-ext-seg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f3a488" stop-opacity="0.9"/><stop offset="100%" stop-color="#c05a40" stop-opacity="0.9"/>
  </linearGradient>
</defs>
<!-- 腹部體節（彎曲蝦身，分節疊瓦狀外骨骼） -->
<path data-part="腹部" d="M296 116
  Q356 116 398 160
  Q424 188 406 218
  Q392 232 372 224
  Q380 204 366 190
  Q334 176 300 172
  Q292 150 296 116 Z" fill="url(#shrimp-ext-body)" stroke="#8f2f1f" stroke-width="1.8"/>
<!-- 疊瓦狀體節分界（每節後緣覆蓋下節） -->
<g fill="url(#shrimp-ext-seg)" stroke="#a03826" stroke-width="1.2">
  <path d="M300 118 Q328 118 330 172 Q312 172 300 170 Q297 144 300 118 Z" opacity="0.55"/>
  <path d="M330 120 Q356 122 360 176 Q342 175 330 172 Q327 146 330 120 Z" opacity="0.5"/>
  <path d="M360 128 Q384 134 388 186 Q372 188 360 178 Q357 152 360 128 Z" opacity="0.5"/>
</g>
<g stroke="#8f2f1f" stroke-width="1.4" fill="none" opacity="0.7">
  <path d="M330 118 Q328 145 330 172"/>
  <path d="M360 124 Q358 152 360 178"/>
  <path d="M388 148 Q392 178 388 202"/>
</g>
<!-- 外骨骼光澤高光 -->
<path d="M312 124 Q356 132 392 168" stroke="#ffd9c6" stroke-width="3" fill="none" opacity="0.55" stroke-linecap="round"/>
<!-- 頭胸甲 -->
<path data-part="頭胸甲" d="M180 98
  Q252 92 300 116
  L300 172
  Q248 186 194 176
  Q158 168 148 138
  Q158 110 180 98 Z" fill="url(#shrimp-ext-carapace)" stroke="#8f2f1f" stroke-width="1.8"/>
<!-- 頭胸甲光澤帶 -->
<path d="M186 108 Q248 104 294 122" stroke="#ffe0d0" stroke-width="4" fill="none" opacity="0.5" stroke-linecap="round"/>
<path d="M170 150 Q230 160 296 162" stroke="#9c3a26" stroke-width="1.2" fill="none" opacity="0.6"/>
<!-- 額劍（前端鋸齒） -->
<path d="M180 98 L118 74 L126 84 L182 106 Z" fill="url(#shrimp-ext-carapace)" stroke="#8f2f1f" stroke-width="1"/>
<path d="M150 84 l-4 -5 M162 89 l-4 -5 M138 80 l-4 -5" stroke="#8f2f1f" stroke-width="1" opacity="0.7"/>
<!-- 複眼（具柄立體） -->
<g data-part="複眼">
  <path d="M166 122 Q158 116 160 110" stroke="#c25a3e" stroke-width="3" fill="none"/>
  <circle cx="164" cy="112" r="9" fill="url(#shrimp-ext-eye)"/><circle cx="161" cy="109" r="2.6" fill="#c9a08a" opacity="0.85"/>
</g>
<!-- 觸角（兩對長觸角） -->
<g data-part="觸角" stroke="#b34a34" stroke-width="2.5" fill="none" stroke-linecap="round">
  <path d="M150 118 Q78 84 18 62"/>
  <path d="M155 130 Q92 114 32 112"/>
  <path d="M148 140 Q98 152 58 172"/>
</g>
<!-- 步足（五對） -->
<g data-part="步足" stroke="#a8402c" stroke-width="3" fill="none" stroke-linecap="round">
  <path d="M190 176 L182 220 L172 246"/>
  <path d="M210 178 L204 222 L196 248"/>
  <path d="M232 180 L230 224 L224 250"/>
  <path d="M254 180 L256 224 L252 250"/>
  <path d="M276 176 L282 220 L282 248"/>
</g>
<!-- 游泳足（腹肢，槳狀成對） -->
<g data-part="游泳足" fill="#cc6450" stroke="#8f2f1f" stroke-width="1">
  <path d="M308 172 Q312 205 302 228 Q296 205 296 174 Z"/>
  <path d="M330 176 Q336 208 326 232 Q318 208 318 178 Z"/>
  <path d="M352 184 Q360 216 350 240 Q342 214 342 186 Z"/>
</g>
<!-- 尾扇（尾節＋尾肢展開） -->
<g data-part="尾扇" fill="url(#shrimp-ext-tail)" stroke="#8f2f1f" stroke-width="1.4">
  <path d="M406 218 L450 192 L448 214 L412 226 Z"/>
  <path d="M406 218 L454 222 L450 242 L410 232 Z"/>
  <path d="M406 218 L440 254 L428 262 L406 230 Z"/>
  <path d="M402 214 L406 254 L398 254 L396 220 Z"/>
</g>
<g stroke="#8f2f1f" stroke-width="0.8" opacity="0.5" fill="none">
  <path d="M414 200 L444 200 M414 218 L448 224 M410 232 L432 254"/>
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
  <radialGradient id="crab-ext-shell" cx="44%" cy="30%" r="78%">
    <stop offset="0%" stop-color="#ef7448"/><stop offset="50%" stop-color="#cc4c28"/><stop offset="100%" stop-color="#822a15"/>
  </radialGradient>
  <linearGradient id="crab-ext-claw" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#ea7448"/><stop offset="100%" stop-color="#8f2c16"/>
  </linearGradient>
  <linearGradient id="crab-ext-leg" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#dd6238"/><stop offset="100%" stop-color="#822814"/>
  </linearGradient>
  <radialGradient id="crab-ext-eye" cx="38%" cy="34%" r="70%">
    <stop offset="0%" stop-color="#4a3028"/><stop offset="60%" stop-color="#1c1210"/><stop offset="100%" stop-color="#080505"/>
  </radialGradient>
</defs>
<!-- 步足（四對，分節有膝節與尖爪節） -->
<g fill="none" stroke-linecap="round" data-part="步足">
  <path d="M150 198 Q108 182 78 168 Q52 156 32 182" stroke="url(#crab-ext-leg)" stroke-width="12"/>
  <path d="M150 224 Q98 216 66 212 Q40 210 22 238" stroke="url(#crab-ext-leg)" stroke-width="12"/>
  <path d="M150 250 Q100 260 72 266 Q46 272 30 300" stroke="url(#crab-ext-leg)" stroke-width="11"/>
  <path d="M156 270 Q108 300 90 316 Q66 336 58 352" stroke="url(#crab-ext-leg)" stroke-width="10"/>
  <path d="M290 198 Q332 182 362 168 Q388 156 408 182" stroke="url(#crab-ext-leg)" stroke-width="12"/>
  <path d="M290 224 Q342 216 374 212 Q400 210 418 238" stroke="url(#crab-ext-leg)" stroke-width="12"/>
  <path d="M290 250 Q340 260 368 266 Q394 272 410 300" stroke="url(#crab-ext-leg)" stroke-width="11"/>
  <path d="M284 270 Q332 300 350 316 Q374 336 382 352" stroke="url(#crab-ext-leg)" stroke-width="10"/>
</g>
<!-- 步足尖爪節與關節分界 -->
<g fill="none" stroke="#5a1c0d" stroke-width="1.6" opacity="0.6">
  <path d="M78 168 Q76 172 78 178"/><path d="M362 168 Q364 172 362 178"/>
  <path d="M66 212 Q64 216 66 222"/><path d="M374 212 Q376 216 374 222"/>
</g>
<g stroke="#3a1408" stroke-width="4" stroke-linecap="round">
  <path d="M32 182 l-8 4"/><path d="M22 238 l-9 2"/><path d="M30 300 l-8 6"/><path d="M58 352 l-6 8"/>
  <path d="M408 182 l8 4"/><path d="M418 238 l9 2"/><path d="M410 300 l8 6"/><path d="M382 352 l6 8"/>
</g>
<!-- 頭胸甲（寬扁橢圓，前緣鋸齒、隆起分區） -->
<path data-part="頭胸甲" d="M118 210
  Q118 128 220 118
  Q322 128 322 210
  Q322 278 220 292
  Q118 278 118 210 Z" fill="url(#crab-ext-shell)" stroke="#6a2210" stroke-width="2.4"/>
<!-- 前緣齒列 -->
<g stroke="#6a2210" stroke-width="1.4" opacity="0.7" fill="none">
  <path d="M160 138 l-4 -6 M180 130 l-3 -6 M200 126 l-2 -6 M240 126 l2 -6 M260 130 l3 -6 M280 138 l4 -6"/>
</g>
<!-- 甲面隆起分區（H 形溝與側區疣突高光） -->
<path d="M150 168 Q220 148 290 168" stroke="#7a2712" stroke-width="2" fill="none" opacity="0.55"/>
<path d="M195 178 Q220 172 245 178 Q248 210 245 240 Q220 246 195 240 Q192 210 195 178 Z" fill="#e0603a" opacity="0.35"/>
<ellipse cx="180" cy="200" rx="26" ry="20" fill="#e0603a" opacity="0.25"/>
<ellipse cx="260" cy="200" rx="26" ry="20" fill="#e0603a" opacity="0.25"/>
<g fill="#6a2210" opacity="0.45">
  <circle cx="172" cy="200" r="3.5"/><circle cx="268" cy="200" r="3.5"/><circle cx="220" cy="232" r="3.5"/>
  <circle cx="200" cy="215" r="2.6"/><circle cx="240" cy="215" r="2.6"/>
</g>
<!-- 甲面整體光澤 -->
<path d="M155 150 Q220 138 285 150" stroke="#ffb090" stroke-width="4" fill="none" opacity="0.4" stroke-linecap="round"/>
<!-- 眼柄與複眼（立體反光，可收入眼窩） -->
<g data-part="複眼">
  <path d="M196 128 L190 106 M244 128 L250 106" stroke="#9a3418" stroke-width="6" stroke-linecap="round"/>
  <circle cx="189" cy="103" r="7" fill="url(#crab-ext-eye)"/><circle cx="251" cy="103" r="7" fill="url(#crab-ext-eye)"/>
  <circle cx="187" cy="101" r="1.8" fill="#c9a89a" opacity="0.8"/><circle cx="249" cy="101" r="1.8" fill="#c9a89a" opacity="0.8"/>
</g>
<!-- 螯（第一對步足特化，掌節膨大、指節開合） -->
<g data-part="螯">
  <!-- 左螯 -->
  <path d="M134 202 Q94 172 66 182 Q44 194 56 218 Q74 234 102 224 L122 214 Z" fill="url(#crab-ext-claw)" stroke="#6a2210" stroke-width="2"/>
  <path d="M58 202 Q36 194 28 206 Q40 220 62 216 Z" fill="#b64226" stroke="#6a2210" stroke-width="1.5"/>
  <path d="M78 190 Q64 190 56 200" stroke="#ffb090" stroke-width="2" fill="none" opacity="0.5"/>
  <g stroke="#6a2210" stroke-width="0.9" opacity="0.5" fill="none"><path d="M90 200 l-6 3 M100 205 l-6 3 M110 210 l-6 3"/></g>
  <!-- 右螯 -->
  <path d="M306 202 Q346 172 374 182 Q396 194 384 218 Q366 234 338 224 L318 214 Z" fill="url(#crab-ext-claw)" stroke="#6a2210" stroke-width="2"/>
  <path d="M382 202 Q404 194 412 206 Q400 220 378 216 Z" fill="#b64226" stroke="#6a2210" stroke-width="1.5"/>
  <path d="M362 190 Q376 190 384 200" stroke="#ffb090" stroke-width="2" fill="none" opacity="0.5"/>
  <g stroke="#6a2210" stroke-width="0.9" opacity="0.5" fill="none"><path d="M350 200 l6 3 M340 205 l6 3 M330 210 l6 3"/></g>
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
  <radialGradient id="octo-ext-mantle" cx="44%" cy="26%" r="78%">
    <stop offset="0%" stop-color="#e58a94"/><stop offset="45%" stop-color="#c25a68"/><stop offset="100%" stop-color="#6f2833"/>
  </radialGradient>
  <linearGradient id="octo-ext-arm" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0%" stop-color="#d6707c"/><stop offset="100%" stop-color="#7d2f3a"/>
  </linearGradient>
  <radialGradient id="octo-ext-sucker" cx="40%" cy="36%" r="70%">
    <stop offset="0%" stop-color="#f8dcdf"/><stop offset="70%" stop-color="#e2aab0"/><stop offset="100%" stop-color="#b8858c"/>
  </radialGradient>
  <radialGradient id="octo-ext-eye" cx="40%" cy="36%" r="72%">
    <stop offset="0%" stop-color="#f6efd8"/><stop offset="100%" stop-color="#d8c9a2"/>
  </radialGradient>
</defs>
<!-- 八腕（肌肉質、基粗末細，自然彎曲；含遠側較暗的腕） -->
<g data-part="八腕" stroke="#6e2530" stroke-width="1.4">
  <path d="M172 244 Q116 302 66 342 Q50 358 66 370 Q82 358 132 322 Q172 288 190 252 Z" fill="url(#octo-ext-arm)"/>
  <path d="M184 252 Q148 332 118 402 Q110 422 128 422 Q142 406 166 346 Q190 290 198 260 Z" fill="url(#octo-ext-arm)"/>
  <path d="M200 256 Q194 346 200 416 Q202 432 216 418 Q218 350 214 258 Z" fill="url(#octo-ext-arm)"/>
  <path d="M228 252 Q264 332 294 402 Q302 422 284 422 Q270 406 246 346 Q222 290 212 260 Z" fill="url(#octo-ext-arm)"/>
  <path d="M236 244 Q292 302 342 342 Q358 358 342 370 Q326 358 276 322 Q236 288 218 252 Z" fill="url(#octo-ext-arm)"/>
  <!-- 遠側（後方）兩腕，較暗以顯層次 -->
  <path d="M162 238 Q86 268 42 278 Q24 284 36 298 Q54 294 118 272 Q172 253 186 246 Z" fill="#8a3742"/>
  <path d="M248 238 Q324 268 368 278 Q386 284 374 298 Q356 294 292 272 Q238 253 224 246 Z" fill="#8a3742"/>
  <path d="M206 258 Q206 300 207 350 Q208 366 200 360 Q198 320 198 260 Z" opacity="0.35" fill="#5f2029"/>
</g>
<!-- 腕面高光（凸顯圓潤肌肉） -->
<g fill="none" stroke="#eaa0aa" stroke-width="2.5" opacity="0.4" stroke-linecap="round">
  <path d="M180 252 Q140 300 96 344"/><path d="M204 260 Q204 330 208 400"/>
  <path d="M222 260 Q262 322 300 388"/>
</g>
<!-- 吸盤（沿腕成排，立體凹面） -->
<g data-part="吸盤" fill="url(#octo-ext-sucker)" stroke="#8a3742" stroke-width="0.8">
  <circle cx="150" cy="300" r="5.5"/><circle cx="118" cy="330" r="5.5"/><circle cx="92" cy="352" r="4.5"/>
  <circle cx="160" cy="348" r="5.5"/><circle cx="146" cy="388" r="4.5"/>
  <circle cx="205" cy="330" r="5.5"/><circle cx="207" cy="375" r="5.5"/><circle cx="206" cy="405" r="4.5"/>
  <circle cx="250" cy="348" r="5.5"/><circle cx="264" cy="388" r="4.5"/>
  <circle cx="250" cy="300" r="5.5"/><circle cx="282" cy="330" r="5.5"/><circle cx="308" cy="352" r="4.5"/>
  <circle cx="120" cy="272" r="4.5"/><circle cx="86" cy="284" r="4"/>
  <circle cx="280" cy="272" r="4.5"/><circle cx="314" cy="284" r="4"/>
</g>
<g fill="#fff" opacity="0.5">
  <circle cx="148" cy="298" r="1.6"/><circle cx="116" cy="328" r="1.6"/><circle cx="203" cy="328" r="1.6"/>
  <circle cx="205" cy="373" r="1.6"/><circle cx="248" cy="298" r="1.6"/><circle cx="280" cy="328" r="1.6"/>
</g>
<!-- 頭部（軟體光澤，一對大眼隆起） -->
<ellipse data-part="頭部" cx="200" cy="214" rx="63" ry="53" fill="url(#octo-ext-mantle)" stroke="#5f2029" stroke-width="2"/>
<ellipse cx="184" cy="196" rx="30" ry="18" fill="#eaa0aa" opacity="0.35"/>
<!-- 眼（隆起眼睑＋橫瞳） -->
<ellipse cx="176" cy="204" rx="15" ry="13" fill="#7d2f3a"/>
<circle cx="176" cy="204" r="12" fill="url(#octo-ext-eye)"/>
<ellipse cx="176" cy="205" rx="7" ry="4" fill="#14100c"/><circle cx="172" cy="200" r="2.4" fill="#fff" opacity="0.8"/>
<ellipse cx="224" cy="204" rx="15" ry="13" fill="#7d2f3a"/>
<circle cx="224" cy="204" r="12" fill="url(#octo-ext-eye)"/>
<ellipse cx="224" cy="205" rx="7" ry="4" fill="#14100c"/><circle cx="220" cy="200" r="2.4" fill="#fff" opacity="0.8"/>
<!-- 外套膜（囊狀，圓潤高光與斑點質感） -->
<path data-part="外套膜" d="M200 176 Q264 168 270 104 Q272 42 200 30 Q128 42 130 104 Q136 168 200 176 Z" fill="url(#octo-ext-mantle)" stroke="#5f2029" stroke-width="2"/>
<ellipse cx="182" cy="90" rx="34" ry="40" fill="#eaa0aa" opacity="0.3"/>
<g fill="#7d2f3a" opacity="0.35">
  <circle cx="220" cy="80" r="4"/><circle cx="240" cy="110" r="3.5"/><circle cx="210" cy="130" r="4"/>
  <circle cx="176" cy="60" r="3"/><circle cx="200" cy="150" r="3.5"/>
</g>
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
  <radialGradient id="snail-ext-shell" cx="58%" cy="40%" r="68%">
    <stop offset="0%" stop-color="#f0d29a"/><stop offset="45%" stop-color="#cc9e58"/><stop offset="100%" stop-color="#7d5824"/>
  </radialGradient>
  <linearGradient id="snail-ext-foot" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e2c4a6"/><stop offset="100%" stop-color="#a08262"/>
  </linearGradient>
  <linearGradient id="snail-ext-body" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0%" stop-color="#d4b092"/><stop offset="100%" stop-color="#947256"/>
  </linearGradient>
  <radialGradient id="snail-ext-eye" cx="40%" cy="36%" r="70%">
    <stop offset="0%" stop-color="#5a4232"/><stop offset="60%" stop-color="#2a1c12"/><stop offset="100%" stop-color="#0e0805"/>
  </radialGradient>
  <linearGradient id="snail-ext-wet" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f0dcc8" stop-opacity="0.6"/><stop offset="100%" stop-color="#f0dcc8" stop-opacity="0"/>
  </linearGradient>
</defs>
<!-- 腹足（肌肉質，前端圓、後端漸尖，濕潤高光） -->
<path data-part="腹足" d="M58 236 Q118 214 238 220 Q332 224 384 236 Q392 258 348 264 Q220 274 108 268 Q60 264 58 236 Z"
  fill="url(#snail-ext-foot)" stroke="#7d6048" stroke-width="1.8"/>
<!-- 足面波狀肌紋 -->
<g stroke="#8a6a50" stroke-width="1" fill="none" opacity="0.4">
  <path d="M90 250 Q100 246 110 250"/><path d="M140 252 Q150 248 160 252"/>
  <path d="M200 253 Q210 249 220 253"/><path d="M270 252 Q280 248 290 252"/>
  <path d="M330 250 Q340 246 350 250"/>
</g>
<!-- 足面濕潤高光 -->
<path d="M80 240 Q220 232 360 242" stroke="url(#snail-ext-wet)" stroke-width="6" fill="none" opacity="0.7"/>
<path d="M72 246 Q210 240 356 248" stroke="#f4e4d2" stroke-width="1.4" fill="none" opacity="0.5"/>
<!-- 黏液拖痕 -->
<path d="M56 262 Q40 266 26 270" stroke="#cfc0aa" stroke-width="2" fill="none" opacity="0.4"/>
<!-- 身體／頭部（伸出殼外，濕潤軟體） -->
<path data-part="頭部" d="M58 236 Q38 200 68 174 Q100 158 132 174 Q152 190 150 222 Q120 234 58 236 Z"
  fill="url(#snail-ext-body)" stroke="#7d6048" stroke-width="1.8"/>
<ellipse cx="90" cy="192" rx="30" ry="16" fill="#e8d0b8" opacity="0.35"/>
<!-- 大眼觸角（長，頂端具眼；小觸角於下方） -->
<g data-part="觸角" stroke="#9c7a5c" stroke-width="6" fill="none" stroke-linecap="round">
  <path d="M76 176 Q58 138 54 110"/>
  <path d="M100 170 Q95 130 100 98"/>
</g>
<!-- 觸角眼點（立體反光） -->
<circle cx="54" cy="108" r="7.5" fill="url(#snail-ext-eye)"/><circle cx="52" cy="105" r="2.4" fill="#d8bca0" opacity="0.85"/>
<circle cx="100" cy="95" r="7.5" fill="url(#snail-ext-eye)"/><circle cx="98" cy="92" r="2.4" fill="#d8bca0" opacity="0.85"/>
<!-- 下方一對小觸角 -->
<g stroke="#9c7a5c" stroke-width="3.5" fill="none" stroke-linecap="round">
  <path d="M60 200 Q46 196 38 200"/>
  <path d="M68 210 Q56 214 48 222"/>
</g>
<!-- 螺殼（右旋螺旋，殼口在下、殼頂在上，螺塔與生長紋） -->
<g data-part="螺殼">
  <ellipse cx="272" cy="150" rx="122" ry="106" fill="url(#snail-ext-shell)" stroke="#6a4c20" stroke-width="2.4"/>
  <!-- 螺旋線圈（由外向內收） -->
  <path d="M162 172
    Q150 92 236 62
    Q318 44 356 118
    Q374 172 318 202
    Q258 220 236 168
    Q226 128 268 116
    Q300 112 300 146
    Q298 168 276 168"
    fill="none" stroke="#6a4c20" stroke-width="2.2"/>
  <!-- 生長紋（細弧線） -->
  <path d="M158 150 Q272 58 388 150" fill="none" stroke="#a8813e" stroke-width="1.3" opacity="0.55"/>
  <path d="M166 188 Q272 116 380 188" fill="none" stroke="#a8813e" stroke-width="1.3" opacity="0.45"/>
  <path d="M180 214 Q272 160 366 214" fill="none" stroke="#a8813e" stroke-width="1.2" opacity="0.4"/>
  <!-- 殼面高光 -->
  <ellipse cx="240" cy="118" rx="40" ry="24" fill="#f6e2b0" opacity="0.4"/>
</g>
<!-- 齒舌位置（口部）示意 -->
<circle data-part="齒舌" cx="60" cy="206" r="7" fill="#7d3a3a" stroke="#4d1f1f" stroke-width="1"/>
<path d="M54 206 h12 M54 210 h12 M54 202 h12" stroke="#c98a8a" stroke-width="0.7"/>
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
  <linearGradient id="worm-ext-body" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e2968c"/><stop offset="45%" stop-color="#bc635a"/><stop offset="100%" stop-color="#7d382f"/>
  </linearGradient>
  <linearGradient id="worm-ext-clitellum" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#eeba92"/><stop offset="100%" stop-color="#b8763e"/>
  </linearGradient>
  <linearGradient id="worm-ext-sheen" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f4d0c8" stop-opacity="0.8"/><stop offset="100%" stop-color="#f4d0c8" stop-opacity="0"/>
  </linearGradient>
</defs>
<!-- 蟲體（圓柱漸細，前端較粗） -->
<path d="M28 100 Q38 74 72 76 L400 82 Q432 84 432 100 Q432 116 400 118 L72 124 Q38 126 28 100 Z"
  fill="url(#worm-ext-body)" stroke="#6a2c26" stroke-width="1.8"/>
<!-- 圓柱體光澤（濕潤背脊高光） -->
<path d="M60 88 Q240 82 418 90" stroke="url(#worm-ext-sheen)" stroke-width="8" fill="none" opacity="0.75"/>
<path d="M56 86 Q240 80 420 88" stroke="#f6dcd4" stroke-width="1.4" fill="none" opacity="0.5"/>
<!-- 體節環紋（密集橫環，弧形貼合圓柱） -->
<g data-part="體節" stroke="#742e28" stroke-width="1.3" opacity="0.7" fill="none">
  <path d="M78 78 Q74 100 80 122"/><path d="M94 78 Q90 100 96 122"/>
  <path d="M110 79 Q106 100 112 122"/><path d="M126 79 Q122 100 128 122"/>
  <path d="M142 79 Q138 100 144 121"/><path d="M158 79 Q154 100 160 121"/>
  <path d="M246 82 Q242 100 248 121"/><path d="M262 82 Q258 100 264 121"/>
  <path d="M278 82 Q274 100 280 121"/><path d="M294 82 Q290 100 296 121"/>
  <path d="M310 82 Q306 100 312 120"/><path d="M326 82 Q322 100 328 120"/>
  <path d="M342 82 Q338 100 344 120"/><path d="M358 82 Q354 100 360 120"/>
  <path d="M374 82 Q370 100 376 119"/><path d="M390 82 Q386 100 392 119"/>
</g>
<!-- 環帶（膨大鞍狀，色淺質厚） -->
<path data-part="環帶" d="M170 77 Q166 100 172 123 L232 121 Q238 100 232 79 Z"
  fill="url(#worm-ext-clitellum)" stroke="#a86636" stroke-width="1.5"/>
<path d="M178 84 Q176 100 180 116 M224 82 Q226 100 222 118" stroke="#a86636" stroke-width="1" opacity="0.6" fill="none"/>
<ellipse cx="196" cy="90" rx="20" ry="6" fill="#f6dcb8" opacity="0.4"/>
<!-- 前端（口，較尖的圍口節）與背血管示意 -->
<path d="M28 100 Q18 96 14 100 Q18 104 28 100 Z" fill="#9c4840" stroke="#6a2c26" stroke-width="1.2"/>
<ellipse cx="34" cy="100" rx="9" ry="13" fill="#a84e44" stroke="#6a2c26" stroke-width="1.5"/>
<path data-part="背血管" d="M46 92 Q240 84 420 92" stroke="#8f2f2a" stroke-width="2.5" fill="none" opacity="0.85"/>
<!-- 剛毛（各節腹背側的短硬毛） -->
<g data-part="剛毛" stroke="#521f1a" stroke-width="1.2" stroke-linecap="round">
  <path d="M96 124 l-3 8 M128 124 l-3 8 M262 122 l-3 8 M294 122 l-3 8 M342 121 l-3 8 M374 121 l-3 8"/>
  <path d="M96 77 l-3 -8 M262 80 l-3 -8 M342 80 l-3 -8 M374 80 l-3 -8"/>
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
  <radialGradient id="star-ext-body" cx="48%" cy="42%" r="62%">
    <stop offset="0%" stop-color="#f4ac54"/><stop offset="50%" stop-color="#dc7c2c"/><stop offset="100%" stop-color="#9c4810"/>
  </radialGradient>
  <radialGradient id="star-ext-disc" cx="45%" cy="38%" r="65%">
    <stop offset="0%" stop-color="#f0a24a"/><stop offset="100%" stop-color="#a84e14"/>
  </radialGradient>
</defs>
<!-- 五腕星體（腕基寬、腕尖鈍圓，五輻對稱；用曲線使腕緣飽滿） -->
<path data-part="腕" d="M210 32
  Q224 110 250 156 Q322 150 386 158 Q328 200 284 238
  Q300 312 320 372 Q258 330 210 296
  Q162 330 100 372 Q120 312 136 238
  Q92 200 34 158 Q98 150 170 156
  Q196 110 210 32 Z"
  fill="url(#star-ext-body)" stroke="#7a3a0e" stroke-width="2.4" stroke-linejoin="round"/>
<!-- 各腕中央嵴（步帶脊隆起高光） -->
<g stroke="#f6c07a" stroke-width="3" fill="none" opacity="0.45" stroke-linecap="round">
  <path d="M210 90 L210 170"/>
  <path d="M262 190 L308 176"/>
  <path d="M158 190 L112 176"/>
  <path d="M242 250 L272 320"/>
  <path d="M178 250 L148 320"/>
</g>
<!-- 粒狀表面質感（骨板疣突，密布小圓點） -->
<g fill="#b85e1c" opacity="0.5">
  <circle cx="210" cy="80" r="3.5"/><circle cx="200" cy="115" r="3"/><circle cx="220" cy="115" r="3"/>
  <circle cx="210" cy="145" r="3"/><circle cx="196" cy="150" r="2.6"/><circle cx="224" cy="150" r="2.6"/>
  <circle cx="298" cy="178" r="3.5"/><circle cx="280" cy="196" r="3"/><circle cx="262" cy="210" r="3"/>
  <circle cx="316" cy="192" r="2.6"/><circle cx="272" cy="225" r="2.6"/>
  <circle cx="122" cy="178" r="3.5"/><circle cx="140" cy="196" r="3"/><circle cx="158" cy="210" r="3"/>
  <circle cx="104" cy="192" r="2.6"/><circle cx="148" cy="225" r="2.6"/>
  <circle cx="262" cy="300" r="3.5"/><circle cx="248" cy="278" r="3"/><circle cx="270" cy="332" r="2.6"/>
  <circle cx="158" cy="300" r="3.5"/><circle cx="172" cy="278" r="3"/><circle cx="150" cy="332" r="2.6"/>
</g>
<!-- 腕緣邊板（成排小突起） -->
<g fill="#a84e14" opacity="0.4">
  <circle cx="238" cy="150" r="2.2"/><circle cx="256" cy="170" r="2.2"/><circle cx="182" cy="150" r="2.2"/><circle cx="164" cy="170" r="2.2"/>
</g>
<!-- 中央盤 -->
<circle data-part="中央盤" cx="210" cy="205" r="43" fill="url(#star-ext-disc)" stroke="#7a3a0e" stroke-width="2"/>
<ellipse cx="198" cy="192" rx="22" ry="14" fill="#f6c884" opacity="0.35"/>
<g fill="#b85e1c" opacity="0.5"><circle cx="188" cy="200" r="2.4"/><circle cx="232" cy="200" r="2.4"/><circle cx="210" cy="180" r="2.4"/></g>
<!-- 篩板（反口面篩狀板） -->
<circle data-part="篩板" cx="240" cy="180" r="8" fill="#e8d29a" stroke="#8a6a2a" stroke-width="1.2"/>
<path d="M235 176 l10 8 M245 176 l-10 8 M240 172 v16" stroke="#8a6a2a" stroke-width="0.6"/>
<!-- 口（中央，五角口膜） -->
<circle cx="210" cy="205" r="13" fill="#5c2a0c"/>
<path d="M210 192 L221 202 L217 216 L203 216 L199 202 Z" fill="#7a3a12" opacity="0.7"/>
<!-- 管足（沿各腕步帶溝成排，立體吸盤） -->
<g data-part="管足" fill="#f3c98a" stroke="#a86a2a" stroke-width="0.8">
  <circle cx="210" cy="118" r="4.2"/><circle cx="210" cy="140" r="4.2"/><circle cx="210" cy="162" r="4.2"/>
  <circle cx="272" cy="178" r="4.2"/><circle cx="288" cy="192" r="4.2"/><circle cx="256" cy="200" r="4.2"/>
  <circle cx="148" cy="178" r="4.2"/><circle cx="132" cy="192" r="4.2"/><circle cx="164" cy="200" r="4.2"/>
  <circle cx="250" cy="272" r="4.2"/><circle cx="236" cy="252" r="4.2"/>
  <circle cx="170" cy="272" r="4.2"/><circle cx="184" cy="252" r="4.2"/>
</g>
<g fill="#fff" opacity="0.5">
  <circle cx="208" cy="116" r="1.3"/><circle cx="208" cy="138" r="1.3"/><circle cx="270" cy="176" r="1.3"/>
  <circle cx="146" cy="176" r="1.3"/><circle cx="248" cy="270" r="1.3"/><circle cx="168" cy="270" r="1.3"/>
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
  <radialGradient id="jelly-ext-bell" cx="48%" cy="26%" r="74%">
    <stop offset="0%" stop-color="#e2f0fa" stop-opacity="0.96"/>
    <stop offset="40%" stop-color="#b8d0ea" stop-opacity="0.82"/>
    <stop offset="75%" stop-color="#8aa6d2" stop-opacity="0.72"/>
    <stop offset="100%" stop-color="#647fb8" stop-opacity="0.7"/>
  </radialGradient>
  <linearGradient id="jelly-ext-oral" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#eec4e0" stop-opacity="0.92"/><stop offset="100%" stop-color="#a86094" stop-opacity="0.8"/>
  </linearGradient>
  <linearGradient id="jelly-ext-tent" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d6e2f2" stop-opacity="0.9"/><stop offset="100%" stop-color="#8aa0c8" stop-opacity="0.35"/>
  </linearGradient>
  <radialGradient id="jelly-ext-inner" cx="50%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#eef6fd" stop-opacity="0.55"/><stop offset="100%" stop-color="#eef6fd" stop-opacity="0"/>
  </radialGradient>
</defs>
<!-- 傘體（半透明膠質鐘形，緣呈波狀裙邊） -->
<path data-part="傘體" d="M66 172
  Q66 52 200 46
  Q334 52 334 172
  Q316 196 296 190
  Q276 202 256 194
  Q236 206 216 197
  Q200 203 184 197
  Q164 206 144 194
  Q124 202 104 190
  Q84 196 66 172 Z"
  fill="url(#jelly-ext-bell)" stroke="#5f7bad" stroke-width="1.8"/>
<!-- 傘體內部膠質透光（中央亮區） -->
<ellipse cx="200" cy="120" rx="110" ry="78" fill="url(#jelly-ext-inner)"/>
<!-- 傘頂高光 -->
<ellipse cx="176" cy="82" rx="46" ry="24" fill="#f4fafe" opacity="0.5"/>
<!-- 傘內生殖腺（輻射對稱四葉，隱約透見） -->
<g fill="#c98ab0" opacity="0.5" stroke="#a86a92" stroke-width="1">
  <ellipse cx="160" cy="122" rx="19" ry="30"/>
  <ellipse cx="240" cy="122" rx="19" ry="30"/>
  <ellipse cx="200" cy="102" rx="17" ry="26"/>
  <ellipse cx="200" cy="150" rx="17" ry="24"/>
</g>
<!-- 傘體徑向膠質紋（放射細線，增透明厚度感） -->
<g stroke="#7f97c4" stroke-width="1" fill="none" opacity="0.4">
  <path d="M200 60 Q200 120 200 176"/>
  <path d="M130 72 Q160 120 178 178"/>
  <path d="M270 72 Q240 120 222 178"/>
  <path d="M90 108 Q140 130 150 184"/>
  <path d="M310 108 Q260 130 250 184"/>
</g>
<path d="M88 118 Q200 78 312 118" stroke="#c8ddf2" stroke-width="1.2" fill="none" opacity="0.6"/>
<!-- 口腕（中央下垂的褶皺口葉，半透膠質） -->
<g data-part="口腕" fill="url(#jelly-ext-oral)" stroke="#93507e" stroke-width="1.2">
  <path d="M185 194 Q168 282 148 342 Q159 352 175 342 Q188 270 200 200 Z"/>
  <path d="M215 194 Q232 282 252 342 Q241 352 225 342 Q212 270 200 200 Z"/>
  <path d="M200 200 Q197 292 194 356 Q205 361 208 350 Q210 280 210 200 Z"/>
</g>
<g stroke="#c88ab0" stroke-width="0.8" fill="none" opacity="0.5">
  <path d="M180 220 Q170 280 158 330"/><path d="M220 220 Q230 280 242 330"/>
</g>
<!-- 觸手（傘緣細長下垂，半透漸隱） -->
<g data-part="觸手" stroke="url(#jelly-ext-tent)" stroke-width="2.5" fill="none" stroke-linecap="round">
  <path d="M74 188 Q56 300 66 402"/>
  <path d="M104 194 Q90 312 104 414"/>
  <path d="M142 197 Q132 322 148 424"/>
  <path d="M184 197 Q180 320 176 424"/>
  <path d="M216 197 Q220 320 224 424"/>
  <path d="M258 197 Q268 322 252 424"/>
  <path d="M296 194 Q310 312 296 414"/>
  <path d="M326 188 Q344 300 334 402"/>
</g>
<!-- 刺絲胞（觸手上成串小球，螫細胞） -->
<g data-part="刺絲胞" fill="#5f7bad">
  <circle cx="62" cy="282" r="3"/><circle cx="66" cy="342" r="3"/>
  <circle cx="94" cy="302" r="3"/><circle cx="104" cy="372" r="3"/>
  <circle cx="136" cy="312" r="3"/><circle cx="148" cy="382" r="3"/>
  <circle cx="256" cy="312" r="3"/><circle cx="252" cy="382" r="3"/>
  <circle cx="304" cy="302" r="3"/><circle cx="296" cy="372" r="3"/>
  <circle cx="336" cy="282" r="3"/><circle cx="332" cy="342" r="3"/>
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
