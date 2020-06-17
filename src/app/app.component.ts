import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  audio2 = new Audio(" ../../../assets/giornos.mp3");
  title = 'my-name-is-pl4y';

  buttonClicked: boolean = false;

  onClick() {
    console.log(`oh no you didn't`);
    this.buttonClicked = !this.buttonClicked;
    this.playGiorno();
  }

  pause(){
    this.audio2.pause();
    this.buttonClicked = !this.buttonClicked;
  }

  playGiorno() {
    let audio = new Audio();
    audio.src = " ../../../assets/giornos.mp3";
    this.audio2.load();
    this.audio2.play();
  }
}
