import brickImg from '../../../assets/img/brick.png';
import { Position } from '../game.types';
import { Game } from './game';
import { detectCollision } from './detectCollision';
import { Ball } from './ball';
import { GameObject } from './gameObject';

export class Brick extends GameObject {
  readonly image: HTMLImageElement;
  public markForDeletion = false;
  ball: Ball;

  constructor({ ball, gameHeight, gameWidth }: Game, position: Position) {
    super({
      width: 80,
      height: 24,
      position,
      gameHeight,
      gameWidth,
      name: 'brick',
    });
    this.image = this.createImage();

    this.ball = ball;

    this.on('collate:ball', () => this.destroy());
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

  destroy() {
    console.log('brick is destroyed');
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
