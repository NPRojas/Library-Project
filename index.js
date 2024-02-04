const myLibrary = [];

function Book(title, author, pages, read) {
    //the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.isRead = function () {
   
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
    const readInput = document.querySelector('#read');
    // book object gets added into the list
    const book = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked );
    insertObject(book, myLibrary);

    console.log(book.read);
    //resets form
    const bookForm = document.querySelector('.bookForm');
    bookForm.reset();

    displayBookInfo();
}

// i can replace this with the push method
function insertObject (object, list) {
    let index = list.length;
    list.splice(index, 0, object);
}

function displayBookInfo() {
    const article = document.querySelector('.article');

    const lastBookAdded = myLibrary.slice(-1)[0];
   
    const card = document.createElement('div');
    card.classList.add('card');
    // sets unique id to later target card for deletion
    const bookID = myLibrary.findIndex((element) => element.title == lastBookAdded.title);
    card.setAttribute('id', `${bookID}`);

    const title = document.createElement('h3');
    title.textContent = `${lastBookAdded.title}`;

    const authorDisplay = document.createElement('p');
    authorDisplay.textContent = `By ${lastBookAdded.author}`;

    const pagesDisplay = document.createElement('p');
    pagesDisplay.textContent =  `Pages: ${lastBookAdded.pages}`;
    
    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.classList.add('deleteBtn');
 
    card.appendChild(title);
    card.appendChild(authorDisplay);
    card.appendChild(pagesDisplay);
    card.appendChild(btn);
    article.appendChild(card);

    if (lastBookAdded.read) {
        const readCheck = document.createElement('p');
        readCheck.textContent = 'READ';
        card.appendChild(readCheck);
    };

    btn.addEventListener('click', () => deleteBook(lastBookAdded));
}

function deleteBook(book) {
    const bookID = myLibrary.findIndex((bookListed) => bookListed.title == book.title);
    const card = document.getElementById(`${bookID}`);
    card.remove();
}

initBtns();
 