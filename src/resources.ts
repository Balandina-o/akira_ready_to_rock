/** Модель экспортирует ресурсы, задействуемые в игре. */

import {ImageSource, Loader, Sound } from "excalibur";

import AkiraPath from './images/josuke.png';

import akiraOfficialArtPath from './images/akira_preview.png';
import mainMenuBackgroundPath from './images/menu_background.png';
import dlcMenuBackgroundPath from './images/temple_dlc_menu_background.jpg';

import gameLogoPath from './images/game_logo.png';
import startGameBtnPath from './images/start_game_btn.png';
import startGameBtnHoverPath from './images/start_game_btn_hover.png';

import lightningPointPath from './images/lightning.png';

import backgroundMainMenuMusicPath from './sounds/rhchp_can_not_stop.ogg';
import backgroundDlcMenuMusicPath from './sounds/plenka_voltage.ogg';
import levelBackgroundMusicPath from './sounds/the_strokes_reptilia_instrumental.ogg';


// It is convenient to put your resources in one place
export const Resources = {
  Akira: new ImageSource(AkiraPath),
  AkiraOfficialArt: new ImageSource(akiraOfficialArtPath),
  MainMenuBackground: new ImageSource(mainMenuBackgroundPath),
  DlcMenuBackground: new ImageSource(dlcMenuBackgroundPath),
  // Todo Сделать что-то с фоном. Код ниже не работает {
  //   wrapping: ImageWrapping.Mirror
  // })

  GameLogo: new ImageSource(gameLogoPath),
  StartGameBtn: new ImageSource(startGameBtnPath),
  StartGameBtnHover: new ImageSource(startGameBtnHoverPath),

  LightningPoint: new ImageSource(lightningPointPath),
  
  MainMenuMusic: new Sound(backgroundMainMenuMusicPath),
  DlcMenuMusic: new Sound(backgroundDlcMenuMusicPath),
  LevelBackgroundMusic: new Sound(levelBackgroundMusicPath)
} as const;

// We build a loader and add all of our resources to the boot loader
// You can build your own loader by extending DefaultLoader
export const loader = new Loader();

for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
