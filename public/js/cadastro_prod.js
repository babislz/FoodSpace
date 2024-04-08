const form = document.getElementById("upload-product-img");
const formInput = document.querySelector("#upload-product-img input")

form.addEventListener("click", ()=>{
    formInput.click()
})

formInput.addEventListener("change", ()=>{
    form.querySelector("p").firstChild.nodeValue = formInput.value
})