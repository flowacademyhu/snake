const { table } = require('table');
const readlineSync = require('readline-sync');
const clear = require('terminal-clear');

// map behívás
const basicMap = require('./map');
let currentMap = basicMap;

// MOVE

let i = 3;
let j = 3;

// ezzel a két sorral bemented hogy hol van a snake feje, és behelyezem a térképre
let currentStateY = i;
let currentStateX = j;

currentMap[currentStateY][currentStateX] = 'x';

// ez határozza meg a mozgast
while (true) { /* végtelenített while ciklus */
  clear();
  console.log('x= ' + currentStateX, 'y= ' + currentStateY);
  let modifiedMap = table(currentMap);
  console.log(modifiedMap);
  let index = readlineSync.keyIn('', { limit: 'wasdq' });

  // lépések
  switch (index) {
    case 'w':
      currentStateY--;
      currentMap[currentStateY][currentStateX] = 'x';
      currentMap[currentStateY + 1][currentStateX] = '';
      break;
    case 'a':
      currentStateX--;
      currentMap[currentStateY][currentStateX] = 'x';
      currentMap[currentStateY][currentStateX + 1] = '';
      break;
    case 's':
      currentStateY++;
      currentMap[currentStateY][currentStateX] = 'x';
      currentMap[currentStateY - 1][currentStateX] = '';
      break;
    case 'd':
      currentStateX++;
      currentMap[currentStateY][currentStateX] = 'x';
      currentMap[currentStateY][currentStateX - 1] = '';
      break;
  }
  if (index === 'q') {
    break;
  }
}

module.exports = modifiedMap;