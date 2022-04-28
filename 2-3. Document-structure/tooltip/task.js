const arr = Array.from(document.querySelectorAll('.has-tooltip'));
const toollTip = document.querySelector('.tooltip');
let coord = toollTip.getBoundingClientRect();


for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', (e) => {

        toollTip.textContent = e.target.title;
        toollTip.classList.add('tooltip_active');
        // let arrCoord = e.getBoundingClientRect();
        // coord = arrCoord;


        e.preventDefault();


    })
}

