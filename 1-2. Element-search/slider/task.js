const images = Array.from(document.querySelectorAll('.slider__item'));
const leftButton = document.querySelector('.slider__arrow_prev');
const rightButton = document.querySelector('.slider__arrow_next');
const dots = Array.from(document.querySelectorAll('.slider__dot'))
rightButton.addEventListener('click', changeNextSlide);
leftButton.addEventListener('click', changePrevSlide);

let index = 0;
let dotIndex = 0;
dots[index].classList.add('slider__dot_active');

dots.forEach(item => item.addEventListener('click', changeDot));

function changeNextSlide() {
    let newIndex = index + 1;
    if (newIndex == images.length) {
        newIndex = 0
    }
    slider(newIndex);
}

function changePrevSlide() {
    let newIndex = index - 1
    if (newIndex < 0) {
        newIndex = images.length - 1;
    }
    slider(newIndex);
}

function changeDot(event) {
    let newIndex = dots.indexOf(event.target)
    slider(newIndex);
}

function slider(newIndex) {
    images[index].classList.remove('slider__item_active');
    dots[index].classList.remove('slider__dot_active');
    index = newIndex;
    images[index].classList.add('slider__item_active');
    dots[index].classList.add('slider__dot_active');
}