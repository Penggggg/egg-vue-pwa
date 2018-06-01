import { Application } from 'egg';

const baseUrl = '/moduleX';

/**
 * @param { GET / } 首页
 */
export const moduleXRoter = ( app: Application ) => {
    const { router, controller } = app;
    if ( !!router && !!controller ) {
        router.get(`${baseUrl}`, controller.moduleX.index.render );
    }
    return;
};