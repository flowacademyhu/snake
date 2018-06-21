const terminalKit = require('terminal-kit').terminal;
const readlineSync = require('readline-sync');
const newGame = require('./mapSnakeImport');
let playagain;

const question = () => {
  terminalKit('Would you like to start a new game? y/n.');
  playagain = readlineSync.keyIn();
  if (playagain === 'y') {
    return true;
  } else {
    return false;
  } /* 'Thank you for playing!' */
};

module.exports = question;
