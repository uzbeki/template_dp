const addButton = document.getElementById("add-btn");

addButton.onclick = getTableData;
function getTableData() {
    // console.log("oshita");
    // テーブルのIDを取得
    const table = document.getElementById("update-stock-table");
    const newRow = table.insertRow(-1);

    // テーブルの行数を取得する関数の作成
    // console.log(table.ariaRowIndex);
    
    const newCell = newRow.insertCell();
    const addData = document.createTextNode('6');
    newCell.appendChild(addData);

    newCell = newRow.insertCell();
    newText = document.createTextNode();
    newCell.appendChild(newText);
    newCell = newRow.insertCell();
    newText = document.createTextNode();
    newCell.appendChild(newText);
}