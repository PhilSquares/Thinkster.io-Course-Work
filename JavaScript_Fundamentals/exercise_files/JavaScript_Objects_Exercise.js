'use strict';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JavaScript Objects Exercise 1</h1>`;

// 1. Create a new object called person, with a firstName key and a lastName key
// Put your first and last name as values to those keys
person = {
  firstName: 'Phil',
  lastName: 'Squares',
};

// 2. Log the firstName key using dot notation
console.log(person.firstName);

// 3. Log the lastName key using bracket notation
console.log(person['lastName']);

// 4. Freeze the object you created above
Object.freeze(person);

// 5. Try and change an attribute on the object. If you don't see the expected behavior, make the necessary fix so that the freeze method works.
person.middleInitial = 'A';