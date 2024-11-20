import Game from './Game.js';
const communityBase = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps';
export default class GameInfoBasic extends Game {
    /** Name for this game */
    name;
    /** Hash for this game's icon */
    icon;
    constructor(data) {
        super(data);
        this.name = data.name;
        this.icon = data.img_icon_url;
    }
    /** tiny app icon */
    get iconURL() { return `${communityBase}/${this.id}/${this.icon}.jpg`; }
}
