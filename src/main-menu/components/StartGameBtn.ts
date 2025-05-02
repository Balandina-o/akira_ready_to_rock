import { Actor, vec } from "excalibur";
import { Resources } from "../../resources";
import { game } from "@/main";

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

    this.on('pointerdown', evt => {
        Resources.PreviewMusic.stop();
        game.goToScene('level');
        console.log('You clicked the actor @', evt.worldPos.toString());
    });
  }
}
