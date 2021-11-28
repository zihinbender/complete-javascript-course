'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const message = document.querySelector('.message');
const scoreText = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

btnCheck.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess) {
        message.textContent = 'No Number!';
    } else if (guess === secretNumber) {
        message.textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    
        if (score > highscore) {
            highscore = score;
            highScore.textContent = highscore;
        }

    } else if  (guess !== secretNumber) {
        if (score > 1) {
            message.textContent = guess > secretNumber ? 'Too High!': 'Too Low!';
            score--;
            scoreText.textContent = score;
        } else {
            message.textContent = 'You lost the Game!';
            scoreText.textContent = 0;
        };
    };        
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         message.textContent = 'Too High!';
    //         score--;
    //         scoreText.textContent = score;
    //     } else {
    //         message.textContent = 'You lost the Game!';
    //         scoreText.textContent = 0;
    //     };
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         message.textContent = 'Too Low!';
    //         score--;
    //         scoreText.textContent = score;
    //     } else {
    //         message.textContent = 'You lost the Game!';
    //         scoreText.textContent = 0;
    //     };
    // };
});

btnAgain.addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    message.textContent = 'Start guessing...'
    document.querySelector('.number').textContent = '?';
    scoreText.textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});