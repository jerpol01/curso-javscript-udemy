'use strict';

let numero = Math.trunc(Math.random() * 20);
console.log(numero);
if (numero === 0) {
  numero++;
}
let nJugador = '';
let score = 20;
let highestScore = 0;

const muestraMensaje = function (mensaje) {
  document.querySelector('.message').textContent = mensaje;
};

document.querySelector('.again').addEventListener('click', function () {
  nJugador = '';
  score = 20;
  numero = Math.trunc(Math.random() * 20);
  console.log(numero);
  if (numero === 0) {
    numero++;
  }
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Comience a jugar !!!!';
  muestraMensaje('Comience a jugar !!!!');
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number0').textContent = '?';
  document.querySelector('.number0').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

function nIcorrecto(mensaje) {
  //document.querySelector('.message').textContent = mensaje;
  muestraMensaje(mensaje);
  score--;
  if (score > 0) {
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.score').textContent = 0;
    //document.querySelector('.message').textContent = 'Perdiste mi hermano!!!';
    muestraMensaje('Perdiste mi hermano!!!');
  }
}

document.querySelector('.check').addEventListener('click', function () {
  nJugador = Number(document.querySelector('.guess').value);

  if (nJugador === numero) {
    if (score > 0) {
      //document.querySelector('.message').textContent = 'Bravo lo lograste !!!!';
      muestraMensaje('Bravo lo lograste !!!!');
      document.querySelector('body').style.backgroundColor = 'green';
      if (highestScore < score) {
        highestScore = score;
        document.querySelector('.highscore').textContent = highestScore;
      }
      document.querySelector('.number0').textContent = numero;
      document.querySelector('.number0').style.width = '30rem';
    }
  } else if (nJugador > numero) {
    nIcorrecto('El numero es Menor !!!');
  } else {
    nIcorrecto('El numero es Mayor!!!');
  }
});

//2)
