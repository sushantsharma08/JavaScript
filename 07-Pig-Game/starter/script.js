'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currrentScore = 0;

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice function 
btnRoll.addEventListener('click', function(){

    // 1. generating a random number
    const dice = Math.trunc(Math.random()*6)+1;
    // 2. Display the dice 
     diceEl.classList.remove('hidden');
     diceEl.src = `dice-${dice}.png`
    // 3. check for 1 if yes, switch player
        if(dice !== 1){
            // Add dice to current score
            currrentScore += dice;
            current0El.textContent = currrentScore;
        }else{
            //switch player
        }
});