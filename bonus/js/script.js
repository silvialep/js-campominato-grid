

// creo variabile degli elementi HTML che andrò a manipolare
let gridEl = document.getElementById('grid');
let buttonCreate = document.getElementById('btn-create');
let buttonClear = document.getElementById('btn-clear');

let gridPlaceholder = document.getElementById('grid-placeholder');

// console.log(difficultyChoice.value);
gridEl.style.display = 'none';

// creo evento al click per generare la griglia con le celle
buttonCreate.addEventListener('click', function () {
    gridPlaceholder.style.display = 'none';
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