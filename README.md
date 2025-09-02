<a href="https://github.com/advik01-byte">
  <img src="images/JavaScript-logo.png" title="Logo" style="max-width:100%; border-radius:250px;" width="500" align="center"/>
</a>

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
> ## I have seen that the computer does not do more than 3 same moves
> ##### Eg.
> First it does Rock, then Paper, then Paper, then Paper, then Rock again.

JavaScript code:
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
In this code the special things that are used are:
--------------------------------------------------

| **Name**                                                                   | **What does it do**                                                                                                                                                                                                                                                                                                                                                                                                                               |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `alert();`                                                                 | It creates a popup that displays whatever is in the ***string*** inside the ***brackets***.                                                                                                                                                                                                                                                                                                                                                       |
|||
| `let variable1 = '';`                                                      | It creates a variable that can be changed later in the code.                                                                                                                                                                                                                                                                                                                                                                                      |
| `const variable1 = '';`                                                    | It creates a variable that **CANNOT** be changed later in the code. We should used `const` to create a variable by default so we know the exact value of the variable.                                                                                                                                                                                                                                                                            |
|||
| `function function1(param);`                                               | It creates a ***function*** that can be used later in the code. It helps to avoid *repitition* of the code and also optimize it. This way of creating a function has a benefit, you can use the function before it is created. Also a ***parameter*** (or an ***argument***) is used to insert a value **inside** the *function* (Eg. When you call the *function*: `function1(2);` and put the *parameter* inside the brackets if there is one). |
| `const variable1 = (param) => {};`                                         | It creates a ***function*** inside a *variable*. This is called an ***Arrow function***. This way of creating a *function* is easier to read, but you ***CANNOT*** use the function before it is created.                                                                                                                                                                                                                                         |
|||
| `const variable1 = {property1: 'hello', property2: 'hi', property3: 222};` | It creates an ***Object***. An *object* has a ***property*** (eg. `property3`) and a ***value*** (eg. `'hi'`). You can call different *properties* by adding a ***dot*** (.) after a variable name and writing the *property name* after the dot (Eg. `variable1.property3`). You can also put an *object* inside an *object*.                                                                                                                    |
| `const variable1 = [1, 2, 'hi', 'hello']`                                  | It creates an ***Array***. An *array* is like a ***list***. You need to seperate each ***value*** with a comma.                                                                                                                                                                                                                                                                                                                                   |
