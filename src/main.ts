/** Точка входа в программу, базовые настройки игры. */
// Goal is to keep main.ts small and just enough to configure the engine

import ex, {
  Color,
  DisplayMode,
  Engine,
  FadeInOut,
  SolverStrategy
} from "excalibur";

import { loader } from "./resources";
import { MainMenu } from "./main-menu";
import { MyLevel } from "./level";


export const game = new Engine({
  width: 1200, // the width of the canvas
  height: 760, // the height of the canvas
  backgroundColor: Color.fromHex('f6acfc'), // Мигание
  displayMode: DisplayMode.Fixed, // the display mode
    pixelArt: true, // pixelArt will turn on the correct settings to render pixel art 
    // without jaggies or shimmering artifacts
    scenes: {
        start: {
          scene: MainMenu,
        },
        level: {
          scene: MyLevel,
          transitions: {
            in: new FadeInOut({duration: 500, direction: 'in', color: Color.Black}),
            out: new FadeInOut({duration: 500, direction: 'out', color: Color.Black})
          }
        }
      },
    physics: {
        solver: SolverStrategy.Realistic,
        substep: 5 // Sub step the physics simulation for more robust simulations
    },
    // fixedUpdateTimestep: 16
    // Turn on fixed update timestep when consistent physic simulation is important
});

game.start('start', { // name of the start scene 'start'
    loader, // Optional loader (but needed for loading images/sounds)
    inTransition: new FadeInOut({ // Optional in transition
        duration: 800,
        direction: 'in',
        color: Color.ExcaliburBlue // Мигание
    }),
}).then(() => {
    // Что-то можно сделать после старта
});

