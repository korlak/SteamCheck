import User from './User.js';
import UserAchievement from './UserAchievement.js';
export default class UserStats extends User {
    /** Name of this game */
    game;
    /** The achievements this user has unlocked */
    achievements;
    /** Some game stats about the user */
    stats;
    constructor(data) {
        super(data);
        this.game = data.gameName;
        if (data.stats)
            this.stats = data.stats;
        if (data.achievements)
            this.achievements = data.achievements.map((achievement) => new UserAchievement(achievement));
    }
}
