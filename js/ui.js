export default class UI{

    addBook(book){
        
    }

    removeBook(book){

    }

    showAlert(message, classList){

        let body = document.querySelector('body'),
            alertWrapper = document.createElement('div');

        alertWrapper.classList.add('alert-wrapper');

        let alert = document.createElement('div');
        alert.className = classList;
        alert.textContent=message;
        alertWrapper.appendChild(alert);
        console.log(alertWrapper);
        
        body.appendChild(alertWrapper);

        setTimeout(function(){
            body.removeChild(alertWrapper);
            
        }, 10000)
    }
}