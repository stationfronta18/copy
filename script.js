document.getElementById('button-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const buttonName = document.getElementById('button-name').value;
    const buttonCode = document.getElementById('button-code').value;
    // 實際的API調用以新增或更新數據
    console.log('Saving:', buttonName, buttonCode);
    // 假設存儲或更新數據的函數
    saveButtonData(buttonName, buttonCode);
});

function addButton() {
    document.getElementById('button-form').classList.remove('d-none');
}

function cancelEdit() {
    document.getElementById('button-form').classList.add('d-none');
}

function saveButtonData(name, code) {
    // 假設的POST請求到Google Sheets API
    console.log('Data would be sent here');
}

// 需要設置更多的函數來處理刪除和編輯按鈕的功能
