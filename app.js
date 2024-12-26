function createGrid(){
    const gridContainer = document.querySelector('.container')

    for (var i = (16*16); i>=1; i--){
        var square = document.createElement('div')
        gridContainer.appendChild(square).className = 'grid';
        console.log(gridContainer);
    }
}

createGrid();

const squares = document.querySelectorAll('.grid');
squares.forEach((div) => {
div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'red';
    console.log(div);
})
});
