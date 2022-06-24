// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// 1. Print out a message with the following variable in a template string
const dogName = 'Duke';
console.log(`My dogs name is ${dogName}`);

// 2. Split the following string on the periods and output the resulting array.
const statement2 =
  'This is a long string. Split it on the periods. The result is an array.';
console.log(statement2.split('.'));

// 3. Log the circumference of a circle using the Math object and the following information.
// 2 * radius * PI
const radius = 2;
console.log(2 * radius * Math.PI);

// 4. Print out the current time in milliseconds
console.log(Date.now());

// 5. Print out a date object referencing Jan 1, 2020
const jan1 = new Date('2020-01-01');
console.log(jan1);