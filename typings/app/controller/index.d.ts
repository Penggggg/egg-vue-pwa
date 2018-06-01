// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Home from '../../../app/controller/home';
import ModuleXIndex from '../../../app/controller/moduleX/index';
import ModuleXRouter from '../../../app/controller/moduleX/router';

declare module 'egg' {
  interface IController {
    home: Home;
    moduleX: {
      index: ModuleXIndex;
      router: ModuleXRouter;
    };
  }
}
