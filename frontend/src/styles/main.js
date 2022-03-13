import AOS from "aos";

AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// // navbar variables
// const nav = document.querySelector(".navbar-nav");
// const navLinks = document.querySelectorAll(".nav-link");
// const navToggleBtn = document.querySelector(".menu-toggle-btn");

// // nav toggle function
// const navToggleFunc = function () {
//   nav.classList.toggle("active");
//   navToggleBtn.classList.toggle("active");
// };

// navToggleBtn.addEventListener("click", navToggleFunc);

// // add event on all nav-link
// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener("click", navToggleFunc);
// }
