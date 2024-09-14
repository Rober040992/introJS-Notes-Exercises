
console.log('02');
const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 2;

const suma = firstProductPrice + secondProductPrice;
console.log(suma);
const totalFirstProduct = firstProductPrice * firstProductQuantity;
console.log(totalFirstProduct);
const totalSecondProduct = secondProductPrice * secondProductQuantity;
console.log(totalSecondProduct);
// const total = totalFirstProduct + totalSecondProduct;
let total = (firstProductPrice * firstProductQuantity) + (secondProductPrice * secondProductQuantity);
console.log(total);

const promo = 30;

total = total - promo;
console.log('total con promo');
console.log(total);

const message1 = 'Message 1';
const message2 = 'Message 2';
console.log(message1 + message2);
console.log(`${message1}${message2}`);

console.log('12' + '1'); // 121
console.log('12' - '1'); // 11
console.log('12 ' - '1'); // NaN -> Not a Number
console.log(true + true); // 2 -> true 1 | false 0
console.log(false + true);
console.log('12' + true); // 12true

const modulo = 4 % 2; // 0

// operadores de comparación
console.clear();
// A === B C !== D
console.log('12' == '12'); // true
console.log('12' == 12); // true
console.log('12' === 12); // false
console.log('12' !== 12); // true
console.log(firstProductName === secondProductName); // false
console.log(firstProductPrice > secondProductName); // false
console.log(firstProductPrice >= secondProductPrice); // false
console.log(firstProductPrice <= secondProductPrice); // true

console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

let price = 12;

price = '12€';

price = null;

price = false;

// operadores lógicos
// AND y OR

console.log(firstProductPrice > secondProductPrice && firstProductQuantity === secondProductQuantity);
// false && true -> false
console.log(firstProductPrice > secondProductPrice || firstProductQuantity === secondProductQuantity);

let stock = null;
console.log('stock');
console.log(stock === null); // true
stock = true;
console.log(!stock);
const sameString = 'a' === 'a'; // true
console.log(!sameString);

const thirdProductName = 'Pants', thirdProductPrice = 55, thirdProductQuantity = 2;