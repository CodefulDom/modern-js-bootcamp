let myAccount = {
 name: 'Dominique Hallan',
 deposit: 0,
 debit: 0,
 balance: 0
}


 /*
 addIncome
 resetAccount - expenses and income
 accountSummary - Print values from the myAccount object

 balance
 */

let deposit = (account, depositAmount) => {
	account.balance = account.balance + depositAmount
	account.deposit = depositAmount
}

let debit = (account, debitAmount) => {
	account.balance = account.balance - debitAmount
	account.debit = debitAmount
	if(account.balance < 0){
		console.log(`If you complete this purchase your balance would be
		Balance: $${account.balance} dollars
		You sure about this?`);
	}
}


let getBalance = (account) => {
	account.balance
	return `Your account balance is ${account.balance}`
}

deposit(myAccount, 7000.00)
console.log(myAccount)
debit(myAccount, 3000);
console.log(myAccount)
debit(myAccount, 10000)
console.log(myAccount)
getBalance(myAccount)
console.log(getBalance(myAccount))


