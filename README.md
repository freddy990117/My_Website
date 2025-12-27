# 🧑‍💻 Personal Portfolio Website

這是我使用 **React** 和 **Vite** 建立的個人自我介紹網站，展示了我的背景、技能與作品。網站支援響應式設計（RWD），可在手機與桌機上流暢瀏覽．並期望透過實作作品與學習，進入前端開發領域。

## 📸 Project First Look

![Demo](https://i.imgur.com/AP7vVZm.gif)

[▶️ 點我觀看展示影片](https://youtu.be/RT7CzZ9L980)

## 🛠️ Skill

- React + Vite
- SCSS
- RWD
- React Hooks：`useState`, `useEffect`,`useLayoutEffect`

---

## 📚 Website content

- **Homepage**：自我簡介與社群連結。
- **About-me**：過往背景、學習歷程與轉職動機。
- **Skill**：展示我熟悉的前端技術與工具。
- **Project**：包含 Weather App、圖片搜尋等實作專案。
- **Context**：提供 E-mail 及社群平台連結，歡迎聯絡。

---

## 🚀 效能優化（Lighthouse）

- **優化日期**：2025-12-27
- **測試工具**：Google Lighthouse
- **測試模式**：Mobile

| 指標                         | Before | After  | 改善      |
| ---------------------------- | ------ | ------ | --------- |
| First Contentful Paint (FCP) | 3.1 秒 | 1.6 秒 | ⬇️ 1.5 秒 |
| Speed Index                  | 5.1 秒 | 2.6 秒 | ⬇️ 2.5 秒 |

### 🛠 我做了哪些優化

- 將圖片格式由 PNG 改為 WebP，降低圖片檔案大小，減少下載時間
- 調整首頁主要圖片顯示方式，改用 `<img>` 標籤取代 `background-image`，
  讓瀏覽器能正確判定 Largest Contentful Paint（LCP）元素
- 使用 `srcSet`（依畫面尺寸提供不同解析度圖片），
  由瀏覽器依裝置大小與解析度自動選擇合適圖片，避免載入過大的圖片資源

## How to Start

請依照以下步驟下載並執行專案。

### 1. Clone Project

```bash
git clone https://github.com/freddy990117/My_Website.git
cd My_Website
npm install
npm run dev
```

## License

本專案以 MIT License 授權，歡迎參考與修改。
