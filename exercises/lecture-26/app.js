// // Зробити calculate() функцією вищого порядку, змусивши її підтримувати операцію додавання над масивом чисел та операцію множення над масивом чисел

// // calculate(operation, initialValue, numbers) приймає перший аргумент - функцію, яка описує операцію, другий аргумент - початкове значення, третій аргумент - масив чисел.


// function sum(n1, n2) {
//     return n1 + n2;
//  }

// function multiply(n1, n2) {
//     return n1 * n2;
//  }

// function calculate(operation, initialValue, numbers) {
//     let result = initialValue;
//     for (let index = 0; index < numbers.length; index++) {
//         const element = numbers[index];
//         result = operation(result, element)
//     }

//     return result;
// }

// console.log(calculate(sum, 0, [1, 2, 4])); // => 7 
// console.log(calculate(multiply, 1, [1, 2, 4])); // => 8



// // Маємо масив student_names
// let student_names = ["Wick", "Malcolm", "Smith"]
// // Застосувати до масиву student_names метод map, щоб отримати на консолі результат у такому вигляді:

// // name: Wick | index: 0 | array: [ "Wick", "Malcolm", "Smith" ] name: Malcolm | index: 1 | array: [ "Wick", "Malcolm", "Smith" ] name: Smith | index: 2 | array: [ "Wick", "Malcolm", "Smith" ]


// new_students = student_names.map((item, index, array)=> {
//     return `name: ${item} | index: ${index} | array: [ ${array.toString()} ]`
// })

// console.log(new_students)




// // Маємо масив об'єктів students_information, що представляє результати іспитів кожного студента у полі degree:

// let students_information = [
//     {"name": "Wick", "degree": 375}, 
//     {"name": "Malcolm", "degree": 405}, 
//     {"name": "Smith", "degree": 453}
// ];
// // Максимальна оцінка degree = 600 Розрахувати відсоткове значення отриманої оцінки по кожному студенту, використовуючи метод map, та вивести на консоль отриманий результат у такому вигляді:

// // { name: "Wick", degree: 375, percentage: 62.5 } { name: "Malcolm", degree: 405, percentage: 67.5 } { name: "Smith", degree: 453, percentage: 75.5 }​


// let new_students_information = students_information.map((student) => {
//     return {
//         name: student.name,
//         degree: student.degree,
//         percentage: (student.degree / 600) * 100
//     };
// });

// new_students_information.forEach((student) => {
//     console.log(student);
// });


// // Маємо масив :
array = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];
// // Використовуючи метод reduce, звести масив до одномірного
// // [ 1, 2, 3, 10, 11, 12, 21, 22, 23, 31, 32, 33, 34, 41, 42 ]


const flattenedArray = array.reduce((accumulator, currentValue) => {
    if (Array.isArray(currentValue)) {
        accumulator.push(...currentValue);
    } else {
        accumulator.push(currentValue); // Інакше, додаємо поточний елемент без змін
    }
    return accumulator;
}, []);

console.log(flattenedArray);



// Створити конструктор прототипу масиву upperCase(), що перетворює символи рядка у символи верхнього регістру.
function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}


Array.prototype.upperCase = function () {
    let i;
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};
myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]