import { Paddle } from './paddle';
import { InputHandler } from './input';
import { Ball } from './ball';
import { IBall, IPaddle } from 'pages/game/game.types';

export class Game {
  readonly gameWidth: number;
  readonly gameHeight: number;
  paddle: IPaddle;
  ball: IBall;
  gameObjects: [IBall, IPaddle];
  constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    new InputHandler(this.paddle);
    this.gameObjects = [this.ball, this.paddle];
  }

  start() {
    console.log('started');
  }

  update() {
    this.gameObjects.forEach((gameObject) => gameObject.update());
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.gameObjects.forEach((gameObject) => gameObject.draw(ctx));
  }
}
