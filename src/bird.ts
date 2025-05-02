// // bird.ts
// import * as ex from 'excalibur';
// import { Ground } from './ground';


// export class Bird extends ex.Actor {
//     constructor() {
//         super({
//             pos: ex.vec(200, 300),
//             width: 16, // for now we'll use a box so we can see the rotation
//             height: 16, // later we'll use a circle collider
//             color: ex.Color.Yellow
//         })
//     }

//     override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
//         if (other.owner instanceof Ground) {
//             this.stop();
//         }
//     }
//     stop() {
//         this.vel = ex.vec(0, 0);
//         this.acc = ex.vec(0, 0)
//     }
// }