/** Модель экспортирует компонент кнопки старта игры. */

import { game } from "@/main";

import { Actor, vec } from "excalibur";
import { Resources } from "../../resources";


export class StartGameBtn extends Actor {
  constructor() {
    super({
      name: 'StartGameBtn',
      pos: vec(1500, 550),
      width: 20,
      height: 20
    });
  }

  override onInitialize() {
    this.graphics.add(Resources.StartGameBtn.toSprite());
    this.actions.moveBy({ offset: vec(-600, 0), durationMs: 300 });

    this.on('pointerenter', event => { // Обработчик события наведения на кнопку
        this.graphics.add(Resources.StartGameBtnHover.toSprite());
    });

    this.on('pointerleave', event => { // Обработчик события потери кнопкой фокуса
        this.graphics.add(Resources.StartGameBtn.toSprite());
    });

    this.on('pointerdown', evt => { // Обработчик события клика по кнопке
        Resources.MainMenuMusic.stop();
        // Переходим на страницу с уровнем
        // Todo Добавить анимацию
        // setTimeout( () => {
          game.goToScene('level');
        // }, 1000)
    });
  }
}
