/*
const map = require('./map');
map();
*/
const { table } = require('table');
const readlineSync = require('readline-sync');
const clear = require('terminal-clear');
const snakeMap = require('./map');
snakeMap.output

let map = [];
let size = 15;

for (let i = 0; i < size; i++) {
  map[i] = [];
  for (let j = 0; j < size; j++) {
    map[i][j] = '';
  }
}

let i = 3;
let j = 3;

// ezzel a két sorral bemented hogy hol van a snake feje, és behelyezem a térképre
let currentStateY = i;
let currentStateX = j;
map[i][j] = 'x';

console.log(map);

// ez határozza meg a mozgast
while (true) {
  clear();
    console.log(map);
  let basicQuestions = ['Fel', 'Le', 'Jobbra', 'Balra'];
  let index = readlineSync.keyInSelect(basicQuestions, 'Mit szeretnel csinalni?');
  switch (index) {
    case 0:
      currentStateY--;
      map[currentStateY][currentStateX] = 'x';
      map[currentStateY + 1][currentStateX] = '';
      console.log(currentStateY, currentStateX);
      break;
    case 3:
      currentStateX--;
      map[currentStateY][currentStateX] = 'x';
      map[currentStateY][currentStateX + 1] = '';
      console.log(currentStateY, currentStateX);
      break;
    case 1:
      currentStateY++;
      map[currentStateY][currentStateX] = 'x';
      map[currentStateY - 1][currentStateX] = '';
      console.log(currentStateY, currentStateX);
      break;
    case 2:
      currentStateX++;
      map[currentStateY][currentStateX] = 'x';
      map[currentStateY][currentStateX - 1] = '';
      console.log(currentStateY, currentStateX);
      break;
  }

}

  /*
let move = () => {
  var keypress = require('keypress');


     // make `process.stdin` begin emitting "keypress" events
     keypress(process.stdin);
      
     // listen for the "keypress" event
     process.stdin.on('keypress', function (ch, key) {
       console.log('got "keypress"', key);
       if (key && key.ctrl && key.name == 'c') {
         process.stdin.pause();
       }
     });
 
   
 var keypress = require('./')
 keypress(process.stdin)
 
 if (process.stdin.setRawMode)
   process.stdin.setRawMode(true)
 else
   require('tty').setRawMode(true)
 
 process.stdin.on('keypress', function (c, key) {
   console.log(0, c, key)
   if (key && key.ctrl && key.name == 'c') {
     process.stdin.pause()
   }
 })
 process.stdin.on('mousepress', function (mouse) {
   console.log(mouse)
 })
 
 keypress.enableMouse(process.stdout)
 process.on('exit', function () {
   //disable mouse on exit, so that the state is back to normal
   //for the terminal.
   keypress.disableMouse(process.stdout)
 })
 
 process.stdin.resume()
      
     process.stdin.setRawMode(true);
     process.stdin.resume();
 

  me.handleArrowKeys = function (keyNum) {
    if (isDead || isPaused) { return; }

    var snakeLength = me.snakeLength;
    var lastMove = moveQueue[0] || currentDirection;

    //console.log("lastmove="+lastMove);
    //console.log("dir="+keyNum);

    switch (keyNum) {
      case 37:
      case 65:
        if (lastMove !== 1 || snakeLength === 1) {
          moveQueue.unshift(3); //SnakeDirection = 3;
        }
        break;
      case 38:
      case 87:
        if (lastMove !== 2 || snakeLength === 1) {
          moveQueue.unshift(0);//SnakeDirection = 0;
        }
        break;
      case 39:
      case 68:
        if (lastMove !== 3 || snakeLength === 1) {
          moveQueue.unshift(1); //SnakeDirection = 1;
        }
        break;
      case 40:
      case 83:
        if (lastMove !== 0 || snakeLength === 1) {
          moveQueue.unshift(2);//SnakeDirection = 2;
        }
        break;
    }
  };
     */
