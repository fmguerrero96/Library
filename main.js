const newBookBtn = document.querySelector('#newBookBtn')
const submitBook = document.querySelector('#submitBook')
const modal = document.querySelector('.modal')

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
            <p class='bookTitle'> <span class="cardLabel">Title: </span>${book.title}</p>
            <p class='bookAuthor'> <span class="cardLabel">By: </span>${book.author}</p>
            <p class='bookPages'> <span class="cardLabel">Pages: </span>${book.pages}</p>
            <p class='readStatus'>${book.read ? "Read" : "Not Read Yet"}</p>
            <div class="cardBtns">
                <button class="readBtn" onclick='toggleRead(${i})'>Read Status</button>
                <button class="deleteBtn" onclick='deleteBook(${i})'>Delete</button>
            </div>
        `
        booksContainer.appendChild(bookElem);
    }
}

function deleteBook(index){
    myLibrary.splice(index, 1);
    renderBooks();
}

newBookBtn.addEventListener('click', function(){
    modal.showModal();
})

submitBook.addEventListener('click', function(event){
    event.preventDefault()
    addBookToLibrary()
    modal.close()
    title.value = ''
    author.value = ''
    pages.value = ''
})