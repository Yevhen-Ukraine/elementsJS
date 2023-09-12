'use strict';

// filter

// Например изветсный метод фор ич не везвращает новый массив, поэтому рассмотрим методы (filter, map, every/some) которые позволяют отфильтровать массив данных по выбранным параметрам и возвращают данные в новом массиве

//

const names = ['Ivan', 'ann', 'Rsenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// [ 'Ivan', 'ann' ]

//map

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => {
    return item.toLocaleLowerCase(); //Переводим все в нижний регистр
});

console.log(result);

[ 'ivan', 'anna', 'hello' ]


// Методы every/some

// Эти методы возвращают булиновые значения true или false

const some = [4, 'jhf', 'uytuyuy'];

// console.log(some.some(item => typeof(item) === 'number'));//Хотябы один элемент должен соответствовать условию. Результат true

console.log(some.every(item => typeof(item) === 'number'));//Все элементы массива должны соответствовать условию. Результат false

