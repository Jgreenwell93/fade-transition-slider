//es5+es6
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


//pure es6
// const slides = document.querySelectorAll('.slide');
// let currentIndex = 0;
// const slideDuration = 10000; // 10 seconds

// const showSlide = index => {
//   slides.forEach((slide, i) => {
//     slide.classList.toggle('active', i === index);
//   });
// };

// const nextSlide = () => {
//   currentIndex = (currentIndex + 1) % slides.length;
//   showSlide(currentIndex);
// };

// // Initial display
// showSlide(currentIndex);

// // Auto-slide every 10 seconds
// setInterval(nextSlide, slideDuration);

//pure es5
// var slides = document.querySelectorAll('.slide');
// var currentIndex = 0;
// var slideDuration = 10000; // 10 seconds

// function showSlide(index) {
//   for (var i = 0; i < slides.length; i++) {
//     var slide = slides[i];
//     if (i === index) {
//       slide.classList.add('active');
//     } else {
//       slide.classList.remove('active');
//     }
//   }
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % slides.length;
//   showSlide(currentIndex);
// }

// // Initial display
// showSlide(currentIndex);

// // Auto-slide every 10 seconds
// setInterval(nextSlide, slideDuration);

