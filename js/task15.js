// ========= доставка в разные страны
function getShippingCost(country) {
    let message;
    // Change code below this line
        const CHINA =100;
      const CHILE =250;
      const AUSTRALIA =170;
      const JAMAICA=120;
      
      switch(country){
          case "Australia":
              message= `Shipping to ${country} will cost ${AUSTRALIA} credits`;
              break;
  
          case "Jamaica":
              message= `Shipping to ${country} will cost ${JAMAICA} credits`;
              break;
  
          case "China":
              message= `Shipping to ${country} will cost ${CHINA} credits`;
              break;
  
          case "Chile":
              message= `Shipping to ${country} will cost ${CHILE} credits`;
              break;
  
          default:
              message="Sorry, there is no delivery to your country"
  
      }
    // Change code above this line
    return message;
  }
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));