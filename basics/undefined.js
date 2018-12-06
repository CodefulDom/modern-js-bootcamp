/* 
undefined is the absence of value in regards to variable declaration
*/

let name 

name = 'Dom'

if(name === undefined) {
  console.log('please provide a name')
} else {
  console.log(name);
}

//Undefined for function argument
let square = function (num) {
  console.log(num);
}

let result = square()
console.log(result)

let age = null;

console.log(age);