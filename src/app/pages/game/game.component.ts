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
  public roundStarted$ : Observable<boolean>;
  public dealtCard1Started$ : Observable<boolean>;
  public dealtCard2Started$ : Observable<boolean>;
  public dealtCard3Started$ : Observable<boolean>;
  public dealtCard4Started$ : Observable<boolean>;
  public roundFinished$ : Observable<boolean>;
  public error$ : Observable<boolean>;

  constructor(private firebaseService: FirebaseService) {
    this.gameNotStarted$ = firebaseService.gameStage$.pipe(
        map(stage => stage == GameStage.NOT_STARTED)
    );

    this.gameStarted$ = firebaseService.gameStage$.pipe(
        map(stage => stage == GameStage.STARTED)
    );

    this.roundStarted$ = firebaseService.gameStage$.pipe(
        map(stage => stage == GameStage.ROUND_STARTED)
    );

    this.dealtCard1Started$ = firebaseService.gameStage$.pipe(
        map(stage => stage == GameStage.DEALT_CARD_1)
    );

    this.dealtCard2Started$ = firebaseService.gameStage$.pipe(
        map(stage => stage == GameStage.DEALT_CARD_2)
    );
    this.dealtCard3Started$ = firebaseService.gameStage$.pipe(
        map(stage => stage == GameStage.DEALT_CARD_3)
    );
    this.dealtCard4Started$ = firebaseService.gameStage$.pipe(
        map(stage => stage == GameStage.DEALT_CARD_4)
    );
    this.roundFinished$ = firebaseService.gameStage$.pipe(
        map(stage => stage == GameStage.ROUND_FINISHED)
    );
    this.error$ = firebaseService.gameStage$.pipe(
        map(stage => stage == GameStage.ERROR)
    );
  }
}