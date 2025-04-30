//es5
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const slideDuration = 10000; // 10 seconds

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, slideDuration);
