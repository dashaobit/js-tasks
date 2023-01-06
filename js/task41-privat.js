// // ==================Инкапсуляция
// class Car {
// // свойство brand - приватное
//     #brand;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     // getBrand() - возвращает значение приватного свойства brand
//     getBrand(){
//         return this.#brand;
//     }

//     // changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
//     changeBrand(newBrand){
//         this.#brand =newBrand
//     }
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }))

// // ===============свойства model и price приватные, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами
// class Car {

//     #brand;
//     #model;
//     #price;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.#model = model;
//         this.#price = price;
//     }

//     // возвращаем значение приватного свойства #brand
//     get brand() {
//         return this.#brand;
//     }

//     // изменяем значение приватного свойства #brand
//     set brand(newBrand) {
//         this.#brand = newBrand;
//     }

//     get model() {
//         return this.#model;
//     }

//     set model(newModel) {
//         this.#model = newModel;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         this.#price = newPrice;
//     }
// }

// const car = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(car.brand); 

// car.brand = "superAudi";
// console.log(car.brand); 

// // ===========СТАТИЧЕСКИЕ СВОЙСТВА
// class Car {

//     #price;

//     // публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля
//     static MAX_PRICE= 50000;

//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     // Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.
//     set price(newPrice) {
//         if (newPrice <= Car.MAX_PRICE){
//             this.#price = newPrice;
//         }
//     }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// ==================СТАТИЧЕСКИЕ МЕТОДЫ
class Car {
    static #MAX_PRICE = 50000;

    // метод checkPrice(price), принимающий цену автомобиля. Метод сравает значения параметра price и приватного статического свойства MAX_PRICE
    static checkPrice (price){
        if (price > Car.#MAX_PRICE){
            return "Error! Price exceeds the maximum"
        }
        return "Success! Price is within acceptable limits"
    }

    constructor({ price }) {
        this.price = price;
    }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// ================свойство items приватное
class Storage {

    #items
    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        this.#items = this.#items.filter(item => item !== itemToRemove);
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// =================свойство value приватное
class StringBuilder {

    #value 
    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value += str;
    }

    padStart(str) {
        this.#value = str + this.#value;
    }

    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}

  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // "."

  builder.padStart("^");
  console.log(builder.getValue()); // "^."

  builder.padEnd("^");
  console.log(builder.getValue()); // "^.^"

  builder.padBoth("=");
  console.log(builder.getValue()); // "=^.^="
