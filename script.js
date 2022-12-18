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
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')

        // Add the element to the end
        if (afterElement == null) {
            container.appendChild(draggable)
        }
        else {
            container.insertBefore(draggable, afterElement)
        }
    })
})

function getDragAfterElement(container, y) {
    // Get all the container but not the dragend container
    // 'querySelectorAll' does not return array
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    // 'reduce' loop through the draggable elements and determine which single element is the closest to zero
    return draggableElements.reduce((closest, child) => {
        // Find the position of the element
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        // Check if the element is above the element
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        }
        else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY}).element
}