let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Move to next slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  // Show current slide
  slides[slideIndex-1].style.display = "block";  

  // Change image every 2 seconds
  setTimeout(showSlides, 2000);
}