let timer;
let timerLoad;

function showPage() {
   document.getElementById('loader').style.display = 'none';
   document.getElementById('before-loading').style.display = 'block';
}

function pageLoaded() {
   document.getElementById('loader').classList.add('loaded');
}

function loadingStar() {
   timerLoad = setTimeout(pageLoaded, 3000);
   timer = setTimeout(showPage, 3500);
}

function swappingPages() {
   timerLoad = setTimeout(pageLoaded, 900);
   timer = setTimeout(showPage, 1400);
}

window.addEventListener("scroll", function () {
   const logo = document.querySelector('.logo');
   const scrollValue = window.scrollY;

   // Calculate the blur amount based on the scroll position
   const maxBlur = 3000; // Maximum blur amount in pixels
   const blurAmount = Math.min(scrollValue / 50, maxBlur); // Adjust divisor for sensitivity

   // Apply the blur effect
   logo.style.filter = `blur(${blurAmount}px)`;
});

//LIGHT AND DARK THEME
const lightStar = document.querySelector('.star-light');
const darkStar = document.querySelector('.star-dark');
const footer = document.querySelector('.sticky-footer');
const logo = document.querySelector('.logo');
const gridText = document.querySelectorAll('.grid-text');
const timeText = document.querySelector('.time-text');
const heroLink = document.querySelectorAll('.hero-link');
const body = document.querySelector('.body');
const pop = document.querySelectorAll('.pop');
const projTitle = document.querySelectorAll('.project-title');
const projDesc = document.querySelectorAll('.project-desc');
const projDescMob = document.querySelectorAll('.project-desc-mobile');
const wordText = document.querySelectorAll('.word');
const projImg = document.querySelectorAll('.project-img');

const handleDarkColorChange = () => {
   body.className = 'body dark';
   footer.className = 'sticky-footer dark';
   logo.className = 'logo dark';
   timeText.className = 'time-text dark';
   gridText.forEach((item) => {
      item.className = 'grid-text dark';
   });
   heroLink.forEach((item) => {
      item.className = 'hero-link dark';
   });
   pop.forEach((item) => {
      item.className = 'pop dark';
   });
   projTitle.forEach((item) => {
      item.className = 'project-title dark';
   });
   projDesc.forEach((item) => {
      item.className = 'project-desc dark';
   });
   projDescMob.forEach((item) => {
      item.className = 'project-desc-mobile dark';
   });
   wordText.forEach((item) => {
      item.className = 'word dark';
   });
   projImg.forEach((item) => {
      item.className = 'project-img dark';
   });
   lightStar.style.display = 'none';
   darkStar.style.display = 'block';
};

const handleLightColorChange = () => {
   body.className = 'body';
   footer.className = 'sticky-footer';
   logo.className = 'logo';
   timeText.className = 'time-text';
   gridText.forEach((item) => {
      item.className = 'grid-text';
   });
   heroLink.forEach((item) => {
      item.className = 'hero-link';
   });
   pop.forEach((item) => {
      item.className = 'pop';
   });
   projTitle.forEach((item) => {
      item.className = 'project-title';
   });
   projDesc.forEach((item) => {
      item.className = 'project-desc';
   });
   projDescMob.forEach((item) => {
      item.className = 'project-desc-mobile';
   });
   wordText.forEach((item) => {
      item.className = 'word';
   });
   projImg.forEach((item) => {
      item.className = 'project-img';
   });
   lightStar.style.display = 'block';
   darkStar.style.display = 'none';
};

lightStar.addEventListener('click', handleDarkColorChange);
darkStar.addEventListener('click', handleLightColorChange);

//REAL-TIME
`use strict`;
function refreshTime() {
   var datetime = new Date().toLocaleTimeString("en-au", { hour12: false });
   timeText.textContent = datetime;
}
setInterval(refreshTime, 1000);

// CONTACT TYPING TEXT
var words = [
   `Let's get started!`,
   `I'd love to work with you!`,
   `shoot me an email below...`,
   `:)  :)  :)`,
   `<3  <3  <3`,
   `typing... typing... jks lol`
 ],
 part,
 i = 0,
 offset = 0,
 len = words.length,
 forwards = true,
 skip_count = 0,
 skip_delay = 15,
 speed = 70;
var wordflick = function () {
 setInterval(function () {
   if (forwards) {
     if (offset >= words[i].length) {
       ++skip_count;
       if (skip_count == skip_delay) {
         forwards = false;
         skip_count = 0;
       }
     }
   } else {
     if (offset == 0) {
       forwards = true;
       i++;
       offset = 0;
       if (i >= len) {
         i = 0;
       }
     }
   }
   part = words[i].substr(0, offset);
   if (skip_count == 0) {
     if (forwards) {
       offset++;
     } else {
       offset--;
     }
   }
   $(".word").text(part);
 }, speed);
};

$(document).ready(function () {
 wordflick();
});

// REVEALS
function revealElements(elements, offset) {
   var windowHeight = window.innerHeight;
 
   for (var i = 0; i < elements.length; i++) {
     var elementTop = elements[i].getBoundingClientRect().top;
     var elementVisible = 0;
 
     if (elementTop < windowHeight - elementVisible + offset) {
       elements[i].classList.add("active");
     } else {
       elements[i].classList.remove("active");
     }
   }
 }
 
 window.addEventListener("scroll", function () {
   var revealLeft = document.querySelectorAll(".reveal");
   var revealRight = document.querySelectorAll(".reveal-right");
   var revealBottom = document.querySelectorAll(".reveal-bottom");
 
   revealElements(revealLeft, 0);
   revealElements(revealRight, 0);
   revealElements(revealBottom, 0);
 });
 