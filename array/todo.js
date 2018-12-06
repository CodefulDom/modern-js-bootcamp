// const todo = ['Walk the dog', 'call mom', 'wash car', 'finish term paper', 'get new macbook pro']

/*
	Convert array to array of object
		- need to have text
		-	need to have completed
	Convert function to remove a todo by text value
		-	use toLowerCase() to negate text case
*/

const todos = [{
	text: 'Walk the dog',
	completed: true
}, {
	text: 'Call Momma before 9pm on Wednesday',
	completed: true
}, {
	text: 'Go to waterway to get truck cleaned',
	completed: true
},{
	text: 'Call MacHeadquaters about getting a new macbook pro with 32 gig of ram',
	completed: true
}, {
	text: 'Put away Laundry',
	completed: false
}]

const deleteTodo = function(todos, todoText) {
	const index = todos.findIndex(function (todo) {
		return todo.text.toLowerCase() === todoText.toLowerCase()
	})
	if(index > -1) {
		todos.splice(index, 1)
	}
}

const getThingsDone = function(todo) {
	return todos.filter(function (todos) {
		return !todos.completed
	})
}
console.log(getThingsDone(todos));

