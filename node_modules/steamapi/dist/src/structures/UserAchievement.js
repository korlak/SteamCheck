export default class UserAchievement {
    /** API name for this achievement (e.g. ACH03, TF_GET_TURRETKILLS, Champion) */
    name;
    /** Whether the user has unlocked this achievement  */
    unlocked;
    /**
     * Unix Timestamp for when the user unlocked this achievement.
     * Is 0 if the user has not unlocked this achievement. Only defined
     * when calling getUserAchievements()
     */
    unlockedTimestamp;
    constructor(data) {
        this.name = data.apiname;
        this.unlocked = Boolean(data.achieved);
        this.unlockedTimestamp = data.unlocktime;
    }
    /** Date when this achievement was unlocked */
    get unlockedAt() {
        return this.unlockedTimestamp ? new Date(this.unlockedTimestamp * 1000) : undefined;
    }
}
