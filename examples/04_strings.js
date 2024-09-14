console.log('04');

let username = 'KeVin';
let password = '1234A   ';
let authenticated = false;

username = username.trim();
password = password.trim().toLowerCase();

username = username.toLowerCase();

if (username === 'kevin' && password === '1234a') {
  authenticated = true;
}

console.log(`Is authenticated ${authenticated}`); // Is authenticated true

const email = prompt('Add email');
const email2 = 'Test@keepcoding.es';

if (email === null) {
  throw new Error('Null is not valid');
}

console.log(email.toLowerCase().trim().includes('@test.com')); // true
console.log(email.toLowerCase().trim().replaceAll('test', '***'));

if (!email.toLowerCase().trim().includes('@keepcoding')) {
  // lanzar un error
  throw new Error('no es un correo de keepcoding');
}

const promptPrice = '23';
console.log(parseInt(promptPrice));
console.log(+promptPrice);
console.log(Number(promptPrice));