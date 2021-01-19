import { Component } from "@angular/core";
import { CommandType } from "src/app/model/Command";
import { FirebaseService } from "src/app/services/firebase";

@Component({
    selector: 'app-game-scan-players',
    templateUrl: './scan-players.component.html',
    styleUrls: ['./scan-players.component.scss']
})
export class ScanPlayersComponent {
    
    constructor(private firebase: FirebaseService) {}

    public scanPlayers() {
        this.firebase.scanPlayers();
    }
}