const previousIPhonePrice = 1000;
const currentIPhonePrice = 1200;
const personalDiscount = 10;

const priceDifference = currentIPhonePrice - previousIPhonePrice;

// ===, !== перевірка значення та типу
console.log(
  'Is price changed: ',
  currentIPhonePrice !== previousIPhonePrice && priceDifference !== 0
);
// ! - not
// !true = false
// !false = true

console.log('Price changed: ', priceDifference);
console.log('Price for 2 iPhones: ', currentIPhonePrice * 2);
console.log('Price with discount: ', currentIPhonePrice*(100-personalDiscount)/100 );