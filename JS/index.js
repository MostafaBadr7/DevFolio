/*
 * Route - Frontend
 * JS program Week 8
 * Smart Login Web APP
 * JS + Bootstrap
 * 23/12/2023
 * Login page JS
 */

//................................. Global varaibles ...............................

const sections = document.querySelectorAll("section");
const NavLinks = document.querySelectorAll(".nav-item");
window.onscroll = () => {
  sections.forEach((sec) => {
    const bodyTop = scrollY;
    const secTop = sec.offsetTop - 150;
    const secHeight = sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (bodyTop >= secTop && bodyTop < secTop + secHeight) {
      sec.classList.add("active");
      NavLinks.forEach((link) => link.classList.remove("active-link"));
      document
        .querySelector(".nav-item[href*=" + id + "]")
        .classList.add("active-link");
    }
  });
};
