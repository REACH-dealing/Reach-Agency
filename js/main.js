const navbar = document.querySelector(".links");
const toggleIcone = document.querySelector(".toggleIcon");
console.log(toggleIcone);
console.log(navbar);

toggleIcone.addEventListener("click", () => {
  console.log(navbar);
  navbar.classList.toggle("active");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 50,
  //   loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },

  breakpoints: {
    // When window width is >= 768px
    768: {
      slidesPerView: 2, // Show 2 slides at a time
      spaceBetween: 50,
    },
    // When window width is >= 992px
    992: {
      slidesPerView: 3, // Show 3 slides at a time
      spaceBetween: 50,
    },
  },
});

const subMenu = document.querySelector(".subMenu");
const servicesMenu = document.querySelector("#servicesMenu");
