/** Модуль экспортирует главное меню игры. */

import {
    Label,
    Font,
    Buttons,
    Color,
    DefaultLoader,
    Engine,
    ExcaliburGraphicsContext,
    Scene,
    SceneActivationContext,
    WebAudio,
    ScreenElement
} from "excalibur";

import { Resources } from "./resources";

import { GameLogo } from "./main-menu/GameLogo";
import { DlcMenuBackground } from "./dlc-menu/DlcMenuBackground";
import { StartGameBtn } from "./main-menu/components/StartGameBtn";
import { Menu } from "./ui";
import { game } from "./main";
import { AkiraDlcTempArt } from "./dlc-menu/AkiraDlcTempArt";

export class DlcMenu extends Scene {
    startGame = new ScreenElement({
        x: 0,
        y: 0,
        z: 2,
    });

    override onInitialize(engine: Engine): void {
    const menuBackground = new DlcMenuBackground();
    const akiraOfficialArt = new AkiraDlcTempArt();
    const gameLogo = new GameLogo();
    const startGameBtn = new StartGameBtn();

    this.add(menuBackground); // Actors need to be added to a scene to be drawn
    this.add(gameLogo);
    this.add(akiraOfficialArt);
    this.add(startGameBtn);

    this.add(this.startGame);
    }
    override onPreLoad(loader: DefaultLoader): void {
        // Add any scene specific resources to load
    }

    override onActivate(context: SceneActivationContext<unknown>): void {
        const menu = new Menu(game.currentScene);
        Resources.DlcMenuMusic.loop = true;
        Resources.DlcMenuMusic.play();
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
