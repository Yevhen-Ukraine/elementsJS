'use strict';

/* Это конструктор */

/* Конструкторы необходимы для создания новых однотипных обьектов, на практике это могут быть:
- пользователи сайтов
- товары в магазинах
- ролики на ютубе
т.е. везде где есть шаблонизация обьектов */

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};
/* Этот метод будет прототипно наследоваться всеми потомками которые были созданы после обьявления этого метода */

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);