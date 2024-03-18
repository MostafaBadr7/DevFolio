/*
 * Route - Frontend
 * JS program Week 8
 * Smart Login Web APP
 * JS + Bootstrap
 * 23/12/2023
 * Login page JS
 */

//................................. Global varaibles ...............................
const carousalBtns = document.querySelectorAll(".carousl-btn");
console.log(carousalBtns);
const carouselItem = document.querySelectorAll(".carousel-item");
for (let i = 0; i < carousalBtns.length; i++) {
  carousalBtns[i].addEventListener("click", () => {
    for (let i = 0; i < carousalBtns.length; i++) {
      carousalBtns[i].classList.remove("active");
    }
    if (carousalBtns[i].classList.contains("active") == false) {
      x.classList.add("active");
    }
  });
}

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
      console.log(secTop, "offsetTop");
      console.log(secHeight, "height");
      NavLinks.forEach((link) => link.classList.remove("active-link"));
      document
        .querySelector(".nav-item[href*=" + id + "]")
        .classList.add("active-link");
    }
  });
};

//................................ To show validation msg t user ....................
function alertMsg(msg) {
  warningBoxMsg.innerHTML = msg;
  warningBox.classList.add("display");
  setTimeout(() => {
    warningBox.classList.remove("display");
    warningBoxMsg.innerHTML = "";
  }, "3000");
}
