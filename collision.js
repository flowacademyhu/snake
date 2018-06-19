const collision = (snake) => {
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      console.log('Game over!');
      process.exit();
    }
  }
};
module.exports = collision;
