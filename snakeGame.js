const { table } = require('table');
const readlineSync = require('readline-sync');
const clear = require('terminal-clear');

// map behívás
const basicMap = require('./map');
let currentMap = basicMap;
// Move
const modifiedMap = require('./mapSnakeImport.js');

console.log(modifiedMap);

