/** Модeль диалога с пользователем. */


import { AkiraOfficialArt } from "@/main-menu/AkiraOfficialArt";
import { Scene } from "excalibur";

export class Dialogue extends Scene {
  // Массив сообщений, адресованных пользователю
  messages: string[];

  dialogContainer = document.getElementById( 'dialog' );
  nextMessageButton = document.getElementById( 'next-button' );
  skipAllMessagesButton = document.getElementById( 'skip-all-button' );
  dialogTextContainer = document.getElementById( 'dialog-text' );

  shadowBackgroundPlug = document.getElementById( 'shadow-background-plug' ) 

  // При активации идет увеличение на единицу
  messageCount = -1;

  constructor( messages: string[] ) {
      super();
        this.messages = messages;

        this.onInit()
    }

    onInit(){
        // После прогрузки элементов вызываем функцию отображения диалога и проигрыша первого сообщения
        setTimeout( () => {
            this.show();
            this.triggerNextMessage();
        }, 0 )

        this.nextMessageButton.addEventListener('click', evt => {
            this.triggerNextMessage();
        });

        this.skipAllMessagesButton.addEventListener('click', evt => {
            this.skipAllMessages();
        });

        document.addEventListener( 'keyup', event => {

            console.log( 'ты нажал enter, мои поздравления!' );
        });

        const akiraOfficialArt = new AkiraOfficialArt();
        this.add(akiraOfficialArt);
    }

    skipAllMessages(){
        this.hide();
    }

    triggerNextMessage(){
        this.dialogTextContainer.textContent = '';
        this.messageCount++;

        if( this.messageCount < this.messages.length ) {
            this.typeCharByChar()
        } else {
            this.hide();
        }
    }

    typeCharByChar() {
        let i = 0;
        let speed = 50;

        let self = this; // Preserve this

        function type() {
            if ( i < self.messages[ self.messageCount ].length ) {
                document.getElementById( 'dialog-text' ).innerHTML += self.messages[ self.messageCount ].charAt( i );
                i++;
                setTimeout( type, speed );
            }
        }
        type();
    }

    show() {
        this.shadowBackgroundPlug.classList.remove( 'element-hide' )
        this.dialogContainer.classList.remove( 'expansion-hide' )
        this.dialogContainer.classList.add( 'element-show' );
    }

    hide() {
        this.dialogContainer.classList.remove( 'element-show' );
        this.dialogContainer.classList.add( 'expansion-hide' )
        this.shadowBackgroundPlug.classList.add( 'element-hide' );
    }
}
