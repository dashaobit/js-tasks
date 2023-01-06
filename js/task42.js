// =======НАСЛЕДОВАНИЕ КЛАССОВ==========КОНСТРУКТОР ДОЧЕРНЕГО КЛАССА
class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}

// class Admin extends User {
//     // Change code below this line
//     // Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

//     constructor ({email, accessLevel}) {
//         super(email);
//     }
    
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };
//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ===============Добавь классу Admin следующие свойства и методы.
// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.

class Admin extends User {
    // Change code below this line
    blacklistedEmails =[];

    static AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser",
    };

    constructor({ email, accessLevel, blacklistedEmails =[] }) {
        super(email);
        this.accessLevel = accessLevel;
        this.blacklistedEmails =blacklistedEmails ;
    }

    blacklist(email){
        this.blacklistedEmails.push(email);
    }

    isBlacklisted(email) {
        if (this.blacklistedEmails.includes(email)) {
            return true;
        }
        return false;
    }

    // Change code above this line
}

    const mango = new Admin({
        email: "mango@mail.com",
        accessLevel: Admin.AccessLevel.SUPERUSER,
    });

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true