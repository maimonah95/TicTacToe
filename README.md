# TicTacToe
 
 Tic tac toe is a game played by two players .
 The players alternate marking X and O within the nine squares of the grid, each intending to create a row of three marks either horizontally, vertically or diagonally.
  
Goal:
The goal of this game is to be the first one who draws a row of three marks either horizontally, vertically or diagonally.


## technologies used
### Browsers:
 Google Chrome

### HTML 
### CSS
### Programming Languages
 Javascript 
 ### Libraries
 jQuery
### approach taken To do the Project:
Structured approach
 ### wireframes:
 A wireframe is a layout of a web page that demonstrates what interface elements will exist on key pages. 
 ![Getting Started](XO.png)

 ### user stories :
  what is user stories :natural language description of one or more features of a software system.

  user story :
 * As a user, I should be able to start a new tic tac toe game.
* As a user, I should be able to click on a square to add X first and then O, and so on.
* As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next.
* As a user, I should not be able to click the same square twice.
* As a user, I should be shown a message when I win, lose or tie.
* As a user, I should not be able to continue playing once I win, lose, or tie.
* As a user, I should be able to play the game again without refreshing the page.
* As a user, I should be able to play multiple game rounds.
* As a user, I can Write my name.
* As a user, I can play  from a mobile phone.
* As a user, I can play with AI 

### how the Player win?////////

## Functions 
#### checkWin(playChar , nameOfPlayer):
it has two parameters .one  for player and the second for the character of the player(X or O).
This function check if the player win
player  Win probability:
* [0, 1, 2],[3, 4, 5],[6, 7, 8],horizontal .
* [0, 3, 6], [1, 4, 7], [2, 5, 8],vertical.
* [0, 4, 8], [2, 4, 6]]diagonal .
#### initWithRounds(nameOfPlayer):
This function has one parameter .the winner information.
* Reset the counter, 
* remove any value in a Cell
* display Winning message .
* add to winner counter .
* modify players counter.
#### init():
This function for Reset Every Things in the game.
* players counter.
* counter .
*  players Name.
* board Cell
#### name():
This function to decler the names of the players.
 ### My  favorite functions://////////

 

