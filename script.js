const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

body.addEventListener("mousemove", function(dets){
    cursor.style.left = `${dets.x + 0}px`;
    cursor.style.top = `${dets.y + 0}px`;
})