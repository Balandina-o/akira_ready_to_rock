/** Модель экспортирует картинку с Акирой в главном меню. */

// Actors are the main unit of composition you'll likely use,
// anything that you want to draw and move around the screen
// is likely built with an actor

import {
  Actor,
  Collider,
  CollisionContact,
  Engine,
  Side,
  vec
} from "excalibur";

import { Resources } from "../resources";
import { game } from "@/main";


export class AkiraOfficialArt extends Actor {
  constructor() {
    super({
      // Giving your actor a name is optional, but helps in debugging using the dev tools or debug mode
      // https://github.com/excaliburjs/excalibur-extension/
      // Chrome: https://chromewebstore.google.com/detail/excalibur-dev-tools/dinddaeielhddflijbbcmpefamfffekc
      // Firefox: https://addons.mozilla.org/en-US/firefox/addon/excalibur-dev-tools/
      name: 'AkiraOfficialArt',
      pos: vec(0, 370),
      width: 1,
      height: 1,
      // anchor: vec(0, 0), // Actors default center colliders and graphics with anchor (0.5, 0.5)
      // collisionType: CollisionType.Active,
      // Collision Type Active means this participates in collisions read more
      // https://excaliburjs.com/docs/collisiontypes
    });
  }

  override onInitialize() {
    // Generally recommended to stick logic in the "On initialize"
    // This runs before the first update
    // Useful when
    // 1. You need things to be loaded like Images for graphics
    // 2. You need excalibur to be initialized & started 
    // 3. Deferring logic to run time instead of constructor time
    // 4. Lazy instantiation
    this.graphics.add(Resources.AkiraOfficialArt.toSprite());

    // Actions are useful for scripting common behavior, for example patrolling enemies
    this.actions.moveBy({ offset: vec(290, 0), durationMs: 300 })
    this.actions.moveBy({ offset: vec(100, 0), durationMs: 1000 });
  
    this.actions.repeatForever(ctx => {
      ctx.moveBy({offset: vec(0, 10), durationMs: 500});
      ctx.moveBy({offset: vec(-5, 0), durationMs: 300});
      ctx.moveBy({offset: vec(0, -10), durationMs: 500});
      ctx.moveBy({offset: vec(5, 0), durationMs: 500});
    });

    // Sometimes you want to click on an actor!
    this.on('pointerdown', evt => {
      console.log('You clicked the actor @', evt.worldPos.toString());
      Resources.MainMenuMusic.stop();
      // Переходим на страницу с уровнем
      // Todo Добавить анимацию
      // setTimeout( () => {
        game.goToScene('dlcMenu');
      // }, 1000)
    });
  }

  override onPreUpdate(engine: Engine, elapsedMs: number): void {
    // Put any update logic here runs every frame before Actor builtins
  }

  override onPostUpdate(engine: Engine, elapsedMs: number): void {
    // Put any update logic here runs every frame after Actor builtins
  }

  override onPreCollisionResolve(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
    // Called before a collision is resolved, if you want to opt out of this specific collision call contact.cancel()
  }

  override onPostCollisionResolve(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
    // Called every time a collision is resolved and overlap is solved
  }

  override onCollisionStart(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
    // Called when a pair of objects are in contact
  }

  override onCollisionEnd(self: Collider, other: Collider, side: Side, lastContact: CollisionContact): void {
    // Called when a pair of objects separates
  }
}
