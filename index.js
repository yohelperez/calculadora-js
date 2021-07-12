// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter: This is fun :)</h1>`;

const keyboard = document.getElementById("keyboard");

/*
keyboard.addEventListener('click', function(event){
  alert(`You clicked on ${event.target.innerText}`);
});
*/

keyboard.addEventListener('click', function(event){
  keyPressed(event);
});

function keyPressed(){
  alert(`You clicked on ${event.target.innerText}`);

}

function writeNumbers(){


}


