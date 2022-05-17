const card = document.querySelector('.card');
const editor = document.getElementById('editor');

editor.addEventListener('keyup', (e) => {
    localStorage.setItem('text', editor.value);
})

editor.value = localStorage.getItem('text');

const button = document.querySelector('button');
button.addEventListener('click', () => {
    localStorage.clear();
    editor.value = '';
})


