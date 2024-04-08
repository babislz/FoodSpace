const toggle = document.querySelector("#bb8-slider input");
const logo = document.getElementById("logo-image");

const toggleDarkMode = () => {
    if (toggle.checked) {
        document.body.classList.add("dark-mode");
        logo.setAttribute("src", "/img/logo-white.png")
        localStorage.setItem("dark-mode", true);
        return;
    }


    document.body.classList.remove("dark-mode");
    logo.setAttribute("src", "/img/logo-black.png")
    localStorage.setItem("dark-mode", false);
};

toggle.addEventListener("change", () => {
    toggleDarkMode();
})

document.addEventListener("DOMContentLoaded", () => {
    const mode = localStorage.getItem("dark-mode");

    toggle.checked = mode === "true" ? true : false;
    toggleDarkMode();
}); 




    
