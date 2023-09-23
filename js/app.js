
/*!
    IntelliAI Landing Page Template
    Created on date: 9/13/2023
    Built on date: 9/14/2023
*/


// ## LOADER
window.addEventListener('load', () => {
    setTimeout( () => {
        document.querySelector(".loader-warpper").classList.toggle("loader-warpper-hide");
    }, 1000);
});


// ## NAVBAR MOBILE
function navbarMobileToggle() {
    document.getElementById("navbarMobile").classList.toggle("navbar-mobile-toggle");
    document.getElementById("navbarMobileBtnOpen").classList.toggle("navbar-mobile-btn-open-toggle");
    document.getElementById("navbarMobileBtnClose").classList.toggle("navbar-mobile-btn-close-toggle");
}


// ## BACK TOP
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backTop.classList.add("back-top-active");
    } else {
        backTop.classList.remove("back-top-active");
    }
});