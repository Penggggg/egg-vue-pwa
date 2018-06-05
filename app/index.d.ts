
import ModuleXCtl from './controller/moduleX';

import CacheService from './service/cache';

declare module 'egg' {

    export interface IController {

        moduleX: {
            index: ModuleXCtl
        }
    }

    export interface IService {

        cache: {
            index: CacheService
        }

    }

}