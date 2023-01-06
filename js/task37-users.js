const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39
    }
  ];

//   возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
const getUsersWithEyeColor = (users, color) => {
  console.log(users);
  return users.filter(user=> user.eyeColor===color);
};
console.log(getUsersWithEyeColor(users, 'blue'));
console.log(getUsersWithEyeColor(users, 'brown'));

//   возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(user=> (user.age<=maxAge && user.age>=minAge))
};
console.log(getUsersWithAge(users, 20, 30));

// возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName))
};
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Adrian Cross"));

// возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
const getFriends = (users) => {
    const allFriends = users.flatMap (user => user.friends);
    const uniqueFriends = allFriends.filter((element, index, array) => array.indexOf(element) === index);
    return uniqueFriends;
};
console.log(getFriends(users));

// возвращала массив активных пользователей, значение свойства isActive которых true.
const getActiveUsers = (users) => {
    return users.filter(user => user.isActive===true)
};
console.log(getActiveUsers(users));

// возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.
const getUserWithEmail = (users, email) => {
  return users.find(user=> user.email===email)
};
console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "qwerty@kog.com"));

// проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
const isEveryUserActive = (users) => {
  return  users.every(user=> user.isActive)
};
console.log(isEveryUserActive(users));

// проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
const isAnyUserActive = users => {
  return  users.some(user=> user.isActive)
};
console.log(isAnyUserActive(users));

// ОБЩИЙ БАЛАНС ПОЛЬЗОВАТЕЛЕЙ - считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
const calculateTotalBalance = users => {
  return users.reduce((acc, user) => acc+user.balance,0)
};
console.log(calculateTotalBalance(users));

// ОБЩЕЕ КОЛИЧЕСТВО ДРУЗЕЙ - считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
const getTotalFriendCount = users => {
  return users.reduce((acc,user) => acc+user.friends.length,0)
};
console.log(getTotalFriendCount(users));

// СОРТИРОВКА ПО БАЛАНСУ - возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
const sortByAscendingBalance = users => {
  return users.sort((a,b)=> a.balance-b.balance)
};
console.table(sortByAscendingBalance(users));

// СОРТИРОВКА ПО КОЛИЧЕСТВУ ДРУЗЕЙ - возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
const sortByDescendingFriendCount = users => {
  return [...users].sort((a,b)=> b.friends.length-a.friends.length)
};
console.table(sortByDescendingFriendCount(users));

// СОРТИРОВКА ПО ИМЕНИ - возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
const sortByName = users => {
  return [...users].sort((a,b)=> a.name.localeCompare(b.name))
};
console.table(sortByName(users));

// возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends)
const getNamesSortedByFriendCount = users => {

  return [...users].sort((a,b)=> a.friends.length-b.friends.length)
  .map (user => user.name)

}

console.log(getNamesSortedByFriendCount(users));

// возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту 
const getSortedFriends = users => {
  const allFriends = users.flatMap (user => user.friends);
  const uniqueFriends = allFriends.filter((element, index, array) => array.indexOf(element) === index);
  return [...uniqueFriends].sort((a,b)=> a.localeCompare(b));

  // return users.flatMap (user => user.friends)
  // .filter ((friend, index, array) => array.indexOf(friend) === index)
  // .sort ((a, b) => a.localeCompare(b))
};
console.log(getSortedFriends(users));

// возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender
const getTotalBalanceByGender = (users, gender) => {
  return users
  .filter(user => user.gender===gender)
  .reduce((acc, user) => acc+user.balance,0)
};
console.log(getTotalBalanceByGender(users, "male"));
console.log(getTotalBalanceByGender(users, "female"));