'use strict';

const p = document.querySelectorAll('p');
console.log(p);


/* Пример помещения скрипта в верстку */

/* const script = document.createElement('script');//Прописывааем тэг script

script.src = 'js/test.js';// Обращаемся к атрибуту. Редактируем атрибут внося в него адрес файла скрипта

script.async = false;//Изменяем порядок загрузки 

document.body.append(script);//Помещаем на страницу.  */

/* Скрипт будет загружаться только после того как будет добавлен в документ.  */

/* Динамически загружаемые скрипты ведут себя как асинхронные */

function loadScript(src) {
    const script = document.createElement('script');

    script.src = src;

    script.async = false;

    document.body.append(script);
}

/* Создаем два динамических скрипта которые помещаются строго последовательно за счет параметра false */

loadScript('js/test.js');
loadScript('js/some.js');