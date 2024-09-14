console.log('objeto')

//Recorrer el array de libros y mostrar en consola los títulos de los libros que fueron publicados después del año 2000.

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
];

let myFunc = (year) => {
    let lista = []
    for (const item of books) {
        if (item.year > year) {
            lista.push(item.title)
        }  
    }
    return lista;
}
console.log(myFunc(2000))