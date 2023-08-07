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
