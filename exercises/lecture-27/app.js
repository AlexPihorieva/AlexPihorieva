// Знайти елемент ul у документі та запам'ятати його у змінній ul.

// За допомогою JSON.parse прочитати елемент localStorage з ключем items та зберегти його в масиві itemsArray. Якщо елемент відсутній, створити його зі значенням [].

// Написати функцію addTask(text), що створює елемент li з властивістю textContent, яка дорівнює значенню, що передається за допомогою аргументу функції text. Кожний створений елемент li функція повинна додавати до елемента ul.

// Використовуючи метод forEach та функцію addTask, згенерувати вміст елемента ul, відображаючи його на сторінці.

// Знайти елемент input у документі та запам'ятати його у змінній input.

// Написати функцію add(), що додає до масиву itemsArray значення, введене користувачем в полі input, та зберігає цей масив у localStorage з ключем items, використовуючи метод JSON.stringify. Одночасно візуалізувати доданий елемент на сторінці, використовуючи функцію addTask.

// Написати функцію del(), що чистить localStorage, масив itemsArray та значення властивості ul.innerHTML.



const ul = document.querySelector('.to-do-list');

let itemsArray = [];
if (localStorage.items === undefined) { 
    itemsArray = JSON.parse(localStorage.items); 
} else { 
    localStorage.items = JSON.stringify(itemsArray); 
}

function addTask(text) {
    let li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

itemsArray.forEach(task => {
    addTask(task)
});


const input = document.getElementById('item');
function add() {
    itemsArray.push(input.value);
    localStorage.items = JSON.stringify(itemsArray); 
    addTask(input.value);
    input.value = '';

}

function del() {
    localStorage.removeItem('items');
    ul.innerHTML = '';
    input.value = '';
}

