document.addEventListener('DOMContentLoaded', () => {
const gameContainer = document.getElementById('game-container');
const resetButton = document.getElementById('reset-button');

// Create a 10x10 grid of blocks
function createGrid() {
gameContainer.innerHTML = ''; // Clear previous grid
for (let i = 0; i < 100; i++) {
const block = document.createElement('div');
block.className = 'block';
block.addEventListener('click', () => {
block.style.backgroundColor = block.style.backgroundColor === 'rgb(139, 69, 19)' ? '#8B4513' : '#CD5C5C';
});
gameContainer.appendChild(block);
}
}

// Reset the game
function resetGame() {
createGrid();
}

// Initial grid creation
createGrid();

// Attach event listener to reset button
resetButton.addEventListener('click', resetGame);
});
