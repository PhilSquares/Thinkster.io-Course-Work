// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Looping in JavaScript Exercise 3</h1>`;

// 1. do a console.log while num is less than 10
let num = 0;

//My answer:
do {
  console.log(num);
  num += 1;
} while (num < 10);

// 2. while num2 < 5, log your favorite movie title to the console
let num2 = 0;

while (num2 < 5) {
  console.log('Harry Potter');
  num2 += 1;
}

// 3. Use a for loop to loop over some code up to 6 times, but break out on the 4th time through the loop

for (let i = 0; i < 6; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

// 4. Use a for loop to loop over some code up to 6 times, but skip the 4th time through the loop
for (let i = 0; i < 6; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}