
const selectedProduct = prompt('Ingresa el nombre del producto');
const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));

/*
Usa operadores lógicos para determinar si el usuario puede tener para una promoción especial:
Si selecciona un "T-shirt" y la cantidad es 2 o más, el mensaje será "¡Recibes un 10% de descuento en la segunda camiseta!".
Si selecciona un "Cap" y la cantidad es 3 o más, el mensaje será "¡Obtén una gorra gratis por la compra de 3!".
Si no cumple ninguna de las condiciones, el mensaje será "No hay promociones para esta selección".

Muestra el mensaje en un único console.log.
*/

let promo = ""
if (selectedProduct === "T-shirt" && selectedQuantity >= 2){
promo = "¡Recibes un 10% de descuento en la segunda camiseta!" 
} else if (selectedProduct === "Cap" && selectedQuantity >= 3) {
promo = "¡Obtén una gorra gratis por la compra de 3!"
} else {
promo = "No hay promociones para sta selección."
}
console.log(promo)