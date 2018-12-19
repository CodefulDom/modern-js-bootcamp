const todos = [{
	text: 'Walk the dog',
	completed: false
}, {
	text: 'Call Momma before 9pm on Wednesday',
	completed: true
}, {
	text: 'Go to waterway to get truck cleaned',
	completed: true
},{
	text: 'Call MacHeadquaters about getting a new macbook pro with 32 gig of ram',
	completed: false
}, {
	text: 'Put away Laundry',
	completed: false
}]

/*
 todos that need to be completed
 'You have 2 todos left' p element

 add a <p></p> for each todo above(use text in todos)

 */


const incompleteTodos = todos.filter(function(todo) {
	return !todo.completed
})

const summary = document.createElement('p')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
	const paragraph = document.createElement('p')
	paragraph.textContent = todo.text
	document.querySelector('body').appendChild(paragraph)
})




