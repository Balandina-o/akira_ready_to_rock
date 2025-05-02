import { Actor, vec } from "excalibur";
import { Resources } from "../resources";

export class MenuBackground extends Actor {
  constructor() {
    super({
      name: 'MenuBackground',
      pos: vec(750, 0),
      width: 10000,
      height: 500
    });
  }

  override onInitialize() {
    this.graphics.add(Resources.MenuBackground.toSprite());
    this.actions.moveBy({ offset: vec(0, 100), durationMs: 300 })
  }
}
