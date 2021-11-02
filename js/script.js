const grid = document.getElementById('grid');
const playButton = document.getElementById('play-button');

const difficulty = document.getElementById('difficulty');
const chosenDifficulty = difficulty.options[difficulty.selectedIndex].value;
const mainText = document.querySelector('main .main-text');

playButton.addEventListener('click', function() {

  mainText.classList.add('d-none');
  grid.classList.add('active');

  if (chosenDifficulty===1) {
    for (let i=0; i<100; i++) {
      generateSquare(grid);
    }
  } else if (chosenDifficulty===2) {
    for (let i=0; i<81; i++) {
      generateSquare(grid);
    }
  } else {
    for (let i=0; i<49; i++) {
      generateSquare(grid);
    }
  }

});


function generateSquare(target) {
  const sq = document.createElement('div');
  sq.className = 'square';

  // console.log(difficulty);
  // console.log(chosenDifficulty);

  if (chosenDifficulty === 1) {
    sq.classList.add('easy');
  } else if ( chosenDifficulty === 2) {
    sq.classList.add('normal');
  } else sq.classList.add('hard');

  target.append(sq);

  
}