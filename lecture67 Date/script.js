'use strict';

const now = new Date(); // С пустыми скобками получим текущую дату
// consol...


// Формат даты 2023-05-11

/* МЕТОДЫ Обьекта Date */

/* Группа методов получения компонентов даты (get) */

// console.log(now.getFullYear()); // полуучаем год 2023

// console.log(now.getFullMonth());

// console.log(now.getFullDate());

// console.log(now.getFullHours());

// console.log(now.getFullUTCHours());

// и остальные методы

console.log(now.getTimezoneOffset()); //Показавает разницу между часовым поясом и UTC в минутах

console.log(now.getTime());//Колличество милисекунд с 1970-01-01

/* Группа методов установки даты (set) */

console.log(now.setHours(18, 40));//Первы йаргумент часы, а второй минуты

console.log(now); //консоль ВС кода ориентируется на UTC зону. Если мы выполним код в браузере то Date будет ориентироваться на локальную дату установленную в ПК

/* Измерения промежутков времени */

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`)