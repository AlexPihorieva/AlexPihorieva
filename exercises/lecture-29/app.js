// Створити клас AuthException, розширивши клас Error. В методі constructor(code, message) визначити властивість this.message,
//  що дорівнює code: message або code, якщо message не передано як аргумент.

// Створіть змінну checkAuth, яка дорівнює результату пошуку селектора з класом check-auth у файлі index.html.

// За допомогою addEventListener, виконайте обробку події click на змінній checkAuth. 
// Функція зворотного зв'язку обробки цієї події повинна запускати блок try { } catch(e) {}.

// У блоці try { } потрібно перевіряти результат, що повертає функція isAuth(). 
// Якщо результат повернення дорівнює false, за допомогою оператора throw викинути виняток AuthException('FORBIDDEN', 'You don't have access to this page').

// У блоці catch() перехопити цей виняток та передати сформоване повідомлення про помилку у діалог dialogBoxId, 
// відобразивши його у параграфі з класом ="message".

// Якщо результат повернення функції isAuth() дорівнює true, за допомогою метода window.open відкрити сторінку success.html.


class AuthException extends Error {
  constructor(code, message) {
    
    this.message = message ?? code;
  }
  
  toString() {
    return this.message;
  }
}

let isAuth = (auth)  => auth ?? false;


let dialogBoxId=document.getElementById("dialogBox");


function showDialog(e){
  dialogBoxId.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  });
  
  dialogBoxId.showModal();
}

function closeDialog(){
  dialogBoxId.close(); 
}


let checkAuth = document.querySelector('.check-auth');
checkAuth.addEventListener('click', function(e){
  try { 
    if (isAuth(true)){
      window.open('success.html')
    } else {
      throw AuthException('FORBIDDEN', 'You don\'t have access to this page');
    }
  } catch(e) {
    dialogBoxId.getElementsByClassName('message')[0].textContent = e.message;
    showDialog();
  }
})

