// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Equality Comparison Operators Exercise</h1>`;

// Determine what the output will be in each scenario

// 1. 'Hello' == 'hello'
//First answer: true

//Correct answer: false (uppercase H causes the return to be false)


// 2.
const age1 = 30;
const age2 = '30';

// age1 == age2
// returns true (converts to same type)

age1 === age2
//returns false (strict equality)


// 3.
const dog1 = { breed: null };
const dog2 = {};
// dog1.breed == dog2.breed
//returns true 

// dog1.breed === dog2.breed
//returns false

// 4.
const pizza1 = { name: 'pepperoni' };
const pizza2 = { name: 'pepperoni' };
const pizza3 = pizza2;
// pizza1 == pizza2
//First answer: true

//Correct answer: false (the values are pointing to two seperate memory locations)

// pizza1 === pizza3
//First answer: true

//Correct answer: Still false as the values are poitning to different locations in memory. 

// pizza2 === pizza3
//First answer: true

// 5.
const areYou = true;
const bored = 'true';
// areYou === bored
//First answer: false
