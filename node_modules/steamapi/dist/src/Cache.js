export class MemoryCacheMap {
    ttl;
    map;
    constructor(ttl) {
        this.ttl = ttl;
        this.map = new Map();
    }
    get(key) {
        const val = this.map.get(key);
        if (val && val.expiresAt >= Date.now()) {
            this.map.delete(key);
            return;
        }
        return val?.data;
    }
    set(key, value) {
        this.map.set(key, {
            expiresAt: Date.now() + this.ttl,
            data: value,
        });
        return value;
    }
}
