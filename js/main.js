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

document
  .getElementById("my-form-button")
  .addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent the default form submission
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    const responseMessage = document.getElementById("my-form-status");

    try {
      const response = await fetch("https://formspree.io/f/xwpkqpny", {
        method: "POST",
        body: JSON.stringify({ email, message }),
        headers: {
          Accept: "application/json",
        },
      });
      console.log(response);

      if (response.status === 200) {
        responseMessage.innerHTML = "sent successfully.";
        responseMessage.style.color = "green";
      } else {
        // throw new Error("Form submission failed.");
        responseMessage.innerHTML = "problem sending your message.";
        responseMessage.style.color = "red";
      }
    } catch (error) {
      console.log(error);
      responseMessage.innerHTML = "problem sending your message.";
      responseMessage.style.color = "red";
    }
  });
