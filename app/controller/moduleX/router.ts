import { Application } from 'egg';

const baseUrl = '/moduleX';

/**
 * @param { GET /moduleX/:any } 渲染
 */
export const moduleXRoter = ( app: Application ) => {
    const { router, controller } = app;
    if ( !!router && !!controller ) {
        router.get(`${baseUrl}(/.+)?`, controller.moduleX.index.render );
    }
    return;
};