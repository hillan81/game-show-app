/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /*
 The Phrase class handles the creation of phrases.
*/

 class Phrase {
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
     }

/**
* This method displays the phrase on game board
*/
addPhraseToDisplay() {
    const phraseUl = document.querySelector('[id=phrase] ul'); 
    for(const char of this.phrase) {
        const phraseLi = document.createElement('li');
        phraseUl.appendChild(phraseLi); 
        phraseLi.classList.add('hide'); 
        if(char === ' ') {
            phraseLi.classList.add('space');
        } else{
            phraseLi.classList.add('letter');
            phraseLi.classList.add(char);
            phraseLi.textContent = char;
      }
     }
   }

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/

checkLetter(letter) {
    return this.phrase.includes(letter);

}

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/

showMatchedLetter(letter) {
    const letters = document.querySelectorAll('.letter');
    for (const char of letters) {

        if (char.innerText === letter) {
            char.classList.remove('hide');
            char.classList.add('show');
        }
      }
    }
 }