import * as path from 'path';
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527667248944_3712';

  // add your config here
  config.middleware = [];

  config.static = {
    prefix: '/dist/',
    dir: path.join( appInfo.baseDir, 'dist')
  };

  config.srrCachePage = {
    moduleX: [ ]
  };

  return config;
};
