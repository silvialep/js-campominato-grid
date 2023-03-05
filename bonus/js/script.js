/*
Bonus
Aggiungere una select accanto al bottone di generazione, 
che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, 
    divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, 
    divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, 
    divise in 7 caselle per 7 righe;
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo 
il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se 
stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un 
secondo momento.
*/

// creo variabile degli elementi HTML che andrò a manipolare
let gridEl = document.getElementById('grid');
let buttonCreate = document.getElementById('btn-create');
let buttonClear = document.getElementById('btn-clear');

gridEl.style.display = 'none';

for(i = 1; i < 101; i++) {
    let newCell = document.createElement('div');
    gridEl.append(newCell);
    newCell.innerText = i;
    newCell.classList.add('cell');
    newCell.addEventListener('click', function() {
        newCell.style.backgroundColor = 'lightblue';
        console.log(newCell.innerText);
    })
}    

// creo evento al click per generare la griglia con 100 celle
buttonCreate.addEventListener('click', function () {
    gridEl.style.display = 'flex';
})
