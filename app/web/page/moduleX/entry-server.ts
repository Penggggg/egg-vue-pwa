import { createApp } from './app';

/**
 * @argument context { cb: matchedPath => // ... }
 */
export default ( context ) => {
    return new Promise(( resolve, reject ) => {
        const { app, router, store } = createApp( );
        router.push( context.url );
        router.onReady(( ) => {
            const matchedComponents = router.getMatchedComponents( );
            if (!matchedComponents.length) {
                context.cb( null );
                return reject( 404 );
            }
            const matches = router.currentRoute.matched;
            const matchedPath = matches[ matches.length - 1 ].path;
            Promise.all( matchedComponents.map( Component => {
                if ( Component.asyncData ) {
                    return Component.asyncData({
                        store,
                        route: router.currentRoute
                    });
                }
            })).then(( ) => {
                context.state = store.state;
                context.cb( matchedPath );
                resolve( app );

            }).catch( reject );
        }, reject );
    });
}