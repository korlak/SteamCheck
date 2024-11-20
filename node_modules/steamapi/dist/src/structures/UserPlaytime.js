export default class UserPlaytime {
    /** The game with various levels of information based on parameters passed to getUserOwnedGames()  */
    game;
    /** The total number of minutes the user has played this game */
    minutes;
    /** The number of minutes played in the last 2 weeks */
    recentMinutes;
    /** The number of minutes played on Windows (not accurate) */
    windowsMinutes;
    /** The number of minutes played on Mac (not accurate) */
    macMinutes;
    /** The number of minutes played on Linux (not accurate) */
    linuxMinutes;
    /** The number of minutes played while offline */
    disconnectedMinutes;
    /** UNIX Timestamp for when the user last played this game if the user has ever launched the game */
    lastPlayedTimestamp;
    constructor(data, game) {
        this.game = game;
        this.minutes = data.playtime_forever;
        this.recentMinutes = data.playtime_2weeks || 0;
        this.windowsMinutes = data.playtime_windows_forever;
        this.macMinutes = data.playtime_mac_forever;
        this.linuxMinutes = data.playtime_linux_forever;
        this.disconnectedMinutes = data.playtime_disconnected || 0;
        this.lastPlayedTimestamp = data.rtime_last_played;
    }
    /** Date when uaer last played this game */
    get lastPlayedAt() {
        return this.lastPlayedTimestamp === undefined ? undefined : new Date(this.lastPlayedTimestamp * 1000);
    }
}
