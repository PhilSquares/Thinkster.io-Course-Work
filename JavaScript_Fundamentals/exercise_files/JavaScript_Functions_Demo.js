// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Real Life Functions Demo</h1>`;

const addButton = document.getElementById('addButton');
const answer = document.getElementById('answer');


// I used an anonymous function here so that we have access to this
// this refers to the button that has been clicked
addButton.addEventListener('click', function (event) {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const answerHeader = document.getElementById('answer-header');
  
  const answer = add(+num1.value, +num2.value)

  answerHeader.innerHTML = +num1.value + +num2.value;
  
  previousAnswers.push(answer);
  outputPreviousAnswers();

  toggleButtonClasses(this);
});


// I used named functions for the next three functions because I needed to be able to call the functions elsewhere
// I could have used arrow/anonymous functions assigned to variables, but I prefer use normal named functions 
function toggleButtonClasses(button) { // no default parameter because I want an error thrown if I forget to pass a button
  button.classList.toggle('btn-primary');
  button.classList.toggle('btn-success');
}

// I used default parameters here so that I don't accidentally add a number to undefined
function add(num1 = 0, num2 = 0) {
  return num1 + num2;
}

const previousAnswers = [];

function outputPreviousAnswers() {
  const ul = document.getElementById('previous-answers');
  ul.innerHTML = "";

  // I used an arrow function as the callback for the forEach method because
  // 1) I don't need access to this; I'm just creating a new list item
  // 2) There is no this object with these array methods anyways
  previousAnswers.forEach(answer => {
    const newLi = document.createElement('li');
    newLi.innerHTML = answer;
    ul.appendChild(newLi);
  })
}