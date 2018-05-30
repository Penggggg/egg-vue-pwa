import * as fs from 'fs';
import * as path from 'path';
import { Controller } from 'egg';

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
    const app = new Vue({
      data: {
        url: ctx.url,
      },
      template: `<div>访问的 URL 是： {{ url }}</div>`
    });

    try {
      const html = await renderer.renderToString( app, { title: 'asdasdasd' });
      ctx.body = html;
    } catch ( e ) {
      ctx.body = e;
    }
  }

}
