const { table } = require('table');

let size = 15;
let map = [];

function generateMap() {

  for (let i = 0; i < size; i++) {
    map[i] = [];
    for (let j = 0; j < size; j++) {
      map[i][j] = '';
    }
  }
  console.log(map);
}

generateMap();

module.exports = generateMap;
