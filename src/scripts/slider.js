const buttons = document.querySelectorAll('[data-direction]');
const sliderContainer = document.querySelector('.slider__items');
const sliderIndicators = document.querySelectorAll('[data-indicator]')
const slideWidth = 1440;
let slidePosition = 0


function changeSlide(direction) {
  if (direction === "previous") {
    slidePosition += slideWidth;
    if (slidePosition > 0 ) {
      sliderContainer.style.transform = 'translateX(-2880px)';
      slidePosition = -2880;
    }
    sliderContainer.style.transform = `translateX(${slidePosition}px)`;
  } else {
    slidePosition -= slideWidth;
    if (slidePosition < -2880) {
      sliderContainer.style.transform = "translateX(0)";
      slidePosition = 0;
    }
    sliderContainer.style.transform = `translateX(${slidePosition}px)`;
  }
}

function addClassIndicatorActive (indicator) {
  
}

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    changeSlide(e.target.dataset.direction);
  });
});

Array.from(sliderIndicators).forEach((indicator) => {
  indicator.addEventListener('click', (e) => {
    addClassIndicatorActive(e.target.dataset.indicator);
  });
});

