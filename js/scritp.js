const menu = document.querySelector("#menu");
const icono = document.querySelector("#icono");

icono.addEventListener("click",() => {
    if(menu.classList.contains("invisible")){
        menu.classList.remove("invisible");
        menu.classList.add("flex");
    } else {
        menu.classList.remove("flex");
        menu.classList.add("invisible");
    }  
})