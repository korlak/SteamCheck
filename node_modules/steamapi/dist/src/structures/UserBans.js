import User from './User.js';
export default class UserBans extends User {
    /** Is this user community banned */
    communityBanned;
    /** Is this user vac banned */
    vacBanned;
    /** Number of VAC bans the user has had */
    vacBans;
    /** Number of game bans the user has had */
    gameBans;
    /**
     * Economy ban status of the user. 'none' means no economy ban.
     * 'probation' means user is on probation.
     * Not sure what other string values exist
     */
    economyBan;
    /** The number of days it has been since the user's last ban */
    daysSinceLastBan;
    constructor(data) {
        super(data);
        this.communityBanned = data.CommunityBanned;
        this.vacBanned = data.VACBanned;
        this.vacBans = data.NumberOfVACBans;
        this.gameBans = data.NumberOfGameBans;
        this.economyBan = data.EconomyBan;
        this.daysSinceLastBan = data.DaysSinceLastBan;
    }
}
