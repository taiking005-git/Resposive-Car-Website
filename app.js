const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");



//============================= SHOW MENU
navToggle.addEventListener("click", (nav) => {
    navMenu.classList.toggle("show-menu");
})
navClose.addEventListener("click", (nav) => {
    navMenu.classList.toggle("show-menu");
})

// ============================ REMOVING MOBILE NAV MENU
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    })
})

// ==================================== CHANGE BACKGROUND HEADER =============================
function headerScroll() {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) header.classList.add("header__scrolled");
    else header.classList.remove("header__scrolled");
}

window.addEventListener("scroll", headerScroll);
