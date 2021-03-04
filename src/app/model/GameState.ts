export interface GameState {
    machine_state: MachineState,
    game_state: GameStage,
    player_num: number
}

export enum GameStage {
    GAME_STATE_NOT_STARTED =             0,
    GAME_STATE_STARTED =                 1,
    GAME_STATE_SCANNED_PLAYERS =         3,
    GAME_STATE_ROUND_STARTED =           10,
    GAME_STATE_DEALT_CARD_1 =            12,
    GAME_STATE_DEALT_CARD_2 =            22,
    GAME_STATE_DEALT_CARD_3 =            32,
    GAME_STATE_ROUND_FINISHED =          40,
    GAME_STATE_GAME_ENDED =              100,
}
export enum MachineState {
    MACHINE_STATE_IDLE =                    0,
    MACHINE_STATE_RESETING =                1,
    MACHINE_STATE_SCANNING_PLAYERS =        2,
    MACHINE_STATE_ROUND_STARTING =          4,
    MACHINE_STATE_DEALING_CARD_1 =          11,
    MACHINE_STATE_DEALING_CARD_2 =          21,
    MACHINE_STATE_DEALING_CARD_3 =          31,
}
