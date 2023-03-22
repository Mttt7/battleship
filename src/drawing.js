function drawShip(i){
    let length = 0
    if(i==0) length = 1
    else if(i==1) length = 2
    else if(i==2) length = 3
    else if(i==3) length = 3
    else if(i==4) length = 4
    else if(i==5) length = 5

    const ship = document.createElement('div')
    ship.draggable = true
    ship.classList.add('draggable')
    ship.classList.add('ship')
    ship.classList.add(`ship-${length}`)
    ship.classList.add(`id-${i}`)
    ship.dataset.length = length
    ship.dataset.direction = 'h'
    ship.classList.add('ship-horizontal')

    
    

    return ship
}



export function drawGame(){
    const gameArea = document.createElement('div')
    gameArea.classList.add('game-area')

    const boards = document.createElement('div')
    boards.classList.add('boards')

    const playerBoard = drawBoard()
    playerBoard.classList.add('player-board')

    const aiBoard = drawBoard()
    aiBoard.classList.add('ai-board')

    
    

    const fleet = document.createElement('div')
    const fleetHorizontal = document.createElement('div')
    const fleetVertical = document.createElement('div')
    for(let i = 0 ; i<6; i++){
        fleetHorizontal.appendChild(drawShip(i))
    }
    fleet.classList.add('fleet')
    fleetHorizontal.classList.add('fleet-horizontal')
    fleetVertical.classList.add('fleet-vertical')
    fleet.appendChild(fleetHorizontal)
    fleet.appendChild(fleetVertical)
    
    boards.appendChild(playerBoard)
    boards.appendChild(aiBoard)
    gameArea.appendChild(fleet)
    
    gameArea.appendChild(boards)
    
    
    return gameArea

}


function drawBoard(){
    const board = document.createElement('div')
    board.classList.add('board')

    for(let i=0;i<10;i++){
        for(let j = 0;j<10;j++){
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.dataset.id = `${j}-${i}`
            if(j===0) cell.dataset.displayx = `${i+1}`
            if(i===0) cell.dataset.displayy = `${j+1}`
            cell.dataset.vacant = 1
            board.appendChild(cell)
        }
        
    }

    return board
}