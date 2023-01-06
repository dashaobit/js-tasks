// =======шаблонная строка
function makeMessage (name, price) {

    const message = `You picked ${name}, price per item is ${price} credits`;
    return message;
};
console.log(makeMessage('Radar', 6150));

// ========цена товара с доставкой
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

    const message=`You ordered droids worth ${orderedQuantity* pricePerDroid+ deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
    return message;
}
console.log(makeOrderMessage(2, 100, 50));

// =======проверяет возраст
function isAdult(age) {
    const passed = age>=18;
    return passed;
}
console.log(isAdult(20));
console.log(isAdult(18));
console.log(isAdult(14));

// =======проверяет возраст
function checkAge(age) {
    let message;
  
    if (age>=18) { 
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
    return message;
}
// или ранний возврат

// function checkAge(age) {
//   if (age>=18) { 
//     return "You are an adult";
//   }
//   return "You are a minor";
// }

console.log(checkAge(20));
console.log(checkAge(18));
console.log(checkAge(8));

// ========проверяет товары на складе
function checkStorage(available, ordered) {
    let message;
  if (available>=ordered) {
        message = 'Order is processed, our manager will contact you.';
      } else {
        message = 'Not enough goods in stock!';
      }
    return message;
  }
  console.log(checkStorage(100, 50));
  console.log(checkStorage(100, 130));
  console.log(checkStorage(200, 20));
  console.log(checkStorage(200, 150));

// ===========проверяет баланс на карте, хватит ли на покупку
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
      const totalPrice=pricePerDroid*orderedQuantity;
      if (totalPrice>customerCredits) {
          message = `Insufficient funds!`;
      } else {
          message = `You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`;
      }
    return message;
  }
  console.log(makeTransaction(3000, 5, 23000));
  console.log(makeTransaction(1000, 3, 15000));
  console.log(makeTransaction(5000, 10, 8000));
  console.log(makeTransaction(2000, 8, 10000));