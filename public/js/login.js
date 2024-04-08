const form = document.getElementById("main_form")
const user_name = document.getElementById("user_name")
const user_pw = document.getElementById("user_pw")
const register = document.getElementById("register_btn")
const login = document.getElementById("login_btn")
let inputs;

const fetchLoginRequest = (data) => {
    const formData = new URLSearchParams();

    for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
    }

    const x = fetch("/", {
        method: "POST",
        body: formData
    }).then(res => {
        return res.json();
    }).then(x => {
        return x;
    }).catch(err => {
        console.log(err.message)
    })

    return x;
}

const invalidUser = () => {
    const message = document.getElementById("invalid_login");

    message.style.display = "block";
    message.style.opacity = "0";


    setTimeout(() => {
        message.style.opacity = "100%";
        
        setTimeout(() => {
            message.style.opacity = "0";
        
            
            setTimeout(() => {
                message.style.display = "none";
            }, 500)
        }, 2000)
    }, 100);
}

const loginUser = (data) => {
    if (!data) {
        invalidUser();
        return;
    }
    localStorage.setItem("user_login", JSON.stringify(data));

    window.location.replace("/restaurantes")
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    inputs = Array.from(form.getElementsByTagName("input"));

    let data = inputs.map( x => (
        {[x.name]: x.value}
    ));

    data = Object.assign({}, ...data);

    const res = fetchLoginRequest(data);

    res.then(x => loginUser(x));
});


document.addEventListener('DOMContentLoaded', () => {
    let login = localStorage.getItem("user_login");


    if (login && login != 'null')
        window.location.replace("/restaurantes")
})