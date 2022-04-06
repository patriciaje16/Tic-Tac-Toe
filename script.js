/////first thing is to select all of our cell elements///
const squares = document.querySelectorAll(".cell");

////select our game status display///
const gameDisplay = document.querySelector(".gameContainer")

////select our reset button/////
const resetButton = document.querySelector(".restart")





////////////variable to track to track played cells and validate game state later on///////

// const validClick = (tile) => {
//   if (tile.innerText === 'X' || tile.innertext === 'O') {
//     return false;
//   }////makes sure player only plays one function
//   return true
// };

let board = ['', '', '', '', '', '', '', '', ''];
/* Index within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
        
 */ ///////



/////area to store player/////
const XClass = 'x'
const OClass = 'o'
let currentPlayer = XClass

/////place to store game activity 
let isGameActive = true;


////variables to represent end game state////////////////
const winMessage = `Player ${currentPlayer} Won`;
const currentPlayersTurn = `It's ${currentPlayer}'s turn`;
const tie = 'Tie';



// a head function to check array to see if anyone has won////


//////messages to display to user during the game such as winning message, draw message, current player turn//////


////////setting message to let players know whose turn it is/////

const playerChange = () => {
  if (currentPlayer === XClass) {
    currentPlayer = OClass
  } else(
    currentPlayer = XClass
  )
}
///adding event listeners to game cells 
squares.forEach(cell => {
  cell.addEventListener('click', (e) => {
    cell.innerHTML = currentPlayer
    playerChange()

  });
});

////need it to log the players letter just once on each click

// const gameRestart = () => {
//   isGameActive = true;
//   currentPlayer = XClass;
//   board = ['', '', '', '', '', '', '', '', ''];
//   gameDisplay.innerHTML = currentPlayersTurn;
//   squares.forEach(cell => cell.innerHTML = "");
// }
///adding event listners to reset button
resetButton.addEventListener('click', (e) => {
   squares.forEach(cell => cell.innerHTML = "")
})

