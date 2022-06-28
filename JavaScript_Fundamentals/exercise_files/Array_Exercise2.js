// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Arrays in JavaScript Exercise 2</h1>`;

// find and findIndex
const dogs = [
  { name: 'Duke', breed: 'Labradoodle' },
  { name: 'Max', breed: 'Goldendoodle' },
  { name: 'Cincy', breed: 'Border Collie' },
  { name: 'Apollo', breed: 'Idaho Shag' },
];

// 1. Find the first dog that has a "C" in its breed
// HINT: use the string.includes method
const c = dogs.find(
  (dog) => dog.breed.includes('c') || dog.breed.includes('C')
);
console.log(c);

// 2. Find the index of the first dog with an "A" in its name
const a = dogs.findIndex(
  (dog) => dog.name.includes('a') || dog.name.includes('A')
);
console.log(a);

// 3. Find the dog whose breed is Husky
const husky = dogs.find((dog) => dog.breed === 'Husky');
console.log(husky);
const huskyIndex = dogs.findIndex((dog) => dog.breed === 'Husky');
console.log(huskyIndex);