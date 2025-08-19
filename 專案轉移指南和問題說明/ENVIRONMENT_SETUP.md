# 環境設定指南

## 🔑 必要的環境變數

創建 `.env` 檔案並設定以下變數：

```env
# OpenAI API (用於占卜解讀)
VITE_OPENAI_API_KEY=你的_OpenAI_API_Key

# Supabase 設定 (用於使用者資料和占卜記錄)
VITE_SUPABASE_URL=你的_Supabase_專案_URL
VITE_SUPABASE_ANON_KEY=你的_Supabase_匿名_Key
```

## 🗄️ 資料庫設定

### Supabase 設定步驟
1. 前往 [Supabase](https://supabase.com) 創建新專案
2. 在 SQL Editor 中執行以下遷移檔案：
   - `supabase/migrations/20250126180819_delicate_hill.sql`
   - `supabase/migrations/20250202152204_fragrant_peak.sql`
   - `supabase/migrations/20250213143516_tight_recipe.sql`

### 資料表結構
- `profiles`: 使用者資料
- `card_encounters`: 卡牌遇見記錄
- `user_cards`: 使用者收藏的卡牌

## 🤖 OpenAI API 設定

### 取得 API Key
1. 前往 [OpenAI Platform](https://platform.openai.com)
2. 創建 API Key
3. 確保帳戶有足夠的使用額度

### API 使用說明
- 模型：GPT-3.5-turbo
- 用途：生成占卜解讀內容
- 備援：如果 API 不可用，會使用基本牌義解讀

## 📦 套件安裝

```bash
# 安裝依賴
npm install

# 如果遇到問題，嘗試清理後重裝
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## 🚀 啟動專案

```bash
# 開發模式
npm run dev

# 建置生產版本
npm run build

# 預覽建置結果
npm run preview
```

## 🔍 故障排除

### 常見問題

#### 1. 字體載入失敗
```
/fonts/Elffont-Regular.ttf referenced in /fonts/Elffont-Regular.ttf didn't resolve at build time
```
**解決方案**：確認 `public/fonts/` 資料夾中有所需字體檔案

#### 2. Supabase 連接錯誤
**檢查項目**：
- 環境變數是否正確設定
- Supabase 專案是否啟用
- 資料表是否正確創建

#### 3. OpenAI API 錯誤
**檢查項目**：
- API Key 是否有效
- 帳戶是否有足夠額度
- 網路連接是否正常

### 除錯模式

開發環境會顯示更多除錯資訊：
- 占卜次數限制會被移除
- 錯誤訊息會更詳細
- 會在 console 顯示 API 呼叫狀態