const { table } = require('table');
const readlineSync = require('readline-sync');
const clear = require('terminal-clear');
const snake = require('./snake');
let position = snake.defaultPosition;
//const generateFood = require('./generateFood');
const food = require('./generateFood');
// map behívás
const basicMap = require('./map');


// MOVE

let currentMap = basicMap;
const mapReset = () => {
  for (let i = 0; i < currentMap.length; i++) {
    for (let j = 0; j < currentMap[i].length; j++) {
      currentMap[i][j] = ' ';
    }
  }
};
let counter = 0;
while (true) { /* végtelenített while ciklus */
  counter++;
  clear();
  mapReset();
  console.log(position[0].x, position[0].y);
  console.log(position[1].x, position[1].y);
  console.log(position[2].x, position[2].y);
  for (let positionIndex in position) {
    let coordinate = position[positionIndex];
    currentMap[coordinate.y][coordinate.x] = 'X';
  }
  food(counter, currentMap);
  let modifiedMap = table(currentMap);
  console.log(modifiedMap);
  let index = readlineSync.keyIn('', { limit: 'wasdq' });

  module.exports = modifiedMap;
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
  if (index === 'q' || position[0].y < 0 || position[0].x < 0 || position[0].y >= currentMap.length || position[0].x >= currentMap[0].length) {
    console.log('Game Over!')
    break;
  }
}
