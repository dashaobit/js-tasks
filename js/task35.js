// МЕТОДЫ FILTER И FIND
// в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number%2===0);
const oddNumbers = numbers.filter(number => number%2!==0);

console.log(evenNumbers);
console.log(oddNumbers)

// МЕТОД EVERY()
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// все элементы четные - да
const eachElementInFirstIsEven = firstArray.every(element=> (element%2)===0); // да
// все элементы нечетные - нет
const eachElementInFirstIsOdd = firstArray.every(element=> (element%2)!==0); // нет

const eachElementInSecondIsEven = secondArray.every(element=> (element%2)===0); // да
const eachElementInSecondIsOdd = secondArray.every(element=> (element%2)!==0); // нет

const eachElementInThirdIsEven = thirdArray.every(element=> (element%2)===0); // нет
const eachElementInThirdIsOdd = thirdArray.every(element=> (element%2)!==0); // нет

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);
console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);
console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);

// SOME()
// Есть хотя бы один четный элемент - да
const anyElementInFirstIsEven = firstArray.some(element=> element%2===0); // да
// Есть хотя бы один нечетный элемент - нет
const anyElementInFirstIsOdd = firstArray.some(element=> element%2!==0); // нет

const anyElementInSecondIsEven = secondArray.some(element=> element%2===0); // нет
const anyElementInSecondIsOdd = secondArray.some(element=> element%2!==0); // да

const anyElementInThirdIsEven = thirdArray.some(element=> element%2===0); // да
const anyElementInThirdIsOdd = thirdArray.some(element=> element%2!==0); // да

console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);
console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);
console.log(anyElementInThirdIsEven);
console.log(anyElementInThirdIsOdd);

// МЕТОД REDUCE()
// подсчёт среднего
const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce((previousValue, element) =>  previousValue+element); // подсчет суммы
const averagePlayTime = totalPlayTime / playtimes.length; // подсчет среднего

// МЕТОД REDUCE() И МАССИВ ОБЪЕКТОВ
// среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. 
const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

// перебирает каждого игрока и возвращает (player.playtime/player.gamesPlayed) каждого из них
const totalAveragePlaytimePerGame = players.reduce (
    (acc, player) => acc + player.playtime/player.gamesPlayed, 0
);
console.log(totalAveragePlaytimePerGame);