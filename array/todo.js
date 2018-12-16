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

const deleteTodo = function(todos, todoText) {
	const index = todos.findIndex(function (todo) {
		return todo.text.toLowerCase() === todoText.toLowerCase()
	})
	if(index > -1) {
		todos.splice(index, 1)
	}
}

const getThingsDone = function(todo){
	return todos.filter(function (todos) {
		return !todos.completed
	})
}

const sortTodos = function(todos) {
	todos.sort(function(a, b) {
		if(!a.completed && b.completed) {
			return -1
		} else if(!b.completed && a.completed) {
			return 1
		} else {
			return 0
		}
	})
}

console.log(getThingsDone(todos));
sortTodos(todos)
console.log(sortTodos)

