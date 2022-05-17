const arr = Array.from(document.querySelectorAll('.has-tooltip')); /*Массив подсказок*/
const toolTip = document.querySelector('.tooltip'); /*Подсказка*/
let coord = toolTip.getBoundingClientRect(); /*Координаты подсказки*/

let prevItem;

arr.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();

    if (prevItem == e.target) {
        toolTip.classList.toggle('tooltip_active');
        return;
    }

    toolTip.classList.add('tooltip_active');
    toolTip.textContent = e.target.title;

    let tooltipCoord = e.target.getBoundingClientRect(); /*Координаты клика*/
    coord = toolTip.getBoundingClientRect();

    toolTip.style.top = `${tooltipCoord.y + tooltipCoord.height}px`;
    toolTip.style.left = `${tooltipCoord.x + ((tooltipCoord.width - coord.width) / 2)}px`;

    prevItem = e.target;
}))

