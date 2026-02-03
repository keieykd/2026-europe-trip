# 🌍 2026 荷比挪極光自駕 17日 (Travel Guidebook)

這是一個為 2026 年 3 月前往 **荷蘭、比利時、挪威**（追極光 & 自駕）所設計的 **RWD 響應式旅遊指南網站**。

本專案旨在解決傳統 PDF 或紙本行程表在手機上難以閱讀、無法快速導航的問題。透過網頁化的方式，整合了行程表、自駕攻略、食譜、退稅教學與緊急應變措施，打造「保母級」的隨身導遊。

## ✨ 特色功能 (Features)

* **📱 完全響應式設計 (Mobile-First)**：專為手機閱讀優化，隨時隨地查看，包含自動隱藏的頂部導航列 (Navbar)。
* **📅 動態行程表 (`index.html`)**：
    * 整合 Google Maps 連結，點擊地點直接導航。
    * 每日行程採折疊式設計 (Details/Summary)，保持版面整潔。
    * 包含航班資訊、住宿清單與天氣/極光 APP 推薦。
* **🚗 自駕保命全攻略 (`driving.html`)**：
    * 針對 **挪威雪地** 與 **荷蘭城市** 的駕駛潛規則教學。
    * 收錄租車櫃台英文對話、自助加油流程、路標圖解與事故應變 SOP。
* **🛍️ 生活與生存指南 (`lifestyle.html`)**：
    * 包含退稅雙軌制教學 (歐盟 vs 非歐盟)。
    * 電壓、穿搭建議、飯店備品提醒與超市買酒限制。
* **👨‍🍳 自炊食譜資料庫 (`cooking.html`)**：
    * 針對挪威高物價設計的 20 道超市省錢食譜。
    * 中挪食材對照表 (如：Laksefilet, Kjøttdeig)。
* **📷 攝影與工具 (`photo.html`, `checklist.html`)**：
    * iPhone 15 Pro Max 極光/雪地攝影參數設定。
    * 互動式行前準備檢查表 (Checklist)。
* **🗣️ 手指英文大全 (`communication.html`)**：
    * 具備即時搜尋功能的英文短句庫 (機場、租車、醫療、點餐)。

## 📂 檔案結構 (File Structure)

```text
/
├── index.html          # 首頁：17日詳細行程表、航班、住宿
├── driving.html        # 交通：租車、雪地駕駛、交通規則
├── lifestyle.html      # 生活：退稅、電壓、穿搭、飯店
├── cooking.html        # 食譜：超市食材對照、簡易料理教學
├── refuel.html         # 加油：自助加油步驟詳解
├── photo.html          # 攝影：手機攝影參數設定
├── checklist.html      # 清單：行前準備與行李檢查表
├── communication.html  # 語言：旅行萬用英文 (含搜尋功能)
├── style.css           # 樣式：全站共用的 CSS 設計 (變數系統、RWD)
└── navbar.js           # 腳本：動態生成導航列、Favicon、Active 狀態控制
