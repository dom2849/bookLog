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

    showAlert(message, alertClassName, iconClassName){

        let body = document.querySelector('body'),
            alertWrapper = document.createElement('div');

        alertWrapper.classList.add('alert-wrapper');

        let alert = createAlert(message, alertClassName, iconClassName);
        alertWrapper.appendChild(alert);
        
        body.appendChild(alertWrapper);

        setTimeout(function(){
            body.removeChild(alertWrapper);
            
        }, 10000)
    }

    clearAllFields(){
        let fields = document.querySelectorAll('input');
        console.log(fields);
        for (let i = 0; i<fields.length; i++){
            fields[i].value = '';
        }
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

function createAlert(message, alertClassName, iconClassName){
    let alert = document.createElement('div'),
        iconElement = document.createElement('i'),
        messageElement = document.createElement('span');
    alert.className = alertClassName;
    iconElement.className = iconClassName;
    messageElement.textContent = message;

    alert.appendChild(iconElement);
    alert.appendChild(messageElement);
    return alert;
}