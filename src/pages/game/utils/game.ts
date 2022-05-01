import { Paddle } from './paddle';
import { InputHandler } from './input';
import { Ball } from './ball';
import { IBall, IPaddle } from 'pages/game/game.types';

interface IGame {
  canvasElement: HTMLCanvasElement;
  gameWidth: number;
  gameHeight: number;
}

export class Game {
  readonly gameWidth: number;
  readonly gameHeight: number;
  paddle: IPaddle;
  ball: IBall;
  gameObjects: [IBall, IPaddle];
  ctx: CanvasRenderingContext2D;
  constructor({ canvasElement, gameWidth, gameHeight }: IGame) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.gameObjects = [this.ball, this.paddle];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.ctx = canvasElement.getContext('2d')!;

    new InputHandler(this.paddle);
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
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.gameObjects.forEach((gameObject) => gameObject.draw(ctx));
  }
}
