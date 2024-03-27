// ------------------------------------------------------------------------ START STICKY NAV HOVER --------------------------------- //
const stickyElement = document.getElementById('sticky-nav');
const hoverContainer = document.querySelector('.hoverContainer');
const hoverFixedContainer = document.querySelector('.hover-fixed-container');

const memoriesHoverText = document.getElementById('memories-text');
const memoriesHoveredImage = document.getElementById('memories-hover');
const chaosHoverText = document.getElementById('chaos-text');
const chaosHoveredImage = document.getElementById('chaos-hover');
const systemHoverText = document.getElementById('system-text');
const systemHoveredImage = document.getElementById('system-hover');

const memoriesActiveText = document.querySelector('.memories-active-text');

function handleMouseMove(event, imageElement) {

    var x = event.clientX;
    var y = event.clientY;

    hoverContainer.style.transform = 'translate(' + (x - hoverContainer.clientWidth / 2) + 'px, ' + (y - hoverContainer.clientHeight / 2) + 'px)';

    clearTimeout(handleMouseMove.leaveTimeout); // clear to prevent 'stuck' images
    handleMouseMove.leaveTimeout = setTimeout(function () { // to allow for center hover popup (instead of top and left 0)
        hoverFixedContainer.style.left = '0';
        hoverFixedContainer.style.top = '0';
        hoverFixedContainer.style.visibility = 'visible';
        imageElement.style.visibility = 'visible';
        imageElement.style.opacity = '1';
    }, 100);

}

function handleMouseLeave(imageElement) {
    clearTimeout(handleMouseMove.leaveTimeout); // clear to prevent 'stuck' images
    imageElement.style.visibility = 'hidden';
    imageElement.style.opacity = '0';
    hoverFixedContainer.style.visibility = 'hidden';
}

let listenersAdded = false; // variable to keep track of listeners added

function addEventListeners() {
    memoriesHoverText.addEventListener('mousemove', (event) => handleMouseMove(event, memoriesHoveredImage));
    memoriesHoverText.addEventListener('mouseleave', () => handleMouseLeave(memoriesHoveredImage));

    chaosHoverText.addEventListener('mousemove', (event) => handleMouseMove(event, chaosHoveredImage));
    chaosHoverText.addEventListener('mouseleave', () => handleMouseLeave(chaosHoveredImage));

    systemHoverText.addEventListener('mousemove', (event) => handleMouseMove(event, systemHoveredImage));
    systemHoverText.addEventListener('mouseleave', () => handleMouseLeave(systemHoveredImage));
}

function removeEventListeners() {
    const originalMouseMoveHandler = (event) => handleMouseMove(event, memoriesHoveredImage);
    const originalMouseLeaveHandler = () => handleMouseLeave(memoriesHoveredImage);

    const chaosOriginalMouseMoveHandler = (event) => handleMouseMove(event, chaosHoveredImage);
    const chaosOriginalMouseLeaveHandler = () => handleMouseLeave(chaosHoveredImage);

    const systemOriginalMouseMoveHandler = ('mousemove', (event) => handleMouseMove(event, systemHoveredImage));
    const systemOriginalMouseLeaveHandler = ('mouseleave', () => handleMouseLeave(systemHoveredImage));
    // Remove Memories listeners
    memoriesHoverText.removeEventListener('mousemove', originalMouseMoveHandler);
    memoriesHoverText.removeEventListener('mouseleave', originalMouseLeaveHandler);

    // Remove Chaos listeners
    chaosHoverText.removeEventListener('mousemove', chaosOriginalMouseMoveHandler);
    chaosHoverText.removeEventListener('mouseleave', chaosOriginalMouseLeaveHandler);

    // Remove System listeners
    systemHoverText.removeEventListener('mousemove', systemOriginalMouseMoveHandler);
    systemHoverText.removeEventListener('mouseleave', systemOriginalMouseLeaveHandler);
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (!listenersAdded) {
                addEventListeners();
                console.log('Event listeners added ' + listenersAdded);
                listenersAdded = true;
            }
            memoriesActiveText.classList.remove('active');
            // console.log('NOT sticky');
        } else {
            if (listenersAdded) {
                removeEventListeners();
                console.log('Event listeners removed ' + listenersAdded);
                listenersAdded = false;
            }
            // console.log('STUCK');
            memoriesActiveText.classList.add('active');
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    rootMargin: '-1px 0px 0px 0px',
    threshold: [1],
});

observer.observe(stickyElement); // observing sticky element, checking for sticky position changes
// ------------------------------------------------------------------------ END STICKY NAV HOVER --------------------------------- //