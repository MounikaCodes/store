const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const slides = Math.ceil(carouselSlide.children.length / 2);
let counter = 0;

nextBtn.addEventListener('click', () => {
  if (counter >= slides - 1) return;
  counter++;
  carouselSlide.style.transform = `translateX(${-counter * 50}%)`;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transform = `translateX(${-counter * 50}%)`;
});
