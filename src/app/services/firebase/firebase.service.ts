import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { Command } from "src/app/model/Command";
import { GameStage } from "src/app/model/GameState";


@Injectable()
export class FirebaseService {

    readonly gameStage$ : Observable<GameStage>;
    readonly numOfPlayers$ : Observable<number>;

    constructor(private db: AngularFireDatabase) {
        this.gameStage$ = this.db.object<GameStage>('state/game_sate').valueChanges();
        this.numOfPlayers$ = this.db.object<number>('state/player_num').valueChanges();
    }

    public sendCommand(command: Command) {
        let cmdRef = this.db.object<Command>('cmd');
        cmdRef.set(command);
    }
    



}