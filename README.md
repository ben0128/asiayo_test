# 匯率轉換API

這是一個簡單的Node.js API，用於進行匯率轉換。API使用GET請求，並根據源貨幣（`source`）、目標貨幣（`target`）和金額（`amount`）來進行轉換。

## 開始

以下指示將引導您通過如何在本地機器上運行和測試專案。

### 先決條件

- Node.js
- npm

### 安裝

1. 複製此儲存庫到本地：

    ```
    git clone https://github.com/ben0128/asiayo_test.git
    cd asiayo_test
    ```

2. 安裝依賴：

    ```
    npm install
    ```

3. 啟動API伺服器：

    ```
    npm run serve
    ```

4. 跑測試檔:
   ```
   npm run test
   ```

## 使用

使用以下GET請求格式來進行匯率轉換：

```
GET /api?source=USD&target=JPY&amount=$1,525
```
成功的回應範例如下：
```
{
  "msg": "success",
  "amount": "$170,496.53"
}
```
