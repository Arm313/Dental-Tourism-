const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar-ul");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");

})

