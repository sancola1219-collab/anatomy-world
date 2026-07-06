// 真菌界（Fungi）寫實構造教材
// 主題：蘑菇（蕈菇構造）、黴菌與酵母
// 每主題呼叫一次 window.ANATOMY.register({...})

// ===== 蘑菇 mushroom =====
window.ANATOMY.register({
  id: "mushroom",
  name: "蕈菇構造",
  latin: "Agaricus bisporus",
  emoji: "🍄",
  kingdom: "fungi",
  group: "basidiomycota",
  rank: "擔子菌門・傘菌目",
  summary: "蘑菇是擔子菌的子實體，無葉綠素、不能行光合作用，靠菌絲分泌酵素分解有機物（腐生），是生態系的重要分解者。我們看見的「蕈菇」只是繁殖用的子實體，主體其實是地下綿密的菌絲體，孢子由菌褶產生並隨風散播。",
  views: [
    {
      id: "external",
      name: "整體構造",
      viewBox: "0 0 420 520",
      svg: `
        <defs>
          <radialGradient id="mushroom-ext-cap" cx="40%" cy="24%" r="82%">
            <stop offset="0%" stop-color="#d8a875"/>
            <stop offset="38%" stop-color="#b47a48"/>
            <stop offset="72%" stop-color="#8a552f"/>
            <stop offset="100%" stop-color="#5f3a1f"/>
          </radialGradient>
          <radialGradient id="mushroom-ext-cap-sheen" cx="38%" cy="20%" r="55%">
            <stop offset="0%" stop-color="#f4dcbc" stop-opacity="0.75"/>
            <stop offset="100%" stop-color="#f4dcbc" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="mushroom-ext-stem" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#c7b48d"/>
            <stop offset="30%" stop-color="#f3ead4"/>
            <stop offset="58%" stop-color="#f7f0dd"/>
            <stop offset="100%" stop-color="#c0ac84"/>
          </linearGradient>
          <linearGradient id="mushroom-ext-gill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e5c8a2"/>
            <stop offset="100%" stop-color="#a97c56"/>
          </linearGradient>
          <linearGradient id="mushroom-ext-ring" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f2e7cc"/>
            <stop offset="100%" stop-color="#cbb88f"/>
          </linearGradient>
          <radialGradient id="mushroom-ext-volva" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#efe2c5"/>
            <stop offset="100%" stop-color="#c6b085"/>
          </radialGradient>
          <linearGradient id="mushroom-ext-soil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#6a4d2c"/>
            <stop offset="100%" stop-color="#38270f"/>
          </linearGradient>
          <linearGradient id="mushroom-ext-mycel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f6efe0"/>
            <stop offset="100%" stop-color="#d2c09c"/>
          </linearGradient>
        </defs>

        <!-- 地面/土壤 -->
        <rect x="0" y="330" width="420" height="190" fill="url(#mushroom-ext-soil)"/>
        <path d="M0,330 Q120,316 210,332 T420,330 L420,348 L0,348 Z" fill="#7a5a34" opacity="0.65"/>
        <g fill="#4a3418" opacity="0.4">
          <circle cx="46" cy="392" r="4"/><circle cx="150" cy="430" r="5"/>
          <circle cx="330" cy="404" r="4"/><circle cx="388" cy="452" r="5"/>
          <circle cx="88" cy="470" r="3.5"/>
        </g>

        <!-- 菌絲體（地下網狀） -->
        <g data-part="菌絲體" stroke="url(#mushroom-ext-mycel)" stroke-width="1.3" fill="none" opacity="0.9" stroke-linecap="round">
          <path d="M205,360 C160,380 120,400 88,442"/>
          <path d="M205,360 C250,382 300,402 336,450"/>
          <path d="M205,362 C190,405 175,450 160,498"/>
          <path d="M205,362 C222,408 240,452 258,500"/>
          <path d="M205,361 C205,405 205,452 205,500"/>
          <path d="M120,400 C160,410 210,412 250,402"/>
          <path d="M95,445 C150,458 270,460 330,448"/>
          <path d="M160,420 C130,455 120,478 130,502"/>
          <path d="M258,420 C290,455 300,478 292,502"/>
          <path d="M175,470 C215,480 245,480 275,470"/>
          <path d="M110,460 C140,472 150,486 145,504"/>
          <path d="M300,460 C270,472 262,486 268,504"/>
        </g>
        <!-- 菌絲末端小分岔 -->
        <g stroke="url(#mushroom-ext-mycel)" stroke-width="0.8" fill="none" opacity="0.7" stroke-linecap="round">
          <path d="M88,442 l-8,10 M88,442 l6,12"/>
          <path d="M336,450 l8,10 M336,450 l-4,12"/>
          <path d="M160,498 l-7,9 M258,500 l7,9"/>
        </g>

        <!-- 菌托（基部杯狀） -->
        <path data-part="菌托" d="M178,346 Q182,372 205,376 Q228,372 232,346 Q231,360 205,364 Q179,360 178,346 Z" fill="url(#mushroom-ext-volva)" stroke="#b19a6c" stroke-width="1.2"/>
        <path d="M181,348 Q205,360 229,348" fill="none" stroke="#9a8459" stroke-width="0.8" opacity="0.6"/>

        <!-- 菌柄 -->
        <path data-part="菌柄" d="M188,178 Q184,268 180,348 Q205,362 230,348 Q226,268 222,178 Q205,168 188,178 Z" fill="url(#mushroom-ext-stem)" stroke="#b09c72" stroke-width="1.3"/>
        <!-- 菌柄纖維 -->
        <g stroke="#b09c72" stroke-width="0.7" opacity="0.45" fill="none">
          <path d="M196,190 Q194,268 190,344"/>
          <path d="M205,188 Q205,268 205,348"/>
          <path d="M214,190 Q216,268 220,344"/>
          <path d="M200,200 Q198,270 196,340"/>
          <path d="M210,200 Q212,270 214,340"/>
        </g>
        <!-- 菌柄受光高光 -->
        <path d="M192,186 Q190,266 188,342" fill="none" stroke="#fdf6e6" stroke-width="2.4" opacity="0.5" stroke-linecap="round"/>

        <!-- 菌環 -->
        <path data-part="菌環" d="M172,222 Q205,210 238,222 Q240,236 205,242 Q170,236 172,222 Z" fill="url(#mushroom-ext-ring)" stroke="#a8946b" stroke-width="1.2"/>
        <path d="M174,226 Q205,248 236,226" fill="none" stroke="#a8946b" stroke-width="0.9" opacity="0.65"/>
        <path d="M180,224 Q205,232 230,224" fill="none" stroke="#fbf3dc" stroke-width="1" opacity="0.6"/>

        <!-- 菌褶（傘蓋下方放射狀） -->
        <g data-part="菌褶">
          <path d="M92,178 Q205,148 318,178 Q205,218 92,178 Z" fill="url(#mushroom-ext-gill)" stroke="#946a47" stroke-width="1"/>
          <g stroke="#7f5638" stroke-width="0.7" opacity="0.8">
            <line x1="205" y1="186" x2="100" y2="178"/>
            <line x1="205" y1="186" x2="116" y2="177"/>
            <line x1="205" y1="186" x2="132" y2="174"/>
            <line x1="205" y1="186" x2="150" y2="172"/>
            <line x1="205" y1="186" x2="168" y2="170"/>
            <line x1="205" y1="186" x2="186" y2="169"/>
            <line x1="205" y1="186" x2="205" y2="168"/>
            <line x1="205" y1="186" x2="224" y2="169"/>
            <line x1="205" y1="186" x2="242" y2="170"/>
            <line x1="205" y1="186" x2="260" y2="172"/>
            <line x1="205" y1="186" x2="278" y2="174"/>
            <line x1="205" y1="186" x2="294" y2="177"/>
            <line x1="205" y1="186" x2="310" y2="178"/>
          </g>
          <path d="M92,178 Q205,204 318,178" fill="none" stroke="#6f4a30" stroke-width="0.9" opacity="0.5"/>
        </g>

        <!-- 菌蓋 -->
        <path data-part="菌蓋" d="M90,180 Q92,68 205,60 Q318,68 320,180 Q262,156 205,154 Q148,156 90,180 Z" fill="url(#mushroom-ext-cap)" stroke="#573014" stroke-width="1.6"/>
        <!-- 菌蓋光澤 -->
        <ellipse cx="176" cy="98" rx="72" ry="30" fill="url(#mushroom-ext-cap-sheen)"/>
        <!-- 蓋緣暗部 -->
        <path d="M90,180 Q148,156 205,154 Q262,156 320,180 Q262,166 205,164 Q148,166 90,180 Z" fill="#4d2a12" opacity="0.35"/>
        <!-- 蓋面放射紋理 -->
        <g stroke="#6b3d1e" stroke-width="0.6" opacity="0.4" fill="none">
          <path d="M205,66 Q150,90 108,168"/>
          <path d="M205,66 Q178,88 148,166"/>
          <path d="M205,66 Q205,92 205,162"/>
          <path d="M205,66 Q232,88 262,166"/>
          <path d="M205,66 Q260,90 302,168"/>
        </g>
        <!-- 蓋面斑點（鱗片） -->
        <g fill="#f0e2c8" opacity="0.85">
          <ellipse cx="162" cy="106" rx="6" ry="5"/>
          <ellipse cx="236" cy="110" rx="7" ry="5.5"/>
          <ellipse cx="205" cy="86" rx="5" ry="4"/>
          <ellipse cx="138" cy="134" rx="5" ry="4"/>
          <ellipse cx="272" cy="132" rx="5.5" ry="4.5"/>
          <ellipse cx="198" cy="128" rx="4" ry="3.2"/>
        </g>

        <!-- 孢子（散落於蓋緣下方） -->
        <g data-part="孢子" fill="#5c3d22">
          <circle cx="86" cy="198" r="2.2"/>
          <circle cx="100" cy="210" r="2"/>
          <circle cx="116" cy="202" r="1.8"/>
          <circle cx="324" cy="198" r="2.2"/>
          <circle cx="310" cy="210" r="2"/>
          <circle cx="296" cy="202" r="1.8"/>
        </g>

        <g class="labels">
          <line x1="205" y1="70" x2="205" y2="30" stroke="#666" stroke-width="1"/>
          <text x="176" y="24" font-size="13" fill="var(--ink)">菌蓋（子實體傘部）</text>

          <line x1="300" y1="176" x2="360" y2="150" stroke="#666" stroke-width="1"/>
          <text x="352" y="146" font-size="13" fill="var(--ink)">菌褶</text>

          <line x1="234" y1="226" x2="330" y2="222" stroke="#666" stroke-width="1"/>
          <text x="336" y="226" font-size="13" fill="var(--ink)">菌環</text>

          <line x1="222" y1="290" x2="330" y2="292" stroke="#666" stroke-width="1"/>
          <text x="336" y="296" font-size="13" fill="var(--ink)">菌柄</text>

          <line x1="228" y1="358" x2="330" y2="360" stroke="#666" stroke-width="1"/>
          <text x="336" y="364" font-size="13" fill="var(--ink)">菌托</text>

          <line x1="258" y1="440" x2="336" y2="440" stroke="#666" stroke-width="1"/>
          <text x="330" y="444" font-size="13" fill="var(--ink)">菌絲體（地下菌絲網）</text>

          <line x1="102" y1="208" x2="46" y2="236" stroke="#666" stroke-width="1"/>
          <text x="8" y="240" font-size="13" fill="var(--ink)">孢子</text>
        </g>
      `,
      parts: [
        { name: "菌蓋", desc: "傘狀子實體上部，保護下方菌褶並將其撐開，表面常有色澤與斑點。" },
        { name: "菌褶", desc: "菌蓋下方放射狀薄片，表面密布擔子，是產生與釋放孢子的部位。" },
        { name: "菌環", desc: "菌柄上的環狀殘膜，為幼菌時包覆菌褶的內菌幕破裂後留下的痕跡。" },
        { name: "菌柄", desc: "支撐菌蓋的柄狀構造，把子實體舉高以利孢子隨風散播。" },
        { name: "菌托", desc: "菌柄基部杯狀殘膜，為外菌幕破裂後留下的部分（部分菇類才有）。" },
        { name: "菌絲體", desc: "地下綿密網狀菌絲，是真菌的營養主體，分泌酵素分解有機物吸收養分。" },
        { name: "孢子", desc: "由菌褶擔子產生的繁殖細胞，隨風散播萌發成新菌絲，是真菌的繁殖單位。" }
      ]
    },
    {
      id: "lifecycle",
      name: "孢子與生命週期",
      viewBox: "0 0 440 420",
      svg: `
        <defs>
          <radialGradient id="mushroom-lc-cap" cx="45%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#bd8354"/>
            <stop offset="100%" stop-color="#6e3f20"/>
          </radialGradient>
          <linearGradient id="mushroom-lc-hypha" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#efe6d3"/>
            <stop offset="100%" stop-color="#d2c09d"/>
          </linearGradient>
          <radialGradient id="mushroom-lc-spore" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#8a6a44"/>
            <stop offset="100%" stop-color="#4f341c"/>
          </radialGradient>
        </defs>

        <!-- 循環箭頭圈 -->
        <g fill="none" stroke="#9a7b52" stroke-width="1.6" opacity="0.7">
          <path d="M220,60 A150,150 0 0,1 360,220" marker-end="url(#mushroom-arrow)"/>
          <path d="M360,220 A150,150 0 0,1 220,360" marker-end="url(#mushroom-arrow)"/>
          <path d="M220,360 A150,150 0 0,1 80,220" marker-end="url(#mushroom-arrow)"/>
          <path d="M80,220 A150,150 0 0,1 220,60" marker-end="url(#mushroom-arrow)"/>
        </g>
        <defs>
          <marker id="mushroom-arrow" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#9a7b52"/>
          </marker>
        </defs>

        <!-- 1. 成熟子實體釋放孢子 -->
        <g transform="translate(220,60)">
          <path data-part="子實體" d="M-30,4 Q-32,-30 0,-34 Q32,-30 30,4 Q0,-6 -30,4 Z" fill="url(#mushroom-lc-cap)" stroke="#5e3418" stroke-width="1.2"/>
          <rect x="-4" y="4" width="8" height="22" fill="#e9dcc4" stroke="#c1ad86" stroke-width="0.8"/>
          <g stroke="#5e3418" stroke-width="0.6" opacity="0.7">
            <line x1="-24" y1="2" x2="-24" y2="-4"/>
            <line x1="-12" y1="3" x2="-12" y2="-5"/>
            <line x1="0" y1="3" x2="0" y2="-6"/>
            <line x1="12" y1="3" x2="12" y2="-5"/>
            <line x1="24" y1="2" x2="24" y2="-4"/>
          </g>
        </g>

        <!-- 2. 孢子（右） -->
        <g transform="translate(360,220)">
          <g data-part="孢子">
            <circle cx="0" cy="0" r="9" fill="url(#mushroom-lc-spore)" stroke="#3a2712" stroke-width="1"/>
            <circle cx="-16" cy="14" r="6" fill="url(#mushroom-lc-spore)" opacity="0.9"/>
            <circle cx="14" cy="-14" r="5" fill="url(#mushroom-lc-spore)" opacity="0.85"/>
          </g>
        </g>

        <!-- 3. 孢子萌發成菌絲（下） -->
        <g transform="translate(220,360)">
          <g data-part="萌發菌絲" stroke="url(#mushroom-lc-hypha)" stroke-width="2" fill="none">
            <path d="M0,-12 C-14,0 -22,8 -28,20"/>
            <path d="M0,-12 C10,2 20,10 26,22"/>
            <path d="M0,-12 C0,4 -4,14 -6,26"/>
          </g>
          <circle cx="0" cy="-14" r="6" fill="url(#mushroom-lc-spore)" stroke="#3a2712" stroke-width="0.8"/>
        </g>

        <!-- 4. 菌絲體交配形成新子實體原基（左） -->
        <g transform="translate(80,220)">
          <g data-part="菌絲體" stroke="url(#mushroom-lc-hypha)" stroke-width="1.6" fill="none">
            <path d="M-24,-18 C-6,-14 8,-6 22,4"/>
            <path d="M-22,10 C-4,4 12,-2 24,-14"/>
            <path d="M-18,-4 C0,-2 12,2 20,10"/>
          </g>
          <ellipse cx="2" cy="-2" rx="10" ry="14" fill="#c9b892" stroke="#a08a63" stroke-width="1" opacity="0.85"/>
        </g>

        <g class="labels">
          <line x1="220" y1="30" x2="220" y2="14" stroke="#666" stroke-width="1"/>
          <text x="150" y="12" font-size="13" fill="var(--ink)">① 成熟子實體釋放孢子</text>

          <line x1="378" y1="220" x2="392" y2="220" stroke="#666" stroke-width="1"/>
          <text x="330" y="256" font-size="13" fill="var(--ink)">② 孢子隨風散播</text>

          <line x1="220" y1="392" x2="220" y2="406" stroke="#666" stroke-width="1"/>
          <text x="150" y="412" font-size="13" fill="var(--ink)">③ 孢子萌發成菌絲</text>

          <line x1="52" y1="220" x2="30" y2="220" stroke="#666" stroke-width="1"/>
          <text x="10" y="188" font-size="13" fill="var(--ink)">④ 菌絲體交配長出新菇</text>
        </g>
      `,
      parts: [
        { name: "子實體", desc: "成熟的蕈菇本體，菌褶上的擔子減數分裂產生孢子並向外釋放。" },
        { name: "孢子", desc: "單套（單倍體）繁殖細胞，質輕可隨風飄散到遠處落地萌發。" },
        { name: "萌發菌絲", desc: "孢子在適合環境萌發，長出單一菌絲（初生菌絲）。" },
        { name: "菌絲體", desc: "不同交配型菌絲融合形成雙核菌絲網，累積養分後在條件成熟時長出新子實體，完成循環。" }
      ]
    }
  ]
});

// ===== 黴菌與酵母 mold =====
window.ANATOMY.register({
  id: "mold",
  name: "黴菌與酵母",
  latin: "Rhizopus stolonifer / Saccharomyces cerevisiae",
  emoji: "🧫",
  kingdom: "fungi",
  group: "molds",
  rank: "接合菌・子囊菌",
  summary: "黴菌是絲狀真菌，麵包黴菌（根黴）以菌絲蔓延、以孢子囊產生大量孢子繁殖，並以假根固著吸收養分，是常見的腐生分解者。酵母菌則是單細胞真菌，多以「出芽生殖」快速增殖，廣泛用於發酵麵包與釀造。兩者皆無葉綠素，不行光合作用。",
  views: [
    {
      id: "bread-mold",
      name: "麵包黴菌（根黴）",
      viewBox: "0 0 440 420",
      svg: `
        <defs>
          <radialGradient id="mold-ext-sporangium" cx="38%" cy="30%" r="72%">
            <stop offset="0%" stop-color="#6a6a7a"/>
            <stop offset="45%" stop-color="#43434f"/>
            <stop offset="80%" stop-color="#26262f"/>
            <stop offset="100%" stop-color="#131319"/>
          </radialGradient>
          <radialGradient id="mold-ext-sporangium-sheen" cx="35%" cy="26%" r="50%">
            <stop offset="0%" stop-color="#9fa0b2" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#9fa0b2" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="mold-ext-hypha" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f6f0e2"/>
            <stop offset="100%" stop-color="#cdbf9c"/>
          </linearGradient>
          <linearGradient id="mold-ext-stolon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#efe5cf"/>
            <stop offset="50%" stop-color="#f7efdc"/>
            <stop offset="100%" stop-color="#cabb95"/>
          </linearGradient>
          <linearGradient id="mold-ext-bread" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e9cc92"/>
            <stop offset="100%" stop-color="#b98d51"/>
          </linearGradient>
        </defs>

        <!-- 基質：麵包 -->
        <rect x="0" y="330" width="440" height="90" fill="url(#mold-ext-bread)"/>
        <path d="M0,330 Q110,318 220,332 T440,330 L440,344 L0,344 Z" fill="#dcbc7e" opacity="0.75"/>
        <!-- 麵包氣孔 -->
        <g fill="#a9803f" opacity="0.5">
          <ellipse cx="70" cy="368" rx="6" ry="4.5"/>
          <ellipse cx="180" cy="386" rx="7" ry="5"/>
          <ellipse cx="300" cy="362" rx="5.5" ry="4"/>
          <ellipse cx="390" cy="388" rx="6.5" ry="5"/>
          <ellipse cx="130" cy="404" rx="5" ry="3.5"/>
          <ellipse cx="250" cy="400" rx="6" ry="4"/>
        </g>
        <g fill="#8f6a30" opacity="0.35">
          <circle cx="70" cy="368" r="2"/><circle cx="180" cy="386" r="2.4"/>
          <circle cx="300" cy="362" r="1.8"/><circle cx="390" cy="388" r="2.2"/>
        </g>

        <!-- 匍匐菌絲（水平蔓延，走莖弧線） -->
        <path data-part="匍匐菌絲" d="M52,304 Q160,286 250,300 Q345,314 406,298" fill="none" stroke="url(#mold-ext-stolon)" stroke-width="4.4" stroke-linecap="round"/>
        <path d="M52,302 Q160,284 250,298 Q345,312 406,296" fill="none" stroke="#fdf8ec" stroke-width="1.2" opacity="0.6" stroke-linecap="round"/>

        <!-- 假根（往麵包內固著，鬚根狀分岔） -->
        <g data-part="假根" stroke="url(#mold-ext-hypha)" stroke-width="1.7" fill="none" stroke-linecap="round">
          <path d="M96,304 C90,318 84,330 78,348"/>
          <path d="M104,304 C106,320 108,332 110,350"/>
          <path d="M100,304 C100,322 98,336 96,352"/>
          <path d="M78,348 l-6,10 M78,348 l4,10"/>
          <path d="M110,350 l6,9 M96,352 l-2,10"/>
          <path d="M250,304 C244,320 240,332 236,350"/>
          <path d="M256,304 C260,322 262,334 264,352"/>
          <path d="M253,304 C253,322 252,336 252,352"/>
          <path d="M236,350 l-6,9 M264,352 l6,9 M252,352 l-1,10"/>
        </g>

        <!-- 直立菌絲柄 + 孢子囊（左） -->
        <path data-part="直立菌絲" d="M100,300 Q97,222 100,150" fill="none" stroke="url(#mold-ext-hypha)" stroke-width="4.2" stroke-linecap="round"/>
        <path d="M98,298 Q95,222 98,152" fill="none" stroke="#fdf8ec" stroke-width="1.1" opacity="0.55" stroke-linecap="round"/>
        <circle data-part="孢子囊" cx="100" cy="120" r="32" fill="url(#mold-ext-sporangium)" stroke="#0f0f16" stroke-width="1.2"/>
        <ellipse cx="90" cy="106" rx="14" ry="10" fill="url(#mold-ext-sporangium-sheen)"/>
        <!-- 囊軸（膨大處） -->
        <path d="M100,150 Q100,134 100,116" fill="none" stroke="#9a8a68" stroke-width="2.4" opacity="0.55"/>
        <ellipse cx="100" cy="146" rx="9" ry="6" fill="#8a7a5a" opacity="0.4"/>
        <!-- 孢子（囊內點狀擬真） -->
        <g fill="#8b8b98" opacity="0.9">
          <circle cx="88" cy="110" r="2.2"/><circle cx="100" cy="104" r="2.2"/>
          <circle cx="112" cy="114" r="2.2"/><circle cx="92" cy="126" r="2.2"/>
          <circle cx="108" cy="128" r="2.2"/><circle cx="100" cy="120" r="2.2"/>
          <circle cx="82" cy="120" r="1.9"/><circle cx="118" cy="124" r="1.9"/>
          <circle cx="96" cy="136" r="1.8"/><circle cx="106" cy="98" r="1.8"/>
        </g>

        <!-- 第二株孢子囊（右，較矮） -->
        <path d="M250,300 Q247,242 250,190" fill="none" stroke="url(#mold-ext-hypha)" stroke-width="4.2" stroke-linecap="round"/>
        <circle cx="250" cy="164" r="26" fill="url(#mold-ext-sporangium)" stroke="#0f0f16" stroke-width="1.2"/>
        <ellipse cx="241" cy="152" rx="11" ry="8" fill="url(#mold-ext-sporangium-sheen)"/>
        <ellipse cx="250" cy="186" rx="7" ry="5" fill="#8a7a5a" opacity="0.4"/>

        <!-- 釋放的孢子 -->
        <g data-part="孢子" fill="#4a4a55">
          <circle cx="140" cy="94" r="2.4"/>
          <circle cx="156" cy="80" r="2"/>
          <circle cx="170" cy="102" r="1.8"/>
          <circle cx="64" cy="90" r="2.2"/>
          <circle cx="50" cy="106" r="1.8"/>
          <circle cx="286" cy="148" r="2"/>
          <circle cx="302" cy="166" r="1.8"/>
          <circle cx="128" cy="72" r="1.6"/>
          <circle cx="276" cy="130" r="1.6"/>
        </g>

        <g class="labels">
          <line x1="122" y1="112" x2="200" y2="70" stroke="#666" stroke-width="1"/>
          <text x="204" y="66" font-size="13" fill="var(--ink)">孢子囊（內含孢子）</text>

          <line x1="140" y1="96" x2="196" y2="112" stroke="#666" stroke-width="1"/>
          <text x="200" y="116" font-size="13" fill="var(--ink)">孢子</text>

          <line x1="100" y1="230" x2="34" y2="222" stroke="#666" stroke-width="1"/>
          <text x="8" y="218" font-size="13" fill="var(--ink)">直立菌絲柄</text>

          <line x1="220" y1="298" x2="300" y2="286" stroke="#666" stroke-width="1"/>
          <text x="306" y="290" font-size="13" fill="var(--ink)">匍匐菌絲</text>

          <line x1="96" y1="340" x2="34" y2="356" stroke="#666" stroke-width="1"/>
          <text x="8" y="360" font-size="13" fill="var(--ink)">假根（固著吸收）</text>

          <line x1="120" y1="368" x2="330" y2="368" stroke="#666" stroke-width="1"/>
          <text x="336" y="372" font-size="13" fill="var(--ink)">麵包（基質）</text>
        </g>
      `,
      parts: [
        { name: "孢子囊", desc: "直立菌絲頂端的球形囊，內部產生大量無性孢子，成熟後破裂散播。" },
        { name: "孢子", desc: "孢子囊內產生的無性繁殖細胞，隨氣流散播，落於基質後萌發成新菌絲。" },
        { name: "直立菌絲", desc: "從匍匐菌絲垂直向上生長的菌絲柄，頂端撐起孢子囊以利孢子飛散。" },
        { name: "匍匐菌絲", desc: "水平蔓延於基質表面的菌絲（走莖），連接各生長點並向外擴張。" },
        { name: "假根", desc: "伸入基質的根狀菌絲，固著菌體並分泌酵素分解有機物、吸收養分。" }
      ]
    },
    {
      id: "yeast",
      name: "酵母菌出芽生殖",
      viewBox: "0 0 440 400",
      svg: `
        <defs>
          <radialGradient id="mold-yeast-cell" cx="38%" cy="32%" r="72%">
            <stop offset="0%" stop-color="#f6e6b8"/>
            <stop offset="65%" stop-color="#e3c877"/>
            <stop offset="100%" stop-color="#c1a24f"/>
          </radialGradient>
          <radialGradient id="mold-yeast-nucleus" cx="40%" cy="38%" r="70%">
            <stop offset="0%" stop-color="#a5643f"/>
            <stop offset="100%" stop-color="#6f3c22"/>
          </radialGradient>
        </defs>

        <!-- 主標題背景區隔（略） -->

        <!-- 母細胞 -->
        <circle data-part="母細胞" cx="150" cy="200" r="80" fill="url(#mold-yeast-cell)" stroke="#a8892f" stroke-width="2"/>
        <!-- 細胞壁高光 -->
        <ellipse cx="124" cy="164" rx="30" ry="20" fill="#fff4d0" opacity="0.5"/>

        <!-- 細胞核 -->
        <circle data-part="細胞核" cx="150" cy="200" r="26" fill="url(#mold-yeast-nucleus)" stroke="#5a2f19" stroke-width="1.2"/>

        <!-- 液泡 -->
        <circle data-part="液泡" cx="112" cy="238" r="20" fill="#f8f0d6" stroke="#c9b072" stroke-width="1.2" opacity="0.85"/>

        <!-- 出芽（芽體） -->
        <circle data-part="芽體" cx="248" cy="146" r="36" fill="url(#mold-yeast-cell)" stroke="#a8892f" stroke-width="2"/>
        <ellipse cx="236" cy="132" rx="14" ry="9" fill="#fff4d0" opacity="0.5"/>
        <!-- 芽體內遷入的核物質 -->
        <circle cx="252" cy="150" r="10" fill="url(#mold-yeast-nucleus)" opacity="0.85" stroke="#5a2f19" stroke-width="0.8"/>
        <!-- 芽頸連接處 -->
        <path d="M210,168 Q224,150 226,132 M212,182 Q232,176 244,180" fill="none" stroke="#a8892f" stroke-width="1.5"/>

        <!-- 小分裂步驟示意（右下：已分離的子細胞） -->
        <circle cx="352" cy="286" r="30" fill="url(#mold-yeast-cell)" stroke="#a8892f" stroke-width="1.8"/>
        <circle cx="352" cy="286" r="11" fill="url(#mold-yeast-nucleus)" opacity="0.85"/>
        <text x="330" y="336" font-size="11" fill="var(--ink)" opacity="0.8">分離後成獨立子細胞</text>

        <!-- 出芽疤痕 -->
        <path d="M206,172 a10,10 0 0,1 14,-6" fill="none" stroke="#9c7f3a" stroke-width="1.5" opacity="0.7"/>

        <g class="labels">
          <line x1="150" y1="120" x2="60" y2="86" stroke="#666" stroke-width="1"/>
          <text x="8" y="82" font-size="13" fill="var(--ink)">母細胞（單細胞真菌）</text>

          <line x1="176" y1="200" x2="330" y2="210" stroke="#666" stroke-width="1"/>
          <text x="336" y="214" font-size="13" fill="var(--ink)">細胞核</text>

          <line x1="112" y1="238" x2="40" y2="268" stroke="#666" stroke-width="1"/>
          <text x="8" y="272" font-size="13" fill="var(--ink)">液泡</text>

          <line x1="270" y1="122" x2="330" y2="96" stroke="#666" stroke-width="1"/>
          <text x="336" y="100" font-size="13" fill="var(--ink)">芽體（出芽生殖）</text>
        </g>
      `,
      parts: [
        { name: "母細胞", desc: "酵母菌為單細胞真菌，成熟母細胞於側面長出小突起，即出芽生殖的開始。" },
        { name: "芽體", desc: "母細胞外突形成的芽，逐漸長大並接受母細胞複製的細胞核，最終縊縮分離成新個體。" },
        { name: "細胞核", desc: "含遺傳物質，出芽時經有絲分裂，一份留在母細胞、一份移入芽體。" },
        { name: "液泡", desc: "細胞內儲存養分與水分、調節滲透壓的胞器。" }
      ]
    }
  ]
});
