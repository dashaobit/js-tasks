// ========проверяет, входит ли number в промежуток start-end. Логическое «И» запинается на лжи
function isNumberInRange(start, end, number) {
    const isInRange = number>=start && number<=end; 
    return isInRange;
}
console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));

//   ========проверяет, подписка pro или vip. Логическое «ИЛИ» запинается на правде
function checkIfCanAccessContent(subType) {
    const canAccessContent = subType===`pro` || subType===`vip`; 
    return canAccessContent;
}
console.log(checkIfCanAccessContent("pro"));
console.log(checkIfCanAccessContent("starter"));
console.log(checkIfCanAccessContent("vip"));
console.log(checkIfCanAccessContent("free"));

// ==========не - наоборот
function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; 
    return isNotInRange;
}
console.log(isNumberNotInRange(10, 30, 17));

// =======определяет значение скидки
function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;

  if(totalSpent>=50000){
      discount=GOLD_DISCOUNT;
  } else if(totalSpent>=20000 && totalSpent<50000){
      discount=SILVER_DISCOUNT;
  } else if(totalSpent>=5000 && totalSpent<20000){
      discount=BRONZE_DISCOUNT;
  } else {
      discount=BASE_DISCOUNT;
  }

    return discount;
}
console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300));
console.log(getDiscount(5000));
console.log(getDiscount(20000));

// ========тернарный <условие> ? <истинно> : <ложно>
function checkStorage(available, ordered) {
    let message;
    message = ordered >= available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
    return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

// ====проверяет подписку  с помощью switch
function getSubscriptionPrice(type) {
    let price;

    // if (type === "starter") {
    //     price = 0;
    //   } else if (type === "professional") {
    //     price = 20;
    //   } else if (type === "organization") {
    //     price = 50;
    //   }

   switch (type) { 
    case "starter": 
        price = 0; 
        break;

    case "professional": 
        price = 20; 
        break;

    case "organization": 
        price = 50; 
        break;
    }
    return price;
}
getSubscriptionPrice("professional");
getSubscriptionPrice("organization");
getSubscriptionPrice("starter");