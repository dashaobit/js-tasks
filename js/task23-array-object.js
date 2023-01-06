// коллекция (массив обьектов)
const friends = [
    {name: 'Mango', online: false},
    {name: 'Kiwi', online: true},
    {name: 'Poly', online: true},
    {name: 'Ajax', online: false},
]

console.table(friends);

for (const friend of friends) {
    console.log(friend); // friend - обьект
    console.log(friend.name); // friend.name - свойство обьекта friend

    friend.newProp = 555;
    // новой свойство КАЖДОМУ элементу массива с обьектами (передача по ссылке). Когда перебираем сложный тип данных (сейчас обьекты friend), то в переменную friend записывается ссылка на оригинальный обьект
}

console.table(friends);

// ========ищем друга по имени
const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        // console.log(friend);  // доступ к элементу внутри массива friends
        // console.log(friend.name);  // доступ к свойству name
        // console.log(friend.name===name);  // выводим проверку: свойство name равно параметру friendName('Poly','Chelsy')

        if (friend.name===friendName) {
            return 'нашли!!!';
        }         
    }
    return 'не нашли';
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

// ========полуаем имена всех друзей- массив имен
const getAllNames = function (allFriends) {
    const names=[];

    for (const friend of allFriends) {
        console.log(friend.name); // доступ к свойству name
        names.push(friend.name); // в новый пустой массив запушили name
    }

    return names;
};

console.log(getAllNames(friends));

// ========получаем имена всех друзей, которые онлайн
const getOnlineFriends = function (allFriends) {
    const onlineFriends=[];

    for (const friend of allFriends) {
        if (friend.online===true) {
            onlineFriends.push(friend.name);
        }
    }
    return onlineFriends;
};
console.log(getOnlineFriends(friends));