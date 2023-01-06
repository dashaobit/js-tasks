// коллекция (массив обьектов)

// =======Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors
const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
};

// // ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ
// for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }

console.log(hexColors);
console.log(rgbColors);

// ==========ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА
const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
    let getPrice=null;

    for (const product of products) {
        if (productName===product.name) {
            getPrice = product.price;
        }
    }
    return getPrice;
};

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Engine"));

// ========== КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

function getAllPropValues(propName) {
    let propValues=[];

    for (const product of products) {
        // если ключи обьекта Object.keys(product) включают ключ propName
        if (Object.keys(product).includes(propName)) {
            propValues.push(product[propName]);
        }
    }
    return propValues;
};

console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category"));

// ========ОБЩАЯ СТОИМОСТЬ ТОВАРА
// Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products
function calculateTotalPrice(productName) {
    let getSumm=0;

    for (const product of products) {
        if (productName===product.name) {
            getSumm = product.price*product.quantity;
        }
    }
    return getSumm;
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));