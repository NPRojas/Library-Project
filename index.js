const myLibrary = ['The Lonely Giant', 'Life is Overwhemling', 'I Wish I Had Help', 'Life Sucks' , 'Will I Ever Make it Out', 'The Dark Woods'];

function Book() {
    //the constructor
};

function addBook () {
    const test = document.querySelector('.testDiv');
    test.showModal();
   
    const submitBtn = document.querySelector('.submitBtn');
    submitBtn.onclick = () => test.close();
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
