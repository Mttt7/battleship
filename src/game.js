//import './styles/style.css'

function arraysMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

class Gameboard{
    missedAttacks = []
    destroyedCells = [] //cells which was attacked and the part of ship on it has been destroyed
    ships = [] //array of arrays which says where is the ship
    receiveAttack(x,y){
        if(this.destroyedCells.some(ship => ship[0] === x && ship[1] === y) || this.missedAttacks.some(ship => ship[0] === x && ship[1] === y)){
            return 0 //you already attacked this cell!!!
        }
        else if(this.ships.some(ship => ship[0] === x && ship[1] === y)){
            this.destroyedCells.push([x,y])
            this.ships = this.ships.filter(subArr => !arraysMatch(subArr, [x,y]))
            return 1
        }
        else{
            this.missedAttacks.push([x,y])
            return 0
        }
    }
    //direction = horizontal or vertical
    addShip(x,y,length,direction){ //x,y = starting points of ships (uppper left(closer to 0,0))
        for(let i = 0; i<length; i++){
            if(direction === 'horizontal'){
                this.ships.push([x+i,y])
            }
            else if(direction === 'vertical'){
                this.ships.push([x,y+i])
            }
        }
    }
    allShipsSunk(){
        return this.destroyedCells.every(cell => this.ships.includes(cell))
    }
    displayBoard(){
        
        for(let i = 0;i<10;i++){
            for(let j = 0;j<10;j++){
                //console.log(j)
                if(this.missedAttacks.some(sub => sub.every((val,index)=>val===[j,i][index]))) process.stdout.write('  +  ');
                else if(this.destroyedCells.some(sub => sub.every((val,index)=>val===[j,i][index]))) process.stdout.write('  X  ');
                else if(this.ships.some(sub => sub.every((val,index)=>val===[j,i][index]))) process.stdout.write('  O  ');
                else process.stdout.write('  -  ');
            }
           console.log()
        }
    }
}

class Player{
    constructor(ai){
        this.ai=ai
    }
    addShips(arr){ //arrays of objects {startingPoint:[x,y], length:N, direction:'horizontal'/'vertical'}
        for(let i = 0; i<arr.length;i++){
            if(!this.ai)PlayerGameboard.addShip(arr[i].startingPoint[0],arr[i].startingPoint[1],arr[i].length,arr[i].direction)
            else if (this.ai) AiGameboard.addShip(arr[i].startingPoint[0],arr[i].startingPoint[1],arr[i].length,arr[i].direction)

        }
    }

    makeMove(x,y){
        if(this.ai===false){
            return AiGameboard.receiveAttack(x,y)
        }
        else{
            return PlayerGameboard.receiveAttack(x,y)
        }
    }

}

const player = new Player(false)
const ai = new Player(true)
let PlayerGameboard = null
let AiGameboard = null

function startGame(playerShips, aiShips){   //arrays of objects get from screen
    PlayerGameboard = new Gameboard()
    AiGameboard = new Gameboard()
    player.addShips(playerShips)
    ai.addShips(aiShips)
    
}

class Turn{
    constructor(){
        this.curr = 'player'
    }
    getTurn(){ return this.curr }
    changeTurn(){
        if(this.curr==='player') this.curr = 'ai'
        else if(this.curr==='ai') this.curr = 'player'
    }
}

function turn(x,y){
    if(turnManager.getTurn()==='player'){
        let outcome = player.makeMove(x,y)
        if(checkGameOver()) return 0 //??
        if(outcome === 1) return 1
        else if(outcome === 0) turnManager.changeTurn()
    }
   else if(turnManager.getTurn()==='ai'){
        let outcome = ai.makeMove(x,y)
        if(checkGameOver()) return 0 //??
        if(outcome === 1) return 1
        else if(outcome === 0) turnManager.changeTurn()
    }

}

function getAiTurn(){ //?-------CHECK---------- 
    let randomX = Math.floor(Math.random() * 10)
    let randomY = Math.floor(Math.random() * 10)
    while(PlayerGameboard.missedAttacks.some(data => data[0] === randomX && data[1] === randomY)){
        randomX = Math.floor(Math.random() * 10)
        randomY = Math.floor(Math.random() * 10)
    }
    
    return 
}


function showGame(){
    console.log('------------------')
    PlayerGameboard.displayBoard()
    console.log()
    AiGameboard.displayBoard()
    console.log('------------------')
}


//CHECKING CONDITIONS

function checkGameOver(){
    if(PlayerGameboard.ships.length===0){
        console.log('AI WON!')
        return true
    }
    else if(AiGameboard.ships.length===0){
        console.log('PLAYER WON!')
        return true
    }
}


const playerShips = [{
    startingPoint:[0,0],
    length:3,
    direction:'horizontal'
},
{
    startingPoint:[2,3],
    length:3,
    direction:'vertical'
},
{
    startingPoint:[7,7],
    length:2,
    direction:'vertical'
}]

const aiShips = [{
    startingPoint:[1,2],
    length:3,
    direction:'horizontal'
},
{
    startingPoint:[2,0],
    length:3,
    direction:'vertical'
},
{
    startingPoint:[5,7],
    length:2,
    direction:'vertical'
}]


startGame(playerShips, aiShips)
const turnManager = new Turn()

//EVENT LISTENER =>(x,y)
function temporaryGame(x,y){
    return turn(x,y)
}

// temporaryGame(1,2)
// showGame()
// temporaryGame(2,2)
// temporaryGame(3,2)
// temporaryGame(2,1)
// temporaryGame(2,0)
// console.log(temporaryGame(5,7))
// console.log(temporaryGame(5,8))
// showGame()