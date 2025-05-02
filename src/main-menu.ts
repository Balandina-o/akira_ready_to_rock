import { Label, Font, Buttons, Color, DefaultLoader, Engine, ExcaliburGraphicsContext, Scene, SceneActivationContext, WebAudio, ScreenElement } from "excalibur";
import { Player } from "./player";
import { Resources } from "./resources";
import { game } from "./main";
import { AkiraOfficialArt } from "./main-menu/AkiraOfficialArt";
import { GameLogo } from "./main-menu/GameLogo";
import { MenuBackground } from "./main-menu/MenuBackground";
import { StartGameBtn } from "./main-menu/components/StartGameBtn";

export class MainMenu extends Scene {
    startGame = new ScreenElement({
        x: 0,
        y: 0,
        z: 2,
    });

    scoreLabel = new Label({
        text: 'Score: 0',
        x: 0,
        y: 0,
        z: 2,
        font: new Font({
            size: 20,
            color: Color.White
        }),
    });


    override onInitialize(engine: Engine): void {
    const menuBackground = new MenuBackground();
    this.add(menuBackground); // Actors need to be added to a scene to be drawn
    const player = new AkiraOfficialArt();
    this.add(player);
    const gameLogo = new GameLogo();
    this.add(gameLogo); // Actors need to be added to a scene to be drawn
    const startGameBtn = new StartGameBtn();
    this.add(startGameBtn); // Actors need to be added to a scene to be drawn

    this.add(this.scoreLabel);
    this.add(this.startGame);
    }
    override onPreLoad(loader: DefaultLoader): void {
        // Add any scene specific resources to load
        WebAudio.unlock;
    }

    override onActivate(context: SceneActivationContext<unknown>): void {
        // Called when Excalibur transitions to this scene
        // Only 1 scene is active at a time
        // game.goToScene('level');
        Resources.PreviewMusic.loop = true;
        Resources.PreviewMusic.play();
        WebAudio.unlock;
    }

    override onDeactivate(context: SceneActivationContext): void {
        // Called when Excalibur transitions away from this scene
        // Only 1 scene is active at a time
    }

    override onPreUpdate(engine: Engine, elapsedMs: number): void {
        // Called before anything updates in the scene
    }

    override onPostUpdate(engine: Engine, elapsedMs: number): void {
        // Called after everything updates in the scene
    }

    override onPreDraw(ctx: ExcaliburGraphicsContext, elapsedMs: number): void {
        // Called before Excalibur draws to the screen
    }

    override onPostDraw(ctx: ExcaliburGraphicsContext, elapsedMs: number): void {
        // Called after Excalibur draws to the screen
    }
}