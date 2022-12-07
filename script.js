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

containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        // Change the default disabled cursor to enable cursor
        e.preventDefault()

        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
})