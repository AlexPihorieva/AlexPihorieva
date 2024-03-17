// Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.

// Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.

// Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.

// Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.

// Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.

const fruits = 'apple banana cantaloupe blueberries grapefruit';

const fruitsArr = fruits.split(' ');

console.log(fruitsArr);

for (var i = 0; i < fruitsArr.length; i++) {
    console.log(fruitsArr[i]);
}


var n = 0;
while (n < fruitsArr.length) {
    console.log(fruitsArr[n]);
    n++;

}

n = 0;
do {
    console.log(fruitsArr[n]);
    n += 1;
} while (n < fruitsArr.length);

for (const frt of fruitsArr) {
    console.log(frt);
}


// Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (const num of Numbs) {
    if (num % 2 == 0) {
        console.log(num);
    }
}


// Додати 'Joker' на початок масиву names
const names = ['Batman'];
names.unshift('Joker')
console.log(names)



// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
names = ['Batman', 'Joker', 'Bane'];
names.unshift('Catwoman')
console.log(names)

// Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
names = ['Batman', 'Joker', 'Bane'];
names = [
    'Catwoman',
    ...names
];

// Додати до names елемент 'Catwoman', розмістивши його з індексом 1
names = ['Batman', 'Joker', 'Bane'];
names.splice(1, 0, 'Catwoman');

// Видалити елементи 'Catwoman' і 'Joker' з масиву names:
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
delete names[names.indexOf('Catwoman')]
delete names[names.indexOf('Joker')]

// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names[names.indexOf('Catwoman')]='Alfred'
names[names.indexOf('Joker')]='Alfred'

// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if (!names.includes("Alfred")){
    names.push('Alfred')
}

// Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if (names.includes("Alfred")){
    delete names[names.indexOf('Alfred')] 
}