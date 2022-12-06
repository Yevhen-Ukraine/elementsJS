 'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 500px;';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


/* for (let i = 0; i < hearts.length; i++) {
    hearts[1].style.backgroundColor = 'blue';
} */ 
//Можно использовать цикл (почти не будем использовать) 
/* Переменный оператор равен 0 (Перебор элементов начинается с 0) */
/* Перебираем все элементы псевдомассива i < hearts.length */
/* length - свойство обозначающее все элементы массива< цикл будет работать пока они там есть*/
/* i++  */

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


/* Методы для работы с элементами страницы */

const div = document.createElement('div');
// const text = document.createTextNode('тут был я');

div.classList.add('black');

wrapper.append(div); /* Этот метод Вставляет элемент в конец родителя */
//wrapper.appendChild.add('black');/* Этот устаревший  метод Вставляет элемент в конец родителя */

//wrapper.prepend(div); /* Этот метод Вставляет элемент в начало родителя */
// hearts[0].before(div);/* Вставляем элемент перед первым элементом*/
// hearts[0].after(div);/* Вставляем элемент после первого элемента*/

//wrapper.insertBefore(div, hearts[1]);/* Вставляет div перед вторым эл. */

//circles[0].remove();/* Удаляем первый элемент */
//wrapper.removeChild(hearts[1]);/* Старый метод удаления эл. */

//hearts[0].replaceWith(circles[0]);/* Заменяем один элемент другим */
//wrapper.replaceChild(circles[0], hearts[0]);/* Старый метод замены */

div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "Hello";/* Этот  */

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
/* beforebegin Вставляет перед элементомю. 
afterbegin соответственно вставляет в нычало элемкнта 
beforeend вставляет перед концом 
afterend вставляет после єлемента*/

//Общение с пользователем

//alert('Joke')

//const question = confirm("Are you here?");
//console.log(question);

//const answer = prompt("Вам есть 18?", "18");
//console.log(answer);
//console.log(typeof(answer)); /*typeof - Оперратор для проверки на тип данных */
//Любая информация полученная от клиента всегда приходит в виде строк - string
// const answer = +prompt("Вам есть 18?", "18"); /* + - Получаем числовое значение */
//const answer = +prompt("Вам есть 18?", "18");
//console.log(answer + 5); /* К введённому числу прибавит 5 */


/* Записываем ответы пользователя в маассив данных */
//const answers = []; /* Создали пустой массив [] */

// answers [0] = prompt('Как ваше имя?', '')
// answers [1] = prompt('Как ваша фамилия?', '')
// answers [2] = prompt('Сколько вам лет?', '')

//console.log(typeof(answers));
// console.log(typeof(null)); /* Ошибка - устаревшее */
/* Интерполяйия - можем вставлять внутрь строки значение переменной */

//const category = 'toys';

//console.log('https://someurl.com/' + category + '/' + '4'); /* устарело */
//console.log(`https://someurl.com/${category}/5`); /* работает тлько с косыми кавычками */
 
//const user = "Yevhen";
 
//alert(`hello, ${user}`);


/* ОПЕРТОРЫ JS */

console.log('arr' + " - object"); /* Рзультат кода: arr - object */
console.log(4 + +" - object"); /* Рзультат кода:  NaN (Not a Number) */
console.log(4 + "5"); /* Рзультат кода:  45 */
console.log(4 + +"5"); /* Рзультат кода:  9 */
/* + Перед любым аргументом называется унарным (унарный плюс) */


/* ОПЕРАТОРЫ ДЛЯ УКОРОЧЕНИЯ КОДА */
/* ИНКРИМЕНТ И ДЕКРИМЕНТ (Увеличивает или уменьшает на еденицу соответственно) */

let incr = 10,
    decr = 10;

//incr++;
//decr--;/* Операторы перед значением - ПРЕФИКСНЫЕ */

//incr++;
//decr--;/* Операторы после значения - ПОСТФИКСНЫЕ */

console.log(incr);
console.log(decr);
/* Результт 11 и 9 соответственно */
console.log(incr++);
console.log(decr--);/* Результат 10 и 10 */

console.log(++incr);
console.log(--decr);/* Результат 11 и 9 */

console.log(2*4 == '8'); /* Сравниваем по значению, хотя '8' строчное а не цифровое*/
console.log(2*4 === 8);/* Сравниваем по типу */
/* = ПРИСВАИВАНИЕ ЗНАЧЕНИЯ */
/* == СРАВНИВАНИЕ ЗНАЧЕНИЙ */
/* === СТРОГОЕ РАВЕНСТВО - СРАВНИВАНИЕ ЗНАЧЕНИЙ ПО ТИПУ */ 


/* ЛОГИЧЕСКИЕ ОПЕРАТОРЫ "И" и "ИЛИ" */

/* && - "И" */
/* || - "ИЛИ" */


const isChecked = true,
      isClose = true;

console.log(isChecked && isClose); /* true */


const isChecked = true,
      isClose = false;

console.log(isChecked || isClose); /* true */


/* ОПЕРАТОР ОТРИЦАНИЯ - "!" МЕНЯЕТ ЗНАЧЕНИЕ НА ПРОТИВОПОЛОЖНОЕ */

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);

/* ПОРЯДОК ВЫПОЛНЕНИЯ ОПЕРАТОРОВ */
/* СМОТРЕТЬ ТАБЛИЦУ ОПЕРАТОРОВ */

console.log(2+2*2 === 8); /* Не равно 8 потому что приоритет у оператора умножения больше чем у сложения   */

console.log(2+2*2 != 8); /* true потому что читается как не равно 8 */

console.log(2+2*2 !== '6'); /* true потому что не равно по типу */


/* ПЕРВОЕ ПРИЛОЖЕНИЕ */
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


/* УСЛОВИЕ */
if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

/* ВЛОЖЕННОСТЬ УСЛОВИЙ */
/* const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
} */

/* ДРУГЙ СИНТАКСИС ЗАПИСИ УСЛОВИЙ С ПОМОЩЬЮ ТЕРНАРНОГО ОПЕРАТОРА */
/* Он единственный оператор, кторфй имеет три аргумента */
//(num === 50) ? console.log('Ok!'): console.log(Error);

/* const num = 50;

switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('в точку');
        break;
    default:
        console.log('не в этот раз');
        break;
} */

/* ЛОГИЧЕСКИЕ ОПЕРАТОРЫ */

/* const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('я сыт!');
} */

/* ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ */

/* Есть пять сущностей которые всегда будут folse
- ноль
- пустая срока ''
- null
- andefind
- not a number 
всё остально всегда будет true*/

/* const hamburger = 3;
const fries = 1;
const cola = 0;

console.log((hamburger === 3 && cola && fries)); */

//console.log(1 && 0); /* в консоль получим 0 (оператор "И" запнулся на не правдивом выражении и вывел его в консоль ) */
//console.log(1 && 5); /* оба значения true и в консоль получем последнее значение - 5 */
//console.log(null && 5); /* Сравниваем не правду "null" c 5, в консоль получим null */
//console.log(0 && 'rfsdgreg'); /* В консоль получим 0 */

/* if (hamburger === 3 && cola === 1 && fries) {
    console.log('Все сыты !');
} else {
    console.log('Мы уходим');
} */


/* ИЛИ - Запинается на правде, если все не правда то возвращается последнее ложное значение */

/* const hamburger = 3;
const fries = 0;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries) {
    console.log('Все довольны !');
} else {
    console.log('Мы уходим');
}

console.log(hamburger || cola || fries);


let johnReport, alexReport, semReport, mariaReport = 'done';

console.log(johnReport || alexReport || semReport || mariaReport); */

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны !');
} else {
    console.log('Мы уходим');
}

console.log(hamburger || cola || fries);


let johnReport, alexReport, semReport, mariaReport = 'done';

console.log(johnReport || alexReport || semReport || mariaReport);

/* ЦИКЛЫ */

let num = 50;

/* while (num <= 55) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
}
while (num < 55); */

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break; /* Прерывает цикл на 6 */
        continue; /* Пропускает или исключает из цикла 6 */
    }
    console.log(i);
}


/* ЦИКЛ В ЦИКЛЕ И МЕТКИ */

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}


/* ЗАДАЧА ПОСТРОИТЬ ПИРАМИДУ ИЗ ЗВЁЗДОЧЕК ИЗОБРАЖЕННУЮ НИЖЕ */
// *
// **
// ***
// ****
// *****
// ******

/* let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';

    }
    result += '\n';
}


console.log(result); */



metka: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue metka;
            console.log(`Third level: ${k}`);
        }
    }
}

metka: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break metka;
            console.log(`Third level: ${k}`);
        }
    }
}

/* Самостоятельная работа */

/* Задача 1: При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой */

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

/* Задача 2: При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл */

for (let i = 20; i >= 10; i--) {
    if (i === 13) break;
    console.log(i);
}


/* Задача 3: При помощи цикла for выведите чётные числа от 2 до 10 включительно */

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


/* Задача 4: Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

 Цикл, который нужно переписать:
 
 */

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
         continue;
    } else {
         console.log(i);
    }
}

let i = 2;
while (i <= 16) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}


/* Задача 5: 
Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0] */

const arrayOfNumberss = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumberss[i - 5] = i;
}

console.log(arrayOfNumberss);


const arrayOfNumbers = [];
let j = 0;

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[j] = i;
    j++;
}

console.log(arrayOfNumbers);

/* Задача 6: Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив */

const arr = [3, 5, 8, 16, 20, 23, 50];
const resultt = [];
//const result = [...arr];
for (let i = 0; i < arr.length; i++) {
    resultt [i] = arr [i];
}

console.log(resultt);


/* Задача 7: Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ] */

const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
}

console.log(data);

/* Задача 8: Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ] */
/* Перебор с конца массива */
const revers = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
for (let i = revers.length - 1; i >= 0; i--) {
    result[revers.length - 1 - i] = revers[i];
    
}
console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);

/* Задача 9: Необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

     *
    ***
   *****
  *******
 *********
***********
(Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС) */ 

    const lines = 5;
    let result = '';
    
    for (let i = 0; i <= lines; i++) {
        for (let j = 0; j < lines - i; j++) {
            result += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            result += "*";
        }
        result += "\n";
    }
    
    console.log(result)

/* 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

P.S. возвращать - это использовать ключевое слово return.

P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах. */

function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Alex');

/* 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6] */

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

/* 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

Примеры:

Вызов функции getMathResult(5, 3) даст ответ 5---10---15

Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

Вызов функции getMathResult(10, '5') даст ответ 10

Вызов функции getMathResult(10, 0) даст ответ 10

Вызов функции getMathResult(20, -5) даст ответ 20

Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде. */

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);

