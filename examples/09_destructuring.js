console.log('destructuring')

//para acceder a propiedades 
const Twilight = { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 };
const { title } = { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 }

console.log(Twilight.title)
console.log(title)

//con esto accedemos por posicion 
const [firstBook,secondBook] = [
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

console.log(firstBook)
console.log(secondBook)


const getTheTittle = (books) =>{
    let result = [];
    for (let i = 0; i < books.length; i++) {
    const { year, title } = books[i];
        if (year > 2000) {
        console.log(title);
        }
    }
    return result;
};

const csvProducts = 'T-shirt,10,Amazon\nCap,5,Google\nPants,15,Amazon\nShoes,20,Google';

const processCSV = (csv) => {
    const products = [];
    const lines = csv.split('\n'); // ['T-shirt,10,Amazon', 'Cap,5,Google', 'Pants,15,Amazon','Shoes,20,Google']
    for (let line of lines) {
      // line 'T-shirt,10,Amazon'
    const [name, price, store] = line.split(','); // ['T-shirt', '10', 'Amazon']
    products.push({
        name: name,
        price: parseInt(price),
        store: store
    });
    }
    return products;
};

const products = processCSV(csvProducts);
console.log(products);

const infoGeneral = {
    bootcamp: 'Keepcoding',
    name: 'General',
};

let module1 = {
    name: 'JS',
};

module1 = { ...module1, ...infoGeneral };
console.log(module1);

let module2 = {
    ...infoGeneral,
    name: 'HTML'
};
console.log(module2);

//tambien podemos usar push a un objeto;

const product ={
    title: 'hola'
}

product.push()
