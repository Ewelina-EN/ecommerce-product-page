const closeIcon = document.querySelector('.close_icone');
const menu = document.querySelector('.menu');
const menuIcone = document.querySelector('.menu_icone');

const showMenu = () => {
    menu.classList.toggle('active');
};

const closeMenu = () => {
    menu.classList.toggle('active');
};

menuIcone.addEventListener('click', showMenu);
closeIcon.addEventListener('click', closeMenu);

// galeria

let thumbnails = document.getElementsByClassName('thumbnail');
let activeImages = document.getElementsByClassName('active');

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function () {
        if (activeImages.length > 0) {
            activeImages[0].classList.remove('active');
        }

        this.classList.add('active');
        document.getElementById('featured').src = this.src;
    });
}