import { Actor, vec } from "excalibur";
import { Resources } from "../resources";

export class GameLogo extends Actor {
  constructor() {
    super({
      name: 'GameLogo',
      pos: vec(720, 0),
      width: 50,
      height: 50
    });
  }

  override onInitialize() {
    this.graphics.add(Resources.GameLogo.toSprite());
    this.actions.moveBy({ offset: vec(0, 150), durationMs: 300 })
  }
}
