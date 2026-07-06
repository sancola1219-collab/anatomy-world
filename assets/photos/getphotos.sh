#!/bin/bash
# 從 Wikipedia REST API 抓各物種真實照片（Wikimedia Commons，授權可用）
cd "C:/Users/凱凱/Desktop/遊戲/動物、植物構造"
mkdir -p assets/photos
UA="AnatomyTeachingApp/1.0 (educational; contact via github sancola1219-collab)"
> assets/photos/credits.tsv

# id<TAB>WikipediaTitle
map=(
"human:Human"
"dog:Dog"
"cat:Cat"
"cow:Cattle"
"whale:Blue_whale"
"bat:Bat"
"chicken:Chicken"
"eagle:Bald_eagle"
"penguin:Penguin"
"feather-anatomy:Feather"
"snake:Snake"
"lizard:Lizard"
"turtle:Turtle"
"crocodile:Crocodile"
"frog:Frog"
"salamander:Salamander"
"bony-fish:European_perch"
"shark:Shark"
"gill-anatomy:Gill"
"butterfly:Butterfly"
"beetle:Beetle"
"bee:Western_honey_bee"
"ant:Ant"
"dragonfly:Dragonfly"
"insect-body:Insect"
"spider:Spider"
"shrimp:Shrimp"
"crab:Crab"
"octopus:Octopus"
"snail:Snail"
"earthworm:Earthworm"
"starfish:Starfish"
"jellyfish:Jellyfish"
"flower:Flower"
"leaf:Leaf"
"root:Root"
"stem:Plant_stem"
"seed:Seed"
"whole-plant:Plant"
"pine:Pine"
"fern:Fern"
"moss:Moss"
"algae:Kelp"
"mushroom:Mushroom"
"mold:Mold"
)

ok=0; fail=0
for entry in "${map[@]}"; do
  id="${entry%%:*}"; title="${entry#*:}"
  json=$(curl -s -m 25 -A "$UA" "https://en.wikipedia.org/api/rest_v1/page/summary/$title")
  src=$(echo "$json" | grep -o '"thumbnail":{"source":"[^"]*"' | head -1 | sed 's/.*"source":"//;s/"$//')
  page=$(echo "$json" | grep -o '"desktop":{"page":"[^"]*"' | head -1 | sed 's/.*"page":"//;s/"$//')
  if [ -z "$src" ]; then echo "NO-IMG  $id ($title)"; fail=$((fail+1)); continue; fi
  # 提高解析度：把 /NNNpx- 換成 /800px-
  big=$(echo "$src" | sed -E 's/\/[0-9]+px-/\/800px-/')
  code=$(curl -s -m 40 -A "$UA" "$big" -o "assets/photos/$id.jpg" -w "%{http_code}")
  if [ "$code" != "200" ]; then
    # 退回原縮圖
    code=$(curl -s -m 40 -A "$UA" "$src" -o "assets/photos/$id.jpg" -w "%{http_code}")
  fi
  sz=$(stat -c%s "assets/photos/$id.jpg" 2>/dev/null || echo 0)
  if [ "$code" = "200" ] && [ "$sz" -gt 3000 ]; then
    echo -e "$id\t$title\t$page" >> assets/photos/credits.tsv
    echo "OK      $id  ${sz} bytes"
    ok=$((ok+1))
  else
    echo "DL-FAIL $id ($title) http=$code sz=$sz"; rm -f "assets/photos/$id.jpg"; fail=$((fail+1))
  fi
done
echo "=== 完成：成功 $ok，失敗 $fail ==="
