import { Context, Service } from 'egg';
import pageCahe from './page';

export default class LRUCache extends Service {

    public page = new pageCahe( );

    constructor( ctx: Context ) {
        super( ctx );
    }

};