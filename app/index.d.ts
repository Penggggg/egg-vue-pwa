
import ModuleXCtl from './controller/moduleX';

declare module 'egg' {

    export interface IController {

        moduleX: {
            index: ModuleXCtl
        }

    }

}