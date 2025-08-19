# 庫洛牌占卜專案 - 部署問題排查指南

## 🎯 問題核心描述

**主要問題**：專案在開發環境運行正常，但在嘗試部署（build）時失敗
**錯誤症狀**：`"jsx" is not exported by "node_modules/react/jsx-runtime.js"`
**影響範圍**：無法進行 production build，阻擋部署流程

## 📊 專案技術棧

- **前端框架**：React 18.3.1 + TypeScript
- **建置工具**：Vite 5.4.2
- **樣式框架**：Tailwind CSS 3.4.1
- **後端服務**：Supabase（資料庫 + 認證）
- **AI 整合**：OpenAI GPT-3.5-turbo
- **部署目標**：靜態網站部署

## 🚨 核心問題分析

### 問題本質
這不是功能性錯誤，而是**建置環境配置問題**：
- 開發環境（`npm run dev`）正常運行
- 生產建置（`npm run build`）失敗
- 問題出現在 JSX 轉換階段

### 可能原因
1. **React JSX Runtime 版本不相容**
2. **Vite 建置設定問題**
3. **TypeScript 設定衝突**
4. **node_modules 損壞**

## 🔧 建議修復順序

### 第一優先級（最可能解決問題）

#### 1. 檢查並修復 React 版本
```bash
# 檢查當前版本
npm list react react-dom

# 如果版本有問題，降級到穩定版本
npm install react@18.2.0 react-dom@18.2.0
```

#### 2. 完全重裝依賴
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### 3. 檢查 Vite 設定
確認 `vite.config.ts` 包含正確的 JSX 設定：
```typescript
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsx: 'automatic',
  },
  // ... 其他設定
});
```

### 第二優先級

#### 4. 檢查 TypeScript 設定
確認 `tsconfig.app.json` 中：
```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "bundler"
  }
}
```

#### 5. 檢查問題檔案
特別檢查 `src/components/CardFan.tsx:98:22` 附近的 JSX 語法

### 第三優先級（如果上述都無效）

#### 6. 考慮建置工具替換
- 嘗試 Create React App
- 嘗試 Next.js
- 嘗試 Parcel

## 🎯 部署成功的最低要求

### 必須通過的測試
```bash
# 1. 依賴安裝成功
npm install

# 2. 開發環境啟動
npm run dev

# 3. TypeScript 檢查通過
npx tsc --noEmit

# 4. 建置成功（關鍵！）
npm run build

# 5. 預覽建置結果
npm run preview
```

### 核心功能檢查
- [ ] 頁面正常載入
- [ ] 卡牌顯示正確
- [ ] 占卜功能運作
- [ ] 沒有 console 錯誤

## 🔒 敏感資訊處理

**必須移除或替換的內容：**
```env
# 這些需要用你自己的 API Key 替換
VITE_OPENAI_API_KEY=你的OpenAI_API_Key
VITE_SUPABASE_URL=你的Supabase_URL
VITE_SUPABASE_ANON_KEY=你的Supabase_匿名Key
```

## 📞 如果需要進一步協助

### 提供這些資訊
1. **完整的錯誤訊息**（包含 stack trace）
2. **Node.js 版本**：`node --version`
3. **npm 版本**：`npm --version`
4. **作業系統**：Windows/Mac/Linux
5. **已嘗試的解決方案**

### 問題描述模板
```
我有一個 React + TypeScript + Vite 專案，在嘗試建置時遇到錯誤：
"jsx" is not exported by "node_modules/react/jsx-runtime.js"

專案在開發環境運行正常，只有建置時失敗。
已嘗試：[列出已嘗試的方法]
```

## 🎯 成功指標

修復完成的標準：
- ✅ `npm run build` 成功執行
- ✅ 生成 `dist/` 資料夾
- ✅ `npm run preview` 可以預覽
- ✅ 所有功能正常運作

## 💡 額外建議

1. **專注於建置問題**：不要被其他警告分散注意力
2. **逐步測試**：每次修改後都測試建置
3. **保持簡單**：先讓基本建置成功，再優化其他功能
4. **備份重要檔案**：修改前先備份 package.json 和設定檔

---

**最後更新**：2025年1月
**問題狀態**：待修復
**優先級**：高（阻擋部署）