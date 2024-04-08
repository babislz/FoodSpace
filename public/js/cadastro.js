document.addEventListener("DOMContentLoaded", () => {
    const user_info = localStorage.getItem("user_login")

    if (!user_info || user_info == 'null') return;

    window.location.replace("/restaurantes")
});