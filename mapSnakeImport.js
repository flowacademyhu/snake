const { table } = require('table');
const readlineSync = require('readline-sync');
const clear = require('terminal-clear');
const snake = require('./snake');
const terminalKit = require('terminal-kit').terminal;
let position = snake.defaultPosition;
// const generateFood = require('./generateFood');
const food = require('./generateFood');
// map behívás
const basicMap = require('./map');
let direction = 'd';

terminalKit.grabInput();
terminalKit.on('key', function (key) {
  if (key === 'q') { process.exit(); }
  direction = key;
  console.log(key);
});

const movement = (index) => {
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
};

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
const main = () => {
  counter++;
  clear();
  mapReset();
  console.log(position[0].x, position[0].y);
  console.log(position[1].x, position[1].y);
  console.log(position[2].x, position[2].y);
  console.log(direction);
  for (let positionIndex in position) {
    let coordinate = position[positionIndex];
    currentMap[coordinate.y][coordinate.x] = 'X';
  }
  food(counter, currentMap);
  let modifiedMap = table(currentMap);
  console.log(modifiedMap);

  // let index = readlineSync.keyIn('', { limit: 'wasdq' });
  // lépések
  setTimeout(() => {
    movement(direction);
    main();
  }, 100);
};
main();
