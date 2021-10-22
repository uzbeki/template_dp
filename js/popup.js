function displayPopup(popupNum) {
    const num = popupNum;
    switch (num) {
        case 0:
            document.getElementById("logout_popup").style.display = "flex";
            break;
        case 1:
            document.getElementById("logout_success_popup").style.display = "flex";
            break;
        case 2:
            document.getElementById("import_popup").style.display = "flex";
            break;
        case 3:
            document.getElementById("import_success_popup").style.display = "flex";
            break;
        case 4:
            document.getElementById("export_popup").style.display = "flex";
            break;
        case 5:
            document.getElementById("export_success_popup").style.display = "flex";
            break;
        case 6:
            document.getElementById("search_stock_fail_popup").style.display = "flex";
            break;
        case 7:
            document.getElementById("buyer_registration_success_popup").style.display = "flex";
            break;
        case 8:
            document.getElementById("supplier_registration_success_popup").style.display = "flex";
            break;
        case 9:
            document.getElementById("withdraw_success_popup").style.display = "flex";
            break;
        case 10:
            document.getElementById("withdraw_popup").style.display = "flex";
            break;
        case 11:
            document.getElementById("update_stock_success_popup").style.display = "flex";
            break;
        case 12:
            document.getElementById("delete_popup").style.display = "flex";
            break;
        default:
            console.log("失敗しました");
    }
}