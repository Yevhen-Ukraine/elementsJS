'use strict';

window.addEventListener('DOMContentLoaded', () => {
    /* Tabs */
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

    /* Timer */

    const deadline = '2023-07-24';

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;//
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);            
        }


        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    /* Функция устанавливает таймер на страничку */

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),

              timeInterval = setInterval(updateClock, 1000);

        updateClock();//Вызываем эту функцию для того, чтобы дата сразу корректно отображалась и не было отображения даты указанной в верстке а потом расчётной

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    /* Modal */

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');
    
    modalTrigger.forEach(btn => {
        // btn.addEventListener('click', () => {
        //     modal.classList.add('show');
        //     modal.classList.remove('hide');
        //     document.body.style.overflow = 'hidden'; //Отключаем прокрутку странички за модальным окном
        //  });
        btn.addEventListener('click', openModal);
    });

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId); // Если пользователь уже открывал окно самостоятельно, то окно не будет всплывать.
    }
    
    function closModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }/* Оптимизируем повторяющийся код созданием отдельной функции и передаем ее вторым аргументом */
    modalCloseBtn.addEventListener('click', closModal);

    // modalCloseBtn.addEventListener('click', () => {
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     document.body.style.overflow = ''; // При закрытии возвращаем пустую строку и браузер устанавливает значения по умолчанию
    // });


    /* Вариант с переключателем toggle */
/* Для использования toggel в класс modal добавляем класс show */
    // modalTrigger.addEventListener('click', () => {
    //     // modal.classList.add('show');
    //     // modal.classList.remove('hide');
    //     modal.classList.toggle('show');
    //     document.body.style.overflow = 'hidden'; //Отключаем прокрутку странички за модальным окном
    //  });
 
    //  modalCloseBtn.addEventListener('click', () => {
    //     //  modal.classList.add('hide');
    //     //  modal.classList.remove('show');
    //     modal.classList.toggle('show');
    //      document.body.style.overflow = ''; // При закрытии возвращаем пустую строку и браузер устанавливает значения по умолчанию
    //  });


    /* Закрываем окно поклику на подложку модального окна */

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            
            // modal.classList.add('hide');
            // modal.classList.remove('show');
            // document.body.style.overflow = '';

            closModal();
        }
    });

    /* Закрытие модального окна с помощью клавиатуры (Esc) */

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closModal();
        } /* Использование условия И закрывает модальное окно клавишей Esc только если окно 'show' */
    });

    // const modalTimerId = setTimeout(openModal, 3000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); //окно не появляется снова при повторном скроле до конца страницы
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // Используем классы для карточек

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.perent = document.querySelector(parentSelector);
            this.transfer = 41;
            this.changeToUAN();
        }

        changeToUAN() {
            this.price = this.price * this.transfer;
        } // Этот метод можно вызвать в render, а можно в самом конструкторе

        // Метод для формирования верстки
        // Создаем элемент, помещаем вёрстку, дополняем данными которые приходят как аргументы и поместить этот элемент на страницу
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
                // Если не один элемент в классы не был передан - ставим дефолтный класс(параметры по умолчанию)
            } else {
                this.classes.forEach(className => element.classList.add(className));    
            }
            
            element.innerHTML = `
                
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>

            `;
            this.perent.append(element);
        }
    }

    // Создаем новій обьект и візіваем метод render (два способа)

    // 1
    // const div = new MenuCard();
    // div.render();

    // 2 Метод использования на месте
    // Обьект может сужествовать и без переменной, делаеться это тогда, когда мы небудем переиспользовать обьект в последствии. Обьект будет использоваться на месте, он создасться и удалиться, потому что на него не будет потом никаких ссылок.

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
        // В этой карте при содании мы не передали класс для проверки работы парамертов по умолчанию
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        'Меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item',
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню "Постное" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        21,
        '.menu .container',
        'menu__item',
    ).render();

});

