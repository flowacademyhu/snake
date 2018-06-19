const growing = (snake) => {
  let n = snake.length;
  let i = snake[n - 1].x;
  let j = snake[n - 1].y;
  snake.push({ x: i, y: j });
};
module.exports = growing;
