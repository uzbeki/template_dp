const toggleBtn = document.querySelector('.toggle_popup');
const clearBtn = document.querySelector('.clear');
const returnBtn = document.querySelector('.returnBtn');


toggleBtn.onclick = () => {
    document.body.classList.toggle('show');
}

clearBtn.onclick = () => {
    document.body.classList.remove('show');
}

returnBtn.onclick = () => {
    document.body.classList.remove('show');
}

document.onkeyup = (e) => {
    if (e.key === 'Escape') {
        document.body.classList.remove('show');
    }
}