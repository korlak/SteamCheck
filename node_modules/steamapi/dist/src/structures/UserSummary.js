import User from './User.js';
/** Persona states as indicated by https://developer.valvesoftware.com/wiki/Steam_Web_API#Public_Data */
export var UserPersonaState;
(function (UserPersonaState) {
    UserPersonaState[UserPersonaState["Offline"] = 0] = "Offline";
    UserPersonaState[UserPersonaState["Online"] = 1] = "Online";
    UserPersonaState[UserPersonaState["Busy"] = 2] = "Busy";
    UserPersonaState[UserPersonaState["Away"] = 3] = "Away";
    UserPersonaState[UserPersonaState["Snooze"] = 4] = "Snooze";
    UserPersonaState[UserPersonaState["LookingToTrade"] = 5] = "LookingToTrade";
    UserPersonaState[UserPersonaState["LookingToPlay"] = 6] = "LookingToPlay";
})(UserPersonaState || (UserPersonaState = {}));
export default class UserSummary extends User {
    /** The user's avatar in varous sizes */
    avatar;
    /** Link to the user's profile */
    url;
    /** Is this user's profile visible to you */
    visible;
    /** The user's persona state. Always 0 if profile is private */
    personaState;
    /** Flags for personState. Seems to always be 0 */
    personaStateFlags;
    /** If this user allows comments on their profile */
    allowsComments;
    /** The nickname this user has set */
    nickname;
    /** Unix Timestamp when the user last logged off */
    lastLogOffTimestamp;
    /** Unix Timestamp when the profile was created if visible */
    createdTimestamp;
    /** The user's real name if set and visible */
    realName;
    /** The user's primary group ID if set and visible */
    primaryGroupID;
    /** The game the user is currently playing if any */
    gameID;
    /** The name of the game the user is currently playing if any */
    gameName;
    /** The IP:PORT of the game server the user is currently playing on if any */
    gameServerIP;
    /** The SteamID of the game server the user is currently playing on if any */
    gameServerID;
    /** The user's country code if set and visible */
    countryCode;
    /** The user's state code if set and visible */
    stateCode;
    /** The user's city ID if set and visible */
    cityID;
    constructor(data) {
        super(data);
        this.avatar = {
            small: data.avatar,
            medium: data.avatarmedium,
            large: data.avatarfull,
            hash: data.avatarhash,
        };
        this.url = data.profileurl;
        this.createdTimestamp = data.timecreated;
        this.lastLogOffTimestamp = data.lastlogoff;
        this.realName = data.realname;
        this.nickname = data.personaname;
        this.primaryGroupID = data.primaryclanid;
        this.personaState = data.personastate;
        this.personaStateFlags = data.personastateflags;
        this.allowsComments = Boolean(data.commentpermission);
        this.visible = data.communityvisibilitystate === 3;
        this.gameID = data.gameid;
        this.gameName = data.gameextrainfo;
        this.gameServerIP = data.gameserverip;
        this.gameServerID = data.gameserversteamid;
        this.countryCode = data.loccountrycode;
        this.stateCode = data.locstatecode;
        this.cityID = data.loccityid;
    }
    /** Date when this user's account was created */
    get createdAt() {
        return this.createdTimestamp === undefined ? undefined : new Date(this.createdTimestamp * 1000);
    }
    /** Date when this user last logged off */
    get lastLogOffAt() {
        return this.lastLogOffTimestamp === undefined ? undefined : new Date(this.lastLogOffTimestamp * 1000);
    }
}
