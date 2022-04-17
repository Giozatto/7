const books = Array.from(document.querySelectorAll('.font-size'));
const fz = document.getElementById('book');
for (let i = 0; i < books.length; i++) {
    books[i].addEventListener('click', handler);
}

let index = 1;
let lastClass = null;
function handler(event) {
    if (lastClass != null)
        fz.classList.remove(lastClass)
    lastClass = null;
    books[index].classList.remove('font-size_active');
    let booksIndex = books.indexOf(event.target);
    index = booksIndex;
    if (books[index].classList.contains('font-size_big')) {
        fz.classList.add('book_fs-big');
        books[index].classList.add('font-size_active');
        lastClass = 'book_fs-big';
    }
    else if (books[index].classList.contains('font-size_small')) {
        fz.classList.add('book_fs-small');
        books[index].classList.add('font-size_active')
        lastClass = 'book_fs-small';
    }
    books[index].classList.add('font-size_active')
    event.preventDefault();
}