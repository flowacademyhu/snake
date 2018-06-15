const { table } = require('table');
const readlineSync = require('readline-sync');
const clear = require('terminal-clear');
const snake = require('./snake');
const defaultPosition = snake.defaultPosition;

// map behívás
const basicMap = require('./map');


// MOVE

let currentMap = basicMap;

// ez határozza meg a mozgast
while (true) { /* végtelenített while ciklus */
  clear();
  for (let positionIndex in position) {
    let coordinate = position[positionIndex];
    currentMap[coordinate.y][coordinate.x] = 'X';
  }
  let modifiedMap = table(currentMap);
  console.log(modifiedMap);
    let index = readlineSync.keyIn('', { limit: 'wasdq' });



  
  // lépések
  switch (index) {
    case 'w':
      snake.up(position)
      currentStateY--;
      currentMap[currentStateY][currentStateX] = 'x';
      currentMap[currentStateY + 1][currentStateX] = '';
      break;
    case 'a':
      currentStateX--;
      currentMap[currentStateY][currentStateX] = 'x';
      currentMap[currentStateY][currentStateX + 1] = '';
      break;
    case 's':
      currentStateY++;
      currentMap[currentStateY][currentStateX] = 'x';
      currentMap[currentStateY - 1][currentStateX] = '';
      break;
    case 'd':
      currentStateX++;
      currentMap[currentStateY][currentStateX] = 'x';
      currentMap[currentStateY][currentStateX - 1] = '';
      break;
  }
  if (index === 'q') {
    break;
  }
}

module.exports = modifiedMap;
