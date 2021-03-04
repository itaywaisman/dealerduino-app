import { Component, Input } from "@angular/core";
import { CommandType } from "src/app/model/Command";
import { AudioService } from "src/app/services/audio";
import { FirebaseService } from "src/app/services/firebase";

@Component({
    selector: 'app-game-round',
    templateUrl: './round.component.html',
    styleUrls: ['./round.component.scss']
})
export class RoundComponent {
    @Input() roundNumber : number;
    @Input() roundStageName : string;
    @Input() nextCommand: number;

    constructor(private firebaseService: FirebaseService, private audioService: AudioService) {}

    public openNextCard() {
        this.audioService.playAudio();
        this.firebaseService.sendCommand({
            command: this.nextCommand,
            arg1: 0,
            arg2: 0,
        })
    }

    public endRound() {
        this.firebaseService.endRound();
    }

}