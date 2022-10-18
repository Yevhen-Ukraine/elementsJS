

//const answers = [];

//answers[0] = prompt('Имя', '');
//answers[1] = prompt('Фамилия', '');
//answers[2] = prompt('Возраст', '');

//console.log(typeof(answers));
// console.log(typeof(null)); /* Ошибка - устаревшее */
 /* Интерполяйия - можем вставлять внутрь строки значение переменной */

const category = 'toys';

//console.log('https://someurl.com/' + category + '/' + '4'); /* устарело */
console.log(`https://someurl.com/${category}/5`); /* работает тлько с косыми кавычками */

const user = "Yevhen";

alert(`hello, ${user}`);
