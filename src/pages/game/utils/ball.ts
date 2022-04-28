import ballImg from '../../../assets/img/ball.png';
import { IGame, Position } from '../game.types';

export class Ball {
  readonly image: HTMLImageElement;
  readonly size: number;
  readonly gameWidth: number;
  readonly gameHeight: number;
  position: Position;
  speed: Position;
  constructor(game: IGame) {
    const ballImage = new Image();
    ballImage.width = 10;
    ballImage.height = 10;
    ballImage.src = ballImg;
    this.image = ballImage;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.position = {
      x: 10,
      y: 10,
    };
    this.speed = {
      x: 2,
      y: 2,
    };
    this.size = 16;
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

  update(deltaTime?: number) {
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
