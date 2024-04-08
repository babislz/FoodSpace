const toggle = document.querySelector("#bb8-slider input");
const logo = document.getElementById("logo-image");

let enabled = false;

const applyDarkMode = () => {
    if (enabled) {
        document.body.classList.add("dark-mode");
        logo.setAttribute("src", "/img/logo-white.png")
        localStorage.setItem("dark-mode", true);
        return;
    }


    document.body.classList.remove("dark-mode");
    logo.setAttribute("src", "/img/logo-black.png")
    localStorage.setItem("dark-mode", false);
};

if (toggle) {
    toggle.addEventListener("change", () => {
        toggleDarkMode();    
    })    
} 

const toggleDarkMode = () => {
    if (toggle) {
        enabled = toggle.checked;
    } else {
        enabled = !enabled
    }

    applyDarkMode();
}



document.addEventListener("DOMContentLoaded", () => {
    const mode = localStorage.getItem("dark-mode");

    enabled = mode === "true" ? true : false;

    if (toggle) {
        toggle.checked = enabled;
    }

    applyDarkMode();
}); 




    
