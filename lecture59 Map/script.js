'use strict';

const user = {
    name: 'Alex';
    surname: 'Smith';
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

const budget = [5000, 6000, 8000];

const map = new Map();

shops.forEach((shops, i) => {
    map.set(shop, budget[i]);
})

console.log(map);