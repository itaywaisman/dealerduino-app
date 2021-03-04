import { Component } from "@angular/core";
import { Command } from "protractor";
import { CommandType } from "src/app/model/Command";
import { AudioService } from "src/app/services/audio";
import { FirebaseService } from "src/app/services/firebase";


@Component({
    selector: 'app-debug',
    templateUrl: "./debug.component.html",
    styleUrls: ["./debug.component.scss"]
})
export class DebugComponent {
    
public isopen: boolean = false;

    constructor(private firebaseService: FirebaseService, private audioService: AudioService) {}
    
    public dealCard(player: number) {
        this.firebaseService.sendCommand({
            command: CommandType.COMMAND_DEAL_CARD,
            arg1: this.isopen ? 1: 0,
            arg2: player
        });
        this.audioService.playAudio();
    }

    public scan() {
        this.firebaseService.sendCommand({
            command: CommandType.COMMAND_SCAN_PLAYERS,
            arg1: 0,
            arg2: 0
        });
        this.audioService.playAudio();
    }

    public celebrate() {
        this.firebaseService.sendCommand({
            command: CommandType.COMMAND_CELEBRATE,
            arg1: 0,
            arg2:0,
        });
        this.audioService.playAudio();
    }
}