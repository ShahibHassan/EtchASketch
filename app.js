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
      if (square.style.backgroundColor === 'white'){
        square.style.backgroundColor = generateRandomColour();
      }
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

//Randomise color
const hexChar = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];

function getChar(index) {
  return hexChar[index];
}

function generateRandomColour() {
  let hexColourRep = "#";
  for (let i = 0; i<6; i++) {
    hexColourRep += getChar(Math.floor(Math.random() * hexChar.length));
  }
  return hexColourRep;
}


//default gridSize is 16x16
createGrid(16);
getGridSize();