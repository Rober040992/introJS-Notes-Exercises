/*
Ejericio Calculadora con closures

Crear una calculadora con las siguientes funciones:
*/



const calculadora = () => {
    let resultado = 0;

    const sumar = (numero) => {
        resultado = resultado + numero;
    };
    const restar = (numero) => {
        resultado = resultado - numero;
    };
    const multiplicar = (numero) => {
        resultado = resultado * numero ;
        return resultado
    };
    const dividir = (numero) => {
        resultado = resultado / numero;
    };
    const total = () => {
        return resultado;
    };
    return {
        sumar,
        restar,
        multiplicar,
        dividir,
        total,
    };
};

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16