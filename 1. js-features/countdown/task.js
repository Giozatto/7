const timer = document.getElementById("timer");

const id = setInterval(countDown, 1000);

function countDown() {
    timer.textContent -= 1
    if (timer.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(id);
    }  
}
