# 已知問題和解決方案

## 🚨 當前嚴重問題

### 1. JSX Runtime 錯誤
**錯誤訊息**：
```
"jsx" is not exported by "node_modules/react/jsx-runtime.js"
```

**影響**：
- 無法進行 production build
- 部署失敗

**可能原因**：
- React 版本不相容
- node_modules 損壞
- Vite 設定問題
- TypeScript 設定問題

**建議解決方案**：
1. **版本回退**：
   ```bash
   npm install react@18.2.0 react-dom@18.2.0
   ```

2. **完全重裝**：
   ```bash
   rm -rf node_modules package-lock.json
   npm cache clean --force
   npm install
   ```

3. **Vite 設定調整**：
   ```typescript
   // vite.config.ts
   export default defineConfig({
     esbuild: {
       jsx: 'automatic',
     },
     optimizeDeps: {
       include: ['react', 'react-dom']
     }
   });
   ```

4. **TypeScript 設定檢查**：
   ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "jsx": "react-jsx",
       "moduleResolution": "bundler"
     }
   }
   ```

---

## ⚠️ 其他已知問題

### 2. 字體檔案路徑問題
**症狀**：建置時出現字體檔案警告
**解決方案**：確認 `public/fonts/` 中有所需字體檔案

### 3. 環境變數未設定
**症狀**：功能無法正常運作
**解決方案**：檢查 `.env` 檔案設定

### 4. Supabase 連接問題
**症狀**：使用者登入失敗、資料無法儲存
**解決方案**：
- 檢查 Supabase 專案狀態
- 確認資料表已正確創建
- 檢查 RLS 政策設定

---

## 🔧 修復優先順序

### 高優先級（必須修復）
1. ✅ JSX Runtime 錯誤 - **阻擋部署**
2. ✅ 環境變數設定 - **功能無法運作**

### 中優先級（建議修復）
3. ⚠️ 字體檔案警告 - **影響使用體驗**
4. ⚠️ 錯誤處理優化 - **提升穩定性**

### 低優先級（可選修復）
5. 💡 效能優化
6. 💡 程式碼重構

---

## 🧪 測試檢查清單

修復後請確認以下功能：

### 基本功能
- [ ] 專案可以啟動 (`npm run dev`)
- [ ] 專案可以建置 (`npm run build`)
- [ ] 頁面正常載入
- [ ] 字體正確顯示

### 占卜功能
- [ ] 可以選擇牌陣類型
- [ ] 可以輸入問題
- [ ] 可以抽取卡牌
- [ ] 可以顯示解讀結果

### 進階功能
- [ ] 使用者註冊/登入
- [ ] 魔法書功能
- [ ] 占卜記錄儲存
- [ ] 卡牌收藏系統

---

## 📞 求助資訊

如果在其他平台尋求協助，請提供：

### 技術資訊
- Node.js 版本
- npm 版本
- 作業系統
- 瀏覽器版本

### 錯誤資訊
- 完整的錯誤訊息
- 錯誤發生的步驟
- 已嘗試的解決方案

### 專案資訊
- 這是一個 React + TypeScript + Vite 專案
- 使用 Tailwind CSS 進行樣式設計
- 整合 Supabase 作為後端服務
- 使用 OpenAI API 進行占卜解讀

---

*如有其他問題，歡迎隨時詢問！*