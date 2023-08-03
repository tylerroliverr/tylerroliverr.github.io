document.addEventListener("mousemove", parallax);
document.addEventListener("mousemove", parallaxTwo);

function parallax(event) {
   this.querySelectorAll(".mouse").forEach((shift) => {
      const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
   });
}

function parallaxTwo(event) {
   this.querySelectorAll(".mouseTwo").forEach((shift) => {
      const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 60;
        const y = (window.innerHeight - event.pageY * position) / 60;
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
   });
}

const showImage1 = document.querySelector(".image1");
const showImage2 = document.querySelector(".image2");
const showImage3 = document.querySelector(".image3");
const showImage4 = document.querySelector(".image4");
const grid1 = document.querySelector(".first");
const grid2 = document.querySelector(".second");
const grid3 = document.querySelector(".third");
const grid4 = document.querySelector(".fourth");

const handleHoverOnOne = () => {
   showImage1.style.opacity = 1;
   console.log("on");
};

const handleHoverOffOne = () => {
   showImage1.style.opacity = 0;
   console.log("off")
};

const handleHoverOnTwo = () => {
   showImage2.style.opacity = 1;
   console.log("on");
};

const handleHoverOffTwo = () => {
   showImage2.style.opacity = 0;
   console.log("off")
};

const handleHoverOnThree = () => {
   showImage3.style.opacity = 1;
   console.log("on");
};

const handleHoverOffThree = () => {
   showImage3.style.opacity = 0;
   console.log("off")
};

const handleHoverOnFour = () => {
   showImage4.style.opacity = 1;
   console.log("on");
};

const handleHoverOffFour = () => {
   showImage4.style.opacity = 0;
   console.log("off")
};

grid1.addEventListener("mouseover", handleHoverOnOne);
grid1.addEventListener("mouseout", handleHoverOffOne);
grid2.addEventListener("mouseover", handleHoverOnTwo);
grid2.addEventListener("mouseout", handleHoverOffTwo);
grid3.addEventListener("mouseover", handleHoverOnThree);
grid3.addEventListener("mouseout", handleHoverOffThree);
grid4.addEventListener("mouseover", handleHoverOnFour);
grid4.addEventListener("mouseout", handleHoverOffFour);
