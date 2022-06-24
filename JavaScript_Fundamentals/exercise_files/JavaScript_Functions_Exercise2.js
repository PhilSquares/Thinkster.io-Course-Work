// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Functions in JavaScript</h1>`;

// 1. Write a function that prints a welcome message to the console, including the "name" parameter. Provide a default parameter
// Call the function twice, once passing an argument to the function and once without
function welcome(name = 'Phil') {
  console.log(' Welcome', name);
}
welcome('Tim');
welcome();

// 2. Write a function called "createPizza" that takes a list of named parameters
// Print the different parts of the pizza to the console
function createPizza({ name, price, ingredients }) {
  console.log(name, price, ingredients);
}
createPizza({
  name: 'Pepperoni',
  price: 5,
  ingredients: ['Pepperoni', 'cheese', 'bread'],
});

// 3. Write a function called "describeDog" that takes two parameters: name and hobbies
// Print a message with the dogs names and its hobbies
//Rest parameter
function describeDog(name, ...hobbies) {
  console.log(name, hobbies);
}
describeDog('Sandy', 'playing fetch', 'sleeping', 'eating');
