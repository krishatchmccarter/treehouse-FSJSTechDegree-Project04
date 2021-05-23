/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**Game.js to create a Game class methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the
scoreboard. */

/**The class should also have these methods:
handleInteraction(): this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. This method should:
Disable the selected letter’s onscreen keyboard button.
If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.
gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class. */

// Game class constructor initializes the following properties
//missed used to track the number of missed guesses by the player following missed: . The initial value is 0, since no guesses have been made at the start of the game.
//phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
//activePhrase: This is the Phrase object that’s currently in play. The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = "null";
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const phrasesArray = [
      new Phrase("Life is like a box of chocolates"),
      new Phrase("There is no Trying"),
      new Phrase("May the Force be with you"),
      new Phrase("You have to see the Matrix for yourself"),
      new Phrase("You talking to me"),
    ];

    return phrasesArray;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    if (document.getElementsByClassName("hide letter").length === 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    //replaces one of the liveheart images with a lostheart image and increments the missed property. If the player has five missed guesses, then ends the game by calling gameOver();

    let index = this.missed;
    let currentScoreboardItem = document.getElementsByClassName("tries");
    currentScoreboardItem[index].firstElementChild.src = "images/lostHeart.png";
    currentScoreboardItem[index].firstElementChild.alt = "Lost Heart Icon";
    this.missed += 1;

    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    document.getElementById("overlay").style.display = "flex";

    if (gameWon) {
      document.getElementById("overlay").className = "win";
      document.getElementById("game-over-message").textContent = "Great Job!";
    } else {
      document.getElementById("overlay").className = "lose";
      document.getElementById("game-over-message").textContent =
        "Sorry, better luck next time!";
    }
    game.resetGameKeyboard();
    game.resetGamePhrase();
    game.resetLives();
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    //disable the selected letter's onscreen keyboard button
    button.disabled = true;

    if (game.activePhrase.checkLetter(button.textContent)) {
      button.className = "chosen";
      game.activePhrase.showMatchedLetter(button.textContent);

      if (game.checkForWin()) {
        game.gameOver(true);
      }
    } else {
      button.className = "wrong";
      game.removeLife();
    }
    //if the phrase does NOT include the guessed letter, add the 'wrong' CSS class to the selected letter's keyboard button and call the 'removeLife()' method

    //if the phrase includes the guessed letter, add the 'chosen' CSS class to the selected letter's keyboard button, call the 'showMatchedLetter()' method on the phrase, and then call the 'checkForWin()' method. If the player has won the game, also call the 'gameOver()' method.
  }
  //removes all li elements from the Phrase ul element

  resetGamePhrase() {
    console.log("hello reset");
    const usedGame = document
      .getElementById("phrase")
      .getElementsByTagName("li");
    console.log(usedGame);

    while (usedGame.length > 0) {
      usedGame[0].remove();
    }
  }

  //enables all of the onscreen keyboard buttons and updates each to use the 'key' CSS class and not the 'chosen' or 'wrong' CSS classes

  resetGameKeyboard() {
    const usedKeyboard = document
      .getElementById("qwerty")
      .getElementsByTagName("button");
    console.log(usedKeyboard);

    for (key of usedKeyboard) {
      key.disabled = false;
      key.className = "key";
    }
  }
  //reset all of the heart images in the scoreboard at the bottom of the gameboard to display the liveheart.png image
  resetLives() {
    const tries = document.getElementsByClassName("tries");
    console.log(tries);
    for (let i = 0; i < tries.length; i++) {
      tries[i].firstElementChild.src = "images/liveHeart.png";
      tries[i].firstElementChild.alt = "Heart Icon";
    }
  }
}
