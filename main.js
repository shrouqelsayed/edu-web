'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}
/*ele (2)
1)menu close overlay
2)links
*/

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");//sidebar
const navTogglers = document.querySelectorAll("[data-nav-toggler]"); //close,open,overlay  list
const navLinks = document.querySelectorAll("[data-nav-link]");//links list
const overlay = document.querySelector("[data-overlay]");//overlay

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);


/**
 * header active when scroll down to 100px
 */

// const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    // header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    // header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);