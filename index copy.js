const myLibrary = [];

function Book(title, author, pages) {
    //the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.isRead = function () {
   alert('This is a test');
}

function initBtns() {
    const addBookBtn = document.querySelector('.addBookBtn');

    addBookBtn.addEventListener('click', () => {

        const addBookForm = document.querySelector('.addBookForm');
        addBookForm.showModal();
   
        const closeBtn = document.querySelector('.closeBtn');
        closeBtn.onclick = () => addBookForm.close();

        const bookForm = document.querySelector('.bookForm');
        bookForm.addEventListener('submit', addBookToLibrary, true);
    })
}

function addBookToLibrary(event) {
    event.preventDefault();
    // this is where the input will be turned into an object
    const titleInput = document.querySelector('#bookTitle');
    const authorInput = document.querySelector('#author');
    const pagesInput = document.querySelector('#numOfPages');
    // book object gets added into the list
    const book = new Book(titleInput.value, authorInput.value, pagesInput.value);
    insertObject(book, myLibrary);
    //resets form
    const bookForm = document.querySelector('.bookForm');
    bookForm.reset();

    displayBookInfo();
}

function insertObject (object, list) {
    let index = list.length;
    list.splice(index, 0, object);
}

function displayBookInfo() {
    const article = document.querySelector('.article');

    const lastBookAdded = myLibrary.slice(-1)[0];
   
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.textContent = `${lastBookAdded.title}`;

    const authorDisplay = document.createElement('p');
    authorDisplay.textContent = `By ${lastBookAdded.author}`;

    const pagesDisplay = document.createElement('p');
    pagesDisplay.textContent =  `Pages: ${lastBookAdded.pages}`;

    card.appendChild(title);
    card.appendChild(authorDisplay);
    card.appendChild(pagesDisplay);
    article.appendChild(card);
}

initBtns();
 