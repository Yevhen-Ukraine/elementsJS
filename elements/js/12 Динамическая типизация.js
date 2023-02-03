// 1
console.log(typeof(String(null)));
// Результат string

console.log(typeof(String(4)));
// Результат string 
// это не удобно

// 2 Конкратинация - сложение строки с чем либо
console.log(typeof(5 + ''));
// Результат string

const num = 5;

console.log("http://gmail.com/catalog/" + num);
// результат http://gmail.com/catalog/5

const fontSize = 26 + 'px';


// To number - превращаем в число

// 1

console.log(typeof(Number(4)));
// результат number - ребко используется

// 2 Унарный плюс - добавление плюса перед какимто типом данных

console.log(typeof(+'5'));
// результат number

// 3 Использование методов
console.log(typeof(perseInt("15px", 10))); 
// редко

let answ = +prompt("Hello", ""); 

// Все что мі будем получать от пользователя, мы будем получать в форме строка

// To boolean

// 1 Нативный способ

// Это всегда превращаеться в folse
0, '', null, undefined, NaN;
// Все остальное будет превдой
let switcher = null;
if (switcher) {
    console.log('Working...');
}
switcher = 1;
if (switcher) {
    console.log('Working...');
}

// 2

console.log(typeof(Boolean('4')));

// 3

console.log(typeof(!!"4444"));
// Результат boolean