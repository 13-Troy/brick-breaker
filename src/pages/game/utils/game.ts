import { Paddle } from './paddle';
import { InputHandler } from './input';
import { Ball } from './ball';
import { level1, buildLevels } from './levels';
import { Brick } from './brick';
import { GameObject } from './gameObject';

interface IGame {
  canvasElement: HTMLCanvasElement;
  gameWidth: number;
  gameHeight: number;
}

export class Game {
  readonly gameWidth: number;
  readonly gameHeight: number;

  paddle: Paddle;
  ball: Ball;
  gameObjects: GameObject[];
  bricks: Brick[];

  ctx: CanvasRenderingContext2D;

  constructor({ canvasElement, gameWidth, gameHeight }: IGame) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    new InputHandler(this.paddle);

    this.gameObjects = [this.ball, this.paddle];
    this.bricks = buildLevels(this, level1);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.ctx = canvasElement.getContext('2d')!;

    this.animate = this.animate.bind(this);
  }

  start() {
    requestAnimationFrame(this.animate);
  }

  animate() {
    if (this?.ctx) {
      this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

      this.update();
      this.draw(this.ctx);
    }
    requestAnimationFrame(this.animate);
  }

  update() {
    this.gameObjects.forEach((gameObject) => gameObject.update());
    this.bricks.forEach((gameObject) => gameObject.update());
    this.bricks = this.bricks.filter((brick) => !brick.markForDeletion);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.gameObjects.forEach((gameObject) => gameObject.draw(ctx));
    this.bricks.forEach((gameObject) => gameObject.draw(ctx));
  }
}
