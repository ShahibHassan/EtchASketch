function createGrid(gridSize) {
  const gridContainer = document.querySelector('.container');
  console.log(gridContainer);
  gridContainer.innerHTML = '';

  const squareSize = 640 / gridSize;

  //create a for loop to insert divs into container
  for (var i = 0; i < gridSize * gridSize; i++) {
    console.log('div number: ' + (i + 1));
    var square = document.createElement('div');
    square.style.backgroundColor = 'white';
    square.style.height = squareSize + 'px';
    square.style.width = squareSize + 'px';
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

function getGridSize(){
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    var userInput = prompt ('Please enter the number of squares per grid side (Between 1 and 100)');
    while ((userInput < 1) || (userInput > 100)) {
      userInput = prompt ('Please enter a valid number between 1 and 100')
    }
    createGrid(Number(userInput));
  })
}


//default gridSize is 16x16
createGrid(16);
getGridSize();