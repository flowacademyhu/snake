const { table } = require('table');
let output;

let size = 16;
let map = [];

const mapSnakeGenerate = () => {

  for (let i = 0; i < size; i++) {
    map[i] = [];
    for (let j = 0; j < size; j++) {
      map[i][j] = ' ';
    }
  }
  return map;
}

let mapSnake = mapSnakeGenerate();

let config = {
  border: {
    topBody: `━`,
    topJoin: `━`,
    topLeft: `┏`,
    topRight: `┓`,

    bottomBody: `━`,
    bottomJoin: `━`,
    bottomLeft: `┗`,
    bottomRight: `┛`,

    bodyLeft: `┃`,
    bodyRight: `┃`,
    bodyJoin: ` `,

    joinBody: ` `,
    joinLeft: `┃`,
    joinRight: `┃`,
    joinJoin: ` `
  }
};

output = table(mapSnake, config);
console.log(output);
module.exports = {
  mapSnake: mapSnake,
  config: config
};
