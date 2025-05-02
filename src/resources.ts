import { DefaultLoader, ImageSource, ImageWrapping, Loader, Sound, WebAudio } from "excalibur";

import swordPath from './images/josuke.png';
import akiraOfficialArt from './images/akira_preview.png';
import menuBackground from './images/menu_background.png';
import gameLogo from './images/game_logo.png';
import startGameBtn from './images/start_game_btn.png';
import startGameBtnHover from './images/start_game_btn_hover.png';

import backgroundPreviewMusicPath from './sounds/rhchp_can_not_stop.ogg';
import backgroundLevelMusicPath from './sounds/the_strokes_reptilia_instrumental.ogg';


// It is convenient to put your resources in one place
export const Resources = {
  Sword: new ImageSource(swordPath),
  AkiraOfficialArt: new ImageSource(akiraOfficialArt),
  MenuBackground: new ImageSource(menuBackground, {
    wrapping: ImageWrapping.Mirror
  }),

  GameLogo: new ImageSource(gameLogo),
  StartGameBtn: new ImageSource(startGameBtn),
  StartGameBtnHover: new ImageSource(startGameBtnHover),

  PreviewMusic: new Sound(backgroundPreviewMusicPath),
  BackgroundMusic: new Sound(backgroundLevelMusicPath)
} as const;
// So when you type Resources.Sword -> ImageSource

// We build a loader and add all of our resources to the boot loader
// You can build your own loader by extending DefaultLoader
export const loader = new Loader();

for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
