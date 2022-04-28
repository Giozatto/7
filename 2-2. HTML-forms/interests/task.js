
const checkboxs = document.querySelectorAll('.interest__check');
checkboxs.forEach(item => {
    item.addEventListener('change', (e) => {
        const checkMarks = e.target.closest('.interest').querySelectorAll('.interests > .interest');
        checkMarks.forEach(item =>
            item.querySelector('.interest__check').checked = e.target.checked);
    })
})
