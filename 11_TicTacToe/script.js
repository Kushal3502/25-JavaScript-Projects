const board = document.querySelector('.board')
const square = document.querySelectorAll('.square')
const messageBox = document.querySelector('.message')
const restartBtn = document.querySelector('.restart')

const players = ['X', 'O']

let currentPlayer = players[0]
messageBox.textContent = `X's turn`

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// <-------------------- user input -------------------->
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', () => {
        // checks whether the cell is empty or not
        if (square[i].textContent !== '' || checkWinner(currentPlayer)) {
            return
        }
        square[i].textContent = currentPlayer

        if (checkWinner(currentPlayer)) {
            messageBox.textContent = `${currentPlayer} won the match...`
            restart()
            return
        }

        if (checkTied()) {
            messageBox.textContent = `Match tied...Restart the game...`
            restart()
            return
        }
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0]
        messageBox.textContent = `${currentPlayer}'s turn`
    })
}

// <-------------------- checks the winner -------------------->
function checkWinner(currentPlayer) {
    for (let i = 0; i < winningPatterns.length; i++) {
        const [a, b, c] = winningPatterns[i]
        if (square[a].textContent == currentPlayer &&
            square[b].textContent == currentPlayer &&
            square[c].textContent == currentPlayer) {
            return true
        }
    }
    return false
}

// <-------------------- checks the tie -------------------->
function checkTied() {
    for (let i = 0; i < square.length; i++) {
        // if the square is empty, retun false
        if (square[i].textContent === '')
            return false
    }
    return true
}

// <-------------------- restart button --------------------> 
function restart() {
    restartBtn.addEventListener('click', () => {
        messageBox.textContent = `X's turn`
        for (let i = 0; i < square.length; i++) {
            square[i].textContent = ''
        }
    })
}