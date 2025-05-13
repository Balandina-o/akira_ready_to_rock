import { Actor, Color, Scene, Vector, vec } from "excalibur";

export const calculateExPixelConversion = (screen: ex.Screen) => {
    const origin = screen.worldToPageCoordinates(Vector.Zero);
    const singlePixel = screen.worldToPageCoordinates(vec(1, 0)).sub(origin);
    const pixelConversion = singlePixel.x;
    document.documentElement.style.setProperty('--pixel-conversion', pixelConversion.toString());
}

export class DialogueBackground {
    messages: string[];
    rootElement: HTMLElement;
    dialogButton: HTMLElement;
    dialogText: HTMLElement;
    numberDialog = -1;

    currentWorldPos: Vector = vec(0, 0);

    constructor(public scene: Scene, messages: string[]) {
        scene.input.pointers.on('down', (evt) => {
          console.log('32423422423');
            this.show();
            this.currentWorldPos = scene.engine.screen.pageToWorldCoordinates(vec(evt.pagePos.x, evt.pagePos.y));
            document.documentElement.style.setProperty('--pointer-x', evt.pagePos.x.toString() + 'px');
            document.documentElement.style.setProperty('--pointer-y', evt.pagePos.y.toString() + 'px');
        });

        const rootElement = document.getElementById('dialog');
        const dialogButton = document.getElementById('dialog-button');
        const dialogText = document.getElementById('dialog-text');

        if (rootElement && dialogButton && dialogText) {
            this.rootElement = rootElement;
            this.dialogButton = dialogButton;
            this.dialogText = dialogText;
            this.messages = messages;

            this.dialogButton.addEventListener('click', evt => {
              this.dialogText.textContent = '';
              this.numberDialog++;
              if( this.numberDialog < this.messages.length) {
                this.typeWriter()
              } else {
                this.hide();
              }
              // this.dialogText.textContent = messages[this.numberDialog];
            });

            // this.removeUnitButton.addEventListener('click', evt => {

            // });
        } else {
            throw Error("Could not initialize menu, element with id='menu'");
        }
    }
typeWriter() {
  var i = 0;
  var speed = 50;
  console.log(this.messages[this.numberDialog], this.messages, this.numberDialog);
  let self = this; // Preserve this
  function type() {
    if (i < self.messages[self.numberDialog].length) {
      console.log(i, self.messages[self.numberDialog].length);
      document.getElementById("dialog-text").innerHTML += self.messages[self.numberDialog].charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

    show() {
        this.rootElement.classList.remove('hide');
        this.rootElement.classList.add('show');
    }

    hide() {
        this.rootElement.classList.remove('show');
        this.rootElement.classList.add('hide');
    }
}