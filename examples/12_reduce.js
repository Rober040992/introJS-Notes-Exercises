/*reduce se usa para pasar de un listado a otra cosa
map pasa de un listado a otro listado 
en reduce se retorna un valor que es la operacion


ejemplo*/
const total = products.reduce((accum, products) => {
    const result = product.price * product.quantity;
    return accum + result
},0);
//el 0 es el valor inicial del accum