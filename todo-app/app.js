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

// listen for button click
document.querySelector('button').addEventListener('click', function () {
	// use event to trigger new <p></p> creation
	console.log('Todo Added!')

	// return button to original state
})


