export default class NewsPost {
    /** ID for this post */
    id: string;
    /** Title for this post */
    title: string;
    /** Link to this post */
    url: string;
    /** Whether the URL is external */
    urlExternal: boolean;
    /** Name of the post's author */
    author: string;
    /** Content of the post */
    content: string;
    /** Unix Timestamp for when the post was published  */
    publishedTimestamp: number;
    /** Human readable label to be display on feed */
    feed: string;
    /** API name of feed this was posted to */
    feedName: string;
    /** Feed type. Not sure what this is. Seems to always be 1 */
    feedType: number;
    /** App ID this news pertains to */
    appID: number;
    /** Tags associated with this post */
    tags?: string[];
    constructor(data: any);
    /** Date when this post was published */
    get publishedAt(): Date;
}
