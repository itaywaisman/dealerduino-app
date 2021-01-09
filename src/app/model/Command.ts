export interface Command {
    command: CommandType,
    arg1 : number,
    arg2: number
}

export enum CommandType {
    DO_NOTHING = 0,
    START_GAME = 1,
    SCAN_PLAYERS = 2,
    START_ROUND = 3,
    SHOW_CARD = 4,
    PLAYER_QUIT = 5,
    RESET = 9
}