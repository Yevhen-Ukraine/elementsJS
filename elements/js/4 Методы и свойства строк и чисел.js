const str = "test";
const arr = [1, 2, 3];

//console.log(str[2] = 'd'); /* Так поменять не получится */
console.log(str);

/* Метод изменения регистра */
console.log(str.toUpperCase());/* Строка в верхнем регистре */
console.log(str.toLowerCase());/* Строка в нижнем регистре */

/* Поиск подстроки */

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));


const logg = "Hello world";
console.log(logg.slice(6, 11));/* вырезаем методом До 11 элемента не включая его. Поддерживает отрицательные значения с право на лево. С одним значением строка вірезаеться до конца */

console.log(logg.substring(6, 11)); /* Этот метод аналогичен не поддерживает отрицательные значения. С одним значением строка вірезаеться до конца */

console.log(logg.substr(6, 11)); /* Вместо второго аргумента указываем длинну */

const num = 12.2;
console.log(Math.round(num)); /* округление до ближайшего целого */

const test = "12.2px";
console.log(parseInt(test));/* Меняет систему исчисления и превращает в чсловой тип данных */
console.log(parseFloat(test));/* Возвращает в десятичном виде, в данном случае возвратится 12.2 */
