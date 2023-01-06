// ===========Функция deliverPizza или makePizza передается как колбэк и ожидает аргументом имя готовой доставляемой пиццы
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

//     function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

//     function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// makeMessage("Royal Grand", makePizza);
// console.log(makeMessage);


// // ===========инлайн функция (функция внутри функции)
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }

//   // Передаём инлайн функцию deliverPizza как колбэк
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });

//   // Передаём инлайн функцию eatPizza как колбэк
//   makePizza("Ultracheese", function eatPizza(pizzaName){
//     console.log(`Eating pizza ${pizzaName}`);
//   });

// // ================НЕСКОЛЬКО КОЛБЭКОВ
// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
        
//         if (this.pizzas.includes(pizzaName)){
//             return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//         };

//         return onSuccess(pizzaName);
//     },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }

// // Method calls with callbacks
// // pizzaPalace.order('Smoked', makePizza, onOrderError);
// // pizzaPalace.order('Four meats', makePizza, onOrderError);
// // pizzaPalace.order('Big Mike', makePizza, onOrderError);
// // pizzaPalace.order('Vienna', makePizza, onOrderError);

// // Вызываем функцию pizzaPalace.order и выводим результат в консоль
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));

// // // Выводим функцию pizzaPalace.order в консоль, передаётся ссылка на функцию, а не результат вызова. В консоль выводится её тело.
// console.log(pizzaPalace.order);

// // ============FOREACH(CALLBACK)
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     for (let i = 0; i < orderedItems.length; i += 1) {
//         totalPrice += orderedItems[i];
//     }

//     // рефакторинг
//     orderedItems.forEach(function (number, index) {
//         totalPrice += number;
//     });

//     return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// // ===========фильтрация FOREACH
// // Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     //     }
//     // }

//     // рефакторинг
//     numbers.forEach(function (number, index) {
//         if (number > value) {
//             filteredNumbers.push(number);
//             }
//     });

//     return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// // ============ОБЩИЕ ЭЛЕМЕНТЫ FOREACH
// // Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //     if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //     }
//     // }

//     firstArray.forEach(function (number, index) {
//         if (secondArray.includes(number)) {
//             commonElements.push(number);
//             }
//     });

//     return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// // ==============Анонимная стрелочная функция
// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//     console.log(`Индекс ${index}, значение ${number}`);
// });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//     console.log(`Индекс ${index}, значение ${number}`);
// });

// // ==============Анонимная стрелочная функция
// // function calculateTotalPrice(orderedItems) {
// //     let totalPrice = 0;

// //     orderedItems.forEach(function (item) {
// //         totalPrice += item;
// //     });

// //     return totalPrice;
// // };

// const calculateTotalPrice = orderedItems => {
//     let totalPrice = 0;

//     orderedItems.forEach(item=> {
//         totalPrice += item;
//     });

//     return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]);

// // ===========ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0
// const filterArray=(numbers, value)=> {
//     const filteredNumbers = [];

//     numbers.forEach(number=> {
//         if (number > value) {
//         filteredNumbers.push(number);
//         }
//     });

//     return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// // =========ОБЩИЕ ЭЛЕМЕНТЫ 2.0
// const getCommonElements=(firstArray, secondArray)=> {
//     const commonElements = [];

//     firstArray.forEach(element=> {
//         if (secondArray.includes(element)) {
//         commonElements.push(element);
//         }
//     });

//     return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// =============Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
function changeEven(numbers, value) {

    // for (let i = 0; i < numbers.length; i += 1) {
    //     if (numbers[i] % 2 === 0) {
    //     numbers[i] = numbers[i] + value;
    //     }
    // }
    const newArr=[];
    numbers.forEach(element => {
        if (element % 2 === 0) {
            newArr.push(element + value);
            } else {
                newArr.push(element);
            }
    });
    return newArr;
}
console.log(changeEven([1, 2, 3, 4, 5], 10));