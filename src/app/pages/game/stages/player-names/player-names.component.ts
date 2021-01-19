import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { CommandType } from "src/app/model/Command";
import { FirebaseService } from "src/app/services/firebase";

@Component({
    selector: 'app-game-player-names',
    templateUrl: './player-names.component.html',
    styleUrls: ['./player-names.component.scss']
})
export class PlayerNamesComponent {
    

    @Input() numberOfPlayers: number = 0;
    @Input() isScanning: boolean = true;
    @Input() players: [] = [];


    public isNumOfPlayersCorrect: boolean = false;

    constructor(private firebaseService: FirebaseService) {
        
    }

    public incorrectNumOfPlayers() {
        this.firebaseService.scanPlayers();
        this.isNumOfPlayersCorrect = false;
    }

    public correctNumOfPlayers() {
        this.isNumOfPlayersCorrect = true;
    }

    public startRound() {
        this.firebaseService.sendCommand({
            command: CommandType.START_ROUND,
            arg1: 0,
            arg2: 0
        })
    }
}