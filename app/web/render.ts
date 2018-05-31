const Vue = require('vue');

export const createApp = ( context ) => new Vue({
    data: {
        url: context.url
    },
    template: `<div>访问aaaaa的 URL 是： {{ url }}</div>`
});