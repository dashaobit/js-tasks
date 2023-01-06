// // ===============Перебор объекта
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//     };

// // перебирать через for-in - плохо
//     for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значение свойства с таким ключом
//     console.log(book[key]);
//     }

// // нужно одной строкой 
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]


// Деструктуризируем
const { title, author, isPublic, rating, coverImage } = book;
console.log(coverImage); // undefined

// Добавим картинку обложки если её нет в объекте книги
const {
    title,
    coverImage = "https://via.placeholder.com/640/480",
    author,
} = book;

  console.log(title); // The Last Kingdom
  console.log(author); // Bernard Cornwell
  console.log(coverImage); // https://via.placeholder.com/640/480

// ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ
for (const book of books) {
    const { title, author, rating } = book;

    console.log(title);
    console.log(author);
    console.log(rating);
}

// ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ
for (const { title, author, rating } of books) {
    console.log(title);
    console.log(author);
    console.log(rating);
}



// =============сумма продуктов в объекте
const goods = {
    apples: 6,
    grapes: 3,
    bread: 4,
    cheese: 7,
};

const values = Object.values(goods); // [6, 3, 4, 7]

let total = 0;

for (const value of values) {
    total += value;
}

console.log(total); // 20

// ПОДСЧЁТ СВОЙСТВ
function countProps(object) {
    // одной строкой через длину массива
    let propCount = Object.keys(object).length;

    // // перебирать через for-of - средненько
    // let propCount = 0;
    // const keys=Object.keys(object);

    // for (const key of keys) {
    //     propCount+=1;
    // }

    // // перебирать через for-in - плохо
    // for (const key in object) {
    //     if (object.hasOwnProperty(key)) {
    //         propCount += 1;
    //     }
    // }

    return propCount;
}
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));