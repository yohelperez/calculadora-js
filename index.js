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

//Creates the listener on the keyboard
keyboard.addEventListener('click', function(event) {
  keyPressed(event);
});

//Function called every time a key is pressed
function keyPressed(event) {
  console.log(`You clicked on ${event.target.innerText}`);
  if (!isNaN(parseInt(event.target.innerHTML))) {
    writeNumbers(event.target.innerHTML);
  } else {
    let key = event.target.innerHTML;
    switch (key) {
      case 'C':
        clearAll();
        break;

      case '←':
        clear();
        break;
    }
  }
}

//Writes numbers on the screen
function writeNumbers(number) {
  screen.innerHTML += number;
}

//Clears the whole screen
function clearAll() {
  screen.innerHTML = '';
}

//Clears one number
function clear() {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
}
