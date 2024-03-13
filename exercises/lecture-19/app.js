
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";


console.log('Довжина рядків однакова? ', str1.length == str2.length);
console.log('Рядки однакові (не строге порівняння)? ',str1 == str2);
console.log('Рядки однакові (строге порівняння)? ',str1 === str2);


let string5 = 'Hello World';

console.log('Перший символ рядка(індекс)', string5[0])
console.log('Перший символ рядка(charAt)', string5.charAt(0))


let str3 = "Hello Javascript";
console.log('символ J рядка(індекс)', str3[6])
console.log('символ J рядка(charAt)', str3.charAt(6))


console.log('Останній символ', str3[15])
console.log('Останній символ', str3[str3.length - 1])


function lastChar(str) {
    return str[str.length - 1]
}

let lastChar2 = str => str[str.length - 1];

let lastChar3 = function (str) { 
    str[str.length - 1];
}

let a = 'When candles are out,';
let b = 'all cats are grey.';

console.log(a.concat(' ').concat(b))

let fact = "Fifteen is the same as"
let a = 5;
let b = 10;

console.log (fact + " " + (a + b))


let firstName = "Tom";
let lastName = "Cat";


function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(getFullName(firstName, lastName));


// 9.Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!


function greeting(firstName, lastName) {
    let fullName = getFullName(firstName, lastName);
    return "Hello, " + fullName + "!";
}

console.log(greeting(firstName, lastName));

// 10.Використовуючи функцію greeting, створити такий шаблон:

//  <div><h1>Hello, Tom Cat!</h1></div>

function greeting(firstName, lastName) {
    let fullName = getFullName(firstName, lastName);
    return "<div><h1>Hello, " + fullName + "!</h1></div>";
}

console.log(greeting(firstName, lastName));


let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"

let result1 = string1.trim();
let result2 = string1.trimStart()
let result3 = string1.trimeEnd()

console.log(result1);
console.log(result2);
console.log(result3);

const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'

const example1 = phoneNumber.trim();
const example2 = phoneNumber.trimLeft();

console.log(example1);
console.log(example2);


let sentence = 'Always look on the bright side of life';

// Перевірити, чи містить рядок значення 'look up'
// Перевірити, чи містить рядок значення 'look on'
// Перевірити, чи містить рядок значення 'look on' починаючи з 8-ї позиції


console.log("Перевірити, чи містить рядок значення 'look up'", sentence.includes('look up'))
console.log("Перевірити, чи містить рядок значення 'look on'", sentence.includes('look on'))
console.log("Перевірити, чи містить рядок значення 'look on' починаючи з 8-ї позиції", sentence.includes('look on', 8))

let sentence = 'Always look on the bright side of life';

// Знайти індекс символу 'l'. Відповідь: 1
// Знайти індекс символу 'l', починаючи з 3-ї позиції. Відповідь: 7
// Знайти індекс символу 'L'. Відповідь: -1

let index1 = sentence.indexOf('l'); 
console.log(index1);

let index2 = sentence.indexOf('l', 3);
console.log(index2);

let index3 = sentence.indexOf('L');
console.log(index3);

let sentence1 = 'Always look on the bright side of life';

// Отримати підрядок 'look on the bright side of life'
// Отримати підрядок 'Always'
// Отримати підрядок 'look'

let substring1 = sentence1.substring(6);
console.log(substring1); 

let substring2 = sentence1.substring(0, 6);
console.log(substring2); 

let substring3 = sentence1.substring(6, 10);
console.log(substring3);


// Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, 
// літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.

let pattern = /^[a-z0-9_-]{8,16}$/

// Створити регулярний вираз, який призначений для перевірки email на коректність.

let emailPattern = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+.[a-zA-Z0-9_.]{2,7}/

let sentence2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr

function truncateText(text){
    return text.substring(0, 50)
}

function truncateText(text){
    return text.substr(0, 50)
}










 


