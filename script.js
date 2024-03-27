
// ------------------------------------------------------------------------ START CUSTOM CURSOR --------------------------------- //
document.addEventListener('DOMContentLoaded', function () {
    var cursorContainer = document.getElementById('cursor-container');
    var customCursor = document.getElementById('custom-cursor');
    var link = document.querySelectorAll('.link');
    var images = document.querySelectorAll('.memories-feed-img');

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
  
        customCursor.style.transform = 'translate(' + (x - customCursor.clientWidth / 2) + 'px, ' + (y - customCursor.clientHeight / 2) + 'px)';
    });
  
    document.documentElement.addEventListener('mouseleave', function () {
        customCursor.classList.remove('visible');
        cursorContainer.classList.remove('visible');
        customCursor.classList.add('hidden');
    });
  
    document.documentElement.addEventListener('mouseenter', function () {
        customCursor.classList.remove('hidden');
        customCursor.classList.add('visible');
        cursorContainer.classList.add('visible');
    });

    document.documentElement.addEventListener('mousemove', function handleMouseMove() {
        // Remove the event listener after the initial execution
        document.documentElement.removeEventListener('mousemove', handleMouseMove);
    
        // Your code to show the custom cursor
        customCursor.classList.remove('hidden');
        customCursor.classList.add('visible');
        cursorContainer.classList.add('visible');
    }, { once: true });

    link.forEach(function (link) {
        link.addEventListener('mouseover', function () {
            customCursor.classList.add('hovering');
        });

        link.addEventListener('mouseout', function () {
            customCursor.classList.remove('hovering');
        });
    });

    images.forEach(function (img) {
        img.addEventListener('mouseover', function () {
            customCursor.classList.add('hovering');
        });

        img.addEventListener('mouseout', function () {
            customCursor.classList.remove('hovering');
        });
    });

});

// ------------------------------------------------------------------------ START SMOOTH SCROLLING --------------------------------- //
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ------------------------------------------------------------------------ START SMOOTH LINK JUMPS --------------------------------- //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior : "smooth"});
    });
});

// ------------------------------------------------------------------------ START ACTIVE LINK --------------------------------- //
// Get the current URL path
var path = window.location.pathname;

// Get the ID of the active navigation item
var activeId;

// Check which navigation item is active based on the URL
if (path.includes("chaos.html")) {
    activeId = "chaos";
} else if (path.includes("system.html")) {
    activeId = "system";
}

if (activeId && document.getElementById(activeId)) {
    // Add 'active' class to the active navigation item
    document.getElementById(activeId).classList.add("active");
}