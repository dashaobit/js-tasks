/*
 * Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.
 */

const arr = [1, 2, 3, -1, -2, -3];
const newArr=[];

function isPositive(number) {
    if (number >= 0) {
        return true;
    } else {
        return false;
    }
}
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    if (isPositive(element)){
        // console.log(element);
        newArr.push(element);
    }
}
console.log(newArr);