new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 100,
  autoHeight: true,
  slidesPerView: 1,
  effect: "coverflow",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  disableOnInteraction: false,
  autoplayDisableOnInteraction: false,
  autoplay: {
    delay: 3000,
  },
});
