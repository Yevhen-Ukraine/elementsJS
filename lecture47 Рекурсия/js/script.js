// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//         // result = x * result; Это таже запись
//     }
//     return result;
// }

// /* Рекурсия, функция запускает сама себя */

// function pow(x, n) { /* n - глубина рекурсии - это общее колличество вложенных вызовов включая самый первый */
//     if (n === 1) {/* База рекурсии, к этому значению рано или поздно придет функция */
//         return x;
//     } else {
//         return x * pow(x, n - 1); /* Шаг рекурсии это запуск вложенной функции но уже с другим вложением */
//     }
// }

// pow(2, 1)//2
// pow(2, 2)//4
// pow(2, 3)//8
// pow(2, 4)//16

// Пример

let students = {
    js: [{
        name: 'Jonh',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) { /* Превращаем обьект в массив с значениями. Дальше у нас развилка. Либо элемент будет массивом либо обьектом.  */
//         /* Если это массив */
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));
// Средний прогресс по всем студентам равен 41.6


/* Если допустим усложнить базу данных и поместить много уровней вложеностей то функцию необходимо будет усложнить с повторяющимися элементами. Поэтому можно применить РЕКУРСИЮ */

function getTotalProgressByRecursion(data) {
    /* Проверяем если это массив */
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return (total, data.length);

    /* Это сама рекурсия и сдесь мы попадаем на второй обьект (html) и внутри мы его будем перебирать */    
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);


// Упражнение по написанию кода

// Напишите функцию, которая вычисляет факториал.

// Задание простое, но нужно понимать что такое факториал вообще. Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// Отсюда мы можем понять, что функция должна принимать 1 аргумент, который будет являться числом. Будет неплохо, если вы на собеседовании сразу напишите проверку на приходящее значение :) Поэтому, если в нашу функцию приходит дробное число или не число  - возвращается строка с любым сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1.

// Сам же факториал с примерами выглядит вот так:

// n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула

// Примеры значений для разных n:

//1. 1! = 1
//2. 2! = 2 * 1 = 2
//3. 3! = 3 * 2 * 1 = 6
//4. 4! = 4 * 3 * 2 * 1 = 24
//5. 5! = 5 * 4 * 3 * 2 * 1 = 120
// То есть, вызов нашей функции factorial(5) возвращает число 120

// factorial(4) => 24

// Решить задачу нужно через рекурсию.

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }

    // Более короткий вариант, который вы можете встретить
    // Но не учитывает отрицательные значения
    return n ? n * factorial(n - 1) : 1;
}

factorial(5)