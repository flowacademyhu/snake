var ctx = require('axel');
const logo = () => {
    let logo = ' \n' +
        '     /$$$$$$                      /$$                 \n' +
        '    /$$__  $$                    | $$                 \n' +
        '   | $$  \\__/ /$$$$$$$   /$$$$$$ | $$   /$$  /$$$$$$  \n' +
        '   |  $$$$$$ | $$__  $$ |____  $$| $$  /$$/ /$$__  $$ \n' +
        '    \\____  $$| $$  \\ $$  /$$$$$$$| $$$$$$/ | $$$$$$$$ \n' +
        '    /$$  \\ $$| $$  | $$ /$$__  $$| $$_  $$ | $$_____/ \n' +
        '   |  $$$$$$/| $$  | $$|  $$$$$$$| $$ \\  $$|  $$$$$$$ \n' +
        '    \\______/ |__/  |__/ \\_______/|__/  \\__/ \\_______/ \n' +
        '                                                      \n' +
        '                                                      \n' +
        '                                                      ';
    return logo;
};

ctx.clear();

// Red box
//bal margotol valo tavolsag
//fentrol mennyire legyen lent
//vizszintesen mennyit menjen (duplazni kell), lefele mennyit menjen

// fekete

ctx.bg(10, 0, 0);
ctx.box(8, 1, 10, 1);
ctx.box(6, 2, 14, 1);
ctx.box(6, 3, 16, 1);
ctx.box(4, 4, 18, 1);
ctx.box(4, 5, 20, 1);
ctx.box(4, 6, 20, 1);
ctx.box(6, 7, 16, 1);
ctx.box(8, 8, 14, 1);
ctx.box(4, 9, 20, 1);
ctx.box(2, 10, 24, 1);
ctx.box(0, 11, 27, 1);
ctx.box(0, 12, 29, 1);
ctx.box(0, 13, 29, 1);
ctx.box(2, 14, 28, 1);
ctx.box(4, 15, 18, 1);
ctx.box(26, 15, 2, 1);

// green

ctx.bg(128, 255, 0);
ctx.box(8, 2, 10, 1);
ctx.box(8, 3, 12, 1);
ctx.box(6, 4, 14, 1);
ctx.box(6, 5, 16, 1);
ctx.box(6, 6, 16, 1);
ctx.box(8, 7, 12, 1);

ctx.box(8, 9, 4, 1);
ctx.box(14, 9, 6, 1);// 2
ctx.box(4, 10, 6, 1);
ctx.box(12, 10, 8, 1);// 2
ctx.box(22, 10, 2, 1);// 3
ctx.box(2, 11, 4, 1);
ctx.box(8, 11, 10, 1);// 2
ctx.box(20, 11, 6, 1);// 3
ctx.box(2, 12, 6, 1);
ctx.box(18, 12, 6, 1);// 3
ctx.box(26, 12, 2, 1);// 4
ctx.box(2, 13, 22, 1);
ctx.box(26, 13, 2, 1);// 4
ctx.box(4, 14, 18, 1);
ctx.box(26, 14, 2, 1);// 4

// szem
ctx.bg(10, 0, 0);
ctx.box(8, 4, 2, 1);
ctx.box(16, 4, 2, 1); // 2
ctx.box(8, 5, 2, 1);
ctx.box(16, 5, 2, 1); // 2

// pofi

ctx.bg(250, 128, 114);
ctx.box(6, 6, 2, 1);
ctx.box(18, 6, 2, 1); // 2

// arnyek

ctx.bg(50,205,50);
ctx.box(20, 5, 2, 2);
ctx.box(8, 7, 12, 1);
ctx.box(18, 9, 2, 2);
ctx.box(8, 11, 10, 1);
ctx.box(2, 12, 2, 2);
ctx.box(4, 14, 18, 1);
ctx.box(26, 12, 2, 1);// 4
ctx.box(26, 13, 2, 1);// 4
ctx.box(26, 14, 2, 1); // 4
ctx.box(22, 10, 2, 4);// 3
ctx.box(24, 11, 2, 1);// 3

ctx.cursor.restore();

