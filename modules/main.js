//para importar calculadora

// 1 si es exportada con default: './../../example.js'
import calculadora,{ defaultValue, test } from "./utils"
// si usamos 'as' despues de lo q importamos podemos crear un 'alias' 
//todo lo que hemos exportado con export tiene que venir con {}

//2 si es exportada con solo export:
const count1 = calculadora()
count1.sumar(12)
count1.dividir(2)

console.log(count1.total())
