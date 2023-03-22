function makeShipsDragging(){
    const draggables = document.querySelectorAll('.draggable')
    const board = document.querySelector('.player-board')
    const fleet = document.querySelector('fleet')
    const cells = board.querySelectorAll('.cell')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart',(e)=>{ 
            draggable.classList.add('dragging')
        })
        draggable.addEventListener('dragend',()=>{ 
            draggable.classList.remove('dragging')
        })
    })

    cells.forEach(cell=>{
        //hover effect
        cell.addEventListener('dragover',(e)=>{
            e.preventDefault()
            cell.classList.add('cell-drop-hover')
           
        })
        cell.addEventListener('dragleave',(e)=>{
            cell.classList.remove('cell-drop-hover')
        })
        
        cell.addEventListener('drop',()=>{
            const dragging = document.querySelector('.dragging')
            console.log(dragging)
            if(checkPositionIsValid(convertIdToXY(cell.dataset.id),Number(dragging.dataset.length),dragging.dataset.direction)){
                placeShip(convertIdToXY(cell.dataset.id),Number(dragging.dataset.length),dragging.dataset.direction)
            }
            
            cell.classList.remove('cell-drop-hover')
        })
        
    })

}

function placeShip(){
    return null
}
function convertIdToXY(str){
    return [Number(str[0]),Number(str[2])]
}

function checkVacancy(pos,length,direction){
    let legalPositioning = true
    const horizontalFromEvery = [[0,-1],[0,1],[0,0]]
    const horizontalLeftEdge = [[-1,-1],[-1,0],[-1,1]]
    const horizontalRightEdge = [[1,-1],[1,0],[1,1]]

    const verticalFromEvery = [[-1,0],[1,0],[0,0]]
    const verticalTopEdge = [[-1,-1],[0,-1],[1,-1]]
    const verticalBottomEdge = [[-1,1],[0,1],[1,1]]

    const startingCell = document.querySelector(`[data-id="${pos[0]}-${pos[1]}"]`)

    if(direction==='h'){
        for(let i=0; i<length; i++){
            let current = document.querySelector(`[data-id="${pos[0]+i}-${pos[1]}"]`)
            if(i === 0 && pos[0]!==0){
                horizontalLeftEdge.forEach(v=>{
                    try{
                        let t = document.querySelector(`[data-id="${pos[0]+i+v[0]}-${pos[1]+v[1]}"]`)
                        if(t.dataset.vacant==="0") legalPositioning = false
                    }catch(e){}
                })
            }
            if(i === length-1){
                horizontalRightEdge.forEach(v=>{
                    try{
                        let t = document.querySelector(`[data-id="${pos[0]+i+v[0]}-${pos[1]+v[1]}"]`)
                        if(t.dataset.vacant==="0") legalPositioning = false
                    }catch(e){}
                })
            }
            horizontalFromEvery.forEach(v=>{
                try{
                    let t = document.querySelector(`[data-id="${pos[0]+i+v[0]}-${pos[1]+v[1]}"]`)
                    if(t.dataset.vacant==="0") legalPositioning = false
                }catch(e){}
            })
        }
    }
    else if(direction==='v'){
        for(let i=0; i<length; i++){
            let current = document.querySelector(`[data-id="${pos[0]}-${pos[1]+1}"]`)
            if(i === 0 && pos[1]!==0){
                verticalTopEdge.forEach(v=>{
                    try{
                        let t = document.querySelector(`[data-id="${pos[0]+v[0]}-${pos[1]+i+v[1]}"]`)
                        if(t.dataset.vacant==="0") legalPositioning = false
                    }catch(e){}
                })
            }
            if(i === length-1){
                verticalBottomEdge.forEach(v=>{
                    try{
                        let t = document.querySelector(`[data-id="${pos[0]+v[0]}-${pos[1]+i+v[1]}"]`)
                        if(t.dataset.vacant==="0") legalPositioning = false
                    }catch(e){}
                })
            }
            verticalFromEvery.forEach(v=>{
                try{
                    let t = document.querySelector(`[data-id="${pos[0]+v[0]}-${pos[1]+i+v[1]}"]`)
                    if(t.dataset.vacant==="0") legalPositioning = false
                }catch(e){}
            })
        }
    }

    return legalPositioning
}
function checkPositionIsValid(pos,length,direction){
   console.log(checkVacancy(pos,length,direction))
    if(direction === 'h'){
        if((pos[0]+length-1)<=9 && (pos[0]+length-1)>=0) return true
        else return false
    }
    else if(direction === 'v'){
        if(pos[1]+length-1<=9 && pos[1]+length-1>=0) return true
        else return false
    }
    return null
}

function addEventsListeners(){
    const ships = document.querySelectorAll('.ship')

    const fleetHorizontal = document.querySelector('.fleet-horizontal')
    const fleetVertical = document.querySelector('.fleet-vertical')
    ships.forEach(ship=>{
        ship.addEventListener('click',()=>{
        
            if(ship.classList.contains('ship-vertical')){
                ship.classList.remove('ship-vertical')
                ship.classList.add('ship-horizontal')
                ship.dataset.direction = 'h'
                fleetHorizontal.appendChild(ship)
                ship.style.height = '35px'
                ship.style.width = `${ship.dataset.length * 35}px`
            }
            else if(ship.classList.contains('ship-horizontal')){
                ship.classList.remove('ship-horizontal')
                ship.classList.add('ship-vertical')
                ship.dataset.direction = 'v'
                fleetVertical.appendChild(ship)
                console.log(ship.dataset.length)
                ship.style.height = `${ship.dataset.length * 35}px`
                ship.style.width = '35px'

            }
    
        })
    })
   
}

export default function applyEffects(){
    makeShipsDragging()
    addEventsListeners()
}