 'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 500px;';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


/* for (let i = 0; i < hearts.length; i++) {
    hearts[1].style.backgroundColor = 'blue';
} */ 
//Можно использовать цикл (почти не будем использовать) 
/* Переменный оператор равен 0 (Перебор элементов начинается с 0) */
/* Перебираем все элементы псевдомассива i < hearts.length */
/* length - свойство обозначающее все элементы массива< цикл будет работать пока они там есть*/
/* i++  */

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


/* Методы для работы с элементами страницы */

const div = document.createElement('div');
// const text = document.createTextNode('тут был я');

div.classList.add('black');

wrapper.append(div); /* Этот метод Вставляет элемент в конец родителя */
//wrapper.appendChild.add('black');/* Этот устаревший  метод Вставляет элемент в конец родителя */

//wrapper.prepend(div); /* Этот метод Вставляет элемент в начало родителя */
// hearts[0].before(div);/* Вставляем элемент перед первым элементом*/
// hearts[0].after(div);/* Вставляем элемент после первого элемента*/

//wrapper.insertBefore(div, hearts[1]);/* Вставляет div перед вторым эл. */

//circles[0].remove();/* Удаляем первый элемент */
//wrapper.removeChild(hearts[1]);/* Старый метод удаления эл. */

//hearts[0].replaceWith(circles[0]);/* Заменяем один элемент другим */
//wrapper.replaceChild(circles[0], hearts[0]);/* Старый метод замены */

div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "Hello";/* Этот  */

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
/* beforebegin Вставляет перед элементомю. 
afterbegin соответственно вставляет в нычало элемкнта 
beforeend вставляет перед концом 
afterend вставляет после єлемента*/

//Общение с пользователем

//alert('Joke')

//const question = confirm("Are you here?");
//console.log(question);

//const answer = prompt("Вам есть 18?", "18");
//console.log(answer);
//console.log(typeof(answer)); /*typeof - Оперратор для проверки на тип данных */
//Любая информация полученная от клиента всегда приходит в виде строк - string
// const answer = +prompt("Вам есть 18?", "18"); /* + - Получаем числовое значение */
//const answer = +prompt("Вам есть 18?", "18");
//console.log(answer + 5); /* К введённому числу прибавит 5 */


/* Записываем ответы пользователя в маассив данных */
const answers = []; /* Создали пустой массив [] */

// answers [0] = prompt('Как ваше имя?', '')
// answers [1] = prompt('Как ваша фамилия?', '')
// answers [2] = prompt('Сколько вам лет?', '')

//console.log(typeof(answers));
// console.log(typeof(null)); /* Ошибка - устаревшее */
 /* Интерполяйия - можем вставлять внутрь строки значение переменной */

 const category = 'toys';

 //console.log('https://someurl.com/' + category + '/' + '4'); /* устарело */
 console.log(`https://someurl.com/${category}/5`); /* работает тлько с косыми кавычками */
 
 const user = "Yevhen";
 
 alert(`hello, ${user}`);
 





