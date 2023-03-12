'use strict';

// const boxesQuery = document.querySelectorAll('.box'); // Показывает статическое состояние псевдомассива но имеет методы.

// const boxesGet = document.getElementsByClassName('box'); //Отслеживает динамическое состояние html коллекции (дом-дерева). На прямую коллекцию изменять нельзя из-за отсутствия методов



// console.log(boxesQuery);
// console.log(boxesGet);

// // Получение псевдомассива другими методами:
// console.log(document.body.children); //В псевдоэлементах получим доолнительно подключенный скрипт.


/* ЕСЛИ ЕСТЬ ЗАДАЧА НАЙТИ ЭЛЕМЕНТ ПО ОПРЕДЕЛЕННЫМ ПАРАМЕТРАМ А ИМЕННО ПО CSS СЕЛЕКТОРУ*/

const boxesQuery = document.querySelectorAll('.box');

const boxesGet = document.getElementsByClassName('box'); 

boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log(box); //Вместо консоли можно сделать что угодно, например изменить вёрстку, вывести тот бокс который меня интересует и многое другое. Метод ищет непосредственно внутри элемента на котором применяется (box)
})

/* МЕТОД CLOsEST */
console.log(boxesQuery[0].closest('.wrapper'));// Получим элемент который содержит боксы. Ищет у своих родителей. Это полезно когда есть большая вложенность.