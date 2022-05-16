const progress = document.getElementById('progress');
const form = document.getElementById('form');
const formData = new FormData(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (e) => {

        if (e.lengthComputable) {
            progress.value = e.total / 10
        }
    });

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
})