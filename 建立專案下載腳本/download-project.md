# 專案檔案下載清單

## 📁 需要複製的檔案結構

```
庫洛牌占卜專案/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── index.html
├── .env (需要重新設定)
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── Auth.tsx
│   │   ├── CardDeck.tsx
│   │   ├── CardFan.tsx (⚠️ 問題檔案)
│   │   ├── CardReading.tsx
│   │   ├── FallingPetals.tsx
│   │   ├── Layout.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── MagicBook.tsx
│   │   ├── MagicCircle.tsx
│   │   ├── QuestionInput.tsx
│   │   ├── ReadingLimit.tsx
│   │   ├── ReadingResult.tsx
│   │   ├── SocialLink.tsx
│   │   ├── SpreadSelector.tsx
│   │   ├── StartScreen.tsx
│   │   └── TutorialOverlay.tsx
│   ├── data/
│   │   └── cards.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useDeviceType.ts
│   │   └── useSound.ts
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── database.ts
│   │   ├── openai.ts
│   │   ├── readingLimit.ts
│   │   └── supabase.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── index.ts
│   └── constants/
│       └── index.ts
├── public/
│   └── fonts/ (字體檔案)
└── supabase/
    └── migrations/ (資料庫遷移檔案)
```

## 🚀 快速建立方法

### 步驟一：建立本地資料夾
```bash
mkdir 庫洛牌占卜專案
cd 庫洛牌占卜專案
```

### 步驟二：建立檔案結構
```bash
mkdir -p src/{components,data,hooks,lib,types,utils,constants}
mkdir -p public/fonts
mkdir -p supabase/migrations
```

### 步驟三：複製檔案內容
從 Bolt 介面中複製每個檔案的內容到對應的本地檔案中。

## ⚠️ 重要提醒

1. **環境變數**：不要複製 `.env` 檔案，需要重新建立
2. **node_modules**：不需要複製，會重新安裝
3. **package-lock.json**：不需要複製，會重新生成

## 🔧 修復後的測試步驟

```bash
# 1. 安裝依賴
npm install

# 2. 測試開發環境
npm run dev

# 3. 測試建置
npm run build
```