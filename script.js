// Configurações iniciais
let randomNumber = Math.floor(Math.random() * 100) + 1;
let chances = 8;

const input = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');
const chanceCount = document.getElementById('chanceCount');

checkBtn.addEventListener('click', () => {
    const userGuess = parseInt(input.value);

    // Validação básica
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number!";
        return;
    }

    chances--;
    chanceCount.textContent = chances;

    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You won!";
        message.style.color = "#28a745";
        checkBtn.disabled = true;
    } else if (chances === 0) {
        message.textContent = `Game Over! The number was ${randomNumber}`;
        message.style.color = "#dc3545";
        checkBtn.disabled = true;
    } else if (userGuess > randomNumber) {
        message.textContent = "Your number is high";
    } else {
        message.textContent = "Your number is low";
    }

    // Limpa o input para a próxima tentativa
    input.focus();
});
