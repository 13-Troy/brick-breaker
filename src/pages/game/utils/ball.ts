import ballImg from '../../../assets/img/ball.png';
import { Position } from '../game.types';
import { GameObject } from './gameObject';
import { Game } from './game';
import { Paddle } from './paddle';
import { detectCollisionPaddle } from './detectCollisionWithPaddle';

export class Ball extends GameObject {
  readonly image: HTMLImageElement;
  public paddle: Paddle;
  private game: Game;

  speed: Position = {
    x: 5,
    y: -7,
  };

  constructor(game: Game) {
    const { gameWidth, gameHeight, paddle } = game;

    super({
      gameWidth,
      gameHeight,
      height: 16,
      width: 16,
      position: {
        x: 10,
        y: 400,
      },
      name: 'ball',
    });

    this.image = this.createImage();
    this.paddle = paddle;
    this.game = game;

    this.on('collate:paddle', this.onCollateWithPaddle);
    this.on('collate:brick', this.onCollateWithBrick);
    this.on('reset', this.reset);

    this.reset();
  }

  reset() {
    this.speed = {
      x: 4,
      y: -4,
    };

    this.position = {
      x: 10,
      y: 400,
    };
  }

  onCollateWithPaddle(paddle: GameObject) {
    console.log(`${this.name} collated with ${paddle.name}`);
    const hitbox = detectCollisionPaddle(this, paddle);

    switch (hitbox) {
      case 1:
        this.speed.x = -9;
        this.speed.y = -this.speed.y;
        this.position.y = paddle.position.y - this.height;
        break;

      case 2:
        if (this.speed.x < 0) {
          this.speed.x = -6;
        } else {
          this.speed.x += -6;
        }
        this.speed.y = -this.speed.y;
        this.position.y = paddle.position.y - this.height;
        break;

      case 3:
        if (this.speed.x < 0) {
          this.speed.x = -4;
        } else {
          this.speed.x += -4;
        }
        this.speed.y = -this.speed.y;
        this.position.y = paddle.position.y - this.height;
        break;

      case 4:
        if (this.speed.x > 0) {
          this.speed.x = 4;
        } else {
          this.speed.x += 4;
        }
        this.speed.y = -this.speed.y;
        this.position.y = paddle.position.y - this.height;
        break;

      case 5:
        if (this.speed.x > 0) {
          this.speed.x = 6;
        } else {
          this.speed.x += 6;
        }
        this.speed.y = -this.speed.y;
        this.position.y = paddle.position.y - this.height;
        break;

      case 6:
        this.speed.x = 9;
        this.speed.y = -this.speed.y;
        this.position.y = paddle.position.y - this.height;
        break;

      default:
        return null;
    }
  }

  onCollateWithBrick(gameObject: GameObject) {
    console.log(`${this.name} collated with ${gameObject.name}`);
    this.game.emit('on_ball_collate');
    this.speed.y = -this.speed.y;
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

    //collision detection on top
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    //collision detection on bottom
    if (this.position.y + this.height > this.gameHeight) {
      this.game.emit('hit_bottom');
      this.emit('reset');
    }

    this.emit('updated', this);
  }
}
