console.log ('08')

const firstProductName = 'T-shirt';
const firstProductPrice = 40;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 2;

//nueva estructura de datos 
const firstProduct = {}; 
console.log(typeof(firstProduct))//typeof = objet
//asignar propiedades
firstProduct.name = 'T-shirt';
firstProduct.price = 40;
firstProduct.quantity = 2;
firstProduct.available = false;
console.log(firstProduct);

//otra forma de 
const secondProduct = {
    name: 'Cap',
    price: secondProductPrice,
    quantity: secondProductQuantity,
    available: true,
    sizes: ['s','m','l'],
    'country-strore': 'ES'
}
console.log(secondProduct.name)
console.log(secondProduct.sizes[1])
console.log(secondProduct["country-strore"])//se usan colchetes paraacceder a una propiedad con valor raro
const key = 'quantity';

const getProductAttrubute = (product, key) => {
    return product[key];
};

console.log(getProductAttrubute(firstProduct, 'country.store')); //undefined
console.log(getProductAttrubute(secondProduct, 'price')); //35

secondProduct.attributes = {
    color: 'red',
    material: 'cotton',
}
console.log(secondProduct.attributes.material)

const products = [
    firstProduct,
    {
        name: 'shoes',
        price: 12,
    },
];

const shows = [
    {
    id: 1,
    name: 'Under the dome',
    generes: ['Drama', 'Science-Fiction', 'Thriller']
    }, /// 0
    {
    id: 2,
    name: 'Game of thrones',
    generes: ['Drama', 'Thriller'],
    season: {
        title: 'season 1'
    },
    } /// 1
];

delete secondProduct.attributes;
console.log(secondProduct);

const firstShow = shows[0];
const nameFirstShow = firstShow.name;
console.log(nameFirstShow);

let info = ''
for (let show of shows){
    info = info + `
    Show: ${show.name}
    Generes: ${show.generes}
    `
}
console.log(info)

//para mostrar en pantalla a modo html
let infor = ''
for (let show of shows){
    info = info + `
    <h2>Show: ${show.name}</h2>
    <p>Generes: ${show.generes}</p>
    `;
}
document.write(info)

console.log(Object.values(firstProduct))
console.log(Object.entries(firstProduct))
//problema con objetos; hay que usar structuredClone al copiar un objeto
console.log('user')
const user = {
    email: 'gf@gmail.com',
    adress: {
        street: 'martinez',
        number: 12,
        openOrClose: false,
    }
};
const user2 = structuredClone(user); //aqui estamos modificando user
user2.email = 'gf2@gmail.com'
user2.role = 'admin';
user2.adress.street = 'keepcooding'
user2.adress.number = 23

console.log(user)
console.log(user2)

