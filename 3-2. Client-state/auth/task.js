
const form = document.getElementById('signin__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            let resp = JSON.parse(xhr.response);
            if (resp.success == true) {
                let id = resp.user_id;
                localStorage.setItem('id', id);
                const userId = document.getElementById('user_id');
                userId.textContent = id;
                const welcome = document.getElementById('welcome');
                welcome.classList.add('welcome_active');
            } else {
                alert('Неверный логин/пароль');
            }
        }
    })
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    const formData = new FormData(form);
    xhr.send(formData);
})

window.addEventListener('load', () => {
    let id = localStorage.getItem('id');
    if (id !== undefined) {
        const userId = document.getElementById('user_id');
        userId.textContent = id;
        const welcome = document.getElementById('welcome');
        welcome.classList.add('welcome_active');
    }
})