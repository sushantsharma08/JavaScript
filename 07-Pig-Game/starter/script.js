'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let playing = true;
let score = [0,0];
let currrentScore = 0;
let activePlayer = 0;
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currrentScore=0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice function 
btnRoll.addEventListener('click', function(){
if(playing){
    // 1. generating a random number
    const dice = Math.trunc(Math.random()*6)+1;
    // 2. Display the dice 
     diceEl.classList.remove('hidden');
     diceEl.src = `dice-${dice}.png`
    // 3. check for 1 if yes, switch player
        if(dice !== 1){
            // Add dice to current score
            currrentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currrentScore;
            // current0El.textContent = currrentScore;
        }else{
            //switch player
          switchPlayer();
        }
}
});

btnHold.addEventListener('click', function(){
    if(playing){
    // 1.. add current score to active players score.
    score[activePlayer] += currrentScore;
    // score[1] = score[1]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    // 2. check if player's score is >= 100
    if(score[activePlayer] >= 20){
       // finish the game
       playing = false;
       diceEl.classList.add('hidden');
       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
       document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{
       // switch to the next player 
       switchPlayer();
    }
}
});

btnNew.addEventListener('click', function(){
    playing = true;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
});