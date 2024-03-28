// Function to shuffle array elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to make the API request and display images
async function getImages() {
    const apiUrl = "https://api.are.na/v2/channels/arts-and-crafts-igaom0xku-e/contents?direction=desc&sort=position&page=0&per=100";
    
    const columnCount = 5; // Number of columns
    const minGap = 4; // Minimum gap in rems between images
    const emptyDivChance = 0.3; // Chance of an empty div being inserted
    
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        const imageContainers = document.querySelectorAll('.chaos-column');
        
        const imageBoxes = [];
        // Assuming that the images are stored in the 'contents' key
        let images = data.contents.filter(block => block.image && block.image.display && block.image.display.url).map(block => block.image.display.url);
        
        // Shuffle the array of image URLs
        images = shuffleArray(images);
        
        // Create image boxes with img elements
        images.forEach(url => {
            const imageBox = document.createElement('div');
            imageBox.classList.add('chaos-image-box');
            
            const imgElement = document.createElement('img');
            imgElement.src = url;
            imgElement.alt = 'Image from API';
            imgElement.classList.add('chaos-feed-img');
            
            imageBox.appendChild(imgElement);
            imageBoxes.push(imageBox);
        });
        
        // Shuffle all image boxes (including empty divs)
        imageBoxes.sort(() => Math.random() - 0.5);
        
        // Distribute image boxes across columns
        let columnIndex = 0;
        const columnWidth = 100 / columnCount;
        imageBoxes.forEach(imageBox => {
            const column = imageContainers[columnIndex];
            column.appendChild(imageBox);
            const gap = getRandomGap(minGap);
            // imageBox.style.marginBottom = `${gap}rem`;
            // imageBox.style.marginTop = `${getRandomGap(minGap)}rem`;
            columnIndex = (columnIndex + 1) % columnCount;
        });

        slideFromRight();
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function getRandomGap(minGap) {
    return Math.floor(Math.random() * minGap) + minGap;
}

// Call the function to get and display images
getImages();

function slideFromRight() {
    const chaosFeed = document.getElementById('chaos-feed');
    const loaderChaos = document.querySelector('.loading-chaos');
    chaosFeed.classList.add('active');
    loaderChaos.style.opacity = '0';
}