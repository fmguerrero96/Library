const newBookBtn = document.querySelector('#newBookBtn')
const submitBook = document.querySelector('#submitBook')

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
    let newBook = new Book(title, author, pages, read)
    console.log(newBook)
}

newBookBtn.addEventListener('click', function(){
    const newBookForm = document.querySelector('#newBookForm')
    newBookForm.style.display = 'block'
})

submitBook.addEventListener('click', function(event){
    event.preventDefault()
    addBookToLibrary()
})