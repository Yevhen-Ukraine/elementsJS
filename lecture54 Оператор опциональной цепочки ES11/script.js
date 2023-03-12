'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');
/* 
console.log(block)

console.log(block.textContent);

console.log(1 + 2);
 */
// В случае такой последоавтельности возникнет ошибка во второй консоли и код остановиться на не существующем в вёрстке блоке. Последняя операция выполнена не будет. Ставим условие для устранения этой проблеммы.

/* 
console.log(block)

if (block) {
    console.log(block.textContent);
}

console.log(1 + 2); 
*/


// Оператор опциональной цепочки

// console.log(block)

// console.log(block?.textContent); /* Получаем undefined. Оператор получает значение слева от себя (null либо undefined ) и останавливает операцию возвращая undefined. При этом не возникает ошибки. Это позволяет избавиться от условий там где это не нужно. ЭТО РАБОТАЕТ ТОЛЬКО НА ЧТЕНИЕ. ЕСЛИ ПОПРОБОВАТЬ ЗАПИСАТЬ ТО БУДЕТ ОШИБКА 
// Пример:
// block?.textContent = '123';  - Ошибка записи строки 123 из-за undefined 
// */

// console.log(1 + 2);
 
const userData = {
    name: 'Ivan',
    age: null

}
if (userData && userData.skills && userData.skills.js)
console.log(userData.skills.js); //Если у нас со стороны приходят какие-то данные и в них не у всех есть skills, js  то такая запись вызовет ошибку при переборе. 
// Для того чтобы избежать длинных условий (if) используем ОПЕРАТОР ОПЦИОНАЛЬОЙ ЦЕПОЧКИ
console.log(userData?.skills?.js);

// Еще вариант использования с методом
const userData = {
    name: 'Ivan',
    age: null
    say: function() {
        console.log('Hello');
    }
}

userData.say();
userData.hey?.(); 