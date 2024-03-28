const list = ['html', 'css', 'javascript', 'react.js'];


// Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку.

const ulElement = document.createElement('ul');
list.forEach(item => {
    const liElement = document.createElement('li');
    liElement.textContent = item; 
    ulElement.appendChild(liElement); 
});

document.body.appendChild(ulElement)



// Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref,
// де кожний елемент списку є тегом a з відповідним посиланням. Наприклад, для першого елемента списку:

const listWithHref = [
    {
        'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"
    }, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];

{/* <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a> */}


const olElement = document.createElement('ol');
listWithHref.forEach(item => {
    const itemName = Object.keys(item)[0];
    const itemHref = item[itemName];
    
    const aElement = document.createElement('a');
    aElement.href = itemHref;
    aElement.textContent = itemName;

    const liElement = document.createElement('li');
    liElement.appendChild(aElement);
    olElement.appendChild(liElement);
});

document.body.appendChild(olElement);

// Використовуючи метод createElement, створити таблицю на основі масиву students. 
// Заголовки стовпчиків таблиці - firstName, lastName, degree. Встановити для заголовків стовпчиків таблиці css-властивості: 
// background-color: blue; color: azure; Додайте таблицю на сторінку.

const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]


const tableElement = document.createElement('table');

const headerRow = document.createElement('tr');

const headers = Object.keys(students[0]); 
headers.forEach(headerText => {
    const headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerCell.style.backgroundColor = 'blue';
    headerCell.style.color = 'azure';
    headerRow.appendChild(headerCell);
});

tableElement.appendChild(headerRow);

students.forEach(student => {
    const row = document.createElement('tr');
    headers.forEach(header => {
        const cell = document.createElement('td');
        cell.textContent = student[header];
        row.appendChild(cell);
    });
    tableElement.appendChild(row);
});

document.body.appendChild(tableElement);