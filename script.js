let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.getElementById('check').addEventListener('click', function () {
    const guess = Number(document.getElementById('guess').value);

    if (!guess || guess < 1 || guess > 20) {
        document.querySelector('.message').textContent = 'Please enter a number between 1 and 20.';
        document.querySelector('.message').style.color = '#ffcc00';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'You nailed it! 🎉';
        document.querySelector('.message').style.color = '#ff7e5f';
        document.getElementById('check').setAttribute('disabled', true);
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.color = '#ff7e5f';
        document.querySelector('.number').classList.add('glow');
        document.querySelector('.game-container').classList.add('bg-purple-600');
        document.body.classList.add('winner-bg');
        document.querySelector('header').classList.add('header-bg');

        document.body.style.backgroundImage = 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else {
        document.querySelector('.message').textContent = guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉';
        document.querySelector('.message').style.color = '#ff4d4d';
        score--;
        document.querySelector('.score').textContent = score;

        if (score <= 0) {
            document.querySelector('.message').textContent = 'You lost the game! 😢';
            document.querySelector('.message').style.color = '#ff4d4d';
            document.getElementById('check').setAttribute('disabled', true);
        }
    }
});

document.getElementById('reset').addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.message').style.color = '#ffcc00';
    document.querySelector('.score').textContent = score;
    document.getElementById('check').removeAttribute('disabled');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.color = '#fff';
    document.querySelector('.number').classList.remove('glow');
    document.querySelector('.game-container').classList.remove('bg-purple-600');
    document.body.classList.remove('winner-bg');
    document.getElementById('guess').value = '',
        document.querySelector('header').classList.remove('header-bg');
    document.body.style.backgroundImage = 'linear-gradient(135deg, #1f2937, #3b4252, #4c566a)';
});
