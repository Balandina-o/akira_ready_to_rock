/**
 * Триггер на кол-во очков.
 * ----------
 * DEPRECATED
 * ----------
 */

import * as ex from "excalibur";

import { MyLevel } from "./level";

export class ScoreTrigger extends ex.Actor {
    constructor(pos: ex.Vector, private level: MyLevel) {
        super({
            pos,
            width: 32,
            height: 23,
            // anchor: ex.vec(0, 0),
            // vel: ex.vec(-23, 0)
        })
        this.on('exitviewport', () => {
            this.kill();
        });
    }
    override onCollisionStart(): void {
        this.level.incrementScore();
    }
}
