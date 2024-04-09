const navbar = document.querySelector("nav");
const main = document.querySelector("main");

let logged = false;

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


$("#logout-button")[0].addEventListener("click", () => {
    if (!logged) return;

    localStorage.removeItem("user_login");

    window.location.replace("/")
});


$('.user-info-holder')[0].addEventListener("click", () => {
    if (logged)
        $('#user_info').collapse('toggle');
    else 
        $("#user_login_page").collapse('toggle');
});

$('#user_login_page button')[0].addEventListener("click", () => {
    window.location.replace("/")
});


const loadUserInfo = () => {
    let info = localStorage.getItem("user_login");

    if (!info || info == "null")
        return;

    logged = true;
    
    info = JSON.parse(info);

    $("#info_full_name")[0].innerText += ` ${info.full_name}`;
    $("#info_email")[0].innerText += ` ${info.email}`;
    $("#info_phone")[0].innerText += ` ${info.phone}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const user_info = JSON.parse(localStorage.getItem("user_login"));

    if (user_info) {
        let element = document.getElementById("user_img");
        
        element.setAttribute("data-before", user_info.name)
    }

    loadUserInfo();
});