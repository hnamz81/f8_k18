//Task1
const classA = [
    "An", "Binh", "Chi",
]
const classB = classA
classB[0] = "An Updated"
console.log(classA)
// const classA = [
//     "An", "Binh", "Chi",
// ]
// classA = 0x01
// const classB = classA
// classB = 0x01
// classB[0] = "An Updated"
// Because classB = classA ~ 0x01 = 0x01 => classB have been change => classA changed

//Task2
let x = "10";
let y = 2;
console.log(x + y);      // Result 1
console.log(x - y);      // Result 2
console.log(x * "3");    // Result 3
console.log("Hello" - y);// Result 4
//In JavaScript, the + operator has two functions: numeric addition and string concatenation. If one of the operands is a string,
//JavaScript converts the other operand to a string and performs string concatenation. That’s why "10" + 2 becomes "102".
// For the other arithmetic operators (-, *, /), JavaScript always tries to convert operands to numbers.
//"10" - 2 → the string "10" is converted to the number 10, so the result is 8.
//"10" * "3" → both strings are converted to numbers, so the result is 30.
//"Hello" - 2, JavaScript tries to convert "Hello" into a number, but this fails. The result is NaN

//Task3
const age = 9
const mathScore = 10
const isVip = true
const canEnter = age >= 10 && mathScore > 7 || isVip
console.log(canEnter)

//Task4
const laptop = {
    brand: "Dell",
    price: 1000,
    spec: { ram: "8GB", ssd: "256GB" }
};

const myLaptop = laptop;
myLaptop.brand = "Apple";

const mySpec = laptop.spec;
mySpec.ram = "16GB";

console.log(laptop.brand); // predict Apple
console.log(laptop.spec.ram); // predict 16GB
//Because myLaptop was assigned to laptop, and mySpec was assigned to laptop.spec,
//they both reference the same objects in memory. So any changes made through myLaptop or mySpec directly affect the original laptop object.

