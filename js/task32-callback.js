// callback

// // ============считаем стоимость продукта
// // 1. создаем функцию, которая принимает в качестве аргументов обьект object, колбєк функцию callback
// // creatProduct создает из сущ.обьекта - новый обьект, в который добавляем новое значение id-шника
// function creatProduct(object, callback) {
//     const product={
//         id: Date.now(),
//         ...object,
//     };
    
//     // 2. возвращаем результат работы колбэка над нашим обьектом (т.е. п.3 и 4)
//     return callback(product);
// }

// function logProduct(element) {
//     // 3. первая ф-ция колбэк просто выводит в консоль новый обьект
//     console.log(element);
// };

// function logTotalPrice(product) {
//     // 4. вторая ф-ция колбэк выводит в консоль стоимость продукта
//     console.log(product.price * product.quantity)
// }

// creatProduct({name: 'apple', price: 20, quantity: 3}, logProduct);

// creatProduct({name: 'lemon', price: 30, quantity: 5}, logTotalPrice);

// та же задача без колбэк
function creatProduct(object) {
    const product={
        id: Date.now(),
        ...object,
    };
    
    return console.log(product);
}

function creatProduct(object) {
    const product={
        id: Date.now(),
        ...object,
    };
    
    console.log(product.price * product.quantity);
}

creatProduct({name: 'apple', price: 20, quantity: 3});
creatProduct({name: 'lemon', price: 30, quantity: 5});

// та же задача со стрелочной функцией и неявным возвратом

const creatProduct=(object, callback) => {
    const product={
        id: Date.now(),
        ...object,
    };

    return callback(product);
}

const logProduct=element=> console.log(element);

const logTotalPrice=product=> console.log(product.price * product.quantity);

creatProduct({name: 'apple', price: 20, quantity: 3}, logProduct);
creatProduct({name: 'lemon', price: 30, quantity: 5}, logTotalPrice);


// // ================
// // 3 add записалась как аргумент в параметр callback
// const doMath=function(a,b, callback) {
//     // 4 вызываем callback (а передается в х, b передается в y). В переменную result записался рещкльтат вызова add
//     const result=callback(a,b);

//     console.log(result);
// }

// // 1 обьявляем add
// const add= function (x,y) {
//     return x+y;
// }

// // 2 кидаем add в doMath
// doMath(2,3, add);


// // ===========Отложенный вызов
// const callback= function () {
//     console.log('Через 2 секунды внутри колбека в таймаут');
// };
// console.log('Эта строка в коде перед таймаутом');
// setTimeOut(callback, 2000);
// console.log('Эта строка в коде после таймаута');

// // ==============фильтрация

// const fruits=[
//     {name: 'apples', quantity:200, isFresh: true},
//     {name: 'grapes', quantity:150, isFresh: false},
//     {name: 'bananas', quantity:100, isFresh: true},
// ];

// const getFruitsWithQuantity= function (fruit) {
//     return fruit.quantity >= 120;
// };

// const rez=filter(fruits, getFruitsWithQuantity);
// console.log(rez);

// // ==============фильтрация (простое число)
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13];

// ===========неявный возврат стрелочной функции
// До
function classicAdd(a, b, c) {
    return a + b + c;
}

// После
const arrowAdd = (a, b, c) => a + b + c;