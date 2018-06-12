import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];


  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
      this.playBark();

    }  else {
      this.oddNumbers.push(firedNumber);
      this.playFart();

    }
   }
   playFart(){
    let audio = new Audio();
    audio.src = "../assets/sounds/fart.mp3";
    audio.load();
    audio.play();
}

    playBark(){
     let audio = new Audio();
     audio.src = "../assets/sounds/bark.mp3";
     audio.load();
     audio.play();
    }


  title = 'app';
}
