/**
 * ================
 * PART TWO
 * ================
 */

//  1. 
let studentName: string = "Tunde"
let studentAge: number = 21
let isEnrolled: boolean = true

// let courseName: number = "Frontend Development"
// The above declaration assigns a string value to a number variable

let courseName: string = "Frontend Development"


// 2. Typed Functions
function addNumbers(a: number, b: number): number { return a + b }
function isAdult(age: number): boolean { return age >= 18 }

function getArea (width: number, height: number): number {
    return width * height
}


// 3.  Objects & Interfaces
interface Student {
    id: number,
    name: string,
    age: number,
    course: string,
    isActive: boolean
} 

const student1 : Student = {
    id: 1,
    name: "Amaka",
    age: 19,
    course: 'Material Science',
    isActive: true
}

const student2 : Student = {
    id: 2,
    name: "James",
    age: 23,
    course: 'Sociology',
    isActive: true
}


interface Instructor {
    name: string,
    cohort: number,
    subjects: string[]
}


function introduceInstructor(instructor: Instructor) :string  {
    return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`
}

const stanley : Instructor =  {
    name: "Stanley Okeke",
    cohort: 8,
    subjects: ["HTML", "CSS", "JavaScript", "React", "Git and Github"]
}

console.log(introduceInstructor(stanley))


// 4. Arrays & Union Types 

let names: string[] = ["Ada", "Bola", "Chidi"]
let scores: number[] = [78, 90, 55, 88]

function formatId (id: number | string) : string {
    return id.toString()
}

console.log(formatId(42))
console.log(formatId("abc"))