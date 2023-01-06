const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
};

//   // ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ ТОЧКУ
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// // ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ КВАДРАТНЫЕ СКОБКИ
// // const aptRating = apartment['rating'];
// // const aptDescr = apartment['descr'];
// // const aptPrice = apartment['price'];
// // const aptTags = apartment['tags'];

// // console.log(aptRating);
// // console.log(aptDescr);
// // console.log(aptPrice);
// // console.log(aptTags);

//   // ДОСТУП К ВЛОЖЕННЫМ СВОЙСТВАМ
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// // ИЗМЕНЕНИЕ ЗНАЧЕНИЯ СВОЙСТВА
// apartment.price=5000;
// apartment.rating=4.7;
// apartment.owner.name="Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);

// // ДОБАВЛЕНИЕ СВОЙСТВ
// apartment.area =60;
// apartment.rooms =3;
// apartment.location= {
//     country: "Jamaica",
//     city: "Kingston",
// }
// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location);

// // КОРОТКИЕ СВОЙСТВА
// // const product = {name, price, image, tags}

// ВЫЧИСЛЯЕМЫЕ СВОЙСТВА
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
    [emailInputName]: 'henry.carter@aptmail.com',
    [passwordInputName]: 'jqueryismyjam',
};

// // ===========ЦИКЛ FOR...IN - перебирает ключи объекта и значения обькта. Записывает в массив keys все его ключи, а в массив values все значения его свойств.
// const keys = [];
// const values = [];
// for (const key in apartment) {
//     // Ключ
//     // console.log(key);
//     keys.push(key);
//     // Значение свойства с таким ключом
//     // console.log(apartment[key]);
//     values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// // ===============Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const values = [];

// const keys=Object.keys(apartment); // массив ключей

// for (const key of keys) {
//     values.push(apartment[key]); // Значение свойства с таким ключом
// }

// console.log(keys);
// console.log(values);

// =============расходы на зарплату
function countTotalSalary(salaries) {
    let totalSalary = 0;

    const values=Object.values(salaries);
    for (const value of values) {
        totalSalary+=value;
    }
    return totalSalary;
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));