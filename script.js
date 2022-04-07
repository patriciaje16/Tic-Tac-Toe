/////first thing is to select all of our cell elements///
const squares = document.querySelectorAll(".cell");
////individual square elements
const cell1 = document.querySelector("#cell1")
const cell2 = document.querySelector("#cell2")
const cell3 = document.querySelector("#cell3")
const cell4 = document.querySelector("#cell4")
const cell5 = document.querySelector("#cell5")
const cell6 = document.querySelector("#cell6")
const cell7 = document.querySelector("#cell7")
const cell8 = document.querySelector("#cell8")
const cell9 = document.querySelector("#cell9")

////select our game status display///
const gameDisplay = document.querySelector(".gameStatus")

////select our reset button/////
const resetButton = document.querySelector(".restart")



///for loop 
/////area to store player/////
const XClass = 'x'
const OClass = 'o'
let currentPlayer = XClass


const xPlayerWinMessage = "Player X has won!";
const oPlayerWinMessage = "Player O has won!";
const currentPlayersTurn = `It's ${currentPlayer}'s turn`;
const tie = 'Tie';


////////////variable to track to track played cells and validate game state later on///////

// const validClick = (tile) => {
//   if (tile.innerText === 'X' || tile.innertext === 'O') {
//     return false;
//   }////makes sure player only plays one function
//   return true
// };

let gameState = ['', '', '', '', '', '', '', '', ''];
/* Index within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
        
 */ ///////

const conditionsToWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];



////variables to represent end game state////////////////
const toCheckWhoWon = () => {
  for (let i = 0; i <= 9; i++) {
    
  if (
    gameState[conditionsToWin[i][0]] == 'x' && gameState[conditionsToWin[i][1]] == 'x' && gameState[conditionsToWin[i][2]] == 'x'
  ) {

    gameDisplay.innerHTML = xPlayerWinMessage;
    console.log("x wins")
    break


  } else if (
    gameState[conditionsToWin[i][0]] == 'o' && gameState[conditionsToWin[i][1]] == 'o' && gameState[conditionsToWin[i][2]] == 'o'
  ) {
    gameDisplay.innerHTML = oPlayerWinMessage;
    console.log("o wins")
    break

  }


}
}








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

//////to grab what is in the cell

const updateDisplay = () => {
  gameDisplay.innerHTML = `It's ${currentPlayer}'s turn`
}



/////// function to update the gamestate

// const updateGameState = () => {
//   gameState.unshift(
//     squares.forEach(cell => {
//       cell.innerHTML 
//     })
//   )
// }




///adding event listeners to game cells 
squares.forEach(cell => {
  cell.addEventListener('click', (e) => {
    cell.innerHTML = currentPlayer

    const clickedCell = e.target
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'))


    playerChange()
    
updateDisplay()
    //////to log value into gameState
    gameState[clickedCellIndex] = currentPlayer;

toCheckWhoWon()

  });
});

//////to check for a win/////////






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
  currentPlayer = XClass
  board = ['', '', '', '', '', '', '', '', '']
  gameDisplay.innerHTML = currentPlayersTurn
})