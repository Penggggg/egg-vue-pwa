import * as fs from 'fs';
import * as path from 'path';
import { Controller } from 'egg';
 
const vueSSR = require('vue-server-renderer');

export default class ModuleXCtl extends Controller {

  public async render( ) {

    const { ctx } = this;

    const serverBundle = require( path.join( __dirname, '../../../dist/moduleX/vue-ssr-server-bundle.json'));
    const clientManifest = require( path.join( __dirname, '../../../dist/moduleX/vue-ssr-client-manifest.json'));

    const renderer = vueSSR.createBundleRenderer( serverBundle, {
      clientManifest,
      runInNewContext: false,
      template: fs.readFileSync( path.join( __dirname, '../../web/page/moduleX/index.template.html'), 'utf-8'),
    });

    try {
      const html = await renderer.renderToString({ title: 'moduleX', url: '/' });
      ctx.body = html;
    } catch ( e ) {
      ctx.body = e;
    }

    // const renderer = vueSSR.createRenderer( );

    // try {
    //   creatApp({ url: ctx.url }).then( app => {
    //     renderer.renderToString( app )
    //   })
    //   const app = await creatApp({ url: ctx.url });
    //   console.log( app );
    //   const html = await renderer.renderToString( app );
    //   console.log( html );

    //   ctx.body = html;

    // } catch ( e ) {
    //   ctx.body = e;
    // } 
  }

}
