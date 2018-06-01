import * as fs from 'fs';
import * as path from 'path';
import { Controller } from 'egg';
import serverApp from '../web/entry-server';
 
const vueSSR = require('vue-server-renderer');

const serverBundle = require( path.join( __dirname, '../../dist/vue-ssr-server-bundle.json'));
const clientManifest = require( path.join( __dirname, '../../dist/vue-ssr-client-manifest.json'));

const renderer = vueSSR.createBundleRenderer( serverBundle, {
  clientManifest,
  runInNewContext: false,
  template: fs.readFileSync( path.join( __dirname, '../web/index.template.html'), 'utf-8'),
});

export default class HomeController extends Controller {

  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async tovue( ) {
    const { ctx } = this;
    // const app = serverApp({ url: ctx.url });

    try {
      const html = await renderer.renderToString({ title: 'asdasdasd' });
      ctx.body = html;
    } catch ( e ) {
      ctx.body = e;
    }
  }

}
