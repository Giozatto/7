const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
            progress.value = (e.loaded * 100) / e.total;
        }
    });

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    const formData = new FormData(form);
    xhr.send(formData);
})
