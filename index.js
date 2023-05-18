// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// some arrow function

const someCode = () => {
  return 'Hey,'
}

// variables
// Datatypes:  
// Primitive (strings, numbers, boolean, null, undefined), 
// Special(objects => store collections of data, +Symbols(create unique identifiers for objects)

const birth_day = '12-34-3000'
const age = someCode(birth_day)

let shoppingCart;
let her = null
let userName;
let currentUser;
let info = `I'm JavaScript!`
console.log(age, info)
console.log(shoppingCart, userName, currentUser)
console.log(her)

console.log(typeof(null))

