//
const isPrime = (n) => {
  if(n <= 1){
      return false
  }
    for (let i = 2; i <= (n**(1/2)); i++){
        if(n % 1 === 0){
            return false
        }
    }
            return true
}
console.log('Lesson 1')
console.log(isPrime(3))
console.log(isPrime(9))

//
const isPerfectNumber = (n) => {
  if(n <= 5){
      return false
  }
  let sum = 0;
  for (let j = 1; j <= n/2; j++){
      if (n % j === 0){
          sum += j;
      }
  }
  return sum === n;
  // if (sum === n){
  //     return true
  // } return false
}
console.log('Lesson 2')
console.log(isPerfectNumber(496));
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(3));


