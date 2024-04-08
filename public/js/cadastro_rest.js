const navbar = document.querySelector("nav");
const main = document.querySelector("main");

const query_max = window.matchMedia("screen and (max-width: 1499px)");
const query_min = window.matchMedia("screen and (min-width: 1500px)");

const maxResize = () => {
    let nav_height = navbar.offsetHeight;

    main.style.height = "";
    main.style.paddingTop = nav_height*1.5 + "px"; // Corrected to apply navbar height only once
}

const minResize = () => {
    let nav_height = navbar.offsetHeight;

    main.style.height = `calc(100vh - ${nav_height}px)`
    main.style.paddingTop = "" ;
}

query_max.addEventListener('change', () => {
    if (query_max.matches) { // Ensuring the media query matches
        console.log("max");
        maxResize();
    }
});

query_min.addEventListener("change", () => {
    if (query_min.matches) { // Ensuring the media query matches
        console.log("min");
        minResize();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth >= 1500) {
        minResize();
    } else {
        maxResize();
    }
});


const navbar_res = window.matchMedia("screen and (min-width: 992px)");
const nav_collection = document.getElementById("header-options");

navbar_res.addEventListener("change", () => {
    if(navbar_res.matches) {
        nav_collection.classList.remove("show");
    }
});