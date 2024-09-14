console.log(firstProductQuantity);
// hoisting
// Revisando tema de variables
/*
Comentario en varias
lineas
*/
// cammelCase
// snake_case
// PaskalCase
// kebab-case

const nombreProducto = 'T-shirt';
console.log(nombreProducto);

const quantity = 1;
console.log(quantity);
const firstProductName = 'Shoes'; 

let newProduct = 'Cap';
console.log(newProduct);
newProduct = 'Pants';

console.log(newProduct);

var firstProductQuantity = 13;
console.log(firstProductQuantity);

// number
const secondProductQuantity = 12.212;

// string
let message = 'Your cart is empty';
message = "Your cart is empty";
message = 'Your cart is "empty"'; // Your cart is "empty"
message = "Your cart is \"empty\""; // Your cart is "empty"
console.log(message);
// template string ``
message = `
Your Cart

    No products
`;
console.log(message);
console.log(typeof message);

let stock = null;
console.log(stock);
// boolean
const disscount = true;
const isGuillermoOnline = true;

stock = Infinity;
console.log(typeof 9007199254740992n);

message = `Your product is ${nombreProducto} quantity ${quantity}`;
message = 'Your product is ' + nombreProducto + 'quantity ' + quantity;
console.log(message);