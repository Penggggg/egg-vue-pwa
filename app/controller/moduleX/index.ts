import { Controller, Context } from 'egg';
import { cache } from '../../service/cache';
import * as fs from 'fs';
import * as path from 'path';

const vueSSR = require('vue-server-renderer');

export default class ModuleXCtl extends Controller {

  constructor( ctx: Context ) {
    super( ctx );
  }

  public async render( ) {

    const { ctx } = this;
    const htmlCache = cache.page.checkExisted( ctx.url );

    if ( htmlCache ) {
      return ctx.body = htmlCache;
    }

    try {

      let matchedPath: string = '';
      const serverBundle = require( path.join( __dirname, '../../../dist/moduleX/vue-ssr-server-bundle.json'));
      const clientManifest = require( path.join( __dirname, '../../../dist/moduleX/vue-ssr-client-manifest.json'));

      const renderer = vueSSR.createBundleRenderer( serverBundle, {
        clientManifest,
        runInNewContext: false,
        template: fs.readFileSync( path.join( __dirname, '../../web/page/moduleX/index.template.html'), 'utf-8'),
      });

      const html = await renderer.renderToString({ title: 'moduleX', url: ctx.url, cb: matchedData => {
        matchedPath = matchedData;
      }});

      cache.page.set( matchedPath, html );
      ctx.body = html;

    } catch ( e ) {
      ctx.body = e;
    }

  }

}
