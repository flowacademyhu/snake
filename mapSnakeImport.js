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
let basicMap = map.mapSnake;
let config = map.config;
const question = require('./question');
let counter2 = 0;
let time = 0;
const logo = require('./intro');

// Welcome screen
console.log(logo)

// Direction sets the snake's moving direction

let direction = 'd';

// The terminalKit changes the direction
const valid = (key) => {
  if ((key === 'w') || (key === 'a') || (key === 's') || (key === 'd')) {
    return true;
  } else {
    return false;
  }
};

const notInverseDirection = (key) => {
  return !((key === 'd' && direction === 'a') ||
    (key === 'a' && direction === 'd') ||
    (key === 'w' && direction === 's') ||
    (key === 's' && direction === 'w'));
};

terminalKit.grabInput();
terminalKit.on('key', function (key) {
  if (key === 'q') { process.exit(); }
  if (notInverseDirection(key) && valid(key)) {
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
  for (let i = 0; i < position.length; i++) {
    let current = position[i];
    let front = position[i - 1];
    let back = position[i + 1];
    // This is the snake's head
    if (i === 0) {
      if ((direction === 'w') || (direction === 's')) {
        current.char = '║';
      }
      if ((direction === 'a') || (direction === 'd')) {
        current.char = '═';
      }
      // This is the snake's body between the head and the tail
    } else if (i > 0 && i < position.length - 1) {
      // The body can be built up from 6 characters, these are the cases
      // In every case, the program ispects the coordinates of the before and after body part
      // case 1
      if (current.y === back.y && current.y === front.y) {
        current.char = '═';
      }
      // case 2
      if (current.x === back.x && current.x === front.x) {
        current.char = '║';
      }
      // case 3
      if (((current.x === front.x && current.y > front.y) && (current.x > back.x && current.y === back.y)) ||
      ((current.x > front.x && current.y === front.y) && (current.x === back.x && current.y > back.y))) {
        current.char = '╝';
      }
      // case 4
      if (((current.x === front.x && current.y < front.y) && (current.x > back.x && current.y === back.y)) ||
      ((current.x > front.x && current.y === front.y) && (current.x === back.x && current.y < back.y))) {
        current.char = '╗';
      }
      // case 5
      if (((current.x === front.x && current.y > front.y) && (current.x < back.x && current.y === back.y)) ||
      ((current.x < front.x && current.y === front.y) && (current.x === back.x && current.y > back.y))) {
        current.char = '╚';
      }
      // case 6
      if (((current.x === front.x && current.y < front.y) && (current.x < back.x && current.y === back.y)) ||
      ((current.x < front.x && current.y === front.y) && (current.x === back.x && current.y < back.y))) {
        current.char = '╔';
      }
      // This is the snake's tail
    } else {
      if ((current.x === front.x) && current.y !== front.y) {
        current.char = '║';
      }
      if ((current.x !== front.x) && current.y === front.y) {
        current.char = '═';
      }
    }
  }
  for (let positionIndex in position) {
    if (position[0].y < 0 || position[0].x < 0 || position[0].y >= currentMap.length || position[0].x >= currentMap[0].length) {
      console.log('Game Over!');
      if (question()) {
        main();
        // ide meg az kellene, hogy a kigyo ujra legyen generalva kozepre!!!!!!!
      } else {
        console.log('Thank you for playing!');
        process.exit();
      }
    }
    let coordinate = position[positionIndex];
    currentMap[coordinate.y][coordinate.x] = coordinate.char;
  }

  collision(position);
  clear();
  apple = food(counter, currentMap);
  if (apple === 1) {
    growing(position);
    counter2++;
  }
  let modifiedMap = table(currentMap, config);
  console.log(modifiedMap);
  setTimeout(() => {
    if (counter2 < 3) {
      time = 400;
    } else if (counter2 >= 3 && counter2 < 6) {
      time = 300;
    } else if (counter2 >= 6 && counter2 < 9) {
      time = 200;
    } else if (counter2 >= 9 && counter2 < 12) {
      time = 150;
    } else {
      time = 100;
    }
    movement(direction);
    main();
  }, time);
};
main();

module.exports = main;
