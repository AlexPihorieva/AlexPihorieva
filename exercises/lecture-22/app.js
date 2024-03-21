const classes = ['first', 'second', 'third', 'fourth'];


// 1. Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір. Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.
const h1Tags = document.getElementsByTagName('h1');
console.log('typeof(h1Tags)', typeof(h1Tags))
console.log('h1Tags.length',h1Tags.length)


for (i = 0; i < h1Tags.length; i++) {
    console.log(h1Tags[i]);
}


// Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. Встановити для нього стиль background-color = "gold"

const p1 = document.querySelector('#p1');
p1.style.color = 'gold'; 


// Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;

const p2 = document.querySelector('#p2');
p2.style.cssText = 'background-color:gold; color: blue; font-size: 2rem;'; 


// Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. Призначити для нього клас third

const p3 = document.querySelector('#p3');
p3.className = 'third';


// Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. Призначити для нього класи fourth та border

const p4 = document.querySelector('#p4');
p4.classList.add('fourth', 'border');


// Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.

const containers = document.querySelectorAll('.container');
for(const container of containers){
    console.log(container.firstElementChild)
}

// Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.

const containers = document.querySelectorAll('.container');
for (let i = 0; i < containers.length; i++) {
    const firstElement = containers[i].querySelector(':first-child');
    console.log('Вміст першого елемента для контейнера', i + 1, ':', firstElement.textContent);
}

// Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers. 
// Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином

// перший залишити h1
// другий замінити на h2
// третій замінити на h3
// четвертий замінити на h4 
// зберегти початкові атрибути id та class

// Використовуючи цикл for для колекції headers та масив classes, додати до отриманих тегів-заголовків класи таким чином

// до h1 додати клас first
// до h2 додати клас second
// до h3 додати клас third
// до h4 додати клас fourth


const headers = document.querySelectorAll('.container header');

for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    header.innerHTML = header.innerHTML.replace('h1', 'h' + (i + 1));
    header.classList.add(classes[i])
}



