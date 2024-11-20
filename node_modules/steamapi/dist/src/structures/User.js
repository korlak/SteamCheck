export default class User {
    /** This user's Steam ID */
    steamID;
    constructor(data) {
        this.steamID = data.steamID || data.steamid || data.SteamId; // c'mon Valve
    }
    /** The permalink to this user's profile */
    get profileURL() {
        return `https://steamcommunity.com/profiles/${this.steamID}`;
    }
}
