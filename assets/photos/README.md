# 實景照片來源與授權

本資料夾的 45 張照片透過 **Wikipedia REST API** 取得，圖檔託管於 **Wikimedia Commons**，多為公有領域或 Creative Commons 授權。

- 每個物種的維基來源頁面列於 `credits.tsv`（欄位：`id  Wikipedia標題  頁面網址`）。
- App 內每張照片下方的「來源」連結會連到該維基頁面，其中載明**作者與確切授權條款**。
- 教學／非商業使用一般沒有問題；若要**商用或再散布**，請個別確認各圖授權（部分為 CC-BY / CC-BY-SA，需標示作者與授權）。

## 重新下載
執行 `scratchpad/getphotos.sh`（或參考其內容）可重新抓取。若要更換某物種照片，改該腳本的 `id:WikipediaTitle` 對照即可。
