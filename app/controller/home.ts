import * as fs from 'fs';
import * as path from 'path';
import { Controller } from 'egg';
import serverApp from '../web/entry-server';
 
const Vue = require('vue');
const vueSSR = require('vue-server-renderer');
const renderer = vueSSR.createRenderer({
  template: fs.readFileSync( path.join( __dirname, '../web/index.template.html'), 'utf-8')
});

export default class HomeController extends Controller {

  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async tovue( ) {
    const { ctx } = this;
    const app = serverApp({ url: ctx.url });

    try {
      const html = await renderer.renderToString( app, { title: 'asdasdasd' });
      ctx.body = html;
    } catch ( e ) {
      ctx.body = e;
    }
  }

}
