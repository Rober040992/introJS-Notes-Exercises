//funcion ejemplo:
const calculadora = () =>{
    let subTotal = 0;
    const sumar = (num) =>{
        subTotal += num;
    }
    const restar = (num) =>{
        subTotal += num;
    }
    const multiplicar = (num) =>{
        subTotal *=  num;
    }
    const dividir = (num) =>{
        subTotal /= num;
    }
    const total = () =>{
        return subTotal;
    }

    return {
        sumar,
        restar,
        multiplicar,
        dividir,
        total,
    }
}


//1 defaults
export default calculadora 
//esto hace que este codigo sea accesible desde otro archivo js

//2 exports
export const defaultValue = 12
export const test = 10
//para exportar con export ; solo se importa lo que esta ahi de uno en uno 
