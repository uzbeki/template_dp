const returnBtn = document.querySelector('.returnBtn');
// 全ての要素を持ってくる
console.log(returnBtn);
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
// 戻るボタン押下
returnBtn.onclick = () => {
    console.log("ここまで");
    console.log(returnBtn);
    // document.body.classList.remove('show');
    document.querySelector(".show").classList.remove("show")
}

closeBtn.onclick = () => {
    console.log("as");
    document.querySelector(".show").classList.remove("show")
}
