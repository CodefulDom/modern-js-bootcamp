/*
expenses -> description, amount

addExpense -> description, amount

getAccountSummary -> sum all expenses
Name:
Account Expenses:
Bank Total
*/

const account = {
	name: "Dominique Hallan",
	expenses: [],
	addExpense: function(description, amount) {
		this.expenses.push({
			description: description,
			amount: amount
		})
	},
	getAccountSummary: function() {
		let totalExpenses = 0

		this.expenses.forEach(function (expense) {
			totalExpenses = totalExpenses + expense.amount
		})

		return `${this.name} has ${totalExpenses} in expenses.`
	}
}

account.addExpense('Rent', 950)
console.log(account.getAccountSummary())
