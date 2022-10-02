//bg,text,redline
let bg = document.getElementById("bg");
let text = document.getElementById("text");
let redline = document.getElementById("redline");
let btn = document.getElementById("btn");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    redline.style.top = value*0.3 + "px";
    bg.style.top = value + "px";
    text.style.marginBottom = value*0.1 + "px";
})


//slideshow
let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


console.log("hello");