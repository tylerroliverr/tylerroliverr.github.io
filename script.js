const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

////////////////////////////////////////////////////////////////

function scrollToTop() {
    window.scrollTo(0, 0);
}

//THUMBNAILS
const phoneCategories = [
    { id: "medieval-phone", path: "./resources/images/1 (17).jfif" },
    { id: "trinkets-phone", path: "./resources/trinkets/trinkets (2).jfif" },
    { id: "flaura-phone", path: "./resources/flaura/flaura (23).jfif" },
    { id: "dirt-phone", path: "./resources/dirt/dirt (17).jfif" },
    // Add more phone categories as needed
];

const desktopCategories = [
    { id: "medieval", path: "./resources/images/1 (17).jfif" },
    { id: "trinkets", path: "./resources/trinkets/trinkets (2).jfif" },
    { id: "flaura", path: "./resources/flaura/flaura (23).jfif" },
    { id: "dirt", path: "./resources/dirt/dirt (17).jfif" },
    // Add more phone categories as needed
];

// Function to generate phone HTML
function generateThumbnailHTML(category) {
    return `
        <img id="${category.id}" src="${category.path}" alt="">
    `;
}

// Function to initialize the phone grid
function initializeThumbnailGrid() {
    const imagesPhone = document.getElementById('imagesPhone');
    const imagesDesktop = document.getElementById('imagesGrid');

    phoneCategories.forEach(category => {
        // Generate phone images
        const phoneHTML = generateThumbnailHTML(category);
        imagesPhone.innerHTML += phoneHTML;
    });

    desktopCategories.forEach(category => {
        // Generate phone images
        const desktopHTML = generateThumbnailHTML(category);
        imagesDesktop.innerHTML += desktopHTML;
    });
}

// Call the initialization function
initializeThumbnailGrid();

///////////////////////////////////////////////////////////////

//AUTO IMAGE FILL
// Sample data for each category
const categories = [
    {
        name: "medieval",
        images: [
            { path: "./resources/images/1 (17).jfif", text: "unsure" },
            { path: "./resources/images/1 (18).jfif", text: "spencer davie" },
            { path: "./resources/images/1 (14).jfif", text: "unsure" },
            { path: "./resources/images/1 (19).jfif", text: "unsure" },
            { path: "./resources/images/1 (21).jfif", text: "unsure" },
            { path: "./resources/images/1 (22).jfif", text: "unsure" },
            { path: "./resources/images/1 (23).jfif", text: "unsure" },
            { path: "./resources/images/1.jfif", text: "kot__ko" },
            { path: "./resources/images/1 (20).jfif", text: "henijay" },
            { path: "./resources/images/1 (24).jfif", text: "unsure" },
            { path: "./resources/images/1 (25).jfif", text: "unsure" },
            { path: "./resources/images/1 (26).jfif", text: "unsure" },
            { path: "./resources/images/1 (27).jfif", text: "unsure" },
            { path: "./resources/images/1 (34).jfif", text: "unsure" },
            { path: "./resources/images/1 (28).jfif", text: "unsure" },
            { path: "./resources/images/1 (29).jfif", text: "unsure" },
            { path: "./resources/images/1 (2).jfif", text: "unsure" },
            { path: "./resources/images/1 (3).jfif", text: "unsure" },
            { path: "./resources/images/1 (4).jfif", text: "unsure" },
            { path: "./resources/images/1 (5).jfif", text: "unsure" },
            { path: "./resources/images/1 (6).jfif", text: "unsure" },
            { path: "./resources/images/1 (7).jfif", text: "unsure" },
            { path: "./resources/images/1 (8).jfif", text: "unsure" },
            { path: "./resources/images/1 (9).jfif", text: "unsure" },
            { path: "./resources/images/1 (10).jfif", text: "unsure" },
            { path: "./resources/images/1 (11).jfif", text: "sunsure" },
            { path: "./resources/images/1 (12).jfif", text: "unsure" },
            { path: "./resources/images/1 (13).jfif", text: "excalibur 1981" },
            { path: "./resources/images/1 (14).jfif", text: "unsure" },
            { path: "./resources/images/1 (15).jfif", text: "unsure" },
            { path: "./resources/images/1 (16).jfif", text: "unsure" },
            { path: "./resources/images/1 (30).jfif", text: "unsure" },
            { path: "./resources/images/1 (31).jfif", text: "unsure" },
            { path: "./resources/images/1 (32).jfif", text: "unsure" },
            { path: "./resources/images/1 (33).jfif", text: "unsure" },
            { path: "./resources/images/1 (36).jfif", text: "unsure" },
            { path: "./resources/images/1 (37).jfif", text: "unsure" },
        ]
    },
    {
        name: "trinkets",
        images: [
            { path: "./resources/trinkets/trinkets (2).jfif", text: "c. bonnefond" },
            { path: "./resources/trinkets/trinkets.jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (1).jpg", text: "unsure" },
            { path: "./resources/trinkets/trinkets (1).jfif", text: "austin james smith" },
            { path: "./resources/trinkets/trinkets (3).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (4).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (5).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (6).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (7).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (8).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (9).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (10).jfif", text: "jacob wise" },
            { path: "./resources/trinkets/trinkets (11).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (12).jfif", text: "joey camacho" },
            { path: "./resources/trinkets/trinkets (13).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (14).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (15).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (16).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (17).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (18).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (19).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (20).jfif", text: "gustav gurschner" },
        ]
    },
    {
        name: "flaura",
        images: [
            { path: "./resources/flaura/flaura (1).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (2).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (3).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (4).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (5).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (6).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (7).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (8).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (9).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (10).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (11).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (12).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (14).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (15).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (16).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (17).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (18).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (19).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (20).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (21).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (22).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (23).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (24).jfif", text: "unsure" },
        ]
    },
    {
        name: "dirt",
        images: [
            { path: "./resources/dirt/dirt (1).jfif", text: "pu'er, yunnan(?)" },
            { path: "./resources/dirt/dirt (2).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (3).jfif", text: "alan cressler" },
            { path: "./resources/dirt/dirt (4).jfif", text: "don alfonso" },
            { path: "./resources/dirt/dirt (5).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (6).jfif", text: "pete sherrard" },
            { path: "./resources/dirt/dirt (7).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (8).jfif", text: "pilgrim's badge" },
            { path: "./resources/dirt/dirt (9).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (10).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (11).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (12).jfif", text: "yajifun" },
            { path: "./resources/dirt/dirt (13).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (14).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (15).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (16).jfif", text: "diane dal pra & services généraux" },
            { path: "./resources/dirt/dirt (17).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (18).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (19).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (20).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (21).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (22).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (23).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (24).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (25).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (26).jfif", text: "gerzeh palette" },
            { path: "./resources/dirt/dirt (27).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (28).jfif", text: "georg jenson" },
            { path: "./resources/dirt/dirt (29).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (30).jfif", text: "leo lionni" },
            { path: "./resources/dirt/dirt (31).jfif", text: "ludovich alleaume" },
        ]
    },
];

// Function to generate image HTML for a category
function generateImageHTML(category) {
    const imageHTML = category.images.map(image => `
            <div class="image-box">
                <img src="${image.path}" alt="">
                <p>${image.text}</p>
            </div>
        `).join('');

    return imageHTML;
}

// Function to initialize the images and image hover wrappers
// DESKTOP & PHONE IMAGES
function initializeImages() {
    const imagesGrid = document.getElementById('imagesGrid');
    const imagesPhone = document.getElementById('imagesPhone');

    categories.forEach(category => {
        // Generate images for the images grid
        const categoryImagesHTML = generateImageHTML(category);
        imagesGrid.innerHTML += categoryImagesHTML;
        imagesPhone.innerHTML += categoryImagesHTML;

        // Generate images for the corresponding image hover wrapper
        //desktop
        const imageHoverWrapper = document.querySelector(`.image-hover-wrapper.${category.name}-images`);
        imageHoverWrapper.innerHTML = generateImageHTML(category);

        //phone
        const phoneHover = document.querySelector(`.phone-hover.${category.name}-images-phone`);
        phoneHover.innerHTML = generateImageHTML(category);
    });
    
}

// Call the initialization function
initializeImages();

//////////////////////////////////////////////////////////////

//////Opacity on Load
window.onload = function() {
    var element = document.querySelector(".body");
    element.style.opacity = 1;
};

///////////////////////////////////////////////////////////////

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
        { id: 'medieval', boxClass: '.medieval-images', inactiveImage: './resources/images/1 (17).jfif', activeImage: './resources/blue_thumbnails/armour.png'  },
        { id: 'flaura', boxClass: '.flaura-images', inactiveImage: './resources/flaura/flaura (23).jfif', activeImage: './resources/blue_thumbnails/flaura.png'  },
        { id: 'trinkets', boxClass: '.trinkets-images', inactiveImage: './resources/trinkets/trinkets (2).jfif', activeImage: './resources/blue_thumbnails/trinkets.png'  },
        { id: 'dirt', boxClass: '.dirt-images', inactiveImage: './resources/dirt/dirt (17).jfif', activeImage: './resources/blue_thumbnails/dirt.png' }
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

            trigger.src = box.activeImage;

            setTimeout(function() {
                Array.from(imageBox).forEach(function(imageBoxs) {
                    imageBoxs.style.opacity = 1;
                    scrollToTop();
                });
            }, 50);

        } else {
            // If the box is already active, close it
            setTimeout(function() {
                boxElement.style.display = 'none';
            }, 1000);

            trigger.src = box.inactiveImage;

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
            trigger.src = box.inactiveImage;

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

///////////////////////////////////////////////////////////////

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
        { id: 'medieval-phone', boxClass: '.medieval-images-phone', inactiveImage: './resources/images/1 (17).jfif', activeImage: './resources/blue_thumbnails/armour.png'  },
        { id: 'flaura-phone', boxClass: '.flaura-images-phone', inactiveImage: './resources/flaura/flaura (23).jfif', activeImage: './resources/blue_thumbnails/flaura.png'  },
        { id: 'trinkets-phone', boxClass: '.trinkets-images-phone', inactiveImage: './resources/trinkets/trinkets (2).jfif', activeImage: './resources/blue_thumbnails/trinkets.png'  },
        { id: 'dirt-phone', boxClass: '.dirt-images-phone', inactiveImage: './resources/dirt/dirt (17).jfif', activeImage: './resources/blue_thumbnails/dirt.png' }
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
            trigger.src = box.activeImage;

            setTimeout(function() {
                Array.from(imageBox).forEach(function(imageBoxs) {
                    imageBoxs.style.opacity = 1;
                    scrollToTop();
                });
            }, 50);

        } else {
            // If the box is already active, close it
            setTimeout(function() {
                boxElement.style.display = 'none';
            }, 1000);

            trigger.src = box.inactiveImage;

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
            trigger.src = box.inactiveImage;

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

///////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////