let container = document.querySelector('.container');
let button = document.querySelector('#new')

window.addEventListener('load', defaultGrid)
button.addEventListener('click', newGrid)

function defaultGrid() {
    setGrid(16)
    fillGrid(16)
}

function setGrid(x) {
    container.style.gridTemplateColumns = `repeat(${x}, 2fr)`
}  

function fillGrid(x) {   
    for (let i = 0; i < x * x; i++) {
            let cell = document.createElement('div')
            cell.classList.add('cell')
            cell.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = 'black';
            })
            container.appendChild(cell)
        }
    }

function newGrid() {
    
    let answer = prompt('Select a number of rows')
    while (!/^[0-9]+$/.test(answer)) {
        alert('You did not enter a number.');
        answer = prompt('Select a number of rows');
    }
    if (answer < 1 || answer >64 || Number.isNaN(answer)) {
        alert('Enter a number between 1-64')
        newGrid()
    } else {
        clearGrid()
        setGrid(answer)
        fillGrid(answer)
    }
}

function clearGrid() {
    let gridArray = Array.from(container.childNodes)
    gridArray.forEach((element) => {
        container.removeChild(element)
    })
}