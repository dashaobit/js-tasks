// рабочий вариант добавления зелья
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
        if (potion.name === newPotion.name) {
          return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
      }
      this.potions.push(newPotion);
    },


        removePotion(potionName) {
      for (let i = 0; i < this.potions.length; i++) {
        if (potionName === this.potions[i].name) {
          return this.potions.splice(i, 1);
        }
      }
      return `Potion ${potionName} is not in inventory!`;
    },

    
    updatePotionName(oldName, newName) {
      for (let i = 0; i < this.potions.length; i++) {
        if (oldName === this.potions[i].name) {
          return (this.potions[i].name = newName);
        }
      }
      return `Potion ${oldName} is not in inventory!`;
    },
    // Change code above this line
  };