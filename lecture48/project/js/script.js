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
            const newFilm = addInput.value; //В свойстве value будет содержаться то что ввел пользователь
            const favorite = checkbox.checked; //Атрибут checked получает булиновые значения (поставлена галочка или нет tru или folse)

            movieDB.movies.push(newFilm); //Добовляем в список то что ввел пользователь.

            movieDB.movies.sort(); //Сортируем по алфовиту
            
        });

    //Удаление рекламы
    const deleteAdv = ()
    adv.forEach(item => {
        item.remove();
    });
    
    genre.textContent = 'драма';
    
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    
    movieDB.movies.sort(); //Сортируем по алфавиту

    function createMovieList(films, parent) { //Оборачиваем в фунцию для повторного использования
        parent.innerHTML = ""; //Удаляем все фильмы записанные в html.

        films.forEach((film, i) => { //Обращаемся к базе данных и перебираем используя колбэк фуекцию
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
    }

    createMovieList(movieDB.movies, movieList);

});


