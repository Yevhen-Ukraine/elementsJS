'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthdey: '20/04/1993',
    swowMyPablicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}
//console.log(user);

/* console.log(typeof(Object.keys(user)[0])); */ // Проверяем что ключи у нас записываються в формате string. Поместить обьект в качестве ключа не получиться, будет ошибка

/* Map называються спецефические структуры данных которрые очень похожи на обьект но у них есть свои методы, т.е. может использоваться и обьект и массив и все что угодно*/

/* const shops = [
    {rise: 500},
    {oil: 200},
    {bread: 50}    
];

const map = new Map();

map.set(shops[0], 5000);
// чтобы заполнить карту можно воспользоваться несколькими способами например псстрочно
map.set(shops[1], 6000);
map.set(shops[2], 8000);


console.log(map); */

// Более рациональный вариант того же

const shops = [
    {rise: 500},
    {oil: 200},
    {bread: 50}    
];

const budget = [5000, 15000, 25000];

/* Так карта выглядит изнутри, массив массивов */
const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})

console.log(map);
// console.log(map.get(shops[0])); //получение значений (получим первый элемент)
// console.log(map.hes(shops[0])); // Проверка обьекта на существование
// map.delete(key); // удаляет что-то из карты 
// map.clear(); // Очистка карты
// map.size; // Колличество элементов на данный момент внутри карты 
// map.keys() // 

/* 4 СПОСОБА ПЕРЕБРАТЬ КАРТЫ */
/* 1. */
// map.keys() // Возвращает итерируемый (перебираемый) обьект по ключам
// Пример:
// Необходимо получить список всех товаров во всех магазинах

// const goods = [];
// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0])
// }
// console.log(goods);
// Получаем массив с наименованием всех товаров во всех магазинах

/* 2. Этот метод позволяет получить вместо ключей значения (итерируемый обьект по значениям) */
// for (let price of map.values()) {
//     console.log(price);
// }

/* 3. Метод entries позволяет получить массив с массивами которые имеют два элемента: свойство и значение*/
// for (let price of map.entries()) {
//     console.log(price);
// } 
// С помощью этого метода можно выполнить два предидущих

/* Можно сразу для удобства деструктуризировать  */
// for (let [shop, price] of map.entries()) {
//     console.log(shop, price);
// }
// Получаем разделенную структуру

/* 4. Использование метода forEach */

map.forEach((value, key, map) => { /*Аргументы: Значение, ключ, карта на которую можно ссылаться внутри колбек функции */
    console.log(key, value);
});