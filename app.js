let timer;
let timerLoad;

function showPage() {
   document.getElementById('loader').style.display = 'none';
   document.getElementById('before-loading').style.display = 'block';
}

function pageLoaded() {
   document.getElementById('loader').classList.add('loaded');
   // darkStar.classList.add('stop-spin');
   // darkStar.classList.add('dark-shadow');
   // randomColorFunction();
}

function loadingStar() {
   timerLoad = setTimeout(pageLoaded, 3000);
   timer = setTimeout(showPage, 3500);
}

function swappingPages() {
   timerLoad = setTimeout(pageLoaded, 900);
   timer = setTimeout(showPage, 1400);
}

const logoElement = document.querySelector('.logo');
const initialBlurValue = 0.6; // Initial blur value from your CSS
const maxBlur = 10; // Maximum blur value you want to achieve

window.addEventListener('scroll', () => {
  const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight));
  const blurValue = initialBlurValue + (scrollPercentage * (maxBlur - initialBlurValue));

  logoElement.style.filter = `blur(${blurValue}vw)`;
});

//LIGHT AND DARK THEME
const lightStar = document.querySelector('.star-light');
const darkStar = document.querySelector('.star-dark');
const redStar = document.querySelector('.star-red');
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
const projLink = document.querySelectorAll('.proj-link');
const helpText = document.querySelector('.help-text');

const handleDarkColorChange = () => {
   // redStar.classList.remove('stop-spin');
   // redStar.classList.remove('red-shadow');
   // darkStar.classList.remove('stop-spin');
   // darkStar.classList.remove('dark-shadow');
   body.className = 'body dark';
   footer.className = 'sticky-footer dark';
   logo.className = 'logo dark';
   timeText.className = 'time-text dark';
   helpText.className = 'help-text dark';
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
   projLink.forEach((item) => {
      item.className = 'proj-link dark';
   });
   // lightStar.classList.add('stop-spin');
   // lightStar.classList.add('light-shadow');
};

const handleRedColorChange = () => {
   // darkStar.classList.remove('stop-spin');
   // darkStar.classList.remove('dark-shadow');
   // lightStar.classList.remove('stop-spin');
   // lightStar.classList.remove('light-shadow');
   body.className = 'body red';
   footer.className = 'sticky-footer red';
   logo.className = 'logo red';
   timeText.className = 'time-text red';
   helpText.className = 'help-text red';
   gridText.forEach((item) => {
      item.className = 'grid-text red';
   });
   heroLink.forEach((item) => {
      item.className = 'hero-link red';
   });
   pop.forEach((item) => {
      item.className = 'pop red';
   });
   projTitle.forEach((item) => {
      item.className = 'project-title red';
   });
   projDesc.forEach((item) => {
      item.className = 'project-desc red';
   });
   projDescMob.forEach((item) => {
      item.className = 'project-desc-mobile red';
   });
   wordText.forEach((item) => {
      item.className = 'word red';
   });
   projImg.forEach((item) => {
      item.className = 'project-img red';
   });
   projLink.forEach((item) => {
      item.className = 'proj-link red';
   });
   // redStar.classList.add('stop-spin');
   // redStar.classList.add('red-shadow');
};

const handleLightColorChange = () => {
   // redStar.classList.remove('stop-spin');
   // redStar.classList.remove('red-shadow');
   // lightStar.classList.remove('stop-spin');
   // lightStar.classList.remove('light-shadow');
   body.className = 'body';
   footer.className = 'sticky-footer';
   logo.className = 'logo';
   timeText.className = 'time-text';
   helpText.className = 'help-text';
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
   projLink.forEach((item) => {
      item.className = 'proj-link';
   });
   // darkStar.classList.add('stop-spin');
   // darkStar.classList.add('dark-shadow');
};

// lightStar.addEventListener('click', handleDarkColorChange);
// darkStar.addEventListener('click', handleLightColorChange);
// redStar.addEventListener('click', handleRedColorChange);

const colorFunctions = [
   handleDarkColorChange,
   handleLightColorChange,
   handleRedColorChange
 ];
 
 function getRandomIndex(max) {
   return Math.floor(Math.random() * max);
 }
 
 const randomIndex = getRandomIndex(colorFunctions.length);
 const randomColorFunction = colorFunctions[randomIndex];

 randomColorFunction();

`use strict`;
function refreshTime() {
   let datetime = new Date().toLocaleTimeString("en-au", { hour12: false });
   timeText.textContent = datetime;
}
setInterval(refreshTime, 1000);

// CONTACT TYPING TEXT
let words = [
   `Let's get started!`,
   `Have an idea?`,
   `Why don't you:`,
   `:)  :)  :)`,
   `<3  <3  <3`,
   `typing... typing...`
 ],
 part,
 i = 0,
 offset = 0,
 len = words.length,
 forwards = true,
 skip_count = 0,
 skip_delay = 15,
 speed = 70;
let wordflick = function () {
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
   let windowHeight = window.innerHeight;
 
   for (let i = 0; i < elements.length; i++) {
     let elementTop = elements[i].getBoundingClientRect().top;
     let elementVisible = 0;
 
     if (elementTop < windowHeight - elementVisible + offset) {
       elements[i].classList.add("active");
   //   } else {
   //     elements[i].classList.remove("active");
   //   }
     }
   }
 }
 
 window.addEventListener("scroll", function () {
   const revealLeft = document.querySelectorAll(".reveal");
   const revealRight = document.querySelectorAll(".reveal-right");
   const revealBottom = document.querySelectorAll(".reveal-bottom");
 
   revealElements(revealLeft, 0);
   revealElements(revealRight, 0);
   revealElements(revealBottom, 0);
 });
