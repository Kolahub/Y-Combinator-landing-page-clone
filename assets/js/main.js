/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  

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
      slidesPerGroup: 2,
    },
    968: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

