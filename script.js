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

        counterElement.textContent = currentValue + "%";

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

const enableDarkMode = () => {
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkMode');
    localStorage.setItem('darkMode', null);
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
    //     darkModeToggle.innerHTML = '<3';
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

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char,i) => {

    const text = new SplitType(char, { types: 'chars'})

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            markers: true
        },
        opacity: 0.2,
        stagger: 0.1
      });
})

Draggable.create(".drag", {
    // type: "rotation", TO MAKE IT SPIN & NOT DRAG
    bounds: ".drag-container",
    zIndexBoost: false,
    inertia: true
});

Draggable.create(".gif", {
    bounds: ".gif-wrapper",
    zIndexBoost: false,
    inertia: true
});

// Draggable.create(".hero-star-svg", {
//     zIndexBoost: false,
//     inertia: true
// });

Draggable.create(".draggable-info", {
    zIndexBoost: false,
    inertia: true
});

const tl = gsap.timeline();

gsap.to(".hero-star-svg", {
    rotation: 360,
    duration: 15,
    ease: 'none',
    repeat: -1
});

gsap.to(".blur", {
    scale: 1.3,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "none"
});

gsap.to(".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
});

gsap.to(".bar", 1.5, {
    delay: 3.5,
    height: 0,
    stagger: {
        amount: 0.3,
    },
    ease: "power4.inOut",
});

gsap.from(".logo", 1.5, {
    delay: 4,
    opacity: 0,
    y: 600,
    stagger: {
        amount: 0.2,
    },
    ease: "power4.inOut",
});

gsap.from(".hero-star", 2, {
    delay: 4.5,
    opacity: 0,
    y: 600,
    ease: "power4.inOut",
});

// tl.to("#custom-cursor", {
//     duration: 15,
//     scale: 2,
//     ease: 'none',
//     yoyo: true,
//     repeat: -1
// })

// tl.from(".hero-black", {
//     scrollTrigger: {
//         trigger: ".hero-black",
//         start: "top center",
//         end: "center center",
//         toggleActions: "play reverse none none",
//         scrub: 2
//     },
//     borderRadius: 200,
//     duration: 2
// })
// .from(".hero-black", {
//     scrollTrigger: {
//         trigger: ".hero-black",
//         start: "top bottom",
//         end: "center 80%",
//         scrub: 2
//     },
//     x: '100vw',
//     duration: 2
// })
// .from(".profile-photo", {
//     scrollTrigger: {
//         trigger: '.hero-black',
//         end: "40% center",
//         scrub: 2,
//         markers: true
//     },
//     x: '100vw',
//     opacity: 0,
//     duration: 2
// })

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