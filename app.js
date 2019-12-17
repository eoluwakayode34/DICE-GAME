
//GAME INSTRUCTION
alert(`
    HOW TO PLAY:
    The game has two Player

Player 1 and Player 2.

The first or active player has a small red circle beside its name
 and the background is darker than the other

How to Play:
1. Click on roll dice and any number you get, get updated in your current score.

2. When you roll a one(1) you are no longer the active Player the next player will take over.

3. When you score 50 or a number greater then click on hold to win. then the game stop working

4. To play again click new game.

`);


//declare variable
var score, roundScore, activePlayer, gamePlaying;
gamePlaying = true;


init();



//printing the active player score
// document.querySelector('#current-' + activePlayer).textContent = dice;


//setup event handler for button 
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        var dice = dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png'

        //3. upate the round sdcore if the rolled 
        //number was NOT a 1 
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            //and change active player and return roundscore to 0
            nextPlayer();
            alert('Its next player turn');
        }
    }
});

//add event to btn hold
document.querySelector('.btn-hold').addEventListener('click', function () {
    //update current score to global score
    if (gamePlaying) {
        score[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        //update the UI and
        if (score[activePlayer] >= 50) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});


//Check if player won the game  change active player
//and add the winner class
//and remove the active class
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    //and return all current to 0
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';

    //and toggle active class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //hidden dice again
    document.querySelector('.dice').style.display = 'none';

}
//add event listener to btn new
document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    //add init function to return all variable to zero
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    // set all score to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //hide the dice   
    document.querySelector('.dice').style.display = 'none'

    //set winner and player back\


    //remove all active class and winner class
    //add active class back to the first one
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    gamePlaying = true;

}
