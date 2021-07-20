// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter: This is fun :)</h1>`;

const keyboard = document.getElementById('keyboard');
const screen = document.getElementById('screen');

/*
keyboard.addEventListener('click', function(event){
  alert(`You clicked on ${event.target.innerText}`);
});
*/

keyboard.addEventListener('click', function(event) {
  keyPressed(event);
});

function keyPressed() {
  console.log(`You clicked on ${event.target.innerText}`);
  if (!isNaN(parseInt(event.target.innerHTML))) {
    screen.innerHTML += event.target.innerHTML;
  }
}

function writeNumbers() {}
