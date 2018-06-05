
import * as LRU from 'lru-cache';

export default class PageCache {

    private fix = 'page$';
    private cache: LRU.Cache<any, any>;
    constructor( ) {
        this.cache = LRU({
            maxAge: 1000 * 60 * 60 * 24 * 30
        });
    }

    public set( key, val ) {
        this.cache.set( `${this.fix}.${key}`, val );
    }

    public get( key ) {
        return this.cache.get( `${this.fix}.${key}` );
    }

}