const logoutBtn = document.getElementById("logout");


logoutBtn.onclick = () => {
    document.getElementsById(popupName).classList.toggle('show');
}
const popupId = popupName;


function displayPopup(popupName) {
    document.getElementById(popupName).classList.toggle('show');
    // document.body.classList.toggle('show');

}
