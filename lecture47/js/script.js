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

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) { /* Превращаем обьект в массив с значениями. Дальше у нас развилка. Либо элемент будет массивом либо обьектом.  */
        /* Если это массив */
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students));
// Средний прогресс по всем студентам равен 41.6