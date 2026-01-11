//Lesson 23
//1
const getTriangleType = (a, b, c) => {
    if (a + b > c && a + c > b && b + c > a){
        if(a===b && b===c){
            return "Equilateral"
        }else if(a*a === b*b + c*c || b*b === a*a + c*c || c*c === b*b + a*a){
            return "Right"
        }else if(a === b || b === c || a === c){
            return "Isosceles"
        }else{
            return "Triangle"
        }
    }else {
        return false
    }
}
let result = getTriangleType(3, 3, 3)
console.log(result)

//2
const isPerfectSquare = (n) => {
    if(typeof n !== "number" || n < 0){
        return false
    }
    if(n=== (n**(1/2))*(n**(1/2))){
       return  true
    }else {
        return false
    }
}

let n = 9
console.log(isPerfectSquare(n)?`${n} is a perfect square`: `${n} is not a perfect square`)

