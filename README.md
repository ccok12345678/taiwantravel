# 台灣旅遊景點導覽網站
## 說明
[THE F2E 3rd 前端修練精神時光屋](https://2021.thef2e.com/)「Week 1 - 台灣旅遊景點導覽」實作練習。

網站串接交通部 [運輸資料流通服務平台 TDX](https://tdx.transportdata.tw/) 之 API ，獲取各地觀光資料。

使用者能以台灣縣市地區為條件，查詢各地觀光景點、觀光活動、在地美食、當地旅宿等資訊。也可以從分類選單點選想瀏覽的分類項目，網站將會自動帶入關鍵字進行篩選。

沒有實作出的功能是景點列表的「熱門」、「推薦」排序，因為在 TDX 資料庫中找不到相關的參考指標。

## 使用技術
1. <img src="https://cdn.worldvectorlogo.com/logos/vue-9.svg" width="20">　Vue 3, Vue CLI
2.  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" width="20">　Bootstrap 5
3. API 串接（fetch）

## 特別感謝
設計師：[jhen](https://2021.thef2e.com/users/6296427084285739194/) 👍

設計稿：[THE F2E Week1](https://www.figma.com/file/fnHynjl6HHHCcqay2C4KVn/2021-THE-F2E--Week1?node-id=5%3A2)