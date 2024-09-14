console.log('03');
const firstProductName = 'T-shirt';
const firstProductPrice = 40;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 2;

let message = '';
// if | else if | else
if (firstProductPrice > secondProductPrice) {
  message = 'El primer producto es más caro que el segundo';
} else if (firstProductPrice === secondProductPrice) {
  message = `Los productos ${firstProductName} y ${secondProductName} tienen el mismo precio`;
} else {
  message = 'El primer producto es más barato que el segundo';
}

let message2 = '';
const sameNames = firstProductName === secondProductName;
const samePrices = firstProductPrice === secondProductPrice;
if (sameNames && samePrices) {
  message2 = 'Son el mismo producto';
} else {
  message2 = 'Son diferentes productos';
}
// operador ternario
message2 = (sameNames && samePrices) ? 'Son mismo producto' : 'Son diferentes productos';

console.log(message2);
const day = '';
// switch case
switch (day) {
  case 'Monday':
    console.log('Hay clase es Lunes');
    break;
  case 'Tuesday':
    console.log('Hay clase es Martes');
    break;
  default:
    console.log('No hay clase');
    break;
}

if (day === 'Monday') {
  console.log('Hay clase es Lunes');
} else if (day === 'Tuesday') {
  console.log('Hay clase es Martes');
} else {
  console.log('No hay clase');
}

//operadores ternarios 
//                                                        si es true   :  si es false
ternario = (firstProductPrice === secondProductPrice) ? 'son lo mismo' : 'son diferentes'
console.log(ternario)
