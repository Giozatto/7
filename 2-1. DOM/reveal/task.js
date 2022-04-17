
const reveal = Array.from(document.querySelectorAll('.reveal'));

const rect = reveal[0].getBoundingClientRect();
console.log(rect)

window.addEventListener('scroll', () => {

    for (let rect in reveal) {
        //если конкретный рект находится в видимой частти viewport-а показат. если нет спряттат
    }
})


