import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { CommandType } from "src/app/model/Command";
import { FirebaseService } from "src/app/services/firebase";

@Component({
    selector: 'app-game-player-names',
    templateUrl: './player-names.component.html',
    styleUrls: ['./player-names.component.scss']
})
export class PlayerNamesComponent implements OnInit {
    
    public players:{name: string}[] = [];
    private _numberOfPlayers: number = 0;
    @Input() set numberOfPlayers(value : number) {
        this.players = [...Array(value).keys()].map((idx) => {
            return {
                name: 'Player ' + idx
            }
        })
        this._numberOfPlayers = value;
    }
    get numberOfPlayers() : number {
        return this._numberOfPlayers;
    }


    public isNumOfPlayersCorrect: boolean = false;

    constructor(private firebaseService: FirebaseService) {
        
    }
    ngOnInit(): void {
        this.players = [...Array(this.numberOfPlayers).keys()].map((idx) => {
            return {
                name: 'Player ' + idx
            }
        })
        console.log(this.players)
    }

    

    public incorrectNumOfPlayers() {
        this.firebaseService.scanPlayers();
        this.isNumOfPlayersCorrect = false;
    }

    public correctNumOfPlayers() {
        this.isNumOfPlayersCorrect = true;
    }

    public startRound() {
        const finalPlayers = this.players.map( player => {return {...player, money: 100}})
        this.firebaseService.savePlayers(finalPlayers);

        this.firebaseService.sendCommand({
            command: CommandType.COMMAND_START_ROUND,
            arg1: 0,
            arg2: 0
        })
    }
}