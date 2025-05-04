/** Игровая моделька Акиры. */

import * as ex from "excalibur";

import { Resources } from "./resources";
import { MyLevel } from "./level";
import { LightningPoint } from "./lightning";


export class Akira extends ex.Actor {
    playing = false;
    jumping = false;
    startSprite!: ex.Sprite;
    leftAnimation!: ex.Animation;
    rightAnimation!: ex.Animation;

    constructor(private level: MyLevel) {
        super({
            name: 'UltraSuperGuitarist',
            width: 100,
            height: 100,
            pos: ex.vec(150, 550)
        });
    }

    override onInitialize(): void {
        const spriteSheet = ex.SpriteSheet.fromImageSource({
            image: Resources.Akira,
            grid: {
                rows: 8,
                columns: 9,
                spriteWidth: 25,
                spriteHeight: 65,
            }
        });

        this.startSprite = spriteSheet.getSprite(1, 0);
        this.leftAnimation = ex.Animation.fromSpriteSheet(spriteSheet, [3, 4, 5, 6, 7], 100);
        this.rightAnimation = ex.Animation.fromSpriteSheet(spriteSheet, [3, 4, 5, 6, 7], 100);
        
        // Register
        this.graphics.add("left", this.leftAnimation);
        this.graphics.add("right", this.rightAnimation);
        // this.graphics.add('up', this.upAnimation);
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

}

override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
    if (other.owner instanceof LightningPoint ) {
        this.level.incrementScore();
    }
}

    override onPostUpdate(engine: ex.Engine): void {
        if (!this.playing) return; // если false, то ничего не делать =)

           // Player input
    if(engine.input.keyboard.isHeld(ex.Keys.Left)) { //.wasPressed
        //console.log('1111111111111111');
        this.vel.x = -150;
    }

    if(engine.input.keyboard.isHeld(ex.Keys.Right)) {
       // console.log('2222222222');
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