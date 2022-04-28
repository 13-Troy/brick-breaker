import ballImg from '../../../assets/img/ball.png';

export class Ball {
  readonly image: HTMLImageElement;
  constructor() {
    const ballImage = new Image();
    ballImage.width = 10;
    ballImage.height = 10;
    ballImage.src = ballImg;

    this.image = ballImage;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image as HTMLImageElement, 10, 10, 16, 16);
  }

  update() {
    console.log('update ball');
  }
}
