const person = {
	name: 'Dom',
	age: 34,
	hasKids: true,
	isMarried: true,
	salary: 75000,
	wifeSalary: 75000,
	combinedSalary: function() {
		let total = this.salary + this.wifeSalary
		return total
	}
}

console.log(person.name);
console.log(person);
console.log(person.combinedSalary());

