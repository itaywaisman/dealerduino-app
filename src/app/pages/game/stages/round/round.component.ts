import { Component, Input } from "@angular/core";
import { CommandType } from "src/app/model/Command";
import { FirebaseService } from "src/app/services/firebase";

@Component({
    selector: 'app-game-round',
    templateUrl: './round.component.html',
    styleUrls: ['./round.component.scss']
})
export class RoundComponent {
    @Input() roundNumber : number;
    @Input() roundStageName : string;
    @Input() nextShowCards: number;

    constructor(private firebaseService: FirebaseService) {}

    public openNextRound() {
        this.firebaseService.sendCommand({
            command: CommandType.COMMAND_SHOW_CARD_1,
            arg1: this.nextShowCards,
            arg2: 0,
        })
    }

}