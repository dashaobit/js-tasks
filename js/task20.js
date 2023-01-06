// // ==========Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
// function getExtremeElements(array) {
//     return[array[0], array[array.length-1]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// // =============функция возвращает в переменной words результат разделения строки message по разделителю delimeter - получаем массив строк.
// function splitMessage(message, delimeter) {
//     let words;
//     words=message.split(delimeter);
//     return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// ============общую стоимость гравировки всех слов в строке. Обьявляем переменную. Присваиваем ей: 
// 1.Разбиваем строку на слова message.split(" "). 
// 2.Считаем длину массива этих слов message.split(" ").length. 
// 3.Умножаем длину массива на цену (message.split(" ").length)*pricePerWord
function calculateEngravingPrice(message, pricePerWord) {
    let words;
    words=(message.split(" ").length)*pricePerWord;
    return words;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// // ========обьединяет слова массива c разделителем delimeter - получаем строку
// function makeStringFromArray(array, delimeter) {
//     let string;
//     string=array.join(delimeter);
//     return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// // читабельные URL-адеса
// // 1. Переводим все элементы в нижний регистр title.toLowerCase()
// // 2. Разделяем строку на элементы title.toLowerCase().split(" ")
// // 3. Возвращаем обьединенный массив строк в одну строку с разделителем 'дефис' titleSlug.join("-")
// function slugify(title) {
//     let titleSlug;
//     titleSlug=title.toLowerCase().split(" ");
//     return titleSlug.join("-");
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// //========== частичные копии исходного массива
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0,2); // первые два
// const nonExtremeEls = fruits.slice(1,fruits.length-1); // все, кроме первого и последнего
// const lastThreeEls = fruits.slice(-3); // последние три

// console.log(fruits);


// // =========
// const firstArray = ['Mango', 'Poly'];
// const secondArray = ['Peach', 'Houston'];
// const newArray=firstArray.concat(secondArray);
// console.log(newArray);

// // ========Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком
// function makeArray(firstArray, secondArray, maxLength) {

// const arrays=firstArray.concat(secondArray);
// for (const array of arrays) {
//         if (arrays.length<=maxLength) {
//             return arrays;
//         } return arrays.slice(0,maxLength);
//     }    
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// =========возвращает сумму всех целых чисел от единицы и до этого числа. 
// function calculateTotal(number) {
    
// let total=0;
// for (let i = 0; i <= number; i+=1) {
//     total+=i;
// }
//     return total;
// }
// console.log(calculateTotal(7));

// // ========сумма всех чисел массива
// function calculateTotalPrice(order) {
//     let total = 0;

//     for (const i of order) {
//         total+=i;
//     }
//     return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// // ============ПОИСК САМОГО ДЛИННОГО СЛОВА
// const findLongestWord = function(string) {
//     // let arrStr = string.split(' ');
//     // let wordLength = 0;
//     // let longestWord;

//     // for (let i = 0; i < arrStr.length; i += 1) {
//     //     wordLength = arrStr[1].length;

//     //     if (arrStr[i].length > wordLength) {
//     //     longestWord = arrStr[i];

//     //     return longestWord;
//     //     }
//     // }

//     let arrStr = string.split(' ');
//     let longestWord="";
//     for (const word of arrStr) {

//         if (word.length > longestWord.length) {
//             longestWord=word;
//         }
//     }
//     return longestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log();

// ==========возвращает массив всех целых чисел от значения min до max
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for(let i = min;  i <= max; i++)
//         numbers.push(i);
//     return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers());

// ==========возвращает массив всех чётных чисел от start до end
function getEvenNumbers(start, end) {
    const numbers = [];
    for (let i = start; i <= end; i+=1) {
        if (i%2===0) {
            numbers.push(i);
        }
    }
    return numbers;
}
console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(3, 11));

// =========в переменную number записывается первое число от start до end, которое делится на 5 без остатка
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
    if (i % 5 === 0) {
        number = i;
        break;
    }
}
console.log(number);

//  ====фильтрация массива. Функция возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число)
function filterArray(numbers, value) {
let newArray= [];

for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i]>value) {
        newArray.push(numbers[i])
    }
}

// for (const i of numbers) {
//     if (i > value) {
//         newArray.push(i);
//     }
// }
return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 5));

// влючен ли элемент в массив
function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];
    return fruits.includes(fruit); // Change this line
}
console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));
console.log(checkFruit());

// получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
function getCommonElements(array1, array2) {
let newArr=[];

    for (const i of array1) {
        if (array2.includes(i)) {
            newArr.push(i);
        }
    }

    return newArr;
}
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]))

// ищем число 3. Как только выполнится условие if, делаем возврат, который прервёт выполнение цикла и функции.
function fn() {
    for (let i = 0; i <= 5; i += 1) {
        console.log(i);

        if (i === 3) {
        console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
        return i;
        }
    }
    // Этот console.log не выполнится
    console.log("Лог после цикла в теле функции");
}

const result = fn();

console.log("Лог после выхода из функции");
console.log(`Результат выполнения функции ${result}`);

// 1 возвращает первое число от start до end, которое делится на divisor без остатка
// 2 не использует оператор break
// 3 не использует переменную number
function findNumber(start, end, divisor) {

    let number;

    for (let i = start; i < end; i += 1) {
        if (i % divisor === 0) {
        number = i;
        // break;
        return i;
        }
    }

    return number;
}
console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(16, 35, 7));

// ==========проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// function includes(array, value) {
//     return array.includes(value);
// }
function includes(array, value) {
    let valueToFind;

    for (const i of array) {
        if (i===value) {
            return true;
        }       
    }
    return false;
}
console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));