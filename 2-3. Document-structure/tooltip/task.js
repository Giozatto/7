const arr = Array.from(document.querySelectorAll('.has-tooltip')); /*Массив подсказок*/
const toolTip = document.querySelector('.tooltip'); /*Подсказка*/
let coord = toolTip.getBoundingClientRect(); /*Координаты подсказки*/


arr.forEach(item => item.addEventListener('click', (e) => {
    toolTip.textContent = e.target.title;
    toolTip.classList.toggle('tooltip_active');
    let tooltipCoord = e.target.getBoundingClientRect(); /*Координаты клика*/
    coord = toolTip.getBoundingClientRect();

    toolTip.style.top = `${tooltipCoord.y + tooltipCoord.height}px`;
    toolTip.style.left = `${tooltipCoord.x + ((tooltipCoord.width - coord.width) / 2)}px`;
    prevItem = e.target;



    e.preventDefault();
}))

