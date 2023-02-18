const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");
const sections = document.querySelectorAll("section[id]");


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


//=============================== POPULAR SWIPPER =========================================================
let swiperPopular = new Swiper(".popular__container", {
    // Optional parameters
    loop: true,
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        }
    }
});

// ====================== SHOW SCROLL UP ======================
// Show the scroll up button when the page is scrolled by 350px or more
function scrollUp() {
    const scrollUp = document.getElementById("scrollup");
    // If the page has been scrolled by 350px or more, add the "show-scroll" class
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll")
    // Otherwise remove the "show-scroll" class
    else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp)

// ======================== SCROLL SECTION ACTIVE LINK ==============================
let activeLink;
function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            activeLink ? activeLink.classList.remove("active-link") : null;
            activeLink = document.querySelector(".nav__menu a[href*=" + sectionId + "]");
            activeLink ? activeLink.classList.add("active-link") : null;
        }
    })
}

window.addEventListener("scroll", scrollActive);

// ========================SCROLL REVEAL ANIMATION =====================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
sr.reveal(`.home__subtitle`, { delay: 500 })
sr.reveal(`.home__elec`, { delay: 600 })
sr.reveal(`.home_img`, { delay: 800 })
sr.reveal(`.home_car_data`, { delay: 900, interval: 100, origin: 'bottom' })
sr.reveal(`.home__button`, { delay: 1000, origin: 'bottom' })
sr.reveal(`.about__group, .offer__data`, { origin: 'left' })
sr.reveal(`.about__data, .offer__img`, { origin: 'right' })
sr.reveal(`.features__map`, { delay: 600, origin: 'bottom' })
sr.reveal(`.features__card`, { interval: 300 })
sr.reveal(`.featured__card, .logos__content, .footer__content`, { interval: 100 })