import { Application } from 'egg';
import { moduleYRoter } from './controller/moduleY/router';
import { moduleXRoter } from './controller/moduleX/router';

export default (app: Application) => {
  const { controller, router } = app;

  moduleXRoter( app );
  moduleYRoter( app );

};
