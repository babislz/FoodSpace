let logged = false;

const loadContent = (store_list) => {
    const store_section = document.querySelector("#restaurantes-deck > div")

    store_section.innerHTML = "";
    

    store_list.forEach(store => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        
        let card_img = document.createElement("img");
        card_img.classList.add("card-img-top");
        card_img.setAttribute("src", "/img/" + store.profile_url);

        let card_body = document.createElement("div");
        card_body.classList.add("card-body");

        let body_title = document.createElement("h5");
        body_title.innerText = store.store_name;

        let body_button = document.createElement("a");
        body_button.classList.add("btn");
        body_button.classList.add("btn-primary");
        body_button.setAttribute("href", `/restaurante?id=${store.store_id}`);
        body_button.innerText = "Visitar"

        card_body.appendChild(body_title);
        card_body.appendChild(body_button);

        card.appendChild(card_img);
        card.appendChild(card_body);

        store_section.appendChild(card);

    });
}

const fetchStores = async (filter) => {
    let endpoint = "/restaurantes/list";

    if (filter) {
        endpoint += `?filter=${filter}`;
    }

    fetch(endpoint, {
        method: "GET"
    }).then(x => {
        return x.json();
    }).then(res => {
        loadContent(res);
    }).catch(err => {
        console.log(err.message);
    })
}


const loadUserInfo = () => {
    let info = localStorage.getItem("user_login");

    if (!info || info == "null")
        return;

    logged = true;
    
    info = JSON.parse(info);

    $("#info_full_name")[0].innerText += ` ${info.full_name}`;
    $("#info_email")[0].innerText += ` ${info.email}`;
    $("#info_phone")[0].innerText += ` ${info.phone}`;
    $("#user_img > img")[0].setAttribute("src", `/img/${info.user_photo}`);
    $(".user-img-box > img")[0].setAttribute("src", `img/${info.user_photo}`);
}

document.addEventListener('DOMContentLoaded', () => {
    const user_info = JSON.parse(localStorage.getItem("user_login"));

    if (user_info) {
        let element = document.getElementById("user_img");
        
        element.setAttribute("data-before", user_info.name)
    }

    fetchStores();
    loadUserInfo();

});

const filter_form = document.getElementById("searching");
const recomendations = Array.from(document.getElementsByClassName("rec"));
const category = Array.from(document.getElementsByClassName("categorias"));
const promos = Array.from(document.getElementsByClassName("promo"));

const filtering = false;

filter_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const filter_value = document.getElementById("pesquisa").value;

    if (filter_value == "") {
        recomendations.forEach(x => x.classList.remove("d-none"))
        category.forEach(x => x.classList.remove("d-none"))
        promos.forEach(x => x.classList.remove("d-none"))

        fetchStores();
    } else {
        recomendations.forEach(x => x.classList.add("d-none"))
        category.forEach(x => x.classList.add("d-none"))
        promos.forEach(x => x.classList.add("d-none"))

        fetchStores(filter_value);
    }
    
});



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