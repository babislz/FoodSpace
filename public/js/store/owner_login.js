const banner_button = document.getElementById("owner_edit_banner");
const add_highlight = document.getElementById("owner_add_highlight");
const add_product = document.getElementById("owner_add_product");

document.addEventListener("DOMContentLoaded", () => {
    const info = getUserInfo(); 
    if (info.id === store_info.user_id) {
        banner_button.classList.add("d-block")
        add_highlight.classList.add("d-block")
        add_product.classList.add("d-block")
        
        Array.from(document.querySelectorAll("input[name='store_id']")).forEach(x => x.value = store_info.store_id)
    }
});


banner_button.addEventListener("click", () => {
    document.querySelector(".edit-modal").showModal();
});
add_highlight.addEventListener("click", () => {
    document.querySelector(".highlight-modal").showModal();
});
add_product.addEventListener("click", () => {
    document.querySelector(".product-modal").showModal();
});


const openForm = (input_path, text_path) => {
    const input = document.querySelector(input_path);
    const text = document.querySelector(text_path);
    
    input.onchange = () => {
        text.innerText = input.value;
    };

    input.click();
}
