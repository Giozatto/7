const addProduct = Array.from(document.querySelectorAll('.product__quantity-control_inc'));

const delProduct = Array.from(document.querySelectorAll('.product__quantity-control_dec'));

const c = Array.from(document.querySelector('.product__add')); /*Кнопка добавить*/

const product = Array.from(document.querySelectorAll('.product'));

const cart = document.querySelector('.cart');

let cartProducts = document.querySelector('.cart__products');

cartProducts = `<div class="cart__product" data-id="1">
                    <img class="cart__product-image" src="image.png">
                    <div class="cart__product-count">20</div>
                </div>`



for (let i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener('click', (e) => {
        let value = e.target.closest('.product__controls').querySelector('.product__quantity-value');
        let number = Number(value.textContent);
        number++;
        value.textContent = number;
    });
}



for (let i = 0; i < delProduct.length; i++) {
    delProduct[i].addEventListener('click', (e) => {
        let value = e.target.closest('.product__controls').querySelector('.product__quantity-value');
        let number = Number(value.textContent);
        if (number === 0) {
            return;
        }
        number--;
        value.textContent = number;
    });
}

for (let i = 0; i < addProducts.length; i++) {
    addProducts[i].addEventListener('click', (e) => {
        let product = e.target.closest('.product');
    })
}
