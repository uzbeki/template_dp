const returnBtn = document.querySelectorAll('.returnBtn');
const closeBtn = document.querySelectorAll('.fa-times');

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
    if (e.key === "Escape") {
        document.querySelector(".show").classList.remove("show")
    }
}

returnBtn.onclick = () => {
    document.querySelector(".show").classList.remove("show")
}

closeBtn.onclick = () => {
    document.querySelector(".show").classList.remove("show")
}