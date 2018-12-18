console.log('This is from a different file!')

// const pRemove = document.querySelector('p')
// pRemove.remove()

const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
	p.textContent = '******'
	console.log(p.textContent)
})
