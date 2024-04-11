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

    let info = localStorage.getItem("user_login");

    if (!info || info == "null")
        return;

    
    info = JSON.parse(info);

    $("#user_id")[0].value = info.id;
});

const file_button = document.getElementById("file_label");
const file_submit = document.getElementById("store_image");

file_button.addEventListener("click", () => {
    file_submit.click();

});

file_submit.addEventListener("change", () => {

    file_button.querySelector("p").innerText = file_submit.files[0].name;
});