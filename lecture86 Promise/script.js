'use strict';

console.log('Запрос данихх...');

const req = new Promise((resolve, reject) => { //Аргументы вместо которых будут подставляться функции. Первый аргумент resolve означает что обещание выполнилось правильно, так как ожидали. Второй аргумент означает что обещание не выполнилось
    setTimeout(() => {
        console.log('Підготовка даних...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product); // Передаем сюда данные которые будут идти дальше (то что получим от условного сервера)

        // Внутри setTimeout имитация асинхронного кода
    
    }, 2000);    
});

// Этот метод функции resolve предназначен для обработки положительногорезультата. По сути функция resolve описана в колбэк функции метода then
req.then((product) => { 
    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);
});

