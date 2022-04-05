/////first thing is to select all of our cell elements///
const squares = document.querySelectorAll(".cell");

////select our game status display///
const gameDisplay = document.querySelector(".gameContainer")

////select our reset button/////
const resetButton = document.querySelector(".restartButton")


/////game status element///////// ***Here we declare some variables that we will use to track the game state throught the game///


////////////variable to track to track played cells and validate game state later on///////

let board = ['', '', '', '', '', '', '', '', ''];
/* Index within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
        
 *////////

/////area to store player/////
let currentPlayer = 'X';

/////place to store end game result
let isGameActive = true;


////variables to represent end game state////////////////
const playerXWon = 'Player x Won';
const playerOWon = 'Player O Won';
const tie = 'Tie';


// you need to record someone has clicked something in an array///then have a head function to check array to see if anyone has won////


//////messages to display to user during the game such as winning message, draw message, current player turn//////


////////setting message to let players know whose turn it is/////


///adding event listeners to game cells 
squares.forEach( (cell) => {
  cell.addEventListener('click', () => console.log("It works") );
});



///adding event listners to reset button
resetButton.addEventListener('click', () => console.log("It works") );