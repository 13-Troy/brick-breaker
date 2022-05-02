import { Brick } from './brick';
import { Game } from './game';

export const level1 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export function buildLevels(game: Game, level: number[][]) {
  const bricks: Brick[] = [];

  level.forEach((row: number[], rowIndex: number) => {
    row.forEach((brick, brickIndex) => {
      if (brick) {
        const position = {
          x: brickIndex * 80,
          y: 60 + rowIndex * 24,
        };

        bricks.push(new Brick(game, position));
      }
    });
  });

  return bricks;
}
