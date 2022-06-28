const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar-ul");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  navbar.style.display = "block";
  navbar.style.right = "0px";
  menu.style.display = "none";
});
close.addEventListener("click", () => {
  navbar.style.display = "none";
  navbar.style.right = "-300px";
  menu.style.display = "block";
});

// window.addEventListener(
//   "resize",
//   function () {
//     if ((navbar.style.display = "block")) {
//       navbar.style.display = "none";
      
      
      
//     }
//     navbar.style.flexDirection = "row";


//     // navbar.style.display = "block";
//     // menu.style.display = "none";
//     // navbar.style.flexDiraction = "row";
//     // console.log("addEventListener - resize");
//     // alert("addEventListener - resize");
//   }
//   // true
// );
