const options = {
    //key ключь: значение
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        dg: 'red'
    }
};

//console.log(options.name);
//console.log(options["colors"]['border']);

//Для удаления

//delete options.name;
//console.log(options);

//Для перебора

/* for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`); //Получаем ключ и  значение
} */
//for (    of    ) для обьекта не работает

// Когда перебираем ключи мы их можем проверять при помощи условий, если значение ключа будет обьектом мы можем запустить перебор внутри перебора

/* for (let key in options) {
    if (typeof(options[key]) === `object`) {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);        
        } 
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    
} */

//У обьектов нет свойства length поэтому мы не можем узнать какое колличество элементов, колличество пар ключь и значение находится внутри options. Вот самый банальный способ - перебор. Счетчик подсчитывает сколько свойств внутри.

//Прием счетчика:

/* let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === `object`) {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
            
        } 
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    
} */

//Еще один метод который часто используется у обьектов

console.log(Object.keys(options)).length; //Получаем массив со всеми ключами (Это встроенный метод)

//Можно создавать методы в ручную:
const options = {
    //key ключь: значение
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        dg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};
//Запускаем метод созданный в ручню
options.makeTest();

//Обьекты это структуры которые могу сохранять в себе любые типы данных в формате ключ - значение. Они могут быть вложеные - обьекты в обьекты.


//ДЕСТРУКТУРИЗАЦИЯ ОБЬЕКТОВ

//Иногда нужно достучася до вложенных свойств. Вытаскиваем переменные в качестве отдельных структур.

const options = {
    //key ключь: значение
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        dg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};
//Запускаем метод созданный в ручню
options.makeTest();

const {border, bg} = options.colors; //Создаем переменную const указываем переменные которые хотим вытащить, ставим знак присваивания и помещаем структуру из которой хотим их вытащить. Т.е. диструктурировать (разделить на более мелкие составляющие)
console.log(border);//Результат black

