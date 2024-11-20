import GameInfoBasic from './GameInfoBasic.js';
export default class GameInfo extends GameInfoBasic {
    /** If this game has community visible stats */
    hasCommunityVisibleStats;
    /** If this game has leaderboards */
    hasLeaderboards;
    /** Descriptor IDs. Not sure what this means. Usually undefined */
    descriptorIDs;
    constructor(data) {
        super(data);
        this.hasCommunityVisibleStats = Boolean(data.has_community_visible_stats);
        this.hasLeaderboards = Boolean(data.has_leaderboards);
        this.descriptorIDs = data.content_descriptorids;
    }
}
