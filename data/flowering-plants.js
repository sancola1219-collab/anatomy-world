/* 被子植物（開花植物）寫實構造教材
 * kingdom="plantae" group="angiosperms"
 * 每主題一次 window.ANATOMY.register({...})
 */

/* ============================================================
 * 1. 花的構造 flower
 * ============================================================ */
window.ANATOMY.register({
  id: "flower",
  name: "花的構造",
  latin: "Flos",
  emoji: "🌸",
  kingdom: "plantae",
  group: "angiosperms",
  rank: "被子植物・生殖器官",
  summary: "花是被子植物的生殖器官，由花萼、花瓣、雄蕊與雌蕊四大部分組成，著生於膨大的花托上。雄蕊產生花粉，雌蕊接受花粉並在子房內形成種子。",
  views: [
    {
      id: "structure",
      name: "花的縱剖",
      viewBox: "0 0 440 480",
      svg: `
      <defs>
        <linearGradient id="flower-ext-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#eef6ff"/><stop offset="100%" stop-color="#f7fbff"/>
        </linearGradient>
        <linearGradient id="flower-ext-petal" x1="0.2" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stop-color="#f9c4de"/><stop offset="45%" stop-color="#ec7fb6"/><stop offset="100%" stop-color="#cf4f92"/>
        </linearGradient>
        <linearGradient id="flower-ext-petal2" x1="0.3" y1="1" x2="0.6" y2="0">
          <stop offset="0%" stop-color="#fddcec"/><stop offset="55%" stop-color="#f3a1cd"/><stop offset="100%" stop-color="#e178b1"/>
        </linearGradient>
        <radialGradient id="flower-ext-petalcore" cx="50%" cy="90%" r="70%">
          <stop offset="0%" stop-color="#b83b7f" stop-opacity="0.55"/><stop offset="60%" stop-color="#b83b7f" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="flower-ext-sepal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7cc686"/><stop offset="100%" stop-color="#357f46"/>
        </linearGradient>
        <linearGradient id="flower-ext-filament" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fdefbe"/><stop offset="50%" stop-color="#f5dd8f"/><stop offset="100%" stop-color="#e0bc5c"/>
        </linearGradient>
        <radialGradient id="flower-ext-anther" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stop-color="#ffe07a"/><stop offset="60%" stop-color="#f2b52f"/><stop offset="100%" stop-color="#c9860f"/>
        </radialGradient>
        <radialGradient id="flower-ext-stigma" cx="42%" cy="32%" r="70%">
          <stop offset="0%" stop-color="#ffe9a4"/><stop offset="100%" stop-color="#dc9f2a"/>
        </radialGradient>
        <linearGradient id="flower-ext-style" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#e4f4d3"/><stop offset="50%" stop-color="#bfe3a6"/><stop offset="100%" stop-color="#93c67c"/>
        </linearGradient>
        <linearGradient id="flower-ext-ovary" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#cfeab3"/><stop offset="100%" stop-color="#72b25a"/>
        </linearGradient>
        <linearGradient id="flower-ext-recept" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#9ecb7f"/><stop offset="50%" stop-color="#6ba14a"/><stop offset="100%" stop-color="#4d7a34"/>
        </linearGradient>
        <radialGradient id="flower-ext-ovule" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stop-color="#fff8e2"/><stop offset="100%" stop-color="#e3c87d"/>
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="440" height="480" fill="url(#flower-ext-sky)"/>

      <!-- 花梗 -->
      <path d="M207 366 C206 400 206 436 208 470 C213 470 217 470 221 470 C222 436 222 400 221 366 Z" fill="url(#flower-ext-recept)" stroke="#4d7a34" stroke-width="1.4"/>

      <!-- 花托 -->
      <path data-part="花托" d="M178 372 C196 396 232 396 250 372 C242 350 214 346 214 346 C214 346 186 350 178 372 Z" fill="url(#flower-ext-recept)" stroke="#4d7a34" stroke-width="1.4"/>

      <!-- 花萼（左右各一，綠色，尖披針形） -->
      <path data-part="花萼" d="M182 366 C154 350 132 314 122 288 C150 328 180 348 198 358 Z" fill="url(#flower-ext-sepal)" stroke="#2f6d3d" stroke-width="1.4"/>
      <path data-part="花萼" d="M246 366 C274 350 296 314 306 288 C278 328 248 348 230 358 Z" fill="url(#flower-ext-sepal)" stroke="#2f6d3d" stroke-width="1.4"/>

      <!-- 花瓣（外張，柔和漸層＋縱向脈紋） -->
      <path data-part="花瓣" d="M196 352 C132 316 100 236 92 168 C132 244 172 300 208 330 Z" fill="url(#flower-ext-petal2)" stroke="#cf5f97" stroke-width="1.3"/>
      <path data-part="花瓣" d="M232 352 C296 316 328 236 336 168 C296 244 256 300 220 330 Z" fill="url(#flower-ext-petal2)" stroke="#cf5f97" stroke-width="1.3"/>
      <path data-part="花瓣" d="M204 346 C176 258 182 176 200 124 C202 216 210 288 216 328 Z" fill="url(#flower-ext-petal)" stroke="#b83b7f" stroke-width="1.3"/>
      <path data-part="花瓣" d="M228 346 C256 258 250 176 232 124 C230 216 222 288 216 328 Z" fill="url(#flower-ext-petal)" stroke="#b83b7f" stroke-width="1.3"/>
      <!-- 花瓣脈紋與基部深色暈染 -->
      <g fill="none" stroke="#c9558f" stroke-width="0.9" opacity="0.5">
        <path d="M198 330 C158 288 130 232 116 186 M212 328 C198 250 200 180 208 132 M220 328 C234 250 232 180 224 132 M226 330 C266 288 294 232 308 186"/>
      </g>
      <path d="M196 352 C160 320 138 268 128 214 C170 280 200 316 214 336 C228 316 258 280 300 214 C290 268 268 320 232 352 C224 344 208 344 196 352 Z" fill="url(#flower-ext-petalcore)"/>

      <!-- 雄蕊：花絲 + 花藥（左右對稱數枚） -->
      <g>
        <path data-part="花絲" d="M170 330 C164 288 158 246 152 214" fill="none" stroke="url(#flower-ext-filament)" stroke-width="6" stroke-linecap="round"/>
        <ellipse data-part="花藥" cx="150" cy="204" rx="14" ry="21" fill="url(#flower-ext-anther)" stroke="#b9800f" stroke-width="1.2" transform="rotate(-14 150 204)"/>
        <path data-part="花絲" d="M270 330 C276 288 282 246 288 214" fill="none" stroke="url(#flower-ext-filament)" stroke-width="6" stroke-linecap="round"/>
        <ellipse data-part="花藥" cx="290" cy="204" rx="14" ry="21" fill="url(#flower-ext-anther)" stroke="#b9800f" stroke-width="1.2" transform="rotate(14 290 204)"/>
        <path d="M187 328 C184 286 181 244 180 210" fill="none" stroke="url(#flower-ext-filament)" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="180" cy="196" rx="11" ry="17" fill="url(#flower-ext-anther)" stroke="#b9800f" stroke-width="1"/>
        <path d="M253 328 C256 286 259 244 260 210" fill="none" stroke="url(#flower-ext-filament)" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="260" cy="196" rx="11" ry="17" fill="url(#flower-ext-anther)" stroke="#b9800f" stroke-width="1"/>
        <line x1="150" y1="192" x2="150" y2="216" stroke="#b9800f" stroke-width="0.8" opacity="0.6"/>
        <line x1="290" y1="192" x2="290" y2="216" stroke="#b9800f" stroke-width="0.8" opacity="0.6"/>
        <circle cx="148" cy="196" r="1.6" fill="#fff6c8"/><circle cx="288" cy="196" r="1.6" fill="#fff6c8"/>
      </g>

      <!-- 雌蕊：柱頭 / 花柱 / 子房 / 胚珠 -->
      <ellipse data-part="柱頭" cx="214" cy="148" rx="20" ry="12" fill="url(#flower-ext-stigma)" stroke="#c79420" stroke-width="1.2"/>
      <g stroke="#c79420" stroke-width="0.9" opacity="0.6"><line x1="200" y1="142" x2="196" y2="134"/><line x1="214" y1="139" x2="214" y2="130"/><line x1="228" y1="142" x2="232" y2="134"/></g>
      <path data-part="花柱" d="M209 158 C208 210 208 262 210 306 C214 306 216 306 219 306 C221 262 220 210 219 158 Z" fill="url(#flower-ext-style)" stroke="#6ca34f" stroke-width="1.2"/>
      <path data-part="子房" d="M182 308 C182 264 196 256 214 256 C232 256 246 264 246 308 C246 352 232 362 214 362 C196 362 182 352 182 308 Z" fill="url(#flower-ext-ovary)" stroke="#5c9142" stroke-width="1.4"/>
      <circle data-part="胚珠" cx="200" cy="316" r="9" fill="url(#flower-ext-ovule)" stroke="#c7a651" stroke-width="1.1"/>
      <circle data-part="胚珠" cx="228" cy="316" r="9" fill="url(#flower-ext-ovule)" stroke="#c7a651" stroke-width="1.1"/>
      <circle data-part="胚珠" cx="214" cy="338" r="9" fill="url(#flower-ext-ovule)" stroke="#c7a651" stroke-width="1.1"/>

      <g class="labels">
        <line x1="118" y1="308" x2="60" y2="300" stroke="#666" stroke-width="1"/>
        <text x="10" y="304" font-size="13" fill="var(--ink)">花萼</text>
        <line x1="100" y1="200" x2="52" y2="176" stroke="#666" stroke-width="1"/>
        <text x="10" y="180" font-size="13" fill="var(--ink)">花瓣</text>
        <line x1="150" y1="206" x2="70" y2="120" stroke="#666" stroke-width="1"/>
        <text x="20" y="116" font-size="13" fill="var(--ink)">花藥</text>
        <line x1="166" y1="270" x2="86" y2="248" stroke="#666" stroke-width="1"/>
        <text x="18" y="252" font-size="13" fill="var(--ink)">花絲</text>
        <line x1="214" y1="146" x2="214" y2="70" stroke="#666" stroke-width="1"/>
        <text x="186" y="62" font-size="13" fill="var(--ink)">柱頭</text>
        <line x1="222" y1="230" x2="330" y2="180" stroke="#666" stroke-width="1"/>
        <text x="334" y="184" font-size="13" fill="var(--ink)">花柱</text>
        <line x1="246" y1="310" x2="352" y2="300" stroke="#666" stroke-width="1"/>
        <text x="356" y="304" font-size="13" fill="var(--ink)">子房</text>
        <line x1="228" y1="330" x2="330" y2="356" stroke="#666" stroke-width="1"/>
        <text x="334" y="360" font-size="13" fill="var(--ink)">胚珠</text>
        <line x1="248" y1="372" x2="330" y2="392" stroke="#666" stroke-width="1"/>
        <text x="334" y="396" font-size="13" fill="var(--ink)">花托</text>
      </g>`,
      parts: [
        { name: "花萼", desc: "花最外層的綠色構造，花苞時包住並保護內部花朵。" },
        { name: "花瓣", desc: "常具鮮艷色彩與香氣，吸引蜂蝶等傳粉者。" },
        { name: "花藥", desc: "雄蕊頂端膨大處，內含花粉囊，成熟時開裂散出花粉。" },
        { name: "花絲", desc: "支撐花藥的細長柄，將花藥托高利於散粉。" },
        { name: "柱頭", desc: "雌蕊頂端，表面黏而具乳突，用以承接花粉。" },
        { name: "花柱", desc: "連接柱頭與子房的管狀構造，花粉管由此向下伸入子房。" },
        { name: "子房", desc: "雌蕊基部膨大部分，內含胚珠，受精後發育成果實。" },
        { name: "胚珠", desc: "子房內的小體，受精後發育成種子。" },
        { name: "花托", desc: "花梗頂端膨大處，各花器官著生其上。" }
      ]
    },
    {
      id: "pollination",
      name: "授粉與受精",
      viewBox: "0 0 440 400",
      svg: `
      <defs>
        <linearGradient id="flower-pcol" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#eef6ff"/><stop offset="100%" stop-color="#f7fbff"/>
        </linearGradient>
        <radialGradient id="flower-pstigma" cx="45%" cy="35%">
          <stop offset="0%" stop-color="#ffe08a"/><stop offset="100%" stop-color="#e0a72e"/>
        </radialGradient>
        <linearGradient id="flower-povary" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bfe3a6"/><stop offset="100%" stop-color="#7cbb63"/>
        </linearGradient>
        <radialGradient id="flower-pgrain" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#ffe9a0"/><stop offset="100%" stop-color="#e0a72e"/>
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="440" height="400" fill="url(#flower-pcol)"/>

      <!-- 柱頭 -->
      <ellipse data-part="柱頭" cx="150" cy="70" rx="42" ry="20" fill="url(#flower-pstigma)" stroke="#c79420"/>
      <!-- 落在柱頭上的花粉粒 -->
      <circle data-part="花粉粒" cx="132" cy="58" r="7" fill="url(#flower-pgrain)" stroke="#c08e1f"/>
      <circle data-part="花粉粒" cx="158" cy="56" r="7" fill="url(#flower-pgrain)" stroke="#c08e1f"/>
      <circle data-part="花粉粒" cx="176" cy="64" r="6" fill="url(#flower-pgrain)" stroke="#c08e1f"/>

      <!-- 花柱與花粉管 -->
      <path d="M132 84 Q136 200 176 300" fill="none" stroke="#8fbf6f" stroke-width="22" stroke-linecap="round"/>
      <path data-part="花粉管" d="M132 76 Q140 200 176 288" fill="none" stroke="#4d9d4d" stroke-width="3" stroke-dasharray="7 5"/>
      <circle cx="176" cy="288" r="4" fill="#2f7d2f"/>

      <!-- 子房與胚珠 -->
      <path data-part="子房" d="M150 300 Q150 258 214 254 Q290 258 290 306 Q290 360 214 366 Q150 360 150 306 Z" fill="url(#flower-povary)" stroke="#5c9142"/>
      <circle data-part="胚珠" cx="200" cy="312" r="16" fill="#fff4d6" stroke="#c7a651"/>
      <circle cx="200" cy="312" r="7" fill="#8fbf6f"/>
      <circle data-part="胚珠" cx="248" cy="322" r="16" fill="#fff4d6" stroke="#c7a651"/>
      <circle cx="248" cy="322" r="7" fill="#8fbf6f"/>

      <g class="labels">
        <line x1="158" y1="52" x2="230" y2="30" stroke="#666" stroke-width="1"/>
        <text x="234" y="34" font-size="13" fill="var(--ink)">花粉粒落在柱頭（授粉）</text>
        <line x1="150" y1="88" x2="60" y2="110" stroke="#666" stroke-width="1"/>
        <text x="10" y="114" font-size="13" fill="var(--ink)">柱頭</text>
        <line x1="150" y1="200" x2="60" y2="210" stroke="#666" stroke-width="1"/>
        <text x="10" y="214" font-size="13" fill="var(--ink)">花粉管伸長</text>
        <line x1="216" y1="312" x2="330" y2="300" stroke="#666" stroke-width="1"/>
        <text x="334" y="304" font-size="13" fill="var(--ink)">胚珠（受精成種子）</text>
        <line x1="214" y1="360" x2="300" y2="380" stroke="#666" stroke-width="1"/>
        <text x="304" y="384" font-size="13" fill="var(--ink)">子房→果實</text>
      </g>`,
      parts: [
        { name: "柱頭", desc: "承接花粉的部位，授粉即花粉由花藥傳到柱頭上。" },
        { name: "花粉粒", desc: "雄配子體，內含精細胞，萌發後長出花粉管。" },
        { name: "花粉管", desc: "花粉粒萌發後向子房延伸的管，把精細胞送到胚珠。" },
        { name: "胚珠", desc: "內含卵細胞，與精細胞結合（受精）後發育成種子。" },
        { name: "子房", desc: "受精後子房壁發育成果實，包住種子。" }
      ]
    }
  ]
});

/* ============================================================
 * 2. 葉的構造 leaf
 * ============================================================ */
window.ANATOMY.register({
  id: "leaf",
  name: "葉的構造",
  latin: "Folium",
  emoji: "🍃",
  kingdom: "plantae",
  group: "angiosperms",
  rank: "被子植物・營養器官",
  summary: "葉是植物進行光合作用的主要器官。外部有葉片、葉脈與葉柄；橫切面可見上下表皮、柵狀組織、海綿組織與維管束，並有氣孔調節氣體與水分進出。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 420 460",
      svg: `
      <defs>
        <linearGradient id="leaf-ext-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f2f9ee"/><stop offset="100%" stop-color="#e7f2df"/>
        </linearGradient>
        <linearGradient id="leaf-ext-blade" x1="0.15" y1="0.05" x2="0.9" y2="0.95">
          <stop offset="0%" stop-color="#8fd08c"/><stop offset="42%" stop-color="#57ab5f"/><stop offset="100%" stop-color="#2f7d41"/>
        </linearGradient>
        <radialGradient id="leaf-ext-sheen" cx="38%" cy="26%" r="62%">
          <stop offset="0%" stop-color="#e9f8dd" stop-opacity="0.85"/><stop offset="45%" stop-color="#c6ebb4" stop-opacity="0.3"/><stop offset="100%" stop-color="#2f7d41" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="leaf-ext-shade" x1="0.9" y1="0.9" x2="0.3" y2="0.3">
          <stop offset="0%" stop-color="#1f5c30" stop-opacity="0.5"/><stop offset="60%" stop-color="#1f5c30" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="leaf-ext-midrib" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#7cb06a"/><stop offset="45%" stop-color="#dff0cb"/><stop offset="100%" stop-color="#6ba05c"/>
        </linearGradient>
        <linearGradient id="leaf-ext-petiole" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#a7d68e"/><stop offset="45%" stop-color="#dff0cb"/><stop offset="100%" stop-color="#5f9445"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="420" height="460" fill="url(#leaf-ext-bg)"/>

      <!-- 葉柄 -->
      <path data-part="葉柄" d="M204 356 C202 392 200 420 202 452 C207 454 213 454 218 452 C220 420 218 392 216 356 Z" fill="url(#leaf-ext-petiole)" stroke="#4d7a34" stroke-width="1.4"/>

      <!-- 葉片：柔軟卵形、先端漸尖 -->
      <path data-part="葉片" d="M210 40 C266 62 314 118 322 196 C328 262 302 322 258 356 C238 372 224 366 210 362 C196 366 182 372 162 356 C118 322 92 262 98 196 C106 118 154 62 210 40 Z" fill="url(#leaf-ext-blade)" stroke="#276d38" stroke-width="1.7"/>
      <!-- 光澤與陰影疊層（立體感） -->
      <path d="M210 40 C266 62 314 118 322 196 C328 262 302 322 258 356 C238 372 224 366 210 362 C196 366 182 372 162 356 C118 322 92 262 98 196 C106 118 154 62 210 40 Z" fill="url(#leaf-ext-sheen)"/>
      <path d="M210 40 C266 62 314 118 322 196 C328 262 302 322 258 356 C238 372 224 366 210 362 C196 366 182 372 162 356 C118 322 92 262 98 196 C106 118 154 62 210 40 Z" fill="url(#leaf-ext-shade)"/>

      <!-- 主脈與側脈（葉脈）：曲線羽狀＋細網紋 -->
      <path data-part="葉脈" d="M210 46 C210 140 208 260 210 358" fill="none" stroke="url(#leaf-ext-midrib)" stroke-width="6" stroke-linecap="round"/>
      <g fill="none" stroke="#d3ecbc" stroke-width="2.2" stroke-linecap="round" opacity="0.9">
        <path data-part="葉脈" d="M210 96 C176 106 148 128 122 158 M210 96 C244 106 272 128 298 158"/>
        <path data-part="葉脈" d="M210 150 C170 160 140 186 112 222 M210 150 C250 160 280 186 308 222"/>
        <path data-part="葉脈" d="M210 210 C172 220 146 246 124 284 M210 210 C248 220 274 246 296 284"/>
        <path data-part="葉脈" d="M210 272 C180 282 160 302 146 330 M210 272 C240 282 260 302 274 330"/>
      </g>
      <!-- 細三級脈網紋 -->
      <g fill="none" stroke="#bde0a2" stroke-width="1" opacity="0.55">
        <path d="M180 118 q-14 18 -30 34 M234 128 q16 16 32 30 M172 176 q-16 20 -34 38 M248 182 q18 18 36 34 M176 240 q-14 20 -30 36 M244 244 q16 18 32 34"/>
      </g>

      <!-- 葉緣鋸齒示意（沿右下輪廓） -->
      <path data-part="葉緣" d="M300 246 q-10 8 -6 18 q10 -4 14 4 q-6 10 4 14 q10 -2 12 8" fill="none" stroke="#1f5c30" stroke-width="1.5"/>

      <g class="labels">
        <line x1="292" y1="200" x2="366" y2="176" stroke="#666" stroke-width="1"/>
        <text x="360" y="170" font-size="13" fill="var(--ink)">葉片</text>
        <line x1="210" y1="150" x2="58" y2="130" stroke="#666" stroke-width="1"/>
        <text x="10" y="134" font-size="13" fill="var(--ink)">葉脈（主脈/側脈）</text>
        <line x1="210" y1="420" x2="300" y2="430" stroke="#666" stroke-width="1"/>
        <text x="304" y="434" font-size="13" fill="var(--ink)">葉柄</text>
        <line x1="316" y1="280" x2="366" y2="300" stroke="#666" stroke-width="1"/>
        <text x="358" y="316" font-size="13" fill="var(--ink)">葉緣</text>
      </g>`,
      parts: [
        { name: "葉片", desc: "葉扁平寬大的部分，含大量葉綠體行光合作用。" },
        { name: "葉脈", desc: "葉片中的維管束，運送水分養分並支撐葉片；有網狀與平行兩種。" },
        { name: "葉柄", desc: "連接葉片與莖的柄，使葉片伸展、面向陽光。" },
        { name: "葉緣", desc: "葉片邊緣的形狀，有全緣、鋸齒、裂葉等，可辨識種類。" }
      ]
    },
    {
      id: "cross-section",
      name: "橫切面",
      viewBox: "0 0 460 380",
      svg: `
      <defs>
        <linearGradient id="leaf-epi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#eaf6df"/><stop offset="100%" stop-color="#d3ecc2"/>
        </linearGradient>
        <linearGradient id="leaf-pali" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5cb268"/><stop offset="100%" stop-color="#3f9d5a"/>
        </linearGradient>
        <radialGradient id="leaf-spongy" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#a7d69a"/><stop offset="100%" stop-color="#7cbb63"/>
        </radialGradient>
        <linearGradient id="leaf-xylem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b98a52"/><stop offset="100%" stop-color="#8a5a2f"/>
        </linearGradient>
        <linearGradient id="leaf-phloem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#9fd08a"/><stop offset="100%" stop-color="#5f9b48"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="460" height="380" fill="#f5faf3"/>

      <!-- 上表皮（含角質層） -->
      <rect data-part="上表皮" x="30" y="60" width="400" height="34" fill="url(#leaf-epi)" stroke="#8fbf6f"/>
      <line x1="30" y1="62" x2="430" y2="62" stroke="#cfe8bd" stroke-width="3"/>
      <g stroke="#a9cf94" stroke-width="0.8">
        <line x1="70" y1="60" x2="70" y2="94"/><line x1="110" y1="60" x2="110" y2="94"/>
        <line x1="150" y1="60" x2="150" y2="94"/><line x1="190" y1="60" x2="190" y2="94"/>
        <line x1="230" y1="60" x2="230" y2="94"/><line x1="270" y1="60" x2="270" y2="94"/>
        <line x1="310" y1="60" x2="310" y2="94"/><line x1="350" y1="60" x2="350" y2="94"/><line x1="390" y1="60" x2="390" y2="94"/>
      </g>

      <!-- 柵狀組織（緊密直立細胞） -->
      <rect data-part="柵狀組織" x="30" y="94" width="400" height="70" fill="url(#leaf-pali)"/>
      <g stroke="#2c7a43" stroke-width="0.9">
        <line x1="60" y1="94" x2="60" y2="164"/><line x1="90" y1="94" x2="90" y2="164"/>
        <line x1="120" y1="94" x2="120" y2="164"/><line x1="150" y1="94" x2="150" y2="164"/>
        <line x1="180" y1="94" x2="180" y2="164"/><line x1="240" y1="94" x2="240" y2="164"/>
        <line x1="270" y1="94" x2="270" y2="164"/><line x1="300" y1="94" x2="300" y2="164"/>
        <line x1="330" y1="94" x2="330" y2="164"/><line x1="360" y1="94" x2="360" y2="164"/><line x1="390" y1="94" x2="390" y2="164"/>
      </g>

      <!-- 海綿組織（疏鬆排列＋氣室） -->
      <rect data-part="海綿組織" x="30" y="164" width="400" height="86" fill="#cbe8ba"/>
      <g fill="url(#leaf-spongy)" stroke="#5f9b48" stroke-width="0.8">
        <circle cx="60" cy="185" r="12"/><circle cx="96" cy="205" r="11"/><circle cx="132" cy="182" r="12"/>
        <circle cx="172" cy="210" r="12"/><circle cx="300" cy="185" r="12"/><circle cx="336" cy="208" r="11"/>
        <circle cx="372" cy="184" r="12"/><circle cx="404" cy="208" r="10"/><circle cx="66" cy="230" r="10"/>
        <circle cx="110" cy="234" r="11"/><circle cx="330" cy="234" r="11"/><circle cx="380" cy="232" r="10"/>
      </g>

      <!-- 葉脈維管束（木質部＋韌皮部） -->
      <ellipse data-part="葉脈維管束" cx="230" cy="205" rx="46" ry="40" fill="#e8f2df" stroke="#7cbb63"/>
      <ellipse data-part="木質部" cx="230" cy="192" rx="26" ry="14" fill="url(#leaf-xylem)" stroke="#6e451f"/>
      <ellipse data-part="韌皮部" cx="230" cy="220" rx="26" ry="12" fill="url(#leaf-phloem)" stroke="#4d7a34"/>

      <!-- 下表皮 -->
      <rect data-part="下表皮" x="30" y="250" width="400" height="30" fill="url(#leaf-epi)" stroke="#8fbf6f"/>

      <!-- 氣孔與保衛細胞 -->
      <g>
        <path data-part="保衛細胞" d="M176 278 q-14 12 0 24" fill="none" stroke="#3f9d5a" stroke-width="8" stroke-linecap="round"/>
        <path data-part="保衛細胞" d="M204 278 q14 12 0 24" fill="none" stroke="#3f9d5a" stroke-width="8" stroke-linecap="round"/>
        <ellipse data-part="氣孔" cx="190" cy="290" rx="6" ry="11" fill="#2b5b8f"/>
      </g>

      <g class="labels">
        <line x1="200" y1="76" x2="360" y2="46" stroke="#666" stroke-width="1"/>
        <text x="352" y="40" font-size="13" fill="var(--ink)">上表皮</text>
        <line x1="200" y1="128" x2="360" y2="118" stroke="#666" stroke-width="1"/>
        <text x="352" y="122" font-size="13" fill="var(--ink)">柵狀組織</text>
        <line x1="110" y1="205" x2="30" y2="205" stroke="#666" stroke-width="1"/>
        <text x="6" y="196" font-size="13" fill="var(--ink)">海綿組織</text>
        <text x="6" y="212" font-size="11" fill="var(--ink)">（含氣室）</text>
        <line x1="276" y1="205" x2="400" y2="290" stroke="#666" stroke-width="1"/>
        <text x="368" y="306" font-size="13" fill="var(--ink)">葉脈維管束</text>
        <text x="356" y="322" font-size="11" fill="var(--ink)">木質部(褐)/韌皮部(綠)</text>
        <line x1="200" y1="266" x2="60" y2="330" stroke="#666" stroke-width="1"/>
        <text x="10" y="334" font-size="13" fill="var(--ink)">下表皮</text>
        <line x1="190" y1="300" x2="230" y2="356" stroke="#666" stroke-width="1"/>
        <text x="196" y="360" font-size="13" fill="var(--ink)">氣孔／保衛細胞</text>
      </g>`,
      parts: [
        { name: "上表皮", desc: "葉上方單層細胞，外覆角質層減少水分散失、透光。" },
        { name: "柵狀組織", desc: "上表皮下方直立緊密的細胞，含最多葉綠體，是光合作用主要場所。" },
        { name: "海綿組織", desc: "細胞疏鬆排列，間有氣室，利於氣體擴散。" },
        { name: "葉脈維管束", desc: "葉內運輸系統，木質部運水、韌皮部運送養分。" },
        { name: "木質部", desc: "向上運送根部吸收的水與礦物質。" },
        { name: "韌皮部", desc: "運送光合作用製造的醣類等養分。" },
        { name: "下表皮", desc: "葉下方單層細胞，分布較多氣孔。" },
        { name: "氣孔", desc: "表皮上的孔隙，供氣體（CO₂、O₂）與水氣進出。" },
        { name: "保衛細胞", desc: "半月形細胞成對圍住氣孔，藉膨脹或萎縮開閉氣孔。" }
      ]
    }
  ]
});

/* ============================================================
 * 3. 根的構造 root
 * ============================================================ */
window.ANATOMY.register({
  id: "root",
  name: "根的構造",
  latin: "Radix",
  emoji: "🌱",
  kingdom: "plantae",
  group: "angiosperms",
  rank: "被子植物・營養器官",
  summary: "根固著植物並吸收水分與礦物質。外形分主根、側根，尖端有根冠保護生長點，其後為生長區與根毛區；橫切面由外而內為表皮、皮層、內皮與中央維管束。",
  views: [
    {
      id: "external",
      name: "外部形態",
      viewBox: "0 0 420 460",
      svg: `
      <defs>
        <linearGradient id="root-ext-main" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f4ead2"/><stop offset="42%" stop-color="#e6d3a9"/><stop offset="100%" stop-color="#bf9f68"/>
        </linearGradient>
        <linearGradient id="root-ext-lat" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stop-color="#eaddbd"/><stop offset="100%" stop-color="#c4a570"/>
        </linearGradient>
        <linearGradient id="root-ext-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e0c896"/><stop offset="100%" stop-color="#a98550"/>
        </linearGradient>
        <linearGradient id="root-ext-soil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f1e8d5"/><stop offset="18%" stop-color="#eaddc2"/><stop offset="100%" stop-color="#dcc9a4"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="420" height="460" fill="url(#root-ext-soil)"/>
      <line x1="0" y1="40" x2="420" y2="40" stroke="#b9a377" stroke-width="1" stroke-dasharray="6 5"/>
      <text x="12" y="30" font-size="12" fill="#8a7550">地面</text>

      <!-- 主根：漸細的錐狀直根，柔和貝茲輪廓 -->
      <path data-part="主根" d="M196 40 C193 130 188 232 202 330 C207 372 212 396 214 420 C216 396 221 366 227 322 C240 226 224 132 224 40 Z" fill="url(#root-ext-main)" stroke="#9c7c48" stroke-width="1.6"/>
      <!-- 主根縱向立體陰影 -->
      <path d="M214 46 C210 150 206 250 214 416 C214 250 218 150 220 46 Z" fill="#8a6b3c" opacity="0.18"/>
      <path d="M200 60 C197 150 193 240 205 340 C201 240 202 150 205 60 Z" fill="#fff4dc" opacity="0.4"/>

      <!-- 側根：分枝並帶次級細根 -->
      <path data-part="側根" d="M202 126 C158 138 128 128 86 108 C120 122 156 132 200 132" fill="none" stroke="url(#root-ext-lat)" stroke-width="8" stroke-linecap="round"/>
      <path data-part="側根" d="M216 166 C272 178 306 168 352 146 C312 166 268 176 214 172" fill="none" stroke="url(#root-ext-lat)" stroke-width="8" stroke-linecap="round"/>
      <path data-part="側根" d="M204 220 C156 234 126 230 92 214 C126 232 162 238 202 226" fill="none" stroke="url(#root-ext-lat)" stroke-width="7" stroke-linecap="round"/>
      <path data-part="側根" d="M222 260 C274 274 306 272 344 260 C306 276 268 280 218 266" fill="none" stroke="url(#root-ext-lat)" stroke-width="7" stroke-linecap="round"/>
      <!-- 側根末端的細分枝 -->
      <g fill="none" stroke="url(#root-ext-lat)" stroke-width="3.5" stroke-linecap="round">
        <path d="M86 108 C72 100 66 90 60 80 M86 108 C74 114 66 122 58 126"/>
        <path d="M352 146 C366 138 374 128 380 118 M352 146 C364 152 372 160 380 166"/>
        <path d="M92 214 C80 210 72 202 64 194 M344 260 C356 256 364 250 372 244"/>
      </g>

      <!-- 根毛（吸收區）：沿側根與根尖密生細鬚 -->
      <g data-part="根毛" stroke="#c7ab77" stroke-width="1" stroke-linecap="round" opacity="0.85">
        <line x1="86" y1="108" x2="76" y2="98"/><line x1="90" y1="112" x2="80" y2="122"/><line x1="100" y1="118" x2="92" y2="130"/>
        <line x1="352" y1="146" x2="362" y2="136"/><line x1="348" y1="150" x2="360" y2="158"/><line x1="338" y1="152" x2="348" y2="164"/>
        <line x1="92" y1="214" x2="82" y2="206"/><line x1="98" y1="218" x2="88" y2="228"/>
        <line x1="344" y1="260" x2="354" y2="252"/><line x1="338" y1="264" x2="348" y2="272"/>
        <line x1="206" y1="360" x2="196" y2="356"/><line x1="222" y1="360" x2="232" y2="356"/><line x1="204" y1="380" x2="194" y2="378"/><line x1="224" y1="380" x2="234" y2="378"/>
      </g>

      <!-- 生長區與根冠 -->
      <path data-part="生長區" d="M205 386 C205 378 225 378 224 386 C226 398 224 406 220 412 C214 408 210 408 208 412 C204 406 203 398 205 386 Z" fill="#f6ecd4" opacity="0.7" stroke="#d9c191" stroke-width="0.8"/>
      <path data-part="根冠" d="M206 410 C208 428 220 428 224 410 C222 422 216 428 215 430 C214 428 208 422 206 410 Z" fill="url(#root-ext-cap)" stroke="#9c7c48" stroke-width="1.2"/>

      <g class="labels">
        <line x1="222" y1="90" x2="330" y2="70" stroke="#666" stroke-width="1"/>
        <text x="334" y="74" font-size="13" fill="var(--ink)">主根</text>
        <line x1="120" y1="128" x2="40" y2="150" stroke="#666" stroke-width="1"/>
        <text x="10" y="154" font-size="13" fill="var(--ink)">側根</text>
        <line x1="76" y1="108" x2="30" y2="92" stroke="#666" stroke-width="1"/>
        <text x="8" y="86" font-size="13" fill="var(--ink)">根毛（吸收水分）</text>
        <line x1="216" y1="386" x2="330" y2="360" stroke="#666" stroke-width="1"/>
        <text x="334" y="364" font-size="13" fill="var(--ink)">生長區（細胞分裂伸長）</text>
        <line x1="214" y1="422" x2="330" y2="434" stroke="#666" stroke-width="1"/>
        <text x="334" y="438" font-size="13" fill="var(--ink)">根冠</text>
      </g>`,
      parts: [
        { name: "主根", desc: "由胚根發育而來、最粗的中央根，向下伸展固著植物。" },
        { name: "側根", desc: "由主根分出的分枝根，擴大吸收與固著範圍。" },
        { name: "根毛", desc: "表皮細胞向外的突起，大幅增加吸收表面積，吸收水與礦物質。" },
        { name: "生長區", desc: "根冠後方細胞分裂與伸長的區域，使根不斷向下生長。" },
        { name: "根冠", desc: "包住根尖生長點的帽狀構造，保護生長點並潤滑穿土。" }
      ]
    },
    {
      id: "cross-section",
      name: "橫切面",
      viewBox: "0 0 420 420",
      svg: `
      <defs>
        <radialGradient id="root-epi2" cx="50%" cy="50%">
          <stop offset="82%" stop-color="#f0e2c6"/><stop offset="100%" stop-color="#d9c191"/>
        </radialGradient>
        <radialGradient id="root-cortex" cx="45%" cy="40%">
          <stop offset="0%" stop-color="#d8ecc6"/><stop offset="100%" stop-color="#b6d9a0"/>
        </radialGradient>
        <radialGradient id="root-endo" cx="50%" cy="50%">
          <stop offset="80%" stop-color="#cfe0b0"/><stop offset="100%" stop-color="#9cc27e"/>
        </radialGradient>
        <linearGradient id="root-xylem" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#b98a52"/><stop offset="100%" stop-color="#7d5028"/>
        </linearGradient>
        <linearGradient id="root-phloem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#9fd08a"/><stop offset="100%" stop-color="#5f9b48"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="420" height="420" fill="#f5faf3"/>

      <!-- 表皮（最外，含根毛） -->
      <circle data-part="表皮" cx="210" cy="210" r="168" fill="url(#root-epi2)" stroke="#b6935e" stroke-width="2"/>
      <g stroke="#cbb27f" stroke-width="1.4">
        <line x1="210" y1="42" x2="210" y2="24"/><line x1="120" y1="72" x2="108" y2="58"/>
        <line x1="300" y1="72" x2="312" y2="58"/><line x1="52" y1="150" x2="34" y2="142"/>
        <line x1="368" y1="150" x2="386" y2="142"/><line x1="60" y1="290" x2="44" y2="302"/>
        <line x1="360" y1="290" x2="376" y2="302"/><line x1="210" y1="378" x2="210" y2="396"/>
      </g>

      <!-- 皮層 -->
      <circle data-part="皮層" cx="210" cy="210" r="146" fill="url(#root-cortex)" stroke="#8fbf6f"/>
      <g fill="none" stroke="#8fbf6f" stroke-width="0.8" opacity="0.7">
        <circle cx="210" cy="120" r="12"/><circle cx="150" cy="140" r="12"/><circle cx="270" cy="140" r="12"/>
        <circle cx="120" cy="210" r="12"/><circle cx="300" cy="210" r="12"/><circle cx="150" cy="280" r="12"/>
        <circle cx="270" cy="280" r="12"/><circle cx="210" cy="300" r="12"/>
      </g>

      <!-- 內皮（皮層與維管束間一圈） -->
      <circle data-part="內皮" cx="210" cy="210" r="78" fill="url(#root-endo)" stroke="#5f9b48" stroke-width="2.5"/>

      <!-- 中央維管束：木質部（星狀）＋韌皮部 -->
      <circle cx="210" cy="210" r="62" fill="#eef4e6" stroke="#7cbb63"/>
      <path data-part="木質部" d="M210 158 L224 210 L262 210 L224 210 L210 262 L196 210 L158 210 L196 210 Z" fill="url(#root-xylem)" stroke="#6e451f" stroke-width="1.5"/>
      <circle cx="210" cy="210" r="10" fill="url(#root-xylem)" stroke="#6e451f"/>
      <g fill="url(#root-phloem)" stroke="#4d7a34">
        <circle data-part="韌皮部" cx="184" cy="184" r="12"/>
        <circle data-part="韌皮部" cx="236" cy="184" r="12"/>
        <circle data-part="韌皮部" cx="184" cy="236" r="12"/>
        <circle data-part="韌皮部" cx="236" cy="236" r="12"/>
      </g>

      <g class="labels">
        <line x1="210" y1="42" x2="210" y2="14" stroke="#666" stroke-width="1"/>
        <text x="176" y="12" font-size="13" fill="var(--ink)">表皮（生根毛）</text>
        <line x1="90" y1="150" x2="20" y2="130" stroke="#666" stroke-width="1"/>
        <text x="6" y="124" font-size="13" fill="var(--ink)">皮層</text>
        <line x1="150" y1="150" x2="34" y2="230" stroke="#666" stroke-width="1"/>
        <text x="6" y="234" font-size="13" fill="var(--ink)">內皮</text>
        <line x1="210" y1="160" x2="330" y2="120" stroke="#666" stroke-width="1"/>
        <text x="334" y="124" font-size="13" fill="var(--ink)">木質部（星狀）</text>
        <line x1="236" y1="236" x2="356" y2="290" stroke="#666" stroke-width="1"/>
        <text x="330" y="306" font-size="13" fill="var(--ink)">韌皮部</text>
      </g>`,
      parts: [
        { name: "表皮", desc: "根最外層單層細胞，部分向外突出成根毛以吸收水分。" },
        { name: "皮層", desc: "表皮內側多層薄壁細胞，可暫存養分並讓水分向內運輸。" },
        { name: "內皮", desc: "皮層最內一圈細胞，細胞壁具卡氏帶，控制水分進入維管束。" },
        { name: "木質部", desc: "位於根中央，常呈星狀，向上運送水與礦物質。" },
        { name: "韌皮部", desc: "位於木質部各臂之間，運送葉製造的養分至根部。" }
      ]
    }
  ]
});

/* ============================================================
 * 4. 莖的構造 stem
 * ============================================================ */
window.ANATOMY.register({
  id: "stem",
  name: "莖的構造",
  latin: "Caulis",
  emoji: "🎋",
  kingdom: "plantae",
  group: "angiosperms",
  rank: "被子植物・營養器官",
  summary: "莖支撐植物並輸送水分與養分。橫切面中，雙子葉植物的維管束排成一環、有形成層可加粗；單子葉植物的維管束則散生於基本組織中、無形成層。",
  views: [
    {
      id: "dicot",
      name: "雙子葉莖橫切",
      viewBox: "0 0 420 420",
      svg: `
      <defs>
        <radialGradient id="stem-di-epi" cx="50%" cy="50%">
          <stop offset="84%" stop-color="#d8ecc6"/><stop offset="100%" stop-color="#9cc27e"/>
        </radialGradient>
        <radialGradient id="stem-di-cortex" cx="45%" cy="40%">
          <stop offset="0%" stop-color="#e4f2d6"/><stop offset="100%" stop-color="#c3e0af"/>
        </radialGradient>
        <radialGradient id="stem-di-pith" cx="45%" cy="40%">
          <stop offset="0%" stop-color="#fbf3dc"/><stop offset="100%" stop-color="#eddfb6"/>
        </radialGradient>
        <linearGradient id="stem-di-xylem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b98a52"/><stop offset="100%" stop-color="#7d5028"/>
        </linearGradient>
        <linearGradient id="stem-di-phloem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#9fd08a"/><stop offset="100%" stop-color="#5f9b48"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="420" height="420" fill="#f5faf3"/>
      <text x="118" y="30" font-size="14" fill="var(--ink)">雙子葉：維管束環狀排列</text>

      <!-- 表皮 -->
      <circle data-part="表皮" cx="210" cy="220" r="164" fill="url(#stem-di-epi)" stroke="#7cbb63" stroke-width="2"/>
      <!-- 皮層 -->
      <circle cx="210" cy="220" r="150" fill="url(#stem-di-cortex)" stroke="#8fbf6f"/>
      <!-- 髓 -->
      <circle data-part="髓" cx="210" cy="220" r="66" fill="url(#stem-di-pith)" stroke="#d8c88f"/>

      <!-- 形成層環 -->
      <circle data-part="形成層" cx="210" cy="220" r="108" fill="none" stroke="#e08fbf" stroke-width="4" stroke-dasharray="1 0"/>

      <!-- 環狀維管束（8束）：外韌皮部、內木質部 -->
      <g>
        ${[0,45,90,135,180,225,270,315].map(function(a){
          var r=a*Math.PI/180, cx=210+108*Math.sin(r), cy=220-108*Math.cos(r);
          var ph_x=210+128*Math.sin(r), ph_y=220-128*Math.cos(r);
          var xy_x=210+90*Math.sin(r), xy_y=220-90*Math.cos(r);
          return '<circle data-part="韌皮部" cx="'+ph_x.toFixed(1)+'" cy="'+ph_y.toFixed(1)+'" r="13" fill="url(#stem-di-phloem)" stroke="#4d7a34"/>'+
                 '<circle data-part="木質部" cx="'+xy_x.toFixed(1)+'" cy="'+xy_y.toFixed(1)+'" r="14" fill="url(#stem-di-xylem)" stroke="#6e451f"/>';
        }).join('')}
      </g>

      <g class="labels">
        <line x1="210" y1="56" x2="210" y2="24" stroke="#666" stroke-width="1"/>
        <text x="216" y="20" font-size="13" fill="var(--ink)">表皮</text>
        <line x1="82" y1="128" x2="20" y2="108" stroke="#666" stroke-width="1"/>
        <text x="6" y="102" font-size="13" fill="var(--ink)">韌皮部（外）</text>
        <line x1="122" y1="150" x2="30" y2="300" stroke="#666" stroke-width="1"/>
        <text x="6" y="304" font-size="13" fill="var(--ink)">木質部（內）</text>
        <line x1="300" y1="150" x2="392" y2="120" stroke="#666" stroke-width="1"/>
        <text x="300" y="112" font-size="13" fill="var(--ink)">形成層</text>
        <line x1="210" y1="220" x2="360" y2="300" stroke="#666" stroke-width="1"/>
        <text x="352" y="316" font-size="13" fill="var(--ink)">髓</text>
      </g>`,
      parts: [
        { name: "表皮", desc: "莖最外層，保護內部並減少水分散失。" },
        { name: "韌皮部", desc: "維管束外側，向下運送葉製造的養分。" },
        { name: "木質部", desc: "維管束內側，向上運送水與礦物質，並提供支撐。" },
        { name: "形成層", desc: "木質部與韌皮部之間的分裂組織，向兩側分裂使莖加粗（次生生長）。" },
        { name: "髓", desc: "莖中央的薄壁組織，具貯藏功能。" }
      ]
    },
    {
      id: "monocot",
      name: "單子葉莖橫切",
      viewBox: "0 0 420 420",
      svg: `
      <defs>
        <radialGradient id="stem-mo-epi" cx="50%" cy="50%">
          <stop offset="86%" stop-color="#d8ecc6"/><stop offset="100%" stop-color="#9cc27e"/>
        </radialGradient>
        <radialGradient id="stem-mo-ground" cx="45%" cy="40%">
          <stop offset="0%" stop-color="#eaf4de"/><stop offset="100%" stop-color="#cbe6b6"/>
        </radialGradient>
        <linearGradient id="stem-mo-xylem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b98a52"/><stop offset="100%" stop-color="#7d5028"/>
        </linearGradient>
        <linearGradient id="stem-mo-phloem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#9fd08a"/><stop offset="100%" stop-color="#5f9b48"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="420" height="420" fill="#f5faf3"/>
      <text x="112" y="30" font-size="14" fill="var(--ink)">單子葉：維管束散生分布</text>

      <!-- 表皮 -->
      <circle data-part="表皮" cx="210" cy="220" r="164" fill="url(#stem-mo-epi)" stroke="#7cbb63" stroke-width="2"/>
      <!-- 基本組織 -->
      <circle data-part="基本組織" cx="210" cy="220" r="150" fill="url(#stem-mo-ground)" stroke="#8fbf6f"/>

      <!-- 散生維管束（每束木質部+韌皮部，呈猴臉狀） -->
      <g>
        ${(function(){
          var pts=[[210,110],[150,140],[270,140],[120,205],[300,205],[168,190],[252,190],
                   [150,270],[270,270],[210,300],[200,205],[220,250]];
          return pts.map(function(p){
            return '<g transform="translate('+p[0]+' '+p[1]+')">'+
              '<ellipse cx="0" cy="0" rx="17" ry="20" fill="#eef4e6" stroke="#7cbb63"/>'+
              '<circle data-part="木質部" cx="-6" cy="-4" r="6" fill="url(#stem-mo-xylem)" stroke="#6e451f"/>'+
              '<circle data-part="木質部" cx="6" cy="-4" r="6" fill="url(#stem-mo-xylem)" stroke="#6e451f"/>'+
              '<circle cx="0" cy="8" r="4.5" fill="url(#stem-mo-xylem)" stroke="#6e451f"/>'+
              '<rect data-part="韌皮部" x="-7" y="-14" width="14" height="6" rx="2" fill="url(#stem-mo-phloem)" stroke="#4d7a34"/>'+
            '</g>';
          }).join('');
        })()}
      </g>

      <g class="labels">
        <line x1="210" y1="56" x2="210" y2="24" stroke="#666" stroke-width="1"/>
        <text x="216" y="20" font-size="13" fill="var(--ink)">表皮</text>
        <line x1="120" y1="205" x2="20" y2="205" stroke="#666" stroke-width="1"/>
        <text x="6" y="196" font-size="13" fill="var(--ink)">散生維管束</text>
        <text x="6" y="212" font-size="11" fill="var(--ink)">(無形成層)</text>
        <line x1="210" y1="250" x2="356" y2="300" stroke="#666" stroke-width="1"/>
        <text x="300" y="316" font-size="13" fill="var(--ink)">基本組織</text>
        <line x1="204" y1="106" x2="330" y2="80" stroke="#666" stroke-width="1"/>
        <text x="300" y="72" font-size="13" fill="var(--ink)">木質部/韌皮部</text>
      </g>`,
      parts: [
        { name: "表皮", desc: "莖最外一層，保護內部組織。" },
        { name: "基本組織", desc: "充滿莖內、散生維管束的薄壁組織，具支撐與貯藏功能。" },
        { name: "木質部", desc: "維管束中運送水與礦物質的部分。" },
        { name: "韌皮部", desc: "維管束中運送養分的部分。單子葉莖維管束散生且無形成層，故不能像雙子葉般加粗。" }
      ]
    }
  ]
});

/* ============================================================
 * 5. 種子與萌發 seed
 * ============================================================ */
window.ANATOMY.register({
  id: "seed",
  name: "種子與萌發",
  latin: "Semen",
  emoji: "🌰",
  kingdom: "plantae",
  group: "angiosperms",
  rank: "被子植物・繁殖",
  summary: "種子由種皮包住胚而成，胚含胚芽、胚根與子葉。雙子葉種子有兩片子葉、養分多存於子葉；單子葉種子僅一片子葉、養分存於胚乳。吸水後胚根先伸出，接著胚芽向上長成幼苗。",
  views: [
    {
      id: "structure",
      name: "種子構造對比",
      viewBox: "0 0 440 380",
      svg: `
      <defs>
        <radialGradient id="seed-ext-coat" cx="38%" cy="30%" r="80%">
          <stop offset="0%" stop-color="#e6c99a"/><stop offset="55%" stop-color="#c79a5f"/><stop offset="100%" stop-color="#9c6b34"/>
        </radialGradient>
        <linearGradient id="seed-ext-cotyl" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stop-color="#f6efb4"/><stop offset="60%" stop-color="#e6d276"/><stop offset="100%" stop-color="#cdb551"/>
        </linearGradient>
        <linearGradient id="seed-ext-endo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fdf4cd"/><stop offset="100%" stop-color="#e5d284"/>
        </linearGradient>
        <linearGradient id="seed-ext-embryo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#9cd987"/><stop offset="100%" stop-color="#468f47"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="440" height="380" fill="#f7f4ea"/>
      <text x="52" y="30" font-size="14" fill="var(--ink)">雙子葉（如：菜豆）</text>
      <text x="278" y="30" font-size="14" fill="var(--ink)">單子葉（如：玉米）</text>

      <!-- 雙子葉種子：腎形菜豆 -->
      <g transform="translate(120 210)">
        <path data-part="種皮" d="M-86 -8 C-84 -70 -34 -104 20 -98 C64 -92 92 -54 90 -4 C88 56 44 100 -14 100 C-58 98 -88 62 -86 -8 Z" fill="url(#seed-ext-coat)" stroke="#8a5f30" stroke-width="2"/>
        <!-- 種臍與種皮光澤 -->
        <ellipse cx="-58" cy="8" rx="8" ry="14" fill="#7a5228" opacity="0.6"/>
        <path d="M-70 -50 C-50 -84 -10 -92 26 -84" fill="none" stroke="#f1dcb4" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
        <!-- 子葉（貼合的兩片，帶陰影分界） -->
        <path data-part="子葉" d="M-66 -10 C-58 -66 -14 -84 24 -78 C50 -70 58 -30 50 8 C40 60 -8 78 -44 66 C-66 56 -68 24 -66 -10 Z" fill="url(#seed-ext-cotyl)" stroke="#c1a94e" stroke-width="1.2"/>
        <path d="M-52 -6 C-44 -54 -8 -70 22 -64 C42 -58 48 -26 42 6 C34 48 -4 62 -34 52 C-52 44 -54 20 -52 -6 Z" fill="#ead77e" opacity="0.5"/>
        <path d="M-8 -74 C-6 -30 -6 20 -14 66" fill="none" stroke="#c1a94e" stroke-width="1" opacity="0.7"/>
        <!-- 胚芽（幼小葉芽） -->
        <path data-part="胚芽" d="M40 -36 C58 -50 76 -44 80 -26 C68 -22 58 -14 52 -6 C46 -18 42 -28 40 -36 Z" fill="url(#seed-ext-embryo)" stroke="#357f46" stroke-width="1.2"/>
        <path d="M52 -34 C60 -40 68 -38 72 -30" fill="none" stroke="#2f6d3d" stroke-width="0.9" opacity="0.7"/>
        <!-- 胚根（下端錐狀） -->
        <path data-part="胚根" d="M44 20 C64 26 78 42 84 58 C68 54 56 48 48 40 C44 32 43 26 44 20 Z" fill="url(#seed-ext-embryo)" stroke="#357f46" stroke-width="1.2"/>
      </g>

      <!-- 單子葉種子：玉米粒 -->
      <g transform="translate(330 210)">
        <path data-part="種皮" d="M-56 -84 C0 -98 58 -78 66 -4 C60 78 0 96 -54 84 C-46 60 -44 20 -50 -6 C-54 -34 -52 -60 -56 -84 Z" fill="url(#seed-ext-coat)" stroke="#8a5f30" stroke-width="2"/>
        <path d="M40 -70 C58 -48 60 22 44 66" fill="none" stroke="#f1dcb4" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
        <!-- 胚乳（占大部分，帶顆粒質感） -->
        <path data-part="胚乳" d="M-38 -68 C46 -76 56 -4 56 -2 C56 0 46 74 -38 66 C0 34 4 -30 -38 -68 Z" fill="url(#seed-ext-endo)" stroke="#d3c079" stroke-width="1.2"/>
        <g fill="#dcc873" opacity="0.4"><circle cx="8" cy="-30" r="4"/><circle cx="22" cy="-8" r="3.5"/><circle cx="10" cy="18" r="4"/><circle cx="28" cy="24" r="3"/><circle cx="-4" cy="40" r="3.5"/></g>
        <!-- 子葉（盾片，貼近胚乳的一片） -->
        <path data-part="子葉" d="M-44 -48 C-14 -42 -10 0 -14 2 C-12 42 -44 48 -46 46 C-36 20 -34 -22 -44 -48 Z" fill="url(#seed-ext-cotyl)" stroke="#c1a94e" stroke-width="1.2"/>
        <!-- 胚芽（上方鞘） -->
        <path data-part="胚芽" d="M-40 -22 C-22 -26 -14 -12 -16 -2 C-28 -2 -38 -10 -40 -22 Z" fill="url(#seed-ext-embryo)" stroke="#357f46" stroke-width="1.2"/>
        <!-- 胚根（下方鞘） -->
        <path data-part="胚根" d="M-40 22 C-22 26 -14 12 -16 2 C-28 2 -38 10 -40 22 Z" fill="url(#seed-ext-embryo)" stroke="#357f46" stroke-width="1.2"/>
      </g>

      <g class="labels">
        <line x1="34" y1="150" x2="8" y2="120" stroke="#666" stroke-width="1"/>
        <text x="6" y="114" font-size="13" fill="var(--ink)">種皮</text>
        <line x1="90" y1="200" x2="30" y2="250" stroke="#666" stroke-width="1"/>
        <text x="6" y="266" font-size="13" fill="var(--ink)">子葉（2片・貯養分）</text>
        <line x1="188" y1="176" x2="222" y2="150" stroke="#666" stroke-width="1"/>
        <text x="196" y="146" font-size="13" fill="var(--ink)">胚芽</text>
        <line x1="196" y1="252" x2="220" y2="286" stroke="#666" stroke-width="1"/>
        <text x="196" y="300" font-size="13" fill="var(--ink)">胚根</text>
        <line x1="386" y1="200" x2="422" y2="220" stroke="#666" stroke-width="1"/>
        <text x="330" y="336" font-size="13" fill="var(--ink)">胚乳（貯養分）</text>
        <line x1="312" y1="210" x2="300" y2="322" stroke="#666" stroke-width="1"/>
        <text x="300" y="336" font-size="13" fill="var(--ink)"> </text>
        <line x1="318" y1="200" x2="330" y2="150" stroke="#666" stroke-width="1"/>
        <text x="300" y="146" font-size="13" fill="var(--ink)">子葉（1片）</text>
      </g>`,
      parts: [
        { name: "種皮", desc: "由珠被發育而來，保護內部的胚並防止乾燥。" },
        { name: "子葉", desc: "胚的葉。雙子葉2片、貯存養分；單子葉1片、多負責吸收胚乳養分。" },
        { name: "胚芽", desc: "胚將發育成莖與葉的部分，萌發後向上生長。" },
        { name: "胚根", desc: "胚將發育成根的部分，萌發時最先伸出向下生長。" },
        { name: "胚乳", desc: "貯藏養分的組織，單子葉種子（如玉米）主要靠胚乳供給幼苗養分。" }
      ]
    },
    {
      id: "germination",
      name: "萌發過程",
      viewBox: "0 0 460 340",
      svg: `
      <defs>
        <linearGradient id="seed-soil2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e6d4b2"/><stop offset="100%" stop-color="#c9ad82"/>
        </linearGradient>
        <radialGradient id="seed-coat2" cx="42%" cy="35%">
          <stop offset="0%" stop-color="#d9b98a"/><stop offset="100%" stop-color="#a9773f"/>
        </radialGradient>
        <linearGradient id="seed-shoot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8ed07a"/><stop offset="100%" stop-color="#3f9d5a"/>
        </linearGradient>
        <linearGradient id="seed-rootg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#efe0c2"/><stop offset="100%" stop-color="#c9ad82"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="460" height="340" fill="#eaf6ff"/>
      <rect x="0" y="150" width="460" height="190" fill="url(#seed-soil2)"/>
      <line x1="0" y1="150" x2="460" y2="150" stroke="#a9773f" stroke-width="1.5"/>

      <!-- 階段1：種子吸水 -->
      <g transform="translate(70 200)">
        <ellipse data-part="種子" cx="0" cy="0" rx="26" ry="18" fill="url(#seed-coat2)" stroke="#8a5f30"/>
        <text x="-24" y="52" font-size="12" fill="var(--ink)">①吸水膨脹</text>
      </g>

      <!-- 階段2：胚根伸出向下 -->
      <g transform="translate(190 190)">
        <ellipse cx="0" cy="0" rx="24" ry="17" fill="url(#seed-coat2)" stroke="#8a5f30"/>
        <path data-part="胚根" d="M0 15 Q-4 45 6 72" fill="none" stroke="url(#seed-rootg)" stroke-width="7" stroke-linecap="round"/>
        <text x="-24" y="98" font-size="12" fill="var(--ink)">②胚根先向下</text>
      </g>

      <!-- 階段3：胚芽向上 -->
      <g transform="translate(310 180)">
        <ellipse cx="0" cy="4" rx="20" ry="14" fill="url(#seed-coat2)" stroke="#8a5f30"/>
        <path data-part="胚芽" d="M0 -8 Q-4 -40 2 -60" fill="none" stroke="url(#seed-shoot)" stroke-width="7" stroke-linecap="round"/>
        <path d="M0 20 Q-6 56 8 88" fill="none" stroke="url(#seed-rootg)" stroke-width="7" stroke-linecap="round"/>
        <text x="-24" y="112" font-size="12" fill="var(--ink)">③胚芽向上</text>
      </g>

      <!-- 階段4：幼苗＋子葉 -->
      <g transform="translate(420 176)">
        <path d="M0 20 Q-8 60 6 96" fill="none" stroke="url(#seed-rootg)" stroke-width="6" stroke-linecap="round"/>
        <path d="M0 -70 L0 16" stroke="url(#seed-shoot)" stroke-width="6" stroke-linecap="round"/>
        <path data-part="子葉" d="M0 -6 Q-26 -14 -34 4 Q-14 10 0 2 Z" fill="#a7d69a" stroke="#4d9d4d"/>
        <path data-part="子葉" d="M0 -6 Q26 -14 34 4 Q14 10 0 2 Z" fill="#a7d69a" stroke="#4d9d4d"/>
        <path data-part="本葉" d="M0 -70 Q-20 -80 -30 -66 Q-14 -58 0 -64 Z" fill="url(#seed-shoot)" stroke="#357f46"/>
        <path data-part="本葉" d="M0 -70 Q20 -80 30 -66 Q14 -58 0 -64 Z" fill="url(#seed-shoot)" stroke="#357f46"/>
        <text x="-30" y="120" font-size="12" fill="var(--ink)">④長成幼苗</text>
      </g>

      <g class="labels">
        <line x1="196" y1="255" x2="120" y2="300" stroke="#666" stroke-width="1"/>
        <text x="30" y="304" font-size="13" fill="var(--ink)">胚根（最先伸出）</text>
        <line x1="312" y1="130" x2="240" y2="66" stroke="#666" stroke-width="1"/>
        <text x="150" y="60" font-size="13" fill="var(--ink)">胚芽向上生長</text>
        <line x1="420" y1="172" x2="380" y2="140" stroke="#666" stroke-width="1"/>
        <text x="300" y="134" font-size="13" fill="var(--ink)">子葉／本葉</text>
      </g>`,
      parts: [
        { name: "種子", desc: "萌發首先大量吸水，種皮軟化、體積膨脹，喚醒休眠的胚。" },
        { name: "胚根", desc: "萌發時最先突破種皮向下生長，形成主根以吸水固著。" },
        { name: "胚芽", desc: "隨後向上生長，穿出土面。" },
        { name: "子葉", desc: "供給幼苗初期養分，部分植物子葉出土後可暫時行光合作用。" },
        { name: "本葉", desc: "幼苗長出的第一片真葉，開始獨立行光合作用，植株自立。" }
      ]
    }
  ]
});

/* ============================================================
 * 6. 完整植株 whole-plant
 * ============================================================ */
window.ANATOMY.register({
  id: "whole-plant",
  name: "植株整體與器官",
  latin: "Planta integra",
  emoji: "🌿",
  kingdom: "plantae",
  group: "angiosperms",
  rank: "被子植物・全株",
  summary: "一株完整的被子植物由六大器官組成：根、莖、葉屬營養器官，負責吸收、支撐與製造養分；花、果實、種子屬生殖器官，負責繁殖後代。",
  views: [
    {
      id: "whole",
      name: "全株與六大器官",
      viewBox: "0 0 440 560",
      svg: `
      <defs>
        <linearGradient id="wp-ext-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#eaf6ff"/><stop offset="100%" stop-color="#f4fbf2"/>
        </linearGradient>
        <linearGradient id="wp-ext-soil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ecdcbc"/><stop offset="18%" stop-color="#e2cea6"/><stop offset="100%" stop-color="#c6a87c"/>
        </linearGradient>
        <linearGradient id="wp-ext-stem" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#a3d488"/><stop offset="45%" stop-color="#5f9445"/><stop offset="100%" stop-color="#3a662a"/>
        </linearGradient>
        <linearGradient id="wp-ext-leaf" x1="0.15" y1="0.1" x2="0.85" y2="0.95">
          <stop offset="0%" stop-color="#84cd82"/><stop offset="55%" stop-color="#3f9d5a"/><stop offset="100%" stop-color="#276d38"/>
        </linearGradient>
        <linearGradient id="wp-ext-root" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#eadcbe"/><stop offset="100%" stop-color="#c2a26e"/>
        </linearGradient>
        <linearGradient id="wp-ext-petal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fbc0dc"/><stop offset="100%" stop-color="#d6539a"/>
        </linearGradient>
        <radialGradient id="wp-ext-fruit" cx="36%" cy="30%" r="72%">
          <stop offset="0%" stop-color="#ff9c74"/><stop offset="60%" stop-color="#ec5a3a"/><stop offset="100%" stop-color="#c02f24"/>
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="440" height="380" fill="url(#wp-ext-sky)"/>
      <rect x="0" y="380" width="440" height="180" fill="url(#wp-ext-soil)"/>
      <line x1="0" y1="380" x2="440" y2="380" stroke="#a9773f" stroke-width="1.5"/>

      <!-- 莖：略帶起伏、有縱紋 -->
      <path data-part="莖" d="M212 118 C210 200 209 300 210 382 C215 382 221 382 226 382 C227 300 226 200 224 118 Z" fill="url(#wp-ext-stem)" stroke="#3a662a" stroke-width="1.4"/>
      <line x1="216" y1="130" x2="215" y2="378" stroke="#dff0cb" stroke-width="1.2" opacity="0.6"/>
      <line x1="221" y1="130" x2="222" y2="378" stroke="#2f5522" stroke-width="0.9" opacity="0.4"/>

      <!-- 葉：卵形帶羽狀脈 -->
      <path data-part="葉" d="M214 302 C158 300 118 262 92 214 C120 250 168 280 216 296 C218 298 216 302 214 302 Z" fill="url(#wp-ext-leaf)" stroke="#276d38" stroke-width="1.3"/>
      <path data-part="葉" d="M226 262 C282 260 322 222 348 174 C320 210 272 240 224 256 C222 258 224 262 226 262 Z" fill="url(#wp-ext-leaf)" stroke="#276d38" stroke-width="1.3"/>
      <path data-part="葉" d="M214 212 C162 210 128 176 108 132 C134 166 178 192 216 206 C218 208 216 212 214 212 Z" fill="url(#wp-ext-leaf)" stroke="#276d38" stroke-width="1.3"/>
      <g fill="none" stroke="#bfe3a6" stroke-width="1.4" opacity="0.85">
        <path d="M108 216 C150 250 190 278 214 300 M108 240 Q150 258 180 268 M150 236 Q170 258 190 280"/>
        <path d="M334 176 Q288 214 226 260 M330 200 Q296 224 268 240 M300 190 Q278 220 250 246"/>
        <path d="M120 136 C158 168 192 190 214 210 M124 158 Q160 176 186 186 M158 152 Q178 176 198 196"/>
      </g>

      <!-- 花 -->
      <g transform="translate(220 94)">
        <path data-part="花" d="M0 -36 C20 -30 20 -8 0 0 C-20 -8 -20 -30 0 -36 Z" fill="url(#wp-ext-petal)" stroke="#c74d90" stroke-width="0.8"/>
        <path data-part="花" d="M36 0 C30 20 8 20 0 0 C8 -20 30 -20 36 0 Z" fill="url(#wp-ext-petal)" stroke="#c74d90" stroke-width="0.8"/>
        <path data-part="花" d="M0 36 C-20 30 -20 8 0 0 C20 8 20 30 0 36 Z" fill="url(#wp-ext-petal)" stroke="#c74d90" stroke-width="0.8"/>
        <path data-part="花" d="M-36 0 C-30 -20 -8 -20 0 0 C-8 20 -30 20 -36 0 Z" fill="url(#wp-ext-petal)" stroke="#c74d90" stroke-width="0.8"/>
        <path data-part="花" d="M26 -26 C30 -12 16 -4 0 0 C4 -16 12 -22 26 -26 Z" fill="url(#wp-ext-petal)" stroke="#c74d90" stroke-width="0.7" opacity="0.9"/>
        <path data-part="花" d="M-26 26 C-30 12 -16 4 0 0 C-4 16 -12 22 -26 26 Z" fill="url(#wp-ext-petal)" stroke="#c74d90" stroke-width="0.7" opacity="0.9"/>
        <circle cx="0" cy="0" r="11" fill="#ffd54a" stroke="#d99518" stroke-width="1.2"/>
        <g fill="#c9860f"><circle cx="-4" cy="-3" r="1.6"/><circle cx="4" cy="-2" r="1.6"/><circle cx="0" cy="4" r="1.6"/><circle cx="-3" cy="3" r="1.4"/><circle cx="4" cy="3" r="1.4"/></g>
      </g>

      <!-- 果實（內含種子） -->
      <line x1="228" y1="140" x2="278" y2="130" stroke="#3a662a" stroke-width="4" stroke-linecap="round"/>
      <g transform="translate(300 130)">
        <circle data-part="果實" cx="0" cy="0" r="26" fill="url(#wp-ext-fruit)" stroke="#a83023" stroke-width="1.4"/>
        <ellipse cx="-9" cy="-9" rx="8" ry="5" fill="#ffd9c4" opacity="0.6"/>
        <circle data-part="種子" cx="-6" cy="2" r="4.5" fill="#efe0c2" stroke="#a9773f" stroke-width="1"/>
        <circle data-part="種子" cx="7" cy="-2" r="4.5" fill="#efe0c2" stroke="#a9773f" stroke-width="1"/>
        <circle data-part="種子" cx="2" cy="9" r="4.5" fill="#efe0c2" stroke="#a9773f" stroke-width="1"/>
      </g>

      <!-- 根：直根＋側根 -->
      <path data-part="根" d="M211 382 C209 428 205 468 214 512 C222 468 227 428 227 382 Z" fill="url(#wp-ext-root)" stroke="#a98d58" stroke-width="1.4"/>
      <path data-part="根" d="M214 410 C168 420 138 414 100 400 C136 416 172 424 216 422" fill="none" stroke="url(#wp-ext-root)" stroke-width="6" stroke-linecap="round"/>
      <path data-part="根" d="M224 440 C276 450 306 446 344 434 C308 452 268 458 220 448" fill="none" stroke="url(#wp-ext-root)" stroke-width="6" stroke-linecap="round"/>
      <path data-part="根" d="M214 470 C176 480 150 478 118 468 C150 482 182 486 216 480" fill="none" stroke="url(#wp-ext-root)" stroke-width="5" stroke-linecap="round"/>
      <g fill="none" stroke="url(#wp-ext-root)" stroke-width="2.5" stroke-linecap="round">
        <path d="M100 400 C88 394 80 386 74 378 M344 434 C356 428 364 422 370 414 M118 468 C106 464 98 458 92 450"/>
      </g>

      <!-- 器官分組標示 -->
      <rect x="352" y="60" width="14" height="14" rx="3" fill="#3f9d5a"/>
      <text x="370" y="72" font-size="12" fill="var(--ink)">營養器官</text>
      <rect x="352" y="82" width="14" height="14" rx="3" fill="#d6539a"/>
      <text x="370" y="94" font-size="12" fill="var(--ink)">生殖器官</text>

      <g class="labels">
        <line x1="220" y1="96" x2="120" y2="60" stroke="#666" stroke-width="1"/>
        <text x="30" y="56" font-size="13" fill="var(--ink)">花（生殖）</text>
        <line x1="326" y1="130" x2="392" y2="150" stroke="#666" stroke-width="1"/>
        <text x="360" y="166" font-size="13" fill="var(--ink)">果實（生殖）</text>
        <line x1="306" y1="130" x2="392" y2="200" stroke="#666" stroke-width="1"/>
        <text x="360" y="216" font-size="13" fill="var(--ink)">種子（生殖）</text>
        <line x1="112" y1="176" x2="30" y2="176" stroke="#666" stroke-width="1"/>
        <text x="6" y="168" font-size="13" fill="var(--ink)">葉（營養）</text>
        <line x1="212" y1="250" x2="150" y2="330" stroke="#666" stroke-width="1"/>
        <text x="60" y="344" font-size="13" fill="var(--ink)">莖（營養）</text>
        <line x1="220" y1="470" x2="330" y2="500" stroke="#666" stroke-width="1"/>
        <text x="334" y="504" font-size="13" fill="var(--ink)">根（營養）</text>
      </g>`,
      parts: [
        { name: "根", desc: "營養器官。固著植株、吸收水分與礦物質，並可貯藏養分。" },
        { name: "莖", desc: "營養器官。支撐植株、連接根與葉，內有維管束輸送水分與養分。" },
        { name: "葉", desc: "營養器官。主要行光合作用製造養分，並進行蒸散與氣體交換。" },
        { name: "花", desc: "生殖器官。含雄蕊與雌蕊，經授粉受精後產生果實與種子。" },
        { name: "果實", desc: "生殖器官。由子房發育而成，包住並保護種子、幫助傳播。" },
        { name: "種子", desc: "生殖器官。內含胚，是繁殖下一代並度過不良環境的構造。" }
      ]
    }
  ]
});
