
const modal = document.querySelector("#modal_main");
modal.classList.add("modal_active");
const modalClose = Array.from(document.querySelectorAll(".modal__close"));
for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener("click", function (event) {
        const tempModal = event.target.closest('.modal');
        tempModal.classList.remove('modal_active');
    })
}

const showSuccess = document.querySelector(".show-success");
const modalSuccess = document.querySelector('#modal_success')

showSuccess.addEventListener("click", function () {
    modal.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
})

