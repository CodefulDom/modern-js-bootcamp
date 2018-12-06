/* 
Boolean and Comparison Operators:
=== - deep equality
!== - not equal
< - less than
> - greater than
>= - less than or equal to operator
<= - greater than or equal to operator
*/

let temp = 164;

if (temp <= 32) {
  console.log('wear a coat');
} 

if (temp >= 110) {
  console.log('its hot as fuck, yo.')
}


/* Challenge 
age = 34;
isChild - if they are 7 or younger 
senior - if they are 65 or older;
*/
let age = 43;

if(age <= 7) {
  console.log(`You receive the children's discount of $7.00 to enter`);
} else if (age >= 65) {
  console.log(`You are old and get a discount of $5.00 to enter`);
} else if (age <= 64){
  console.log(`You are regular AF. So pay that $15.00 to get in.`);
} 