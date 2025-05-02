import { DefaultLoader, ImageSource, Loader, Sound, WebAudio } from "excalibur";

import swordPath from './images/sword.png';
import akiraOfficialArt from './images/akira_preview.jpg';
import menuBackground from './images/menu_background.png';
import gameLogo from './images/game_logo.png';
import startGameBtn from './images/start_game_btn.png';

import backgroundPreviewMusicPath from './sounds/rhchp_can_not_stop.ogg';
import backgroundLevelMusicPath from './sounds/the_strokes_reptilia_instrumental.ogg';
import { MyLoader } from "./my-loader";

// It is convenient to put your resources in one place
export const Resources = {
  Sword: new ImageSource(swordPath),
  AkiraOfficialArt: new ImageSource(akiraOfficialArt),
  MenuBackground: new ImageSource(menuBackground),
  GameLogo: new ImageSource(gameLogo),
  StartGameBtn: new ImageSource(startGameBtn),

  PreviewMusic: new Sound(backgroundPreviewMusicPath),
  BackgroundMusic: new Sound(backgroundLevelMusicPath)
} as const;
// So when you type Resources.Sword -> ImageSource

// We build a loader and add all of our resources to the boot loader
// You can build your own loader by extending DefaultLoader
export const loader = new DefaultLoader();

for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
