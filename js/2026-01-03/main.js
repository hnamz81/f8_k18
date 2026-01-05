//Lesson 22
//1
let score = 11;
// if(score >= 0 && score <=10){
    switch (true) {
            case (score <= 5):
            console.log("Weak");
            break;
            case (score >=5 && score < 6.5):
            console.log("Average");
            break;
            case (score >=6.5 && score < 8):
            console.log("Good");
            break;
            case (score >=8 && score < 9):
            console.log("Very Good");
            break;
            case (score >=9 && score <= 10):
            console.log("Excellent");
            break;
            default:
            console.log("Điểm không hợp lệ")
    }
// }else {
//     console.log("Điểm không hợp lệ")
// }

//2
let day = 2;
switch (true){
    case (day ===1 || day===3 || day===5 ||day ===7 || day===8 || day===10 || day ===12):
        console.log("Month " + day + " have 31 days")
        break;
    case (day ===4 || day===6 || day===9 ||day ===11):
        console.log("Month " + day + " have 30 days")
        break;
    case (day ===2):
        console.log("Month " + day + " have 28 days" || "Month " + day + " have 29 days")
        // console.log("Month " + day + " have 28 days")
        break;
    default:
        console.log("Tháng không hợp lệ")
}

//3
let n = 12;
console.log( n % 2 ===0 ? "Even" : "Odd")

//4
let age = 15
let ticket = 100
let price
console.log(age < 13 ? price = ticket/2 : ticket)

//5
function convert(c){
    return c * 1.8 +32

}
let c = 15
let f = convert(c)
console.log(c + "°C =" + " " + f + "°F")

//6
const tier1 = 1678
const tier2 = 1734
const tier3 = 2014
const tier4 = 2536
function electricBill(consumption) {
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
let total= electricBill(299)
console.log("Số tiền phải trả: " + total+ " VND")


