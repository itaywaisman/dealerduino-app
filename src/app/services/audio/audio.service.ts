import { Injectable } from "@angular/core";

@Injectable()
export class AudioService {
    public playAudio(){
        let audio = new Audio();
        audio.src = "../../assets/audio/click.wav";
        audio.load();
        audio.play();
      }
}