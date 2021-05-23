/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

//Listens for clicks on the start button and starts the game by calling the startGame() method.
document.getElementById("btn__reset").addEventListener("click", (e) => {
  //Create new instance of the Game class
  game = new Game();
  game.startGame();
  //console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

//Listens for clicks onscreen keyboard buttons using event delegation to call the event Handler Method in the Game Class.

let clickedKey = document.getElementsByClassName("key");

for (key of clickedKey) {
  key.addEventListener("click", (e) => {
    game.handleInteraction(e.target);
  });
}

addEventListener("keyup", (e) => {
  for (let i = 0; i < clickedKey.length; i++) {
    if (clickedKey[i].innerText === e.key) {
      game.handleInteraction(clickedKey[i]);
    }
  }
});
