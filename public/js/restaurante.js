

const getTime = (value) => {
    try {
        let time = value.split(":");

        return eval(`${time[0]} * 60 + ${time[1]}`); 
    } catch {}
};

document.addEventListener("DOMContentLoaded", () => {
    const status = document.getElementById("status")

    const date = new Date();
    
    const hour = date.getHours();
    const minutes = date.getMinutes();

    const total = minutes + hour * 60;

    let open_time_min = getTime(open_time);
    let close_time_min = getTime(close_time);

    if(total >= open_time_min && total) {
        status.innerText = "Aberto";
        status.style.color = "green";
    } else {
        status.innerText = "Fechado";
        status.style.color = "red";
    }


    $("#profileImg")[0].src = "/img/" + store_info.profile_url;
});

const filter_form = document.getElementById("buscaCardapio");
const cardapio = Array.from(document.querySelectorAll(".cardapio .card"));


filter_form.addEventListener("change", (e) => {
    const filter_value = filter_form.value;

    if (filter_value == "") {
        cardapio.forEach(x => x.classList.remove("d-none"))
        document.querySelector("#carrouselDestaques").classList.remove("d-none")
        document.querySelector("body > main > div.plates-section.px-4.pt-4 > div.title.d-flex.gap-2.align-items-center").classList.remove("d-none")
    } else {
        cardapio.forEach(x => x.classList.add("d-none"))
        cardapio.filter(x => x.querySelector(".card-title").innerText.includes(filter_value)).forEach(x => x.classList.remove('d-none'))
        document.querySelector("#carrouselDestaques").classList.add("d-none")
        document.querySelector("body > main > div.plates-section.px-4.pt-4 > div.title.d-flex.gap-2.align-items-center").classList.add("d-none")
    }
    
});


Array.from(document.querySelectorAll("#restaurantes-deck .card a")).forEach(x => {
    x.addEventListener("click", (a) => {
        let element = a.target.getAttribute("product-id");
        
        
    });
});