// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import ModuleXIndex from '../../../app/controller/moduleX/index';
import ModuleXRouter from '../../../app/controller/moduleX/router';
import ModuleYIndex from '../../../app/controller/moduleY/index';
import ModuleYRouter from '../../../app/controller/moduleY/router';

declare module 'egg' {
  interface IController {
    moduleX: {
      index: ModuleXIndex;
      router: ModuleXRouter;
    };
    moduleY: {
      index: ModuleYIndex;
      router: ModuleYRouter;
    };
  }
}
