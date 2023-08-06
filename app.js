// const customCursor = document.getElementById('custom-cursor');
// const hoverContainer = document.querySelector('.hover-container');

// const updateCursorPosition = (event) => {
//    customCursor.style.top = `${event.clientY}px`;
//    customCursor.style.left = `${event.clientX}px`;
// };

// window.addEventListener('mousemove', (event) => {
//    updateCursorPosition(event)
//    if (hoverContainer.matches(':hover')) {
//       customCursor.classList.add('zoom')
//    } else {
//       customCursor.classList.remove('zoom')
//    }
// });

const menuIcon = document.querySelector(".menu-text");
const closeIcon = document.querySelector(".close-text");
const megaNav = document.querySelector(".mega-nav");
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenuLinks));
function closeMenuLinks() {
   megaNav.classList.remove("active");
   closeIcon.style.display = "none";
   menuIcon.style.display = "block";
}

// SHOW MEGA MENU (SHOW CLOSE ICON AND HIDE MENU ICON)
const openMenu = () => {
   if (megaNav.classList.contains("active")) {
      megaNav.classList.remove("active");
      console.log("yup")
   } else {
      megaNav.classList.add("active");
      console.log("hmmm")
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
   }
};

// HIDE MEGA MENU (HIDE CLOSE ICON AND SHOW MENU ICON)
const closeMenu = () => {
   megaNav.classList.remove("active");
   console.log("diekk");
   closeIcon.style.display = "none";
   menuIcon.style.display = "block";
};

menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);

var myIndex = 0;
var myIndex2 = 0;
carouselImages();
carouselText();

function carouselImages() {
   var i;
   var x = document.getElementsByClassName("cycling-image");
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }
   myIndex++;
   if (myIndex > x.length) { myIndex = 1 }
   x[myIndex - 1].style.display = "block";
   setTimeout(carouselImages, 1300); //1000 = 1 second
}

function carouselText() {
   var i2;
   var x2 = document.getElementsByClassName("cycling-text");
   for (i2 = 0; i2 < x2.length; i2++) {
      x2[i2].style.display = "none";
   }
   myIndex2++;
   if (myIndex2 > x2.length) { myIndex2 = 1 }
   x2[myIndex2 - 1].style.display = "block";
   setTimeout(carouselText, 1300); //1000 = 1 second
}

`use strict`;
function refreshTime() {
   var datetime = new Date().toLocaleTimeString();
   document.getElementById("time").textContent = datetime;
}
   setInterval(refreshTime, 1000);