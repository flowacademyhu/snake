let defaultPosition = [
  { x: 5, y: 5, char: '═' },
  { x: 4, y: 5, char: '═' },
  { x: 3, y: 5, char: '═' }
]

const clone = (position) => {
  let newPosition = [];
  for (let i = 0; i < position.length; i++) {
    newPosition[i] = {};
    newPosition[i].x = position[i].x;
    newPosition[i].y = position[i].y;
    newPosition[i].char = position.char;
  }
  return newPosition;
}

const move = (position, dimension, increment) => {
  let clonedPosition = clone(position);
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
  defaultPosition: defaultPosition,
  up: up,
  down: down,
  left: left,
  right: right
};
