/** Модель экспортирует фон главного меню. */
// Todo сделать фон интерактивным

import { Actor, vec } from "excalibur";

import { Resources } from "../resources";

export class MenuBackground extends Actor {
  constructor() {
    super({
      name: 'MenuBackground',
      pos: vec(600, 400),
    });
  }

  override onInitialize() {
    this.graphics.add(Resources.MainMenuBackground.toSprite());
  }
}
