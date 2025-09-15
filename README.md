Steps to play Rock Paper Scissors
=================================
1. Rock defeats Scissors
2. Paper defeats Rock
3. Scissors defeats Paper
> :bulb: TIP:
> ===========
> Try to mix up your choices for moves:
> -------------------------------------
> ##### Eg.
> First do Rock, then Rock, then Paper, then Scissors.
>
> The computer does not do more than 3 same moves
> -----------------------------------------------
> ##### Eg.
> First it does Rock, then Paper, then Paper, then Paper, then Rock again.

Don't know where to find my repositories? Here is the link:
===========================================================
<a href="https://github.com/advik01-byte">My Repositories</a>
_____________________________________________________________
JavaScript Code:
================
```JavaScript
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
```
I tryed to:
-----------

+ Make it with comments
+ Use functions to optimize the HTML code
+ Make the JavaScript file optimized too
_______________________________________________________________________________
HTML Code:
==========
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Rock Paper Scissors</title>
    <!-- Import the CSS file -->
    <link rel="stylesheet" href="rock-paper-scissors-finished.css">
  </head>
  <body>
    <h1>
      Rock Paper Scissors
    </h1>
    <!-- Import the rock image -->
    <button onclick="
      turn('rock', 'paper', 'scissors', 'rock');
    " class="move-button"><img src="images/rock-emoji.png" class="image-button">
    </button>
    <!-- Import the paper image -->
    <button onclick="
      turn('paper', 'scissors', 'rock', 'paper');
    " class="move-button"><img src="images/paper-emoji.png" class="image-button">
    </button>
    <!-- Import the scissors image -->
    <button onclick="
      turn('scissors', 'rock', 'paper', 'scissors');
    " class="move-button"><img src="images/scissors-emoji.png" class="image-button">
    </button>
    <p class="js-result result"></p>
    <p class="js-move"></p>
    <p class="js-para score"></p>
    <button onclick="
      resetScore();
    " class="orange-button reset-button">
      Reset Score
    </button>
    <!-- Import the JavaScript file -->
    <script src="rock-paper-scissors-finished.js"></script>
  </body>
</html>
```
I used functions to shorten the code a bit
------------------------------------------

__________________________________________
CSS Code
========

```CSS
body {
  color: white;
  background-color: black;
}
.image-button {
  /* Set the height of the images to 50px */
  height: 50px;
}

h1 {
  color: white;
}

.orange-button {
  background-color: orange;
}

.move-button {
  background-color: transparent;
  border: 3px solid white;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-right: 10px;
  /* Set the transition for the background color */
  transition: background-color 400ms;
  cursor: pointer;
}

.move-button:hover {
  background-color: white;
}

.result {
  /* Set the font size to 25px */
  font-size: 25px;
  /* Make the font bold */
  font-weight: bold;
  margin-top: 50px;
}

.score {
  margin-top: 50px;
}

.reset-button {
  background-color: white;
  padding: 8px 15px;
  /* Remove the border of the button */
  border: none;
  cursor: pointer;
  /* Set the font size to 15px */
  font-size: 15px;
  color: black;
}
```
Made it with comments so its readable
-------------------------------------
