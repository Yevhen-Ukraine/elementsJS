'use strict';
/* Классы это красивая обертка функций конструкторов (синтаксический сахар). Классы внутри это все теже функции.
- создаем шаблон, а потом создаем отдельных потомков, которые будут помещяться на наш сайт, таким образом используя только один участок кода мы можем создать много компонентов на сайтах, которые будут чем-то отличаться */

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width; 
    }

    /* Для примера создадим метод для расчета площади прямоугольника */

    calcArea() {
        return this.height * this.width;
    }
}
/* Допустим я хочу создавать такие же цветные прямоугольники с текстом. Этот класс будет наследовать свойства основного */

class ColorredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); // Этот метод вызывает супер конструктор родителя, иными словами она вызавает тоже самое что было у родителя. Этот метод всегда должен быть на первом месте в конструкторе. В аргументах мы можем указать те свойства которые нам нужны (нам не всегда нужны все свойства)
        this.text = text;
        this.bgColor = bgColor;  
    }

    // Создадим еще один класс чтобы посмотреть что эти свойства работают

    showMyProps() {
        console.log(`Текст:${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColorredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());