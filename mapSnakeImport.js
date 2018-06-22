const { table } = require('table');
const readlineSync = require('readline-sync');
const clear = require('terminal-clear');
const snake = require('./snake');
const terminalKit = require('terminal-kit').terminal;
const growing = require('./growing');
const collision = require('./collision');
const food = require('./generateFood');
const map = require('./map');
let basicMap = map.mapSnake;
let config = map.config;
const question = require('./question');
const logo = require('./intro');
let theSnake = snake.cloneSnake(snake.defaultSnake);

// Welcome screen
console.log(logo);

// The terminalKit changes the direction
const valid = (key) => {
  if ((key === 'w') || (key === 'a') || (key === 's') || (key === 'd')) {
    return true;
  } else {
    return false;
  }
};

const notInverseDirection = (key) => {
  return !((key === 'd' && theSnake.direction === 'a') ||
    (key === 'a' && theSnake.direction === 'd') ||
    (key === 'w' && theSnake.direction === 's') ||
    (key === 's' && theSnake.direction === 'w'));
};

terminalKit.grabInput();
terminalKit.on('key', function (key) {
  if (key === 'q') { process.exit(); }
  if (notInverseDirection(key) && valid(key)) {
    theSnake.direction = key;
  }
});

// Operates moving directions

const movement = (index) => {
  switch (index) {
    case 'w':
      snake.up(theSnake.position);
      break;
    case 'a':
      snake.left(theSnake.position);
      break;
    case 's':
      snake.down(theSnake.position);
      break;
    case 'd':
      snake.right(theSnake.position);
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
  for (let i = 0; i < theSnake.position.length; i++) {
    let current = theSnake.position[i];
    let front = theSnake.position[i - 1];
    let back = theSnake.position[i + 1];
    // This is the snake's head
    if (i === 0) {
      if ((theSnake.direction === 'w') || (theSnake.direction === 's')) {
        current.char = '║';
      }
      if ((theSnake.direction === 'a') || (theSnake.direction === 'd')) {
        current.char = '═';
      }
      // This is the snake's body between the head and the tail
    } else if (i > 0 && i < theSnake.position.length - 1) {
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
  for (let index in theSnake.position) {
    if (theSnake.position[0].y < 0 || theSnake.position[0].x < 0 || theSnake.position[0].y >= currentMap.length || theSnake.position[0].x >= currentMap[0].length) {
      console.log('Game Over!');
      if (question()) {
        theSnake = snake.cloneSnake(snake.defaultSnake);
        counter = 0;
        apple = 0;
        terminalKit.grabInput();
        main();
        // ide meg az kellene, hogy a kigyo ujra legyen generalva kozepre!!!!!!!
      } else {
        console.log('Thank you for playing!');
        process.exit();
      }
    }
    let coordinate = theSnake.position[index];
    currentMap[coordinate.y][coordinate.x] = coordinate.char;
  }

  collision(theSnake.position);
  clear();
  apple = food(counter, currentMap);
  if (apple === 1) {
    growing(theSnake.position);
    theSnake.counter++;
  }
  let modifiedMap = table(currentMap, config);
  console.log(modifiedMap);
  setTimeout(() => {
    if (theSnake.counter < 3) {
      theSnake.time = 400;
    } else if (theSnake.counter >= 3 && theSnake.counter < 6) {
      theSnake.time = 300;
    } else if (theSnake.counter >= 6 && theSnake.counter < 9) {
      theSnake.time = 200;
    } else if (theSnake.counter >= 9 && theSnake.counter < 12) {
      theSnake.time = 100;
    } else {
      theSnake.time = 50;
    }
    movement(theSnake.direction);
    main();
  }, theSnake.time);
};
main();

module.exports = main;
