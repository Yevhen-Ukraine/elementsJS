//'use strict';

/* Контекст вызова это то что окружает функцию и в каких условиях она вызывается */

/* Пример из жизни: человек без определенного места жительства не имеет привязки к чему-либо. Но поместив его в жилище где он сможет жить и функционировать, то у человека появиться КОНТЕКСТ ВЫЗОВА */

/* 4 СПОСОБА ВЫЗОВА ФУНКЦИИ И В КАЖДОМ КОНТЕКСТ ВЫЗОВА ОТЛИЧАЕТЬСЯ */

/* 1 */
// Просто вызов функции 

function showThis() {
    console.log(this);
}
showThis();


// Без строгого режима ('use strict';) В консоли браузера получим window, контекст ссылается на глобальный обьект window
// С установленным ('use strict';) получим undefined 

/* Практическая задача */

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return this.a + this.b
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// 2)
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// 3)
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

// 4)
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13)); //результат удвоение 6 и 26 соответственно

// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручное привязка this: call, apply, bind любой фунции

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
    console.log(this);
}); // При использовании функции написанной в класическом режиме событием будет сам элемент на который кликнули 


/* РАБОТА СТРЕЛОЧНЫХ ФУНКЦИЙ С КОНТЕКСТОМ ВЫЗОВА */

//У стрелочной функции нет своего контекста вызова, она всегда его будет брать у родителя

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => { //Если бы мы использовали обычную функцию, то this превратился бы в undefind. Стрелочная функция не имеет своего контекста вызова, она берёт контекст у своего родителя. Родителем в данном случае являеться метод sayNumber, в свою очередь у метода контекст ссылаеться на обьект в котором он существует. Поэтому this будет ссылаться на обьект obj 
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();

// Есть ещё синтаксические нюансы

// const double = (a) => {
//     return a * 2;
// };
//Если действие функции помещаеться в одну строчку и имеет один аргумент, то аргумент можно записать без скобок:

const double = a => a * 2;
console.log(double(4));


/* Контекст вызова в обработчиках событий если мы используем стрелочную функцию */

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
    console.log(this);
});
//Т.о. в обработчиках событий, когда мы используем обычный синтаксис через funtion  мы имеем доступ к this. Если используем стрелочную функцию то контекст вызова теряеться, для этого аргументом стрелочной фунции ставим е(event) прописываем e.target.....


