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

import { AkiraOfficialArt } from "./main-menu/AkiraOfficialArt";
import { GameLogo } from "./main-menu/GameLogo";
import { MenuBackground } from "./main-menu/MenuBackground";
import { StartGameBtn } from "./main-menu/components/StartGameBtn";
import { Dialogue } from "./dialogue/Dialogue";
import { game } from "./main";
import { DlcBtn } from "./main-menu/components/DlcBtn";
import { SettingsBtn } from "./main-menu/components/SettingsBtn";

export class MainMenu extends Scene {
    startGame = new ScreenElement({
        x: 0,
        y: 0,
        z: 2,
    });

    override onInitialize(engine: Engine): void {
    const menuBackground = new MenuBackground();
    const akiraOfficialArt = new AkiraOfficialArt();
    const gameLogo = new GameLogo();
    const startGameBtn = new StartGameBtn();
    const dlcBtn = new DlcBtn();
    const settingsBtn = new SettingsBtn();

    this.add(menuBackground); // Actors need to be added to a scene to be drawn
    this.add(akiraOfficialArt);
    this.add(gameLogo);
    this.add(startGameBtn);
    this.add(dlcBtn);
    this.add(settingsBtn);

    this.add(this.startGame);
    }
    override onPreLoad(loader: DefaultLoader): void {
        // Add any scene specific resources to load
    }

    override onActivate(context: SceneActivationContext<unknown>): void {
        // Запускаем приветственный диалог
        setTimeout( () => {
            new Dialogue( [
                'ПРивеТ! Это Отоиши Акира на связи, если ты запустил эту игру, то ты явно готов пошуметь и взорвать парочку сцен',
                '*гитарный риф*',
                'go, rockstar!!'
            ] );
        }, 1000 )

        Resources.MainMenuMusic.loop = true;
        Resources.MainMenuMusic.play();
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
