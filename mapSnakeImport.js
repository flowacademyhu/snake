const { table } = require('table');
const readlineSync = require('readline-sync');
const clear = require('terminal-clear');
const snake = require('./snake');
const position = snake.defaultPosition;
const generateFood = require('./generateFood');
// map behívás
const basicMap = require('./map');


// MOVE

let currentMap = basicMap;
//1. alma generalas
generateFood(currentMap);
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
      snake.up(position);
      break;
    case 'a':
    snake.left(position);
      break;
    case 's':
    snake.down(position);
      break;
    case 'd':
    snake.right(position);
      break;
  }
  if (index === 'q') {
    break;
  }
}

module.exports = modifiedMap;
