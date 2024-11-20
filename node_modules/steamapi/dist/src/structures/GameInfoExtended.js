import GameInfo from './GameInfo.js';
export default class GameInfoExtended extends GameInfo {
    /** If this game has a workshop */
    hasWorkshop;
    /** If this game has a market */
    hasMarket;
    /** If this game has DLC */
    hasDLC;
    /** Game's capsule filename. Not sure what this means */
    capsuleFilename;
    /** Name that this game is sorted by */
    sortName;
    constructor(data) {
        super(data);
        this.hasWorkshop = Boolean(data.has_workshop);
        this.hasMarket = Boolean(data.has_market);
        this.hasDLC = Boolean(data.has_dlc);
        this.capsuleFilename = data.capsule_filename;
        this.sortName = data.sort_as;
    }
}
