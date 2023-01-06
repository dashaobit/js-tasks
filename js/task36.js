// множина=массив
const cart=[2,6,3,8,26,87];
console.log(cart);

// ===========обьединяет все элементы в массиве через запятую
const friends=[`Mango`, `Poly`, `Kiwi`, `Ajax`];
console.log(friends);

const string=friends.join(`     `);
console.log(string);

// сшивает несколько массивов в один через concat и распыление
const A=[1,2,3];
const B=[4654677564,8328932983];
const C=[7,8,9];
// const allTemps=lastWeekTemps.concat(currentTemps,nextWeekTemps);

const allTemps=[...A, ...B, ...C];
console.log(allTemps);

// =============функция возвращает в переменной words результат разделения строки message по разделителю delimeter - получаем массив строк.
function splitMessage(message, delimeter) {
    let words;
    words=message.split(delimeter);
    return words;
}
console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));