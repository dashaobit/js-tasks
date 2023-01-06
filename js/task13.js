// // =======проверяет пароль
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password===SAVED_PASSWORD;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// // =========проверяет пароль
// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password===null) { 
//       message =  'Canceled by user!';
//     } else if (password===ADMIN_PASSWORD) { 
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
  
//     return message;
//   }

// // или ранний возврат
// // function checkPassword(password) {
// //   const ADMIN_PASSWORD = "jqueryismyjam";
  
// //   if (password === ADMIN_PASSWORD) {
// //     return "Welcome!";
// //   } 
// //     return "Access denied, wrong password!";
// // }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// // =======проверяет пароль
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   message=password===ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// // ===========проверяет пароль с помощью switch
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
 
//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }

// switch(password){
//   case null:
//   message = "Canceled by user!";
//   break;

//   case ADMIN_PASSWORD:
//   message = "Welcome!";
//   break;

//   default:
//   message="Access denied, wrong password!"
// }
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));

// =========проверяет пароль
const logins=[`m4ngoDoge`, `k1widab3st`, `poly1scure`]

const findLogin=function(allLogins, loginToFind) {
  for (const login of allLogins) {
    if (login===loginToFind) {
      return `Пользователь ${loginToFind} найден`
    }
  }
  return `Пользователь ${loginToFind} не найден`
}

// тернарный
// const findLogin=function(allLogins, loginToFind) {
//   const message=allLogins.includes(loginToFind) 
//     ? `пользователь ${loginToFind} найден` 
//     : `пользователь ${loginToFind} не найден`
// return message;
// }

console.log(findLogin(login, `avocod3r`));
console.log(findLogin(login, `m4ngoDoge`));


// ========проверяет товары на складе
// function checkStorage(available, ordered) {
//     let message;
//       if(ordered===0){
//           message=`There are no products in the order!`;
//       } else if(ordered>available){
//           message=`Your order is too large, there are not enough items in stock!`
//       } else {
//           message=`The order is accepted, our manager will contact you`
//       }
//     return message;
// }

// или ранний возврат
function checkStorage(available, ordered) {
  
    if(ordered===0){
      return `There are no products in the order!`;
    } if(ordered>available){
      return `Your order is too large, there are not enough items in stock!`
    } return `The order is accepted, our manager will contact you`;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));