'use strict';
const botonMostrar = document.querySelectorAll('.show-modal');
const vModal = document.querySelector('.modal');
const cortina = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const abreModal = function(){
    vModal.classList.remove('hidden');
    cortina.classList.remove('hidden');
}

const cierraModal = function(){
    vModal.classList.add('hidden');
    cortina.classList.add('hidden');
}

for (let i=0; i<botonMostrar.length;i++){
    botonMostrar[i].addEventListener('click',abreModal);
};
closeModal.addEventListener('click',cierraModal);
cortina.addEventListener('click',cierraModal);
