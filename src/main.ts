import ex, { Color, DisplayMode, Engine, FadeInOut, SolverStrategy, ScreenElement, WebAudio } from "excalibur";
import { loader, Resources } from "./resources";
import { MainMenu } from "./main-menu";
import { MyLevel } from "./level";
import { Bird } from "./bird";

// import { Bird } from './bird';
// import { Ground } from './ground';

// Goal is to keep main.ts small and just enough to configure the engine


export const game = new Engine({
  width: 1200, // the width of the canvas
  height: 765, // the height of the canvas

  displayMode: DisplayMode.Fixed, // the display mode
    pixelArt: true, // pixelArt will turn on the correct settings to render pixel art without jaggies or shimmering artifacts
    scenes: {
        start: {
          scene: MainMenu,
        },
        level: {
          scene: MyLevel,
        }
      },
    physics: {
        solver: SolverStrategy.Realistic,
        substep: 5 // Sub step the physics simulation for more robust simulations
    },
    // fixedUpdateTimestep: 16 // Turn on fixed update timestep when consistent physic simulation is important
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

