/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//import './styles/style.css'



// class Ship{
//     constructor(length, hits, sunk){
//         this.length = length
//         this.hits = 0
//         this.sunk = false
//     }
    
//     hit(){
//         this.hits++
//     }
//     isSunk(){
//         if(this.length===this.hits) return true
//         return false
//     }
// }
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



const playerShips=[{
    startingPoint:[0,0],
    length:4,
    direction:'horizontal'
}]
const aiShips = [{
    startingPoint:[1,2],
    length:3,
    direction:'horizontal'
}]



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


startGame(playerShips, aiShips)
const turnManager = new Turn()

function turn(x,y){
    if(turnManager.getTurn()==='player'){
        let outcome = player.makeMove(x,y)
        if(outcome === 1) return 1
        else if(outcome === 0) turnManager.changeTurn()
    }
   else if(turnManager.getTurn()==='ai'){
        let outcome = ai.makeMove(x,y)
        if(outcome === 1) return 1
        else if(outcome === 0) turnManager.changeTurn()
    }

}


function showGame(){
    console.log('------------------')
    PlayerGameboard.displayBoard()
    console.log()
    AiGameboard.displayBoard()
    console.log('------------------')
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixLQUFLO0FBQzNCLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4Qyx1QkFBdUIsYUFBYTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXG5cblxuXG4vLyBjbGFzcyBTaGlwe1xuLy8gICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgaGl0cywgc3Vuayl7XG4vLyAgICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4vLyAgICAgICAgIHRoaXMuaGl0cyA9IDBcbi8vICAgICAgICAgdGhpcy5zdW5rID0gZmFsc2Vcbi8vICAgICB9XG4gICAgXG4vLyAgICAgaGl0KCl7XG4vLyAgICAgICAgIHRoaXMuaGl0cysrXG4vLyAgICAgfVxuLy8gICAgIGlzU3Vuaygpe1xuLy8gICAgICAgICBpZih0aGlzLmxlbmd0aD09PXRoaXMuaGl0cykgcmV0dXJuIHRydWVcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlXG4vLyAgICAgfVxuLy8gfVxuZnVuY3Rpb24gYXJyYXlzTWF0Y2goYXJyMSwgYXJyMikge1xuICAgIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIxLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyMVtpXSAhPT0gYXJyMltpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbmNsYXNzIEdhbWVib2FyZHtcbiAgICBtaXNzZWRBdHRhY2tzID0gW11cbiAgICBkZXN0cm95ZWRDZWxscyA9IFtdIC8vY2VsbHMgd2hpY2ggd2FzIGF0dGFja2VkIGFuZCB0aGUgcGFydCBvZiBzaGlwIG9uIGl0IGhhcyBiZWVuIGRlc3Ryb3llZFxuICAgIHNoaXBzID0gW10gLy9hcnJheSBvZiBhcnJheXMgd2hpY2ggc2F5cyB3aGVyZSBpcyB0aGUgc2hpcFxuICAgIHJlY2VpdmVBdHRhY2soeCx5KXtcbiAgICAgICAgaWYodGhpcy5kZXN0cm95ZWRDZWxscy5zb21lKHNoaXAgPT4gc2hpcFswXSA9PT0geCAmJiBzaGlwWzFdID09PSB5KSB8fCB0aGlzLm1pc3NlZEF0dGFja3Muc29tZShzaGlwID0+IHNoaXBbMF0gPT09IHggJiYgc2hpcFsxXSA9PT0geSkpe1xuICAgICAgICAgICAgcmV0dXJuIDAgLy95b3UgYWxyZWFkeSBhdHRhY2tlZCB0aGlzIGNlbGwhISFcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuc2hpcHMuc29tZShzaGlwID0+IHNoaXBbMF0gPT09IHggJiYgc2hpcFsxXSA9PT0geSkpe1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWRDZWxscy5wdXNoKFt4LHldKVxuICAgICAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuc2hpcHMuZmlsdGVyKHN1YkFyciA9PiAhYXJyYXlzTWF0Y2goc3ViQXJyLCBbeCx5XSkpXG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLm1pc3NlZEF0dGFja3MucHVzaChbeCx5XSlcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9kaXJlY3Rpb24gPSBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgYWRkU2hpcCh4LHksbGVuZ3RoLGRpcmVjdGlvbil7IC8veCx5ID0gc3RhcnRpbmcgcG9pbnRzIG9mIHNoaXBzICh1cHBwZXIgbGVmdChjbG9zZXIgdG8gMCwwKSlcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKFt4K2kseV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKFt4LHkraV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsU2hpcHNTdW5rKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc3Ryb3llZENlbGxzLmV2ZXJ5KGNlbGwgPT4gdGhpcy5zaGlwcy5pbmNsdWRlcyhjZWxsKSlcbiAgICB9XG4gICAgZGlzcGxheUJvYXJkKCl7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8MTA7aSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7ajwxMDtqKyspe1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coailcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1pc3NlZEF0dGFja3Muc29tZShzdWIgPT4gc3ViLmV2ZXJ5KCh2YWwsaW5kZXgpPT52YWw9PT1baixpXVtpbmRleF0pKSkgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJyAgKyAgJyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmRlc3Ryb3llZENlbGxzLnNvbWUoc3ViID0+IHN1Yi5ldmVyeSgodmFsLGluZGV4KT0+dmFsPT09W2osaV1baW5kZXhdKSkpIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCcgIFggICcpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5zaGlwcy5zb21lKHN1YiA9PiBzdWIuZXZlcnkoKHZhbCxpbmRleCk9PnZhbD09PVtqLGldW2luZGV4XSkpKSBwcm9jZXNzLnN0ZG91dC53cml0ZSgnICBPICAnKTtcbiAgICAgICAgICAgICAgICBlbHNlIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCcgIC0gICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICBjb25zb2xlLmxvZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFBsYXllcntcbiAgICBjb25zdHJ1Y3RvcihhaSl7XG4gICAgICAgIHRoaXMuYWk9YWlcbiAgICB9XG4gICAgYWRkU2hpcHMoYXJyKXsgLy9hcnJheXMgb2Ygb2JqZWN0cyB7c3RhcnRpbmdQb2ludDpbeCx5XSwgbGVuZ3RoOk4sIGRpcmVjdGlvbjonaG9yaXpvbnRhbCcvJ3ZlcnRpY2FsJ31cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxhcnIubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZighdGhpcy5haSlQbGF5ZXJHYW1lYm9hcmQuYWRkU2hpcChhcnJbaV0uc3RhcnRpbmdQb2ludFswXSxhcnJbaV0uc3RhcnRpbmdQb2ludFsxXSxhcnJbaV0ubGVuZ3RoLGFycltpXS5kaXJlY3Rpb24pXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFpKSBBaUdhbWVib2FyZC5hZGRTaGlwKGFycltpXS5zdGFydGluZ1BvaW50WzBdLGFycltpXS5zdGFydGluZ1BvaW50WzFdLGFycltpXS5sZW5ndGgsYXJyW2ldLmRpcmVjdGlvbilcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZU1vdmUoeCx5KXtcbiAgICAgICAgaWYodGhpcy5haT09PWZhbHNlKXtcbiAgICAgICAgICAgIHJldHVybiBBaUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgseSlcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIFBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgseSlcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKGZhbHNlKVxuY29uc3QgYWkgPSBuZXcgUGxheWVyKHRydWUpXG5sZXQgUGxheWVyR2FtZWJvYXJkID0gbnVsbFxubGV0IEFpR2FtZWJvYXJkID0gbnVsbFxuXG5mdW5jdGlvbiBzdGFydEdhbWUocGxheWVyU2hpcHMsIGFpU2hpcHMpeyAgIC8vYXJyYXlzIG9mIG9iamVjdHMgZ2V0IGZyb20gc2NyZWVuXG4gICAgUGxheWVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpXG4gICAgQWlHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKClcbiAgICBwbGF5ZXIuYWRkU2hpcHMocGxheWVyU2hpcHMpXG4gICAgYWkuYWRkU2hpcHMoYWlTaGlwcylcbiAgICBcblxufVxuXG5cblxuY29uc3QgcGxheWVyU2hpcHM9W3tcbiAgICBzdGFydGluZ1BvaW50OlswLDBdLFxuICAgIGxlbmd0aDo0LFxuICAgIGRpcmVjdGlvbjonaG9yaXpvbnRhbCdcbn1dXG5jb25zdCBhaVNoaXBzID0gW3tcbiAgICBzdGFydGluZ1BvaW50OlsxLDJdLFxuICAgIGxlbmd0aDozLFxuICAgIGRpcmVjdGlvbjonaG9yaXpvbnRhbCdcbn1dXG5cblxuXG5jbGFzcyBUdXJue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuY3VyciA9ICdwbGF5ZXInXG4gICAgfVxuICAgIGdldFR1cm4oKXsgcmV0dXJuIHRoaXMuY3VyciB9XG4gICAgY2hhbmdlVHVybigpe1xuICAgICAgICBpZih0aGlzLmN1cnI9PT0ncGxheWVyJykgdGhpcy5jdXJyID0gJ2FpJ1xuICAgICAgICBlbHNlIGlmKHRoaXMuY3Vycj09PSdhaScpIHRoaXMuY3VyciA9ICdwbGF5ZXInXG4gICAgfVxufVxuXG5cbnN0YXJ0R2FtZShwbGF5ZXJTaGlwcywgYWlTaGlwcylcbmNvbnN0IHR1cm5NYW5hZ2VyID0gbmV3IFR1cm4oKVxuXG5mdW5jdGlvbiB0dXJuKHgseSl7XG4gICAgaWYodHVybk1hbmFnZXIuZ2V0VHVybigpPT09J3BsYXllcicpe1xuICAgICAgICBsZXQgb3V0Y29tZSA9IHBsYXllci5tYWtlTW92ZSh4LHkpXG4gICAgICAgIGlmKG91dGNvbWUgPT09IDEpIHJldHVybiAxXG4gICAgICAgIGVsc2UgaWYob3V0Y29tZSA9PT0gMCkgdHVybk1hbmFnZXIuY2hhbmdlVHVybigpXG4gICAgfVxuICAgZWxzZSBpZih0dXJuTWFuYWdlci5nZXRUdXJuKCk9PT0nYWknKXtcbiAgICAgICAgbGV0IG91dGNvbWUgPSBhaS5tYWtlTW92ZSh4LHkpXG4gICAgICAgIGlmKG91dGNvbWUgPT09IDEpIHJldHVybiAxXG4gICAgICAgIGVsc2UgaWYob3V0Y29tZSA9PT0gMCkgdHVybk1hbmFnZXIuY2hhbmdlVHVybigpXG4gICAgfVxuXG59XG5cblxuZnVuY3Rpb24gc2hvd0dhbWUoKXtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tJylcbiAgICBQbGF5ZXJHYW1lYm9hcmQuZGlzcGxheUJvYXJkKClcbiAgICBjb25zb2xlLmxvZygpXG4gICAgQWlHYW1lYm9hcmQuZGlzcGxheUJvYXJkKClcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tJylcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9