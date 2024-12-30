function createGrid() {
  const gridContainer = document.querySelector('.container');
  console.log(gridContainer);

  const gridDimensions = getGridSize()

  //create a for loop to insert divs into container
  for (var i = 0; i < gridDimensions; i++) {
    console.log('div number: ' + (i + 1));
    var square = document.createElement('div');
    square.style.backgroundColor = 'white';
    square.style.height = '40px';
    square.style.width = '40px';
    square.style.border = '1px solid black';
    square.style.boxSizing = 'border-box'; // fixed issue with rows and columns != by removing the border from total size
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

function getGridSize() {
  const gridSize = document.querySelector('.btn');
  gridSize.addEventListener('onclick', () => {
    console.log(gridSize);
    var dimensions = promt('Please enter Dimension p to 32 (e.g. for 10 x 10, enter 10)')
    if ((dimensions > 36) || (dimensions < 1) ) {
      dimensions = promt('please enter a valid number (between 1-32)');
    }
    else {
    return dimensions
    }
    })
}

createGrid();
