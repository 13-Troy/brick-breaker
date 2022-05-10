import { Paddle } from './paddle';
import EventEmitter from 'eventemitter3';
import { InputManager } from './InputManager';

export class InputHandler extends EventEmitter {
  inputManager: InputManager;
  constructor(paddle: Paddle) {
    super();

    this.inputManager = new InputManager();
    this.inputManager.watch(paddle);

    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft': {
          this.inputManager.emit('keydown', 'keydown:ArrowLeft');
          break;
        }

        case 'ArrowRight': {
          this.inputManager.emit('keydown', 'keydown:ArrowRight');
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
          this.inputManager.emit('keyup', 'keyup:ArrowLeft');
          break;
        }

        case 'ArrowRight': {
          this.inputManager.emit('keyup', 'keyup:ArrowRight');
          break;
        }

        default:
          return true;
      }
    });
  }
}
