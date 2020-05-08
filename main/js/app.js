/*const sortList = document.querySelector('.sortable__list')

sortList.addEventListener('dragstart', e => {
    const target = e.target;

    e.dataTransfer.setData('html', target.outerHTML)
    target.parentElement.classList.add('hidden');
});

sortList.addEventListener('dragenter', e => {
    const target = e.target.parentElement;
    if(!target.matches('li')) return;

    const elem = document.createElement('li');
    const placeholders = document.querySelectorAll('.placeholder');
    Array.from(placeholders).forEach(elem => sortList.removeChild(elem));

    elem.className = "sortable__item placeholder";
    target.parentElement.insertBefore(elem,target);
});

sortList.addEventListener('dragover', e =>{
    e.preventDefault();
});

sortList.addEventListener('drop', e =>{
    const hiddenElem = document.querySelector('.hidden');
    const placeholder = document.querySelector('.placeholder');
    const elem = e.dataTransfer.getData('html');

    placeholder.innerHTML = elem;
    sortList.removeChild(hiddenElem);
    placeholder.classList.remove('placeholder');

});

sortList.addEventListener('dragend', e =>{
    const hiddenElem = document.querySelector('.hidden');
    const placeholder = document.querySelector('.placeholder');

    sortList.removeChild(placeholder);
    hiddenElem.classList.remove('hidden');
});
*/
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

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