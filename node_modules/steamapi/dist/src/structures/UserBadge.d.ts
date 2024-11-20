export default class Badge {
    /** This badge's ID */
    id: number;
    /** The user's level for this badge */
    level: number;
    /** UNIX Timestamp for when this badge was completed */
    completedTimestamp: number;
    /** The amount of XP gained towards this badge */
    xp: number;
    /** How many have received this badge	 */
    scarcity: number;
    /** If this badge belongs to a game, this is the app ID of that game */
    appID?: number;
    /** If this badge belongs to a game, this is the community item ID for the badge */
    communityItemID?: number;
    /** If this badge belongs to a game, this is the border color for the badge. (note: seems to always be 0) */
    borderColor?: number;
    constructor(data: any);
    /** Date when this badge was completed */
    get completedAt(): Date;
}
