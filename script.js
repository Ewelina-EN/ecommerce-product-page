const closeIcon = document.querySelector(".close_icone");
const menu = document.querySelector(".menu");
const menuIcone = document.querySelector(".menu_icone");

const showMenu = () => {
    menu.classList.toggle('active');
};

const closeMenu = () => {
    menu.classList.toggle('active')
};

menuIcone.addEventListener("click", showMenu);
closeIcon.addEventListener("click", closeMenu);