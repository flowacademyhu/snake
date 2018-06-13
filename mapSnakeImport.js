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

  let basicQuestions = ['Fel', 'Le', 'Jobbra', 'Balra'];
  let index = readlineSync.keyInSelect(basicQuestions, 'Mit szeretnel csinalni?');

  // lépések
  switch (index) {
    case 0:
      currentStateY--;
      currentMap[currentStateY][currentStateX] = 'x';
      currentMap[currentStateY + 1][currentStateX] = '';
      break;
    case 3:
      currentStateX--;
      currentMap[currentStateY][currentStateX] = 'x';
      currentMap[currentStateY][currentStateX + 1] = '';
      break;
    case 1:
      currentStateY++;
      currentMap[currentStateY][currentStateX] = 'x';
      currentMap[currentStateY - 1][currentStateX] = '';
      break;
    case 2:
      currentStateX++;
      currentMap[currentStateY][currentStateX] = 'x';
      currentMap[currentStateY][currentStateX - 1] = '';
      break;
  }
}

module.exports = modifiedmap;