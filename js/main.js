import Book from './book.js'
import UI from './ui.js'
let ui = new UI();

document.getElementById('add-book').addEventListener('click', function(){
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === ''){
        ui.showAlert('Additional information required', 'alert alert--error', 'fas fa-exclamation-triangle alert__icon');
    }

    else{
        ui.addBook(new Book(title, author, isbn));
        ui.showAlert('Book added', 'alert alert--success', 'fas fa-check alert__icon');
        ui.clearAllFields();
    }
});


document.querySelector('.library__books').addEventListener('click', function(){
    if (!event.target.classList.contains('delete')) return;
    ui.removeBook(event.target.parentElement);
    ui.showAlert('Book removed', 'alert alert--success', 'fas fa-check alert__icon');
});

