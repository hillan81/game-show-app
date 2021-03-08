/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /*
 The game class is for starting and ending the game, handlinginteractions,
  getting a random phrase, checking for a win, and removing a life from the scoreboard
*/

 class Game {
     constructor() {
         this.missed = 0;
         this.phrase = this.createPhrases();
         this.activePhrase = null; 
     }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
createPhrases() {
    const phrase = [
                   new Phrase('Hold your horses'),
                   new Phrase('Whatever floats your boat'),
                   new Phrase('Break a leg'),
                   new Phrase('Give it your best shot'),
                   new Phrase('Hold it right there'),
                   new Phrase('Pop goes the weasel'),
                   new Phrase('Easy does it'),
                   new Phrase('Have a ball'),
                   new Phrase('hold your tongue'),
                   new Phrase('In this day and age'),
                   new Phrase('Pick your poison')
              ];
    return phrase;
    }

 //When the start button in pressed the overlay is removed and the game begins

startGame() {
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
}

/**
* Selects random phrase from phrase property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
    const phraseIndex = Math.floor(Math.random() * this.phrase.length);
    const randomPhrase = this.phrase[phraseIndex];
    return randomPhrase;
}
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/

removeLife() {
    const lives = document.querySelector('.tries img[src$="images/liveHeart.png"]');
    lives.setAttribute('src', "images/lostHeart.png");
    this.missed++;

    if(this.missed === 5){
        this.gameOver(false);
    }
}

//Handles the clicked events during the current game

handleInteraction(button) {
    button.disabled = true;
    
/*check for letter matches */

    if(!this.activePhrase.checkLetter(button.textContent)) {
        button.classList.add('wrong');
        this.removeLife();
    }
        else if (this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()) {
                this.gameOver(true);
                this.resetGame();
        }
    }
}

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {
    const showLetters = document.querySelectorAll('.show').length;
    const chosenLetter = document.querySelectorAll('.letter').length;
    return showLetters === chosenLetter;
    
}


/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
  gameOver(gameWon) {  
    const display = document.getElementById('overlay');
    const message = document.getElementById('game-over-message');
    if(gameWon) {
         message.innerHTML = `Winner!!! The phrase was "${this.activePhrase.phrase}"`;
         display.classList.remove('lose');
         display.classList.add('win');
         display.style.display = 'block';
         
               
    } else {
         message.innerHTML = `Nice try, the phrase was "${this.activePhrase.phrase}"`;
         display.classList.remove('win');
         display.classList.add('lose');
         display.style.display = 'block'; 
         
    }
    this.resetGame();
}


 //reloads the game, resets the hearts, keys, and generates a new phrase
    
    resetGame() {
        //clearing the previous phrase
        const phraseUl = document.querySelector('ul');
        const phraseLi = phraseUl.querySelectorAll('li');
        for (let i = 0; i < phraseLi.length; i++) {
              phraseUl.removeChild(phraseLi[i]);
        }
        //changin all the heart back to to the initial image
        let heartsLost = document.querySelectorAll('#scoreboard img');
        for (let i = 0; i < heartsLost.length; i++) {
            heartsLost[i].src = 'images/liveHeart.png';
        }
        //enabling all the keys but on the click and keydown listeners
        let allKeys = document.querySelectorAll('#qwerty button');
        for (let i = 0; i < allKeys.length; i++) {
            allKeys[i].classList.remove('wrong', 'chosen');
            allKeys[i].classList.add('key');
            allKeys[i].disabled = false;
        }


    }
     
   
}


  

  
