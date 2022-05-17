const modal = document.getElementById('subscribe-modal');
const closeModal = document.querySelector('.modal__close');

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie("popup_state", "closed");
})

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(cook => cook.startsWith(name + '='));
    let spl = cookie.split('=');
    return spl[1];
}

window.addEventListener('load', () => {
    let state = getCookie("popup_state")
    if (state !== 'closed') {
        modal.classList.add('modal_active');
    }
})