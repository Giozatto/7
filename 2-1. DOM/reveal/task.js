
// const reveal = Array.from(document.querySelectorAll('.reveal'));

// window.addEventListener('scroll', () => {
//     let windowHeight = window.innerHeight;
//     console.log(windowHeight)
//     for (let i = 0; i < reveal.length; i++) {
//         let coords = reveal[i].getBoundingClientRect();



//     }


//     //если конкретный рект находится в видимой частти viewport-а показат. если нет спряттат

// })


const reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', searchReveal)

function searchReveal() {
    let viewportt = window.innerHeight;
    console.log(viewportt)
    for (let i = 0; i < reveal.length; i++) {
        let rect = reveal[i].getBoundingClientRect();
        console.log(rect)
        if (rect.top <= viewportt && rect.top > 0) {
            reveal[i].classList.add('reveal_active');
        } else {
            reveal[i].classList.remove('reveal_active');
        }
    }
}
