import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GameStage } from "src/app/model/GameState";
import { FirebaseService } from "src/app/services/firebase";


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent {

    
    public gameNotStarted$ : Observable<boolean>;
    public gameStarted$ : Observable<boolean>;
    public scannedPlayers$ : Observable<boolean>;
    public roundStarted$ : Observable<boolean>;
    public dealtCard1$ : Observable<boolean>;
    public dealtCard2$ : Observable<boolean>;
    public dealtCard3$ : Observable<boolean>;
    public dealtCard4$ : Observable<boolean>;
    public roundFinished$ : Observable<boolean>;

    public numberOfPlayers$ : Observable<number>;
    public players$ : Observable<{ name: string }[]>;
    public isScanning$ : Observable<boolean>;

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
        this.dealtCard4$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.DEALT_CARD_4)
        );
        this.roundFinished$ = this.firebaseService.gameStage$.pipe(
            map(stage => stage == GameStage.ROUND_FINISHED)
        );

        this.numberOfPlayers$ = this.firebaseService.numOfPlayers$;
        this.players$ = this.firebaseService.numOfPlayers$.pipe(
            map((numOfPlayers) => {
                return [...Array(numOfPlayers).keys()].map((idx) => {
                    return { name : 'player' +idx}
                })
            })
        )
    }
}