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

export default function applyEffects(){
    makeShipsDragging()
}