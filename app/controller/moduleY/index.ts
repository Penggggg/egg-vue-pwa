import * as fs from 'fs';
import * as path from 'path';
import { Controller } from 'egg';
 
const vueSSR = require('vue-server-renderer');

export default class ModuleYCtl extends Controller {

  public async render( ) {

    const { ctx } = this;
    try {

      const serverBundle = require( path.join( __dirname, '../../../dist/moduleY/vue-ssr-server-bundle.json'));
      const clientManifest = require( path.join( __dirname, '../../../dist/moduleY/vue-ssr-client-manifest.json'));

      const renderer = vueSSR.createBundleRenderer( serverBundle, {
        clientManifest,
        runInNewContext: false,
        template: fs.readFileSync( path.join( __dirname, '../../web/page/moduleY/index.template.html'), 'utf-8'),
      });

      const html = await renderer.renderToString({ title: 'moduleX', url: ctx.url });
      ctx.body = html;
    } catch ( e ) {
      ctx.body = e;
    }

  }

}
