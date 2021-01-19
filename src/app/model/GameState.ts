export interface GameState {
    game_state: GameStage,
    player_num: number
}

export enum GameStage {
    NOT_STARTED = 0,
    STARTED = 1,
    SCANNING_PLAYERS = 2,
    SCANNED_PLAYERS = 3,
    ROUND_STARTED = 4,
    DEALT_CARD_1 = 5,
    DEALT_CARD_2 = 6,
    DEALT_CARD_3 = 7,
    DEALT_CARD_4 = 8,
    ROUND_FINISHED = 9
}