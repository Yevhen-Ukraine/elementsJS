'use strict';
/* 
constctimerId = setTimeout(() => {
    console.log('Hello');
}, 2000); */

// Еще один синтаксис
/* 
const timerId = setTimeout(function(text) {
    console.log(text);
}, 2000, 'Hello'); */

// Еще один синтаксис

// const timerId = setTimeout(logger, 2000);

// Способ остановки в нужный момент
// clearInterval(timerId);

// function logger() {
//     console.log('text');
// }

/* Переменная timerId задается для того чтобы иметь возможность в нужный момент остановить ее. В переменную записываеться числовой идентификатор этого таймера  */

// Еще пример с кнопкой
// Обычный метод setTimeout
/* 
const btn = document.querySelector('.btn');
let timerId,
    i = 0;

btn.addEventListener('click',() => {
    //const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);// timerId используеться локально, поэтому задаем ее глобально в const
});



function logger() {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('text');
    i++;
}
 */

// Рекурсивный вызов setTimeout
/* 
const id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);
 */


/* Пример анимации (Устаревший) */


const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);