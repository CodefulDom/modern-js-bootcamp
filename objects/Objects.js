const book = {
  title: 'How to Kill a Mockingbird',
  author: 'Some Dude',
  pageCount: 5000
}

console.log(book);
console.log(book.title);
console.log(book.author);
console.log(book.pageCount);

book.title = 'Boogers in 1984';
console.log(book);

const person = {
  name: 'Dom',
  age: 34,
  location: 'St. Louis, MO'
}

console.log(person.age);
console.log(person.name);
console.log(person.location);
console.log(person);

let breakdown = `My name is ${person.name} and I am ${person.age + 17} years old. I live in ${person.location}.`

console.log(breakdown);

