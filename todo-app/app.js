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


document.querySelector('#new-todo').addEventListener('click', function () {
	console.log('Todo Added!')
})


document.querySelector('#todo-text').addEventListener('input', function(event) {
	console.log(event.target.value)
})

