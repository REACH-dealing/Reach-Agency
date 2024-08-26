const navbar = document.querySelector(".links");
const toggleIcone = document.querySelector(".toggleIcon");

toggleIcone.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
