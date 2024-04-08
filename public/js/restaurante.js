const getTime = (value) => {
    let time = value.split(":");

    return eval(`${time[0]} * 60 + ${time[1]}`); 
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

});