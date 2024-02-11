/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: false,
  spaceBetween: 32,
  grabCursor: true,
  slidesPerGroup: 3,
  

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerGroup: 1,
    },
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

