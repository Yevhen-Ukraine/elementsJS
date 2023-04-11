'use strict';

/* Set это массив где каждое значение встречаеться только однажды */

//const arr = [1, 1, 2, 2, 4, 5, 6, 5]
const arr = ['Alex', 'Ana', 'Oleg', 'Alex']
/* Из этого массива мы можем создать новый set */

const set = new Set(arr);

set.add('Ivan');
set.add('Oleg');

console.log(set);

/* Методы add */

/* Консоль
Set(4) {'Alex', 'Ana', 'Oleg', 'Ivan'}
*/

/* Базозвые функции set */

// set.delete(value); // удаление
// set.has(value); // проверка
// set.clear();
// set.size;

/* Можем перебирать */

//for (let value of set) console.log(value);

set.forEach((value, valueAgaing, set) => {
    console.log(value, valueAgaing);
})