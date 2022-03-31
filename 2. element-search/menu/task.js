
const addClass = document.querySelectorAll('.menu__link');
addClass.forEach(item => item.onclick = openMenu);

let prevClick = null;

function openMenu(event) {

    let item = event.target.closest('.menu__item').querySelector('.menu_sub');
    if (item != null) {
        item.classList.toggle('menu_active');
        if (prevClick != null) {
            prevClick.classList.toggle('menu_active');
        }
        prevClick = item;
        return false;
    }
}