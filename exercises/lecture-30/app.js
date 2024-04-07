// У файлі index.html є форма з 2-ма полями. Написати асинхронну функцію, що чекає 10 секунд, поки користувач заповнює поля форми. Після чого функція читає значення полів форми, зберігає їх у змінних firstName і lastName та перевіряє чи вони не пусті. Якщо обидва значення пусті, функція змінює контент h1 на I'm miss You. Якщо хоча б одне зі значень заповнене, функція змінює контент h1 на Hello firstName lastName!

// Створити новий об'єкт xhr, як екземпляр XMLHttpRequest. Надіслати запит на веб-сервер https://jsonplaceholder.typicode.com/posts, використовуючи методи open() і send().

// Використовуючи подію xhr.onload, напишіть функцію зворотного виклику, що отримує результат запиту з сервера, за допомогою JSON.parse перетворює результат на об'єкт, будує за допомогою шаблона template стрічку публікацій та поміщає отриманий результат всередину елемента з id="demo".


const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;

function readForm(){
    let firstName = document.querySelector('#demoForm input[name="firstName"]').value.trim();
    let lastName = document.querySelector('#demoForm input[name="lastName"]').value.trim();

    let h1 = document.querySelector('h1');
    if (firstName === "" && lastName === ""){
        h1.textContent = "I'm miss You";
    } else if (firstName != "" || lastName != ""){
        h1.textContent = `Hello ${firstName} ${lastName}!`;
    }
}

setTimeout(readForm, 10000);


const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    const posts = JSON.parse(xhr.responseText);
    
    let postsHtml = '';
    posts.forEach(post => {
      postsHtml += template(post)
    });
    
    document.getElementById('demo').innerHTML = postsHtml;
  } else {
    console.error('Request failed with status:', xhr.status);
  }
};

xhr.send();


