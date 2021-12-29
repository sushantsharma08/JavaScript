// 'use strict';
//  console.log(document.querySelector('.message').textContent);

//  document.querySelector('.message').textContent = 'yoo boi wassup';

//  document.querySelector('.number').textContent = 4;
//  document.querySelector('.score').textContent = 30;
//  document.querySelector('.guess').value = 7;


// adding a click event

const number = Math.trunc(Math.random()*20)+1;
let score = 20;
document.querySelector('.number').textContent = number;


document.querySelector('.check').addEventListener('click' , function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number entererd';
    }else if (guess===number) {
        document.querySelector('.message').textContent = 'correct number';
    }else if (guess>number) {

            if(score>1){

                document.querySelector('.message').textContent = 'too high';
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = 'you lost the game';
                document.querySelector('.score').textContent = 0;
            }
    }else if (guess<number) {

        if(score>1){

            document.querySelector('.message').textContent = 'too low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0;
        }
        
    }
});