const myLibrary = ['The Lonely Giant', 'Life is Overwhemling', 'I Wish I Had Help', 'Life Sucks' , 'Will I Ever Make it Out', 'The Dark Woods'];
const arry = [];

function Book(title) {
    //the constructor
    this.title = title;
};



function insertObject (object) {
    let index = arry.length;
    arry.splice(index, 0, object);
}

function testClick() {
    const title = document.querySelector('#title');
    const book = new Book(title.value);
    insertObject(book);

    const testForm = document.querySelector('#testForm');
    testForm.reset();

}

testBtn = document.querySelector('#testBtn');
testBtn.onclick = testClick;

function convertUserInput(event) {
    event.preventDefault();
    // this is where the input will be turned into an object
}

function addBook () {
    const addBookForm = document.querySelector('.addBookForm');
    addBookForm.showModal();
   
    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.onclick = () => addBookForm.close();

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
