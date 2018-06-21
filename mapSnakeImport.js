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

// Welcome screen

readlineSync.keyInPause('Welcome to Snake! Please press any key to start the game!');

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
  for (let i = 0; i < position.length; i++) {
    let current = position[i];
    let front = position[i - 1];
    let back = position[i + 1];
    if (i === 0) {
      if ((direction === 'w') || (direction === 's')) {
        current.char = '║';
      }
      if ((direction === 'a') || (direction === 'd')) {
        current.char = '═';
      }
    } else if (i > 0 && i < position.length - 1) {
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
    } else {
      if ((current.x === front.x) && current.y !== front.y) {
        current.char = '║';
      }
      if ((current.x !== front.x) && current.y === front.y) {
        current.char = '═';
      }
    }
  }
  
/*  for (let i = position.length; i > 0 ; i--) {
    let tail = position[0];
    let body = position[i - 1];
    if (body.char === '║' || body.char === '═') {
      tail.char = body.char;
      break;
    }
  }
*/
  for (let positionIndex in position) {
    if (position[0].y < 0 || position[0].x < 0 || position[0].y >= currentMap.length || position[0].x >= currentMap[0].length) {
      console.log('Game Over!');
      if (question()) {
        main();
        //ide meg az kellene, hogy a kigyo ujra legyen generalva kozepre!!!!!!!
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

  // The setTimeout function determines the speed
  /*
  if (food.counter < 3) {
    setTimeout(() => {
      movement(direction);
      main();
    }, 500);
  } else if (food.counter >= 3) {
    setTimeout(() => {
      movement(direction);
      main();
    }, 100);
  }
 
  setTimeout(() => {
    movement(direction);
    main();
  }, 300);
*/

  setTimeout(() => {
    if (counter2 < 3) {
      time = 400;
    } else if (counter2 >= 3 && counter2 < 6) {
      time = 300;
    } else if (counter2 >= 6 && counter2 < 9) {
      time = 200;
    } else if (counter2 >= 9 && counter2 < 12) {
      time = 100;
    } else {
      time = 50;
    }
    movement(direction);
    main();
  }, time);
};
main();

module.exports = main;
