const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//////Opacity on Load
window.onload = function() {
    var element = document.querySelector(".body");
    element.style.opacity = 1;
};

/////Desktop EventListeners
document.addEventListener('DOMContentLoaded', function() {
    var infoButton = document.querySelector('.info');
    var infoElement = document.querySelector('.information');

    infoButton.addEventListener('click', function() {
        infoElement.style.display = 'flex';
        setTimeout(function() {
            infoElement.style.opacity = 1;
        }, 50);
        closeAllBoxes();
    });

    var boxes = [
        { id: 'medieval', boxClass: '.medieval-images' },
        { id: 'flaura', boxClass: '.flaura-images' },
        { id: 'trinkets', boxClass: '.trinkets-images' },
        { id: 'dirt', boxClass: '.dirt-images' }
        // Add more boxes in the future as needed
    ];

    function toggleBox(box) {
        var trigger = document.getElementById(box.id);
        var boxElement = document.querySelector(box.boxClass);
        var imageBox = boxElement.querySelectorAll('.image-box');

        // Close infoElement before opening the selected box
        infoElement.style.display = 'none';

        if (boxElement.style.display === 'none') {
            // If the box is not active, show it
            closeAllBoxes();
            boxElement.style.display = 'flex';
            trigger.style.filter = 'grayscale(100%)';

            setTimeout(function() {
                Array.from(imageBox).forEach(function(imageBoxs) {
                    imageBoxs.style.opacity = 1;
                });
            }, 50);

        } else {
            // If the box is already active, close it
            setTimeout(function() {
                boxElement.style.display = 'none';
                trigger.style.filter = 'grayscale(0%)';
            }, 1000);

            Array.from(imageBox).forEach(function(imageBoxs) {
                imageBoxs.style.opacity = 0;
            });
        }
    }

    function closeAllBoxes() {
        boxes.forEach(function(box) {
            var trigger = document.getElementById(box.id);
            var boxElement = document.querySelector(box.boxClass);

            boxElement.style.display = 'none';
            trigger.style.filter = 'grayscale(0%)';

            var imageBox = boxElement.querySelectorAll('.image-box');
            Array.from(imageBox).forEach(function(imageBoxs) {
                imageBoxs.style.opacity = 0;
            });
        });
    }

    boxes.forEach(function(box) {
        var trigger = document.getElementById(box.id);

        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleBox(box);
        });
    });
});

/////Phone EventListeners
document.addEventListener('DOMContentLoaded', function() {

    var infoButton = document.querySelector('.info');
    var infoElement = document.querySelector('.information');

    infoButton.addEventListener('click', function() {
        infoElement.style.display = 'flex';
        setTimeout(function() {
            infoElement.style.opacity = 1;
        }, 50);
        closeAllBoxes();
    });

    var boxes = [
        { id: 'medieval-phone', boxClass: '.medieval-images-phone' },
        { id: 'flaura-phone', boxClass: '.flaura-images-phone' },
        { id: 'trinkets-phone', boxClass: '.trinkets-images-phone' },
        { id: 'dirt-phone', boxClass: '.dirt-images-phone' }
        // Add more boxes in the future as needed
    ];

    function toggleBox(box) {
        var trigger = document.getElementById(box.id);
        var boxElement = document.querySelector(box.boxClass);
        var imageBox = boxElement.querySelectorAll('.image-box');

        infoElement.style.display = 'none';

        if (boxElement.style.display === 'none') {
            // If the box is not active, show it
            closeAllBoxes();
            boxElement.style.display = 'flex';
            trigger.style.filter = 'grayscale(100%)';

            setTimeout(function() {
                Array.from(imageBox).forEach(function(imageBoxs) {
                    imageBoxs.style.opacity = 1;
                });
            }, 50);

        } else {
            // If the box is already active, close it
            setTimeout(function() {
                boxElement.style.display = 'none';
                trigger.style.filter = 'grayscale(0%)';
            }, 1000);

            Array.from(imageBox).forEach(function(imageBoxs) {
                imageBoxs.style.opacity = 0;
            });
        }
    }

    function closeAllBoxes() {
        boxes.forEach(function(box) {
            var trigger = document.getElementById(box.id);
            var boxElement = document.querySelector(box.boxClass);

            boxElement.style.display = 'none';
            trigger.style.filter = 'grayscale(0%)';

            var imageBox = boxElement.querySelectorAll('.image-box');
            Array.from(imageBox).forEach(function(imageBoxs) {
                imageBoxs.style.opacity = 0;
            });
        });
    }

    boxes.forEach(function(box) {
        var trigger = document.getElementById(box.id);

        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleBox(box);
        });
    });
});

////Cursor Hover Animation
document.addEventListener('DOMContentLoaded', function () {
    var cursorContainer = document.getElementById('cursor-container');
    var customCursor = document.getElementById('custom-cursor');
    var images = document.querySelectorAll('.images-grid img');
    var imageBox = document.querySelectorAll('.image-box img');
    var phoneimages = document.querySelectorAll('.phone-grid img');
    var link = document.querySelectorAll('.link');

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;

        customCursor.style.transform = 'translate(' + (x - customCursor.clientWidth / 2) + 'px, ' + (y - customCursor.clientHeight / 2) + 'px)';
    });

    link.forEach(function (links) {
        links.addEventListener('mouseover', function () {
            customCursor.classList.add('hovering');
        });

        links.addEventListener('mouseout', function () {
            customCursor.classList.remove('hovering');
        });
    });

    images.forEach(function (image) {
        image.addEventListener('mouseover', function () {
            customCursor.classList.add('hovering');
        });

        image.addEventListener('mouseout', function () {
            customCursor.classList.remove('hovering');
        });
    });

    imageBox.forEach(function (image) {
        image.addEventListener('mouseover', function () {
            customCursor.classList.add('hovering');
        });

        image.addEventListener('mouseout', function () {
            customCursor.classList.remove('hovering');
        });
    });

    phoneimages.forEach(function (image) {
        image.addEventListener('mouseover', function () {
            customCursor.classList.add('hovering');
        });

        image.addEventListener('mouseout', function () {
            customCursor.classList.remove('hovering');
        });
    });
});
