import { GameObject } from './gameObject';
import { Game } from './game';

const PADDLE_WIDTH = 150;
const PADDLE_HEIGHT = 20;
export class Paddle extends GameObject {
  readonly maxSpeed = 7;
  public speed = 0;

  constructor({ gameWidth, gameHeight }: Game) {
    super({
      gameWidth,
      gameHeight,
      width: PADDLE_WIDTH,
      height: PADDLE_HEIGHT,
      position: {
        x: gameWidth / 2 - PADDLE_WIDTH / 2,
        y: gameHeight - PADDLE_HEIGHT - 10,
      },
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#0ff';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.x += this.speed;

    if (this.position.x < 0) {
      this.position.x = 0;
    }

    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }

  moveLeft() {
    this.speed -= this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }
}
