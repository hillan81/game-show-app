/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const keys = document.querySelectorAll('.key');


const startButton = document.querySelector('#btn__reset');
//add event listeners for the start button and onscreen keyboard buttons.
startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();

     
});

for(const key of keys) {
    key.addEventListener('click', (e) => {

        game.handleInteraction(key);
      
    }); 
   
}
addEventListener('keyup', (e) =>{
    if(game.over){
        e.preventDefault();
    } else {
        for(const key of keys) {
            if(e.key == key.textContent && !key.disabled) {
                game.handleInteraction(key);
            }
        }
    }
    
});