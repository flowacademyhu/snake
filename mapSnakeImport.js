const { table } = require('table');
const readlineSync = require('readline-sync');
const clear = require('terminal-clear');
const snake = require('./snake');
const terminalKit = require('terminal-kit').terminal;
const growing = require('./growing');
const collision = require('./collision');
let position = snake.defaultPosition;
const food = require('./generateFood');
const map = require('./map');
const logo = require('./intro');
let basicMap = map.mapSnake;
let config = map.config;
const question = require('./question');

// Welcome screen

readlineSync.keyInPause('Welcome in Snake! Please press any key to start the game!');

// Direction sets the snake's moving direction

let direction = 'd';

// The terminalKit changes the direction

const notInverseDirection = (key) => {
  return !((key === 'd' && direction === 'a') ||
    (key === 'a' && direction === 'd') ||
    (key === 'w' && direction === 's') ||
    (key === 's' && direction === 'w'));
};

terminalKit.grabInput();
terminalKit.on('key', function (key) {
  if (key === 'q') { process.exit(); }
  if (notInverseDirection(key)) {
    direction = key;
  }
});

// Operates moving directions

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

// Terkep újragenerálás (Hogy látszódjon rajta a kígyó.)

let currentMap = basicMap;
const mapReset = () => {
  for (let i = 0; i < currentMap.length; i++) {
    for (let j = 0; j < currentMap[i].length; j++) {
      currentMap[i][j] = ' ';
    }
  }
};

// Main function (Ide van minden behívva.)

let counter = 0;
let apple = 0;
const main = () => {
  console.log(direction);
  apple = 0;
  counter++;
  mapReset();
  /*
  for (let i = 0; i < position.length; i++) {
    if (i === 0) {
      switch (direction) {
        case 'w':
          position.char = '║';
          break;
        case 's':
          position.char = '║';
          break;
        case 'a':
          position.char = '═';
          break;
        case 'd':
          position.char = '═';
          break;
      }
    } else {
      let current = position[i];
      let front = position[i + 1];
      let back = position[i - 1];
      if (current.y === back.y && current.y === front.y) {
        position.char = '║';
      }
      if (current.x === back.x && current.x === front.x) {
        position.char = '═';
      }

    }
  }
  */
  for (let positionIndex in position) {
    if (position[0].y < 0 || position[0].x < 0 || position[0].y >= currentMap.length || position[0].x >= currentMap[0].length) {
      console.log('Game Over!');
      question();
      process.exit();
    }
    let coordinate = position[positionIndex];
    
    if (direction === 'w') {
      currentMap[position[0].y][position[0].x] = '▲';
    }
    if (direction === 's') {
      currentMap[position[0].y][position[0].x] = '▼';
    }
    if (direction === 'a') {
      currentMap[position[0].y][position[0].x] = '◄';
    }
    if (direction === 'd') {
      currentMap[position[0].y][position[0].x] = '►';
    }
    
    currentMap[coordinate.y][coordinate.x] = '⬤';
    // ⬤
  
    currentMap[coordinate.y][coordinate.x] = coordinate.char;

  }

  collision(position);
  clear();
  apple = food(counter, currentMap);
  if (apple === 1) {
    growing(position);
  }

  let modifiedMap = table(currentMap, config);
  console.log(modifiedMap);

  // The setTimeout function determines the speed
  setTimeout(() => {
    movement(direction);
    main();
  }, 300);
};
main();
