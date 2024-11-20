export default class User {
    /** This user's Steam ID */
    steamID: string;
    constructor(data: any);
    /** The permalink to this user's profile */
    get profileURL(): string;
}
