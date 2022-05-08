import { Position } from 'pages/game/game.types';
import EventEmitter from 'eventemitter3';

interface IGameObject {
  gameWidth: number;
  gameHeight: number;
  width: number;
  height: number;
  position: Position;
}

export abstract class GameObject extends EventEmitter {
  public gameWidth: number;
  public gameHeight: number;
  public height: number;
  public width: number;
  public position: Position;

  protected constructor({
    gameWidth,
    gameHeight,
    width,
    height,
    position,
  }: IGameObject) {
    super();
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.height = height;
    this.width = width;
    this.position = position;
  }

  abstract draw(ctx: CanvasRenderingContext2D): void;
  abstract update(): void;
}
