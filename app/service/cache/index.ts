import { Context, Service } from 'egg';
import pageCahe from './page';

/**
 * ! 编写时，发现egg里面的service并不是单利模式，而是每调用一次，创建一个服务实例..
 * 这里破坏了 egg 规范的项目结构，以创建一个单例服务
 */
class LRUCache {

    public page = new pageCahe( );

};

export const cache = new LRUCache( );