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

        cell.addEventListener('',(e)=>{
            
        })
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
            console.log(checkPositionIsValid(convertIdToXY(cell.dataset.id),Number(dragging.dataset.length),dragging.dataset.direction))
            
            cell.classList.remove('cell-drop-hover')
        })
        
    })

}

function convertIdToXY(str){
    return [Number(str[0]),Number(str[2])]
}
function checkPositionIsValid(pos,length,direction){
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