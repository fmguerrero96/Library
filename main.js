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
    myLibrary.push(newBook);
    renderBooks();
}

function renderBooks(){
    let booksContainer = document.querySelector('.container');
    booksContainer.textContent = ''
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookElem = document.createElement('div');
        bookElem.className = 'bookCard'
        bookElem.innerHTML = `
            <p class='bookTilte'>${book.title}</p>
            <p class='bookAuthor'>by: ${book.author}</p>
            <p class='bookPages'>${book.pages}</p>
            <p class='readStatus'>${book.read ? "Read" : "Not Read Yet"}</p>
        `
        booksContainer.appendChild(bookElem);
    }
}

newBookBtn.addEventListener('click', function(){
    const newBookForm = document.querySelector('#newBookForm')
    newBookForm.style.display = 'block'
})

submitBook.addEventListener('click', function(event){
    event.preventDefault()
    addBookToLibrary()
})