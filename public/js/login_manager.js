let logged = false;

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

document.addEventListener("DOMContentLoaded", () => {
    const user_info = JSON.parse(localStorage.getItem("user_login"));

    if (user_info) {
        let element = document.getElementById("user_img");
        
        element.setAttribute("data-before", user_info.name)
    }

    loadUserInfo();
})