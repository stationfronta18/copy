/* 基本樣式設置 */
body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
}

/* 標籤頁樣式 */
.tabcontent {
  display: none;
  padding: 20px;
  height: 100%;
}

/* 標籤按鈕樣式 */
.tablink {
  background-color: #555;
  color: white;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  width: 33.33%;
}

.tablink:hover {
  background-color: #777;
}

/* 當標籤頁啟動時 */
.active, .tablink:hover {
  background-color: #ccc;
  color: black;
}
