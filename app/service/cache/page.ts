
import * as LRU from 'lru-cache';

/**
 * @method checkExisted 检验当前请求路径 是否存在 缓存页面，存在则返回
 * @method set set
 * @method get get
 */
export default class PageCache {

    private fix = 'page$';
    private cache: LRU.Cache<any, any>;
    constructor( ) {
        this.cache = LRU({
            max: 500,
            maxAge: 1000 * 60 * 60 * 24 * 30,
        });
    }

    public checkExisted( reqUrl: string ) {

        /**
         * 匹配思路如下 并最终返回 cache.key || null
         * const path = '/page/detail/:id/haha/:sex';
         * const req = '/page/detail/123/haha/man'
         * ["", "page", "detail", ":id", "haha", ":sex"]
         * ["", "page", "detail", "123", "haha", "man"]
         */
        const currentKey = `${this.fix}.${reqUrl}`;
        const hit = this.cache.keys( ).find(( pathName: string ) => {

            const reqUrlMetaArr = currentKey.split('/');
            const pathNameMetaArr = pathName.split('/');

            if ( reqUrlMetaArr.length !==  pathNameMetaArr.length ) {
                return false;
            }

            return pathNameMetaArr.every(( pathMeta, index ) => {
                if ( pathMeta.indexOf(':') === 0 ) {
                    return true;
                }
                return pathMeta === reqUrlMetaArr[ index ];
            });

        });
        return this.get( hit );

    }

    public set( key: string, val: string ) {
        console.log('----------set page cache---------', key );
        this.cache.set( `${this.fix}.${key}`, val );
    }

    public get( key: string ) {
        console.log('----------get page cache---------', key );
        return   this.cache.has( key ) ?
                    this.cache.get( key ) :
                    null;
    }

}