// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Arrays in JavaScript Exercise 1</h1>`;

// map and filter
const courses = [
  { name: 'JavaScript Fundamentals' },
  { name: 'Angular CLI Basics' },
  { name: 'Deploying Apps to Netlify' },
];

// 1. Use the map method to create an array of course names (strings only) from the courses array
const newCourses = courses.map((course) => course.name);
console.log(newCourses);

// 2. Use the filter method to create an array from the courses array where the only item is the one with a name of 'JavaScript Fundamentals'
const filterArray = courses.filter(
  (course) => course.name === 'JavaScript Fundamentals'
);
console.log(filterArray);