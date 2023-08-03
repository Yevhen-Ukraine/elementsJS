'use strict';

// const persone = {
//     name: 'Alex',
//     tell: '+47777777'
// };

console.log(JSON.stringify(persone)); // Преобразование данных при передаче на сервер
console.log(JSON.parse(JSON.stringify(persone))); // Преобразование данных при получении с сервера


/* ГЛУБОКИЕ КОПИИ СОЗДАЮТЬСЯ С ПОМЩЩЬЮ JSON */

const persone = {
    name: 'Alex',
    tell: '+47777777',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
const clone = JSON.parse(JSON.stringify(persone)); //Сначала метод "JSON.stringify(persone)" переведет существующий обьект в формат JSON, а затем следующая операция - "JSON.parse(JSON.stringify(persone))" возьмет JSON и распарсит его обратно в обьект JS поместив при этом в переменную clone. Т.о будет создан глубокий клон который не будет зависеть от первоночального обьекта. Убедимся:
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
//Результат кода (Первоначальный обьект остался без изменений):
{
    name: 'Alex',
    tell: '+47777777',
    parents: { mom: 'Olga', dad: 'Mike' }
}
{
    name: 'Alex',
    tell: '+47777777',
    parents: { mom: 'Ann', dad: 'Mike' }
}
// При поверхностной копии первоначальный обьект был бы изменён