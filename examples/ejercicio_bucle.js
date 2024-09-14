console.log("07 bucles ejercicio");


const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];

const evenNumbers = []; // Array para almacenar números pares
const oddNumbers = [];  // Array para almacenar números impares

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 == 0 && parseInt(element)) {
        evenNumbers.push(element)
    } else if (element % 2 != 0 && parseInt(element)) {
        oddNumbers.push(element)
    }
}

console.log(evenNumbers)
console.log(oddNumbers)