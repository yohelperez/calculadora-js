// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter: This is fun :)</h1>`;
appDiv.innerHTML = `<h1>Basic Calculator</h1>`;

const keyboard = document.getElementById('keyboard');
const screen = document.getElementById('screen');
let operation = '';
let result = 0;
let del = false;

//Creates the listener on the keyboard
keyboard.addEventListener('click', function(event) {
  keyPressed(event);
});

//Function called every time a key is pressed
function keyPressed(event) {
  if (!isNaN(parseInt(event.target.innerHTML))) {
    writeNumbers(event.target.innerHTML);
  } else {
    let key = event.target.id;
    switch (key) {
      case 'clearAll':
        clearAll();
        break;

      case 'clear':
        clear();
        break;

      default:
        operate(parseInt(screen.innerHTML), key);
    }
  }
}

//Writes numbers on the screen
function writeNumbers(number) {
  if (del) screen.innerHTML = '';
  screen.innerHTML += number;
  screen.innerHTML = parseFloat(screen.innerHTML);
  del = false;
}

//Clears the whole screen
function clearAll() {
  screen.innerHTML = '';
  result = 0;
  operation = '';
}

//Clears one number
function clear() {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
}

//Operates the numbers according to the operation symbol
function operate(number, symbol) {
  if (operation != '') {
    switch (operation) {
      case 'division':
        number = result / number;
        break;

      case 'multiplication':
        number = result * number;
        break;

      case 'subtraction':
        number = result - number;
        break;

      case 'addition':
        number = result + number;
        break;

      case 'equals':
        console.log('equial');
        operate(number, operation);
        break;
    }
  }
  result = number;
  if (symbol == 'equals') operation = '';
  else {
    operation = symbol;
  }

  screen.innerHTML = result;
  del = true;
}
