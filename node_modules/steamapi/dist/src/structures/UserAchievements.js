import User from './User.js';
import UserAchievement from './UserAchievement.js';
export default class UserAchievements extends User {
    /** Name of this game */
    game;
    /** All the achievements for this game with respect to the user */
    achievements;
    constructor(data) {
        super(data);
        this.game = data.gameName;
        this.achievements = data.achievements.map((achievement) => new UserAchievement(achievement));
    }
}
