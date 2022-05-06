const arr = Array.from(document.querySelectorAll('.has-tooltip'));
const toolTip = document.querySelector('.tooltip');
let coord = toolTip.getBoundingClientRect();
console.log(coord)



arr.forEach(item => item.addEventListener('click', (e) => {

    toolTip.textContent = e.target.title;
    toolTip.classList.add('tooltip_active');

    let tooltipCoord = e.target.getBoundingClientRect();
    coord.x = tooltipCoord.x
    coord.y = tooltipCoord.y
    toolTip.dataset.position = "bottom";
    toolTip.style = `left: ${tooltipCoord.x}; top: ${tooltipCoord.y}`







    e.preventDefault();


}))

