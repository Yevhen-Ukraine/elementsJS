/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

        addForm.addEventListener('submit', (event) => { //Чтобі отследить отправку формі есть обработчик собітий submit и стрелочную функцию
            event.preventDefault(); //Отменяем стандартное поведение браузера, чтобы при нажатии отправить страничка не перезагружалась
            //Далее Узнаем что пользователь ввёл и поставил ли галочку
            let newFilm = addInput.value; //В свойстве value будет содержаться то что ввел пользователь. не забывать что свойство velue содержит пустую строку, поэтому при нажатии кнопки подтвердить строки для фильмов будут заполняться пустым содержимым
            const favorite = checkbox.checked; //Атрибут checked получает булиновые значения (поставлена галочка или нет tru или folse)

            // Пишем условие в которое помещаем newFilm, оно будет выполняться только тогда, когда input будет заполнен. Тоесть если input не пустая строка, а newFilm в логическом контексте будет true:
            if (newFilm) {

                // Второе задание 2)
                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`
                }

                if (favorite) {
                    console.log("Добавляем любимый фильм");//Задание 4)
                }

                movieDB.movies.push(newFilm); //Добовляем в список то что ввел пользователь.

                // movieDB.movies.sort(); //Сортируем по алфовиту
                sortArr(movieDB.movies);

                createMovieList(movieDB.movies, movieList);//Обновляем      список фильмов
            }

            

            event.target.reset(); //

        });

    //Удаление рекламы
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    deleteAdv(adv);
    // Создаем функцию для последующего переиспользования
    


    const makeChanges = () => {
        genre.textContent = 'драма';
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges();
    // Создаем функцию для последующего переиспользования

    const sortArr = (arr) => {
        arr.sort();
    };



    function createMovieList(films, parent) { //Оборачиваем в фунцию для повторного использования
        parent.innerHTML = ""; //Удаляем все фильмы записанные в html.
        sortArr(films);

        films.forEach((film, i) => { //Обращаемся к базе данных и перебираем используя колбэк фуекцию
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();//Удаляем со страницы
                movieDB.movies.splice(i, 1)// Удаляем с базы данных В атрибутах (удаленный эл, сколько эл)
                createMovieList(movieDB.movies, movieList);//Перезапускаем эту функцию, чтобы нумерация пунктов построилась заново            
            })
        })
    }

    createMovieList(movieDB.movies, movieList);

});


