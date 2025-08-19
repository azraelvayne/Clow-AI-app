# 庫洛牌占卜專案轉移指南

## 🚨 當前問題說明

### 主要錯誤
```
"jsx" is not exported by "node_modules/react/jsx-runtime.js"
```

### 問題分析
- **根本原因**：React JSX Runtime 模組損壞
- **影響範圍**：無法進行 production build
- **錯誤位置**：`src/components/CardFan.tsx:98:22`
- **症狀**：Vite 建置過程中 JSX 轉換失敗

### 已嘗試的修復方法
1. ✅ 刪除 node_modules 重新安裝
2. ✅ 清理 npm cache
3. ✅ 檢查 package.json 依賴版本
4. ❌ 問題仍然存在（可能是環境相關問題）

---

## 📋 轉移步驟

### 步驟一：下載程式碼到本地/其他平台

#### 需要的檔案
- 所有 `src/` 資料夾內容
- `package.json` 和相關設定檔
- `public/` 資料夾（包含字體檔案）
- TypeScript 設定檔
- Tailwind CSS 設定
- Supabase 遷移檔案

#### 🔒 敏感資訊處理
**必須移除或替換的內容：**
```env
# 這些需要用你自己的 API Key 替換
VITE_OPENAI_API_KEY=你的OpenAI_API_Key
VITE_SUPABASE_URL=你的Supabase_URL
VITE_SUPABASE_ANON_KEY=你的Supabase_匿名Key
```

### 步驟二：使用其他 AI 工具協助

#### 提供給其他 AI 的資訊
1. **問題描述**：
   ```
   React JSX Runtime 模組損壞，導致 Vite 建置失敗
   錯誤：'jsx' is not exported by 'node_modules/react/jsx-runtime.js'
   ```

2. **專案技術棧**：
   - React 18.3.1 + TypeScript
   - Vite 5.4.2
   - Tailwind CSS
   - Supabase (資料庫)
   - OpenAI API (占卜解讀)

3. **可能的解決方案**：
   - 檢查 React 版本相容性
   - 更新 Vite 設定
   - 檢查 TypeScript 設定
   - 重新安裝特定套件

### 步驟三：在 GitHub 建立倉庫

#### 建議的 README.md 內容
```markdown
# 庫洛牌占卜系統

## 當前狀態
🚨 **建置錯誤**：React JSX Runtime 問題需要修復

## 快速開始
1. npm install
2. 設定環境變數
3. npm run dev

## 已知問題
- JSX Runtime 模組損壞
- 需要修復建置流程
```

---

## 🔧 修復建議

### 優先嘗試的解決方案

#### 1. 版本降級法
```bash
npm install react@18.2.0 react-dom@18.2.0
```

#### 2. Vite 設定調整
在 `vite.config.ts` 中添加：
```typescript
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  // ... 其他設定
});
```

#### 3. TypeScript 設定檢查
確認 `tsconfig.json` 中：
```json
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

### 替代建置方案
如果 Vite 持續有問題，可以考慮：
- 切換到 Create React App
- 使用 Next.js
- 使用 Parcel

---

## 🔄 完成後如何接回 Bolt

### 方法一：直接貼上修復的檔案
1. 將修復好的關鍵檔案內容貼回
2. 我會幫你更新到專案中
3. 重新嘗試建置

### 方法二：GitHub 整合
1. 將修復好的程式碼推送到 GitHub
2. 提供 GitHub 倉庫連結
3. 我可以協助將修復內容整合回來

### 方法三：分段修復
1. 先修復建置問題
2. 逐步測試各個功能
3. 確認所有功能正常後再部署

---

## 📞 需要協助時

### 提供這些資訊
1. **錯誤訊息**：完整的 console 輸出
2. **環境資訊**：Node.js 版本、npm 版本
3. **修改內容**：你做了哪些變更
4. **測試結果**：哪些功能正常/異常

### 常見問題 Q&A

**Q: 字體檔案找不到怎麼辦？**
A: 檢查 `public/fonts/` 資料夾，確保字體檔案存在

**Q: Supabase 連接失敗？**
A: 檢查環境變數設定，確認 API Key 正確

**Q: OpenAI API 不工作？**
A: 確認 API Key 有效且有足夠額度

---

## 🎯 成功指標

修復完成的標準：
- ✅ `npm run build` 成功執行
- ✅ `npm run dev` 正常啟動
- ✅ 占卜功能正常運作
- ✅ 卡牌顯示正確
- ✅ 資料庫連接正常

---

*最後更新：2025年1月*