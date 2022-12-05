
let num = 20;/* Глобальная переменная */

function showFirstMessage(text) {
    console.log(text);
    //let num = 10; /* Локальная переменная существующая внутри функции. Вне функции ее вызвать нельзя */
    num = 10;
    
}
/* Пока функция просто существует. чтобы она заработала ее нужно вызвать */
showFirstMessage("Hello World!");
console.log(num);


/* Замыкание функции - это сама функция со всеми внешними переменными которые ей доступны */

/* FUNCTION DECLARATION */
/* Можно использовать переменную до обьявления функции */
function calc(a, b) {
    return (a + b); /* После return функция останавливается */
}
console.log(calc(4, 3));
console.log(calc(6, 5));
console.log(calc(11, 4));

function ret() {
    let num = 50;/* локальная переменная которая не пересекается с глобальной */

    ////////* Какой-то код, логика */

    return num; /* Функция возвращает во внешний мир значение локальной переменной */
}

const anotherNum = ret();
console.log(anotherNum);

/* ПРИМЕР FUNCTION EXPRESSION */

const logger = function() {
    console.log("Hello");
};

logger(); /* Вызов функции */



/* СТРЕЛОЧНЫЕ функции - не имеют своего контекста вызова */

//const callc = (a, b) => a + b; /* Сокращенный вариант */

const callc = (a, b) => {
    console.log('Чего-то там)))');
    return a + b;
}; /* Классический вариант */