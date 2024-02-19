const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".images-grid img");
    var imageHoverWrapper = document.getElementById("imageHoverWrapper");

    images.forEach(function(image) {
        image.addEventListener("mouseover", function() {
            var src = image.getAttribute("src");
            imageHoverWrapper.innerHTML = "<img src='" + src + "' alt='hovered image'>";
            imageHoverWrapper.style.display = "flex";

            // Triggering reflow to enable the transition
            imageHoverWrapper.offsetHeight;

            imageHoverWrapper.style.opacity = 1;
        });

        image.addEventListener("mouseout", function() {
            imageHoverWrapper.style.opacity = 0;
        });

        // Listen for the 'transitionend' event to hide the wrapper
        imageHoverWrapper.addEventListener("transitionend", function() {
            if (imageHoverWrapper.style.opacity === "0") {
                imageHoverWrapper.style.display = "none";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.phone-grid img');
    var imageHoverWrapper = document.getElementById('imagePhoneHoverWrapper');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            var src = image.getAttribute('src');
            imageHoverWrapper.innerHTML = "<img src='" + src + "' alt='clicked image'>";
            imageHoverWrapper.style.display = 'flex';
            console.log("hi");
        });
    });

    // Close the image-hover-wrapper on overlay click
    imageHoverWrapper.addEventListener('click', function () {
        imageHoverWrapper.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var cursorContainer = document.getElementById('cursor-container');
    var customCursor = document.getElementById('custom-cursor');
    var images = document.querySelectorAll('.images-grid img');
    var phoneimages = document.querySelectorAll('.phone-grid img');
    var link = document.getElementById('link');

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;

        customCursor.style.transform = 'translate(' + (x - customCursor.clientWidth / 2) + 'px, ' + (y - customCursor.clientHeight / 2) + 'px)';
    });

    link.addEventListener('mouseover', function () {
        customCursor.classList.add('hovering');
    });

    link.addEventListener('mouseout', function () {
        customCursor.classList.remove('hovering');
    });

    images.forEach(function (image) {
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
