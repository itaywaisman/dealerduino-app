import { Component } from "@angular/core";
import { CommandType } from "src/app/model/Command";
import { AudioService } from "src/app/services/audio";
import { FirebaseService } from "src/app/services/firebase";

@Component({
    selector: 'app-game-scan-players',
    templateUrl: './scan-players.component.html',
    styleUrls: ['./scan-players.component.scss']
})
export class ScanPlayersComponent {
    
    constructor(private firebase: FirebaseService, private audioService: AudioService) {}

    public scanPlayers() {
        this.audioService.playAudio();
        this.firebase.scanPlayers();
    }
}