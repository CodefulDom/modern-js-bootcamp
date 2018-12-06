// const notes = ['Note1', 'Note2', 'Note3','Note4']
// let value = notes[1]
// console.log(`The value @index 1 contains the number ${value}`)


// console.log(notes.length - 1)


// const notesCheck = notes.indexOf('Note1')
// console.log(notesCheck);

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

const findNote = function (notes, noteTitle)  {
	return notes.find(function (note, index) {
		return note.title.toLowerCase() === noteTitle.toLowerCase()
	})
}


const findNotes = function(notes, query) {
	return notes.filter(function (note, index) {
		const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
		const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
		return isTitleMatch || isBodyMatch
	})
}

console.log(findNotes(notes, 'believe'))






// const findNote = (notes, noteTitle) => {
// 	return notes.find(function (note, index) {
// 		return note.title.toLowerCase() === noteTitle.toLowerCase()
// 	})
// 	const answer = notes
// 	return answer
// }
