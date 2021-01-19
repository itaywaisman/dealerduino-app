import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { Command, CommandType } from "src/app/model/Command";
import { GameStage } from "src/app/model/GameState";


@Injectable()
export class FirebaseService {

    readonly gameStage$ : Observable<GameStage>;
    readonly numOfPlayers$ : Observable<number>;
    readonly isScanning$: Observable<boolean>;

    constructor(private db: AngularFireDatabase) {
        this.gameStage$ = this.db.object<GameStage>('state/game_state').valueChanges();
        this.numOfPlayers$ = this.db.object<number>('state/player_num').valueChanges();
        this.isScanning$ = this.db.object<boolean>('state/is_scanning').valueChanges();
    }

    public savePlayerNames(players: {name: string}[]) {
        let playersRef = this.db.object<{name: string}[]>('state/players');
        playersRef.set(players);
    }

    public sendCommand(command: Command) {
        let cmdRef = this.db.object<Command>('cmd');
        cmdRef.set(command);
    }

    public scanPlayers() {
        this.sendCommand({
            command: CommandType.SCAN_PLAYERS,
            arg1: 0,
            arg2: 0
        })
    }
    



}