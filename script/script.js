let myLibrary = [];
let body = document.querySelector('body');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = prompt("title");
    let author = prompt("author");
    let read;
    let pages;
    do {
        pages = prompt("Pages: ");

    } while (isNaN(pages) || pages == '');
    do {
        read = prompt("read? answer in read or not read")
    } while (read != 'read' && read != 'not read');

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    /* Clear previous displayed book before displaying new books */
    clear();

    for (let book of myLibrary) {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('background');

        let rmvBtn = createRmvBtn(book);
        bookDiv.appendChild(rmvBtn);

        for (let key of Object.keys(book)) {
            let bookPara = document.createElement('p');
            bookPara.innerText = key + ": " + book[key];
            bookDiv.appendChild(bookPara);
        }
        body.appendChild(bookDiv);
    }
}

function clear() {
    let bookDivs = document.querySelectorAll('.background');
    bookDivs.forEach(each => {
        each.remove();
    })
}

function newBook() {
    addBookToLibrary();
    displayBooks();

}

function createNewBookBtn() {
    let newBookBtn = document.createElement('button');
    newBookBtn.innerText = 'Add Book';
    newBookBtn.addEventListener('click', newBook);
    body.appendChild(newBookBtn);
}

function createRmvBtn(book) {
    let bookIndex = myLibrary.indexOf(book);
    let button = document.createElement('button');
    button.innerText = "Remove";
    button.setAttribute('data-index', bookIndex);
    button.addEventListener('click', removeFromLib);
    return button;
}

function removeFromLib() {
    let indexToRmv = this.getAttribute('data-index');
    myLibrary.splice(indexToRmv, 1);
    displayBooks();
}

createNewBookBtn();

// myLibrary.push(new Book('a', "b", 232, "read"));

