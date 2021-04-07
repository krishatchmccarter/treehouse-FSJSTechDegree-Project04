/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Phrase constructor receives a phrase parameter and initializes phrase property.  phrase is the actual phrase the Phrase object is representing converted to all lower case.

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  //(partially done) addPhraseToDisplay(): When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.

  /**
   * Display phrase on game board
   */

  //  loops over the this.phrase property and in the loop use a condition to check if its a space or a letter. sets the text property for those letter li elements and className.

  addPhraseToDisplay() {
    const phraseDiv = document.getElementById("phrase");

    for (let i = 0; i < this.phrase.length; i++) {
      const letter = this.phrase.slice(i, i + 1);
      let li = document.createElement("li");
      li.textContent = letter;
      phraseDiv.lastElementChild.appendChild(li);
      if (letter === " ") {
        li.classList.add("hide");
        li.classList.add("space");
      } else {
        li.classList.add("hide");
        li.classList.add("letter");
        li.classList.add(`${letter}`);
      }
    }
  }

  //checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  //showMatchedLetter(): Reveals the letter(s) on the board that matches a letter in the phrase.

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const phraseLetters = document.getElementsByClassName("letter"); //returns a collection of HTML Elements

    //loop through collection and if className matches letter, toggle show/hide classes
    for (let i = 0; i < phraseLetters.length; i++) {
      if (`hide letter ${letter}` === phraseLetters[i].className) {
        phraseLetters[i].className = `show letter ${letter}`;
      }
    }
  }
}
