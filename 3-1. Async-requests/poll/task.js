
const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let resp = JSON.parse(xhr.response);

        const title = document.getElementById('poll__title');
        title.textContent = resp.data.title;
        const serverResp = resp.data.answers;
        const answer = document.querySelectorAll('.poll__answer');
        answer.forEach(item => {
            item.remove()
        })


        const answersList = document.getElementById('poll__answers');
        console.log(answersList)

        serverResp.forEach((button) => {
            const item = document.createElement('button');
            item.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
            item.classList.add('poll__answer');
            item.textContent = `${button}`;
            answersList.appendChild(item);
            console.log(item)
        })
    }
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

