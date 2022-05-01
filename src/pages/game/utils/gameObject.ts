import { Position } from 'pages/game/game.types';

export abstract class GameObject {
  abstract readonly gameWidth: number;
  abstract position: Position;
  abstract draw(ctx: CanvasRenderingContext2D): void;
  abstract update(): void;
}
