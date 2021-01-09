export interface GameState {
    game_state: GameStage,
    player_num: number
}

export enum GameStage {
    NOT_STARTED = 0,
    STARTED = 1,
    ROUND_STARTED = 2,
    DEALT_CARD_1 = 12,
    DEALT_CARD_2 = 13,
    DEALT_CARD_3 = 14,
    DEALT_CARD_4 = 15,
    ROUND_FINISHED = 16,
    ERROR = 100
}