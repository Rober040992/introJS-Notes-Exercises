console.log('06');
//                  0      1     2
const myProducts = ['Tv', 'PC', 'Cap  ']; // new Array(10)
console.log(myProducts);
// añadir elementos
myProducts.push('Shoe');
console.log(myProducts);
// myProducts.unshift();
// ver como acceder a los elementos de la lista
console.log(myProducts[0]); // Tv
console.log(myProducts[1]); // Pc
const thirdProduct = myProducts[2]; // Cap
console.log(thirdProduct.trim() === 'Cap'); // true
// ver como modificar la lista. Añadir eliminar modificar concatenar
myProducts.pop();
console.log(myProducts);
myProducts[1] = 'PC - out of stock';
console.log('------');
console.log(myProducts);
// ver como hacer copias de las listas
const user2Products = [...myProducts];
// const user2Products = [].concat(myProducts);
user2Products.push('Pants');
console.log(user2Products);
console.log(myProducts);
const addProduct = (list, newProduct) => {
  const newList = [...list];
  newList.push(newProduct);
  return newList;
};
const copyProducts = addProduct(myProducts, 'Laptop');
console.log(copyProducts);
console.log(myProducts);
// hacer validaciones en la lista. Si tenemos algun elemento
console.log(myProducts.indexOf('Laptop')); // -1
console.log(copyProducts.indexOf('Laptop')); // 3
console.log(copyProducts.includes('Laptop')); // true
console.log(copyProducts.reverse());
// map, filter, find, reduce. some, every
// convertir lista a otro tipo (string)
const csvProducts = 'T-shirt,pants,shoes,cap';
const products = csvProducts.split(','); // ['T-shirt', 'pants', 'shoes', 'cap']
const shoesIndex = products.indexOf('shoes'); // 2
products.splice(shoesIndex, 1);
console.log('products after delete', products);
const newCsvProduct = products.join(';');
console.log(newCsvProduct);


const input1 = [
  'test',
  'keepcoding',
  'testeo',
  'html',
];

const getFileName = (list) => {
  const lastElement = list.length - 1;
  const extension = list[lastElement];
  const newList = [...list];
  newList.pop();
  return `${newList.join('/')}.${extension}`;
};

console.log(getFileName(input1));


//nuevo metodo de arrays:
//retorna un producto si la condicion es true
hola.find((product) => {
  return product.name === productName;
});
