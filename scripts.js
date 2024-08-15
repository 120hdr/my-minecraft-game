document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const gameContainer = document.getElementById('game-container');
    const resetButton = document.getElementById('reset-button');
    const scoreElement = document.getElementById('score');
    const startButton = document.getElementById('start-button');
    const clickSound = document.getElementById('click-sound');
    
    let score = 0;
    const colors = ['#8B4513', '#CD5C5C', '#FFD700', '#32CD32', '#00BFFF']; // Array of colors

    // Create a grid of blocks
    function createGrid(rows, cols) {
        gameContainer.innerHTML = ''; // Clear previous grid
        for (let i = 0; i < rows * cols; i++) {
            const block = document.createElement('div');
            block.className = 'block';
            block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            block.addEventListener('click', () => {
                if (!block.classList.contains('clicked')) {
                    block.classList.add('clicked');
                    clickSound.play(); // Play sound effect
                    score++;
                    updateScore();
                }
            });
            gameContainer.appendChild(block);
        }
    }

    // Update the score display
    function updateScore() {
        scoreElement.textContent = `Score: ${score}`;
    }

    // Start the game
    function startGame() {
        startScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        createGrid(10, 10); // Default grid size
    }

    // Reset the game
    function resetGame() {
        score = 0;
        updateScore();
        createGrid(10, 10); // Reset grid size
    }

    // Attach event listeners
    startButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', resetGame);
});
