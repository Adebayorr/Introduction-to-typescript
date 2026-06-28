/**
 * ================
 * PART ONE
 * ================
 */

// 1. Arrow Functions
const square = (n) => n * n
const greet = (name) => "Hello, " + name + "!" 
const multiply = (a, b) => a * b

const getFullName = (firstname, lastname) => `${firstname} ${lastname}`

console.log(square(4))
console.log(greet('Harry'))


// 2. Destructuring
const student = { name: "Amaka", age: 22, course: "Frontend Development", city: "Abuja" }
const scores = [88, 72, 95, 60, 45]

const {name, course} = student
const {age: studentAge} = student
const [firstScore, secondScore] = scores

// 3. Spread Operator
const frontend = ["HTML", "CSS", "JavaScript"]
const backend = ["Node.js", "Express", "MongoDB"]
const userProfile = { username: "coder_ade", email: "ade@example.com" }

const fullStack = [...frontend, ...backend]
console.log(fullStack);
const newUserProfile = {...userProfile, email: "newemail@example.com"}
console.log(newUserProfile)
console.log(userProfile)

