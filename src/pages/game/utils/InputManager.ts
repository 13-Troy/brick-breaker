import EventEmitter from 'eventemitter3';
import { GameObject } from 'pages/game/utils/gameObject';

export class InputManager extends EventEmitter {
  private watchedObjects: GameObject[] = [];
  constructor() {
    super();

    this.on('keydown', this.watchForInputEvents, this);
    this.on('keyup', this.watchForInputEvents, this);
  }

  watch(object: GameObject) {
    this.watchedObjects.push(object);
  }

  watchForInputEvents(event: string) {
    this.watchedObjects.forEach((object) => {
      object.emit(`${object.name}:${event}`);
    });
  }
}
