import { Component, Input } from "@angular/core";
import { Player } from "src/app/model/Player";
import { AudioService } from "src/app/services/audio";
import { FirebaseService } from "src/app/services/firebase";

@Component({
    selector: 'app-game-money-status',
    templateUrl: './money-status.component.html',
    styleUrls: ['./money-status.component.scss']
})
export class MoneyStatusComponent {

    public randomTitle : string = "";

    @Input() public players : Player[];

    constructor(private firebaseService: FirebaseService, private audioService: AudioService) {

        const randomTitles = [
            "WOW!!!!",
            "Did ya see that FLOP??",
            "AMAZING!!!",
            "The stakes are ON!"
        ]

        const idx = Math.floor(Math.random() * randomTitles.length)

        this.randomTitle = randomTitles[idx]
    }


    public nextRound() {
        this.audioService.playAudio();
        this.firebaseService.savePlayers(this.players)
        this.firebaseService.nextRound();
    }
}