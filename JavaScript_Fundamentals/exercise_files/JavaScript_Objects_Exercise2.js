// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JavaScript Objects Exercise 2</h1>`;

// 1. Log the keys of the following object as an array
const pizza = {
  name: 'pepperoni',
  price: 8,
  toppings: ['marinara', 'cheese', 'pepperoni'],
};
console.log(Object.keys(pizza));

// 2. Loop over the above keys and print the keys to the console in all caps
for (const keys in pizza) {
  console.log(keys.toUpperCase());
}

// 3. Convert the above object to a string, stored in a variable, and print it to the console with all the keys and spacing set to 3
const objectToString = JSON.stringify(pizza, null, 3);
console.log(objectToString);

// 4. Convert the above object to a string but remove the price of the pizza and spacing set to 2
const objectToString2 = JSON.stringify(pizza, ['name', 'toppings'], 2);
console.log(objectToString2);

// 5. Take the string representation of the pizza object from 3 or 4 and convert it back to an object. Print the object to the console.
const converted = JSON.parse(objectToString2);
console.log(converted);
