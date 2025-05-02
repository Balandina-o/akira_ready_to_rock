import { Actor, DisplayMode, vec } from "excalibur";
import { Resources } from "../resources";

export class MenuBackground extends Actor {
  constructor() {
    super({
      name: 'MenuBackground',
      pos: vec(600, 300),
    });
  }

  override onInitialize() {
    this.graphics.add(Resources.MenuBackground.toSprite());
    this.actions.moveBy({ offset: vec(0, 100), durationMs: 300 })
  }
}
