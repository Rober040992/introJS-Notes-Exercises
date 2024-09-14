console.log('functions')
//funcion normal 
const suma = (valor1, valor2) => {
    const op = valor1 + valor2;
    return op
};
const result = suma(2,3)
console.log(result)

//funciones clousure/cierres
//ejemplo de funcion contador;
const counter = () => {
    let count = 0;
//esta funcion incremente el count
    const  increment = () => {
        count = count + 1 //count ++
    };
//esta devuelve el count
    const getCount = () => {
        return count
    };
//en el return estamos guardando las funciones en variables sin ejecutarlas
    return {
        incremento: increment,
        cuenta: getCount,
    };
};

const jugador1 = counter();
jugador1.incremento();// +1
jugador1.incremento();// +1
console.log(jugador1.cuenta()); //retorna 2

const jugador2 = counter()

//===============================================

const products = [
    { id: 'p001', name: 'T-shirt', price: 20, quantity: 2 },
    { id: 'p002', name: 'Cap', price: 5, quantity: 3 },
    { id: 'p003', name: 'Pants', price: 50, quantity: 1 },
];

let cart = () => {
    let products = [];

    const addProducts = ({name, price, quantity}) => {
        /*
        products = [...products,{
        name,
        price,
        quantity
        }]
        */
        products.push({
            name,
            price,
            quantity
        });
    };

    const getProducts = () => {
        return products;
    };
    return {
        addProducts: addProducts, //addProducts,
        getProducts: getProducts ,//getProducts
    };
};

const shoppingBag1 = cart();
shoppingBag1.addProducts(products[0]);

const shoppingBag2 = cart();
shoppingBag2.addProducts(products[1]);
shoppingBag2.addProducts(products[2]);

console.log(shoppingBag1.getProducts());
console.log(shoppingBag2.getProducts());

//suma|resta
const operations = (num1, num2, operation) => {
    if (operation === 'resta') {
        return num1 -num2;
    } else if (operation === 'suma') {
        return num1 + num2;
    }

};

const suma = (v1, v2) => {
    const op = v1 +v2;
    return op;
};

const resta = (num1, num2) => num1 - num2;

operations(1, 2, 'resta');
operations(1, 2, 'suma');

const operationsV2 = (num1, num2, operationFn) => {
    return operationFn(num1, num2);
};

operationsV2(2, 3, suma);
operationsV2(2, 3, resta);