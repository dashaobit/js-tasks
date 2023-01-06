// КАРТОЧКИ ЗАДАЧ
// составить и вернуть новый объект задачи. Нужно spread - обьединить переменные completed,category,priority и обьект в параменте data. Последовательность записи - запишет из параметра data
function makeTask(data) {
    const completed = false;
    const category = "General";
    const priority = "Normal";

    const newObject = {category: 'General', priority: 'Normal', completed: false, ...data};

    return newObject;
}

console.log(makeTask({}));
console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
console.log(makeTask({ category: "Finance", text: "Take interest" }));

// ОПЕРАЦИЯ распыление REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ
// принимала любое количество аргументов, считала и возвращала их сумму
function add(...args) {
    let total=0;
    for (const arg of args) {
        total+=arg;
    }
    return total;
};
console.log(add(15, 27));

// ОПЕРАЦИЯ REST ДЛЯ СБОРА ЧАСТИ АРГУМЕНТОВ ФУНКЦИИ
// считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции
function addOverNum(firstNumber, ...args) {
    let total = 0;

    for (const arg of args) {
        if (arg>firstNumber) {
            total += arg;
        }
    }

    return total;
}
console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// МАССИВ СОВПАДЕНИЙ
// возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента
function findMatches(array, ...args) {
    const matches = []; // Don't change this line

    for (const arg of args) {
        if (array.includes(arg)) {
            matches.push(arg);
        }
    }

    return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));