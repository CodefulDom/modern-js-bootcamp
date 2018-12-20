let notes = [{
	title: 'My next trip',
	body: 'I would like to go to Spain'
}, {
	title: 'My Plan to be the best',
	body: 'Work harder, better, and faster than anyone else that ever sits at a keyboard. I want to be the type of person that when anyone else would quit, I am the one that won\'t'
}, {
	title: 'Believe in yourself',
	body: 'Do not be the type of person that has to convience other people of your greatness. You should strive everyday to improve, to be better at your craft untill it is undeniable that your greatness can no longer be ignored or doubted'
}]

document.querySelector('#create').addEventListener('click',function (event){
	event.target.textContent = 'The button was click, mother fucker.'
} )

document.querySelector('#remove').addEventListener('click', function () {
	document.querySelectorAll('.note').forEach(function(note){
		alert('Deleting Your Notes!')
		note.remove()
	})
})

document.querySelector('#search-text').addEventListener('input', function(event) {
	console.log(event.target.value)
})

