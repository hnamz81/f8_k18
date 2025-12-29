//Part 1:
//1.1

let name = "hnam"
let age = 22
let isStudent = true
console.log("Name:" + " " + name)
console.log("Age:" + " " + age)
console.log("Is student:" + " " + isStudent)

//1.2

let a = 5
let b = 10
a = 15
b = 20
console.log(a , b)

//Part 2:
// The difference between const and let is that const does not allow reassignment after declaration,
// while let allows assigning a new value to the variable.
// We use const when we're sure the variable won't need to be reassigned, for example: the value of pi.
// Example code:
// const x = 10
// x = 20
// This is incorrect. Since we used const to declare the variable, we cannot assign it a new value.

//Part 3:
//100: number
//"100": string
//true: boolean
//[1, 2, 3]: array
//{name: "An", age: 20}: object
//null: object
//undefined: undefined

let student = {
    name: "hnam",
    age: "22",
    scores : [7, 8, 9]
}
console.log(student)

//Part 4:
let c = "1000"
c = Number(c)
console.log(c, typeof c)

let d = 1000
d = String(d)
console.log(d, typeof d)

let e = true
e = String(e)
console.log(e, typeof e)

//Part 5:
//Boolean(0)	     false
// Boolean(1)        true
// Boolean("")       false
// Boolean("hello")  true
// Boolean(null)     false
// Boolean([])       true

//Part 6:
const numbers = [4, 3, 1, 5, 1];
console.log(numbers[0])
console.log(numbers[4])

//In JavaScript, when you assign an array (or object) to another variable, you don't copy the entire content you only copy the memory address.






