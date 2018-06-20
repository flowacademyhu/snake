const { table } = require('table');
const readlineSync = require('readline-sync');
const clear = require('terminal-clear');
const snake = require('./snake');
const terminalKit = require('terminal-kit').terminal;
const growing = require('./growing');
const collision = require('./collision');
let position = snake.defaultPosition;
const food = require('./generateFood');
// const map = require('./map');
let basicMap = map.mapSnake;
let config = map.config;

// Welcome screen

readlineSync.keyInPause('Welcome in Snake! Please press any key to start the game!');

// A kígyó alapértelmezett irányát adjuk meg.

let direction = 'd';

// Külső libbel (terminalKit) változtatjuk meg a directiont.

terminalKit.grabInput();
terminalKit.on('key', function (key) {
  if (key === 'q') { process.exit(); }
  if (!((key === 'd' && direction === 'a') || (key === 'a' && direction === 'd') || (key === 'w' && direction === 's') || (key === 's' && direction === 'w'))) {
    direction = key;
  }
});

// Mozgásirányok megadása

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
let apple = 0;
const main = () => {
  apple = 0;
  counter++;
  mapReset();
  for (let positionIndex in position) {
    if (position[0].y < 0 || position[0].x < 0 || position[0].y >= currentMap.length || position[0].x >= currentMap[0].length) {
      console.log('Game Over!');
      process.exit();
    }
    let coordinate = position[positionIndex];
    if ((direction === 'w') || (direction === 's')) {
      currentMap[position[0].y][position[0].x] = '║';
    }
    if ((direction === 'a') || (direction === 'd')) {
      currentMap[position[0].y][position[0].x] = '═';
    }
    currentMap[coordinate.y][coordinate.x] = '⬤';
  }

  collision(position);
  clear();
  apple = food(counter, currentMap);
  if (apple === 1) {
    growing(position);
  }
  let modifiedMap = table(currentMap, config);
  console.log(modifiedMap);

  // setTimeout fuggveny adja, meg a kigyo segességét (beallitjuk, hogy milyen idokozonkent hívja meg a movement functiont.)

  setTimeout(() => {
    movement(direction);
    main();
  }, 300);
};
main();
