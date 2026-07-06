/* ===== 哺乳綱（mammals）寫實解剖教材 =====
 * 物種：人類 / 狗 / 貓 / 牛 / 鯨 / 蝙蝠
 * 每個物種呼叫一次 window.ANATOMY.register({...})
 * SVG 只寫內層標記，引擎自動包外層 <svg>。
 */
(function () {
  "use strict";
  var R = window.ANATOMY && window.ANATOMY.register
    ? window.ANATOMY.register.bind(window.ANATOMY)
    : function () {};

  /* ============================================================
   * 1. 人類 HUMAN — 三視圖：外部形態 / 骨骼系統 / 內臟循環
   * ============================================================ */
  R({
    id: "human",
    name: "人類",
    latin: "Homo sapiens",
    emoji: "🧍",
    kingdom: "animalia",
    group: "mammals",
    rank: "靈長目・人科",
    summary: "人類是直立行走的靈長類，擁有高度發達的大腦與精巧的雙手。身體由骨骼、肌肉、循環、呼吸、消化等系統協同運作，維持恆定的體溫與新陳代謝。",
    views: [
      {
        id: "external",
        name: "外部形態",
        viewBox: "0 0 400 620",
        svg: `
        <defs>
          <linearGradient id="human-skin" x1="0" y1="0" x2="1" y2="0.15">
            <stop offset="0%" stop-color="#f7dcbf"/>
            <stop offset="45%" stop-color="#ecc4a0"/>
            <stop offset="100%" stop-color="#c88c62"/>
          </linearGradient>
          <radialGradient id="human-skin-hi" cx="40%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#fce9d4"/>
            <stop offset="65%" stop-color="#efc6a4"/>
            <stop offset="100%" stop-color="#d29c74"/>
          </radialGradient>
          <linearGradient id="human-hair" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stop-color="#5a4331"/>
            <stop offset="55%" stop-color="#3d2c1e"/>
            <stop offset="100%" stop-color="#241a12"/>
          </linearGradient>
        </defs>
        <!-- 頸（含胸鎖乳突肌） -->
        <path d="M186 112 C185 128 184 136 180 142 C192 150 208 150 220 142 C216 136 215 128 214 112 Z" fill="url(#human-skin)" stroke="#ad7d57" stroke-width="1.2"/>
        <!-- 全身單一連續輪廓（寬肩窄腰、手臂垂放、關節轉折） -->
        <path data-part="軀幹" fill="url(#human-skin)" stroke="#a9744f" stroke-width="1.4" stroke-linejoin="round"
          d="M186 140
             C176 142 166 147 158 155 C148 163 141 173 139 186
             C137 208 137 232 140 254 C141 264 143 272 145 282
             C147 304 149 328 150 348 L162 349
             C161 328 160 304 159 282 C158 272 157 264 157 254
             C158 232 160 210 166 192 C168 185 171 189 173 200
             C176 226 178 254 176 288 C175 304 178 326 184 352
             C171 357 165 388 167 418 C168 452 171 480 176 498
             C178 520 181 550 183 582 L199 582
             C200 552 200 520 200 498 C200 460 199 402 199 362
             L201 362 C201 402 200 460 200 498
             C200 520 200 552 201 582 L217 582
             C219 550 222 520 224 498 C229 480 232 452 233 418
             C235 388 229 357 216 352 C222 326 225 304 224 288
             C222 254 224 226 227 200 C229 189 232 185 234 192
             C240 210 242 232 243 254 C243 264 242 272 241 282
             C240 304 239 328 238 349 L250 348
             C251 328 253 304 255 282 C257 272 259 264 260 254
             C263 232 263 208 261 186 C259 173 252 163 242 155
             C234 147 224 142 214 140 C207 150 193 150 186 140 Z"/>
        <!-- 手掌（併指含拇指） -->
        <path data-part="手" d="M150 348 C140 351 133 363 135 378 C137 392 149 396 158 390 C164 386 164 366 160 350 C158 358 154 360 150 358 Z M150 356 C146 356 142 361 143 366 L150 363 Z" fill="url(#human-skin-hi)" stroke="#a9744f" stroke-width="1.1" stroke-linejoin="round"/>
        <path data-part="手" d="M250 348 C260 351 267 363 265 378 C263 392 251 396 242 390 C236 386 236 366 240 350 C242 358 246 360 250 358 Z M250 356 C254 356 258 361 257 366 L250 363 Z" fill="url(#human-skin-hi)" stroke="#a9744f" stroke-width="1.1" stroke-linejoin="round"/>
        <!-- 手指分線（減少手套感） -->
        <g stroke="#a9744f" stroke-width="0.8" opacity="0.55" fill="none" stroke-linecap="round">
          <path d="M142 382 L143 392"/><path d="M147 385 L148 394"/><path d="M152 384 L153 393"/>
          <path d="M258 382 L257 392"/><path d="M253 385 L252 394"/><path d="M248 384 L247 393"/>
        </g>
        <!-- 足 -->
        <path data-part="足" d="M183 582 C176 583 169 596 170 604 C171 611 185 611 196 606 L199 588 L197 582 Z" fill="url(#human-skin-hi)" stroke="#a9744f" stroke-width="1.1" stroke-linejoin="round"/>
        <path data-part="足" d="M217 582 C224 583 231 596 230 604 C229 611 215 611 204 606 L201 588 L203 582 Z" fill="url(#human-skin-hi)" stroke="#a9744f" stroke-width="1.1" stroke-linejoin="round"/>
        <!-- 柔和邊緣陰影（做出圓潤立體感，貼合輪廓內側） -->
        <g fill="#c68a5e" opacity="0.20" stroke="none">
          <!-- 軀幹左右暗面 -->
          <path d="M146 186 C140 210 141 254 146 288 C150 262 150 220 152 190 Z"/>
          <path d="M254 186 C260 210 259 254 254 288 C250 262 250 220 248 190 Z"/>
          <!-- 胸大肌下緣柔陰影 -->
          <path d="M166 198 C178 210 192 212 199 204 C188 206 176 203 168 197 Z"/>
          <path d="M234 198 C222 210 208 212 201 204 C212 206 224 203 232 197 Z"/>
          <!-- 大腿外側與內側暗面 -->
          <path d="M169 400 C166 440 168 476 174 496 C176 470 176 434 175 402 Z"/>
          <path d="M231 400 C234 440 232 476 226 496 C224 470 224 434 225 402 Z"/>
          <path d="M199 372 C198 410 198 456 199 492 C202 456 202 410 201 372 Z"/>
        </g>
        <!-- 柔和高光（受光面，圓潤感） -->
        <g fill="#ffefd9" opacity="0.28" stroke="none">
          <ellipse cx="185" cy="210" rx="13" ry="30"/>
          <ellipse cx="215" cy="210" rx="13" ry="30"/>
          <ellipse cx="186" cy="430" rx="9" ry="48"/>
          <ellipse cx="214" cy="430" rx="9" ry="48"/>
          <ellipse cx="188" cy="540" rx="5" ry="32"/>
          <ellipse cx="212" cy="540" rx="5" ry="32"/>
        </g>
        <!-- 解剖線（乾淨、少量）：鎖骨、胸溝、腹中線、肚臍、胸鎖乳突肌 -->
        <g fill="none" stroke="#a06a44" stroke-width="1.2" opacity="0.32" stroke-linecap="round">
          <path d="M165 165 Q184 159 199 165"/>
          <path d="M235 165 Q216 159 201 165"/>
          <path d="M200 208 L200 300"/>
          <path d="M170 226 Q186 236 199 230"/>
          <path d="M230 226 Q214 236 201 230"/>
          <ellipse cx="200" cy="300" rx="2.4" ry="3.2" fill="#a06a44" stroke="none" opacity="0.5"/>
          <path d="M189 134 Q200 142 199 156"/>
          <path d="M211 134 Q200 142 201 156"/>
        </g>
        <!-- 頭部 -->
        <path data-part="頭部" d="M163 74 C162 46 176 32 200 32 C224 32 238 46 237 74 C237 92 232 104 224 114 C219 126 210 134 200 134 C190 134 181 126 176 114 C168 104 163 92 163 74 Z" fill="url(#human-skin-hi)" stroke="#a9744f" stroke-width="1.3"/>
        <!-- 臉部陰影（顴骨、下顎、鼻側） -->
        <g fill="#c88a5e" opacity="0.28" stroke="none">
          <path d="M168 86 C166 98 170 110 178 118 C174 104 173 94 174 86 Z"/>
          <path d="M232 86 C234 98 230 110 222 118 C226 104 227 94 226 86 Z"/>
          <path d="M195 92 C193 100 194 108 198 112 L200 96 Z"/>
        </g>
        <!-- 頭髮 -->
        <path d="M159 78 C155 40 180 26 200 26 C220 26 245 40 241 78 C236 62 231 54 224 50 C227 60 226 66 223 70 C218 54 208 49 200 49 C192 49 182 54 177 70 C174 66 173 60 176 50 C169 54 164 62 159 78 Z" fill="url(#human-hair)"/>
        <path d="M162 72 C168 58 178 52 186 52 C178 58 172 66 168 76 Z" fill="#6b5138" opacity="0.6"/>
        <!-- 眉 -->
        <path d="M175 80 Q184 76 192 79" fill="none" stroke="#5a4230" stroke-width="2" stroke-linecap="round"/>
        <path d="M208 79 Q216 76 225 80" fill="none" stroke="#5a4230" stroke-width="2" stroke-linecap="round"/>
        <!-- 眼（含上眼瞼陰影與反光） -->
        <path data-part="眼" d="M175 86 Q184 81 192 85 Q186 91 178 90 Z" fill="#fff" stroke="#7a5a44" stroke-width="0.9"/>
        <circle cx="184" cy="86" r="3.1" fill="#6a4a30"/><circle cx="184" cy="86" r="1.4" fill="#160d06"/><circle cx="185.2" cy="84.8" r="0.8" fill="#fff"/>
        <path d="M175 86 Q184 82 192 85" fill="none" stroke="#8a6248" stroke-width="1"/>
        <path data-part="眼" d="M208 85 Q216 81 225 86 Q222 91 214 90 Z" fill="#fff" stroke="#7a5a44" stroke-width="0.9"/>
        <circle cx="216" cy="86" r="3.1" fill="#6a4a30"/><circle cx="216" cy="86" r="1.4" fill="#160d06"/><circle cx="217.2" cy="84.8" r="0.8" fill="#fff"/>
        <path d="M208 85 Q216 82 225 86" fill="none" stroke="#8a6248" stroke-width="1"/>
        <!-- 鼻 -->
        <path d="M200 90 C199 98 197 104 194 107 C197 110 203 110 206 107 C203 104 201 98 200 90 Z" fill="#e3b48f" opacity="0.55"/>
        <path d="M194 107 Q192 109 194 110" fill="none" stroke="#a06a48" stroke-width="1"/>
        <path d="M206 107 Q208 109 206 110" fill="none" stroke="#a06a48" stroke-width="1"/>
        <!-- 口 -->
        <path data-part="口" d="M188 115 Q200 121 212 115" fill="none" stroke="#a4544e" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M190 118 Q200 123 210 118" fill="#d89684" stroke="none"/>
        <!-- 耳 -->
        <path data-part="耳" d="M163 88 C155 86 154 98 158 106 C161 112 167 110 168 104 C164 102 162 96 163 88 Z" fill="url(#human-skin)" stroke="#a9744f" stroke-width="1"/>
        <path data-part="耳" d="M237 88 C245 86 246 98 242 106 C239 112 233 110 232 104 C236 102 238 96 237 88 Z" fill="url(#human-skin)" stroke="#a9744f" stroke-width="1"/>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="234" y1="66" x2="330" y2="56" stroke="#555" stroke-width="1"/>
          <text x="334" y="60">頭部</text>
          <line x1="224" y1="85" x2="330" y2="104" stroke="#555" stroke-width="1"/>
          <text x="334" y="108">眼</text>
          <line x1="243" y1="98" x2="330" y2="150" stroke="#555" stroke-width="1"/>
          <text x="334" y="154">耳</text>
          <line x1="213" y1="115" x2="330" y2="196" stroke="#555" stroke-width="1"/>
          <text x="334" y="200">口</text>
          <line x1="188" y1="128" x2="74" y2="150" stroke="#555" stroke-width="1"/>
          <text x="24" y="154">頸</text>
          <line x1="245" y1="230" x2="330" y2="250" stroke="#555" stroke-width="1"/>
          <text x="334" y="254">軀幹</text>
          <line x1="255" y1="372" x2="330" y2="392" stroke="#555" stroke-width="1"/>
          <text x="334" y="396">手</text>
          <line x1="145" y1="372" x2="70" y2="392" stroke="#555" stroke-width="1"/>
          <text x="22" y="396">手</text>
          <line x1="226" y1="430" x2="330" y2="470" stroke="#555" stroke-width="1"/>
          <text x="334" y="474">下肢</text>
          <line x1="205" y1="586" x2="330" y2="592" stroke="#555" stroke-width="1"/>
          <text x="334" y="596">足</text>
        </g>`,
        parts: [
          { name: "頭部", desc: "容納大腦與主要感覺器官。" },
          { name: "眼", desc: "接收光線形成視覺影像。" },
          { name: "耳", desc: "負責聽覺與平衡感。" },
          { name: "口", desc: "攝食、咀嚼並協助發聲。" },
          { name: "頸", desc: "連接頭與軀幹，支撐頭部轉動。" },
          { name: "軀幹", desc: "包覆胸腔與腹腔的內臟。" },
          { name: "手", desc: "具對生拇指，可精細抓握。" },
          { name: "下肢", desc: "支撐體重並完成直立行走。" },
          { name: "足", desc: "站立與行走時承接地面反作用力。" }
        ]
      },
      {
        id: "skeleton",
        name: "骨骼系統",
        viewBox: "0 0 400 620",
        svg: `
        <defs>
          <linearGradient id="human-bone" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f5efdd"/>
            <stop offset="60%" stop-color="#ece3cf"/>
            <stop offset="100%" stop-color="#d3c6a5"/>
          </linearGradient>
          <radialGradient id="human-skull" cx="42%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#f7f1e0"/>
            <stop offset="100%" stop-color="#d8cbab"/>
          </radialGradient>
        </defs>
        <g fill="url(#human-bone)" stroke="#b3a67f" stroke-width="1.1">
          <!-- 顱骨 -->
          <path data-part="顱骨" d="M170 88 Q168 44 200 42 Q232 44 230 88 Q230 108 216 118 L214 128 Q200 134 186 128 L184 118 Q170 108 170 88 Z" fill="url(#human-skull)"/>
          <!-- 下頜 -->
          <path d="M184 126 Q200 140 216 126 L214 134 Q200 142 186 134 Z"/>
          <!-- 頸椎 -->
          <rect x="196" y="140" width="8" height="26" rx="3"/>
          <!-- 鎖骨 -->
          <path data-part="鎖骨" d="M168 176 Q186 170 200 174 Q214 170 232 176" fill="none" stroke="#b3a67f" stroke-width="4.5" stroke-linecap="round"/>
          <!-- 肋骨 + 胸骨 -->
          <g data-part="肋骨" fill="none" stroke="#c8ba92" stroke-width="3.4">
            <path d="M200 186 Q168 196 158 220"/>
            <path d="M200 186 Q232 196 242 220"/>
            <path d="M200 202 Q164 214 156 244"/>
            <path d="M200 202 Q236 214 244 244"/>
            <path d="M200 220 Q164 234 158 266"/>
            <path d="M200 220 Q236 234 242 266"/>
            <path d="M200 240 Q168 254 164 284"/>
            <path d="M200 240 Q232 254 236 284"/>
          </g>
          <rect data-part="胸骨" x="195" y="184" width="10" height="96" rx="4"/>
          <!-- 脊椎 -->
          <path data-part="脊椎" d="M200 166 L200 360" fill="none" stroke="#bcae86" stroke-width="7" stroke-linecap="round"/>
          <!-- 骨盆 -->
          <path data-part="骨盆" d="M168 350 Q160 380 178 402 Q200 414 222 402 Q240 380 232 350 Q216 372 200 372 Q184 372 168 350 Z"/>
          <!-- 上臂骨（肱骨） -->
          <path data-part="肱骨" d="M164 178 Q140 200 132 262 L142 264 Q152 208 172 186 Z"/>
          <path data-part="肱骨" d="M236 178 Q260 200 268 262 L258 264 Q248 208 228 186 Z"/>
          <!-- 前臂骨 -->
          <path d="M133 264 L126 344 L136 344 L143 266 Z"/>
          <path d="M267 264 L274 344 L264 344 L257 266 Z"/>
          <!-- 手骨 -->
          <path d="M124 346 Q118 362 122 380 L134 380 Q136 362 134 346 Z"/>
          <path d="M276 346 Q282 362 278 380 L266 380 Q264 362 266 346 Z"/>
          <!-- 大腿骨（股骨） -->
          <path data-part="股骨" d="M182 402 L176 508 L188 508 L192 404 Z"/>
          <path data-part="股骨" d="M218 402 L224 508 L212 508 L208 404 Z"/>
          <!-- 小腿骨 -->
          <path d="M178 510 L174 592 L186 592 L188 512 Z"/>
          <path d="M222 510 L226 592 L214 592 L212 512 Z"/>
          <!-- 足骨 -->
          <path d="M174 592 Q158 596 158 608 L184 606 L184 594 Z"/>
          <path d="M226 592 Q242 596 242 608 L216 606 L216 594 Z"/>
        </g>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="230" y1="80" x2="330" y2="66" stroke="#555" stroke-width="1"/>
          <text x="334" y="70">顱骨</text>
          <line x1="228" y1="176" x2="330" y2="150" stroke="#555" stroke-width="1"/>
          <text x="334" y="154">鎖骨</text>
          <line x1="240" y1="230" x2="330" y2="216" stroke="#555" stroke-width="1"/>
          <text x="334" y="220">肋骨</text>
          <line x1="205" y1="230" x2="330" y2="262" stroke="#555" stroke-width="1"/>
          <text x="334" y="266">胸骨</text>
          <line x1="268" y1="240" x2="330" y2="300" stroke="#555" stroke-width="1"/>
          <text x="334" y="304">肱骨</text>
          <line x1="200" y1="320" x2="80" y2="300" stroke="#555" stroke-width="1"/>
          <text x="24" y="304">脊椎</text>
          <line x1="176" y1="380" x2="70" y2="380" stroke="#555" stroke-width="1"/>
          <text x="16" y="384">骨盆</text>
          <line x1="224" y1="460" x2="330" y2="440" stroke="#555" stroke-width="1"/>
          <text x="334" y="444">股骨</text>
        </g>`,
        parts: [
          { name: "顱骨", desc: "保護大腦的圓頂形骨匣。" },
          { name: "鎖骨", desc: "連接胸骨與肩胛，支撐肩部。" },
          { name: "肋骨", desc: "圍成胸廓保護心肺。" },
          { name: "胸骨", desc: "位於胸前，肋骨在此會合。" },
          { name: "脊椎", desc: "由椎骨疊成，保護脊髓並支撐身體。" },
          { name: "骨盆", desc: "承接軀幹重量並連接下肢。" },
          { name: "肱骨", desc: "上臂的長骨。" },
          { name: "股骨", desc: "大腿骨，人體最長最堅固的骨。" }
        ]
      },
      {
        id: "viscera",
        name: "內臟循環",
        viewBox: "0 0 400 560",
        svg: `
        <defs>
          <radialGradient id="human-heart" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#c25446"/>
            <stop offset="100%" stop-color="#8f2b22"/>
          </radialGradient>
          <linearGradient id="human-lung" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e39aa0"/>
            <stop offset="100%" stop-color="#c66d78"/>
          </linearGradient>
          <linearGradient id="human-liver" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#8a3b2c"/>
            <stop offset="100%" stop-color="#5e2419"/>
          </linearGradient>
          <linearGradient id="human-intestine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#e0a06f"/>
            <stop offset="100%" stop-color="#b9743f"/>
          </linearGradient>
          <linearGradient id="human-body2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f2e7dc"/>
            <stop offset="100%" stop-color="#e0cdbc"/>
          </linearGradient>
        </defs>
        <!-- 軀幹輪廓（半透明） -->
        <path d="M120 60 Q120 40 200 38 Q280 40 280 60 L296 200 Q300 320 280 430 L268 500 Q200 520 132 500 L120 430 Q100 320 104 200 Z" fill="url(#human-body2)" stroke="#c7ac93" stroke-width="1.4" opacity="0.55"/>
        <!-- 氣管 -->
        <rect data-part="氣管" x="194" y="60" width="12" height="70" rx="5" fill="#dcc3b0" stroke="#b89a83" stroke-width="1"/>
        <!-- 肺 -->
        <path data-part="肺" d="M188 120 Q150 130 140 190 Q134 240 152 268 Q180 276 186 240 L186 130 Z" fill="url(#human-lung)" stroke="#a75662" stroke-width="1.2"/>
        <path data-part="肺" d="M212 120 Q250 130 260 190 Q266 240 248 268 Q220 276 214 240 L214 130 Z" fill="url(#human-lung)" stroke="#a75662" stroke-width="1.2"/>
        <!-- 心臟 -->
        <path data-part="心臟" d="M200 176 Q182 160 172 182 Q166 200 188 226 Q200 240 212 226 Q234 200 228 182 Q218 160 200 176 Z" fill="url(#human-heart)" stroke="#6f1f18" stroke-width="1.4"/>
        <!-- 主動脈 -->
        <path data-part="主動脈" d="M200 176 Q204 150 216 138" fill="none" stroke="#b5352b" stroke-width="6" stroke-linecap="round"/>
        <path d="M200 232 L200 420" fill="none" stroke="#b5352b" stroke-width="4" opacity="0.85"/>
        <path d="M200 232 L200 420" fill="none" stroke="#3f6fb0" stroke-width="4" opacity="0.55" transform="translate(10,0)"/>
        <!-- 肝臟 -->
        <path data-part="肝臟" d="M150 280 Q210 268 252 286 Q258 310 236 322 Q190 332 156 320 Q142 300 150 280 Z" fill="url(#human-liver)" stroke="#4a1c12" stroke-width="1.2"/>
        <!-- 胃 -->
        <path data-part="胃" d="M158 322 Q140 330 146 356 Q156 380 186 378 Q206 374 200 350 Q194 330 172 326 Z" fill="#c98a6a" stroke="#9a6144" stroke-width="1.2"/>
        <!-- 腎臟 -->
        <path data-part="腎臟" d="M148 340 Q134 344 134 362 Q134 380 150 380 Q158 372 156 356 Q156 344 148 340 Z" fill="#7d3a2c" stroke="#552317" stroke-width="1.1"/>
        <path data-part="腎臟" d="M252 340 Q266 344 266 362 Q266 380 250 380 Q242 372 244 356 Q244 344 252 340 Z" fill="#7d3a2c" stroke="#552317" stroke-width="1.1"/>
        <!-- 小腸 -->
        <path data-part="小腸" d="M162 388 Q140 400 152 424 Q170 446 200 442 Q244 448 250 420 Q256 396 232 388 Q200 384 200 404 Q200 384 178 386 Q168 386 162 388 Z" fill="url(#human-intestine)" stroke="#8a5528" stroke-width="1.2"/>
        <circle cx="176" cy="410" r="9" fill="none" stroke="#8a5528" stroke-width="2"/>
        <circle cx="200" cy="422" r="9" fill="none" stroke="#8a5528" stroke-width="2"/>
        <circle cx="224" cy="410" r="9" fill="none" stroke="#8a5528" stroke-width="2"/>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="200" y1="70" x2="320" y2="70" stroke="#555" stroke-width="1"/>
          <text x="324" y="74">氣管</text>
          <line x1="150" y1="180" x2="60" y2="160" stroke="#555" stroke-width="1"/>
          <text x="18" y="164">肺</text>
          <line x1="216" y1="200" x2="320" y2="180" stroke="#555" stroke-width="1"/>
          <text x="324" y="184">心臟</text>
          <line x1="214" y1="140" x2="320" y2="126" stroke="#555" stroke-width="1"/>
          <text x="324" y="130">主動脈</text>
          <line x1="152" y1="300" x2="60" y2="290" stroke="#555" stroke-width="1"/>
          <text x="16" y="294">肝臟</text>
          <line x1="150" y1="356" x2="320" y2="320" stroke="#555" stroke-width="1"/>
          <text x="324" y="324">胃</text>
          <line x1="266" y1="362" x2="320" y2="366" stroke="#555" stroke-width="1"/>
          <text x="324" y="370">腎臟</text>
          <line x1="200" y1="440" x2="60" y2="440" stroke="#555" stroke-width="1"/>
          <text x="14" y="444">小腸</text>
        </g>`,
        parts: [
          { name: "氣管", desc: "輸送空氣進出肺臟的管道。" },
          { name: "肺", desc: "進行氧氣與二氧化碳的氣體交換。" },
          { name: "心臟", desc: "四腔幫浦，推動全身血液循環。" },
          { name: "主動脈", desc: "體內最大動脈，輸出含氧血。" },
          { name: "肝臟", desc: "解毒、合成蛋白並儲存養分。" },
          { name: "胃", desc: "以胃酸與酵素初步消化食物。" },
          { name: "腎臟", desc: "過濾血液、生成尿液。" },
          { name: "小腸", desc: "吸收養分的主要場所。" }
        ]
      }
    ]
  });

  /* ============================================================
   * 2. 狗 DOG — 外部形態 / 骨骼 / 內臟
   * ============================================================ */
  R({
    id: "dog",
    name: "狗",
    latin: "Canis familiaris",
    emoji: "🐕",
    kingdom: "animalia",
    group: "mammals",
    rank: "食肉目・犬科",
    summary: "狗是人類最早馴化的動物，屬食肉目犬科。四足行走、嗅覺與聽覺敏銳，具尖銳犬齒與奔跑用的細長四肢，是典型的陸生哺乳類。",
    views: [
      {
        id: "external",
        name: "外部形態",
        viewBox: "0 0 460 340",
        svg: `
        <defs>
          <linearGradient id="dog-fur" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#c9954f"/>
            <stop offset="100%" stop-color="#9c6a2e"/>
          </linearGradient>
          <radialGradient id="dog-fur-hi" cx="40%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#e0b878"/>
            <stop offset="100%" stop-color="#a5732f"/>
          </radialGradient>
        </defs>
        <!-- 尾 -->
        <path data-part="尾" d="M60 150 Q28 130 22 100 Q34 108 52 128 Q60 140 74 150 Z" fill="url(#dog-fur)" stroke="#6f4a1c" stroke-width="1.2"/>
        <!-- 軀幹 -->
        <path data-part="軀幹" d="M70 150 Q90 118 150 116 L300 118 Q350 118 372 140 L372 150 Q360 200 320 210 L120 210 Q78 202 70 165 Z" fill="url(#dog-fur-hi)" stroke="#6f4a1c" stroke-width="1.4"/>
        <!-- 後腿 -->
        <path data-part="後肢" d="M104 200 Q96 250 100 290 Q100 300 112 300 L120 300 Q120 250 128 205 Z" fill="url(#dog-fur)" stroke="#6f4a1c" stroke-width="1.2"/>
        <path d="M96 296 Q92 306 104 308 L124 306 L124 296 Z" fill="url(#dog-fur-hi)" stroke="#6f4a1c" stroke-width="1"/>
        <!-- 前腿 -->
        <path data-part="前肢" d="M300 206 Q296 252 300 292 Q300 302 312 302 L320 302 Q322 252 324 208 Z" fill="url(#dog-fur)" stroke="#6f4a1c" stroke-width="1.2"/>
        <path d="M296 298 Q292 308 304 310 L324 308 L324 298 Z" fill="url(#dog-fur-hi)" stroke="#6f4a1c" stroke-width="1"/>
        <!-- 頸 + 頭 -->
        <path d="M330 122 Q356 100 386 100 L396 108 Q416 116 420 140 Q416 158 396 162 L360 158 Q340 150 336 132 Z" fill="url(#dog-fur-hi)" stroke="#6f4a1c" stroke-width="1.4"/>
        <!-- 吻部 -->
        <path data-part="吻部" d="M414 132 Q440 128 448 140 Q446 152 430 152 L414 148 Z" fill="url(#dog-fur)" stroke="#6f4a1c" stroke-width="1.2"/>
        <ellipse data-part="鼻" cx="446" cy="141" rx="6" ry="5" fill="#3a2a22"/>
        <!-- 耳 -->
        <path data-part="耳" d="M388 100 Q380 74 400 66 Q408 84 404 106 Z" fill="url(#dog-fur)" stroke="#6f4a1c" stroke-width="1.2"/>
        <!-- 眼 -->
        <ellipse data-part="眼" cx="404" cy="126" rx="5" ry="4" fill="#3a2418"/>
        <circle cx="402" cy="124" r="1.4" fill="#fff"/>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="30" y1="110" x2="30" y2="60" stroke="#555" stroke-width="1"/>
          <text x="16" y="52">尾</text>
          <line x1="400" y1="78" x2="410" y2="34" stroke="#555" stroke-width="1"/>
          <text x="400" y="28">耳</text>
          <line x1="404" y1="126" x2="360" y2="60" stroke="#555" stroke-width="1"/>
          <text x="340" y="52">眼</text>
          <line x1="446" y1="141" x2="452" y2="196" stroke="#555" stroke-width="1"/>
          <text x="424" y="212">鼻</text>
          <line x1="432" y1="146" x2="378" y2="200" stroke="#555" stroke-width="1"/>
          <text x="356" y="214">吻部</text>
          <line x1="200" y1="160" x2="200" y2="70" stroke="#555" stroke-width="1"/>
          <text x="180" y="62">軀幹</text>
          <line x1="310" y1="280" x2="330" y2="330" stroke="#555" stroke-width="1"/>
          <text x="320" y="330">前肢</text>
          <line x1="110" y1="280" x2="90" y2="330" stroke="#555" stroke-width="1"/>
          <text x="70" y="330">後肢</text>
        </g>`,
        parts: [
          { name: "頭部", desc: "集中嗅覺、視覺與聽覺器官。" },
          { name: "吻部", desc: "細長鼻吻，內含發達的嗅覺上皮。" },
          { name: "鼻", desc: "濕潤鼻鏡，嗅覺極為靈敏。" },
          { name: "耳", desc: "可轉動的耳廓，聽覺敏銳。" },
          { name: "眼", desc: "側置雙眼，視野開闊。" },
          { name: "軀幹", desc: "包覆胸腹腔器官。" },
          { name: "前肢", desc: "支撐前身並協助奔跑。" },
          { name: "後肢", desc: "提供奔跑與跳躍的推進力。" },
          { name: "尾", desc: "協助平衡並表達情緒。" }
        ]
      },
      {
        id: "skeleton",
        name: "骨骼系統",
        viewBox: "0 0 460 340",
        svg: `
        <defs>
          <linearGradient id="dog-bone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f3ecd9"/>
            <stop offset="100%" stop-color="#d2c4a2"/>
          </linearGradient>
        </defs>
        <g fill="url(#dog-bone)" stroke="#b3a67f" stroke-width="1.1">
          <!-- 顱骨 -->
          <path data-part="顱骨" d="M388 108 Q396 92 416 96 L448 138 Q444 150 428 148 L400 140 Q384 128 388 108 Z"/>
          <!-- 下頜 -->
          <path data-part="下頜" d="M414 148 L446 150 Q446 158 432 158 L410 154 Z"/>
          <!-- 脊椎 -->
          <path data-part="脊椎" d="M90 130 Q200 116 330 122 Q360 122 388 128" fill="none" stroke="#bcae86" stroke-width="8" stroke-linecap="round"/>
          <!-- 肋骨 -->
          <g data-part="肋骨" fill="none" stroke="#c8ba92" stroke-width="3.2">
            <path d="M300 130 Q300 175 288 200"/>
            <path d="M278 130 Q276 178 262 202"/>
            <path d="M256 130 Q252 180 238 204"/>
            <path d="M234 130 Q228 180 214 204"/>
            <path d="M212 130 Q204 178 192 202"/>
            <path d="M190 132 Q182 175 172 198"/>
          </g>
          <!-- 骨盆 -->
          <path data-part="骨盆" d="M96 128 Q78 140 84 168 Q96 186 116 178 Q124 156 116 136 Q108 128 96 128 Z"/>
          <!-- 肩胛 -->
          <path data-part="肩胛" d="M320 128 Q332 150 322 178 L312 176 Q318 148 310 130 Z"/>
          <!-- 前肢骨 -->
          <path data-part="前肢骨" d="M316 176 L306 226 L316 228 L326 178 Z"/>
          <path d="M306 226 L300 288 L310 290 L318 228 Z"/>
          <path d="M298 288 Q296 300 308 302 L318 298 L316 290 Z"/>
          <!-- 後肢骨（股骨+脛骨） -->
          <path data-part="後肢骨" d="M108 176 L100 224 L112 226 L120 178 Z"/>
          <path d="M100 224 L98 286 L108 288 L114 226 Z"/>
          <path d="M96 286 Q94 298 106 300 L116 296 L114 288 Z"/>
          <!-- 尾椎 -->
          <path data-part="尾椎" d="M90 130 Q56 118 40 96" fill="none" stroke="#bcae86" stroke-width="4" stroke-linecap="round"/>
        </g>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="420" y1="118" x2="430" y2="70" stroke="#555" stroke-width="1"/>
          <text x="410" y="62">顱骨</text>
          <line x1="430" y1="154" x2="446" y2="200" stroke="#555" stroke-width="1"/>
          <text x="424" y="214">下頜</text>
          <line x1="200" y1="120" x2="200" y2="66" stroke="#555" stroke-width="1"/>
          <text x="176" y="58">脊椎</text>
          <line x1="250" y1="180" x2="250" y2="240" stroke="#555" stroke-width="1"/>
          <text x="230" y="256">肋骨</text>
          <line x1="98" y1="152" x2="40" y2="150" stroke="#555" stroke-width="1"/>
          <text x="8" y="154">骨盆</text>
          <line x1="320" y1="152" x2="380" y2="120" stroke="#555" stroke-width="1"/>
          <text x="376" y="112">肩胛</text>
          <line x1="316" y1="260" x2="350" y2="320" stroke="#555" stroke-width="1"/>
          <text x="340" y="332">前肢骨</text>
          <line x1="106" y1="260" x2="80" y2="320" stroke="#555" stroke-width="1"/>
          <text x="60" y="332">後肢骨</text>
          <line x1="52" y1="108" x2="30" y2="72" stroke="#555" stroke-width="1"/>
          <text x="14" y="64">尾椎</text>
        </g>`,
        parts: [
          { name: "顱骨", desc: "保護腦部，附著強力咬合肌。" },
          { name: "下頜", desc: "可上下活動，帶動犬齒咬合。" },
          { name: "脊椎", desc: "水平延伸，連貫頸至尾。" },
          { name: "肋骨", desc: "圍成胸廓保護心肺。" },
          { name: "肩胛", desc: "前肢與軀幹相連的扁骨。" },
          { name: "骨盆", desc: "連接後肢並傳遞推進力。" },
          { name: "前肢骨", desc: "由肱骨、橈尺骨組成，支撐前身。" },
          { name: "後肢骨", desc: "股骨與脛骨提供奔跑動力。" },
          { name: "尾椎", desc: "延伸的椎骨，構成尾部骨架。" }
        ]
      },
      {
        id: "viscera",
        name: "內臟",
        viewBox: "0 0 460 320",
        svg: `
        <defs>
          <linearGradient id="dog-body2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f0e6da"/>
            <stop offset="100%" stop-color="#ddc9b7"/>
          </linearGradient>
          <radialGradient id="dog-heart" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#c25446"/>
            <stop offset="100%" stop-color="#8f2b22"/>
          </radialGradient>
          <linearGradient id="dog-lung" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e39aa0"/>
            <stop offset="100%" stop-color="#c66d78"/>
          </linearGradient>
          <linearGradient id="dog-liver" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#8a3b2c"/>
            <stop offset="100%" stop-color="#5e2419"/>
          </linearGradient>
          <linearGradient id="dog-intestine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#e0a06f"/>
            <stop offset="100%" stop-color="#b9743f"/>
          </linearGradient>
        </defs>
        <!-- 身體輪廓 -->
        <path d="M70 150 Q90 116 150 114 L330 118 Q392 118 416 146 Q410 176 380 180 L120 200 Q78 192 70 160 Z" fill="url(#dog-body2)" stroke="#c7ac93" stroke-width="1.4" opacity="0.6"/>
        <!-- 氣管 -->
        <path data-part="氣管" d="M340 140 Q370 132 400 140" fill="none" stroke="#cbb2a0" stroke-width="6" stroke-linecap="round"/>
        <!-- 肺 -->
        <path data-part="肺" d="M300 128 Q262 128 258 160 Q258 184 292 184 Q322 180 322 152 Q320 130 300 128 Z" fill="url(#dog-lung)" stroke="#a75662" stroke-width="1.2"/>
        <!-- 心臟 -->
        <path data-part="心臟" d="M320 158 Q310 146 302 158 Q298 170 316 184 Q326 178 330 166 Q330 156 320 158 Z" fill="url(#dog-heart)" stroke="#6f1f18" stroke-width="1.3"/>
        <!-- 肝臟 -->
        <path data-part="肝臟" d="M232 150 Q288 146 292 174 Q288 190 258 190 Q228 188 224 168 Q224 154 232 150 Z" fill="url(#dog-liver)" stroke="#4a1c12" stroke-width="1.2"/>
        <!-- 胃 -->
        <path data-part="胃" d="M186 152 Q222 148 224 172 Q222 190 194 190 Q166 188 166 168 Q168 154 186 152 Z" fill="#c98a6a" stroke="#9a6144" stroke-width="1.2"/>
        <!-- 腎臟 -->
        <path data-part="腎臟" d="M150 146 Q166 146 168 162 Q166 176 150 176 Q140 168 142 156 Q144 148 150 146 Z" fill="#7d3a2c" stroke="#552317" stroke-width="1.1"/>
        <!-- 小腸 -->
        <path data-part="小腸" d="M96 168 Q80 178 92 194 Q110 206 140 202 Q176 204 180 186 Q182 172 160 170 Q130 168 96 168 Z" fill="url(#dog-intestine)" stroke="#8a5528" stroke-width="1.2"/>
        <circle cx="118" cy="188" r="7" fill="none" stroke="#8a5528" stroke-width="1.8"/>
        <circle cx="150" cy="190" r="7" fill="none" stroke="#8a5528" stroke-width="1.8"/>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="370" y1="140" x2="390" y2="80" stroke="#555" stroke-width="1"/>
          <text x="380" y="72">氣管</text>
          <line x1="290" y1="150" x2="290" y2="70" stroke="#555" stroke-width="1"/>
          <text x="272" y="62">肺</text>
          <line x1="320" y1="170" x2="360" y2="240" stroke="#555" stroke-width="1"/>
          <text x="350" y="256">心臟</text>
          <line x1="258" y1="180" x2="270" y2="260" stroke="#555" stroke-width="1"/>
          <text x="252" y="276">肝臟</text>
          <line x1="194" y1="180" x2="200" y2="260" stroke="#555" stroke-width="1"/>
          <text x="188" y="276">胃</text>
          <line x1="152" y1="150" x2="130" y2="80" stroke="#555" stroke-width="1"/>
          <text x="116" y="72">腎臟</text>
          <line x1="120" y1="196" x2="90" y2="270" stroke="#555" stroke-width="1"/>
          <text x="70" y="286">小腸</text>
        </g>`,
        parts: [
          { name: "氣管", desc: "連通鼻腔與肺的呼吸管道。" },
          { name: "肺", desc: "進行氣體交換，供給血氧。" },
          { name: "心臟", desc: "四腔幫浦，推動血液循環。" },
          { name: "肝臟", desc: "體積大，負責代謝與解毒。" },
          { name: "胃", desc: "肉食性單胃，可容納大量食物。" },
          { name: "腎臟", desc: "過濾血液並排出代謝廢物。" },
          { name: "小腸", desc: "吸收養分的主要器官。" }
        ]
      }
    ]
  });

  /* ============================================================
   * 3. 貓 CAT — 外部形態 / 骨骼
   * ============================================================ */
  R({
    id: "cat",
    name: "貓",
    latin: "Felis catus",
    emoji: "🐈",
    kingdom: "animalia",
    group: "mammals",
    rank: "食肉目・貓科",
    summary: "貓是敏捷的小型食肉獸，具可伸縮的爪、柔軟脊椎與極佳平衡感。夜視力強、聽覺靈敏，是專門的伏擊型掠食者。",
    views: [
      {
        id: "external",
        name: "外部形態",
        viewBox: "0 0 460 330",
        svg: `
        <defs>
          <linearGradient id="cat-fur" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#8f8a86"/>
            <stop offset="100%" stop-color="#5f5b57"/>
          </linearGradient>
          <radialGradient id="cat-fur-hi" cx="40%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#b3aea9"/>
            <stop offset="100%" stop-color="#6b6763"/>
          </radialGradient>
        </defs>
        <!-- 尾（上翹） -->
        <path data-part="尾" d="M64 180 Q30 176 26 130 Q22 96 40 82 Q48 92 44 122 Q42 152 62 168 Z" fill="url(#cat-fur)" stroke="#3f3b37" stroke-width="1.2"/>
        <!-- 軀幹 -->
        <path data-part="軀幹" d="M66 180 Q84 148 140 146 L300 148 Q346 150 366 172 Q360 214 320 222 L110 224 Q74 214 66 190 Z" fill="url(#cat-fur-hi)" stroke="#3f3b37" stroke-width="1.4"/>
        <!-- 後腿 -->
        <path data-part="後肢" d="M100 214 Q92 258 96 296 Q96 306 108 306 L116 306 Q116 258 124 218 Z" fill="url(#cat-fur)" stroke="#3f3b37" stroke-width="1.2"/>
        <path d="M92 302 Q88 312 100 314 L120 312 L120 302 Z" fill="url(#cat-fur-hi)" stroke="#3f3b37" stroke-width="1"/>
        <!-- 前腿 -->
        <path data-part="前肢" d="M300 218 Q296 260 300 298 Q300 308 312 308 L320 308 Q322 260 324 220 Z" fill="url(#cat-fur)" stroke="#3f3b37" stroke-width="1.2"/>
        <path d="M296 304 Q292 314 304 316 L324 314 L324 304 Z" fill="url(#cat-fur-hi)" stroke="#3f3b37" stroke-width="1"/>
        <!-- 頭 -->
        <path d="M338 152 Q356 132 386 132 Q416 132 428 156 Q422 184 392 188 Q360 186 344 172 Z" fill="url(#cat-fur-hi)" stroke="#3f3b37" stroke-width="1.4"/>
        <!-- 耳 -->
        <path data-part="耳" d="M358 138 Q352 108 374 108 Q378 126 374 142 Z" fill="url(#cat-fur)" stroke="#3f3b37" stroke-width="1.2"/>
        <path data-part="耳" d="M404 138 Q410 108 388 108 Q384 126 388 142 Z" fill="url(#cat-fur)" stroke="#3f3b37" stroke-width="1.2"/>
        <!-- 眼 -->
        <ellipse data-part="眼" cx="376" cy="156" rx="5.5" ry="6.5" fill="#a9c34a"/>
        <ellipse cx="376" cy="156" rx="1.6" ry="6" fill="#20180f"/>
        <ellipse data-part="眼" cx="402" cy="156" rx="5.5" ry="6.5" fill="#a9c34a"/>
        <ellipse cx="402" cy="156" rx="1.6" ry="6" fill="#20180f"/>
        <!-- 鼻/口 -->
        <path data-part="鼻" d="M386 168 L392 168 L389 173 Z" fill="#c98"/>
        <!-- 鬍鬚 -->
        <path data-part="鬍鬚" d="M388 172 Q420 168 440 160 M388 174 Q420 176 442 178 M388 176 Q416 184 436 194" fill="none" stroke="#e8e4df" stroke-width="0.9"/>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="34" y1="100" x2="26" y2="52" stroke="#555" stroke-width="1"/>
          <text x="16" y="44">尾</text>
          <line x1="366" y1="118" x2="376" y2="70" stroke="#555" stroke-width="1"/>
          <text x="356" y="62">耳</text>
          <line x1="376" y1="156" x2="330" y2="90" stroke="#555" stroke-width="1"/>
          <text x="312" y="82">眼</text>
          <line x1="389" y1="171" x2="420" y2="240" stroke="#555" stroke-width="1"/>
          <text x="412" y="256">鼻</text>
          <line x1="430" y1="176" x2="446" y2="220" stroke="#555" stroke-width="1"/>
          <text x="430" y="236">鬍鬚</text>
          <line x1="200" y1="180" x2="200" y2="96" stroke="#555" stroke-width="1"/>
          <text x="180" y="88">軀幹</text>
          <line x1="310" y1="280" x2="330" y2="326" stroke="#555" stroke-width="1"/>
          <text x="320" y="328">前肢</text>
          <line x1="106" y1="280" x2="86" y2="326" stroke="#555" stroke-width="1"/>
          <text x="66" y="328">後肢</text>
        </g>`,
        parts: [
          { name: "頭部", desc: "圓短的頭型，感官集中。" },
          { name: "耳", desc: "三角形直立耳，能獨立轉動定位聲源。" },
          { name: "眼", desc: "瞳孔可縱向收縮，夜視力極佳。" },
          { name: "鼻", desc: "嗅覺輔助辨識環境與獵物。" },
          { name: "鬍鬚", desc: "觸覺鬚，感測空間與氣流。" },
          { name: "軀幹", desc: "柔軟靈活，脊椎可高度彎曲。" },
          { name: "前肢", desc: "帶可伸縮利爪，用於捕獵攀爬。" },
          { name: "後肢", desc: "強力後腿，提供跳躍爆發力。" },
          { name: "尾", desc: "維持平衡並傳達情緒。" }
        ]
      },
      {
        id: "skeleton",
        name: "骨骼系統",
        viewBox: "0 0 460 330",
        svg: `
        <defs>
          <linearGradient id="cat-bone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f3ecd9"/>
            <stop offset="100%" stop-color="#d2c4a2"/>
          </linearGradient>
        </defs>
        <g fill="url(#cat-bone)" stroke="#b3a67f" stroke-width="1.1">
          <!-- 顱骨 -->
          <path data-part="顱骨" d="M360 140 Q364 118 392 116 Q424 116 428 146 Q422 168 396 168 Q368 166 360 152 Z"/>
          <!-- 下頜 -->
          <path data-part="下頜" d="M368 164 Q392 176 418 164 L416 172 Q392 182 370 172 Z"/>
          <!-- 脊椎（彎曲） -->
          <path data-part="脊椎" d="M84 176 Q140 150 220 150 Q300 150 350 156" fill="none" stroke="#bcae86" stroke-width="7" stroke-linecap="round"/>
          <!-- 肋骨 -->
          <g data-part="肋骨" fill="none" stroke="#c8ba92" stroke-width="2.8">
            <path d="M300 156 Q302 196 292 216"/>
            <path d="M280 154 Q278 198 266 218"/>
            <path d="M258 152 Q252 198 240 218"/>
            <path d="M236 152 Q228 198 216 216"/>
            <path d="M214 152 Q206 194 196 212"/>
          </g>
          <!-- 骨盆 -->
          <path data-part="骨盆" d="M90 152 Q74 164 80 190 Q92 206 110 198 Q118 176 110 158 Q102 150 90 152 Z"/>
          <!-- 肩胛 -->
          <path data-part="肩胛" d="M318 154 Q328 176 320 202 L310 200 Q316 174 308 156 Z"/>
          <!-- 前肢骨 -->
          <path data-part="前肢骨" d="M314 200 L306 246 L316 248 L324 202 Z"/>
          <path d="M306 246 L300 300 L310 302 L316 248 Z"/>
          <path d="M298 300 Q296 312 308 314 L318 310 L316 302 Z"/>
          <!-- 後肢骨 -->
          <path data-part="後肢骨" d="M102 196 L94 244 L106 246 L114 198 Z"/>
          <path d="M94 244 L92 300 L102 302 L108 246 Z"/>
          <path d="M90 300 Q88 312 100 314 L110 310 L108 302 Z"/>
          <!-- 尾椎 -->
          <path data-part="尾椎" d="M84 176 Q52 172 44 130 Q40 100 54 88" fill="none" stroke="#bcae86" stroke-width="3.6" stroke-linecap="round"/>
        </g>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="396" y1="126" x2="404" y2="76" stroke="#555" stroke-width="1"/>
          <text x="388" y="68">顱骨</text>
          <line x1="400" y1="176" x2="420" y2="230" stroke="#555" stroke-width="1"/>
          <text x="410" y="246">下頜</text>
          <line x1="200" y1="150" x2="200" y2="90" stroke="#555" stroke-width="1"/>
          <text x="176" y="82">脊椎</text>
          <line x1="250" y1="196" x2="250" y2="256" stroke="#555" stroke-width="1"/>
          <text x="230" y="272">肋骨</text>
          <line x1="92" y1="172" x2="36" y2="170" stroke="#555" stroke-width="1"/>
          <text x="6" y="174">骨盆</text>
          <line x1="318" y1="176" x2="378" y2="140" stroke="#555" stroke-width="1"/>
          <text x="374" y="132">肩胛</text>
          <line x1="314" y1="270" x2="350" y2="324" stroke="#555" stroke-width="1"/>
          <text x="340" y="326">前肢骨</text>
          <line x1="100" y1="270" x2="74" y2="324" stroke="#555" stroke-width="1"/>
          <text x="54" y="326">後肢骨</text>
          <line x1="48" y1="110" x2="26" y2="74" stroke="#555" stroke-width="1"/>
          <text x="10" y="66">尾椎</text>
        </g>`,
        parts: [
          { name: "顱骨", desc: "短而圓的頭骨，眼窩大。" },
          { name: "下頜", desc: "帶尖銳犬齒，適合咬殺獵物。" },
          { name: "脊椎", desc: "極富彈性，使身體能大幅伸展彎曲。" },
          { name: "肋骨", desc: "保護胸腔內的心肺。" },
          { name: "肩胛", desc: "浮動肩胛，讓步伐柔軟無聲。" },
          { name: "骨盆", desc: "連接後肢，傳遞跳躍力量。" },
          { name: "前肢骨", desc: "支撐與捕獵，鎖骨退化增加靈活度。" },
          { name: "後肢骨", desc: "肌肉發達，提供強大跳躍力。" },
          { name: "尾椎", desc: "由多節尾椎組成，靈活調整平衡。" }
        ]
      }
    ]
  });

  /* ============================================================
   * 4. 牛 COW — 外部形態 / 消化系統（四胃）
   * ============================================================ */
  R({
    id: "cow",
    name: "牛",
    latin: "Bos taurus",
    emoji: "🐄",
    kingdom: "animalia",
    group: "mammals",
    rank: "偶蹄目・牛科",
    summary: "牛是典型的反芻草食動物，具四個胃室（瘤胃、網胃、瓣胃、皺胃），能藉微生物與反芻分解粗纖維。頭上多具角，四肢末端為偶蹄。",
    views: [
      {
        id: "external",
        name: "外部形態",
        viewBox: "0 0 460 340",
        svg: `
        <defs>
          <linearGradient id="cow-hide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e8e2da"/>
            <stop offset="100%" stop-color="#c3b8ab"/>
          </linearGradient>
          <radialGradient id="cow-hide-hi" cx="40%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#f4efe8"/>
            <stop offset="100%" stop-color="#cbc0b2"/>
          </radialGradient>
        </defs>
        <!-- 尾 -->
        <path data-part="尾" d="M56 150 Q40 180 44 230 Q48 244 40 258 Q36 250 32 236 Q30 190 44 150 Z" fill="url(#cow-hide)" stroke="#8a7f70" stroke-width="1.2"/>
        <ellipse cx="40" cy="258" rx="6" ry="10" fill="#5a4f42"/>
        <!-- 軀幹 -->
        <path data-part="軀幹" d="M60 150 Q84 108 160 106 L320 108 Q372 110 392 138 Q388 200 340 214 L110 216 Q68 204 60 168 Z" fill="url(#cow-hide-hi)" stroke="#8a7f70" stroke-width="1.4"/>
        <!-- 花斑 -->
        <path d="M140 130 Q180 122 200 150 Q180 176 150 168 Q126 152 140 130 Z" fill="#6b5f52" opacity="0.55"/>
        <path d="M270 140 Q310 134 320 168 Q300 190 272 180 Q256 158 270 140 Z" fill="#6b5f52" opacity="0.55"/>
        <!-- 後腿 -->
        <path data-part="後肢" d="M96 206 Q88 264 92 306 Q92 316 106 316 L116 316 Q116 262 122 210 Z" fill="url(#cow-hide)" stroke="#8a7f70" stroke-width="1.2"/>
        <path data-part="蹄" d="M88 312 Q84 324 100 326 L120 322 L118 312 Z" fill="#4a4038" stroke="#2f2a24" stroke-width="1"/>
        <!-- 前腿 -->
        <path data-part="前肢" d="M320 210 Q314 266 318 308 Q318 318 332 318 L342 318 Q344 264 346 212 Z" fill="url(#cow-hide)" stroke="#8a7f70" stroke-width="1.2"/>
        <path data-part="蹄" d="M314 314 Q310 326 326 328 L346 324 L344 314 Z" fill="#4a4038" stroke="#2f2a24" stroke-width="1"/>
        <!-- 頭 -->
        <path d="M360 140 Q382 116 414 120 Q440 126 444 152 Q440 178 414 184 L384 178 Q364 168 360 152 Z" fill="url(#cow-hide-hi)" stroke="#8a7f70" stroke-width="1.4"/>
        <!-- 角 -->
        <path data-part="角" d="M380 122 Q372 96 356 90 Q364 104 372 124 Z" fill="#d8cdb8" stroke="#9a8d72" stroke-width="1.1"/>
        <path data-part="角" d="M410 120 Q420 94 438 90 Q428 106 418 124 Z" fill="#d8cdb8" stroke="#9a8d72" stroke-width="1.1"/>
        <!-- 耳 -->
        <path data-part="耳" d="M420 140 Q444 132 452 146 Q446 158 428 156 Z" fill="url(#cow-hide)" stroke="#8a7f70" stroke-width="1.1"/>
        <!-- 眼 -->
        <ellipse data-part="眼" cx="398" cy="148" rx="5" ry="4.5" fill="#2a1f16"/>
        <circle cx="396" cy="146" r="1.4" fill="#fff"/>
        <!-- 鼻口 -->
        <path data-part="口鼻" d="M436 156 Q452 156 452 170 Q448 180 432 178 L430 164 Z" fill="url(#cow-hide)" stroke="#8a7f70" stroke-width="1.1"/>
        <ellipse cx="444" cy="168" rx="2.6" ry="3.4" fill="#3a2a24"/>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="38" y1="230" x2="18" y2="270" stroke="#555" stroke-width="1"/>
          <text x="8" y="286">尾</text>
          <line x1="380" y1="108" x2="380" y2="60" stroke="#555" stroke-width="1"/>
          <text x="368" y="52">角</text>
          <line x1="438" y1="146" x2="452" y2="106" stroke="#555" stroke-width="1"/>
          <text x="440" y="98">耳</text>
          <line x1="398" y1="148" x2="360" y2="72" stroke="#555" stroke-width="1"/>
          <text x="340" y="64">眼</text>
          <line x1="444" y1="170" x2="452" y2="226" stroke="#555" stroke-width="1"/>
          <text x="428" y="242">口鼻</text>
          <line x1="200" y1="160" x2="200" y2="70" stroke="#555" stroke-width="1"/>
          <text x="180" y="62">軀幹</text>
          <line x1="330" y1="290" x2="356" y2="332" stroke="#555" stroke-width="1"/>
          <text x="348" y="334">前肢</text>
          <line x1="104" y1="290" x2="80" y2="332" stroke="#555" stroke-width="1"/>
          <text x="60" y="334">後肢</text>
          <line x1="94" y1="320" x2="60" y2="300" stroke="#555" stroke-width="1"/>
          <text x="30" y="304">蹄</text>
        </g>`,
        parts: [
          { name: "頭部", desc: "頂端具角，前端為採食的口鼻。" },
          { name: "角", desc: "由骨心與角質鞘構成，用於防禦。" },
          { name: "耳", desc: "大而可轉動，聽覺靈敏。" },
          { name: "眼", desc: "側置大眼，視野接近環繞。" },
          { name: "口鼻", desc: "寬闊口部與濕潤鼻鏡，適合啃草。" },
          { name: "軀幹", desc: "體型龐大，容納巨大的四胃消化系統。" },
          { name: "前肢", desc: "支撐前身重量。" },
          { name: "後肢", desc: "支撐並推動身體前進。" },
          { name: "蹄", desc: "偶蹄（兩趾），承重耐磨。" },
          { name: "尾", desc: "末端叢毛，用以驅趕蚊蠅。" }
        ]
      },
      {
        id: "digestive",
        name: "消化系統",
        viewBox: "0 0 460 340",
        svg: `
        <defs>
          <linearGradient id="cow-body2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f0e6da"/>
            <stop offset="100%" stop-color="#ddc9b7"/>
          </linearGradient>
          <radialGradient id="cow-rumen" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#d19a72"/>
            <stop offset="100%" stop-color="#9e6438"/>
          </radialGradient>
          <radialGradient id="cow-reticulum" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#c98a6a"/>
            <stop offset="100%" stop-color="#8a5238"/>
          </radialGradient>
          <radialGradient id="cow-omasum" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#c07d5c"/>
            <stop offset="100%" stop-color="#824a30"/>
          </radialGradient>
          <radialGradient id="cow-abomasum" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#d79c86"/>
            <stop offset="100%" stop-color="#9c5d48"/>
          </radialGradient>
          <linearGradient id="cow-intestine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#e0a06f"/>
            <stop offset="100%" stop-color="#b9743f"/>
          </linearGradient>
        </defs>
        <!-- 身體輪廓 -->
        <path d="M62 150 Q86 108 160 106 L360 110 Q412 112 436 150 Q420 214 350 222 L110 224 Q70 210 62 170 Z" fill="url(#cow-body2)" stroke="#c7ac93" stroke-width="1.4" opacity="0.6"/>
        <!-- 食道 -->
        <path data-part="食道" d="M394 148 Q360 150 330 158" fill="none" stroke="#cbb2a0" stroke-width="5" stroke-linecap="round"/>
        <!-- 瘤胃（最大，左後） -->
        <path data-part="瘤胃" d="M110 150 Q80 158 78 196 Q80 214 116 216 Q170 216 180 190 Q184 156 156 148 Q130 144 110 150 Z" fill="url(#cow-rumen)" stroke="#6f4527" stroke-width="1.4"/>
        <path d="M92 182 Q150 178 176 184" fill="none" stroke="#7a4c2b" stroke-width="1.4" opacity="0.6"/>
        <!-- 網胃（前下，蜂巢） -->
        <path data-part="網胃" d="M186 176 Q206 168 224 180 Q230 196 216 208 Q196 214 184 200 Q180 184 186 176 Z" fill="url(#cow-reticulum)" stroke="#5f3822" stroke-width="1.3"/>
        <path d="M194 184 l8 4 l-2 8 M208 182 l6 6 l-4 6 M200 196 l6 4" fill="none" stroke="#4a2c1a" stroke-width="0.8" opacity="0.7"/>
        <!-- 瓣胃（球形，多葉片） -->
        <path data-part="瓣胃" d="M236 156 Q262 150 274 172 Q276 192 254 198 Q234 196 230 176 Q230 162 236 156 Z" fill="url(#cow-omasum)" stroke="#5a3320" stroke-width="1.3"/>
        <path d="M244 158 L246 194 M254 156 L256 196 M264 160 L266 192" fill="none" stroke="#4a2818" stroke-width="0.9" opacity="0.7"/>
        <!-- 皺胃（真胃，前方） -->
        <path data-part="皺胃" d="M282 168 Q312 162 322 186 Q322 206 296 210 Q272 206 272 186 Q274 172 282 168 Z" fill="url(#cow-abomasum)" stroke="#6e3d2c" stroke-width="1.3"/>
        <path d="M284 178 Q300 174 316 182 M282 188 Q300 186 314 192" fill="none" stroke="#7a4534" stroke-width="0.9" opacity="0.6"/>
        <!-- 小腸 -->
        <path data-part="小腸" d="M96 200 Q78 214 92 228 Q116 238 150 234 Q188 236 190 216 Q190 204 168 204 Q130 202 96 200 Z" fill="url(#cow-intestine)" stroke="#8a5528" stroke-width="1.2"/>
        <circle cx="116" cy="220" r="7" fill="none" stroke="#8a5528" stroke-width="1.8"/>
        <circle cx="146" cy="224" r="7" fill="none" stroke="#8a5528" stroke-width="1.8"/>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="360" y1="152" x2="388" y2="86" stroke="#555" stroke-width="1"/>
          <text x="378" y="78">食道</text>
          <line x1="120" y1="188" x2="60" y2="90" stroke="#555" stroke-width="1"/>
          <text x="40" y="82">瘤胃</text>
          <line x1="204" y1="196" x2="188" y2="272" stroke="#555" stroke-width="1"/>
          <text x="168" y="288">網胃</text>
          <line x1="252" y1="180" x2="248" y2="86" stroke="#555" stroke-width="1"/>
          <text x="228" y="78">瓣胃</text>
          <line x1="298" y1="192" x2="316" y2="270" stroke="#555" stroke-width="1"/>
          <text x="304" y="286">皺胃</text>
          <line x1="120" y1="226" x2="86" y2="290" stroke="#555" stroke-width="1"/>
          <text x="66" y="306">小腸</text>
        </g>`,
        parts: [
          { name: "食道", desc: "輸送草料入胃，反芻時逆向送回口中。" },
          { name: "瘤胃", desc: "最大胃室，微生物在此發酵分解粗纖維。" },
          { name: "網胃", desc: "蜂巢狀內壁，攔截異物並協助反芻。" },
          { name: "瓣胃", desc: "多葉片狀，吸收水分並磨細食糜。" },
          { name: "皺胃", desc: "真正的胃，分泌胃酸酵素進行化學消化。" },
          { name: "小腸", desc: "吸收經四胃處理後的養分。" }
        ]
      }
    ]
  });

  /* ============================================================
   * 5. 鯨 WHALE（藍鯨）— 外部形態 / 內部構造
   * ============================================================ */
  R({
    id: "whale",
    name: "鯨（藍鯨）",
    latin: "Balaenoptera musculus",
    emoji: "🐋",
    kingdom: "animalia",
    group: "mammals",
    rank: "鯨偶蹄目・鬚鯨科",
    summary: "藍鯨是地球上體型最大的動物，屬鬚鯨類。用鯨鬚濾食磷蝦，經頭頂噴氣孔呼吸，以鰭肢與水平尾鰭在海中游動，是完全水棲的哺乳類。",
    views: [
      {
        id: "external",
        name: "外部形態",
        viewBox: "0 0 460 260",
        svg: `
        <defs>
          <linearGradient id="whale-skin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#5f7d97"/>
            <stop offset="55%" stop-color="#43617a"/>
            <stop offset="100%" stop-color="#2e4557"/>
          </linearGradient>
          <linearGradient id="whale-belly" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#b8c6cd"/>
            <stop offset="100%" stop-color="#8a9ba5"/>
          </linearGradient>
          <radialGradient id="whale-spout" cx="50%" cy="90%" r="80%">
            <stop offset="0%" stop-color="#dbe9f2" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#dbe9f2" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <!-- 噴出的水氣 -->
        <path d="M96 78 Q92 40 82 22 M96 78 Q100 44 108 26 M96 78 Q96 46 96 24" fill="none" stroke="#cfe1ec" stroke-width="3" opacity="0.7"/>
        <ellipse cx="96" cy="40" rx="26" ry="34" fill="url(#whale-spout)"/>
        <!-- 身體 -->
        <path data-part="軀幹" d="M92 120 Q140 92 240 96 Q360 100 410 128 Q436 140 410 152 Q360 178 240 178 Q150 178 100 154 Q78 140 92 120 Z" fill="url(#whale-skin)" stroke="#213541" stroke-width="1.4"/>
        <!-- 腹部溝紋（喉腹褶） -->
        <path data-part="喉腹褶" d="M120 150 Q220 176 330 168 L330 176 Q220 184 120 158 Z" fill="url(#whale-belly)" stroke="#6b7d87" stroke-width="0.8"/>
        <path d="M140 158 L140 172 M160 160 L160 174 M180 162 L180 176 M200 162 L200 177 M220 162 L220 177 M240 162 L240 177 M260 161 L260 176" stroke="#5c6e78" stroke-width="0.8" opacity="0.7"/>
        <!-- 尾柄 + 尾鰭 -->
        <path data-part="尾鰭" d="M408 138 Q444 118 452 96 Q446 118 440 138 Q446 158 452 180 Q444 158 408 142 Z" fill="url(#whale-skin)" stroke="#213541" stroke-width="1.3"/>
        <!-- 鰭肢 -->
        <path data-part="鰭肢" d="M170 168 Q168 200 186 216 Q196 214 194 196 Q190 178 182 168 Z" fill="url(#whale-skin)" stroke="#213541" stroke-width="1.2"/>
        <!-- 背鰭（小） -->
        <path data-part="背鰭" d="M330 100 Q338 82 350 84 Q346 96 342 104 Z" fill="url(#whale-skin)" stroke="#213541" stroke-width="1.1"/>
        <!-- 噴氣孔 -->
        <ellipse data-part="噴氣孔" cx="96" cy="112" rx="7" ry="4" fill="#182731" stroke="#0f1c24" stroke-width="1"/>
        <!-- 眼 -->
        <ellipse data-part="眼" cx="116" cy="140" rx="3.5" ry="3" fill="#141f26"/>
        <!-- 口線 -->
        <path data-part="口" d="M92 132 Q108 138 130 138" fill="none" stroke="#1a2a34" stroke-width="1.4"/>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="96" y1="40" x2="60" y2="24" stroke="#555" stroke-width="1"/>
          <text x="14" y="24">噴出水氣</text>
          <line x1="96" y1="112" x2="150" y2="66" stroke="#555" stroke-width="1"/>
          <text x="154" y="62">噴氣孔</text>
          <line x1="116" y1="140" x2="70" y2="196" stroke="#555" stroke-width="1"/>
          <text x="46" y="212">眼</text>
          <line x1="110" y1="136" x2="70" y2="160" stroke="#555" stroke-width="1"/>
          <text x="42" y="164">口</text>
          <line x1="188" y1="200" x2="180" y2="240" stroke="#555" stroke-width="1"/>
          <text x="160" y="254">鰭肢</text>
          <line x1="340" y1="90" x2="360" y2="52" stroke="#555" stroke-width="1"/>
          <text x="350" y="44">背鰭</text>
          <line x1="446" y1="140" x2="440" y2="228" stroke="#555" stroke-width="1"/>
          <text x="420" y="244">尾鰭</text>
          <line x1="220" y1="176" x2="240" y2="220" stroke="#555" stroke-width="1"/>
          <text x="220" y="236">喉腹褶</text>
        </g>`,
        parts: [
          { name: "噴氣孔", desc: "位於頭頂的呼吸孔，浮出水面換氣。" },
          { name: "噴出水氣", desc: "呼氣時水氣凝結形成的高柱噴霧。" },
          { name: "軀幹", desc: "流線型巨大身軀，減少水阻。" },
          { name: "眼", desc: "位於頭側，適應水中視覺。" },
          { name: "口", desc: "巨大口裂，張口吞入海水濾食。" },
          { name: "喉腹褶", desc: "喉腹的縱溝，進食時大幅擴張容納海水。" },
          { name: "鰭肢", desc: "由前肢演化，用於轉向與平衡。" },
          { name: "背鰭", desc: "背部小鰭，協助穩定游動。" },
          { name: "尾鰭", desc: "水平尾鰭，上下擺動提供前進動力。" }
        ]
      },
      {
        id: "internal",
        name: "內部構造",
        viewBox: "0 0 460 260",
        svg: `
        <defs>
          <linearGradient id="whale-body2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#8fa4b0"/>
            <stop offset="100%" stop-color="#66808f"/>
          </linearGradient>
          <linearGradient id="whale-lung" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e39aa0"/>
            <stop offset="100%" stop-color="#c66d78"/>
          </linearGradient>
          <radialGradient id="whale-heart" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#c25446"/>
            <stop offset="100%" stop-color="#8f2b22"/>
          </radialGradient>
          <linearGradient id="whale-baleen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3a3630"/>
            <stop offset="100%" stop-color="#20201c"/>
          </linearGradient>
        </defs>
        <!-- 身體輪廓 -->
        <path d="M92 120 Q140 92 240 96 Q360 100 410 128 Q436 140 410 152 Q360 178 240 178 Q150 178 100 154 Q78 140 92 120 Z" fill="url(#whale-body2)" stroke="#3a4d58" stroke-width="1.4" opacity="0.65"/>
        <!-- 鯨鬚（口內濾板） -->
        <g data-part="鯨鬚">
          <path d="M96 128 Q120 122 148 124 L148 150 Q120 150 96 146 Z" fill="url(#whale-baleen)" stroke="#15140f" stroke-width="1"/>
          <path d="M100 128 L100 148 M108 127 L108 149 M116 126 L116 150 M124 126 L124 150 M132 126 L132 150 M140 126 L140 150" stroke="#5a564d" stroke-width="0.9"/>
        </g>
        <!-- 肺（成對，巨大） -->
        <path data-part="肺" d="M170 116 Q210 110 230 130 Q234 150 208 158 Q176 160 168 138 Q166 122 170 116 Z" fill="url(#whale-lung)" stroke="#a75662" stroke-width="1.2"/>
        <path d="M186 120 Q206 128 214 148" fill="none" stroke="#b57c84" stroke-width="1" opacity="0.7"/>
        <!-- 氣管（連噴氣孔） -->
        <path data-part="氣管" d="M100 112 Q130 120 172 130" fill="none" stroke="#cbb2a0" stroke-width="4" stroke-linecap="round"/>
        <!-- 心臟（極大） -->
        <path data-part="心臟" d="M244 128 Q230 116 220 130 Q214 146 240 164 Q252 160 260 146 Q262 132 250 128 Q248 126 244 128 Z" fill="url(#whale-heart)" stroke="#6f1f18" stroke-width="1.4"/>
        <!-- 肝臟 -->
        <path data-part="肝臟" d="M276 132 Q320 128 330 150 Q326 164 296 166 Q272 164 268 148 Q268 136 276 132 Z" fill="#7a3324" stroke="#4a1c12" stroke-width="1.2"/>
        <!-- 胃 -->
        <path data-part="胃" d="M336 138 Q364 134 368 154 Q366 168 344 168 Q322 166 322 150 Q324 140 336 138 Z" fill="#c98a6a" stroke="#9a6144" stroke-width="1.2"/>
        <!-- 脊椎 -->
        <path data-part="脊椎" d="M120 108 Q240 104 408 132" fill="none" stroke="#d8cbab" stroke-width="4" stroke-linecap="round" opacity="0.85"/>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="120" y1="136" x2="90" y2="210" stroke="#555" stroke-width="1"/>
          <text x="70" y="226">鯨鬚</text>
          <line x1="200" y1="130" x2="180" y2="60" stroke="#555" stroke-width="1"/>
          <text x="164" y="52">肺</text>
          <line x1="140" y1="126" x2="120" y2="60" stroke="#555" stroke-width="1"/>
          <text x="100" y="52">氣管</text>
          <line x1="242" y1="150" x2="240" y2="222" stroke="#555" stroke-width="1"/>
          <text x="220" y="238">心臟</text>
          <line x1="300" y1="150" x2="300" y2="60" stroke="#555" stroke-width="1"/>
          <text x="284" y="52">肝臟</text>
          <line x1="345" y1="150" x2="360" y2="220" stroke="#555" stroke-width="1"/>
          <text x="350" y="236">胃</text>
          <line x1="360" y1="120" x2="410" y2="80" stroke="#555" stroke-width="1"/>
          <text x="400" y="72">脊椎</text>
        </g>`,
        parts: [
          { name: "噴氣孔", desc: "與氣管相連，於水面完成換氣。" },
          { name: "氣管", desc: "由噴氣孔通往肺部的呼吸道。" },
          { name: "肺", desc: "換氣效率極高，一次呼吸可更新大量空氣。" },
          { name: "鯨鬚", desc: "角質濾板取代牙齒，過濾磷蝦等小型獵物。" },
          { name: "心臟", desc: "體型巨大，強力推動全身血液循環。" },
          { name: "肝臟", desc: "巨大的代謝與解毒器官。" },
          { name: "胃", desc: "多室構造，消化大量磷蝦。" },
          { name: "脊椎", desc: "支撐龐大身軀，帶動尾鰭上下擺動。" }
        ]
      }
    ]
  });

  /* ============================================================
   * 6. 蝙蝠 BAT — 外部形態（翼膜／前肢骨骼）
   * ============================================================ */
  R({
    id: "bat",
    name: "蝙蝠",
    latin: "Chiroptera",
    emoji: "🦇",
    kingdom: "animalia",
    group: "mammals",
    rank: "翼手目",
    summary: "蝙蝠是唯一能真正振翅飛行的哺乳類。前肢指骨極度延長，之間張開薄翼膜；多以回聲定位在夜間捕食昆蟲。",
    views: [
      {
        id: "external",
        name: "外部形態",
        viewBox: "0 0 460 380",
        svg: `
        <defs>
          <linearGradient id="bat-fur" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#6b5040"/>
            <stop offset="100%" stop-color="#3f2e22"/>
          </linearGradient>
          <radialGradient id="bat-fur-hi" cx="42%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#8a6a54"/>
            <stop offset="100%" stop-color="#4a3628"/>
          </radialGradient>
          <linearGradient id="bat-membrane" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#7a5a4c" stop-opacity="0.92"/>
            <stop offset="100%" stop-color="#4a342a" stop-opacity="0.92"/>
          </linearGradient>
        </defs>
        <!-- 左翼膜 -->
        <path data-part="翼膜" d="M210 150 Q120 96 40 118 Q66 150 60 176 Q100 168 130 186 Q108 210 96 240 Q140 220 168 236 Q160 262 168 288 Q192 262 210 250 Z" fill="url(#bat-membrane)" stroke="#2f2018" stroke-width="1.3"/>
        <!-- 左指骨（延長） -->
        <g data-part="指骨" stroke="#e6dcc4" stroke-width="2" fill="none" stroke-linecap="round">
          <path d="M210 150 Q120 100 42 120"/>
          <path d="M210 152 Q125 132 62 176"/>
          <path d="M210 158 Q140 178 96 240"/>
          <path d="M210 168 Q178 210 168 288"/>
        </g>
        <!-- 右翼膜 -->
        <path data-part="翼膜" d="M250 150 Q340 96 420 118 Q394 150 400 176 Q360 168 330 186 Q352 210 364 240 Q320 220 292 236 Q300 262 292 288 Q268 262 250 250 Z" fill="url(#bat-membrane)" stroke="#2f2018" stroke-width="1.3"/>
        <!-- 右指骨 -->
        <g data-part="指骨" stroke="#e6dcc4" stroke-width="2" fill="none" stroke-linecap="round">
          <path d="M250 150 Q340 100 418 120"/>
          <path d="M250 152 Q335 132 398 176"/>
          <path d="M250 158 Q320 178 364 240"/>
          <path d="M250 168 Q282 210 292 288"/>
        </g>
        <!-- 拇指鉤爪 -->
        <path data-part="拇指" d="M210 150 Q198 138 190 142 Q196 150 206 154 Z" fill="#e6dcc4" stroke="#b3a67f" stroke-width="1"/>
        <path data-part="拇指" d="M250 150 Q262 138 270 142 Q264 150 254 154 Z" fill="#e6dcc4" stroke="#b3a67f" stroke-width="1"/>
        <!-- 軀幹 -->
        <path data-part="軀幹" d="M212 148 Q206 200 214 262 Q230 274 246 262 Q254 200 248 148 Q232 138 212 148 Z" fill="url(#bat-fur-hi)" stroke="#2f2018" stroke-width="1.4"/>
        <!-- 後足（倒掛） -->
        <path data-part="後足" d="M220 262 Q214 288 220 300 Q226 292 226 274 Z" fill="url(#bat-fur)" stroke="#2f2018" stroke-width="1.1"/>
        <path data-part="後足" d="M240 262 Q246 288 240 300 Q234 292 234 274 Z" fill="url(#bat-fur)" stroke="#2f2018" stroke-width="1.1"/>
        <!-- 頭 -->
        <ellipse data-part="頭部" cx="230" cy="126" rx="24" ry="22" fill="url(#bat-fur-hi)" stroke="#2f2018" stroke-width="1.4"/>
        <!-- 耳（大） -->
        <path data-part="耳" d="M214 112 Q204 78 222 74 Q226 94 224 114 Z" fill="url(#bat-fur)" stroke="#2f2018" stroke-width="1.2"/>
        <path data-part="耳" d="M246 112 Q256 78 238 74 Q234 94 236 114 Z" fill="url(#bat-fur)" stroke="#2f2018" stroke-width="1.2"/>
        <!-- 眼 -->
        <circle data-part="眼" cx="222" cy="124" r="3" fill="#1a1108"/>
        <circle data-part="眼" cx="238" cy="124" r="3" fill="#1a1108"/>
        <!-- 鼻/口 -->
        <path d="M226 136 Q230 142 234 136" fill="none" stroke="#2f2018" stroke-width="1.2"/>
        <g class="labels" font-size="13" fill="var(--ink)">
          <line x1="90" y1="180" x2="40" y2="230" stroke="#555" stroke-width="1"/>
          <text x="18" y="246">翼膜</text>
          <line x1="150" y1="160" x2="120" y2="70" stroke="#555" stroke-width="1"/>
          <text x="96" y="62">指骨</text>
          <line x1="198" y1="146" x2="150" y2="110" stroke="#555" stroke-width="1"/>
          <text x="118" y="104">拇指</text>
          <line x1="230" y1="200" x2="316" y2="200" stroke="#555" stroke-width="1"/>
          <text x="320" y="204">軀幹</text>
          <line x1="222" y1="86" x2="180" y2="46" stroke="#555" stroke-width="1"/>
          <text x="160" y="40">耳</text>
          <line x1="222" y1="124" x2="316" y2="120" stroke="#555" stroke-width="1"/>
          <text x="320" y="124">眼</text>
          <line x1="230" y1="126" x2="316" y2="150" stroke="#555" stroke-width="1"/>
          <text x="320" y="154">頭部</text>
          <line x1="230" y1="296" x2="230" y2="336" stroke="#555" stroke-width="1"/>
          <text x="210" y="352">後足</text>
        </g>`,
        parts: [
          { name: "頭部", desc: "常具複雜鼻葉與大耳，用於回聲定位。" },
          { name: "耳", desc: "碩大耳廓，接收回聲以判定獵物位置。" },
          { name: "眼", desc: "多數種類視力有限，主要靠聽覺導航。" },
          { name: "翼膜", desc: "指骨間張開的薄膜，構成飛行翼面。" },
          { name: "指骨", desc: "極度延長的手指骨，撐開並操控翼膜。" },
          { name: "拇指", desc: "翼緣保留的短爪，用於攀爬抓握。" },
          { name: "軀幹", desc: "輕巧身軀，容納飛行所需的心肺。" },
          { name: "後足", desc: "帶鉤爪，倒掛棲息時勾住支撐物。" }
        ]
      }
    ]
  });

})();
