document.addEventListener('DOMContentLoaded', function() {
  const API_KEY = 'dd72c78b4f8fc2c92cfa80fc3b1e75e32a15c2c7';
  const SPREADSHEET_ID = '1ga9f117SjOxHvNQ9Cx9x1bwx-r3GRVa-ipDSOYjVDm8';
  const RANGE = 'Sheet1!A2:D'; // 根據您的需要調整範圍

  // 構建 URL 來訪問 Google Sheets API
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

  // 進行 AJAX 請求來獲取數據
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && data.values) {
        updateUI(data.values);
      } else {
        console.error('No data found.');
      }
    })
    .catch(error => console.error('Error fetching data: ', error));
});

function updateUI(data) {
  const tabs = document.querySelector('.tabs');
  const tabContent = document.querySelector('.tabcontent');
  let categories = {};

  // 清空現有內容
  tabs.innerHTML = '';
  tabContent.innerHTML = '';

  data.forEach(row => {
    const [categoryName, buttonName, buttonCode] = row;

    if (!categories[categoryName]) {
      // 創建新的分類標籤
      const newTab = document.createElement('button');
      newTab.className = 'tablink';
      newTab.textContent = categoryName;
      newTab.onclick = () => openPage(categoryName, newTab);
      tabs.appendChild(newTab);
      categories[categoryName] = document.createElement('div');
      categories[categoryName].id = categoryName;
      categories[categoryName].className = 'tabcontent';
      tabContent.appendChild(categories[categoryName]);
    }

    // 為當前分類添加按鈕
    const button = document.createElement('button');
    button.textContent = buttonName;
    button.onclick = () => navigator.clipboard.writeText(buttonCode);
    categories[categoryName].appendChild(button);
  });

  // 預設顯示第一個分類
  if (tabs.firstChild) {
    tabs.firstChild.click();
  }
}

function openPage(pageName, element) {
  var tabcontent = document.getElementsByClassName("tabcontent");
  var tablinks = document.getElementsByClassName("tablink");

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";
  element.style.backgroundColor = "#ccc";
}
