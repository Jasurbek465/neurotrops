var swiper = new Swiper(".intro-swiper", {
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
       scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });