import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { map, max } from "rxjs/operators";
import { GameStage, MachineState } from "src/app/model/GameState";
import { Player } from "src/app/model/Player";
import { FirebaseService } from "src/app/services/firebase";
import * as _ from 'lodash';
import { state } from "@angular/animations";

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
    
    public dealingCard1$ : Observable<boolean>;
    public dealtCard1$ : Observable<boolean>;
    
    public dealingCard2$ : Observable<boolean>;
    public dealtCard2$ : Observable<boolean>;

    public dealingCard3$ : Observable<boolean>;
    public dealtCard3$ : Observable<boolean>;
    
    public roundFinished$ : Observable<boolean>;
    public gameEnded$ : Observable<boolean>;

    public numberOfPlayers$ : Observable<number>;
    public players$ : Observable<Player[]>;
    public roundNumber$ : Observable<number>;
    public roundStageName$ : Observable<string>;
    public winnerName$ : Observable<string>;

    constructor(private firebaseService: FirebaseService) {
        this.gameNotStarted$ = this.firebaseService.state$.pipe(
            map(state => state.game_state == GameStage.GAME_STATE_NOT_STARTED && state.machine_state == MachineState.MACHINE_STATE_IDLE)
        );

        this.gameStarted$ = this.firebaseService.state$.pipe(
            map(state => state.game_state == GameStage.GAME_STATE_STARTED && state.machine_state == MachineState.MACHINE_STATE_IDLE)
        );

        this.isScanning$ = this.firebaseService.state$.pipe(
            map(state => state.machine_state == MachineState.MACHINE_STATE_SCANNING_PLAYERS)
        );
        
        this.scannedPlayers$ = this.firebaseService.state$.pipe(
            map(state => state.game_state == GameStage.GAME_STATE_SCANNED_PLAYERS && state.machine_state == MachineState.MACHINE_STATE_IDLE)
        );
        

        this.roundStarting$ = this.firebaseService.state$.pipe(
            map(state => state.machine_state == MachineState.MACHINE_STATE_ROUND_STARTING)
        );

        this.roundStarted$ = this.firebaseService.state$.pipe(
            map(state => state.game_state == GameStage.GAME_STATE_ROUND_STARTED && state.machine_state == MachineState.MACHINE_STATE_IDLE)
        );


        this.dealingCard1$ = this.firebaseService.state$.pipe(
            map(state => state.machine_state == MachineState.MACHINE_STATE_DEALING_CARD_1)
        );

        this.dealtCard1$ = this.firebaseService.state$.pipe(
            map(state => state.game_state == GameStage.GAME_STATE_DEALT_CARD_1 && state.machine_state == MachineState.MACHINE_STATE_IDLE)
        );

        this.dealingCard2$ = this.firebaseService.state$.pipe(
            map(state => state.machine_state == MachineState.MACHINE_STATE_DEALING_CARD_2)
        );
        this.dealtCard2$ = this.firebaseService.state$.pipe(
            map(state => state.game_state == GameStage.GAME_STATE_DEALT_CARD_2 && state.machine_state == MachineState.MACHINE_STATE_IDLE)
        );

        this.dealingCard3$ = this.firebaseService.state$.pipe(
            map(state => state.machine_state == MachineState.MACHINE_STATE_DEALING_CARD_3)
        );
        this.dealtCard3$ = this.firebaseService.state$.pipe(
            map(state => state.game_state == GameStage.GAME_STATE_DEALT_CARD_3 && state.machine_state == MachineState.MACHINE_STATE_IDLE)
        );

        this.roundFinished$ = this.firebaseService.state$.pipe(
            map(state => state.game_state == GameStage.GAME_STATE_ROUND_FINISHED && state.machine_state == MachineState.MACHINE_STATE_IDLE)
        );
        this.gameEnded$  = this.firebaseService.state$.pipe(
            map(state => state.game_state == GameStage.GAME_STATE_GAME_ENDED && state.machine_state == MachineState.MACHINE_STATE_IDLE)
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