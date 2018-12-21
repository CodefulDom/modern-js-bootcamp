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

const filters = {
	searchText: ''
}

const renderTodos = function (todos, filters) {
	const filteredTodos = todos.filter(function (todo) {
		return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
	})

	const incompleteTodos = filteredTodos.filter(function(todo) {
		return !todo.completed
	})

	document.querySelector('#todos').innerHTML = ''

	const summary = document.createElement('p')
	summary.textContent = `You have ${incompleteTodos.length} todos left`
	document.querySelector('#todos').appendChild(summary)

	filteredTodos.forEach(function(todo) {
		const paragraph = document.createElement('p')
		paragraph.textContent = todo.text
		document.querySelector('#todos').appendChild(paragraph)
	})

}

renderTodos(todos, filters)



document.querySelector('#new-todo').addEventListener('click', function () {
	console.log('Todo Added!')
})


document.querySelector('#todo-text').addEventListener('input', function(event) {
	console.log(event.target.value)
})

document.querySelector('#searchText').addEventListener('input', function(event){
	filters.searchText = event.target.value
	renderTodos(todos, filters)
})
