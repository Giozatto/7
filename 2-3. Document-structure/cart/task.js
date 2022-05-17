const productPlus = Array.from(document.querySelectorAll('.product__quantity-control_inc')); /* + */
const productMinus = Array.from(document.querySelectorAll('.product__quantity-control_dec')); /* - */
const addProduct = Array.from(document.querySelectorAll('.product__add')); /*Кнопка добавить*/
const busket = document.querySelector('.cart');
const cartProduct = document.querySelector('.cart__products'); /*разметка добавленного в корзину товара*/

// При нажатии на + увеличивает кол-во на 1
for (let i = 0; i < productPlus.length; i++) {
    productPlus[i].addEventListener('click', (e) => {
        let value = e.target.closest('.product__controls').querySelector('.product__quantity-value');
        let number = Number(value.textContent);
        number++;
        value.textContent = number;
    });
}

// При нажатии на - уменьшает кол-во на 1
for (let i = 0; i < productMinus.length; i++) {
    productMinus[i].addEventListener('click', (e) => {
        let value = e.target.closest('.product__controls').querySelector('.product__quantity-value');
        let number = Number(value.textContent);
        if (number === 1) { /* Не позволяю выбирать пользовотелю выбрать ноль позиций  */
            return;
        }
        number--;
        value.textContent = number;
    });
}

const product = document.createElement('div');

// При нажатии на кнопку добавляет продукт в корзину
for (let i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener('click', (e) => {

        let quantity = e.target.closest('.product').querySelector('.product__quantity-value').textContent;
        let image = e.target.closest('.product').querySelector('img');
        let id = e.target.closest('.product').dataset.id;
        let cart = document.createElement('div');

        const arr = Array.from(busket.lastElementChild.children);
        const currItem = arr.find(item => item.dataset.id == id);

        if (currItem !== undefined) {
            let quan = currItem.querySelector('.cart__product-count').textContent;
            quan = Number(quan);
            quan += Number(quantity);
            currItem.querySelector('.cart__product-count').textContent = quan;
            e.target.closest('.product').querySelector('.product__quantity-value').textContent = 1;
            return;
        }

        cart.classList.add("cart__product");
        cart.dataset.id = id;
        cart.innerHTML = `
        <img class="cart__product-image" src="${image.src}">
        <div class="remove">x</div>
        <div class="cart__product-count">${quantity}</div>`;

        cartProduct.appendChild(cart);
        e.target.closest('.product').querySelector('.product__quantity-value').textContent = 1;

        const removeCart = cartProduct.lastChild.querySelector('.remove');

        removeCart.addEventListener('click', (e) => {
            e.target.closest('.cart__product').remove();
        })
    })
}
