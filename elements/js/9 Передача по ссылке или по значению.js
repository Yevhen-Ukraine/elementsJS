/* let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);
10
5 //При работе с примитивными типами данных всё передаётся по значению

const obj = {
    a: 5,
    b: 1
}; */

/* const copy = obj;//В этом случае не происходит копирования обьекта, а происходит переход по ссылке. Это значит что передается не сама структура обьекта, а ССЫЛКА на этот обьект.

console.log(copy);
console.log(obj); */

//Создание копий обьектов, массивов и др.
// Первый метод с помощью цикла

//Создаем функцию, которая создаст новый обьект перебирая старое свойство obj
function copy(mainObj) {
    let objCopy = {};//новый обьект(копия obj)

    let key;//переменную можно создавать вне перебирающей конструкции
    for (key in mainObj) {//у нас есть ключи внутри обьекта
        objCopy[key] = mainObj[key];//берём пустой обьект objCopy создаём в нем свойство через квадратные скобки и делаем копию с главного обьекта
    }

    return objCopy;//возвращаем наружу для взаимодействия
}

//тестируем эту функцию, создаем новую переменную это у нас будет обьект с следующими свойствами и обьектами внутри

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

const newNumbers = copy(numbers);//Создаём копию с помощью новой переменной далее запускаем функцию copy

//проверяем
newNumbers.a = 10; // заменяем значение
newNumbers.c.x = 11;

//console.log(newNumbers);
//console.log(numbers);

//результат при 
//{ a: 10, b: 5, c: { x: 11, y: 4 } }
//{ a: 2, b: 5, c: { x: 11, y: 4 } } // "x" поменялся из-за ссылочного типа данных. При обращении к "с" мы на самом деле обращаемся к обьекту внутри, потому что там осталась на него ссылочка    

// Есть два важных понятия глубокие и поверхносные копии
// Мы создали поверхносную копию

// Второй метод, с помощью метода Object.assign можно соединить обьекты

const add = {
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add));

//Результат
//{ a: 10, b: 5, c: { x: 11, y: 4 } }
//{ a: 2, b: 5, c: { x: 11, y: 4 } }
//{ a: 2, b: 5, c: { x: 11, y: 4 }, d: 17, e: 20 }

//Тоже самое мы можем сделать и с пустым обьектом

const clone = Object.assign({}, add); // и мы получаем уже какую-то отдельную копию помещая результат этой команды в clone

clone.d = 20;

// console.log(add);
// console.log(clone);//В клоне лежит поверхносная копия предидущего обьекта

// Метод для создания копии массива

const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray; если оставим так, то в newArray положиться просто ссылка на массив. Тоесть изменяя новый массив мы будем изменять старый массив.

const newArray = oldArray.slice(); //Метод позволяет скопировать старый массив

// Заменим для проверки
newArray[1] = 'Что-то вместо второго элемента'

//Проверяем
console.log(newArray);
console.log(oldArray);

// Стандарты ES6(для массивов) и ES8(для массивов и обьектов)
// Третий способ создания копии это использование оператора разворота /* SPRED */
//задача сложить два массива и добавить другие данные
const video = ['youtube', 'vimeo', 'tube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'telegram', 'instagram']; 
      
console.log(internet);

// Еще один пример посложнее

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];//допустим пришли какието данные

log(...num); //запускаем функцию

/* Четвёртый способ */

const array = ["a", "b"];

const newAarray = [...array];
console.log(newAarray);


const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);


// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

/* 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

Пример:

showProgrammingLangs(personalPlanPeter)  =>

"Язык js изучен на 20% Язык php изучен на 10%"

Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

P.S. Для переноса строки используется \n в конце строки. */

/* 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:

personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится. */

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan){
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        return str;
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    
    return exp;
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}
showProgrammingLangs(personalPlanPeter);


