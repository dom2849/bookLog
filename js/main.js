import Book from './book.js'
import UI from './ui.js'
const errorMessage = 'Additional book information required',
      successMessage = 'Book added';
let ui = new UI();

document.getElementById('add-book').addEventListener('click', function(){
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    if (title === '' || author === '' || isbn === ''){
        ui.showAlert(errorMessage, 'alert alert--error');
    }
    else{
        ui.showAlert(successMessage, 'alert alert--success');
    }
});

document.querySelector('.library__books').addEventListener('click', function(){
    console.log('delte');
});

