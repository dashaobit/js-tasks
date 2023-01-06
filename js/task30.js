// недодел см.task31   рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
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

        for (const potion of this.potions) {
            if (potion.name===newPotion.name) {
                return 'Error! Potion ${newPotion} is already in your inventory!';
            }
        }
        this.potions.push(newPotion);

    //     if (this.potions.includes(newPotion)) {
    //     return `Error! Potion ${newPotion} is already in your inventory!`;
    //     }
    // this.potions.push(newPotion);
    },

    removePotion(potionName) {
        const potionIndex = this.potions.indexOf(potionName);

        for (const potion of this.potions) {
            console.log(potion.name);
            console.log(potionIndex);
            if (potion.name===potionName.name) {
                // potions.splice(potions.indexOf(potion), 1);
                this.potions.splice(potionIndex, 1);
                return potions;
            }
            return `Potion ${potionName} is not in inventory!`;
        }

        // if (potionIndex === -1) {
        // return `Potion ${potionName} is not in inventory!`;
        // }

        // this.potions.splice(potionIndex, 1);
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

// 
// removePotion(potionName) {
//     let potions = this.potions;
//     for (potion of potions) {
//         console.log(potion, “POTION”);
//         console.log(potions.indexOf(potion),“INDEX OF POTION”);
//         console.log(potion.name, ” POTION NAME”);
//         if (potion.name === potionName){
//             potions.splice(potions.indexOf(potion), 1);
//     return potions;
//         }
//     return potions;
//     }
// },


// atTheOldToad.getPotions();
// console.log(atTheOldToad.potions);  // [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// ===========добавляет обьект зелья
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.potions); 

// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// console.log(atTheOldToad.potions); // не изменится

atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
console.log(atTheOldToad.potions);


// ===========удаляет обьект зелья
atTheOldToad.removePotion("Dragon breath");
console.log(atTheOldToad.potions);