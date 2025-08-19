# GitHub 倉庫建立指南

## 🐙 建立 GitHub 倉庫步驟

### 步驟一：在 GitHub 建立新倉庫
1. 前往 [GitHub](https://github.com)
2. 點擊右上角的 "+" → "New repository"
3. 填寫倉庫資訊：
   - Repository name: `clow-card-divination`
   - Description: `庫洛牌占卜系統 - 基於 React + TypeScript 的互動式占卜應用`
   - 選擇 Public 或 Private
   - ✅ Add a README file
   - ✅ Add .gitignore (選擇 Node)
   - 選擇 MIT License

### 步驟二：本地 Git 初始化
```bash
# 在專案資料夾中執行
git init
git add .
git commit -m "Initial commit: 庫洛牌占卜系統"

# 連接到 GitHub 倉庫
git remote add origin https://github.com/你的用戶名/clow-card-divination.git
git branch -M main
git push -u origin main
```

### 步驟三：建立 .gitignore
```gitignore
# Dependencies
node_modules/
/.pnp
.pnp.js

# Production
/dist
/build

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Temporary folders
tmp/
temp/
```

## 📝 建議的 README.md 內容

```markdown
# 庫洛牌占卜系統

一個基於 React + TypeScript 的互動式庫洛牌占卜應用。

## ✨ 功能特色

- 🎴 多種牌陣選擇（單張、三張、太陽、月亮牌陣）
- 🤖 AI 智能解讀（整合 OpenAI GPT）
- 📚 個人魔法書系統
- 🎨 精美的視覺效果和動畫
- 📱 響應式設計，支援手機和桌面

## 🚀 快速開始

### 環境需求
- Node.js 18+
- npm 或 yarn

### 安裝步驟
```bash
# 克隆專案
git clone https://github.com/你的用戶名/clow-card-divination.git
cd clow-card-divination

# 安裝依賴
npm install

# 設定環境變數
cp .env.example .env
# 編輯 .env 檔案，填入你的 API 金鑰

# 啟動開發伺服器
npm run dev
```

## 🔧 環境變數設定

```env
VITE_OPENAI_API_KEY=你的_OpenAI_API_Key
VITE_SUPABASE_URL=你的_Supabase_URL
VITE_SUPABASE_ANON_KEY=你的_Supabase_匿名_Key
```

## 🐛 已知問題

- JSX Runtime 模組損壞問題（正在修復中）
- 建置時字體檔案路徑警告

## 📄 授權

MIT License - 詳見 [LICENSE](LICENSE) 檔案
```

## 🔄 與其他 AI 協作

當你在其他平台（如 ChatGPT、Claude）尋求協助時，可以：

1. **分享 GitHub 連結**：`https://github.com/你的用戶名/clow-card-divination`
2. **描述問題**：「React JSX Runtime 模組損壞，無法建置」
3. **提供錯誤訊息**：貼上完整的錯誤 log
4. **說明技術棧**：React 18 + TypeScript + Vite + Tailwind CSS