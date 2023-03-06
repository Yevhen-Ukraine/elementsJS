// touchstart Касание
// touchmove Дижение при касании
// touchend Оторвался от элемента
// touchenter При скольжении палец зашел на пределы элемента
// touchleave При скольжении палец вышел за пределы элемента
// touchcancel Выход за пределы браузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
    })
});