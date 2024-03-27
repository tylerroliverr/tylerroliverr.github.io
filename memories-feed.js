// Function to shuffle array elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isSafariOnMac() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes('macintosh') && /safari/.test(userAgent) && !/chrome|android/.test(userAgent);
}

const memories = [
    {
        name: "memories",
        images: [
            { path: "./resources/images/Memories-Thats-Chic/FIRST.webp", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (1).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (2).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (3).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (4).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (5).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (6).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (7).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (8).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (9).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (10).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (11).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (12).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (13).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (14).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (15).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (16).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (17).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (18).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (19).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (20).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (21).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (22).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (23).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (24).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (25).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (26).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (27).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (28).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (29).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (30).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (31).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (32).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (33).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (34).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (35).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (36).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (37).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (38).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (39).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (40).jpg", text: "unsure" },
            { path: "./resources/images/Memories-Thats-Chic/1 (41).jpg", text: "unsure" }
        ]
    }
];

function appendImagesFromMemories() {
    const imageContainer = document.getElementById('memories-feed');

    // Accessing the images array from the 'memories' object
    let images = memories[0].images;

    // Shuffle the array of images
    images = shuffleArray(images);

    if (!isSafariOnMac()) {
        images.forEach(image => {
            const imageBox = document.createElement('div');
            imageBox.classList.add('memories-image-box');

            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('memories-image-wrapper');

            const imgElement = document.createElement('img');
            imgElement.src = image.path;
            imgElement.alt = 'Image from Memories';
            imgElement.classList.add('memories-feed-img');

            imageContainer.appendChild(imageBox);
            imageBox.appendChild(imageWrapper);
            imageWrapper.appendChild(imgElement);
        });
    } else {
        images.forEach(image => {
            const imageBox = document.createElement('div');
            imageBox.classList.add('memories-image-box');

            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('memories-image-wrapper-no-filter');

            const imgElement = document.createElement('img');
            imgElement.src = image.path;
            imgElement.alt = 'Image from Memories';
            imgElement.classList.add('memories-feed-img');

            imageContainer.appendChild(imageBox);
            imageBox.appendChild(imageWrapper);
            imageWrapper.appendChild(imgElement);
        });
    }
}

// Call the function to append images from 'memories'
appendImagesFromMemories();







// // Function to make the API request and display images
// async function getImages() {
//     const apiUrl = "https://api.are.na/v2/channels/outdoors-yyishpxv9_g/contents?direction=desc&sort=position&page=0&per=50";

//     try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         const imageContainer = document.getElementById('memories-feed');

//         // Assuming that the images are stored in the 'contents' key
//         let images = data.contents.filter(block => block.image && block.image.display && block.image.display.url).map(block => block.image.display.url);

//         // Shuffle the array of image URLs
//         images = shuffleArray(images);

//         if (!isSafariOnMac()) {
//             // Display the images in the image container
//             images.forEach(url => {
//                 const imageBox = document.createElement('div');
//                 imageBox.classList.add('memories-image-box');

//                 const imageWrapper = document.createElement('div');
//                 imageWrapper.classList.add('memories-image-wrapper');

//                 const imgElement = document.createElement('img');
//                 imgElement.src = url;
//                 imgElement.alt = 'Image from Arena API';
//                 imgElement.classList.add('memories-feed-img');

//                 imageContainer.appendChild(imageBox);
//                 imageBox.appendChild(imageWrapper);
//                 imageWrapper.appendChild(imgElement);
//             });
//         } else {
//             images.forEach(url => {
//                 const imageBox = document.createElement('div');
//                 imageBox.classList.add('memories-image-box');

//                 const imageWrapper = document.createElement('div');
//                 imageWrapper.classList.add('memories-image-wrapper-no-filter');

//                 const imgElement = document.createElement('img');
//                 imgElement.src = url;
//                 imgElement.alt = 'Image from Arena API';
//                 imgElement.classList.add('memories-feed-img');

//                 imageContainer.appendChild(imageBox);
//                 imageBox.appendChild(imageWrapper);
//                 imageWrapper.appendChild(imgElement);
//             });
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Call the function to get and display images
// getImages();










// --------------------------------------------------------- START RGBA FILTER CALCS ------------------------------ //

const originalRGBA = {
    red: 20,
    green: 40,
    blue: 210,
    alpha: 1
};

// Calculate the normalized RGBA values
const normalizedRGBA = {
    r: originalRGBA.red / 255,
    g: originalRGBA.green / 255,
    b: originalRGBA.blue / 255,
    a: originalRGBA.alpha / 255
};

['R', 'G', 'B', 'A'].forEach(component => {
    const feFuncElement = document.createElementNS('http://www.w3.org/2000/svg', 'feFunc' + component);
    feFuncElement.setAttribute('type', 'table');

    // Concatenate with a space, ensuring normalizedRGBA is a number
    feFuncElement.setAttribute('tableValues', normalizedRGBA[component.toLowerCase()] + ' 1');

    // Check if feComponentTransfer exists before appending
    const feComponentTransfer = document.querySelector('#duotone-component');
    if (feComponentTransfer) {
        feComponentTransfer.appendChild(feFuncElement);
    } else {
        console.error('feComponentTransfer not found');
    }
});


// --------------------------------------------------------- START GSAP ANIMATIONS ------------------------------ //
gsap.registerPlugin(ScrollTrigger);

gsap.to(".fade-in", 2.5, {
    opacity: 1,
});

gsap.to(".rotating-hero-div", {
    scrollTrigger: {
        trigger: ".after-hero",
        // markers: true,
        scrub: 2,
        start: "50% 80%",
        end: "bottom top",
    },
    opacity: 0,
    duration: 1.5
});

gsap.from(".prologue-svg", {
    scrollTrigger: {
        trigger: ".after-hero",
        // markers: true,
        scrub: 2,
        start: "90% 50%",
        end: "bottom top",
    },
    opacity: 0,
    duration: 1.5
});

gsap.from(".nav-div", {
    scrollTrigger: {
        trigger: ".after-prologue",
        // markers: true,
        scrub: 2,
        start: "80% 65%",
        end: "bottom 50%",
    },
    opacity: 0,
    duration: 1.5
});

gsap.from("#memories-feed", {
    scrollTrigger: {
        trigger: ".before-memories",
        // markers: true,
        scrub: 2,
        start: "top 50%",
        end: "90% 20%",
    },
    opacity: 0,
    duration: 1.5
});

gsap.from(".logo-svg", {
    scrollTrigger: {
        trigger: ".after-nav",
        // markers: true,
        scrub: 2,
        start: "bottom 30%",
        end: "bottom top",
    },
    opacity: 0,
    duration: 1.5
});

gsap.from(".full-logo-svg", {
    scrollTrigger: {
        trigger: ".after-nav",
        // markers: true,
        scrub: 2,
        start: "bottom 30%",
        end: "bottom top",
    },
    opacity: 0,
    duration: 1.5
});