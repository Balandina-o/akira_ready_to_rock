/** Модель экспортирует компонент кнопки старта игры. */

import { game } from "@/main";

import { Actor, Color, vec } from "excalibur";
import { Resources } from "../../resources";


export class StartGameBtn extends Actor {
  constructor() {
    super({
      name: 'StartGameBtn',
      pos: vec(1500, 250),
      width: 20,
      height: 20
    });
  }

  override onInitialize() {
    this.graphics.add(Resources.StartGameBtn.toSprite());
    this.actions.moveBy({ offset: vec(-750, 0), durationMs: 300 });

    this.on('pointerenter', event => { // Обработчик события наведения на кнопку
        // this.actions.scaleBy({scaleOffset: })
        this.actions.flash(Color.Purple, 100);
        this.actions.blink(100, 100 );
        // this.actions.flash(Color.Purple, 100);
        // this.graphics.add(Resources.AkiraOfficialArt.toSprite());
    });

    this.on('pointerleave', event => { // Обработчик события потери кнопкой фокуса
        this.graphics.add(Resources.StartGameBtn.toSprite());
    });

    this.on('pointerdown', evt => { // Обработчик события клика по кнопке
        Resources.PreviewMusic.stop();
        // Переходим на страницу с уровнем
        game.goToScene('level');
    });
  }
}
