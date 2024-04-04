document.addEventListener('DOMContentLoaded', () => {
    const user_info = JSON.parse(localStorage.getItem("user_login"));

    if (user_info) {
        let element = document.getElementById("user_img");
        
        element.setAttribute("data-before", user_info.name)
    }
});