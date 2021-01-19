import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { Command, CommandType } from "src/app/model/Command";
import { GameStage } from "src/app/model/GameState";
import { Player } from "src/app/model/Player";


@Injectable()
export class FirebaseService {

    readonly gameStage$ : Observable<GameStage>;
    readonly numOfPlayers$ : Observable<number>;
    readonly roundNumber$: Observable<number>;
    readonly cardsRevealed$: Observable<number>;
    readonly players$ : Observable<Player[]>;

    constructor(private db: AngularFireDatabase) {
        this.gameStage$ = this.db.object<GameStage>('state/game_state').valueChanges();
        this.numOfPlayers$ = this.db.object<number>('state/player_num').valueChanges();
        this.roundNumber$ = this.db.object<number>('state/roundNumber').valueChanges();
        this.cardsRevealed$ = this.db.object<number>('state/cardsRevealed').valueChanges();
        this.players$ = this.db.object<Player[]>('state/players').valueChanges();
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
            command: CommandType.START_ROUND,
            arg1: 0,
            arg2: 0
        })
    }

    public scanPlayers() {
        this.sendCommand({
            command: CommandType.SCAN_PLAYERS,
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

    public nextRound() {

        let playersRef = this.db.object<Player[]>('state/players');
        playersRef.valueChanges().subscribe(players => {
            
            let playersWithMoney = 0;
            for(let player of players) {
                if(player.money > 0) playersWithMoney ++;
            }

            if(playersWithMoney > 1) {
                let roundNumberRef = this.db.object<number>('state/roundNumber')
                roundNumberRef.valueChanges().subscribe(currentRoundNumber => {
                    roundNumberRef.set(currentRoundNumber + 1);
                })

                let cardsRevealedRef = this.db.object<number>('state/cardsRevealed');
                cardsRevealedRef.set(0);
            } else {
                this.gameEnded();
            }
            
        })
    }

    public gameEnded() {
        let gameStateRef = this.db.object<number>('state/game_state');
        gameStateRef.set(GameStage.GAME_ENDED);
        this.sendCommand({
            command: CommandType.RESET,
            arg1: 0,
            arg2: 0
        })
    }
}