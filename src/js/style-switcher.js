
const styleSwitcerToggle = document.querySelector(".style-switcher-toggler");
styleSwitcerToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide Style Switcher on Scroll 
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    };
});

// Theme Colors 
let altStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    altStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}


// Day Night Mode 
const dayNight = document.querySelector(".day-night");
window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});

dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});