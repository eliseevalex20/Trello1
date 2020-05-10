const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
const draggables1 = document.querySelectorAll('.draggable1')
const containers1 = document.querySelectorAll('.container1')

draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart', () =>{
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () =>{
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e =>{
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        if(afterElement == null){
            container.appendChild(draggable)
        } 
        else{
            container.insertBefore(draggable, afterElement)
        }
    })
})

function getDragAfterElement( container, y){
   const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) =>{
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if(offset < 0 && offset > closest.offset){
        return {offset: offset, element: child}
    }
    else{
        return closest
    }
   },{offset: Number.NEGATIVE_INFINITY}).element
}

//***********
draggables1.forEach(draggable1 =>{
    draggable1.addEventListener('dragstart', () =>{
        draggable1.classList.add('dragging1')
    })

    draggable1.addEventListener('dragend', () =>{
        draggable1.classList.remove('dragging1')
    })
})

containers1.forEach(container1 => {
    container1.addEventListener('dragover', e =>{
        e.preventDefault()
        const afterElement1 = getDragAfterElement1(container1, e.clientY)
        const draggable1 = document.querySelector('.dragging1')
        if(afterElement1 == null){
            container1.appendChild(draggable1)
        } 
        else{
            container1.insertBefore(draggable1, afterElement1)
        }
    })
})

function getDragAfterElement1( container1, y1){
   const draggableElements1 = [...container1.querySelectorAll('.draggable1:not(.dragging1)')]

    return draggableElements1.reduce((closest1, child1) =>{
    const box = child1.getBoundingClientRect()
    const offset1 = y1 - box.top - box.height / 2
    if(offset1 < 0 && offset1 > closest1.offset1){
        return {offset: offset1, element: child1}
    }
    else{
        return closest1
    }
   },{offset1: Number.NEGATIVE_INFINITY}).element
}