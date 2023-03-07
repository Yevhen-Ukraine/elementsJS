// touchstart Касание
// touchmove Дижение при касании
// touchend Оторвался от элемента
// touchenter При скольжении палец зашел на пределы элемента
// touchleave При скольжении палец вышел за пределы элемента
// touchcancel Выход за пределы браузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();//оТМЕНЯЕТ СТАНДАРТНОЕ ПОВЕДЕНИЕ БРАУЗЕРА

        console.log('start');
        console.log(e.targetTouches);
    })
});

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();//оТМЕНЯЕТ СТАНДАРТНОЕ ПОВЕДЕНИЕ БРАУЗЕРА

        console.log('move');
        console.log(e.targetTouches[0].pageX);//Обращаемся к первому пальцу и получаем координату по оси Х pageX, например если координаты переходят определенную границу то переключаеться слайдер
    })
});

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchend', (e) => {
        e.preventDefault();//оТМЕНЯЕТ СТАНДАРТНОЕ ПОВЕДЕНИЕ БРАУЗЕРА

        console.log('end');
    })
});

// touches - Колличество одновременных касаний с экраном
// targetTouches - Колличество пальцев взаимодействующих с конкретным элементом
// changedTouches - Пальцы которые совершили определенные действия. Наприме одновременно касались 4 пальца и один убрали.

/* На основании этого можно создавать события свайпа, щепотка */

// Пример: Строка 26

