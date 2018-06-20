const { table } = require('table');
const { getBorderCharacters } = require('table');
let output;

let mapSnake = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [' ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [' ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [' ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [' ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [' ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [' ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [' ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [' ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [' ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [' ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
];

let config = {
  //border: getBorderCharacters(`void`)
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

//module.exports = output;
module.exports = {
  mapSnake: mapSnake,
  config: config
};
