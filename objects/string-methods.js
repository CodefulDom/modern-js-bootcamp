let name = 'Dominique Hallan'

// Length
console.log(name.length)

// Convert to Upper Case
console.log(name.toUpperCase())

// Convert to Lower Case
console.log(name.toLowerCase())

// Includes Methods
let password = 'password'
console.log(password.includes('password'))

// Trim
let booger = '            yeah                 '
console.log(booger);
console.log(booger.trim());

/*
isValidPassword
length > 8
doesnt contain 'password'
*/

let isValidPassword = (password) => {
	if(password.length <= 8 || password.includes('password')) {
		return `Your password is weak asf. Follow the instructions`
	} else {
		return `Access Granted`
	}
}

let tooShort = isValidPassword('abc')
console.log(isValidPassword(tooShort))
let dumbPassword =isValidPassword('password')
console.log(isValidPassword(dumbPassword))
let notEightChars = isValidPassword('bbvhfg')
console.log(isValidPassword(notEightChars))
let onTheMoney = isValidPassword('dh1983!EH')
console.log(isValidPassword(onTheMoney))

