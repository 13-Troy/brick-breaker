import brickImg from '../../../assets/img/brick.png';
import { Position } from '../game.types';
import { Game } from './game';
import { detectCollision } from './detectCollision';
import { Ball } from './ball';
export class Brick {
  readonly width = 80;
  readonly height = 24;
  readonly image: HTMLImageElement;
  public markForDeletion = false;

  position: Position;
  ball: Ball;

  constructor({ ball }: Game, position: Position) {
    this.image = this.createImage();
    this.position = position;
    this.ball = ball;
  }

  createImage() {
    const brickImage = new Image();

    brickImage.width = 10;
    brickImage.height = 10;
    brickImage.src = brickImg;

    return brickImage;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  update() {
    if (detectCollision(this.ball, this)) {
      this.ball.speed.y = -this.ball.speed.y;
      this.markForDeletion = true;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image as HTMLImageElement,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
