'use strict';

let numero =  Math.trunc((Math.random()*20));
console.log(numero);
if (numero === 0){numero++;}
let nJugador = '';
let score = 20;
let highestScore = 0;




document.querySelector('.again').addEventListener('click', function(){

    nJugador = '';
    score = 20;
    numero =  Math.trunc((Math.random()*20));
    console.log(numero);
    if (numero === 0){numero++;}
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Comience a jugar !!!!';
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.number0').textContent = '?';
    document.querySelector('.number0').style.width = '15rem';
    document.querySelector('.guess').value = '';
    

    

});




document.querySelector('.check').addEventListener('click', function (){
    
    nJugador = Number(document.querySelector('.guess').value);

    if (nJugador === numero){
        if (score > 0){
        document.querySelector('.message').textContent = 'Bravo lo lograste !!!!';
        document.querySelector('body').style.backgroundColor = 'green';
        if (highestScore < score){
            highestScore = score;
            document.querySelector('.highscore').textContent = highestScore;
        }
        document.querySelector('.number0').textContent = numero;
        document.querySelector('.number0').style.width = '30rem';
        }
    }else if (nJugador > numero){
        document.querySelector('.message').textContent = 'El numero es menor!!!';
        score--;
        if (score > 0){
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'Perdiste mi hermano!!!';
        }
        
    }else{
        document.querySelector('.message').textContent = 'El numero es Mayor!!!';
        score--;
        if (score > 0){
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'Perdiste mi hermano!!!';
        }
    }

});