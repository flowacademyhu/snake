const growing = (snake) => {
  let n = snake.length;
  let i = snake[n - 1].x;
  let j = snake[n - 1].y;
  let k = snake[n - 1].char;
  snake.push({ x: i, y: j, char: k });
};
module.exports = growing;
