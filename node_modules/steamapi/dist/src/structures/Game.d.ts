export default class Game {
    /** App ID for this game */
    id: number;
    constructor(data: any);
    /** (might not exist) large sized header used on the store page */
    get headerURL(): string;
    /** (might not exist) medium sized header image */
    get headerMediumURL(): string;
    /** (might not exist) small header image used on user pages */
    get smallHeaderURL(): string;
    /** (might not exist) tiny header image used on app bundles */
    get tinyHeaderURL(): string;
    /** (might not exist) game page background */
    get backgroundURL(): string;
    /** (might not exist) game cover */
    get coverURL(): string;
    /** (might not exist) transparent game logo*/
    get logoURL(): string;
}
