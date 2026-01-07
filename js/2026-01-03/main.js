//Lesson 22
//1
const classifyScore = (score) => {
    if(score < 0 || score > 10){
        console.log("Invalid points")
    }else {
        switch (true) {
            case (score <= 5):
                console.log("Weak");
                break;
            case (score >= 5 && score < 6.5):
                console.log("Average");
                break;
            case (score >= 6.5 && score < 8):
                console.log("Good");
                break;
            case (score >= 8 && score < 9):
                console.log("Very Good");
                break;
            case (score >= 9 && score <= 10):
                console.log("Excellent");
                break;
        }
    }
}
let resultClassify = classifyScore(2)

//2
const monthCalculator = (month) => {
    switch (true){
        case (month ===1 || month===3 || month===5 ||month ===7 || month===8 || month===10 || month ===12):
            console.log("Month " + month + " has 31 days")
            break;
        case (month ===4 || month===6 || month===9 ||month ===11):
            console.log("Month " + month + " has 30 days")
            break;
        case (month ===2):
            console.log("Month " + month + " has 28 days" || "Month " + month + " have 29 days")
            break;
        default:
            console.log("Invalid month")
    }
}
let resultMonth = monthCalculator(13)

//3

const evenOddCheck = n => n % 2 === 0 ? "Even" : "Odd";
let result = evenOddCheck(16)
console.log(result)
// const evenOddCheck = (n) => {
//     return (n % 2 ===0 ? "Even" : "Odd");
// }
// console.log( n % 2 ===0 ? "Even" : "Odd")

//4
const priceDefault = 100000
const resultPrice = (age) => {
  return (age < 13 ? priceDefault / 2 : priceDefault)
}
let price = resultPrice(11)
console.log("Giá vé là " +price     + "VND")

//5
function toFahrenheit(c){
    return c * 1.8 +32
}
let c = 15
let f = toFahrenheit(c)
console.log(c + "°C =" + " " + f + "°F")

//6
const tier1 = 1678
const tier2 = 1734
const tier3 = 2014
const tier4 = 2536
function getElectricityBill(consumption) {
    if(consumption <=0){
        return null
    }
    if(consumption <= 50){
            return tier1 * consumption;
    }else if(consumption <= 100){
            return (tier1 * 50) + ((consumption-50)*tier2);
    }else if(consumption <= 200){
            return (tier1 * 50) + (tier2 * 50) + ((consumption-100)*tier3) ;
    }else {
            return (tier1 * 50) + (tier2 * 50) + (tier3 * 100) + ((consumption-200)*tier4) ;
    }
}
let total= getElectricityBill(299)
console.log("Số tiền phải trả: " + total+ " VND")


