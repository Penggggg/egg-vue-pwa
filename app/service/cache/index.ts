import { Context, Service } from 'egg';
import pageCahe from './page';

/**
 * ! 编写时，发现egg里面的service并不是单利模式，而是每调用一次，创建一个服务实例..
 */
class LRUCache {

    public page = new pageCahe( );

};

export const cache = new LRUCache( );