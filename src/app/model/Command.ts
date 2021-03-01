export interface Command {
    command: CommandType,
    arg1 : number,
    arg2: number
}

export enum CommandType {
    COMMAND_DO_NOTHING      = 0,
    COMMAND_START_GAME      = 1,
    COMMAND_SCAN_PLAYERS    = 2,
    COMMAND_START_ROUND     = 3,
    COMMAND_SHOW_CARD_1     = 4,
    COMMAND_SHOW_CARD_2     = 5,
    COMMAND_SHOW_CARD_3     = 6,
    COMMAND_PLAYER_QUIT     = 998,
    COMMAND_RESET           = 999,
}