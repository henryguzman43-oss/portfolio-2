const squares = document.querySelectorAll('.square');
const restartButton = document.querySelector('#restart');
const currentPlayerEl = document.querySelector('#current-player');

let currentPlayer = 'X';

function updateCurrentPlayerDisplay() {
    if (currentPlayerEl) currentPlayerEl.textContent = `Current player: ${currentPlayer}`;
}

function handleSquareClick(event) {
    const square = event.target;
    if (square.textContent.trim() !== '') return; 
    square.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateCurrentPlayerDisplay();
}

squares.forEach(square => square.addEventListener('click', handleSquareClick));

if (restartButton) {
    restartButton.addEventListener('click', () => {
        squares.forEach(sq => (sq.textContent = ''));
        currentPlayer = 'X';
        updateCurrentPlayerDisplay();
    });
}

updateCurrentPlayerDisplay();
