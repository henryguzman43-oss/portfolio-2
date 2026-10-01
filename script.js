console.log("Hello, World!!");

 // 1. Select button
const button = document.querySelector("button");

// 2. Create function 
let counter = 0;

function count()  {
    counter=counter + 1;
    console.log('Counter: ' + counter);
}

// 3. Add eventListener
resetButton.addEventListener('click', count);

// Elements
const resetButton = document.querySelector('#reset');
// const squares = document.querySelectorAll('.square');
const currentPlayer = document.querySelector('#current-player');

// Data trackers
let counter = 0;

// For loop lesson
function handleClick(event) {
    const square = event.target;
    createX(square);
}

// Elements
const squares = document.querySelectorAll('.square');

function gameLoop(event) {
    const square = event.target;

    if (currentPlayer.textContent === 'O') {
        square.textContent = 'O';
        currentPlayer.textContent = 'X';
    } else {
        square.textContent = 'X';
        currentPlayer.textContent = 'O';
    }
}

for (const square of squares) {
    console.log('Squares', square);
    square.addEventListener('click', gameLoop);
}
