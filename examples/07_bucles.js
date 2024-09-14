console.log('07');
///                0       1         2
const products = ['Cap', 'T-shirt', 'shoes'];

const productMessage = (productTitle) => {
  console.log(`Producto ${productTitle}`);
};

/*
productMessage(products[0]);
productMessage(products[1]);
productMessage(products[2]);
*/

// while, do-while, for        index++
for (let index = 0;index < 3; index = index + 1) {
  console.log('Dentro del loop');
}

for (let index = 0; index < products.length; index++) {
  const product = products[index];
  productMessage(product);
}

let index = 0;
while (index < products.length) {
  console.log('Dentro while');
  const product = products[index];
  productMessage(product);
  index++;
}
/*
while (true) {
  const info = prompt('Dame un producto');
  if (info === null || info.trim() === 'NO') break;
  products.push(info);
  console.log(products);
}
*/

const usersProducts = [
  ['Tv', 'Pc'], // 0 - User 1
  ['Cap', 'T-shirt'], // 1 - User 2
  ['Pants', 'Jeans'], // 2 - User 3
];

console.log(usersProducts[2][1]); // 'Jeans'
const user3 = ['Pants', 'Jeans']; // ['Pants', 'Jeans']
console.log(user3[1]);

for (let index = 0; index < usersProducts.length; index++) {
  const productsUser = usersProducts[index];
  for (let productIndex = 0; productIndex < productsUser.length; productIndex++) {
    console.log(productsUser[productIndex]);
  }
}

console.log('End script');