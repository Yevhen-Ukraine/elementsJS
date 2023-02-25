
// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);/* Получаем весь html */
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild); //отталкиваемся от родителя
/* Аналоги */
// console.log(document.body.firstElementChild); /* Первый элемент родителя body, получим в консоли wrapper  */


/* Отталкиваемся от любого элемента, позволяют получать элементы от соседей, родителей и детей */

// console.log(document.querySelector('#current').parentNode);/* Получаем родителя "first" */
console.log(document.querySelector('#current').parentElement);/* Получаем родителя "first" */

console.log(document.querySelector('#current').parentNode.parentNode);/* Получаем родителя выше уровнем "wrapper" */

/* Как получить data отрибут */
// console.log(document.querySelector('[data-current="3"]').nextSibling);/* Получаем следующее значение за дата-атрибутом. Получаем текстовую ноду перенос строки*/
// console.log(document.querySelector('[data-current="3"]').previousSibling);  /* Все эти команды получают узлы (перенос строки, текст). Что бы этого не случалось у этих команд есть аналоги */

console.log(document.querySelector('[data-current="3"]').nextElementSibling);/* Получаем элементы игнорируя узлы */