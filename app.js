var myIndex = 0;
var myIndex2 = 0;
carouselImages();
carouselText();

function carouselImages() {
   var i;
   var x = document.getElementsByClassName("cycling-image");
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }
   myIndex++;
   if (myIndex > x.length) { myIndex = 1 }
   x[myIndex - 1].style.display = "block";
   setTimeout(carouselImages, 1300); //1000 = 1 second
}

function carouselText() {
   var i2;
   var x2 = document.getElementsByClassName("cycling-text");
   for (i2 = 0; i2 < x2.length; i2++) {
      x2[i2].style.display = "none";
   }
   myIndex2++;
   if (myIndex2 > x2.length) { myIndex2 = 1 }
   x2[myIndex2 - 1].style.display = "block";
   setTimeout(carouselText, 1300); //1000 = 1 second
}