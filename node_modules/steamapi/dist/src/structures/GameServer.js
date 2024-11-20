/** Game server as returned by getServerList */
export default class GameServer {
    /** Server address of the form IPv4:PORT */
    address;
    /** The port this server is running on */
    port;
    /** The SteamID of this game server */
    id;
    /** Public name of the server */
    name;
    /** App ID this server is hosting */
    appID;
    /** The directory the game is from */
    gameDir;
    /** What version the server is running */
    version;
    /** Product string. Not sure what this means. Is often the same as gameDir */
    product;
    /** Server region */
    region;
    /** Number of players in the server */
    players;
    /** Max number of players that can join the server */
    maxPlayers;
    /** Number of bots in the server */
    bots;
    /** What map the game server is on */
    map;
    /** Is this server VAC secured */
    secure;
    /** Is the server running dedicated */
    dedicated;
    /** What OS the server is running. Typically 'l' or 'w' */
    os;
    /** Game specific sv_tags e.g. hidden,reserved,empty,secure */
    tags;
    constructor(data) {
        this.address = data.addr;
        this.port = data.gameport;
        this.id = data.steamid;
        this.name = data.name;
        this.appID = data.appid;
        this.gameDir = data.gamedir;
        this.version = data.version;
        this.product = data.product;
        this.region = data.region;
        this.players = data.players;
        this.maxPlayers = data.max_players;
        this.bots = data.bots;
        this.map = data.map;
        this.secure = data.secure;
        this.dedicated = data.dedicated;
        this.os = data.os;
        this.tags = data.gametype.split(',');
    }
}
