import { Component } from "@angular/core";
import { CommandType } from "src/app/model/Command";
import { AudioService } from "src/app/services/audio";
import { FirebaseService } from "src/app/services/firebase";

@Component({
    selector: 'app-game-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private firebaseService: FirebaseService, private audioService: AudioService){}

    public startGame() {
        this.audioService.playAudio();
        this.firebaseService.sendCommand({
            command: CommandType.COMMAND_START_GAME,
            arg1: 0,
            arg2: 0
        });
    }
}