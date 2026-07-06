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
          <radialGradient id="mushroom-cap" cx="42%" cy="28%" r="78%">
            <stop offset="0%" stop-color="#c48a5a"/>
            <stop offset="55%" stop-color="#9a5f34"/>
            <stop offset="100%" stop-color="#6e3f20"/>
          </radialGradient>
          <linearGradient id="mushroom-stem" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#e9dcc4"/>
            <stop offset="45%" stop-color="#f5ecd8"/>
            <stop offset="100%" stop-color="#cdbb98"/>
          </linearGradient>
          <linearGradient id="mushroom-gill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#d9b892"/>
            <stop offset="100%" stop-color="#b98a63"/>
          </linearGradient>
          <linearGradient id="mushroom-soil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#5a4127"/>
            <stop offset="100%" stop-color="#3a2916"/>
          </linearGradient>
          <linearGradient id="mushroom-mycel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f3ecdd"/>
            <stop offset="100%" stop-color="#d7c7a6"/>
          </linearGradient>
        </defs>

        <!-- 地面/土壤 -->
        <rect x="0" y="330" width="420" height="190" fill="url(#mushroom-soil)"/>
        <path d="M0,330 Q120,318 210,332 T420,330 L420,345 L0,345 Z" fill="#6b4e2e" opacity="0.7"/>

        <!-- 菌絲體（地下網狀） -->
        <g data-part="菌絲體" stroke="url(#mushroom-mycel)" stroke-width="1.4" fill="none" opacity="0.9">
          <path d="M205,360 C160,380 120,400 90,440"/>
          <path d="M205,360 C250,382 300,402 335,448"/>
          <path d="M205,362 C190,405 175,450 160,495"/>
          <path d="M205,362 C222,408 240,452 258,498"/>
          <path d="M120,400 C160,410 210,412 250,402"/>
          <path d="M95,445 C150,458 270,460 330,448"/>
          <path d="M160,420 C130,455 120,478 130,500"/>
          <path d="M258,420 C290,455 300,478 292,500"/>
          <path d="M175,470 C215,480 245,480 275,470"/>
        </g>

        <!-- 菌托（基部杯狀） -->
        <path data-part="菌托" d="M182,352 Q205,338 228,352 Q232,368 205,372 Q178,368 182,352 Z" fill="#e4d6b8" stroke="#b7a47c" stroke-width="1.2"/>

        <!-- 菌柄 -->
        <path data-part="菌柄" d="M190,180 Q186,270 184,352 Q205,360 226,352 Q224,270 220,180 Q205,172 190,180 Z" fill="url(#mushroom-stem)" stroke="#b9a67f" stroke-width="1.2"/>

        <!-- 菌環 -->
        <path data-part="菌環" d="M176,224 Q205,214 234,224 Q236,236 205,240 Q174,236 176,224 Z" fill="#e7dabf" stroke="#a8946b" stroke-width="1.2"/>
        <path d="M176,226 Q205,246 234,226" fill="none" stroke="#a8946b" stroke-width="0.9" opacity="0.7"/>

        <!-- 菌褶（傘蓋下方放射狀） -->
        <g data-part="菌褶">
          <path d="M96,178 Q205,150 314,178 Q205,214 96,178 Z" fill="url(#mushroom-gill)" stroke="#9a6f4b" stroke-width="1"/>
          <g stroke="#8a5f3e" stroke-width="0.8" opacity="0.85">
            <line x1="205" y1="182" x2="110" y2="178"/>
            <line x1="205" y1="182" x2="130" y2="175"/>
            <line x1="205" y1="182" x2="150" y2="172"/>
            <line x1="205" y1="182" x2="172" y2="170"/>
            <line x1="205" y1="182" x2="194" y2="169"/>
            <line x1="205" y1="182" x2="216" y2="169"/>
            <line x1="205" y1="182" x2="238" y2="170"/>
            <line x1="205" y1="182" x2="260" y2="172"/>
            <line x1="205" y1="182" x2="280" y2="175"/>
            <line x1="205" y1="182" x2="300" y2="178"/>
          </g>
        </g>

        <!-- 菌蓋 -->
        <path data-part="菌蓋" d="M92,178 Q100,74 205,66 Q310,74 318,178 Q262,158 205,156 Q148,158 92,178 Z" fill="url(#mushroom-cap)" stroke="#5e3418" stroke-width="1.5"/>
        <ellipse cx="205" cy="98" rx="70" ry="24" fill="#d6a271" opacity="0.35"/>
        <!-- 蓋面斑點 -->
        <g fill="#ecdcc0" opacity="0.85">
          <circle cx="165" cy="108" r="6"/>
          <circle cx="235" cy="112" r="7"/>
          <circle cx="205" cy="90" r="5"/>
          <circle cx="140" cy="132" r="4.5"/>
          <circle cx="270" cy="130" r="5"/>
        </g>

        <!-- 孢子（散落於蓋緣下方） -->
        <g data-part="孢子" fill="#5c3d22">
          <circle cx="88" cy="196" r="2.2"/>
          <circle cx="102" cy="208" r="2"/>
          <circle cx="118" cy="200" r="1.8"/>
          <circle cx="322" cy="196" r="2.2"/>
          <circle cx="308" cy="208" r="2"/>
          <circle cx="294" cy="200" r="1.8"/>
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
          <radialGradient id="mold-sporangium" cx="42%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#5a5a68"/>
            <stop offset="60%" stop-color="#33333f"/>
            <stop offset="100%" stop-color="#181820"/>
          </radialGradient>
          <linearGradient id="mold-hypha" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f2ecdd"/>
            <stop offset="100%" stop-color="#d3c5a4"/>
          </linearGradient>
          <linearGradient id="mold-stolon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#e7dcc5"/>
            <stop offset="100%" stop-color="#cdbc98"/>
          </linearGradient>
          <linearGradient id="mold-bread" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e4c489"/>
            <stop offset="100%" stop-color="#c39a5c"/>
          </linearGradient>
        </defs>

        <!-- 基質：麵包 -->
        <rect x="0" y="330" width="440" height="90" fill="url(#mold-bread)"/>
        <path d="M0,330 Q110,320 220,332 T440,330 L440,342 L0,342 Z" fill="#d8b878" opacity="0.7"/>
        <g fill="#b98f52" opacity="0.5">
          <circle cx="70" cy="368" r="5"/>
          <circle cx="180" cy="384" r="6"/>
          <circle cx="300" cy="362" r="5"/>
          <circle cx="390" cy="386" r="6"/>
        </g>

        <!-- 匍匐菌絲（水平蔓延） -->
        <path data-part="匍匐菌絲" d="M60,300 Q160,286 250,300 Q340,314 400,300" fill="none" stroke="url(#mold-stolon)" stroke-width="4" stroke-linecap="round"/>

        <!-- 假根（往麵包內固著） -->
        <g data-part="假根" stroke="url(#mold-hypha)" stroke-width="1.8" fill="none">
          <path d="M96,302 C90,318 84,330 78,346"/>
          <path d="M104,302 C106,320 108,332 110,348"/>
          <path d="M100,302 C100,322 98,336 96,350"/>
          <path d="M250,302 C244,320 240,332 236,348"/>
          <path d="M256,302 C260,322 262,334 264,350"/>
        </g>

        <!-- 直立菌絲柄 + 孢子囊（左） -->
        <path data-part="直立菌絲" d="M100,300 Q98,220 100,150" fill="none" stroke="url(#mold-hypha)" stroke-width="4" stroke-linecap="round"/>
        <circle data-part="孢子囊" cx="100" cy="122" r="30" fill="url(#mold-sporangium)" stroke="#101018" stroke-width="1.2"/>
        <!-- 囊軸 -->
        <path d="M100,150 Q100,132 100,110" fill="none" stroke="#8a7a5a" stroke-width="2" opacity="0.6"/>
        <!-- 孢子（囊內點狀） -->
        <g fill="#7b7b88" opacity="0.85">
          <circle cx="90" cy="112" r="2"/><circle cx="102" cy="106" r="2"/>
          <circle cx="112" cy="118" r="2"/><circle cx="94" cy="128" r="2"/>
          <circle cx="108" cy="130" r="2"/><circle cx="100" cy="122" r="2"/>
        </g>

        <!-- 第二株孢子囊（右，較矮） -->
        <path d="M250,300 Q248,240 250,190" fill="none" stroke="url(#mold-hypha)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="250" cy="166" r="24" fill="url(#mold-sporangium)" stroke="#101018" stroke-width="1.2"/>

        <!-- 釋放的孢子 -->
        <g data-part="孢子" fill="#4a4a55">
          <circle cx="140" cy="96" r="2.4"/>
          <circle cx="156" cy="82" r="2"/>
          <circle cx="170" cy="104" r="1.8"/>
          <circle cx="66" cy="92" r="2.2"/>
          <circle cx="52" cy="108" r="1.8"/>
          <circle cx="286" cy="150" r="2"/>
          <circle cx="300" cy="168" r="1.8"/>
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
