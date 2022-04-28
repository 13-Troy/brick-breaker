export default class Paddle0 {
  private readonly height: number;
  private readonly width: number;
  private readonly gameWidth: number;
  private speed: number;
  private readonly maxSpeed: number;
  private position: {
    x: number;
    y: number;
  };

  constructor(game: any) {
    this.height = 20;
    this.width = 150;
    this.gameWidth = game.gameWidth;

    this.speed = 0;
    this.maxSpeed = 7;

    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10,
    };
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#0ff';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  public update(deltaTime: number) {
    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width >= this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }

  public moveLeft() {
    this.speed = -this.maxSpeed;
  }

  public moveRight() {
    this.speed = this.maxSpeed;
  }

  public stop() {
    this.speed = 0;
  }
}
