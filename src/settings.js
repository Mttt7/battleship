function makeShipsDragging(){
    const draggables = document.querySelectorAll('.draggable')
    const board = document.querySelector('.player-board')
    const fleet = document.querySelector('fleet')
    const cells = board.querySelectorAll('.cell')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart',()=>{
            draggable.classList.add('dragging')
        })
        draggable.addEventListener('dragend',()=>{
            draggable.classList.remove('dragging')
        })
    
    })
    cells.forEach(cell=>{
        cell.addEventListener('dragover',()=>{
            console.log(cell)
        })
    })

}

function addEventsListeners(){
    const ships = document.querySelectorAll('.ship')

    const fleetHorizontal = document.querySelector('.fleet-horizontal')
    const fleetVertical = document.querySelector('.fleet-vertical')
    ships.forEach(ship=>{
        ship.addEventListener('click',()=>{
        
            if(ship.classList.contains('ship-vertical')){
                console.log('xdd')
                ship.classList.remove('ship-vertical')
                ship.classList.add('ship-horizontal')
                fleetHorizontal.appendChild(ship)
                ship.style.height = '35px'
                ship.style.width = `${ship.dataset.length * 35}px`
            }
            else if(ship.classList.contains('ship-horizontal')){
                ship.classList.remove('ship-horizontal')
                ship.classList.add('ship-vertical')
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