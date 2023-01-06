// // массивы

// const friends=[`Mango`, `Kiwi`, `Poly`, `Ajax`]
// console.table(friends); // выводит таблицу с массивом

// console.log(friends[2]); // так обращается к конкретному элементу массива

// friends[1]='qwertyu' // изменяет 1й по индексу элемент

// const firstIndex=friends[0]; // переменная для первого элемента - индекс 0
// const lastIndex=friends.length-1; // переменная для последнего элемента=длина строки минус один. Выводит ИНДЕКС последнего элемента
// console.log(lastIndex);

// const friendsLength=friends.length; // переменная = длина массива

// const lastElement=friends[lastIndex]; // переменная для вывода ЗНАЧЕНИЯ последнего элемента

// очистить массив
const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
fruits.length = 0;
console.log(fruits); // вернет []
// Как объединить более двух массивов
const fruits = ['apple', 'banana', 'orange'];
const meat = ['poultry', 'beef', 'fish'];
const vegetables = ['potato', 'tomato', 'cucumber'];
const food = [...fruits, ...meat, ...vegetables];
console.log(food); // вернет ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]
// Как получить рандомное значение массива
const fruits = [
    'banana',
    'apple',
    'orange',
    'watermelon',
    'apple',
    'orange',
    'grape',
    'apple',
];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit); // вернет рандомный фрукт из массива

// // передача по значению
// let a=10;
// let b=a;
// console.log(a);
// console.log(b);

// a=20;
// console.log(a);
// console.log(b); // b НЕ изменится

// // передача по ссылке
// let c=[1,2,3];
// let d=c;
// console.log(`c`, c);
// console.log(`d`, d);

// c[0]=500;
// console.log(`c`, c);
// console.log(`d`, d);  // d изменится

// console.log(c===d); //true. Это один и тот же массив сравнили с самим собой
// console.log([1,2,3]===[1,2,3]); //false. Это две РАЗНЫЕ ячейки в памяти. Элементы внутри одинаковы. Сравнение происходит НЕ по значению, а по АДРЕСУ ячейки в памяти

// // перебор массива от нулевого индекса до последнего (длина строки, но не равно длине строки), поэлементно +=1. С чего начинать, где заканчивать, как увеличивать
// const clients = ["Mango", "Ajax", "Poly"];
// console.table(clients);

// for (let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i]); // выводит значение элемента
//     console.log(i); // выводит индекс элемента
// }

// // изменяет каждый элемент
// for (let i = 0; i < clients.length; i += 1) {
//     clients[i]+= `-1`;
// }
// console.table(clients);

// // еще перебор, если нужны ВСЕ элементы, и не нужно обращаться к отдельному і-му элементу
// for (const client of clients) {
//     console.log(client);
// }
// console.table(clients);


// // // ===========сумма всех чисел массива
// // const cart=[2,6,3,8,26,87];

// // let total=0; // сделать переменную total для суммы. Ноль, чтобы задать этой переменной тип number, иначе она будет undefined
// // for (const value of cart) { // перебрать массив с помощью for-of
// //     total += value; // каждый элемент приплюсовать к total
// // }
// // console.log(`Total:`, total); // вывести итог


// // // ==========сумма всех чисел массива, каждое число увеличить на 10%
// // const cart=[2,6,3,8,26,87];

// // let total=0; // сделать переменную total для суммы
// // for (let i = 0; i < cart.length; i+=1) { // перебрать массив с помощью for
// //     total += Math.round(cart[i] *1.1)     // каждый элемент умножить на 1.1, округлить и приплюсовать к total
// // } 
// // console.log(`Total:`, total); // вывести итог


// // ========сумма всех четных чисел массива
// const numbers=[2,6,3,8,26,87];

// let total=0;// сделать переменную total
// // for (let i = 0; i < numbers.length; i+=1) {// перебрать массив 
// //     if (numbers[i]%2===0){  // проверить каждый элемент на четность
// //         total+=numbers[i];  // если четный, прибавить его к total
// //     }
// // }
// // console.log(`Total:`, total); 

// // лучше for-of 
// for (const number of numbers) {
//     if (number%2===0){  
//         total+=number;  
//     }
// }
// console.log(`Total:`, total); 


// // =============поиск логина
// const logins=[`kiwi`, `orange`,`qwerty`,`poly`];
// const loginToFind=`qwerty`;
// // let message=`пользователь ${loginToFind} не найден`;
// // изначально говорим, что пользователь НЕ найден. А потом уже проверяем и ищем пользователя найден

// // 1 вариант - for
// // for (let i = 0; i < logins.length; i+=1) {
// //     const login = logins[i];
// //     console.log(`Login:`, login);
// //     console.log(`${login}===${loginToFind}:`, login===loginToFind);

// //     if (login===loginToFind){
// //         message=`пользователь ${loginToFind} найден`;
// //         break;
// //     } 
// // }
// // console.log(message);

// // 2 вариант - for-of
// // for (const login of logins) {
// //     console.log(`Login:`, login);
// //     console.log(`${login}===${loginToFind}:`, login===loginToFind);

// //     if (login===loginToFind){
// //         message=`пользователь ${loginToFind} найден`;
// //         break;
// //     } 
// // }
// // console.log(message);

// // 3 вариант -  тернарный оператор
// const message=logins.includes(loginToFind) ? `пользователь ${loginToFind} найден` : `пользователь ${loginToFind} не найден`;
// console.log(message);


// // ==========найти самое маленькое число в массиве
// // пусть первое число - самое маленькое. Второе число будем сравнивать с первым. Третье с первым
// const numbers = [51,64,14,25,7,85,19];
// let smallestNumber=numbers[0];

// if (numbers<smallestNumber) {
//     smallestNumber===numbers;
// }
// console.log(smallestNumber);

// найти самое маленькое число чрез функцию
const findSmallestNumber=function(number){
    let smallestNumber=numbers[0];

    for (const number of numbers) {
        if (numbers<smallestNumber) {
    smallestNumber===numbers;
        }
    }
    return smallestNumber;
}
console.log(findSmallestNumber([3,8,12,-2,15]))

// =============заменить регистр каждого символа в строке на противоположный
const string=`JavaScript`;
const letters=string.split(``);
let invertedString=``;

for (const letter of letters) {
    // if(letter===letter.toLowerCase()){
    //     invertedString+=letter.toUpperCase();
    // } else {
    //     invertedString+=letter.toLowerCase();
    // }

    // тернарный оператор
    invertedString+=
        letter===letter.toLowerCase() 
            ? letter.toUpperCase() 
            : letter.toLowerCase()
}
console.log(invertedString);

// через функцию
const changeCase=function(string){
    const letter=string.split(``);
    let invertedString=``;

    for (const letter of letters) {
        invertedString+=
        letter===letter.toLowerCase() 
            ? letter.toUpperCase() 
            : letter.toLowerCase()
    }
    return invertedString;
}
console.log(changeCase(`qweRTY`));

// ========сделать slug в URL
//1- нормализируем строку. 2- Разбиваем по словам. 3- сшиваем строку с разделителем
const title=`Top 10 benefits of React framework`;

// const normTitle=title.toLowerCase();
// console.log(normTitle);

// const words=normTitle.split(` `);
// console.log(words);

// const slug=words.join(`-`);
// console.log(slug);

const slug=title.toLowerCase().split(` `).join(`-`);
console.log(slug);

// через функцию
const slugify=function(srtring){
    
    return slug=title.toLowerCase().split(` `).join(`-`);;
}

console.log(slugify(`Top 10 benefits of React`))

// ==========сумма элементов двух массивов
// const array1=[5,10,15,20];
// const array2=[10,20,30];
// // 1.обьединить два массива в один новый массив
// // 2.перебрать новый массив

// const arrays=array1.concat(array2);
// for (const array of arrays) {
//     total+=array;
// }
// console.log(total);

// ===========удалить третью карточку
const cards=[`Карточка-1`, `Карточка-2`, `Карточка-3`, `Карточка-4`, `Карточка-5`];
console.table(cards);

// const cardToRemove=`Карточка-3`;
// const index=cards.indexOf(cardToRemove); // индекс третьей карточки
// console.log(index);

// cards.splice(index, 1); // удали карточку под индексом index, одну штуку
// console.table(cards);

// ===========добавить Карточка-6, которая будет под индексом 3
// const cardToInsert=`Карточка-6`;
// const index=3;

// cards.splice(index,0,`Карточка-6`);
// console.table(cards);

// =======заменить Карточку-2 на Карточка-4
const cardToUpdate=`Карточка-4`;
const index=cards.indexOf(cardToUpdate);

cards.splice(index,1,`Обновленная карточка-4`);
console.table(cards);