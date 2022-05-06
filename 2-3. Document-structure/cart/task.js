const productPlus = Array.from(document.querySelectorAll('.product__quantity-control_inc')); /* + */
const productMinus = Array.from(document.querySelectorAll('.product__quantity-control_dec')); /* - */
const addProduct = Array.from(document.querySelectorAll('.product__add')); /*Кнопка добавить*/
// const products = Array.from(document.querySelectorAll('.products')); /*Список продуктов*/
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
        if (number === 0) {
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
        cart.innerHTML = `<div class="cart__product" ${id}>
        <img class="cart__product-image" src="${image.src}">
        <div class="remove">x</div>
        <div class="cart__product-count">${quantity}</div>
        
    </div>`;
        cartProduct.appendChild(cart);
        const removeCart = cartProduct.querySelector('.remove');
        removeCart.addEventListener('click', (e) => {
            e.target.closest('.cart__product').remove();
        })

        console.log(removeCart)
    })

}
