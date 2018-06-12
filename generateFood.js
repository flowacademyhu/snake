function generateFood (map) {
  let size = map.length;
  let i = Math.floor(Math.random() * size);
  let j = Math.floor(Math.random() * size);
  map[i][j] = 'x';
}
module.exports = generateFood;
