const ctx = require('axel');
const readlineSync = require('readline-sync');

const logo = () => {
  ctx.clear();

  // Red box
  // bal margotol valo tavolsag
  // fentrol mennyire legyen lent
  // vizszintesen mennyit menjen (duplazni kell), lefele mennyit menjen

  // background

  // keret
  ctx.bg(10, 0, 0);
  ctx.box(0, 1, 90, 34); // teteje

  // bg color
  ctx.bg(224, 255, 255);
  ctx.box(3, 2, 86, 32);

  // fekete
  ctx.bg(10, 0, 0);
  ctx.box(41, 12, 10, 1);
  ctx.box(39, 13, 14, 1);
  ctx.box(39, 14, 16, 1);
  ctx.box(37, 15, 18, 1);
  ctx.box(37, 16, 20, 1);
  ctx.box(37, 17, 20, 1);
  ctx.box(39, 18, 16, 1);
  ctx.box(41, 19, 14, 1);
  ctx.box(37, 20, 20, 1);
  ctx.box(35, 21, 24, 1);
  ctx.box(33, 22, 28, 1);
  ctx.box(33, 23, 30, 1);
  ctx.box(33, 24, 30, 1);
  ctx.box(35, 25, 28, 1);
  ctx.box(37, 26, 18, 1);
  ctx.box(59, 26, 2, 1);
  // green
  ctx.bg(128, 255, 0);
  ctx.box(41, 13, 10, 1);
  ctx.box(41, 14, 12, 1);
  ctx.box(39, 15, 14, 1);
  ctx.box(39, 16, 16, 1);
  ctx.box(39, 17, 16, 1);
  ctx.box(41, 18, 12, 1);
  ctx.box(41, 20, 4, 1);
  ctx.box(47, 20, 6, 1);// 2
  ctx.box(37, 21, 6, 1);
  ctx.box(45, 21, 8, 1);// 2
  ctx.box(55, 21, 2, 1);// 3
  ctx.box(35, 22, 4, 1);
  ctx.box(41, 22, 10, 1);// 2
  ctx.box(53, 22, 6, 1);// 3
  ctx.box(35, 23, 6, 1);
  ctx.box(51, 23, 6, 1);// 3
  ctx.box(59, 23, 2, 1);// 4
  ctx.box(35, 24, 22, 1);
  ctx.box(59, 24, 2, 1);// 4
  ctx.box(37, 25, 18, 1);
  ctx.box(59, 25, 2, 1);// 4
  // szem
  ctx.bg(10, 0, 0);
  ctx.box(41, 15, 2, 1);
  ctx.box(49, 15, 2, 1); // 2
  ctx.box(41, 16, 2, 1);
  ctx.box(49, 16, 2, 1); // 2
  // pofi
  ctx.bg(250, 128, 114);
  ctx.box(39, 17, 2, 1);
  ctx.box(51, 17, 2, 1); // 2
  // arnyek
  ctx.bg(50, 205, 50);
  ctx.box(53, 16, 2, 2);
  ctx.box(41, 18, 12, 1);
  ctx.box(51, 20, 2, 2);
  ctx.box(41, 22, 10, 1);
  ctx.box(35, 23, 2, 2);
  ctx.box(37, 25, 18, 1);
  ctx.box(59, 23, 2, 1);// 4
  ctx.box(59, 24, 2, 1);// 4
  ctx.box(59, 25, 2, 1); // 4
  ctx.box(55, 21, 2, 4);// 3
  ctx.box(57, 22, 2, 1);// 3

  // snake logo

  ctx.bg(224, 255, 255);
  ctx.fg(10, 0, 0);
  ctx.text(20, 3, '  /$$$$$$                      /$$                 \n');
  ctx.text(20, 4, ' /$$__  $$                    | $$                 \n');
  ctx.text(20, 5, '| $$  \\__/ /$$$$$$$   /$$$$$$ | $$   /$$  /$$$$$$  \n');
  ctx.text(20, 6, '|  $$$$$$ | $$__  $$ |____  $$| $$  /$$/ /$$__  $$ \n');
  ctx.text(20, 7, ' \\____  $$| $$  \\ $$  /$$$$$$$| $$$$$$/ | $$$$$$$$ \n');
  ctx.text(20, 8, ' /$$  \\ $$| $$  | $$ /$$__  $$| $$_  $$ | $$_____/ \n');
  ctx.text(20, 9, '|  $$$$$$/| $$  | $$|  $$$$$$$| $$ \\  $$|  $$$$$$$ \n');
  ctx.text(20, 10, ' \\______/ |__/  |__/ \\_______/|__/  \\__/ \\_______/ \n');

  ctx.text(10, 30, '');

  readlineSync.keyInPause('Welcome to Snake! Please press any key to start the game!');

  ctx.cursor.restore();
};

module.exports = logo();
