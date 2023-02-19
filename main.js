const newBookBtn = document.querySelector('#newBookBtn')
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
}

newBookBtn.addEventListener('click', function(){
    const newBookForm = document.querySelector('#newBookForm')
    newBookForm.style.display = 'block'
})