const kills = document.getElementById("dead");
const misses = document.getElementById("lost");
const holes = document.getElementsByClassName("hole");
let arr = Array.from(holes);
for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = catchMole;
}

function catchMole(event) {
    if (event.target.className.includes("hole_has-mole")) {
        kills.textContent++;
        if (kills.textContent == 10) {
            showMessage("Вы победили");
        }
    } else {
        misses.textContent++;
        if (misses.textContent == 5) {
            showMessage("Вы проиграли");
        }
    }
}

function showMessage(text) {
    alert(text);
    kills.textContent = 0;
    misses.textContent = 0;
}