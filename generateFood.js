let applePositionI = 0;
let applePositionJ = 0;
let score = 0;
let apple = 0;
const generateFood = (map) => {
  let sizeY = map.length;
  let sizeX = map[0].length;
  let i = Math.floor(Math.random() * sizeY);
  let j = Math.floor(Math.random() * sizeX);
  if ((map[i][j] === '═') || (map[i][j] === '║') || (map[i][j] === '⬤')) {
    generateFood(map);
  } else {
    map[i][j] = '$';
    applePositionI = i;
    applePositionJ = j;
  }
};

const food = (counter, map) => {
  console.log('Money earned: $' + score);
  // first round, first apple generates
  if (counter === 1) {
    generateFood(map);
  // after first round, this runs
  } else {
    // amikor felveszi a kígyó az almát:
    switch (map[applePositionI][applePositionJ]) {
      case '⬤':
        generateFood(map);
        score++;
        apple = 1;
        return apple;
      case '║':
        generateFood(map);
        score++;
        apple = 1;
        return apple;
        
        // amikor nem veszi fel az almát
      case ' ':
        map[applePositionI][applePositionJ] = '$';
        break;
    }
  }
};

module.exports = food;
