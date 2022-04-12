/////first thing is to select all of our cell elements///
const squares = document.querySelectorAll(".cell");


////select our game status display///
const gameDisplay = document.querySelector(".gameStatus")

////select our reset button/////
const resetButton = document.querySelector(".restart")




/////area to store player/////
const XClass = 'x'
const OClass = 'o'
let currentPlayer = XClass


const xPlayerWinMessage = "Player X has won!";
const oPlayerWinMessage = "Player O has won!";
const currentPlayersTurn = `It's ${currentPlayer}'s turn`;
const tie = 'Tie';



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



////function to check winner or tie////////////////
const toCheckWhoWon = () => {

  for (let i = 0; i <= 9; i++) {

    if (
      gameState[conditionsToWin[i][0]] == 'o' && gameState[conditionsToWin[i][1]] == 'o' && gameState[conditionsToWin[i][2]] == 'o'
    ) {

      gameDisplay.innerHTML = oPlayerWinMessage;
      
      break


    } else if (
      gameState[conditionsToWin[i][0]] == 'x' && gameState[conditionsToWin[i][1]] == 'x' && gameState[conditionsToWin[i][2]] == 'x'
    ) {
      gameDisplay.innerHTML = xPlayerWinMessage;
     
      break

    } else if (!gameState.includes("")){
      gameDisplay.innerHTML = tie
    }


  }
}






////////function to deal with player change/////

const playerChange = () => {
  if (currentPlayer === XClass) {
    currentPlayer = OClass
  } else(
    currentPlayer = XClass
  )
}

//////function to update the game display

const updateDisplay = () => {
  gameDisplay.innerHTML = `It's ${currentPlayer}'s turn`
}



///adding event listeners to game cells 
squares.forEach(cell => {
  cell.addEventListener('click', (e) => {
    
    cell.innerHTML = currentPlayer

    if (currentPlayer == 'x') {
    cell.style.color = "#DF8453"
    } else {
      cell.style.color = "#3D8DAE"
    }

    const clickedCell = e.target
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'))
    gameState[clickedCellIndex] = currentPlayer;

    playerChange()


    updateDisplay()
  
    toCheckWhoWon()


  });
});


///adding event listners to reset button
resetButton.addEventListener('click', (e) => {
  squares.forEach(cell => cell.innerHTML = "")
  currentPlayer = XClass
  gameState = ['', '', '', '', '', '', '', '', '']
  gameDisplay.innerHTML = currentPlayersTurn
})