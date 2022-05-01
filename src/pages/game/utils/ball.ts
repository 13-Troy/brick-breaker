import ballImg from '../../../assets/img/ball.png';
import { IBall, IGame, Position } from '../game.types';
import { GameObject } from './gameObject';

export class Ball extends GameObject implements IBall {
  readonly image: HTMLImageElement;
  readonly gameWidth: number;
  readonly gameHeight: number;
  readonly size = 16;
  position: Position = {
    x: 10,
    y: 10,
  };
  speed: Position = {
    x: 2,
    y: 2,
  };

  constructor({ gameWidth, gameHeight }: IGame) {
    super();
    this.image = this.createImage();
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  createImage() {
    const ballImage = new Image();

    ballImage.width = 10;
    ballImage.height = 10;
    ballImage.src = ballImg;

    return ballImage;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image as HTMLImageElement,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.x < 0 || this.position.x + this.size > this.gameWidth) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
  }
}
