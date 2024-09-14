
/*
Calcula el precio total de todos los productos sumando los subtotales de cada uno (precio * cantidad).

Usa una estructura condicional (if, else if, else) para mostrar un mensaje según el total:
Si el total es menor a 50, muestra "Puedes agregar más productos".
Si el total es entre 50 y 100, muestra "Estás cerca de tu límite de compra".
Si el total es mayor a 100, muestra "Has alcanzado el límite de tu compra".

Muestra el total y el mensaje en un único console.log. 
*/

const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 8;

let total = productAPrice * productAQuantity + productBPrice * productBQuantity + productBPrice * productBQuantity ;
let message = ""
if (total < 50) {
message = "Puedes agregar más productos"
} else if (50 <= total < 100){
    message = "Estás cerca de tu límite de compra"
} else {
message = "Has alcanzado el límite de tu compra"
}

console.log (message)