const navbarBtn = document.querySelector('.navbar-btn');
const navbarmobile = document.querySelector('.navbar-mobile');

navbarBtn.addEventListener('click', () => {
    navbarmobile.classList.toggle('navbar--open');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

