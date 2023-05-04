const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    console.log(1)
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg"
    } else {
        navBtnImg.src = "./img/icons/nav-open.svg"
    }
}

AOS.init({
    // once: true
});
