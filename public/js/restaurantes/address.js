const getUserInfo = () => {
    let info = localStorage.getItem("user_login");

    if (!info || info == "null")
        return undefined;

    return JSON.parse(info);
};


const modal = document.querySelector(".modal.address_modal");

modal.showModal = () => {
    modal.classList.add("modal-show");
}

modal.hideModal = () => {
    modal.classList.remove("modal-show");
}

$("#create_address")[0].addEventListener("click", () => {
    if (!getUserInfo()) {
        alert("Voce precisa estar logado para registar endereços!")
    }

    modal.showModal();
});



$(".address-form > .close-btn")[0].addEventListener("click", () => {
    modal.hideModal();
})

let formsub;

$(".address-form form")[0].addEventListener("submit", (e) => {
    e.preventDefault();

    const user_login = getUserInfo();
    
    if(!user_login) return;

    const params = new URLSearchParams();

    let inputs = Array.from(e.target.querySelectorAll("input"));

    inputs.forEach(x => {
        params.append(x.name, x.value);
    })

    params.append("user_id", user_login.id);


    fetch("/registerAddress", {
        method: "POST",
        body: params
    }).then(x => {
        return x.text();
    }).then(msg => {
        alert(msg);
    }).catch(err => console.log(err.message))
}) 

const address_list = document.querySelector("#endereco ul");
document.addEventListener("DOMContentLoaded", () => {
    const user_info = getUserInfo();

    if (!user_info) return;

    const body = new URLSearchParams();

    body.append("user_id", user_info.id);
    body.append("user_name", user_info.name);
    body.append("user_email", user_info.email);

    fetch("/getAddresses?" + body, {
        method: "GET"
    }).then(x => {
        return x.json();
    }).then(data => {
        data.forEach(a => {
            const li = document.createElement("li");
            const a_element = document.createElement('a');
            a_element.classList.add("dropdown-item");
            a_element.setAttribute("href", "#");
            a_element.innerText= a.address_street;

            li.appendChild(a_element);


            address_list.insertBefore(li, address_list.childNodes[0]);
        });
    }).catch(err => console.log(err.message));


});