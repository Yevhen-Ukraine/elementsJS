'use strict';

window.addEventListener('DOMContentLoaded', () => {
    /*  */
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    
/* Скрываем контент */
    function hideTabContent() {
        tabsContent.forEach(item => {
            //item.style.display = 'none'; //Вариант для инлайн стилей. 
            item.classList.add('hide');
            item.classList.remove('show', 'fade'); //В конце сжатого css файла по варварски добавили стилей
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        });
    }
/* Показываем контент с первым по умолчанию элементом и добавляем ему класс активности */
    function showTabContent(i = 0) { //по новому стандарту es6 мы можем сразу в обьявлении аргументов присвоить дефолтное значение для i, а не в вызове функции. Это делается на случай если функция вдруг вызовется без аргументов
        //tabsContent[i].style.display = 'block'; //Для инлайн стилей
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide'); //В конце сжатого css файла по варварски добавили стилей
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    /* Назначение обработчика событий используя делигирование */
    tabsParent.addEventListener('click', (event) => {
        const target = event.target; //Для удобства

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => { //Проверяем совпадения при переборе псевдомассива с кликом пользователя (item - каждый перебираемый таб, i - номер по порядку)
                if (target == item) { //Какой таб кликнул пользователь
                    hideTabContent();
                    showTabContent(i);
                }
            });
        } //При помощи contains определяем что мы точно кликнем в табы а не в родителя

    });
});