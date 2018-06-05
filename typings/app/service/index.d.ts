// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Test from '../../../app/service/Test';
import CacheIndex from '../../../app/service/cache/index';
import CachePage from '../../../app/service/cache/page';

declare module 'egg' {
  interface IService {
    test: Test;
    cache: {
      index: CacheIndex;
      page: CachePage;
    };
  }
}
