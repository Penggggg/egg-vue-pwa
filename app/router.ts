import { Application } from 'egg';
import { moduleXRoter } from './controller/moduleX/router';

export default (app: Application) => {
  const { controller, router } = app;

  moduleXRoter( app );

};
