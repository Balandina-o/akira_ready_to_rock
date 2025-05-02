import * as ex from "excalibur";

import { MyLevel } from "./level";
import { Lil } from "./lil";

export class LightningsFactory {

    private timer: ex.Timer;
    constructor(
        private level: MyLevel,
        private random: ex.Random,
        intervalMs: number) {
            this.timer = new ex.Timer({
                interval: intervalMs,
                repeats: true,
                action: () => this.spawnLightnings()
            });
            this.level.add(this.timer);
    }

    spawnLightnings() {
        console.log('12312123');
        const randomLightningPosition = this.random.floating(0, 3000);
        const lightning = new Lil(ex.vec(randomLightningPosition, 0));
        this.level.add(lightning);
        //bottomPipe.actions.moveBy({ offset: ex.vec(100, randomLightningPosition), durationMs: 1000 });
    }

    start() {
        this.timer.start();
    }

    reset() {
        for (const actor of this.level.actors) {
            if (actor instanceof Lil
            ) {
                actor.kill();
            }
        }
    }

    stop() {
        this.timer.stop();
        for (const actor of this.level.actors) {
            if (actor instanceof Lil 
            ) {
                actor.vel = ex.vec(0, 0);
            }
        }
    }
}