/** Server regions as indicated by https://developer.valvesoftware.com/wiki/Sv_region */
export var ServerRegion;
(function (ServerRegion) {
    ServerRegion[ServerRegion["USEast"] = 0] = "USEast";
    ServerRegion[ServerRegion["USWest"] = 1] = "USWest";
    ServerRegion[ServerRegion["SouthAmerica"] = 2] = "SouthAmerica";
    ServerRegion[ServerRegion["Europe"] = 3] = "Europe";
    ServerRegion[ServerRegion["Asia"] = 4] = "Asia";
    ServerRegion[ServerRegion["Australia"] = 5] = "Australia";
    ServerRegion[ServerRegion["MiddleEast"] = 6] = "MiddleEast";
    ServerRegion[ServerRegion["Africa"] = 7] = "Africa";
    ServerRegion[ServerRegion["World"] = 255] = "World";
})(ServerRegion || (ServerRegion = {}));
/** Game server as returned by getServers */
export default class Server {
    /** The SteamID of this game server */
    id;
    /** Server address of the form IPv4:PORT */
    address;
    /** App ID this server is hosting */
    appID;
    /** The directory the game is from */
    gameDir;
    /** GMS Index. Not sure what this means */
    gmsIndex;
    /** Is this server LAN only */
    lan;
    /** The port this server is running on */
    port;
    /** Server region */
    region;
    /** Is this server VAC secured */
    secure;
    /** Server specPort. Not sure what this means */
    specPort;
    /** Requirements for clients to join server */
    reject;
    constructor(data) {
        this.id = data.steamid;
        this.address = data.addr;
        this.appID = data.appid;
        this.gameDir = data.gamedir;
        this.gmsIndex = data.gmsindex;
        this.lan = data.lan;
        this.port = data.gameport;
        this.region = data.region;
        this.secure = data.secure;
        this.specPort = data.specport;
        this.reject = data.reject;
    }
}
