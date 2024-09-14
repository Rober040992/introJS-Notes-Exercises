/*
Crear un array bidimensional con 5 columnas y con 3 filas como las que aparecen abajo

--*--
-***-
*****

*/

const bidimensionalArray = [
    ['-', '-', '*', '-', '-'],
    ['-', '*', '*', '*', '-'],
    ['*', '*', '*', '*', '*']
]
//con varios console.log
for (let i = 0; i < bidimensionalArray.length; i++) {
    console.log(bidimensionalArray[i].join('')); //convierte cada fila en una cadena de caracteres
}

//con un solo console.log y un bucle for dentro de otro bucle for
let message = ''
for (let i = 0; i < bidimensionalArray.length; i++){
    const fila = bidimensionalArray[i];
    for (let columnaIndex = 0; columnaIndex < fila.length; columnaIndex++){
        const columna = fila[columnaIndex];
        message = message + columna;
    }
    message = message + '\n'
}

console.log(message)

//for of para todo lo que sea iterable;

for (let row of tree){
    for(let column of row){
        message = message + column
    }
    message = message + '\n'
}
console.log(message)