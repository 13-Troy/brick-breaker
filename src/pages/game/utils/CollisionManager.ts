import EventEmitter from 'eventemitter3';
import { GameObject } from './gameObject';
import type { Game } from './game';
import { detectCollision } from './detectCollision';

export class CollisionManager extends EventEmitter {
  private watchedObjects: [GameObject, GameObject][] = [];
  constructor(game: Game) {
    super();

    game.on('updated', this.calculate);

    this.calculate = this.calculate.bind(this);
    this.watch = this.watch.bind(this);
  }

  watch(object1: GameObject, object2: GameObject) {
    this.watchedObjects.push([object1, object2]);
  }

  calculate() {
    console.log('watched objects', this.watchedObjects);
    this.watchedObjects.forEach(([object1, object2]) => {
      if (detectCollision(object1, object2)) {
        object1.emit(`collate:${object2.name}`, object2);

        // object1.collateWith(object2);
        // object2.collateWith(object1);
      }
    });
  }
}
