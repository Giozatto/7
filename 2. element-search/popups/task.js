
const modal = document.querySelector("#modal_main");
modal.classList.add("modal_active");
const modalClose = document.querySelector(".modal__close");

modalClose.addEventListener("click", function () {
    modal.classList.remove("modal_active");
})

const showSuccess = document.querySelector(".show-success");
const modalSuccess = document.querySelector('#modal_success')

showSuccess.addEventListener("click", function () {
    modalSuccess.classList.add("modal_active");
})