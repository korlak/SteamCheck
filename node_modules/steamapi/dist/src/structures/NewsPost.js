export default class NewsPost {
    /** ID for this post */
    id;
    /** Title for this post */
    title;
    /** Link to this post */
    url;
    /** Whether the URL is external */
    urlExternal;
    /** Name of the post's author */
    author;
    /** Content of the post */
    content;
    /** Unix Timestamp for when the post was published  */
    publishedTimestamp;
    /** Human readable label to be display on feed */
    feed;
    /** API name of feed this was posted to */
    feedName;
    /** Feed type. Not sure what this is. Seems to always be 1 */
    feedType;
    /** App ID this news pertains to */
    appID;
    /** Tags associated with this post */
    tags;
    constructor(data) {
        this.id = data.gid;
        this.title = data.title;
        this.url = data.url;
        this.urlExternal = data.is_external_url;
        this.author = data.author;
        this.content = data.contents;
        this.publishedTimestamp = data.date;
        this.feed = data.feedlabel;
        this.feedName = data.feedname;
        this.feedType = data.feed_type;
        this.appID = data.appid;
        this.tags = data.tags;
    }
    /** Date when this post was published */
    get publishedAt() {
        return new Date(this.publishedTimestamp * 1000);
    }
}
