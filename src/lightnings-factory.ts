import * as ex from "excalibur";

import { MyLevel } from "./level";
import { LightningPoint } from "./lightning";

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
        const randomLightningPosition = this.random.floating(0, 3000);
        const lightning = new LightningPoint(ex.vec(randomLightningPosition, 0));
        this.level.add(lightning);
    }

    start() {
        this.timer.start();
    }

    // reset() {
    //     for (const actor of this.level.actors) {
    //         if (actor instanceof LightningPoint
    //         ) {
    //             actor.kill();
    //         }
    //     }
    // }

    // stop() {
    //     this.timer.stop();
    //     for (const actor of this.level.actors) {
    //         if (actor instanceof LightningPoint 
    //         ) {
    //             actor.vel = ex.vec(0, 0);
    //         }
    //     }
    // }
}