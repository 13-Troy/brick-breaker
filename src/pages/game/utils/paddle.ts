import { IGame, IPaddle, Position } from '../game.types';

export class Paddle implements IPaddle {
  readonly gameWidth: number;
  position: Position;
  readonly width = 150;
  readonly height = 20;
  readonly maxSpeed = 7;
  public speed = 0;

  constructor({ gameWidth, gameHeight }: IGame) {
    this.gameWidth = gameWidth;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    };
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
