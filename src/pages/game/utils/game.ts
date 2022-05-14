import { Paddle } from './paddle';
import { InputHandler } from './input';
import { Ball } from './ball';
import { level1, level2, level3, buildLevels } from './levels';
import type { Level } from './levels';
import { Brick } from './brick';
import { GameObject } from './gameObject';
import EventEmitter from 'eventemitter3';
import { CollisionManager } from './CollisionManager';

interface GameOptions {
  canvasElement: HTMLCanvasElement;
  gameWidth: number;
  gameHeight: number;
}

const GAME_STATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4,
};

enum GameState {
  PAUSED,
  RUNNING,
  MENU,
  GAMEOVER,
  NEWLEVEL,
}

let requestId: any;

export class Game extends EventEmitter {
  readonly gameWidth: number;
  readonly gameHeight: number;
  private gameState: GameState;
  private currentLevel = 0;
  private score = 0;
  private levels: Level[] = [level1, level2, level3];
  public lives: number;

  paddle: Paddle;
  ball: Ball;
  gameObjects: GameObject[];
  bricks: Brick[];
  collManager: CollisionManager;

  ctx: CanvasRenderingContext2D;

  constructor({ canvasElement, gameWidth, gameHeight }: GameOptions) {
    super();
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameState = GAME_STATE.MENU;
    this.lives = 3;

    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.collManager = new CollisionManager(this);
    this.gameObjects = [this.ball, this.paddle];
    this.bricks = buildLevels(this, level1);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.ctx = canvasElement.getContext('2d')!;

    this.animate = this.animate.bind(this);
    this.collManager.watch(this.ball, this.paddle);
    this.bricks.forEach((brick) => this.collManager.watch(this.ball, brick));

    this.on('Escape', this.togglePause);
    this.on('Space', this.start);
    this.on('hit_bottom', this.decreaseLives);
    this.on('on_ball_collate', this.increaseScore);

    new InputHandler(this.paddle, this);
    this.drawScore(this.ctx);
  }

  start() {
    if (
      this.gameState !== GAME_STATE.MENU &&
      this.gameState !== GAME_STATE.NEWLEVEL
    )
      return;

    if (this.gameState === GAME_STATE.NEWLEVEL) {
      // cancelAnimationFrame(requestId);
      this.bricks = buildLevels(this, this.levels[this.currentLevel]);
      this.bricks.forEach((brick) => this.collManager.watch(this.ball, brick));
      this.ball.emit('reset');
    }

    this.gameState = GAME_STATE.RUNNING;
    if (!requestId) this.animate();
  }

  increaseScore() {
    this.score += 100;
  }

  drawInitialScreen() {
    this.draw(this.ctx);
  }

  animate() {
    if (this?.ctx) {
      this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

      this.update();
      this.draw(this.ctx);
    }

    // if(this.gameState === GAME_STATE.NEWLEVEL) return;
    requestId = requestAnimationFrame(this.animate);
  }

  update() {
    if (this.lives === 0) {
      this.gameState = GAME_STATE.GAMEOVER;
    }

    if (
      this.gameState === GAME_STATE.PAUSED ||
      this.gameState === GAME_STATE.MENU ||
      this.gameState === GAME_STATE.GAMEOVER
    ) {
      return;
    }

    if (this.bricks.length === 0) {
      this.currentLevel++;
      this.gameState = GAME_STATE.NEWLEVEL;
      this.start();
    }

    this.gameObjects.forEach((gameObject) => gameObject.update());
    this.bricks.forEach((brick) => brick.update());
    this.bricks = this.bricks.filter((brick) => !brick.isMarkedForDeletion);

    this.drawScore(this.ctx);

    this.emit('updated');
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.gameObjects.forEach((gameObject) => gameObject.draw(ctx));
    this.bricks.forEach((gameObject) => gameObject.draw(ctx));

    if (this.gameState === GAME_STATE.PAUSED) {
      this.drawScreen(ctx, 'rgba(0,0,0,.5)', 'Paused');
    }

    if (this.gameState === GAME_STATE.MENU) {
      this.drawScreen(ctx, 'rgba(0,0,0,1)', 'Press SPACEBAR to start');
    }

    if (this.gameState === GAME_STATE.GAMEOVER) {
      this.drawScreen(ctx, 'rgba(0,0,0,1)', 'GAME OVER');
    }
  }

  drawScreen(ctx: CanvasRenderingContext2D, bgColor: string, text: string) {
    ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    ctx.fillStyle = bgColor;
    ctx.fill();

    ctx.font = '50px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(text, this.gameWidth / 2, this.gameHeight / 2);
  }

  drawScore(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(10, 10, 150, 30);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.font = `20px Arial`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.beginPath();
    ctx.fillText(`Score: ${this.score}`, 80, 32);
  }

  togglePause() {
    if (this.gameState === GAME_STATE.RUNNING) {
      this.gameState = GAME_STATE.PAUSED;
    } else {
      this.gameState = GAME_STATE.RUNNING;
    }
  }

  decreaseLives() {
    this.lives--;
  }
}
