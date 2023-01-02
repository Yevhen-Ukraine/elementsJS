function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first ();
second ();

Результат не очевидный: 
2
1


Call back - функция которая дожна быть выполнена, после того как другая функция будет выполнена.

Пример 2:
С анонимной функцией

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('Я прошел этот рок!');
});
Таким образом всегда соблюдается последовательность функций

Пример с осознанной функцией

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот рок!');
}

learnJS('JavaScript', done);  