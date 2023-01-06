// ТРЕНЕРОВКА TASKS17
// // ===========сумма всех чисел массива
// const cart=[2,6,3,8,26,87];
// let total=0;
// for (const i of cart) {
//     total+=i;
// }
// console.log(`Total:`, total);

// ==========сумма всех чисел массива, каждое число увеличить на 10% и округлить
// const cart=[2,6,3,8,26,87];
// let total=0;
// for (let i = 0; i < cart.length; i+=1) {
//     total+=Math.round(cart[i]*1.1);
// }
// console.log(`Total:`, total);

// ========сумма всех четных чисел массива
// const numbers=[2,6,3,8,26,87];
// let total=0;

// for (const i of numbers) {
//     if (i%2===0) {
//         total+=i;
//     }
// }
// console.log(`Total:`, total);

// =============поиск логина
// const logins=[`kiwi`, `orange`,`qwerty`,`poly`];
// const loginToFind=`qwerty`;
// let message=``;
// for (const i of logins) {
//     if (i===loginToFind) {
//         message=`Welcome!`;
//         break;
//     } message=`NO Welcome!`
// }

// message=logins.includes(loginToFind) ? message=`Welcome!`: message=`NO Welcome!`;

// console.log(message);

// ==========найти самое маленькое число в массиве
// const numbers = [51,64,14,25,7,85,19];
// // пусть первое =самое малень. Тогда если второе меньше первого, то второе=самое малень.

//     let smallestNumber=numbers[0];
//     for (const number of numbers) {
//         if (number<smallestNumber) {
//         number===smallestNumber;
//         } 
//     }
// console.log(smallestNumber);


// ===========обьединяет все элементы в массиве через запятую
// const friends=[`Mango`, `Poly`, `Kiwi`, `Ajax`];
// const string=friends.join(`, `);
// console.log(string);


// =============заменить регистр каждого символа в строке на противоположный
// const string=`JavaScript`;
// const symbols=string.split(``);
// let invertedString=``;

// for (const symbol of symbols) {
//     if (symbol===symbol.toLowerCase()) {
//         invertedString+=symbol.toUpperCase();
//     } else {
//         invertedString+=symbol.toLowerCase();}
// }

// console.log(invertedString);

// ========сделать slug в URL
const title=`Top 10 benefits of React framework`;
// переводим в нижний. Разбиваем на слова. Обьединяем
let titleSlug=title.toLowerCase().split(` `).join(`-`);
console.log(titleSlug)

// ==========сумма элементов двух массивов
const array1=[5,10,15,20];
const array2=[10,20,30];
let arrays=array1.concat(array2);
let summ=0;
for (const i of arrays) {
    summ+=i;
}
console.log(summ);

// ===========удалить третью карточку
const cards=[`Карточка-1`, `Карточка-2`, `Карточка-3`, `Карточка-4`, `Карточка-5`];
console.table(cards);

// cards.splice(2,1);
// console.table(cards);

// ===========добавить Карточка-6, которая будет под индексом 3
// cards.splice(2,0, `Карточка-6`);
// console.table(cards);

// =======заменить Карточку-2 на Карточка-7
// cards.splice(1,1, `Карточка-7`);
// console.table(cards);