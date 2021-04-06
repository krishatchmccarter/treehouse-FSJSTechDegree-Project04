/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Phrase.js to create a Phrase class to handle the creation of phrases.

/**Create the Phrase class in the Phrase.js file.
The class should include a constructor that receives a phrase parameter and initializes the following properties:
phrase: this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, but converted to all lower case.
The class should also have these methods:
addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter. See the example_phrase_html.txt file for an example of what the rendered HTML for a phrase should look like when the game starts, including any id or class attributes needed. When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.
checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class. */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
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

  //loop over the this.phrase property and in the loop use a condition to check if its a space or a letter.

  //set the text property for those letter li elements, when you are setting the className if it's a letter set the text Content of the li element equal to the letter in the phrase.
}
