// 'use strict';
//  console.log(document.querySelector('.message').textContent);

//  document.querySelector('.message').textContent = 'yoo boi wassup';

//  document.querySelector('.number').textContent = 4;
//  document.querySelector('.score').textContent = 30;
//  document.querySelector('.guess').value = 7;


// adding a click event

let number = Math.trunc(Math.random()*20)+1;
let score = 20;



document.querySelector('.check').addEventListener('click' , function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);


    // no number
    if (!guess) {
        document.querySelector('.message').textContent = 'No number entererd';

    // wright number
    }else if (guess===number) {
        document.querySelector('.message').textContent = 'correct number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;

    // number too high
    }else if (guess>number) {

            if(score>1){

                document.querySelector('.message').textContent = 'too high';
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = 'you lost the game';
                document.querySelector('.score').textContent = 0;
            }

    // number too low
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

// challange 1   --> to restore the page using again button;

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?';

    // restoring views
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})