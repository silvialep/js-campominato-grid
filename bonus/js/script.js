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
*/

// creo variabile degli elementi HTML che andrò a manipolare
let gridEl = document.getElementById('grid');
let buttonCreate = document.getElementById('btn-create');
let buttonClear = document.getElementById('btn-clear');

// console.log(difficultyChoice.value);
gridEl.style.display = 'none';

// creo evento al click per generare la griglia con le celle
buttonCreate.addEventListener('click', function () {
    gridEl.style.display = 'flex';
    let difficultyChoice = document.getElementById('difficulty');
    if (difficultyChoice.value == 'easy') {
        easyGrid(gridEl);
    } else if (difficultyChoice.value == 'medium') {
        mediumGrid(gridEl);
    } else if (difficultyChoice.value == 'hard') {
        hardGrid(gridEl);
    }

})

function easyGrid(container) {
    for (i = 1; i < 101; i++) {
        let newCell = document.createElement('div');
        container.append(newCell);
        newCell.innerText = i;
        newCell.classList.add('cell-easy');
        newCell.addEventListener('click', function () {
            newCell.style.backgroundColor = 'lightblue';
            console.log(newCell.innerText);
        })
    }
}

function mediumGrid(container) {
    for (i = 1; i < 82; i++) {
        let newCell = document.createElement('div');
        container.append(newCell);
        newCell.innerText = i;
        newCell.classList.add('cell-medium');
        newCell.addEventListener('click', function () {
            newCell.style.backgroundColor = 'lightblue';
            console.log(newCell.innerText);
        })
    }
}

function hardGrid(container) {
    for (i = 1; i < 50; i++) {
        let newCell = document.createElement('div');
        container.append(newCell);
        newCell.innerText = i;
        newCell.classList.add('cell-hard');
        newCell.addEventListener('click', function () {
            newCell.style.backgroundColor = 'lightblue';
            console.log(newCell.innerText);
        })
    }
}