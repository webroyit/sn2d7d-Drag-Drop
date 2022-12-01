const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    // When the element is drag
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    // When the dragging stop
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})