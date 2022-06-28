// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Arrays in JavaScript Exercise 3
</h1>`;

// slice and splice

const pizzas = [
  { name: 'Pepperoni', price: 8 },
  { name: 'BBQ Chicken', price: 12 },
  { name: 'Hawaiian', price: 10 },
  { name: 'Meat Lovers', price: 12 },
];

// 1. Create a new array of pizzas from the first two pizzas in the array
// Include everything up to the second index:
const newArray = pizzas.slice(0, 2);
console.log(newArray);

// 2. Remove your least favorite pizza from the array
const leastFav = pizzas.splice(3);
console.log(leastFav);