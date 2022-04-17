let value = document.querySelector('.dropdown__value');
const ul = document.querySelector('.dropdown__list');
const languages = document.querySelectorAll('.dropdown__item');

for (let i = 0; i < languages.length; i++) {
    languages[i].addEventListener('click', function (event) {
        ul.classList.remove('dropdown__list_active');
        value.textContent = event.target.textContent;
        event.preventDefault();
    })
}
value.addEventListener('click', function () {
    ul.classList.add('dropdown__list_active');
});