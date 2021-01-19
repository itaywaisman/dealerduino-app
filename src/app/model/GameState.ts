export interface GameState {
    game_state: GameStage,
    player_num: number
}

export enum GameStage {
    NOT_STARTED = 0x000,
    STARTED = 0x001,
    SCANNING_PLAYERS = 0x002,
    SCANNED_PLAYERS = 0x003,
    ROUND_STARTING = 0x004,
    ROUND_STARTED = 0x010,
    DEALT_CARD_1 = 0x011,
    DEALT_CARD_2 = 0x012,
    DEALT_CARD_3 = 0x013,
    DEALT_CARD_4 = 0x014,
    ROUND_FINISHED = 0x019,
    GAME_ENDED = 0x100
}