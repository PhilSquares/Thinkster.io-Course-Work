// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Arrays in JavaScript Exercise 4</h1>`;

// forEach and includes

const scores = [5, 8, 3, 10, 7];

// 1. Loop over each item in the array using forEach and log it to the console after multiplying it by 3
const loop = scores.forEach((score) => console.log(score * 3));

// 2. Use the includes method to see if the number 8 exists in the array
const isNumberIncluded = scores.includes(8);
console.log(isNumberIncluded);

// 3. Use the includes method to see if the string 'JavaScript' exists in the array
const isStringIncluded = scores.includes('JavaScript');
console.log(isStringIncluded);