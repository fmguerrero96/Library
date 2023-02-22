const newBookBtn = document.querySelector('#newBookBtn')
const submitBook = document.querySelector('#submitBook')

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

Book.prototype.toggleRead = function(){
    this.read = !this.read
}

function toggleRead(index){
    myLibrary[index].toggleRead();
    renderBooks();
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
            <p class='bookTilte'>Title: ${book.title}</p>
            <p class='bookAuthor'>By: ${book.author}</p>
            <p class='bookPages'>Pages: ${book.pages}</p>
            <p class='readStatus'>${book.read ? "Read" : "Not Read Yet"}</p>
            <button class="deleteBtn" onclick='deleteBook(${i})'>Delete</button>
            <button class="readStatus" onclick='toggleRead(${i})'>Read Status</button>
        `
        booksContainer.appendChild(bookElem);
    }
}

function deleteBook(index){
    myLibrary.splice(index, 1);
    renderBooks();
}

newBookBtn.addEventListener('click', function(){
    const newBookForm = document.querySelector('#newBookForm')
    newBookForm.style.display = 'block'
})

submitBook.addEventListener('click', function(event){
    event.preventDefault()
    addBookToLibrary()
    newBookForm.style.display = 'none'
    title.value = ''
    author.value = ''
    pages.value = ''
})