// В html пишем обработчик событий
// onclick="alert('Click')" Не рекомендуется применять

const btn = document.querySelector('button')
/* 
btn.onclick = function () {
    alert('Click');
};

btn.onclick = function () {
    alert('Second Click');
}; */
// В с лучае использования такого кода будет использоваться последний обработчик это происходит при повторном использовании и может нарушить корректную работу кода. Также при такой записи нельзя будет удалить обработчик в том случае если он не нужен в последствии.

btn.addEventListener('click', () => {
    alert('Click');
});


btn.addEventListener('click', () => {
    alert('Second Click');
});
// Выполнится две функции по очереди

btn.addEventListener('mouseenter', (event) => {
    console.log(event.target);
    event.target.remove();
    //console.log('Hover');
});
// Удаляем элемент понаведению мыши

// Удаление обработчиков событий с некоторых элементов

let i = 0;
const deleteElement = (event) => {
    console.log(event.target);;
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
}

btn.addEventListener('click', deleteElement);
// Удаляет обработчик после одного клика


/* Отменяем переход по ссылке */

const link = document.querySelector('a');//а это ссылка, селектор выбран потому что она одна в html

link.addEventListener('click', (e) => {
    e.preventDefault(); // метод останавливает переход по ссылке для выполнения каких либо других действий. этот метод применяеться первым, потом взаимодействуем с ссылкой

    console.log(e.target);
});


/* Ошибки новичков */

// Если мы один и тотже обработчик событий применяем на несколько элементов например: const btn = document.querySelector('button') - у нас несколько кнопок. У переменной btn не существует метода addEventListener. Потому что переменная содержит псевдомассив с разными кнопками. 
// Чтобы на несколько элементов вешать обработчики собутий необходимо перебрать псевдовмассив и на каждый элемент внутри навесить обработчик событий. Можно использовать обычный метод или метод forEach
const btns = document.querySelector('button');

btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true});
});

// Опции события, в методе addEventListener присутствует третий аргумент с помощью которого мы можем передавать опции, например once(срабатывает один раз) - он заменяет removeEventListener и уже не нужны более габаритные конструкции. В итоге каждая кнопка сработает один раз.