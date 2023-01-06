// ============Для инициализации экземпляра в классе есть метод constructor. Объект параметров
class Car {

    constructor({brand, model, price}) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    // два метода
    // getPrice() - возвращает значение свойства price из объекта который его будет вызывать
    getPrice(){
        return this.price;
    }

    // changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
    changePrice(newPrice){
        this.price=newPrice;
    }
}

console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));


// ===============склад товаров
// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
// removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.
class Storage{
    constructor(items){
        this.items=items;
    }

    getItems(){
        return this.items;
    }

    addItem(newItem){
        return this.items.push(newItem);
    }

    removeItem(itemToRemove){
        return this.items.splice(this.items.indexOf(itemToRemove), 1)
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



// =========КОНСТРУКТОР СТРОК
// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
class StringBuilder{
    constructor(initialValue){
        this.value=initialValue;
    }
    getValue(){
        return this.value
    }

    padEnd(str){
        this.value += str;
    }

    padStart(str){
        this.value = str + this.value;
    }

    padBoth(str){
        this.value = str + this.value + str;
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