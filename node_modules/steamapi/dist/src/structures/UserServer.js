export default class UserServer {
    /** The SteamID of this game server */
    id;
    /** App ID this server is for */
    appID;
    /** The login token for this server */
    token;
    /** The memo/name for this server */
    memo;
    /** Has this server been deleted */
    deleted;
    /** Has this server expired */
    expired;
    /** Unix Timestamp for when last time this server token was logged onto */
    lastLogonTimestamp;
    constructor(data) {
        this.id = data.steamid;
        this.appID = data.appid;
        this.token = data.login_token;
        this.memo = data.memo;
        this.deleted = data.is_deleted;
        this.expired = data.is_expired;
        this.lastLogonTimestamp = data.rt_last_logon;
    }
    /** `lastLogonTimestamp` as a Date object */
    get lastLogonAt() {
        return new Date(this.lastLogonTimestamp * 1000);
    }
}
