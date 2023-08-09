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
const timeText = document.querySelector('.time-text');
const formContainer = document.querySelector('.form');
const inputField = document.querySelectorAll('.input');
const submitButton = document.querySelector('.submit');
const labelText = document.querySelectorAll('.label');
const body = document.querySelector('.body');
const backHome = document.querySelector('.back-link');

const handleDarkColorChange = () => {
   body.className = 'body dark';
   footer.className = 'sticky-footer dark';
   logo.className = 'logo dark';
   timeText.className = 'time-text dark';
   submitButton.className = 'submit dark';
   formContainer.className = 'form dark';
   backHome.className = 'back-link dark';
   inputField.forEach((item) => {
      item.className = 'input dark';
   });
   labelText.forEach((item) => {
      item.className = 'label dark';
   });
   lightStar.style.display = 'none';
   darkStar.style.display = 'block';
};

const handleLightColorChange = () => {
   body.className = 'body';
   footer.className = 'sticky-footer';
   logo.className = 'logo';
   timeText.className = 'time-text';
   submitButton.className = 'submit';
   formContainer.className = 'form';
   backHome.className = 'back-link';
   inputField.forEach((item) => {
      item.className = 'input';
   });
   labelText.forEach((item) => {
      item.className = 'label';
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