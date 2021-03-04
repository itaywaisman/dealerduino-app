import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import * as _ from 'lodash';

import { Command, CommandType } from "src/app/model/Command";
import { GameStage, GameState } from "src/app/model/GameState";
import { Player } from "src/app/model/Player";
import { map } from "rxjs/operators";


@Injectable()
export class FirebaseService {

    readonly gameStage$ : Observable<GameStage>;
    readonly state$ : Observable<GameState>;
    readonly numOfPlayers$ : Observable<number>;
    readonly roundNumber$: Observable<number>;
    readonly cardsRevealed$: Observable<number>;
    readonly players$ : Observable<Player[]>;
    readonly highestScores$ : Observable<_.Dictionary<number>>;

    constructor(private db: AngularFireDatabase) {
        this.gameStage$ = this.db.object<GameStage>('state/game_state').valueChanges();
        this.state$ = this.db.object<GameState>('state').valueChanges();
        this.numOfPlayers$ = this.db.object<number>('state/player_num').valueChanges();
        this.roundNumber$ = this.db.object<number>('state/roundNumber').valueChanges();
        this.cardsRevealed$ = this.db.object<number>('state/cardsRevealed').valueChanges();
        this.players$ = this.db.object<Player[]>('state/players').valueChanges();
        this.highestScores$ = this.db.list<{gameId: number, winner: string}>('log').valueChanges().pipe(
            map( logs => logs.filter(log => !!log.winner)),
            map( logs => _.countBy(logs, 'winner')),
        )
    }

    public savePlayers(players: Player[]) {
        let playersRef = this.db.object<{name: string}[]>('state/players');
        playersRef.set(players);
    }

    public sendCommand(command: Command) {
        let cmdRef = this.db.object<Command>('cmd');
        cmdRef.set(command);
    }

    public startGame(players: Player[]) {
        this.savePlayers(players);
        this.setRoundNumber(1);
        this.setCardsRevealed(0);
        this.sendCommand({
            command: CommandType.COMMAND_START_ROUND,
            arg1: 0,
            arg2: 0
        })
    }

    public scanPlayers() {
        this.sendCommand({
            command: CommandType.COMMAND_SCAN_PLAYERS,
            arg1: 0,
            arg2: 0
        })
    }
    
    public setRoundNumber(round: number) {
        let roundNumberRef = this.db.object<number>('state/roundNumber');
        roundNumberRef.set(round);
    }

    public setCardsRevealed(cardsRevealed: number) {
        let cardsRevealedRef = this.db.object<number>('state/cardsRevealed');
        cardsRevealedRef.set(cardsRevealed);
    }

    public endRound() {
        let gameStateRef = this.db.object<number>('state/game_state');
        gameStateRef.set(GameStage.GAME_STATE_ROUND_FINISHED);
    }

    public nextRound() {

        let playersRef = this.db.object<Player[]>('state/players');
        let playerSubscription = playersRef.valueChanges().subscribe(players => {
            playerSubscription.unsubscribe();
            let playersWithMoney = 0;
            for(let player of players) {
                if(player.money > 0) playersWithMoney ++;
            }

            if(playersWithMoney > 1) {
                let roundNumberRef = this.db.object<number>('state/roundNumber')
                let subscription = roundNumberRef.valueChanges().subscribe(currentRoundNumber => {
                    subscription.unsubscribe();
                    roundNumberRef.set(currentRoundNumber + 1);
                });

                let cardsRevealedRef = this.db.object<number>('state/cardsRevealed');
                cardsRevealedRef.set(0);
                this.sendCommand({
                    command: CommandType.COMMAND_START_ROUND,
                    arg1: 0,
                    arg2: 0
                })
            } else {
                this.gameEnded();
            }
            
        })
    }

    public gameEnded() {
        let gameStateRef = this.db.object<number>('state/game_state');
        gameStateRef.set(GameStage.GAME_STATE_GAME_ENDED);
        this.sendCommand({
            command: CommandType.COMMAND_RESET,
            arg1: 0,
            arg2: 0
        })
    }

    public reset() {
        let gameStateRef = this.db.object<number>('state/game_state');
        gameStateRef.set(GameStage.GAME_STATE_NOT_STARTED);
        let numOfPlayersRef = this.db.object<number>('state/num_of_players');
        numOfPlayersRef.set(0);
        let roundRef = this.db.object<number>('state/roundNumber');
        roundRef.set(1);
        this.sendCommand({
            command: CommandType.COMMAND_RESET,
            arg1: 0,
            arg2: 0
        });
    }
}