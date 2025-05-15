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

    shadow1: HTMLElement;

    numberDialog = -1;

    currentWorldPos: Vector = vec(0, 0);

    constructor(public scene: Scene, messages: string[]) {
        const rootElement = document.getElementById('dialog');
        const dialogButton = document.getElementById('dialog-button');
        const dialogText = document.getElementById('dialog-text');

        const shadow1 = document.getElementById('shadow-background-plug') 

      setTimeout( () => {
          this.show();
          this.anotherFunc();
      }, 0)


        if (rootElement && dialogButton && dialogText) {
            this.rootElement = rootElement;
            this.dialogButton = dialogButton;
            this.dialogText = dialogText;
            this.shadow1 = shadow1;
            this.messages = messages;

            this.dialogButton.addEventListener('click', evt => {
              this.anotherFunc();
            });

            // this.removeUnitButton.addEventListener('click', evt => {

            // });
        } else {
            throw Error("Could not initialize menu, element with id='menu'");
        }
    }

anotherFunc(){
                this.dialogText.textContent = '';
              this.numberDialog++;
              if( this.numberDialog < this.messages.length) {
                this.typeWriter()
              } else {
                this.hide();
              }
              // this.dialogText.textContent = messages[this.numberDialog];
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
        this.shadow1.classList.remove('element-hide')
        this.rootElement.classList.remove('expansion-hide')
        this.rootElement.classList.add('element-show');
    }

    hide() {
        this.rootElement.classList.remove('element-show');
        this.rootElement.classList.add('expansion-hide')
        this.shadow1.classList.add('element-hide');
    }
}