document.addEventListener("DOMContentLoaded", () => {
    const user_info = localStorage.getItem("user_login")

    if (!user_info) return;

    window.location.replace("/restaurantes")
});