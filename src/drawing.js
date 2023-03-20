
export function drawMenu(){

}

export function drawGame(){
    const gameArea = document.createElement('div')
    gameArea.classList.add('game-area')

    const playerBoard = drawBoard()
    playerBoard.classList.add('player-board')

    const aiBoard = drawBoard()
    aiBoard.classList.add('ai-board')

    gameArea.appendChild(playerBoard)
    gameArea.appendChild(aiBoard)

    return gameArea

}


function drawBoard(){
    const board = document.createElement('div')
    board.classList.add('board')

    for(let i=0;i<10;i++){
        for(let j = 0;j<10;j++){
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.dataset.id = `${i}-${j}`
            if(j===0) cell.dataset.displayx = `${i+1}`
            if(i===0) cell.dataset.displayy = `${j+1}`
            board.appendChild(cell)
        }
        
    }

    return board
}