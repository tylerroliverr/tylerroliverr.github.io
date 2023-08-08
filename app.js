let timer;
let timerLoad;

function showPage() {
   document.getElementById('loader').style.display = 'none';
   document.getElementById('before-loading').style.display = 'block';
}

function pageLoaded () {
   document.getElementById('loader').classList.add('loaded');
}

function loadingStar() {
   timerLoad = setTimeout(pageLoaded, 3000);
   timer = setTimeout(showPage, 3500);
}

window.addEventListener("scroll", function() {
   const logo = document.querySelector('.logo');
   const scrollValue = window.scrollY;

   // Calculate the blur amount based on the scroll position
   const maxBlur = 1000; // Maximum blur amount in pixels
   const blurAmount = Math.min(scrollValue / 100, maxBlur); // Adjust divisor for sensitivity

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
   lightStar.style.display = 'block';
   darkStar.style.display = 'none';
};

lightStar.addEventListener('click', handleDarkColorChange);
darkStar.addEventListener('click', handleLightColorChange);

//REAL-TIME
`use strict`;
function refreshTime() {
   var datetime = new Date().toLocaleTimeString("en-au", { hour12: false});
   timeText.textContent = datetime;
}
   setInterval(refreshTime, 1000);