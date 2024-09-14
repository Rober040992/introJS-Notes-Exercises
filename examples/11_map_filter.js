console.log('map y filter')

const numbers = [20, 50 ,75];

newList = [];
//como simpre con un for of
for (let number of numbers) { //for (let index = 0; index < numbers.length; index++)
    newList.push(number * 2)
};
console.log('resultado del for of')
console.log(newList)


//ejemplo funcion
function double (number) {
    return number * 2
}

// map recorre la lista y modifica el array
// map, recibe una funcion anonima, con la palabra function (){}

const newListMap = numbers.map(function (number){ 
    //number es el valor de cada posicion de la lista numbers
    return number * 2;
});
console.log('resultado del map')
console.log(newListMap)

//anidado la funcion double a map
const newListMap2 = numbers.map(double);

console.log('anidado ')
console.log(newListMap2)


//ahora con funcion flecha:
const newListMapArrow = numbers.map(number => number * 2);
console.log('arrow')
console.log(newListMapArrow)

//============================================================
//FILTER
const filterList = numbers.filter(function(number){
    return number < 50; // esto es una condicion, si el numero mayor que 50 retorna false y solo devuelve una lista de los numeros true //20
});

console.log('lista filtrada')
console.log(filterList)

const filterListv2 = numbers.filter(number => number < 50 )// esto es una condicion, si el numero mayor que 50 retorna false y solo devuelve una lista de los numeros true //20;

console.log('lista filtrada con filter en arrow funct')
console.log(filterListv2)

//==============================================================
const books = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967,
    },
    {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    },
    { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
    { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
]

//hacemos un filter al objeto books
let books2000 = books.filter(book => book.year > 2000);
//console.log('antes del map', books2000);
//ahora le metemos map 
books2000 = books2000.map(book => book.title);
console.log('despues del map', books2000.join(','));


