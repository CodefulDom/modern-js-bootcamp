let num = 103.941

console.log(num.toFixed(2));

console.log(Math.round(num));

let min = 10
let max = 200

let randomNum = Math.floor(Math.random() * (max - min) + min)
console.log(randomNum);


/*
random number
*/

// let randomNumberPicker =  [...Array(5).keys()]
let numberGuess = (randomNumberPicker) => {
	randomNumberPicker = Math.floor(Math.random() * (max - min) + min)
}

numberGuess([...Array(5).keys()])
