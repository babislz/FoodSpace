const file = document.querySelector("input[type='file']");

const setProfilePicture = () => {
    file.click();
}

file.addEventListener("change", () => {
    if (file.files.length === 0) return;

    let reader = new FileReader();
    reader.readAsDataURL(file.files[0]);

    reader.onload = () => {
        document.querySelector("#profile_picture").src = reader.result;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const user_info = localStorage.getItem("user_login")

    if (!user_info || user_info == 'null') return;

    window.location.replace("/restaurantes")
});