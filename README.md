# 作品說明

使用 Angular 框架搭配 NgRx 製作一個登入後獲取 TOKEN 及使用者資料，並使用 DI 生成全域及單例倒數計時器。

- 此專案專注於 NgRx 的使用，表單與輸入項沒有實作驗證機制。

- 登入流程：

  - 登入成功後透過 Auth API 獲取 TOKEN，並帶入 header 中，再發送 User API 獲取使用者資料。

    

- 倒數計時器：

  - 全域 (Global) 計時器：計算使用者登入後的閒置時間。

  - 單例元件 (Single) 計時器：各別元件依需求生成各自的倒數計時器。

<br>

- Login 頁面：

  登入成功後先獲取一組 TOKEN 並帶入 Header，再透過 API 獲取使用者資料。

 <br> 

- Register 頁面：

  任意輸入一手機號碼並點擊發送 OTP，會自動生成一個單例元件 (Single) 計時器並顯示倒數計時進度條，可重新發送。

  - Single Idle in RegisterComponent

<br>  

- Pages 頁面：

  生成全域  (Global)  計時器，並監聽點擊 (Click) 事件進行秒數重置。

  - Global Idle in HomeComponent

 <br>  

- Home 頁面：

  生成兩個不同的單例元件 (Single) 計時器，可各別控制「暫時停止、繼續計時、重新計時」等功能。

  - Single Idle in HomeComponent 1

  - Single Idle in HomeComponent 2

 <br>    

- Products 頁面

  生成一個單例元件 (Single) 計時器，可各別控制「暫時停止、繼續計時、重新計時」等功能。

  - Single Idle in ProductComponent 

 <br>  

# 登入說明

網站連結：https://migo0127.github.io/ngrx-17

- 登入成功：
  - 帳號：1
  - 密碼：1
- 登入失敗：
  - 帳號：2
  - 密碼：2
- 登入異常：
  - 帳號：4
  - 密碼：4

