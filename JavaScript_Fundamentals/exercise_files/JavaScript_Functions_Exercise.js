// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Functions in JavaScript</h1>`;

// 1. Write a named function that logs the "name" parameter to the console
function parameter(name) {
  console.log(name);
}
parameter('Phil');

// 2. Write an arrow function that adds two numbers together using implicit return. Print the result to the console.
const addTwo = (num1, num2) => num1 + num2;
const result = addTwo(2, 2);
console.log(result);

// 3. Write an arrow function that subtracts two numbers, not using implicit return. Print the result to the console.
const subtractTwo = (number1, number2) => {
  return number1 - number2;
};
const newResult = subtractTwo(4, 2);
console.log(newResult);

// 4. Add a named function to the pizza object called "cook". Print a message to the console saying how long it will take to cook
const pizza = {
  name: 'Pepperoni',
  cook,
};

function cook() {
  console.log(this.name + ' will take 20 minutes to cook');
}
pizza.cook();

// 5. Add an arrow function to the dog object that logs "bark, bark" to the console when called.
const dog = {
  name: 'Duke',
  bark() {
    console.log('bark bark');
  },
};
dog.bark();

// 6. Add an anonymous function to the ice cream object called "eat" that logs a message saying the ice cream is being eaten
const iceCream = {
  name: 'vanilla',
  eat: function () {
    console.log(this.name + ' is being eaten');
  },
};
iceCream.eat();
