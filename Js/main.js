// on Windows load
// function randomColor() {
//   let color = "#";
//   // let navcolor = "#";
//   let colorCode = [
//     "82AAE3",
//     "6A40BF",
//     "61876E",
//     "852999",
//     "8843F2",
//     "FF99D7",
//     "6F38C5",
//     "E6AF2E",
//     "790C5A",
//     "62760C",
//     "F3CCFF",
//     "5902EC",
//     "CC9544",
//     "750550",
//   ];
//   let classname = document.getElementsByClassName("Change");
//   let classname1 = document.getElementsByClassName("header");
//   let classname2 = document.getElementsByClassName("nav__menu");
//   let classname3 = document.getElementsByClassName("services__modal-content");

//   let i;
//   color += colorCode[Math.floor(Math.random() * colorCode.length)];
//   for (i = 0; i < classname.length; i++) {
//     classname[i].style.backgroundColor = color;
//     classname1[i].style.backgroundColor = color;
//     classname2[i].style.backgroundColor = color;
//     classname3[i].style.backgroundColor = color;
//   }
// }

// MENU SHOW Y HIDDEN//
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// MENU SHOW
// VALIDATE IF CONSTANT EXIST
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// menu hidden
// validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Accordion skills

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
  function animateMultipleIds(ids) {
    ids.split(" ").forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.animate([
          // { width: '0px', transform: 'translateX(0%)' },
          // { width: "50px", transform: 'translateX(25%)' },
          // { width: "75px", transform: 'translateX(50%)' },
          // { width: "100px", transform: 'translateX(75%)' },
          // { width: "150px", transform: 'translateX(100%)' }
          { width: '0%' },
          { width: "25%" },
          { width: "50%" },
          { width: "75%"},
          { width: "100%" }
        ], {
          duration: 2000,
          easing: 'ease'
        });
      }
    });
  }
  
  animateMultipleIds("html css Js react node firebase mongo figma photoshop tailwind nextjs bootstrap");
  
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});






/*************** Qualification Tabs */
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // console.log('click disparado')
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
// ======= SEVICES MODAL =========
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalCloses) => {
  modalCloses.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

// ======= Portfolio Swiper ======

let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextE1: ".swiper-button-next",
    prevE1: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // mousewheel : true,
  // keyboard : true,
});

// ======== Testimonial ===========

let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakPoints: {
    568: {
      slidesPerview: 2,
    },
  },
});

// ========= Scroll Section Active links=======

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*= " + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*= " + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ======= Change background header =====

function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

//   ====== Show scroll Up ======
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//   ======== Dark Theme =======

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
