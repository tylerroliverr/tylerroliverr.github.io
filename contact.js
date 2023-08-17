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
const fieldSet = document.querySelectorAll('.fieldset');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const selectBudget = document.getElementById('budget');
const selectService = document.getElementById('service');
const textArea = document.querySelector('.text-area');

const handleDarkColorChange = () => {
   body.className = 'body dark';
   footer.className = 'sticky-footer dark';
   logo.className = 'logo dark';
   timeText.className = 'time-text dark';
   submitButton.className = 'submit dark';
   formContainer.className = 'form dark';
   backHome.className = 'back-link dark';
   textArea.className = 'text-area dark';
   inputEmail.classList.add('dark');
   inputName.classList.add('dark');
   selectBudget.classList.add('dark');
   selectService.classList.add('dark');
   inputField.forEach((item) => {
      item.className = 'input dark';
   });
   labelText.forEach((item) => {
      item.className = 'label dark';
   });
   fieldSet.forEach((item) => {
      item.className = 'fieldset dark';
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
   textArea.className = 'text-area';
   inputEmail.classList.remove('dark');
   inputName.classList.remove('dark');
   selectBudget.classList.remove('dark');
   selectService.classList.remove('dark');
   inputField.forEach((item) => {
      item.className = 'input';
   });
   labelText.forEach((item) => {
      item.className = 'label';
   });
   fieldSet.forEach((item) => {
      item.className = 'fieldset';
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