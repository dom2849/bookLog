// import Book from "./book.js";

export default class UI{

    addBook(book){
        let bookList = document.querySelector('.library__books');
        let bookElement = createBook(book);
        bookList.appendChild(bookElement);
    }

    removeBook(book){
        book.remove();
    }

    showAlert(message, classList){

        let body = document.querySelector('body'),
            alertWrapper = document.createElement('div');

        alertWrapper.classList.add('alert-wrapper');

        let alert = createAlert(message, classList);
        alertWrapper.appendChild(alert);
        
        body.appendChild(alertWrapper);

        setTimeout(function(){
            body.removeChild(alertWrapper);
            
        }, 10000)
    }
}


function createBook(book){
    let libraryBook = document.createElement('div'),
        title = document.createElement('span'),
        author = document.createElement('span'),
        isbn = document.createElement('span'),
        deleteIcon = document.createElement('i');
    libraryBook.className = 'library__book';
    title.textContent = book.title;
    author.textContent = book.author;
    isbn.textContent = book.isbn;
    deleteIcon.className = 'fas fa-times delete';

    libraryBook.appendChild(title);
    libraryBook.appendChild(author);
    libraryBook.appendChild(isbn);
    libraryBook.appendChild(deleteIcon);

    return libraryBook
}

function createAlert(message, classList){
    let alert = document.createElement('div');
    alert.className = classList;
    alert.textContent=message;
    return alert;
}