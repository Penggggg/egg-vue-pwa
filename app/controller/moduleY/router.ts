import { Application } from 'egg';

const baseUrl = '/moduleY';

/**
 * @param { GET /moduleX/:any } 渲染
 */
export const moduleYRoter = ( app: Application ) => {
    const { router, controller } = app;
    if ( !!router && !!controller ) {
        router.get(`${baseUrl}(/.+)?`, controller.moduleY.index.render );
    }
    return;
};