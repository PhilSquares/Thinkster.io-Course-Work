// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Looping in JavaScript Exercise 2</h1>`;

// 1. Log each key in the object to the console
// https://www.imdb.com/title/tt0385726/?ref_=fn_al_tt_1
const movie = {
  title: 'Glory Road',
  releaseYear: '2006',
  description:
    'In 1966, Texas Western coach Don Haskins led the first all-black starting line-up for a college basketball team to the NCAA national championship.',
  rating: 'PG',
};

//My answer
for (const key in movie) {
  console.log(key);
}

// 2. Log the value of each attribute on the object using the for in loop
// HINT: In the last video, I accessed the value of an attribute on the object

for (const value in movie) {
  console.log(movie[value]);
}