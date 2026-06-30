import { add, capitalize, APP_VERSION } from "./utils.js"
import formatCurrency from "./utils.js"

/**
 * ================
 * PART ONE
 * ================
 */

// 1. Arrow Functions
const square = (n) => n * n
const greet = (name) => "Hello, " + name + "!" 
const multiply = (a, b) => a * b

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(square(4))
console.log(greet('Harry'))
console.log(multiply(4, 12));
console.log(getFullName("Jason", "Statham"))



// 2. Destructuring
{ const student = { name: "Amaka", age: 22, course: "Frontend Development", city: "Abuja" }
const scores = [88, 72, 95, 60, 45]

const {name, course} = student
const {age: studentAge} = student
const [firstScore, secondScore] = scores
}

// 3. Spread Operator
const frontend = ["HTML", "CSS", "JavaScript"]
const backend = ["Node.js", "Express", "MongoDB"]
const userProfile = { username: "coder_ade", email: "ade@example.com" }

const fullStack = [...frontend, ...backend]
console.log(fullStack);

const newUserProfile = {...userProfile, email: "newemail@example.com"}
console.log(newUserProfile)
console.log(userProfile)

// 4.  Template Literals
const name = "Fatima"
const age = 24
// const intro = "My name is " + name + " and I am " + age + " years old."
const intro = `My name is ${name} and I am ${age} years old.`
console.log(intro);

const areaOfARect = (width, height) =>  `The area of the rectangle is ${width * height}`
console.log(areaOfARect(8, 5))


// 5. Array Methods
const products = [
  { name: "Laptop",   price: 450000, inStock: true  },
  { name: "Mouse",    price: 8000,   inStock: true  },
  { name: "Monitor",  price: 120000, inStock: false },
  { name: "Keyboard", price: 15000,  inStock: true  },
]

const productNames = products.map(product => product.name)
console.log(productNames)

const productsInStock = products.filter(product => product.inStock)
console.log(productsInStock);

const productsInStockCapital = products.filter(product => product.inStock).map(product => product.name.toUpperCase())
console.log(productsInStockCapital);


// 6. Ternary & Logical &&
const role = "editor"
let cartItems = 0

const access = role === "admin" ? "Full Access" :
    role === "editor" ? "Edit Access" :
    role === "viewer" ? "Read Only" : "No Access"

console.log(access);


console.log(cartItems && "View Cart")

// The console will log 0 because the value on the right side of the AND operator 
// is assigned only when the value on the left is truthy

console.log(cartItems > 0 && "View Cart");


// 7 
console.log(add(3, 6));
console.log(capitalize('pryanka'));
console.log(APP_VERSION);
console.log(formatCurrency(5000));

