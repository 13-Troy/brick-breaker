import { Ball } from './ball';

type GameObject = {
  position: {
    x: number;
    y: number;
  };

  height: number;
  width: number;
};
export function detectCollision(ball: Ball, gameObject: GameObject) {
  const topOfTheGameObject = gameObject.position.y;
  const bottomOfTheGameObject = gameObject.position.y + gameObject.height;
  const bottomOfTheBall = ball.position.y + ball.height;
  const topOfTheBall = ball.position.y;
  const leftOfThePaddle = gameObject.position.x;
  const rightOfThePaddle = gameObject.position.x + gameObject.width;

  return (
    bottomOfTheBall >= topOfTheGameObject &&
    topOfTheBall <= bottomOfTheGameObject &&
    ball.position.x >= leftOfThePaddle &&
    ball.position.x + ball.width <= rightOfThePaddle
  );
}
