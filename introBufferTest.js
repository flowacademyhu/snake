
const terminalKit = require('terminal-kit').terminal;

var moved = 0;

function moveRedraw() {
  //buffer.drawChars() ;
  buffer.draw();
  buffer.x++;

  if (moved++ < 20) { setTimeout(moveRedraw, 150); }
  else {
    terminalKit.hideCursor(false);
    terminalKit.fullscreen(false);
  }
}


buffer.put({ x: 3, y: 2, attr: { color: 'red', bgColor: 'brightBlack', underline: true } }, 'toto');
buffer.put({ x: 4, y: 5, attr: { color: 'brightYellow', bold: true } }, '𝌆');	// <-- takes more than one UCS-2 character



//buffer3.draw() ;
//buffer.dump() ; return ;

terminalKit.fullscreen();
terminalKit.hideCursor();
moveRedraw();




