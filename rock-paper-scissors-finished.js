alert('Welcome to Rock Paper Scissors!'); alert('The rules are:\nRock beats Scissors\nScissors beat Paper\nPaper beats Rock')
let randomNumber = Math.random();
// Get the score from the more permanent area
score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
};

function turn(playerMove, cmMove1, cmMove2, cmMove3) {
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    randomNumber = Math.random();
    score.Losses++;
    // Save the score in a more permanent area
    localStorage.setItem('score', JSON.stringify(score));
    // Set the result to 'You win'
    document.querySelector('.js-result').innerHTML = 'You lose';
    // Show an image of what you played and what the computer played
    document.querySelector('.js-move').innerHTML = `You<img src="images/${playerMove}-emoji.png" class="image-button"><img src="images/${cmMove1}-emoji.png" class="image-button">Computer`;
    // Show your score
    document.querySelector('.js-para').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    randomNumber = Math.random();
    score.Wins++;
    // Save the score in a more permanent area
    localStorage.setItem('score', JSON.stringify(score));
    // Set the result to 'You win'
    document.querySelector('.js-result').innerHTML = 'You win';
    // Show an image of what you played and what the computer played
    document.querySelector('.js-move').innerHTML = `You<img src="images/${playerMove}-emoji.png" class="image-button"><img src="images/${cmMove2}-emoji.png" class="image-button">Computer`;
    // Show your score
    document.querySelector('.js-para').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    randomNumber = Math.random();
    score.Ties++;
    // Save the score in a more permanent area
    localStorage.setItem('score', JSON.stringify(score));
    // Set the result to 'Tie'
    document.querySelector('.js-result').innerHTML = 'Tie';
    // Show an image of what you played and what the computer played
    document.querySelector('.js-move').innerHTML = `You<img src="images/${playerMove}-emoji.png" class="image-button"><img src="images/${cmMove3}-emoji.png" class="image-button">Computer`;
    // Show your score
    document.querySelector('.js-para').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
  }
}

function resetScore() {
  score.Wins = 0; score.Losses = 0; score.Ties = 0;
  localStorage.removeItem('score');
  console.log('Score was reset.');
  document.querySelector('.js-para').innerHTML = 'Wins: 0  Losses: 0  Ties: 0';
};