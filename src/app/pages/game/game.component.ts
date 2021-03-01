import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { map, max } from "rxjs/operators";
import { GameStage } from "src/app/model/GameState";
import { Player } from "src/app/model/Player";
import { FirebaseService } from "src/app/services/firebase";
import * as _ from 'lodash';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent {

    
    public gameNotStarted$ : Observable<boolean>;
    public gameStarted$ : Observable<boolean>;
    public isScanning$ : Observable<boolean>;
    public scannedPlayers$ : Observable<boolean>;
    public roundStarting$ : Observable<boolean>;
    public roundStarted$ : Observable<boolean>;
    public dealtCard1$ : Observable<boolean>;
    public dealtCard2$ : Observable<boolean>;
    public dealtCard3$ : Observable<boolean>;
    public dealtCard4$ : Observable<boolean>;
    public roundFinished$ : Observable<boolean>;
    public gameEnded$ : Observable<boolean>;

    public numberOfPlayers$ : Observable<number>;
    public players$ : Observable<Player[]>;
    public roundNumber$ : Observable<number>;
    public roundStageName$ : Observable<string>;
    public winnerName$ : Observable<string>;

    constructor(private firebaseService: FirebaseService) {
        this.gameNotStarted$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.NOT_STARTED)
        );

        this.gameStarted$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.STARTED)
        );

        this.isScanning$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.SCANNING_PLAYERS)
        )
        
        this.scannedPlayers$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.SCANNED_PLAYERS)
        )

        this.roundStarting$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.ROUND_STARTING)
        );

        this.roundStarted$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.ROUND_STARTED)
        );

        this.dealtCard1$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.DEALT_CARD_1)
        );

        this.dealtCard2$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.DEALT_CARD_2)
        );
        this.dealtCard3$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.DEALT_CARD_3)
        );
        this.roundFinished$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.ROUND_FINISHED)
        );
        this.gameEnded$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.GAME_ENDED)
        );


        this.numberOfPlayers$ = this.firebaseService.numOfPlayers$;
        this.players$ = this.firebaseService.players$;

        this.roundNumber$ = this.firebaseService.roundNumber$;

        this.roundStageName$ = this.firebaseService.cardsRevealed$.pipe(
            map(number => {
                switch(number){
                    case 1: return 'pre-flop';
                    case 2: return 'flop';
                    case 3: return 'turn';

                }
            })
        );

        this.winnerName$ = this.firebaseService.players$.pipe(
            map(players => _.maxBy(players, 'money').name)
        )
    }
}