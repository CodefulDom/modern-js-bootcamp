// Multiple argument
const add = (a, b, c) => {return a + b + c};


console.log(add(2, 4, 10));

// Default arguments
const playerScoreboard = (name='No Name Dummy', score = 0) => {
  return `Name: ${name} //Score: ${score}`
}

let scoreText = playerScoreboard('Dominique', 5600)
console.log(scoreText);

/* 
total bill, tipPercent = default 20%
*/

const totalBill = (foodCosts, tip = .2) => {
  addMeUp = foodCosts + (tip * 100);
  return `Your total is ${addMeUp} dollars with your ${tip} tip.`
}

console.log(totalBill(40, .25))
console.log(totalBill(2000, .4))