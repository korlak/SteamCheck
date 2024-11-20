import UserBadge from './UserBadge.js';
export default class UserBadges {
    /** Badges this user owns */
    badges;
    /** The total amount of XP this user has */
    xp;
    /** The amount of XP remaining for this user to reach the next level */
    xpRemaining;
    /** This user's current level */
    level;
    /** The amount of XP it took to reach this user's level (e.g. reaching level 26 requires 4800 XP) */
    levelXP;
    constructor(data) {
        this.badges = data.badges ? data.badges.map((badge) => new UserBadge(badge)) : [];
        this.xp = data.player_xp;
        this.xpRemaining = data.player_xp_needed_to_level_up;
        this.level = data.player_level;
        this.levelXP = data.player_xp_needed_current_level;
    }
}
