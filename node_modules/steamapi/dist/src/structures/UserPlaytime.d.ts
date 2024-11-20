export default class UserPlaytime<G> {
    /** The game with various levels of information based on parameters passed to getUserOwnedGames()  */
    game: G;
    /** The total number of minutes the user has played this game */
    minutes: number;
    /** The number of minutes played in the last 2 weeks */
    recentMinutes: number;
    /** The number of minutes played on Windows (not accurate) */
    windowsMinutes: number;
    /** The number of minutes played on Mac (not accurate) */
    macMinutes: number;
    /** The number of minutes played on Linux (not accurate) */
    linuxMinutes: number;
    /** The number of minutes played while offline */
    disconnectedMinutes: number;
    /** UNIX Timestamp for when the user last played this game if the user has ever launched the game */
    lastPlayedTimestamp?: number;
    constructor(data: any, game: G);
    /** Date when uaer last played this game */
    get lastPlayedAt(): Date | undefined;
}
