import * as ex from "excalibur";

import { Resources } from "./resources";
import { MyLevel } from "./level";


export class Bird extends ex.Actor {
    playing = false;
    jumping = false;
    startSprite!: ex.Sprite;
    upAnimation!: ex.Animation;
    downAnimation!: ex.Animation;
    leftAnimation!: ex.Animation;
    rightAnimation!: ex.Animation;
    constructor(private level: MyLevel) {
        super({
            pos: ex.vec(200, 300),
            radius: 8,
            // rotating box double counts
            // width: 16,
            // height: 16,
            color: ex.Color.Yellow
        });
    }

    override onInitialize(): void {
        const spriteSheet = ex.SpriteSheet.fromImageSource({
            image: Resources.Sword,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: 32,
                spriteHeight: 32,
            }
        });

        this.startSprite = spriteSheet.getSprite(1, 0);
        this.leftAnimation = ex.Animation.fromSpriteSheet(spriteSheet, [3, 4, 5, 6, 7], 100);
        this.rightAnimation = ex.Animation.fromSpriteSheet(spriteSheet, [3, 4, 5, 6, 7], 100);
        this.upAnimation = ex.Animation.fromSpriteSheet(spriteSheet, [2, 1, 0], 150, ex.AnimationStrategy.Freeze);
        this.downAnimation = ex.Animation.fromSpriteSheet(spriteSheet, [0, 1, 2], 150, ex.AnimationStrategy.Freeze);
        
        // Register
        this.graphics.add("left", this.leftAnimation);
        this.graphics.add("right", this.rightAnimation);
        this.graphics.add('down', this.downAnimation);
        this.graphics.add('up', this.upAnimation);
        this.graphics.add('start', this.startSprite);

        this.graphics.use('start');

    }

    private isInputActive(engine: ex.Engine) {
        return (engine.input.keyboard.isHeld(ex.Keys.Space) ||
                engine.input.pointers.isDown(0))
    }


 // After main update, once per frame execute this code
 override onPreUpdate(engine: ex.Engine, delta: number) {
    // Reset x velocity
    this.vel.x = 0;

    // // Player input
    // if(engine.input.keyboard.isHeld(ex.Keys.Left)) { //.wasPressed
    //     console.log('1111111111111111');
    //     this.vel.x = -150;
    // }

    // if(engine.input.keyboard.isHeld(ex.Keys.Right)) {
    //     console.log('2222222222');
    //     this.vel.x = 150;
    // }
}


    override onPostUpdate(engine: ex.Engine): void {
        if (!this.playing) return; // если false, то ничего не делать =)

           // Player input
    if(engine.input.keyboard.isHeld(ex.Keys.Left)) { //.wasPressed
        console.log('1111111111111111');
        this.vel.x = -150;
    }

    if(engine.input.keyboard.isHeld(ex.Keys.Right)) {
        console.log('2222222222');
        this.vel.x = 150;
    }
    }

    start() {
        this.playing = true;
    }

    reset() {
        this.stop();
    }

    stop() {
        this.playing = false;
        this.vel = ex.vec(0, 0);
        this.acc = ex.vec(0, 0);
    }

}