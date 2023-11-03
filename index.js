const myLibrary = ['The Lonely Giant', 'Life is Overwhemling', 'I Wish I Had Help', 'Life Sucks' , 'Will I Ever Make it Out', 'The Dark Woods'];

function Book() {
    //the constructor
};

function convertUserInput(event) {
    event.preventDefault();
    // this is where the input will be turned into an object
}

function addBook () {
    const addBookForm = document.querySelector('.addBookForm');
    addBookForm.showModal();
   
    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.onclick = () => addBookForm.close();

    //this might need to be in a separate function 
    const bookForm = document.querySelector('.bookForm');
    bookForm.addEventListener('submit', convertUserInput, true);
}

function addBookToLibrary() {
    const addBookBtn = document.querySelector('.addBookBtn');
    addBookBtn.onclick = addBook;

    const article = document.querySelector('.article');
    
    for (const prod of myLibrary) {
        const card = document.createElement('div');
        card.classList.add('card');
        const title = document.createElement('h3');
        title.textContent = prod;
        card.appendChild(title);
        article.appendChild(card);
    }
};

addBookToLibrary();
