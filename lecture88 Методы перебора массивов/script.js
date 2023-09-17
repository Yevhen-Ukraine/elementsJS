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

// reduce (Служит для схлопывания массива в одно целое {Используется в основном для числовых данных})

// const arr = [4, 5, 1, 3, 2, 6];
// // 0    4
// // 4    5
// // 9    1
// // 10   3
// // и т.д.

// const res = arr.reduce((sum, current) => sum + current, 3);
// Метод reduce может принимать еще один аргумент, им можно задавать начальное значение. В таком случае при первом цикле sum будет равняться не 0, а 3. Результат в таком случае будет равен 24. 

// console.log(res); 

// Результат 21

/* Вариант с строками */

const arr = ['apple', 'pear', 'plum'];


const res = arr.reduce((sum, current) => `${sum}, ${current}`);

console.log(res);


// Пример использования, допустим имее данные с сервера или просто обьект

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    kat: 'animal'
};

const newArr = Object.entries(obj).filter(item => item[1] === 'persone').map(item => item[0]);

console.log(newArr);