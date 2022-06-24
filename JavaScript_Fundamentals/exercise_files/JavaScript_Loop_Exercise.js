// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Looping in JavaScript Exercise 1</h1>`;

// 1. Use a loop to add 2 to the num variable 5 times
let num = 0;
for (let i = 0; i < 5; i++) {
  num = num + 2;
}

console.log(num);

// 2. Loop over the pets array and log each of the names to the console
const pets = ['Duke', 'Max', 'Apollo', 'Cincy'];
for (pet of pets) {
  console.log(pet);
}

// 3. Loop over the pets array and only print out every other one
for (let i = 0; i < pets.length; i += 2) {
  console.log(pets[i]);
}
