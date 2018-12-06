/* 
Calc for grades
100 - 90 = A
89 - 80 = B
79 - 70 = C
69 - 60 = D
59 - 0 = F

student score
total possible

return percentage and letter grade
*/

let great = 'A'
let fundamentallySound = 'B'
let needsWord = 'C'
let poorEffort = 'D'
let noEffort = 'F'

const gradeCalc = (score, totalScore) => {
  let percent = (score / totalScore) * 100;
  if(percent >= 90) {
    return `You got ${percent}% correct which gives you a grade of ${great}!`
  } else if(percent >= 80) {
    return `You got ${percent}% correct which give you a grade of ${fundamentallySound}!`
  } else if(percent >= 70) {
    return `You got ${percent}% correct which give you a grade of ${needsWork}!`
  } else if(percent >= 60) {
    return `You got ${percent}% correct which give you a grade of ${poorEffort}!`
  }else if(percent >= 50) {
    return `You got ${percent}% correct which give you a grade of ${noEffort}! You need to try harder..`
  }
}

console.log(gradeCalc(19, 20)); 
