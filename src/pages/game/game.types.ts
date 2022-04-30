export type Position = {
  x: number;
  y: number;
};

export interface IPaddle {
  readonly width: number;
  readonly height: number;
  readonly maxSpeed: number;
  readonly gameWidth: number;
  speed: number;
  position: Position;
  draw: (ctx: CanvasRenderingContext2D) => void;
  update: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  stop: () => void;
}

export interface IGame {
  gameWidth: number;
  gameHeight: number;
  paddle: IPaddle;
  ball: IBall;
  start: () => void;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export interface IBall {
  readonly image: HTMLImageElement;
  readonly size: number;
  readonly gameWidth: number;
  readonly gameHeight: number;
  position: Position;
  speed: Position;
  draw: (ctx: CanvasRenderingContext2D) => void;
  update: () => void;
}
