const { table } = require('table');
const clear = require('terminal-clear');
const snake = require('./snake');
const terminalKit = require('terminal-kit').terminal;
const growing = require('./growing');
let position = snake.defaultPosition;
const food = require('./generateFood');
const basicMap = require('./map');

// A kígyó alapértelmezett irányát adjuk meg.

let direction = 'd';

// Külső libbel (terminalKit) változtatjuk meg a directiont.

terminalKit.grabInput();
terminalKit.on('key', function (key) {
  if (key === 'q') { process.exit(); }
  if (position[0].y < 0 || position[0].x < 0 || position[0].x >= currentMap[0].length || position[0].y >= currentMap.length) {
    console.log('Game Over!');
    process.exit();
  }
  direction = key;
  console.log(key);
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
  apple = 0;
  counter++;
  clear();
  mapReset();

  // Tesztkiírások

  console.log('');
  console.log(position[0].x, position[0].y);
  console.log(position[1].x, position[1].y);
  console.log(position[2].x, position[2].y);
  console.log(direction);

  // Kígyót teszi le

  for (let positionIndex in position) {
    let coordinate = position[positionIndex];
    currentMap[coordinate.y][coordinate.x] = 'X';
  }

  // Kajanegerátor + Score

  food(counter, currentMap);
  let modifiedMap = table(currentMap);
  console.log(modifiedMap);

  // setTimeout fuggveny adja, meg a kigyo segességét (beallitjuk, hogy milyen idokozonkent hívja meg a movement functiont.)

  setTimeout(() => {
    movement(direction);
    main();
  }, 500);
};
main();
