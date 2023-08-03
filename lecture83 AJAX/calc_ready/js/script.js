'use strict';

const inputUa = document.querySelector('#ua'),
      inputUsd = document.querySelector('#usd');

inputUa.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); // Этот метод содержит в себе настройки будущего запроса. 
    // Аргументы метода (method, url "формируется относительно файла index.html", async, login, pass)(метод, путь, синхронность кода "асинхронный по умолчанию стоит в позиции tru", логин, пароль для запросов требующих это)
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // Этот метод указывает что именно мы отправляем на сервер "http заголовки"
    request.send(); // В случае пост запроса этот метод может ринимать какой-то bady

    // status - статус запроса сервера (404, 0, 200, 403 и т.д.)
    // statusText - текстовое описание ответа от сервера
    // response - ответ от сервера
    // readyState - текущее состояние запроса у сервера


    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUa.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

});