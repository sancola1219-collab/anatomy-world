// 整合驗證：模擬瀏覽器載入全部檔案並檢查
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;

// 建立假的 window/document 環境
const sandbox = {};
sandbox.window = sandbox;
sandbox.console = console;
sandbox.document = {
  getElementById: () => null,
  querySelectorAll: () => [],
  createElement: () => ({ style:{}, classList:{ toggle(){},add(){},remove(){} }, append(){}, appendChild(){}, addEventListener(){}, setAttribute(){} }),
  documentElement: { setAttribute(){}, getAttribute(){ return ""; } }
};
sandbox.CSS = { escape: s => s };
vm.createContext(sandbox);

function run(file){
  const code = fs.readFileSync(path.join(ROOT, file), "utf8");
  try { vm.runInContext(code, sandbox, { filename:file }); }
  catch(e){ console.log("LOAD ERROR in", file, "->", e.message); }
}

// 載入引擎與資料（順序同 index.html）
run("js/app.js");
const dataFiles = ["mammals","birds","reptiles-amphibians","fish","insects",
  "other-invertebrates","flowering-plants","other-plants","fungi"];
dataFiles.forEach(f => run("data/"+f+".js"));

const A = sandbox.window.ANATOMY;
const reg = A._registry;
const TAX = A._tax;

console.log("=== 註冊總數 ===", reg.length);

// 1. id 唯一性
const ids = {};
let dup = 0;
reg.forEach(o => { if(ids[o.id]){ console.log("重複 id:", o.id); dup++; } ids[o.id]=1; });
console.log("重複 id 數:", dup);

// 2. group / kingdom 合法性
let badGroup = 0;
reg.forEach(o => {
  const k = TAX[o.kingdom];
  if(!k){ console.log("未知 kingdom:", o.id, o.kingdom); badGroup++; return; }
  if(!k.groups[o.group]){ console.log("未知 group:", o.id, o.kingdom+"/"+o.group); badGroup++; }
});
console.log("分類歸位錯誤數:", badGroup);

// 3. data-part 與 parts[].name 一致性 + SVG 標籤平衡 + labels 層
let mismatch=0, unbalanced=0, viewCount=0, partCount=0, noLabels=0;
reg.forEach(o => {
  (o.views||[]).forEach(v => {
    viewCount++;
    const svg = v.svg||"";
    partCount += (v.parts||[]).length;
    // data-part 值集合
    const dp = new Set([...svg.matchAll(/data-part="([^"]+)"/g)].map(m=>m[1]));
    (v.parts||[]).forEach(p=>{
      if(p.name && !dp.has(p.name)){ /* 允許：label-only part */ }
    });
    // 反向：每個 data-part 應能在 parts 找到（引擎高亮靠這個）
    const partNames = new Set((v.parts||[]).map(p=>p.name));
    dp.forEach(name=>{ if(!partNames.has(name)){ console.log("data-part 無對應 parts:", o.id, v.id, name); mismatch++; } });
    // labels 層
    if((v.parts||[]).length && !svg.includes('class="labels"')) { console.log("缺 labels 層:", o.id, v.id); noLabels++; }
    // 粗略標籤平衡：< 與 > 數量
    const lt=(svg.match(/</g)||[]).length, gt=(svg.match(/>/g)||[]).length;
    if(lt!==gt){ console.log("尖括號不平衡:", o.id, v.id, "<="+lt, ">="+gt); unbalanced++; }
  });
});
console.log("=== 視圖總數 ===", viewCount, " 標註總數:", partCount);
console.log("data-part 不匹配:", mismatch, " 缺labels:", noLabels, " 尖括號不平衡:", unbalanced);

// 4. 各界/類群分佈
console.log("=== 分佈 ===");
Object.entries(TAX).forEach(([kk,k])=>{
  const n = reg.filter(o=>o.kingdom===kk).length;
  console.log(k.name, n);
  Object.entries(k.groups).forEach(([gk,g])=>{
    const sp = reg.filter(o=>o.kingdom===kk && o.group===gk);
    if(sp.length) console.log("   -", g.name, sp.length, "["+sp.map(o=>o.name).join("、")+"]");
  });
});
