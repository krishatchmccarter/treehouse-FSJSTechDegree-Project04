/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//app.js to create a new instance of the `Game` class and add event listeners for the start
// button and onscreen keyboard buttons

/**Update the app.js file.
Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons:
Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object. Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard buttons should not result in the handleInteraction() method being called. */

//Create new instance of the Game class
//const game = new Game();

//Listens for clicks on the start button and starts the game by calling the startGame() method.

//document.getElementById("btn-reset").addEventListener("click", function () {
// game.startGame();
//});

//Listens for clicks onscreen keyboard buttons

const logPhrase = (phrase) => {
  console.log(`Phrase - phrase: `, phrase.phrase);
};
const game = new Game();
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
