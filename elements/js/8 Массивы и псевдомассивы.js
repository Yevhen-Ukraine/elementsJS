"use strict";

const arr = [1, 2, 3, 6, 8];

//Метод Pop

/* arr.pop(8); //Удаляет последний элемент
arr.push(10) //Добавляет элемент в конце массива
console.log(arr); */

/* Перебор массива обычным циклом */
/* for (let i = 0; i < arr.length; i++) { //Цикл перебора массива
    console.log(arr[i]);
} */

/* Также можем использовать конструкцию цикла for of */
/* Работает только с массивоподобными сущностями: строку, псевдомассивы, map, set */
/* for (let value of arr) {
    console.log(value);
} */


/* const arr = [1, 2, 3, 6, 8];
arr[99] = 0;
console.log(arr.length);  */
//Результат 100
//В этом состоит свойство length, оно состоит из последнего индекса +1
//Как результат в массиве будут пустые элементы, что нарушает правило что в массиве все должно быть по порядку.

// Метод forEach
/* arr.forEach(function (item, i, arr) {
   console.log(`${i}: ${item} внутри массива ${arr}`); 
});
 */

//Представим получение от сервера или от пользователя строковый тип данных

const str = prompt("якийсь текст", "таке саме");
const products = str.split(", "); //На основании этой строки формируем список товаров
console.log(products);
//В браузере при ответе пользователя текстом через запятую в консоли получим массив с данными пользователя

//Из массива заполняем строку
const str = prompt("текст користувача", "таке саме");
const products = str.split(", ");
console.log(products.join('; '));//Используем метод обьединения массива с отличающимся разделителем для наглядности

//Метод сортировки
const str = prompt("текст користувача", "таке саме");
const products = str.split(", ");
products.sort();//Сортирует по порядку элементы как строки
console.log(products.join('; '));

//Применение на массиве с цифрами метода sort
const arrr = [2, 13, 26, 8, 10];
arrr.sort();// Результат [10, 13, 2, 26, 8] тоесть сортировка результата произошла как строк. 
console.log(arrr);
//Это решается следующим способом:

const arrr = [2, 13, 26, 8, 10];
arrr.sort(compareNum); 
console.log(arrr);

function compareNum(a, b)   {
    return a - b
}

//Псевдомассивы - это обьект структура которого совпадает с структурой массива и хранит данные по порядку, но с одним важным отличием. У псевдомассива не будет методов.



