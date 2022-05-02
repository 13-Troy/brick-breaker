import { IBall } from '../game.types';

type GameObject = {
  position: {
    x: number;
    y: number;
  };

  height: number;
  width: number;
};
export function detectCollision(ball: IBall, gameObject: GameObject) {
  const topOfTheGameObject = gameObject.position.y;

  const bottomOfTheGameObject = gameObject.position.y + gameObject.height;

  const bottomOfTheBall = ball.position.y + ball.size;

  const topOfTheBall = ball.position.y;

  const leftOfThePaddle = gameObject.position.x;

  const rightOfThePaddle = gameObject.position.x + gameObject.width;

  return (
    bottomOfTheBall >= topOfTheGameObject &&
    topOfTheBall <= bottomOfTheGameObject &&
    ball.position.x >= leftOfThePaddle &&
    ball.position.x + ball.size <= rightOfThePaddle
  );
}
