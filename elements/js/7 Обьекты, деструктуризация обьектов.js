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

//Для удаления

//delete options.name;
console.log(options);

//Для перебора

for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
//for (    of    ) для обьекта не работает


