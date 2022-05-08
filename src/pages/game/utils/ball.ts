import ballImg from '../../../assets/img/ball.png';
import { Position } from '../game.types';
import { GameObject } from './gameObject';
import { detectCollision } from './detectCollision';
import { Game } from './game';
import { Paddle } from './paddle';

export class Ball extends GameObject {
  readonly image: HTMLImageElement;
  public paddle: Paddle;
  speed: Position = {
    x: 2,
    y: -2,
  };

  constructor({ gameWidth, gameHeight, paddle }: Game) {
    super({
      gameWidth,
      gameHeight,
      height: 16,
      width: 16,
      position: {
        x: 10,
        y: 400,
      },
    });
    this.image = this.createImage();
    this.paddle = paddle;
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
      this.width,
      this.height
    );

    this.emit('rendered', this);
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //collision detection on x axis
    if (this.position.x < 0 || this.position.x + this.width > this.gameWidth) {
      this.speed.x = -this.speed.x;
    }
    //collision detection on y axis

    if (
      this.position.y + this.height > this.gameHeight ||
      this.position.y < 0
    ) {
      this.speed.y = -this.speed.y;
    }
    //collision of ball with paddle
    if (detectCollision(this, this.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.paddle.position.y - this.height;
    }

    this.emit('updated', this);
  }
}
