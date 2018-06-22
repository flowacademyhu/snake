const defaultSnake = {
  position: [
    { x: 5, y: 5, char: '═' },
    { x: 4, y: 5, char: '═' },
    { x: 3, y: 5, char: '═' }
  ],
  direction: 'd',
  counter: 0,
  time: 0
};

const clonePosition = (position) => {
  let newPosition = [];
  for (let i = 0; i < position.length; i++) {
    newPosition[i] = {};
    newPosition[i].x = position[i].x;
    newPosition[i].y = position[i].y;
    newPosition[i].char = position[i].char;
  }
  return newPosition;
};

const cloneSnake = (snake) => {
  let newSnake = {
    position: clonePosition(snake.position),
    direction: snake.direction,
    counter: snake.counter,
    time: snake.time
  }
  return newSnake;
}

const move = (position, dimension, increment) => {
  let clonedPosition = clonePosition(position);
  for (let i = 0; i < position.length; i++) {
    if (i === 0) {
      position[0][dimension] += increment;
    } else {
      position[i].x = clonedPosition[i - 1].x;
      position[i].y = clonedPosition[i - 1].y;
    }
  }
};

const up = (position) => {
  move(position, 'y', -1);
}

const down = (position) => {
  move(position, 'y', 1);
}

const left = (position) => {
  move(position, 'x', -1);
}

const right = (position) => {
  move(position, 'x', 1);
}

module.exports = {
  defaultSnake: defaultSnake,
  up: up,
  down: down,
  left: left,
  right: right,
  cloneSnake: cloneSnake
};
