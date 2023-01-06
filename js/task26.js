// // spread - распыление массива
// const numbers=[
//     1000,
//     ...[1,2,3],
//     5000,
//     ...[4,5,6],
//     7000,
//     ...[7,8,9],
// ];

// console.log(numbers);

// // наименьшее число (температура)
// const temps=[18,14,12,21,17,29]

// console.log(Math.max(1,4,6,15,7)); // ищет в независимых элементах, но не в массиве
// console.log(Math.max(temps)); // ниче не будет
// console.log(Math.max(...temps));

// // сшивает несколько массивов в один через concat и распыление

// const lastWeekTemps=[1,2,3];
// const currentTemps=[4,5,6];
// const nextWeekTemps=[7,8,9];

// // const allTemps=lastWeekTemps.concat(currentTemps,nextWeekTemps);

// const allTemps=[...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// // сшивает несколько обьектов
// // если в обьектах есть одинаковые свойства, они перезапишуться!
// const a={x:1, y:2};
// const b={x:0, z:3};

// // const c=Object.assign({}, a, b); 
// /*  {x:0, 
//     y:2, 
//     z:3} */

// const c={...a, ...b,};
// console.log(c);

// // порядок распыления влияет на конечный результат
// const d={
//     ...a, 
//     x:10,
//     ...b,
//     y:20,
// };
// console.log(d);
// /* {x: 0
// y: 20
// z: 3} */

// // среднее число (температура)
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const {yesterday, today, tomorrow}=highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// // изменение имени переменных и добавление переменных (значений по умолчанию)
// const {yesterday:highYesterday,
//     today:highToday,
//     tomorrow:highTomorrow,
//     highIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// ДЕСТРУКТУРИЗАЦИЯ
const forecast = {
    today: {
        low: 28,
        high: 32,
        icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
    },
    tomorrow: {
        low: 27,
        high: 31,
    },
};

const { 
    today: { 
        low: lowToday, 
        high: highToday, 
        icon: todayIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, 
    tomorrow: 
        { low: lowTomorrow, 
        high: highTomorrow, 
        icon: tomorrowIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
} = forecast;

console.log(lowToday, highToday, todayIcon, lowTomorrow, highTomorrow, tomorrowIcon);

//   const highToday = forecast.today.high;
//   const lowToday = forecast.today.low;
//   const todayIcon = forecast.today.icon;

//   const highTomorrow = forecast.tomorrow.high;
//   const lowTomorrow = forecast.tomorrow.low;
//   const tomorrowIcon = forecast.tomorrow.icon;


// ==========деструктуризация свойств объекта forecast - средняя температура
function calculateMeanTemperature(forecast) {
    // const todayLow = forecast.today.low;
    // const todayHigh = forecast.today.high;
    // const tomorrowLow = forecast.tomorrow.low;
    // const tomorrowHigh = forecast.tomorrow.high;

    const {
        today: {
            low: todayLow,
            high: todayHigh,},

        tomorrow: {
            low: tomorrowLow,  
            high: tomorrowHigh}
}=forecast;

    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(calculateMeanTemperature({ 
    today: {low: 28, high: 32}, 
    tomorrow: {low: 25, high: 29} 
    }));