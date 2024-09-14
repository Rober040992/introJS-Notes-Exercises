console.log('05');

function showMessage() {
  const discount = '50%';
  const message = `Oferta todo al ${discount}`;
  console.log(message);
}

function sumCapTshirtPrice() {
  const tshirtPrice = 10;
  const capPrice = 5;
  const total = capPrice + tshirtPrice;
  console.log(total);
}

const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;
// funcion con parametros
// 1. definicion
// 2. Parametros
// 3. return o devolver valor
//function productTotalPrice(price, quantity) {
//  const total = price * quantity;
//  return total;
//}
// arrow functions =>
/*
const productTotalPrice = (price, quantity) => {
  const total = price * quantity;
  return total;
};
*/

const productTotalPrice = (price, quantity) => price * quantity;

// const productASubtotal = productAPrice * productAQuantity;
// const productBSubtotal = productBPrice * productBQuantity;
// const productCSubtotal = productCPrice * productCQuantity;
const productASubtotal = productTotalPrice(productAPrice, productAQuantity);
const productBSubtotal = productTotalPrice(productBPrice, productBQuantity);
const productCSubtotal = productTotalPrice(productCPrice, productCQuantity);

function promotionBuy (selectedProduct, selectedQuantity) {
  let message = '';
  // Verificando las condiciones para aplicar la promoción
  if (selectedProduct === 'T-shirt' && selectedQuantity >= 2) {
    message = '¡Recibes un 10% de descuento en la segunda camiseta!';
  } else if (selectedProduct === 'Cap' && selectedQuantity >= 3) {
    message = '¡Obtén una gorra gratis por la compra de 3!';
  } else {
    message = 'No hay promociones para esta selección';
  }
  return message;
}

const result = promotionBuy('T-shirt', 2)
console.log(result)