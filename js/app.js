/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//app.js to create a new instance of the `Game` class and add event listeners for the start
// button and onscreen keyboard buttons

/**Update the app.js file.
Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons:
Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object. Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard buttons should not result in the handleInteraction() method being called. */
let game;

//Listens for clicks on the start button and starts the game by calling the startGame() method.
document.getElementById("btn__reset").addEventListener("click", (e) => {
  //Create new instance of the Game class
  game = new Game();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

//Listens for clicks onscreen keyboard buttons

//use event delegation and add a single event listener that listens for a click on any of the onscreen keyboard buttons.  Make sure that clicking the space between and around the keyboard buttons does not result in the method being called.  In the callback function call the handle interaction method on the game object (Add empty handle interaction method test code)

let clickedKey = document.getElementsByClassName("key");

for (key of clickedKey) {
  key.addEventListener("click", (e) => {
    let clickedKeyValue = e.target.textContent;
    console.log(clickedKeyValue);
    game.handleInteraction(e.target);
  });
}
