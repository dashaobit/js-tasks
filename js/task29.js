// ДОСТУП К СВОЙСТВАМ ОБЪЕКТА В ЕГО МЕТОДАХ
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         const index=this.books.indexOf(oldName);
//         this.books.splice(index,1,newName);
//     },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf.books);

// ===================ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//         this.potions.push(potionName);
//     },
// };

// atTheOldToad.addPotion("Invisibility");
// console.log(atTheOldToad.potions);

// =====================УДАЛЯЕМ ЗЕЛЬЕ
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         const index=this.potions.indexOf(potionName);
//         this.potions.splice(index, 1);
//     },
// };

// atTheOldToad.removePotion("Dragon breath"),
// console.log(atTheOldToad.potions);

// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.potions);

// ==================ОБНОВЛЯЕМ ЗЕЛЬЕ
// обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//         const index=this.potions.indexOf(oldName);
//         this.potions.splice(index,1,newName);
//     },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);

// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.potions);

// РАСШИРЯЕМ ИНВЕНТАРЬ
// каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
        if (this.potions.includes(newPotion)) {
            return `Error! Potion ${newPotion} is already in your inventory!`;
        }

        this.potions.push(newPotion);
    },
    removePotion(potionName) {
        const potionIndex = this.potions.indexOf(potionName);

        if (potionIndex === -1) {
            return `Potion ${potionName} is not in inventory!`;
        }

        this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
        const potionIndex = this.potions.indexOf(oldName);

        if (potionIndex === -1) {
            return `Potion ${oldName} is not in inventory!`;
        }

        this.potions.splice(potionIndex, 1, newName);
    },
    // Change code above this line
};

atTheOldToad.getPotions();
// [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]


atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
console.log(atTheOldToad.potions);

atTheOldToad.addPotion({ name: "Power potion", price: 270 });
console.log(atTheOldToad.potions);

atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
console.log(atTheOldToad.potions);
// "Error! Potion Dragon breath is already in your inventory!"

atTheOldToad.removePotion("Dragon breath");
console.log(atTheOldToad.potions);
// [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]

atTheOldToad.removePotion("Speed potion");
console.log(atTheOldToad.potions);
// в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]