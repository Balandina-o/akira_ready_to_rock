import { DefaultLoader, Random, Engine, ExcaliburGraphicsContext, Scene, SceneActivationContext, vec } from "excalibur";
import { Player } from "./player";
import { Resources } from "./resources";
import { Akira } from "./akira";
import { LightningsFactory } from "./lightnings-factory";
import { Lil } from "./lil";

export class MyLevel extends Scene {

    akira = new Akira(this);
    random = new Random();
    lightningFactory = new LightningsFactory(this, this.random, 600);

    showStartInstructions() {
        this.akira.start();
        this.lightningFactory.start();
    }
    override onInitialize(engine: Engine): void {
        const akira = new Akira( this );

        const lil = new Lil(vec(150, 0));
        this.add(lil);

        this.add(this.akira);

        this.showStartInstructions();
    }

    override onPreLoad(loader: DefaultLoader): void {
        // Add any scene specific resources to load
        // Resources.PreviewMusic.stop();
    }

    override onActivate(context: SceneActivationContext<unknown>): void {
        // Called when Excalibur transitions to this scene
        // Only 1 scene is active at a time
        Resources.BackgroundMusic.loop = true;
        Resources.BackgroundMusic.play();
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