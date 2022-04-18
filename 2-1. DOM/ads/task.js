
const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;
let intrvalID = null
function changeClass() {

    rotator[index].classList.remove('rotator__case_active');
    index++;
    if (index == rotator.length) {
        index = 0;
    }
    let colour = rotator[index].getAttribute('data-color');
    let speed = rotator[index].getAttribute('data-speed');
    rotator[index].classList.add('rotator__case_active');
    rotator[index].style.color = colour;

    setTimeout(changeClass, speed);
}

setTimeout(changeClass, 1000);