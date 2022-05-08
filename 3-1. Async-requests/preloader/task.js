
const img = document.getElementById('loader')
const items = document.getElementById('items')

let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        img.classList.remove('loader_active')
        let resp = JSON.parse(xhr.response)

        for (let key in resp.response.Valute) {

            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `<div class="item__code">
                        ${resp.response.Valute[key].CharCode}
                        </div>
                        <div class="item__value">
                        ${resp.response.Valute[key].Value}
                        </div>
                        <div class="item__currency">
                               руб.
                        </div>`;
            items.appendChild(item);
        }
    }
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();


