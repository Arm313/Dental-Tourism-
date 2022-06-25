const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar-ul");
const close = document.querySelector('.close');




menu.addEventListener("click", () => {
  navbar.style.display = "block";
  navbar.style.right = "1px";
  menu.style.display = "none";
  
});
close.addEventListener("click", () => {
  navbar.style.display = "none";
  navbar.style.right = "-300px";
  menu.style.display = "block";
  
});
