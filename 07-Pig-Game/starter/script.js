'use strict';
const jugar = document.querySelector('.btn--roll');
const dado = document.querySelector('.dice');
const planto = document.querySelector('.btn--hold');
const nuevoJuego = document.querySelector('.btn--new')
let score = 0;
let scoreActual = 0;
let jugador = 0;
let jugadorGanador = 0;
const scoreAcum = [0,0];
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
dado.classList.add('esconder');

const pasaJugador = function(castigo){
    //cambiar de usuario
        // acciones sobre jugador en juego
        document.querySelector(`.player--${jugador}`).classList.remove('player--active');
        scoreAcum [jugador] += scoreActual-castigo;
        scoreActual = 0;
        document.getElementById(`score--${jugador}`).textContent = scoreAcum[jugador];
        document.getElementById(`current--${jugador}`).textContent = scoreActual;
        //acciones sobre nuevo jugador
        jugador = jugador === 0 ? 1:0;
        document.querySelector(`.player--${jugador}`).classList.add('player--active');
        if (score != 1) dado.classList.add('esconder');
}

jugar.addEventListener('click',function(){

    score = Math.trunc(Math.random()*6+1);
    dado.setAttribute('src',`dice-${score}.png`)
    dado.classList.remove('esconder');
    if (score === 1){
        pasaJugador(5);
    }else{
        //Adicionar al score actual
        scoreActual += score;
        document.getElementById(`current--${jugador}`).textContent = scoreActual;
        
    }

});
planto.addEventListener('click', function(){
        scoreAcum [jugador] += scoreActual;
        scoreActual = 0;
        document.getElementById(`score--${jugador}`).textContent = scoreAcum[jugador];
        document.getElementById(`current--${jugador}`).textContent = scoreActual;
        if (scoreAcum[jugador] >= 10){
            jugadorGanador = jugador;
            document.querySelector(`.player--${jugador}`).classList.add('player--winner');
            document.querySelector(`.player--${jugador}`).classList.remove('player--active');
            document.getElementById(`name--${jugador}`).textContent = `Jugador ${jugador+1}  Ganaste!!!`;
            dado.classList.add('esconder');
            jugar.classList.add('esconder');
            planto.classList.add('esconder');

        }else{
            pasaJugador(0);
        }


        
});

nuevoJuego.addEventListener('click', function(){
    score = 0;
    scoreActual = 0;
    jugador = 0;
    scoreAcum[0] = 0;
    scoreAcum[1] = 0;
    document.getElementById('score--0').textContent = scoreAcum[0];
    document.getElementById('score--1').textContent = scoreAcum[1];
    document.getElementById(`current--0`).textContent = scoreActual;
    document.getElementById(`current--1`).textContent = scoreActual;
    document.querySelector(`.player--${jugador}`).classList.add('player--active');
    jugar.classList.remove('esconder');
    planto.classList.remove('esconder');
    dado.classList.add('esconder');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`.player--${jugadorGanador}`).classList.remove('player--winner');
    document.getElementById(`name--${jugadorGanador}`).textContent = `Jugador ${jugadorGanador+1}`;


    
})