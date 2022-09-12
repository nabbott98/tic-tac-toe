const player1 = "X";
const player2 = "O";
let currentPlayer = "X"
let locked = false

let board = [null,"","","","","","","","",""]

let winConditions = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[1, 4, 7],[2, 5, 8],[3, 6, 9],[1, 5, 9],[7, 5, 3],]

const block_1 = document.getElementById('block_1')
const block_2 = document.getElementById('block_2')
const block_3 = document.getElementById('block_3')
const block_4 = document.getElementById('block_4')
const block_5 = document.getElementById('block_5')
const block_6 = document.getElementById('block_6')
const block_7 = document.getElementById('block_7')
const block_8 = document.getElementById('block_8')
const block_9 = document.getElementById('block_9')

const gameStatus = document.getElementById('gameStatus')

const block_1Click = () => {
    block_1.innerHTML = currentPlayer
    board[1] = currentPlayer
    console.log(board)
}
const block_2Click = () => {
    block_2.innerHTML = currentPlayer
    board[2] = currentPlayer
    console.log(board)
}
const block_3Click = () => {
    block_3.innerHTML = currentPlayer
    board[3] = currentPlayer
    console.log(board)
}
const block_4Click = () => {
    block_4.innerHTML = currentPlayer
    board[4] = currentPlayer
    console.log(board)
}
const block_5Click = () => {
    block_5.innerHTML = currentPlayer
    board[5] = currentPlayer
    console.log(board)
}
const block_6Click = () => {
    block_6.innerHTML = currentPlayer
    board[6] = currentPlayer
    console.log(board)
}
const block_7Click = () => {
    block_7.innerHTML = currentPlayer
    board[7] = currentPlayer
    console.log(board)
}
const block_8Click = () => {
    block_8.innerHTML = currentPlayer
    board[8] = currentPlayer
    console.log(board)
}
const block_9Click = () => {
    block_9.innerHTML = currentPlayer
    board[9] = currentPlayer
    console.log(board)
}


block_1.onclick = function(){
    if(board[1] === "" && locked === false){
        block_1Click()
        switch_turn()
    }
}
block_2.onclick = function(){
    if(board[2] === "" && locked === false){
        block_2Click()
        switch_turn()
    }
}
block_3.onclick = function(){
    if(board[3] === "" && locked === false){
        block_3Click()
        switch_turn()
    }
}
block_4.onclick = function(){
    if(board[4] === "" && locked === false){
        block_4Click()
        switch_turn()
    }
}
block_5.onclick = function(){
    if(board[5] === "" && locked === false){
        block_5Click()
        switch_turn()
    }
}
block_6.onclick = function(){
    if(board[6] === "" && locked === false){
        block_6Click()
        switch_turn()
    }
}
block_7.onclick = function(){
    if(board[7] === "" && locked === false){
        block_7Click()
        switch_turn()
    }
}
block_8.onclick = function(){
    if(board[8] === "" && locked === false){
        block_8Click()
        switch_turn()
    }
}
block_9.onclick = function(){
    if(board[9] === "" && locked === false){
        block_9Click()
        switch_turn()
    }
}

const checkWin = (token) => {
    for(let i = 0; i < 8; i++){
        if(board[winConditions[i][0]] === token && board[winConditions[i][1]] === token && board[winConditions[i][2]] === token ){
            gameStatus.innerHTML = "Player " + token + " Wins!"
            locked = true
            return "Win"
        }
    }
    let drawCount = 0;
    for(let i = 1; i < 10; i++){
        if(board[i] === "X" || board[i] === "O"){
            drawCount += 1
            if (drawCount === 9){
                gameStatus.innerHTML = "It's a Draw"
                locked = true
                return "It's a Draw"
            }
        }
    }

}

const switch_turn = (player) => {
    let checkX = checkWin("X")
    let checkO = checkWin("O")
    if (checkX === "Win" || checkO === "Win"){
        return
    } else if (checkX === "It's a Draw"){
        return
    }
    if (currentPlayer === "X"){
        currentPlayer = "O"
        gameStatus.innerHTML = "Player 2's Turn"
    } else {
        currentPlayer = "X"
        gameStatus.innerHTML = "Player 1's Turn"
    }
}

const resetBoard = () => {
    board = [null,"","","","","","","","",""]
    block_1.innerHTML = ""
    block_2.innerHTML = ""
    block_3.innerHTML = ""
    block_4.innerHTML = ""
    block_5.innerHTML = ""
    block_6.innerHTML = ""
    block_7.innerHTML = ""
    block_8.innerHTML = ""
    block_9.innerHTML = ""
    locked = false
    currentPlayer = "X"
    gameStatus.innerHTML = "Player 1's Turn"
}
resetBoard.onclick = function(){
    resetBoard
}
