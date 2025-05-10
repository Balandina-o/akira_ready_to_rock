/** Модель экспортирует фон главного меню. */
// Todo сделать фон интерактивным

import { Actor, vec } from "excalibur";

import { Resources } from "../resources";

export class DlcMenuBackground extends Actor {
  constructor() {
    super({
      name: 'DlcMenuBackground',
      pos: vec(600, 400),
    });
  }

  override onInitialize() {
    this.graphics.add(Resources.DlcMenuBackground.toSprite());
  }
}
