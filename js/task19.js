// /*
//  * Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
//  */
// const arr=[[1,2,3],[4,5],[6]];
// let total=0;

// for (const element of arr) {
//     // consol.log(element);
//     for (const number of element){
//         total += number;
//     }    
// }
// console.log (total);

/*
//  * Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
//  * Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
//  */
// // конверт в нижний регистр. Строку перевести в массив split

// function palindrome(string) {
//     const convertStr = string.toLowerCase();

//     console.log(convertStr === convertStr.split('').reverse().join(''));
// }

// palindrome('Anna');
// palindrome('John');


// * количество гласных букв в строке
// создаем переменную с массивом гласных букв. Перебираем массив гласных букв, переводим в нижний регистр. Количество гласных букв сначала ноль count = 0, потом +1 count += 1
// конференция 2часа 1мин

function findVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (const letter of string.toLowerCase()) { count += 1;
        if (vowels.includes(letter)) {
            count += 1;
        }
    }
    // body

    return count;
}

// findVowels('Anna');

console.log(findVowels('Anna'));
console.log(findVowels('Anastasia'));