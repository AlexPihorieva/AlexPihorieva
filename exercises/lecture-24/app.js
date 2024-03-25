// Масив кольорів складається з 3 елементів. 
const colors = ['blue', 'green', 'white'];
// Визначити функцію зворотного виклику під назвою "iter". Функція приймає один параметр під назвою «item». Усередині функції має бути оператор console.log, який виводить значення параметра «item» на консоль. Використовуючи forEach() та функцію iter, вивести в консоль значення кожного кольору.

function iter(item){
    console.log(item);
}

colors.forEach(iter);



// Маємо масив кольорів
// Масив кольорів складається з 3 елементів. 
const colors1 = ['blue', 'green', 'white'];
// Визначити функцію зворотного виклику під назвою "iterate", яка приймає два параметри: "item" та "index". Функція повинна видавати повідомлення на консоль за допомогою шаблонних літералів. Повідомлення має містити значення «item» і значення «index» - ${item} has index ${index}. Використовуючи forEach() та функцію iterate, вивести в консоль значення кожного кольору

// function iterate(item, index){
//     console.log(`${item} has index ${index}`);
// }

// colors1.forEach(iterate);



// Перепишіть функцію iterate, використовуючи масив colors, таким чином, щоб на консоль видавалось повідомлення 'The last iteration!', коли функція виконує останню ітерацію для елементів colors.

function iterate(item, index, array){
    console.log(`${item} has index ${index}`);
    if (index == array.length - 1){
        console.log('The last iteration!');
    }
}

colors1.forEach(iterate);



// Маємо масив letters
const letters = ['a', 'b', 'c'];
// Визначити функцію зворотного виклику під назвою "iterate", яка приймає параметр під назвою "letter". Усередині функції має бути оператор console.log, який перевіряє, чи значення «this» дорівнює об'єкту «window». Коли функція викликається, вона повинна реєструвати «true» на консолі, якщо значення «this» дорівнює об'єкту «window».

function iterate(letter){
    console.log(this === window);
}

letters.forEach(iterate);



// Маємо масив під назвою Numbers.
const Numbers = [22, 3, 4, 10];
// Встановити, чи всі числа масиву парні методом forEach()

Numbers.forEach(function(elm){
    console.log(elm % 2 == 0 ? `${elm} parnuy` : `${elm} neparnuy`);
})


// Маємо масив під назвою numbers.
const numbers1 = [22, 3, 4, 10];
// Встановити, чи всі числа масиву парні методом every()

let allParni = numbers1.every(function(number){
    return number % 2 === 0;
})

console.log('numbers1 allParni: ' + allParni)

// Маємо масив під назвою fruits
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
// Використовуючи метод findIndex, знайти індекс першого елемента в масиві, який задовольняє умову fruit === "blueberries".

let blueberriesIndex = fruits.findIndex(function(element){
    return element === "blueberries"
})

console.log('blueberriesIndex: ' + blueberriesIndex)

// Маємо масив під назвою arr
const arr = [7, 33, 47, 99, 2, 103, 79];
// Використовуючи метод find, знайти перший елемент у масиві arr, який задовольняє умову елемент > 10.

let firstElementGreaterThanTen = arr.find(el => {
    return el > 10;
});

console.log('firstElementGreaterThanTen: ' + firstElementGreaterThanTen);

// Маємо масив під назвою array
const array = [1, 2, 3, 4, 5];
// Використовуючи метод some, перевірте, чи існує принаймні один елемент у масиві array, що є парним.

let atLeastOneParnuy = array.some(function(number){
    return number % 2 === 0;
})

console.log('array has atLeastOneParnuy: ' + atLeastOneParnuy)

// Маємо масив під назвою numbers
const numbers = [1, 30, 4, 21, 100000];
// Використовуючи метод sort, відсортуйте елементи масиву "numbers" у порядку зростання.

numbers.sort(function(el1, el2){
    return  el1 - el2
})

console.log(numbers)