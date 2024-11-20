import User from './User.js';
export default class UserFriend extends User {
    /** Unix Timestamp representing when the friendship started */
    friendedTimestamp;
    /** The type of the relationship (note: seems to always be 'friend') */
    relationship;
    constructor(data) {
        super(data);
        this.friendedTimestamp = data.friend_since;
        this.relationship = data.relationship;
    }
    /** Date object when this friendship started */
    get friendedAt() {
        return new Date(this.friendedTimestamp * 1000);
    }
}
