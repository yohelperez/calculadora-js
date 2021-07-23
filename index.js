// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter: This is fun :)</h1>`;

const keyboard = document.getElementById('keyboard');
const screen = document.getElementById('screen');
let operation = '';
let result = 0;

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

//Operates the numbers according to the operation symbol
function operate(number, symbol) {
  if (operation != '') {
    switch (operation) {
      case 'division':
        //result /= number;
        number = result/number;
        break;

      case 'multiplication':
        //result *= number;
        number = result*number;
        break;

      case 'subtraction':
        //result -= number;
        number = result-number;
        break;

      case 'addition':
        //result += number;
        number = result+number;
        break;

      case 'equals':
        operate(number, operation);
        break;
    }
    
  }
  result=number;
    if(symbol== "=")operation = '';
    else{
      operation=symbol;
    }
  
  screen.innerHTML= result;

}
