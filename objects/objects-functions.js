const myBook = {
  title: 'How to Kill a Mockingbird',
  author: 'Some Dude',
  pageCount: 5000
}

const otherBook = {
  title: 'Sometimes you feel like a nut',
  author: 'Some other Dude',
  pageCount: 15000
}

let getSummary = (book) => {
  return {
    summary: `${book.title} by ${book.author}. It has ${book.pageCount} pages`,
    pageCountSummary: `${book.pageCount} is pages long`
  }
}

getSummary(myBook);
getSummary(otherBook);

let bookSummary = getSummary(myBook);
console.log(bookSummary);

const account = {
  id: 1,
  name: 'Dom Hallan',
  expenses: 0,
  income: 0
}

const addExpense = (account, amount) => {
  account.expenses = account.expenses + amount
  console.log(account);
}

const addIncome = (account, amountAdded) => {
  account.income = account.income + amountAdded
}

addIncome(account, 10000000);
console.log(account);

const subtractIncome = (account, amountAdded) => {
  account.income = account.income - amountAdded
}

console.log(account)
subtractIncome(account, 2573.32);
console.log(account);

const resetAccount = (account ,expenses) => {
  account.expenses = 0
}

resetAccount(account, 0)
console.log(account)