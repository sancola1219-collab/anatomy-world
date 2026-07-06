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
        <linearGradient id="flower-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#eef6ff"/><stop offset="100%" stop-color="#f7fbff"/>
        </linearGradient>
        <linearGradient id="flower-petal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f7a8cf"/><stop offset="55%" stop-color="#ec6fae"/><stop offset="100%" stop-color="#c73f86"/>
        </linearGradient>
        <linearGradient id="flower-petal2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fbc7e0"/><stop offset="100%" stop-color="#e879b3"/>
        </linearGradient>
        <linearGradient id="flower-sepal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#67b874"/><stop offset="100%" stop-color="#357f46"/>
        </linearGradient>
        <linearGradient id="flower-filament" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fce8b0"/><stop offset="100%" stop-color="#e6c766"/>
        </linearGradient>
        <radialGradient id="flower-anther" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#ffd54a"/><stop offset="100%" stop-color="#d99518"/>
        </radialGradient>
        <radialGradient id="flower-stigma" cx="45%" cy="35%">
          <stop offset="0%" stop-color="#ffe08a"/><stop offset="100%" stop-color="#e0a72e"/>
        </radialGradient>
        <linearGradient id="flower-style" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#d6efbf"/><stop offset="100%" stop-color="#9fd08a"/>
        </linearGradient>
        <linearGradient id="flower-ovary" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bfe3a6"/><stop offset="100%" stop-color="#7cbb63"/>
        </linearGradient>
        <linearGradient id="flower-recept" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8fbf6f"/><stop offset="100%" stop-color="#5c8f3f"/>
        </linearGradient>
        <radialGradient id="flower-ovule" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#fff4d6"/><stop offset="100%" stop-color="#e8cf8a"/>
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="440" height="480" fill="url(#flower-sky)"/>

      <!-- 花梗 -->
      <rect x="207" y="360" width="14" height="110" rx="6" fill="url(#flower-recept)" stroke="#4d7a34"/>

      <!-- 花托 -->
      <path data-part="花托" d="M180 372 Q214 400 248 372 Q240 352 214 350 Q188 352 180 372 Z" fill="url(#flower-recept)" stroke="#4d7a34"/>

      <!-- 花萼（左右各一，綠色） -->
      <path data-part="花萼" d="M180 366 Q150 348 128 300 Q168 342 196 356 Z" fill="url(#flower-sepal)" stroke="#2f6d3d"/>
      <path data-part="花萼" d="M248 366 Q278 348 300 300 Q260 342 232 356 Z" fill="url(#flower-sepal)" stroke="#2f6d3d"/>

      <!-- 花瓣（外張，多片） -->
      <path data-part="花瓣" d="M196 352 Q120 300 96 176 Q150 268 208 322 Z" fill="url(#flower-petal2)" stroke="#c04d8c"/>
      <path data-part="花瓣" d="M232 352 Q312 300 336 176 Q282 268 224 322 Z" fill="url(#flower-petal2)" stroke="#c04d8c"/>
      <path data-part="花瓣" d="M204 344 Q168 250 190 132 Q206 236 214 320 Z" fill="url(#flower-petal)" stroke="#a83b78"/>
      <path data-part="花瓣" d="M228 344 Q264 250 242 132 Q226 236 218 320 Z" fill="url(#flower-petal)" stroke="#a83b78"/>

      <!-- 雄蕊：花絲 + 花藥（左右對稱數枚） -->
      <g>
        <rect data-part="花絲" x="163" y="212" width="6" height="120" rx="3" fill="url(#flower-filament)" transform="rotate(-14 166 272)"/>
        <ellipse data-part="花藥" cx="150" cy="206" rx="15" ry="22" fill="url(#flower-anther)" stroke="#b9800f" transform="rotate(-14 150 206)"/>
        <rect data-part="花絲" x="271" y="212" width="6" height="120" rx="3" fill="url(#flower-filament)" transform="rotate(14 274 272)"/>
        <ellipse data-part="花藥" cx="290" cy="206" rx="15" ry="22" fill="url(#flower-anther)" stroke="#b9800f" transform="rotate(14 290 206)"/>
        <rect x="185" y="200" width="5" height="128" rx="2.5" fill="url(#flower-filament)" transform="rotate(-6 187 264)"/>
        <ellipse cx="180" cy="196" rx="12" ry="18" fill="url(#flower-anther)" stroke="#b9800f"/>
        <rect x="250" y="200" width="5" height="128" rx="2.5" fill="url(#flower-filament)" transform="rotate(6 253 264)"/>
        <ellipse cx="260" cy="196" rx="12" ry="18" fill="url(#flower-anther)" stroke="#b9800f"/>
        <circle cx="150" cy="200" r="1.6" fill="#fff2b0"/><circle cx="290" cy="200" r="1.6" fill="#fff2b0"/>
      </g>

      <!-- 雌蕊：柱頭 / 花柱 / 子房 / 胚珠 -->
      <ellipse data-part="柱頭" cx="214" cy="150" rx="20" ry="12" fill="url(#flower-stigma)" stroke="#c79420"/>
      <rect data-part="花柱" x="208" y="158" width="12" height="150" rx="6" fill="url(#flower-style)" stroke="#6ca34f"/>
      <path data-part="子房" d="M182 308 Q182 262 214 258 Q246 262 246 308 Q246 356 214 362 Q182 356 182 308 Z" fill="url(#flower-ovary)" stroke="#5c9142"/>
      <circle data-part="胚珠" cx="200" cy="316" r="9" fill="url(#flower-ovule)" stroke="#c7a651"/>
      <circle data-part="胚珠" cx="228" cy="316" r="9" fill="url(#flower-ovule)" stroke="#c7a651"/>
      <circle data-part="胚珠" cx="214" cy="338" r="9" fill="url(#flower-ovule)" stroke="#c7a651"/>

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
        <linearGradient id="leaf-blade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#6fc07a"/><stop offset="55%" stop-color="#3f9d5a"/><stop offset="100%" stop-color="#2c7a43"/>
        </linearGradient>
        <linearGradient id="leaf-petiole" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8ec97a"/><stop offset="100%" stop-color="#5a9142"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="420" height="460" fill="#f5faf3"/>

      <!-- 葉柄 -->
      <rect data-part="葉柄" x="200" y="360" width="16" height="90" rx="8" fill="url(#leaf-petiole)" stroke="#4d7a34"/>

      <!-- 葉片 -->
      <path data-part="葉片" d="M208 44 C300 90 340 200 300 320 C270 400 236 372 208 366 C180 372 146 400 116 320 C76 200 116 90 208 44 Z" fill="url(#leaf-blade)" stroke="#2c7a43" stroke-width="1.5"/>

      <!-- 主脈與側脈（葉脈） -->
      <path data-part="葉脈" d="M208 52 L208 362" fill="none" stroke="#bfe3a6" stroke-width="4"/>
      <path data-part="葉脈" d="M208 110 Q150 120 128 160 M208 110 Q266 120 288 160" fill="none" stroke="#bfe3a6" stroke-width="2"/>
      <path data-part="葉脈" d="M208 170 Q140 178 116 224 M208 170 Q276 178 300 224" fill="none" stroke="#bfe3a6" stroke-width="2"/>
      <path data-part="葉脈" d="M208 240 Q146 246 128 288 M208 240 Q270 246 288 288" fill="none" stroke="#bfe3a6" stroke-width="2"/>
      <path data-part="葉脈" d="M208 300 Q158 306 146 336 M208 300 Q258 306 270 336" fill="none" stroke="#bfe3a6" stroke-width="2"/>

      <!-- 葉緣鋸齒示意 -->
      <path data-part="葉緣" d="M300 320 l-14 6 l12 8 l-15 5" fill="none" stroke="#256b39" stroke-width="1.4"/>

      <g class="labels">
        <line x1="288" y1="200" x2="360" y2="170" stroke="#666" stroke-width="1"/>
        <text x="352" y="164" font-size="13" fill="var(--ink)">葉片</text>
        <line x1="208" y1="150" x2="58" y2="130" stroke="#666" stroke-width="1"/>
        <text x="10" y="134" font-size="13" fill="var(--ink)">葉脈（主脈/側脈）</text>
        <line x1="208" y1="410" x2="300" y2="424" stroke="#666" stroke-width="1"/>
        <text x="304" y="428" font-size="13" fill="var(--ink)">葉柄</text>
        <line x1="298" y1="330" x2="360" y2="340" stroke="#666" stroke-width="1"/>
        <text x="352" y="356" font-size="13" fill="var(--ink)">葉緣</text>
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
        <linearGradient id="root-main" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f0e2c6"/><stop offset="50%" stop-color="#e2cfa4"/><stop offset="100%" stop-color="#c7ac78"/>
        </linearGradient>
        <linearGradient id="root-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#d9c191"/><stop offset="100%" stop-color="#b6935e"/>
        </linearGradient>
        <linearGradient id="root-soil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#efe6d3"/><stop offset="100%" stop-color="#e5d6ba"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="420" height="460" fill="url(#root-soil)"/>
      <line x1="0" y1="40" x2="420" y2="40" stroke="#b9a377" stroke-width="1" stroke-dasharray="6 5"/>
      <text x="12" y="30" font-size="12" fill="#8a7550">地面</text>

      <!-- 主根 -->
      <path data-part="主根" d="M198 40 C196 150 190 250 204 340 C210 380 214 400 214 418 C214 400 220 370 226 330 C238 240 224 150 222 40 Z" fill="url(#root-main)" stroke="#a98d58"/>

      <!-- 側根 -->
      <path data-part="側根" d="M204 130 C150 140 120 128 84 112" fill="none" stroke="url(#root-main)" stroke-width="9" stroke-linecap="round"/>
      <path data-part="側根" d="M218 168 C280 178 312 168 350 150" fill="none" stroke="url(#root-main)" stroke-width="9" stroke-linecap="round"/>
      <path data-part="側根" d="M206 220 C156 232 128 228 96 216" fill="none" stroke="url(#root-main)" stroke-width="8" stroke-linecap="round"/>
      <path data-part="側根" d="M222 262 C276 274 306 272 340 262" fill="none" stroke="url(#root-main)" stroke-width="8" stroke-linecap="round"/>

      <!-- 根毛（吸收區） -->
      <g stroke="#cbb27f" stroke-width="1.2">
        <line x1="84" y1="112" x2="72" y2="104"/><line x1="84" y1="112" x2="70" y2="116"/><line x1="84" y1="112" x2="76" y2="124"/>
        <line x1="350" y1="150" x2="362" y2="142"/><line x1="350" y1="150" x2="364" y2="154"/><line x1="350" y1="150" x2="358" y2="162"/>
        <line x1="96" y1="216" x2="84" y2="210"/><line x1="96" y1="216" x2="82" y2="220"/>
        <line x1="340" y1="262" x2="352" y2="256"/><line x1="340" y1="262" x2="354" y2="266"/>
      </g>

      <!-- 生長區與根冠 -->
      <rect data-part="生長區" x="204" y="374" width="24" height="30" fill="#f2e7cd" opacity="0.6"/>
      <path data-part="根冠" d="M204 412 Q214 434 226 412 Q220 424 214 424 Q208 424 204 412 Z" fill="url(#root-cap)" stroke="#9c7c48"/>

      <g class="labels">
        <line x1="222" y1="90" x2="330" y2="70" stroke="#666" stroke-width="1"/>
        <text x="334" y="74" font-size="13" fill="var(--ink)">主根</text>
        <line x1="120" y1="128" x2="40" y2="150" stroke="#666" stroke-width="1"/>
        <text x="10" y="154" font-size="13" fill="var(--ink)">側根</text>
        <line x1="72" y1="112" x2="30" y2="96" stroke="#666" stroke-width="1"/>
        <text x="8" y="90" font-size="13" fill="var(--ink)">根毛（吸收水分）</text>
        <line x1="216" y1="386" x2="330" y2="360" stroke="#666" stroke-width="1"/>
        <text x="334" y="364" font-size="13" fill="var(--ink)">生長區（細胞分裂伸長）</text>
        <line x1="214" y1="420" x2="330" y2="434" stroke="#666" stroke-width="1"/>
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
        <radialGradient id="seed-coat" cx="42%" cy="35%">
          <stop offset="0%" stop-color="#d9b98a"/><stop offset="100%" stop-color="#a9773f"/>
        </radialGradient>
        <linearGradient id="seed-cotyl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f2e7a8"/><stop offset="100%" stop-color="#d9c463"/>
        </linearGradient>
        <linearGradient id="seed-endo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fbf0c4"/><stop offset="100%" stop-color="#ead98c"/>
        </linearGradient>
        <linearGradient id="seed-embryo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8ed07a"/><stop offset="100%" stop-color="#4d9d4d"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="440" height="380" fill="#f7f4ea"/>
      <text x="52" y="30" font-size="14" fill="var(--ink)">雙子葉（如：菜豆）</text>
      <text x="278" y="30" font-size="14" fill="var(--ink)">單子葉（如：玉米）</text>

      <!-- 雙子葉種子 -->
      <g transform="translate(120 210)">
        <path data-part="種皮" d="M-88 0 Q-70 -96 0 -100 Q78 -96 92 0 Q78 96 0 100 Q-70 96 -88 0 Z" fill="url(#seed-coat)" stroke="#8a5f30" stroke-width="2"/>
        <path data-part="子葉" d="M-70 -6 Q-40 -78 6 -74 Q34 -60 30 6 Q6 66 -40 60 Q-72 40 -70 -6 Z" fill="url(#seed-cotyl)" stroke="#c1a94e"/>
        <path d="M-58 -2 Q-30 -60 8 -56 Q28 -44 24 4 Q6 48 -30 44 Q-58 30 -58 -2 Z" fill="url(#seed-cotyl)" opacity="0.55" stroke="#c1a94e" stroke-width="0.6"/>
        <path data-part="胚芽" d="M40 -34 Q64 -46 74 -30 Q60 -24 52 -12 Q44 -24 40 -34 Z" fill="url(#seed-embryo)" stroke="#357f46"/>
        <path data-part="胚根" d="M44 22 Q70 30 80 50 Q60 48 50 40 Q44 32 44 22 Z" fill="url(#seed-embryo)" stroke="#357f46"/>
      </g>

      <!-- 單子葉種子 -->
      <g transform="translate(330 210)">
        <path data-part="種皮" d="M-58 -86 Q60 -92 66 0 Q60 92 -58 86 Q-46 0 -58 -86 Z" fill="url(#seed-coat)" stroke="#8a5f30" stroke-width="2"/>
        <path data-part="胚乳" d="M-40 -70 Q52 -74 56 0 Q52 74 -40 70 Q0 0 -40 -70 Z" fill="url(#seed-endo)" stroke="#d3c079"/>
        <path data-part="子葉" d="M-46 -46 Q-14 -40 -12 0 Q-14 40 -46 46 Q-34 0 -46 -46 Z" fill="url(#seed-cotyl)" stroke="#c1a94e"/>
        <path data-part="胚芽" d="M-40 -20 Q-20 -22 -18 -4 Q-30 -6 -40 -20 Z" fill="url(#seed-embryo)" stroke="#357f46"/>
        <path data-part="胚根" d="M-40 20 Q-22 24 -18 40 Q-32 34 -40 20 Z" fill="url(#seed-embryo)" stroke="#357f46"/>
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
        <linearGradient id="wp-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#eaf6ff"/><stop offset="100%" stop-color="#f4fbf2"/>
        </linearGradient>
        <linearGradient id="wp-soil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e6d4b2"/><stop offset="100%" stop-color="#c9ad82"/>
        </linearGradient>
        <linearGradient id="wp-stem" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#8ec97a"/><stop offset="50%" stop-color="#5a9142"/><stop offset="100%" stop-color="#3f6f2c"/>
        </linearGradient>
        <linearGradient id="wp-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#6fc07a"/><stop offset="100%" stop-color="#2c7a43"/>
        </linearGradient>
        <linearGradient id="wp-root" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#e2cfa4"/><stop offset="100%" stop-color="#c7ac78"/>
        </linearGradient>
        <linearGradient id="wp-petal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f7a8cf"/><stop offset="100%" stop-color="#d6539a"/>
        </linearGradient>
        <radialGradient id="wp-fruit" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#ff8a6a"/><stop offset="100%" stop-color="#d63f2e"/>
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="440" height="380" fill="url(#wp-sky)"/>
      <rect x="0" y="380" width="440" height="180" fill="url(#wp-soil)"/>
      <line x1="0" y1="380" x2="440" y2="380" stroke="#a9773f" stroke-width="1.5"/>

      <!-- 莖 -->
      <rect data-part="莖" x="212" y="120" width="16" height="262" rx="7" fill="url(#wp-stem)" stroke="#3f6f2c"/>

      <!-- 葉 -->
      <path data-part="葉" d="M214 300 C150 296 118 250 96 214 C150 236 196 262 216 300 Z" fill="url(#wp-leaf)" stroke="#2c7a43"/>
      <path data-part="葉" d="M226 260 C290 256 322 210 344 174 C290 196 244 222 224 260 Z" fill="url(#wp-leaf)" stroke="#2c7a43"/>
      <path data-part="葉" d="M214 210 C158 206 130 168 112 138 C160 156 198 176 216 210 Z" fill="url(#wp-leaf)" stroke="#2c7a43"/>
      <path d="M118 214 Q160 250 214 300 M330 174 Q276 216 226 260 M124 138 Q170 174 214 210" fill="none" stroke="#bfe3a6" stroke-width="1.4"/>

      <!-- 花 -->
      <g transform="translate(220 96)">
        <path data-part="花" d="M0 -34 Q22 -22 0 0 Q-22 -22 0 -34 Z" fill="url(#wp-petal)"/>
        <path data-part="花" d="M34 0 Q22 22 0 0 Q22 -22 34 0 Z" fill="url(#wp-petal)"/>
        <path data-part="花" d="M0 34 Q-22 22 0 0 Q22 22 0 34 Z" fill="url(#wp-petal)"/>
        <path data-part="花" d="M-34 0 Q-22 -22 0 0 Q-22 22 -34 0 Z" fill="url(#wp-petal)"/>
        <circle cx="0" cy="0" r="10" fill="#ffd54a" stroke="#d99518"/>
      </g>

      <!-- 果實（內含種子） -->
      <g transform="translate(300 130)">
        <circle data-part="果實" cx="0" cy="0" r="26" fill="url(#wp-fruit)" stroke="#a83023"/>
        <circle data-part="種子" cx="-6" cy="2" r="4.5" fill="#efe0c2" stroke="#a9773f"/>
        <circle data-part="種子" cx="7" cy="-2" r="4.5" fill="#efe0c2" stroke="#a9773f"/>
        <circle data-part="種子" cx="2" cy="9" r="4.5" fill="#efe0c2" stroke="#a9773f"/>
      </g>
      <line x1="228" y1="140" x2="278" y2="130" stroke="#3f6f2c" stroke-width="4"/>

      <!-- 根 -->
      <path data-part="根" d="M212 382 C210 430 206 470 216 510 C222 470 228 430 228 382 Z" fill="url(#wp-root)" stroke="#a98d58"/>
      <path data-part="根" d="M214 410 C168 420 138 414 104 402" fill="none" stroke="url(#wp-root)" stroke-width="7" stroke-linecap="round"/>
      <path data-part="根" d="M224 440 C276 450 306 446 340 436" fill="none" stroke="url(#wp-root)" stroke-width="7" stroke-linecap="round"/>
      <path data-part="根" d="M214 470 C176 480 150 478 120 470" fill="none" stroke="url(#wp-root)" stroke-width="6" stroke-linecap="round"/>

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
