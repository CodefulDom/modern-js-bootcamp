const notes = [{
	title: 'My next trip',
	body: 'I would like to go to Spain'
}, {
	title: 'My Plan to be the best',
	body: 'Work harder, better, and faster than anyone else that ever sits at a keyboard. I want to be the type of person that when anyone else would quit, I am the one that won\'t'
}, {
	title: 'Believe in yourself',
	body: 'Do not be the type of person that has to convience other people of your greatness. You should strive everyday to improve, to be better at your craft untill it is undeniable that your greatness can no longer be ignored or doubted'
}]

console.log('This is from a different file!')

// const pRemove = document.querySelector('p')
// pRemove.remove()

const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
	p.textContent = '******'
	console.log(p.textContent)
})


// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent= 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)
