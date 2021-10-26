const returnBtns = document.querySelectorAll('.returnBtn');
const closeBtns = document.querySelectorAll('.closeBtn');

const removeShowClass = () => document.querySelector(".show").classList.remove("show")
const displayPopup = popupId => {
    //表示中のPPを消す
    document.querySelectorAll(".show").forEach(current_popup => {
        current_popup.classList.remove("show")
    }
    )

    // 押されたポップアップをshowする
    document.getElementById(popupId).classList.add("show")
}


document.onkeyup = e => {
    if (e.key === "Escape") removeShowClass()
}

returnBtns.forEach(returnButton => {
    returnButton.onclick = removeShowClass
    
})

closeBtns.onclick = removeShowClass 
closeBtns.forEach(closeButton => {
    closeButton.onclick = removeShowClass
    
})

