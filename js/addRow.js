const addButton = document.getElementById("add-btn");
const table = document.getElementById("update-stock-table");
addButton.onclick = addRow;


function addRow() {

    // const addRowsNum = countNowTableRows();
    const addRowsNum = table.rows.length

    const newRow = table.insertRow(-1);
    const numTd = newRow.insertCell();
    const addNumData = document.createTextNode(addRowsNum);
    numTd.appendChild(addNumData);

    const checkTd = newRow.insertCell();
    const addCheckData = document.createTextNode('');
    checkTd.appendChild(addCheckData);

    const manufacturerTd = newRow.insertCell();
    const addManuData = document.createTextNode('');
    manufacturerTd.appendChild(addManuData);

    const productTd = newRow.insertCell();
    const addProductData = document.createTextNode('');
    productTd.appendChild(addProductData);

    const modelTd = newRow.insertCell();
    const addModelData = document.createTextNode('');
    modelTd.appendChild(addModelData);

    const quantityTd = newRow.insertCell();
    const addQuantityData = document.createTextNode('');
    quantityTd.appendChild(addQuantityData);

    const packingTd = newRow.insertCell();
    const addPackingData = document.createTextNode('');
    packingTd.appendChild(addPackingData);

    const rohsTd = newRow.insertCell();
    const addRohsData = document.createTextNode('');
    rohsTd.appendChild(addRohsData);

    const dcTd = newRow.insertCell();
    const addDcData = document.createTextNode('');
    dcTd.appendChild(addDcData);

    const remarksTd = newRow.insertCell();
    const addRemarksData = document.createTextNode('');
    remarksTd.appendChild(addRemarksData);
}

// テーブルの行数を数える
function countNowTableRows() {
    const rowsLength = table.rows.length
    return rowsLength;
}

// tdに要素の追加
function addElement() {
    const newInput = document.createElement("input");
    newInput.type = "checkbox";
    // ID取得以外で、要素を挿入したい
    const parent = document.getElementById('');
    appendChild(newInput);
}