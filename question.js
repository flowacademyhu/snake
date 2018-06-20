
const terminalKit = require('terminal-kit').terminal;


function question () {
  terminalKit('Would you like to start a new game? Press UP, and Enter.');

  terminalKit.yesOrNo({ yes: ['y', 'ENTER'], no: ['n'] }, function (result) {
    if (result) {
      terminalKit.green('Yes, new game begins.');
      question();
    } else {
      terminalKit.red('Thank You for playing. Bye.');
      process.exit();
    }
  });
}

question();
module.exports = question;
