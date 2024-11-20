export interface CacheMap<K, V> {
    get(key: K): V | undefined;
    set(key: K, value: V): V;
}
export declare class MemoryCacheMap<K, V> implements CacheMap<K, V> {
    private ttl;
    private map;
    constructor(ttl: number);
    get(key: K): V | undefined;
    set(key: K, value: V): V;
}
