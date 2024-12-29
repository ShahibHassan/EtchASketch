function createGrid() {
  const gridContainer = document.querySelector('.container');
  console.log(gridContainer);

  //create a for loop to insert divs into container
  for (var i = 0; i < 256; i++) {
    console.log('div number: ' + (i + 1));
    var square = document.createElement('div');
    square.style.backgroundColor = 'white';
    square.style.height = '40px';
    square.style.width = '40px';
    square.style.border = '1px solid black';
    square.style.display = 'flex';
    gridContainer.appendChild(square).className = 'square';
  }
  console.log(gridContainer);
  onHover();
}

function onHover() {
  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'red';
    });
  });
}

createGrid();
