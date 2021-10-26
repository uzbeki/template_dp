const addButton = document.getElementById("add-btn");

addButton.onclick = function () {
    console.log("oshitayo");
}
function getTableData() {
    // テーブルのIDを取得
    const table = document.getElementById("update-stock-table");
    const newRow = table.insertRow(-1);

    const newCell
    const newCell = newRow.insertCell();
    const addData = document.createTextNode('山田');
    newCell.appendChild(addData);
}