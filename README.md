# 🚀 個人作品集網站模板

![Next.js](https://img.shields.io/badge/Next.js-13.4.8-black)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.2-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.12.17-purple)

這是一個使用 Next.js、React、TypeScript 和 TailwindCSS 構建的現代化個人作品集網站模板。網站包含響應式設計，動畫效果，以及多個可自定義的部分，讓您可以展示您的專業技能和項目。

## ✨ 功能特色

- 🎨 現代化且響應式的設計
- 🌓 明暗主題切換
- 🔄 流暢的頁面過渡動畫
- 📱 完全適配移動設備
- 📧 內建聯絡表單
- 📊 技能展示區域
- 📝 項目展示區域
- 📜 經歷時間軸
- 🔍 SEO 優化
- 🌐 快速加載性能

## 🛠️ 技術棧

- **框架**: [Next.js 13](https://nextjs.org/) (App Router)
- **前端庫**: [React 18](https://reactjs.org/)
- **樣式**: [TailwindCSS](https://tailwindcss.com/)
- **動畫**: [Framer Motion](https://www.framer.com/motion/)
- **3D 效果**: [Three.js](https://threejs.org/) 與 [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **表單處理**: [React Email](https://react.email/) 與 [Resend](https://resend.io/)
- **語言**: [TypeScript](https://www.typescriptlang.org/)

## 📋 先決條件

在開始之前，請確保您已安裝：

- Node.js 16.8 或更高版本
- npm 或 yarn 或 pnpm

## 🚀 快速開始

### 安裝

1. 克隆此儲存庫：

```bash
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio
```

2. 安裝依賴：

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

3. 創建 `.env.local` 文件並添加您的 Resend API 金鑰（用於聯絡表單）：

```
RESEND_API_KEY=your_resend_api_key
```

### 開發

啟動開發伺服器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看您的網站。

### 構建

構建生產版本：

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

### 啟動生產版本

```bash
npm run start
# 或
yarn start
# 或
pnpm start
```

## 🔧 自定義指南

### 1. 個人資訊

編輯 `lib/data.ts` 文件來更新您的個人資訊：

- 導航鏈接
- 關於我的內容
- 項目資訊
- 技能數據
- 經歷時間軸

### 2. 圖片

替換 `public` 目錄中的圖片：

- 個人照片 (`Alien p.jpeg`)
- 項目截圖 (如 `excelhunt.png`, `site.png` 等)
- 網站圖標 (`favicon.ico`)

### 3. 顏色和主題

修改 `tailwind.config.js` 文件來自定義顏色方案和其他主題設置。

### 4. 組件

所有主要組件都位於 `components` 目錄中：

- `intro.tsx` - 首頁介紹部分
- `about.tsx` - 關於我部分
- `projects.tsx` & `project.tsx` - 項目展示
- `skills.tsx` - 技能展示
- `experience.tsx` - 經歷時間軸
- `contact.tsx` - 聯絡表單
- `header.tsx` - 網站頭部導航
- `footer.tsx` - 網站底部
- `ParticleBackground.tsx` - 3D 粒子背景

### 5. 聯絡表單

要使聯絡表單正常工作，您需要：

1. 註冊 [Resend](https://resend.io/) 帳戶並獲取 API 金鑰
2. 在 `.env.local` 文件中添加您的 API 金鑰
3. 在 `email/contact-form-email.tsx` 中自定義郵件模板
4. 在 `actions/sendEmail.ts` 中更新發件人和收件人電子郵件地址

## 📱 響應式設計

網站已針對以下設備進行優化：

- 📱 移動設備（小於 640px）
- 📱 平板（640px - 1024px）
- 💻 桌面（大於 1024px）

## 🚢 部署

您可以將此網站部署到任何支持 Next.js 的平台，如：

- [Vercel](https://vercel.com/) (推薦)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [GitHub Pages](https://pages.github.com/) (需要額外配置)

### Vercel 部署（推薦）

最簡單的部署方法是使用 Vercel 平台：

1. 在 GitHub 上創建一個新儲存庫並推送您的代碼
2. 在 Vercel 上導入您的儲存庫
3. 添加環境變數（如 `RESEND_API_KEY`）
4. 點擊部署

## 🤝 貢獻

歡迎提交問題和拉取請求！

## 📄 許可證

本項目採用 [MIT 許可證](LICENSE)。

## 🙏 致謝

- 3D 粒子效果靈感來自 [Three.js Journey](https://threejs-journey.com/)
- 時間軸組件使用 [React Vertical Timeline](https://github.com/stephane-monnot/react-vertical-timeline)
- 圖標使用 [React Icons](https://react-icons.github.io/react-icons/)

---

⭐ 如果您喜歡這個模板，請給它一個星星！ ⭐

---

🔗 [查看演示](https://site.azndev.com) | 📧 [聯絡我](mailto:alien@azndev.com)
