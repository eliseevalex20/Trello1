const sortList = document.querySelector('.sortable__list')

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