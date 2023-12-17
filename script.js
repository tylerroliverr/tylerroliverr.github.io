/////////////
//LOADING BAR
/////////////
function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if(currentValue === 100) {
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if(currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = "[" + currentValue + "]" + "%";

        let delay = Math.floor(Math.random() * 180) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

startLoader();

///////////
//DARK MODE
///////////
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#toggle');
const dayText = '<span class="cursive smaller">D</span>ay';
const nightText = '<span class="cursive smaller">N</span> ight';

const enableDarkMode = () => {
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.innerHTML = dayText;
}

const disableDarkMode = () => {
    document.body.classList.remove('darkMode');
    localStorage.setItem('darkMode', null);
    darkModeToggle.innerHTML = nightText;
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    // setTimeout(function () {
    //     darkModeToggle.innerHTML = '-|+';
    // }, 0);
});

///////////
//TIME TEXT
///////////
// const timeText = document.querySelector('.time-text');
// `use strict`;
// function refreshTime() {
//    let datetime = new Date().toLocaleTimeString("en-au", { hour12: false });
//    timeText.textContent = datetime;
// }
// setInterval(refreshTime, 1000);

///////////////
//CUSTOM CURSOR
///////////////
document.addEventListener('DOMContentLoaded', function () {
    var cursorContainer = document.getElementById('cursor-container');
    var customCursor = document.getElementById('custom-cursor');
 
    document.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;
 
      // Add a delay to the cursor movement (e.g., 100 milliseconds)
      setTimeout(function () {
        customCursor.style.transform = 'translate(' + (x - 72) + 'px, ' + (y - 75) + 'px)';
      }, 20);
    });
  });

/////////////////
//GSAP ANIMATIONS
/////////////////
gsap.registerPlugin(ScrollTrigger, Draggable); //Add InertiaPlugin

ScrollTrigger.refresh();

const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char,i) => {

    const text = new SplitType(char, { types: 'chars'})

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: ".services-list",
            start: 'top 70%',
            end: '50% 50%',
            scrub: true,
            // markers: true
        },
        opacity: 0.1,
        stagger: 0.2
      });
})

Draggable.create(".drag", {
    // type: "rotation", TO MAKE IT SPIN & NOT DRAG
    bounds: ".drag-container",
    zIndexBoost: false,
    inertia: true
});

// Draggable.create(".cssload-wrap", {
//     // type: "rotation", TO MAKE IT SPIN & NOT DRAG
//     bounds: ".drag-container",
//     zIndexBoost: false,
//     inertia: true
// });

const tl = gsap.timeline();

gsap.to(".star", {
    rotation: 360,
    duration: 15,
    ease: 'none',
    repeat: -1
});

gsap.to(".small-stars-svg", {
    rotation: 360,
    duration: 15,
    ease: 'none',
    repeat: -1
});

gsap.to(".two", {
    rotation: 360,
    duration: 25,
    ease: 'none',
    repeat: -1
});

// gsap.to(".blur-ack", {
//     scale: 0.7,
//     duration: 2.5,
//     repeat: -1,
//     yoyo: true,
//     ease: "power1.in"
// });

///////////////////////////////////////////START LOADER

gsap.to(".counter", 0.25, {
    delay: 3,
    opacity: 0,
});

gsap.to(".bar", 1.2, {
    delay: 3.25,
    // opacity: 0,
    yPercent: -100,
    ease: "power4.out",
});

//////////////////////////////////////////////END LOADER

///////////////////////

let secondsT = 1.6;

gsap.from(".studios-wrapper", {
    scrollTrigger: {
        trigger: ".after-title",
        // markers: true,
        // scrub: true,
        start: "30% 50%",
        end: "bottom 50%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    duration: secondsT
});

gsap.from(".profile-wrapper", {
    scrollTrigger: {
        trigger: ".after-title",
        // markers: true,
        // scrub: true,
        start: "50% 50%",
        end: "bottom 30%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    duration: secondsT
});

gsap.from(".before-about", {
    scrollTrigger: {
        trigger: ".profile-wrapper",
        // markers: true,
        // scrub: true,
        start: "40% 50%",
        end: "80% 40%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    duration: secondsT
});

gsap.from(".about-me", {
    scrollTrigger: {
        trigger: ".before-about",
        // markers: true,
        // scrub: true,
        start: "top 50%",
        end: "80% 40%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    duration: secondsT
});

gsap.from(".services-title", {
    scrollTrigger: {
        trigger: ".about-me",
        // markers: true,
        // scrub: true,
        start: "top 50%",
        end: "80% 40%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    duration: secondsT
});

gsap.from(".contact", {
    scrollTrigger: {
        trigger: ".drag-container",
        // markers: true,
        // scrub: true,
        start: "top 50%",
        end: "80% 40%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    duration: secondsT
});

gsap.from(".cssload-wrap", {
    scrollTrigger: {
        trigger: ".services-list",
        // markers: true,
        // scrub: true,
        start: "30% 50%",
        end: "bottom 50%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    duration: secondsT
});

ScrollTrigger.refresh();

//////////////////
//SMOOTH SCROLLING
//////////////////
const lenis = new Lenis();

// lenis.on('scroll', (e) => {
//   console.log(e);
// })

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//SCROLLING BANNER
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller-inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
