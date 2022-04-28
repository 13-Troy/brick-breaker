import { IPaddle } from '../game.types';

export class InputHandler {
  constructor(paddle: IPaddle) {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft': {
          paddle.moveLeft();
          break;
        }
        case 'ArrowRight': {
          paddle.moveRight();
          break;
        }
        case 'Escape': {
          break;
        }
        case 'Space': {
          break;
        }
        default:
          return true;
      }
    });

    document.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'ArrowLeft': {
          if (paddle.speed < 0) paddle.stop();
          break;
        }
        case 'ArrowRight': {
          if (paddle.speed > 0) paddle.stop();
          break;
        }
        default:
          return true;
      }
    });
  }
}
